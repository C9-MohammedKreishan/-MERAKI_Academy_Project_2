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
  {
    id: 11,
    title: "Dark State",
    author: "Jason Trapp Thriller",
    imageSrc: "./11.jpg",
    description: `America is under attack. Thousands lie dead after simultaneous strikes across the country. The day will come to be known as Bloody Monday.<br>Jason Trapp, codename ‘Hangman’, was a covert operative whose feats became the stuff of legend. He was the tip of the spear—the man his country unleashed when all hope was lost. <br>
    
    Six months ago, someone sold him out. The Agency listed him as killed in action. He lost everything—and everyone—he held dear.
    
    But Trapp’s not that easy to kill. As his country reels from the deadliest terrorist attacks it has ever witnessed, Trapp’s personal vendetta leads him right back to where he started: duty to his country. The violence, the terror, the assassination of his partner… It’s all connected.`,
    rate: "⭐⭐⭐⭐",
    price: 12,
    type: "Novel",
  },
  {
    id: 12,
    title: "The Asset",
    author: "Saul Herzog",
    imageSrc: "./12.jpg",
    description:
      "When Lance Spector quit the CIA, he swore he was out for good. One more government lie and he would go off the deep end. They could find someone else to do their dirty work. As far as he was concerned, Washington, Langley, the Pentagon could all go to hell.",
    rate: "⭐⭐⭐⭐",
    price: 24,
    type: "Novel",
  },
  {
    id: 13,
    title: " Where Does Prince Henry Go?",
    author: " Brandie Grasso",
    imageSrc: "./13.jpg",
    description:
      `The adventure continues in Book Two of the Royal Pelican Tales.<br>
      Separated from their royal pelican parents by a hurricane, Prince Henry and Princess Henrietta learn to trust the mysterious shaman woman for survival. Under her care, they begin to learn their noble responsibilities as royal pelicans.<br>
      Prince Henry must face his fear of flying and master the skies.<br> Princess Henrietta, robbed of the flight by the hurricane, discovers her own mystical gifts and special destiny.`,
    rate: "⭐⭐⭐⭐⭐",
    price: 14.95,
    type: "Children's Books",
  },
  {
    id: 14,
    title: "The Night the Stars Went Missing",
    author: " Arthur J. Gonzalez",
    imageSrc: "./14.jpg",
    description:
      `In The Night the Stars Went Missing, Winston has spent each night watching the stars glimmer across the skies. When they suddenly go missing, he knows something is wrong, and sets off on a mission to find them. His investigation takes him to the clouds, where he meets a humorous shooting star and discovers that the stars have not just vanished, but that they have gone into hiding. Winston learns that their reason to hide is due to fear — that they, too, shall be next to experience the stress the humans have placed on their friend, planet Earth. It is up to Winston to convince the stars to return.`,
    rate: "⭐⭐⭐",
    price: 16.99,
    type: "Children's Books",
  },
  {
    id: 15,
    title: "Dangerous Habits",
    author: "Susan Hunter",
    imageSrc: "./15.jpg",
    description:
      `In the small town of Himmel, Wisconsin, reporter Leah Nash is scraping by, working again at the local paper that she left a decade ago. But when a torrential storm reveals a gruesome secret - a dead nun from the local school for troubled kids - Leah's quiet life is shattered.

      Sister Mattea was no ordinary nun. She had deep secrets that no one knew. Secrets that might connect the nun’s suspicious death with the tragic accident that took Leah's sister Lacey’s life at the same school years ago.
      
      As Leah delves deeper, she uncovers a web of deceit, corruption, and danger entangling the school's charismatic leaders, wealthy donors, and even her own boss. The deeper she digs, the more she realizes that her sister’s death was no accident, and the nun’s death was no random event.`,
    rate: "⭐⭐⭐⭐",
    price: 17.99,
    type: "Mystery",
  },
  {
    id: 16,
    title: "Telling Lies",
    author: "L. A. Dobbs",
    imageSrc: "./16.jpg",
    description:
      `Sam Mason and Jody Harris don't have the luxury of being off the clock. When a drowning disrupts the funeral of a fellow detective, they have no choice but to leave early. After the body is pulled ashore, Sam and Jody suspect the camper's death was no accident…

      But as they try to unravel the case, they realize that someone in their ranks can’t be trusted and the biggest threat may come from the very top.
      
      When a mysterious dog helps them solve one murder, Sam and Jo finally think they can rest until a shocking discovery proves that sometimes even your most trusted allies could be telling lies.`,
    rate: "⭐⭐⭐⭐",
    price: 18.49,
    type: "Mystery",
  },
  {
    id: 17,
    title: "Vienna at Nightfall",
    author: "Jason Trapp Thriller",
    imageSrc: "./17.jpg",
    description:
      `It is the late 1930s in Europe and the darkness is gathering. The Nazis are marching, both inside Austria and outside. What can one man do to make a difference? Alex Kovacs can see what’s coming – he can, all of his friends can, all of Vienna can. When an opportunity presents itself, a chance to thwart the Nazi invasion of Austria, he agrees to join an espionage network that will take advantage of his regular business trips to Germany to gather secret information. But a personal tragedy soon complicates Alex’s mission and entangles him with a suspicious Gestapo captain in ways that he never anticipated. Vienna at Nightfall is the first book in the Alex Kovacs historical espionage thriller series.`,
    rate: "⭐⭐⭐⭐",
    price: 22,
    type: "Thrillers",
  },
  {
    id: 18,
    title: "Budapest in Pieces",
    author: " Richard Wake",
    imageSrc: "./18.jpg",
    description:
      `Alex Kovacs, an ordinary man and an extraordinary spy, has been dispatched to Budapest with a task that is both simple and complicated. In the years after World War II, it went without saying that the Communists were in charge in Hungary. There was no disputing that reality. But in a nation that ping-ponged between the Communists and the Nazis over the previous decades -- and in a city divided not only by the Danube River but by the brutal memories of the war -- Alex was given the job of finding a way to give the West a peek into the hierarchy that ran what had become a major Cold War foe.`,
      
    rate: "⭐⭐⭐⭐⭐",
    price: 20,
    type: "Thrillers",
  },
  {
    id: 19,
    title: "Adrift in Istanbul",
    author: "Richard Wake",
    imageSrc: "./19.jpg",
    description:
      `Hitler is dead, Germany is dismembered, the entire Western intelligence operation is focused on the growing Soviet threat — and yet, there are people in Istanbul who remain fixated on a war that was supposed to be over. Fixated, and firing away. It is in this maelstrom that Alex Kovacs finds himself in a new thriller by author Richard Wake.
      `,
    rate: "⭐⭐⭐⭐",
    price: 7.7,
    type: "Thrillers",
  },
  {
    id: 20,
    title: "Snowy",
    author: "Sarah Cullen ",
    imageSrc: "./20.jpg",
    description:
      `Snowy is a heart-warming picture book written in lyrical rhyme that will be adored by children, book lovers, teachers and parents.

      Snowy the polar bear cherished Christmas, but what he loved even more was receiving gifts. While heading to the grand polar bear Christmas party, he couldn't stop daydreaming about what present he will get. On his journey, he encountered a curious and lonely lemming. Now, Snowy faced a choice: would he let his impatience rule, or would he pick kindness this Christmas?`,
    rate: "⭐⭐⭐⭐⭐",
    price: 11.78,
    type: "Children's Books",
  },
  // {},...
];
const Users = JSON.parse(localStorage.getItem("Users")) || [];

