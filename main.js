const BOOKS = [
  {
    id: 1,
    title: "The Sun and Her Flowers",
    author: "Rupi Kaur",
    imageSrc: "./1.jpg",
    description: `From rupi kaur, the #1 New York Times bestselling author of milk and honey, comes her long-awaited second collection of poetry. A vibrant and transcendent journey about growth and healing. Ancestry and honoring one’s roots. Expatriation and rising up to find a home within yourself. <br> <br>Divided into five chapters and illustrated by kaur, the sun and her flowers is a journey of wilting, falling, rooting, rising, and blooming. A celebration of love in all its forms.`,
    rate: "⭐⭐⭐⭐⭐",
    price: 22,
    type: "",
  },
  {
    id: 2,
    title: "Frozen Rivers",
    author: " Justin Farley ",
    imageSrc: "./2.jpg",
    description: `Frozen River is a poetry collection that centers around both nature and mental health. The poetry book is split into two sections: "Frozen Grounds" and "Frozen Hearts" which alternate every other poem.

    "Frozen Grounds" is a selection of nature poetry about the season of winter. Poems about snow, dreary days, lack of light, dealing with the cold, the beauty of nature's silence, etc.
    
    "Frozen Hearts" is a selection of poetry about mental health and the poet's own struggle with mental illness. Poems about anxiety, depression, bipolar disorder, seasonal affective disorder, loneliness, heartbreak, hope, and healing.`,
    rate: "⭐⭐⭐⭐",
    price: 12,
    type: "",
  },
  {
    id: 3,
    title: "Blossoms of Hope",
    author: "Justin Farley",
    imageSrc: "./3.jpg",
    description: "some description about book and author",
    rate: "⭐⭐⭐⭐⭐",
    price: 22,
    type: "",
  },
  {
    id: 4,
    title: "The Photo Ark",
    author: "Joel Sartore ",
    imageSrc: "./4.jpg",
    description:
      "Sartore is circling the globe, visiting zoos and wildlife rescue centers to create studio portraits of 12,000 species, with an emphasis on those facing extinction. With a goal of photographing every animal in captivity in the world, he has photographed more than 6,000 already and now, thanks to a multi-year partnership with National Geographic, he may reach his goal. This book showcases his animal portraits: from tiny to mammoth, from the Florida grasshopper sparrow to the greater one-horned rhinoceros. Paired with the eloquent prose of veteran wildlife writer Douglas Chadwick, and an inspiring foreword from Harrison Ford, this book presents a thought-provoking argument for saving all the species of our planet.",
    rate: "⭐⭐⭐",
    price: 22,
    type: "",
  },
  {
    id: 5,
    title: "World War II Map by Map",
    author: "the author",
    imageSrc: "./5.jpg",
    description: "some description about book and author",
    rate: "⭐⭐⭐⭐⭐",
    price: 22,
    type: "History",
  },
  {
    id: 6,
    title: "History of the World Map by Map",
    author: "the author",
    imageSrc: "./6.jpg",
    description:
      "This stunning history book for adults starts with the evolution and migration of our oldest ancestors out of Africa. You can then look up maps about the Greece and Persian War, the Mongol Conquests, Medieval Europe's trade routes, and the rise of the Ottomans. Explore maps about the colonisation of North America, the scientific revolution, Napoleon's advances, and Britain's control of India. Then uncover the history of later centuries, such as the Age of Imperialism, the American Civil War, industrialised Europe and the transformation of Japan.",
    rate: "⭐⭐⭐⭐⭐",
    price: 22,
    type: "History",
  },
  {
    id: 7,
    title: "Ultimate Visual History of the World",
    author: " Jean-Pierre Isbouts",
    imageSrc: "./7.jpg",
    description:
      "History comes to life in this comprehensive overview of humankind, from earliest times to the present day. Each page is filled with stunning visuals and thought-provoking text that make this book an instant classic. From the Babylonian Empire to the Persian Gulf War, from the Xia and Shang Dynasties of Bronze Age China to the new space race, from Egyptian hieroglyphics to the digital age―here, in vivid color and crisp narrative, is the sweeping story of the history of civilization.",
    rate: "⭐⭐",
    price: 22,
    type: "History",
  },
  {
    id: 8,
    title: "Backyard Guide to the Birds of North America",
    author: "Jonathan Alderfer",
    imageSrc: "./8.jpg",
    description: `This comprehensive and beloved guide reveals the most ubiquitous and remarkable species of North American birds, clearly organized by family and paired with identification tips, behavior, vocal descriptions, and more. The new edition features a "Backyard Basics" section from the world's most prolific birdwatcher, Noah Strycker, with tips on attracting and feeding your favorite birds and creating bird-friendly landscapes. Also included are updated descriptions of 150 common North American species, paired with comprehensive range maps, as well as lush indentification artwork and bite-sized facts. With new contributions from Strycker and a modern redesign, the second edition of this perennial favorite will appeal to new and experienced bird enthusiasts alike.`,
    rate: "⭐",
    price: 22,
    type: "Poetry",
  },
  {
    id: 9,
    title: "Elon Musk",
    author: " Jean-Pierre Isbouts",
    imageSrc: "./9.jpg",
    description:
      "From the author of Steve Jobs and other bestselling biographies, this is the astonishingly intimate story of the most fascinating and controversial innovator of our era—a rule-breaking visionary who helped to lead the world into the era of electric vehicles, private space exploration, and artificial intelligence. Oh, and took over Twitter.",
    rate: "⭐⭐⭐⭐",
    price: 22,
    type: "Biography",
  },
  {
    id: 10,
    title: "George Washington Dealmaker",
    author: "Cyrus A. Ansary",
    imageSrc: "./10.jpg",
    description:
      "Drawing on substantial new material, Cyrus A. Ansary gives a riveting account of how George Washington sought to put in place in America an economic system that was the antithesis of what had existed in the colonies under British rule. The entrepreneurial economy – which nurtures and rewards innovation and inventiveness – did not sprout into being in the United States by sheer happenstance. It was put in place by our first President. He painstakingly laid the foundation for it, but it did not take root without a struggle. He needed extraordinary tenacity to overcome fierce opposition to his program.President Washington’s economic initiatives are the least well understood facets of Washington’s busy and productive life. They enlarged the dreams and opportunities of Americans, led to a flourishing entrepreneurial climate, and are an inspiring tale for our time.",
    rate: "⭐⭐⭐⭐",
    price: 22,
    type: "Biography",
  },
  // {},...
];

