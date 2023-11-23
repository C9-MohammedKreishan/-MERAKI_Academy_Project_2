const BOOKS = [
  {
    id: 1,
    title: "HTML and CSS: Design and Build Websites",
    author: "the author",
    imageSrc: "./1.jpg",
    description: "some description about book and author",
    rate: 8,
    price: 22,
  },
  {
    id: 2,
    title: "Interactive Front-End Web Development",
    author: "the author",
    imageSrc: "./2.jpg",
    description: "some description about book and author",
    rate: 8,
    price: 22,
  },
  {
    id: 3,
    title: "PHP & MySQL: Server-side Web Development",
    author: "the author",
    imageSrc: "./3.jpg",
    description: "some description about book and author",
    rate: 8,
    price: 22,
  },
  {
    id: 4,
    title: "JavaScript from Beginner to Professional",
    author: " Laurence Lars Svekis",
    imageSrc: "./4.jpg",
    description: "This book helps students get to grips with JavaScript fundamentals and apply them in code. It covers the components needed to write scripts, shows you how to apply JavaScript to create interactive web pages, and contains many exercises to get hands-on experience. <br><br>  Understanding the building blocks of JavaScript provides a foundation for your own applications, and the quick guides on HTML and JSON really make it the only book you’ll need when learning JavaScript for web development.",
    rate: 8,
    price: 22,
  },
  {
    id: 5,
    title: "about book",
    author: "the author",
    imageSrc: "./1.jpg",
    description: "some description about book and author",
    rate: 8,
    price: 22,
  },
  {
    id: 6,
    title: "about book",
    author: "the author",
    imageSrc: "./2.jpg",
    description: "some description about book and author",
    rate: 8,
    price: 22,
  },
  // {},...
];

const body = $("body");
const logo = $(
  '<header><img src="./Logo.jpg" id="logo"></img> <h3>Home</h3> <h3>Contact us</h3> <img src="./cart.png"></header>' 
);
const main = $('<div class= "books"></div>');
const footer = $("<footer>Home</footer>");
const categories = $(
  "<div> Categories <select> <option>History</option><option>Anime</option></select></div>"
);
categories.appendTo(logo);

logo.appendTo(body);



const showSingleBook = (e) => {
  $(".books").hide();
  console.log($(e).parent().html())
  console.log($(e).parent().find("p").html());
  let tempSrc = ""
  let tempDiscription = ""

BOOKS.forEach((element) => {
  if (element.title === $(e).parent().find("h3").html()) {
    console.log($(e).parent().find("h3").html());
    tempSrc = element.imageSrc
    tempDiscription = element.description
  }
})
  const singleBook = $(
    `<div class= "single-book"><div class="book-title"><h3> ${$(e).parent().find("h3").html()}</h3> <img src= "${tempSrc}"></img> <button class= "Add-to-cart">ADD To Cart</button></div><div class= "paragraphs"><p>${tempDiscription}</p> <p class= "rate">Mollitia cumque quos nemo dolore, excepturi a pariatur illum iure quod dolores?</p></div></div>`
  );
  $("Add-to-cart").on("click", () => {
    Cart.push({ bookname: element.title});
    console.log(Cart);
    })
  singleBook.appendTo(body);
};



main.appendTo(body);
Cart = [];

const AddToCart = () => {
  console.log($(".book>h3").html());
  Cart.push($(".book>h3").html());

  console.log(Cart);
};

const show_books = () => {
  BOOKS.forEach((element) => {
    const Book = $(
      `<div class="book"> <h3>${
        element.title
      }</h3> <img src=${element.imageSrc}></img><button class="View-book">View</button></div>`
    );
    Book.appendTo(main);
    const addfav = $(` <button class= "Add-to-cart">ADD TO Cart</button>`);
    addfav.appendTo(Book);
    addfav.on("click", () => {
    Cart.push({ bookname: element.title});
    console.log(Cart);
    });
  });

  $(".View-book").on("click", function(){
    // console.log(e.target)
    showSingleBook(this)
  });
  $("#logo").on("click", () => {
    $(".books").show();
    $(".single-book").hide();
  });
  // $(".Add-to-cart").on("click", AddToCart);
  footer.appendTo(body);
};
show_books();