const Cart = JSON.parse(localStorage.getItem("Cart")) || [];
const body = $("body");
const logo = $(`
  <header> 
  <img src="./Logo.jpg" id="logo"></img>
   <h3 class="home">Home</h3> 
   <h3 class="contact-us">Contact us</h3>
 </header>`);
const main = $(
  '<div class= "books"><img class="welcome-img" src="./welcome.jpg"></div>'
);
main.appendTo(body);
const footer = $(`
<footer>
<h3 class="home">Home</h3>
<h3 class="contact-us">Contact Us</h3>
<h3 class="home">Register</h3>
<h3 class="home">Login</h3>


</div>

</footer>`);

footer.appendTo(body);

/* ==============================  show Register Page ========================================================*/
// const showRegisterPage = () => {
//   $(".books").hide(100);
//   $(".single-book").hide();
//   $(".contact-us-container").hide();
//   $(".all-books-in-cart").hide();
//   const typeEmail = $(`
//   <div class ="Register-page">
//   <div class="input-Name">
//   <h3>Name</h3>
//   <input id="type-name">
//   <h3>Email</h3>
//   <input id="type-email">
//   <h3>Password</h3>
//   <input id="type-password">
//   <button class="SignIn">Sign in</button>
//   </div>
//   </div>`);
//   typeEmail.appendTo(body);
//   $(".SignIn").on("click", function () {
//     adduser(this);
//   });
// };

const adduser = (e) => {
  let newUser = {};
  newUser.Name = $(e).parent().find("#type-name").val();
  newUser.Email = $(e).parent().find("#type-email").val();
  newUser.Password = $(e).parent().find("#type-password").val();
  newUser.Cart = Cart;
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  users[newUser.Name] = newUser;
  localStorage.setItem("users", JSON.stringify(users));
  // let tostring = JSON.stringify(newUser);
  // localStorage.setItem(newUser.Name , tostring);
};
/* ======================================================================================================= */

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
const register = $(` <h3 class="home">Register</h3>`)
register.appendTo(logo)
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
  $(`.Register-page`).hide();
  const contactUs = $(`<div class="contact-us-container">
    <h3>Contact us</h3> 
    <p>Feel free to get in touch with us! Whether you have questions about our products, need assistance with an order, or just want to say hello, our friendly team is here to help. Your feedback is important to us.<br> </p>
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
  $(`.Register-page`).hide();

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
  $(`.Register-page`).hide();



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
  let shouldSkip = false;
  q.forEach((element,indx) => {
    if (shouldSkip) {
      return;
    }
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
    if (indx > 10) {
      shouldSkip = true;
      return;
    }
  });

  $(".all-books-in-cart").hide();
  $(".contact-us-container").hide();
  $(`.Books-In-Categories`).hide();
  $(`.Register-page`).hide();

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

// console.log(bbbSearch);

show_books(BOOKS);
