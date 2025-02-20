// Categorylist

// Vælger containeren, hvor kategorierne skal vises (en liste med kategorier).
const categoryListContainer = document.querySelector(".categories_list");

// Bruger fetch til at hente produktdata fra en ekstern API (dummyjson.com)
fetch("https://dummyjson.com/products")
  // Når vi får et svar fra API'en, konverteres det til JSON-format.
  .then((response) => response.json())
  // Når JSON-dataene er modtaget, kalder vi funktionen 'showCategories' og sender produkter som argument.
  .then((data) => showCategories(data.products));

// Funktion der viser kategorierne
function showCategories(products) {
  // Filtrerer produkterne, så kun dem i kategorien "groceries" (madvarer) bliver udvalgt.
  const filteredProducts = products.filter((product) => product.category === "groceries");

  // Mapper de filtrerede produkter for at få første tag (mærke) fra hvert produkt.
  // Derefter filtreres duplikaterne ud, så kun unikke tags bliver tilbage.
  const uniqueTags = filteredProducts
    .map((product) => product.tags[0]) // Vælger første tag fra hvert produkt.
    .filter((tag, index, self) => self.indexOf(tag) === index); // Fjerner duplikater ved at sammenligne første forekomst af hvert tag.

  // Bygger HTML-struktur til de unikke tags (kategorier) og linker til en produktside for hver tag.
  const markup = uniqueTags
    .map(
      (tag) =>
        // For hver tag genereres et link, der peger på en produktside med kategorien som parameter i URL'en.
        `<a href="/produktliste/produktliste.html?category=${tag}">
             <li class="list_item">${tag}</li>
         </a>`
    )
    // Samler alle de genererede HTML-strenge til én enkelt streng.
    .join("");

  // Sætter den genererede HTML-struktur ind i 'categoryListContainer', så den bliver vist på siden.
  categoryListContainer.innerHTML = markup;
}

// motto button function

// Get the button element
const aboutButton = document.getElementById("aboutButton");

// Tilføj en eventlistener til knappen
aboutButton.addEventListener("click", function () {
  // Sender brugeren til "about.html" når man trykker på knappen
  window.location.href = "about.html";
});

// Slideshow

// https://www.w3schools.com/howto/howto_js_slideshow.asp

// Initialiserer slideIndex til 0, hvilket betyder, at første slide vises ved første indlæsning.
let slideIndex = 0;

// Kald funktionen 'showSlides' for at vise den første slide ved indlæsning.
showSlides();

// Funktion, der ændrer slideIndex baseret på input (n) og viser den nye slide.
function plusSlides(n) {
  slideIndex += n; // Øg eller mindsk slideIndex med n (1 eller -1).
  showSlides(); // Kald 'showSlides' for at opdatere visningen af slides.
}

// Funktion, der viser den aktuelle slide og skjuler de andre slides.
function showSlides() {
  // Hent alle slides (elementer med klassen "mySlides").
  let slides = document.getElementsByClassName("mySlides");

  // Hvis slideIndex er større end eller lig med antallet af slides, sæt slideIndex tilbage til 0 (første slide).
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Hvis slideIndex er mindre end 0 (negative værdier), sæt slideIndex til den sidste slide.
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Skjul alle slides ved at ændre deres display-stil til "none".
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Vis den aktuelle slide ved at ændre dens display-stil til "block".
  slides[slideIndex].style.display = "block";
}
