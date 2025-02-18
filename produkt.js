// Henter produkt-ID fra URL'ens query-parametre
const myproduct = new URLSearchParams(window.location.search).get("id");

// Finder HTML-elementet, hvor produktet skal vises
let product_container = document.querySelector(".product_container");

// Henter produktdata fra API'et baseret på produkt-ID
fetch(`https://dummyjson.com/products/${myproduct}`)
  .then((response) => response.json()) // Konverterer responsen til JSON-format
  .then((data) => {
    if (data) {
      showProduct(data); // Kalder funktionen showProduct, hvis data findes
    } else {
      console.error("Produktdata ikke fundet"); // Logger en fejl, hvis data ikke findes
    }
  })
  .catch((error) => {
    console.error("Fejl ved hentning af produktdata:", error); // Logger fejl, hvis API-kaldet fejler
  });

// Funktion til at vise produktdata i HTML
function showProduct(data) {
  product_container.innerHTML = `<div class="image-container">
        <!-- Viser rabatprocent, hvis der er en rabat -->
        <div class="discount">${data.discountPercentage ? data.discountPercentage + "%" : ""}</div>
        <img class="img_productsite"
            src="${data.thumbnail}" alt="${data.title}">
    </div>

    <div class="product-details">
        <h1>${data.title}</h1>

        <div>
            <!-- Viser original pris, hvis der er rabat -->
            <p class="${data.discountPercentage ? " foer_pris" : ""}">${data.price} €</p>
            <!-- Viser rabatteret pris, hvis der er en rabat -->
            <p class="${data.discountPercentage ? "efter_pris" : " hide"}">
                ${(data.price * (1 - data.discountPercentage / 100)).toFixed(2)} €
            </p>
        </div>

        <div class="description">
            <h3>Description</h3>
            <p>${data.description}</p>
        </div>

        <div class="shipping">
            <h2>Shipping</h2>
            <!-- Viser forsendelsesinformation, hvis den findes, ellers vises en standardbesked -->
            <p>${data.shippingInformation || "Ships in 3-5 business days"}</p>
        </div>

        <!-- Viser lagerstatus: "Low stock!" hvis der er mindre end 10 på lager -->
        <p class="low-stock"><em>${data.stock < 10 ? "Low stock!" : "In stock"}</em></p>

        <button class="add-to-bag">ADD TO BAG</button>
    </div>`;
}