const Cart = JSON.parse(localStorage.getItem("Cart")) || [];
const body = $("body");
const logo = $(
  '<header><img src="./Logo.jpg" id="logo"></img> <h3 class="home">Home</h3> <h3 class="contact-us">Contact us</h3></header>'
);
const main = $(
  '<div class= "books"><img class="welcome-img" src="./welcome.jpg"></div>'
);
main.appendTo(body);
const footer = $(`<footer><h3 class="home">Home</h3></footer>`);
footer.appendTo(body);

/* ================================== Categories ========================================================================== */
const categories = $(
  `<div class="categories"> Categories 
  <select class="categories-option"> 
  <option id ="option-1">History</option>
  <option id ="option-2">Novel</option >
  <option id ="option-3">Children's Books</option>
  <option id ="option-4">Poetry</option>
  <option id ="option-5">Biography</option>
  <option id ="option-6">Mystery</option>
  <option id ="option-7">Thrillers</option>
  </select>
  </div>`
);
categories.appendTo(logo);
const bookInCategory = $(`<div class="Books-In-Categories"><div>`);

// Select category
const selectCategories = (e) => {
  $(".books").hide(100);
  $(".single-book").hide();
  $(".contact-us-container").hide();
  $(".all-books-in-cart").hide();

  let NewBooks = [];
  bookInCategory.html("");
  console.log(e.target.value);
  BOOKS.forEach((element, indx) => {
    if (element.type === e.target.value) {
      NewBooks.push(element);
    }
  });
  console.log(NewBooks[0].title);


  NewBooks.forEach((element, indx) => {
    const item = $(
      `<div class="book-in-Categories">
      <h3>${element.title}</h3> 
      <img src=${element.imageSrc}></img>
      <button class="View-book">View</button>
      <button class= "Add-to-cart">ADD TO Cart</button>
      </div>`
    );
    item.appendTo(bookInCategory);
  });

  bookInCategory.appendTo(body);

  $(`.Books-In-Categories`).show();

  $(".View-book").on("click", function () {
    showSingleBook(this);
  });
  $(".Add-to-cart").on("click", function () {
    AddToCart(this);

  });
};
/* ========================================================================================================================== */

let totalPrice = 0;
const CartBand = $(
  `<div class=cart-band>  In cart ${Cart.length} items && total price is ${totalPrice}</div>`
);
CartBand.appendTo(logo);
const CartImg = $('<img src="./cart.png" class=cart-img></img>');
CartImg.appendTo(logo);
const BooksInCart = $(`<div class="Books-In-Cart"><div>`);
const CartItems = $(`<div class="all-books-in-cart"></div>`);
CartItems.appendTo(body);
logo.appendTo(body);

