function submitOrder() {
    const size = document.getElementById("size").value;
    const topping = document.getElementById("topping").value;
    const quantity = document.getElementById("quantity").value;

    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = `<h2>Order Summary</h2>
                              <p>Size: ${size}</p>
                              <p>Topping: ${topping}</p>
                              <p>Quantity: ${quantity}</p>`;
}
