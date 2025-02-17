const mycategory = new URLSearchParams(window.location.search).get("category");
let listContainer = document.querySelector(".produkt");

if (mycategory) {
  document.querySelector("h1").innerText = mycategory;
}

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => showList(data.products));

function showList(products) {
  const filteredProducts = products.filter((product) => product.tags.includes(mycategory)); // Filtrér produkter

  const markup = filteredProducts
    .map(
      (product) =>
        `<div class="item">
            <div class="image-wrapper">
                <img class="produkt_img" src="${product.thumbnail}" alt="${product.title}">
                
                <div class="discount ${product.discountPercentage ? "" : "hide"}">
                    ${product.discountPercentage}%
                </div>
                <div class="low_stock ${product.stock < 10 ? "" : "hide"}">
                    Low Stock (${product.stock} left)
                </div>
            </div>

            <h2>${product.title}</h2>
            <div class="price">
                <p class="${product.discountPercentage ? "foer_pris" : ""}">${product.price} €</p>
                <p class="${product.discountPercentage ? "" : "hide"}">
                    ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)} €
                </p>
            </div>
            <a href="/html/produkt.html?id=${product.id}">Read more</a>
        </div>`
    )
    .join("");

  listContainer.innerHTML = markup;
}