/* ============================ /Function shows contact us Page =================================================================== */

const showContactUs = () => {
  $(".books").hide();
  $(".single-book").hide();
  $(".all-books-in-cart").hide();
  $(`.Books-In-Categories`).hide();

  const contactUs =
    $(`<div class="contact-us-container"><h3>Contact us</h3> <p>Feel free to get in touch with us! Whether you have questions about our products, need assistance with an order, or just want to say hello, our friendly team is here to help. Your feedback is important to us.<br> </p>
  <div class="logos-class">
  <img id="email-logo" src="./email_logo.jpg"> <p id="email-address">info@bookstore.com</p> 
  <img id="phone-logo" src="./phone.png"> <p id="phone-number">009627787878787</p>
  <img id="location-logo" src="./Location.jpg"> <p id="Location"> Crossville, TN, United States</p></div>
  </div>`);
  contactUs.appendTo(body);
  $(".categories-option").on("change", (e) => {
    selectCategories(e);
  });
};

/* ============================================================================================================================== */
/* ============================ Function shows a single book Title, image and description.=========================================*/

const showSingleBook = (e) => {
  $(".books").hide(100);
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();

  let newItem = helpCart(e);
  const singleBook = $(
    `<div class= "single-book">
    <div class="book-title">
    <h3> ${newItem.title}</h3> 
    <img src= "${newItem.imageSrc}"></img>
    <button class= "Add-to-cart">ADD To Cart</button>
    </div>
    <div class= "paragraphs">
    <p>${newItem.description}</p> 
    <p class= "rate">Rating : ${newItem.rate} <br> <br>Price: ${newItem.price}$</p>
    </div>
    </div>`
  );

  singleBook.appendTo(body);
  $(".Add-to-cart").on("click", function () {
    AddToCart(e);

  });

  $(".categories-option").on("change", (e) => {
    selectCategories(e);
  });
};
/* ================================================================================================================================ */

//* ========================== Show the Cart items (what we added to cart) ======================================================== */

const showCart = () => {
  let totalPrice = 0;
  CartItems.html("");
  $(".books").hide(100);
  $(".single-book").hide();
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();


  Cart.forEach((element, indx) => {
    const item = $(
      `<div class="book-in-cart"> <h3>${element.title}</h3> <img src=${element.imageSrc}></img> <button class="remove-btn">Remove</button></div>`
    );
    totalPrice = totalPrice + element.price;
    item.appendTo(CartItems);
  });
  const CartBand = $(
    `<div class=cart-band>  In cart ${Cart.length} items && total price is ${totalPrice}</div>`
  );
  CartBand.appendTo(logo);
  $(".all-books-in-cart").show();
  $(".categories-option").on("change", (e) => {
    selectCategories(e);
  });
  $(".remove-btn").on("click", function () {
    RemoveFromCart(this);
  });
};
// Remove from Cart
const RemoveFromCart = (e) => {
  $(e).parent().remove();
  Cart.shift();
  let tostring = JSON.stringify(Cart);
  localStorage.setItem("Cart", tostring);
};

// Add to Cart function
const AddToCart = (e) => {
  console.log(e);
  let newItem = helpCart(e);
  Cart.push(newItem);
  let tostring = JSON.stringify(Cart);
  localStorage.setItem("Cart", tostring);
};

//help function
const helpCart = (e) => {
  let tempObj = {};
  BOOKS.forEach((element) => {
    if (element.title === $(e).parent().find("h3").html()) {
      tempObj.title = element.title;
      tempObj.imageSrc = element.imageSrc;
      tempObj.description = element.description;
      tempObj.price = element.price;
      tempObj.rate = element.rate;
    }
  });
  return tempObj;
};
/* ==================================================================================================================================== */

// ============================== Show all books function (Start function)===============================================================
const show_books = (q) => {
  q.forEach((element) => {
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
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();

  $(".View-book").on("click", function () {
    showSingleBook(this);
  });
  $(".categories-option").on("change", (e) => {
    selectCategories(e);
  });
};

/* ============================================================================================================================= */

/* === Listening to cart img and home =====*/

$(CartImg).on("click", showCart);

$("#logo").on("click", () => {
  $(".books").show();
  $(".single-book").hide();
  $(".all-books-in-cart").hide();
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();

});

$(".home").on("click", () => {
  $(".books").show();
  $(".single-book").hide(100);
  $(".all-books-in-cart").hide(100);
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();

});
$(".categories-option").on("change", (e) => {
  selectCategories(e);
});
$(".contact-us").on("click", showContactUs);

show_books(BOOKS);
