// Henter værdien af "category" fra URL'en (fx ?category=electronics)
const mycategory = new URLSearchParams(window.location.search).get("category");

// Finder containeren, hvor produkterne skal vises
let listContainer = document.querySelector(".produkt");

// Hvis en kategori er valgt, opdateres sidens overskrift med kategoriens navn
if (mycategory) {
  document.querySelector("h1").innerText = mycategory;
}

// Henter produktdata fra API'et
fetch("https://dummyjson.com/products")
  .then((response) => response.json()) // Konverterer svaret til JSON
  .then((data) => showList(data.products)); // Kalder showList-funktionen med produkterne

function showList(products) {
  // Filtrerer produkterne, så kun dem med den valgte kategori vises
  const filteredProducts = products.filter((product) => product.tags.includes(mycategory));

  // Genererer HTML-markup for de filtrerede produkter
  const markup = filteredProducts
    .map(
      (product) =>
        `<div class="item">
            <div class="image-wrapper">
                <!-- Viser produktbillede -->
                <img class="produkt_img" src="${product.thumbnail}" alt="${product.title}">
                
                <!-- Viser rabatprocent, hvis der er rabat -->
                <div class="discount ${product.discountPercentage ? "" : "hide"}">
                    ${product.discountPercentage}%
                </div>
                <!-- Viser "Low Stock"-meddelelse, hvis lageret er under 10 -->
                <div class="low_stock ${product.stock < 10 ? "" : "hide"}">
                    Low Stock (${product.stock} left)
                </div>
            </div>

            <!-- Viser produktets titel -->
            <h2>${product.title}</h2>
            
            <!-- Viser pris, med og uden rabat -->
            <div class="price">
                <p class="${product.discountPercentage ? "foer_pris" : ""}">${product.price} €</p>
                <p class="${product.discountPercentage ? "efter_pris" : "hide"}">
                    ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)} €
                </p>
            </div>
            
            <!-- Link til produktside -->
            <a class="read_more" href="/html/produkt.html?id=${product.id}">Read more</a>
        </div>`
    )
    .join(""); // Samler HTML-strengen

  // Opdaterer siden med de genererede produkter
  listContainer.innerHTML = markup;
}
