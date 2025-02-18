const categoryListContainer = document.querySelector(".categories_list");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => showCategories(data.products));

function showCategories(products) {
  const filteredProducts = products.filter((product) => product.category === "groceries");

  const uniqueTags = filteredProducts.map((product) => product.tags[0]).filter((tag, index, self) => self.indexOf(tag) === index);

  const markup = uniqueTags
    .map(
      (tag) =>
        `<a href="/produktliste/produktliste.html?category=${tag}">
             <li class="list_item">${tag}</li>
         </a>`
    )
    .join("");

  categoryListContainer.innerHTML = markup;
}

// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// const shoppingCart = document.querySelector(".shopping_cart");
// const addToBagButton = document.querySelector(".add-to-bag");

// let cartCount = 0;

// addToBagButton.addEventListener("click", function () {
//   cartCount++;

//   shoppingCart.textContent = `Cart(${cartCount})`;

//   if (cartCount > 0) {
//     shoppingCart.style.display = "block";
//   }
// });
