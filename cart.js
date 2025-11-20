//Корзина
let cart_list = document.querySelector(".cart-items-list");
let cart_total = document.querySelector(".cart-total");
let orderBtn = document.querySelector("#orderBtn");
let orderSection = document.querySelector(".order");
let deleteBtn = document.querySelector("#delete-btn");
let orderForm = document.querySelector(".order-form");
let confirmBtn = document.querySelector(".confirm-order-btn");
function get_item(item) {
  return `<div class = "cart-item">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-quantity">Кількість: ${
                  item.quantity
                }</div>
                <div class="cart-item-price" data-price="${item.price}">${
    item.price * item.quantity
  } грн</div>
            </div>`;
}

function showCartList() {
  cart_list.innerHTML = "";
  for (let key in cart.items) {
    // проходимося по всіх ключах об'єкта cart.items
    cart_list.innerHTML += get_item(cart.items[key]);
  }
  cart_total.innerHTML = cart.calculateTotal();
}

if (cart_list && cart_total) {
  showCartList();
}

orderBtn.addEventListener("click", function (event) {
  orderBtn.style.display = "none";
  orderSection.style.display = "block";
});

confirmBtn.addEventListener("click", function () {
  if (orderForm.checkValidity()) {
    alert("Ваше замовлення успішно оформлено!");
    orderForm.reset();
  } else {
    orderForm.reportValidity();
  }
});

deleteBtn.addEventListener("click", function() {
  document.cookie="cart=; max-age=0; path=/"
  location.reload()
})
