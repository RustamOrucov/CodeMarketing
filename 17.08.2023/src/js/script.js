const cartContainer = document.querySelector(".container");

function myDisplayer(some) {
  const cart = document.createElement("div");
  cart.classList.add("cart");
  cart.addEventListener("mouseover", () => {
    removeActive();
    cart.classList.add("active");
  });

  cart.innerHTML = `
           <div class="cart-img" >
              <img src=${some.src} />
            </div>
            <div class="cart-title">
                <h3>
                    <a href="#">${some.title}</a>
                </h3>
            </div>
            <div class="cart-text"><p>${some.text}</p></div>
    `;
  cartContainer.appendChild(cart);

  function removeActive() {
    cartContainer.querySelectorAll(".cart").forEach((cartEl) => {
      cartEl.classList.remove("active");
    });
  }
}

function getFile(callback) {
  let http = new XMLHttpRequest();
  http.open("GET", "../json/support.json");
  http.onload = function () {
    if (http.status == 200) {
      JSON.parse(http.response).forEach((jsonEl) => {
        callback(jsonEl);
      });
    } else {
      callback("Error: " + http.status);
    }
  };
  http.send();
}
getFile(myDisplayer);
