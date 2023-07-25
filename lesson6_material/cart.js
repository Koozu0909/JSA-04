let cart = localStorage.getItem("cart");
cart = JSON.parse(cart);
console.log(cart)

for (let key in cart) {
    let items = cart[key].product;
    console.log(items)
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="image-container">
          <img src="${items.image}">
          </div>
          <div class="container">
          <h5 class="product-name">${items.name}</h5>
          <h6><b>Price:</b>${items.price}</h6>
          <h6><b>Quantity:</b>${cart[key].quantity}</h6>
          </div>`;
    document.getElementById("products").appendChild(card);
  }