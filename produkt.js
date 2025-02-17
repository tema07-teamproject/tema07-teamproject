const myproduct = new URLSearchParams(window.location.search).get("id");

let product_container = document.querySelector(".product_container");

fetch(`https://dummyjson.com/products/${myproduct}`)
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      showProduct(data);
    } else {
      console.error("Produktdata ikke fundet");
    }
  })
  .catch((error) => {
    console.error("Fejl ved hentning af produktdata:", error);
  });

function showProduct(data) {
  product_container.innerHTML = `
    <div>
        <img class="img_productsite"
            src="${data.thumbnail}" alt="${data.title}">
    </div>

    <div class="product-details">
        <h1>${data.title}</h1>
        <p class="price">${data.price} EUR</p>

        <div class="description">
            <h3>Description</h3>
            <p>${data.description}</p>
        </div>

        <div class="shipping">
            <h2>Shipping</h2>
            <p>${data.shippingInformation}</p>
        </div>

        <p class="low-stock"><em>${data.availabilityStatus}</em></p>

        <button class="add-to-bag">ADD TO BAG</button>
    </div>`;
}
