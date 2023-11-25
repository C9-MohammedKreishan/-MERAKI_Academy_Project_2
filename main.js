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
    description:
      "This book helps students get to grips with JavaScript fundamentals and apply them in code. It covers the components needed to write scripts, shows you how to apply JavaScript to create interactive web pages, and contains many exercises to get hands-on experience. <br><br>  Understanding the building blocks of JavaScript provides a foundation for your own applications, and the quick guides on HTML and JSON really make it the only book you’ll need when learning JavaScript for web development.",
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
Cart = [];

const body = $("body");
const logo = $(
  '<header><img src="./Logo.jpg" id="logo"></img> <h3>Home</h3> <h3>Contact us</h3></header>'
);
const main = $('<div class= "books"></div>');
main.appendTo(body);
const footer = $("<footer>Home</footer>");
const categories = $(
  "<div> Categories <select> <option>History</option><option>Anime</option></select></div>"
);
const CartImg = $('<img src="./cart.png" class=cart-img></img>');
categories.appendTo(logo);
CartImg.appendTo(logo);
const BooksInCart = $(`<div class="Books-In-Cart"><div>`);
const CartItems = $(`<div class="all-books-in-cart"></div>`);
CartItems.appendTo(body);
logo.appendTo(body);

// Function shows a single book Title, image and description.
const showSingleBook = (e) => {
  $(".books").hide();
  $("Add-to-cart").on("click", function () {
    AddToCart(e);
  });
  $(CartImg).on("click", showCart);
  let newItem = helpCart(e);
  const singleBook = $(
    `<div class= "single-book"><div class="book-title"><h3> ${newItem.title}</h3> <img src= "${newItem.imageSrc}"></img> <button class= "Add-to-cart">ADD To Cart</button></div><div class= "paragraphs"><p>${newItem.description}</p> <p class= "rate">Mollitia cumque quos nemo dolore, excepturi a pariatur illum iure quod dolores?</p></div></div>`
  );
  singleBook.appendTo(body);
};

// Add to Cart function
const AddToCart = (e) => {
  let newItem = helpCart(e);
  const item = $(
    `<div class="book-in-cart"> <h3>${newItem.title}</h3> <img src=${newItem.imageSrc}></img></div>`
  );
  item.appendTo(CartItems);
  Cart.push(newItem);
};

// Show the Cart items (what we added to cart)

const showCart = () => {
  $(".books").hide();
  $(".View-book").hide();
  $(".all-books-in-cart").show();
};

//help function
const helpCart = (e) => {
  let tempObj = {};
  BOOKS.forEach((element) => {
    if (element.title === $(e).parent().find("h3").html()) {
      tempObj.title = element.title;
      tempObj.imageSrc = element.imageSrc;
      tempObj.description = element.description;
    }
  });
  return tempObj;
};

// Show all books function (Start function)
const show_books = () => {
  BOOKS.forEach((element) => {
    const Book = $(
      `<div class="book"> <h3>${element.title}</h3> <img src=${element.imageSrc}></img></div>`
    );
    Book.appendTo(main);
    const viewBook = $(`<button class="View-book">View</button>`);
    viewBook.appendTo(Book);
    const addToCart = $(`<button class= "Add-to-cart">ADD TO Cart</button>`);
    addToCart.appendTo(Book);

    addToCart.on("click", function () {
      AddToCart(this);
    });
  });
  $(".all-books-in-cart").hide();

  $(".View-book").on("click", function () {
    showSingleBook(this);
  });
  $("#logo").on("click", () => {
    $(".books").show();
    $(".single-book").hide();
    $(".all-books-in-cart").hide();
  });
  $(CartImg).on("click", showCart);

  footer.appendTo(body);
};
show_books();
