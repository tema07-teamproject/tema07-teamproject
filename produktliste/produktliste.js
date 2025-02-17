const listContainer = document.querySelector(".produkt");

const overskrift = document.querySelector("h1");
overskrift.innerHTML = listContainer;

// Henter data fra dummyjson API'et
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => showList(data.products)); // API'en returnerer et objekt med en "products" liste

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `
            <div class="item">
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
                <a href="produkt.html?id=${product.id}">Read more</a>
            </div>`
    )
    .join("");
  listContainer.innerHTML = markup;
}
