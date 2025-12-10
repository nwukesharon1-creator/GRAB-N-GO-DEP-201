let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const totalPriceSpan = document.getElementById("total-price");

function displayCart() {
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceSpan.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <h4>${item.name}</h4>
      <p>Vendor: ${item.vendor}</p>
      <p>₦${item.price} * ${item.quantity}</p>
      <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsDiv.appendChild(itemDiv);
  });

  totalPriceSpan.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();

