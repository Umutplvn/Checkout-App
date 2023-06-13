//* -------------- Selectors -----------------*//
const quantityMac = document.getElementById("quantityMac");
const addMac = document.getElementById("addMac");
const minusMac = document.getElementById("minusMac");
const macTotal = document.getElementById("macTotal");
const deleteMac = document.getElementById("deleteMac");
const product1 = document.querySelector(".product1");

const addKeyboard = document.getElementById("addKeyboard");
const keyboardTotal = document.getElementById("keyboardTotal");
const minusKeyboard = document.getElementById("minusKeyboard");
const quantityKeyboard = document.getElementById("quantityKeyboard");
const deleteKeyboard = document.getElementById("deleteKeyboard");
const product2 = document.querySelector(".product2");

const addMouse = document.getElementById("addMouse");
const mouseTotal = document.getElementById("mouseTotal");
const minusMouse = document.getElementById("minusMouse");
const quantityMouse = document.getElementById("quantityMouse");
const product3 = document.querySelector(".product3");
const deleteMouse = document.getElementById("deleteMouse");

const totalAmount = document.getElementById("totalSum");
const deleteBtn = document.getElementById("deleteBtn");
const main = document.querySelector(".main");
const title = document.querySelector(".title");
const myCart = document.querySelector(".myCart");
const gross = document.querySelector(".gross");

//* -------------- Variables -----------------*//

let counterMac = 1;
//* -------------- Events -----------------*//

//!Mac Add Remove
addMac.addEventListener("click", () => {
  counterMac++;
  document.getElementById("quantityMac").innerText = `${counterMac}`;
  localStorage.setItem("counterMac", counterMac);

  sonucMac = Number((counterMac * 1474.99).toFixed(2));
  macTotal.innerText = `${sonucMac}`;
  localStorage.setItem("sonucMac", sonucMac);
  productTotal();
  totalSum();
});

minusMac.addEventListener("click", () => {
  if (counterMac < 1) {
    product1.classList.add("hidden");
  } else {
    counterMac--;
    document.getElementById("quantityMac").innerText = `${counterMac}`;
    localStorage.setItem("counterMac", counterMac);

    sonucMac = Number((counterMac * 1474.99).toFixed(2));
    macTotal.innerText = `${sonucMac}`;
    localStorage.setItem("sonucMac", sonucMac);
    productTotal();
    totalSum();
  }
});

//!Keyboard Add Remove

let mouseCountercounterKeyboard = 1;
addKeyboard.addEventListener("click", () => {
  counterKeyboard++;
  document.getElementById("quantityKeyboard").innerText = `${counterKeyboard}`;
  localStorage.setItem("counterKeyboard", counterKeyboard);

  sonucKeyboard = Number((counterKeyboard * 185.99).toFixed(2));
  keyboardTotal.innerText = `${sonucKeyboard}`;
  localStorage.setItem("sonucKeyboard", sonucKeyboard);
  productTotal();
  totalSum();
});

minusKeyboard.addEventListener("click", () => {
  if (counterKeyboard <= 0) {
    product2.classList.add("hidden");
  } else {
    counterKeyboard--;
    document.getElementById(
      "quantityKeyboard"
    ).innerText = `${counterKeyboard}`;
    localStorage.setItem("counterKeyboard", counterKeyboard);

    sonucKeyboard = Number((counterKeyboard * 185.99).toFixed(2));
    keyboardTotal.innerText = `${sonucKeyboard}`;
    localStorage.setItem("sonucKeyboard", sonucKeyboard);
    productTotal();
    totalSum();
  }
});

//!Mouse Add Remove

// -------- Add

let mouseCounter = 1;
addMouse.addEventListener("click", () => {
  mouseCounter++;
  document.getElementById("quantityMouse").innerText = `${mouseCounter}`;
  localStorage.setItem("mouseCounter", mouseCounter);

  sonucMouse = Number((mouseCounter * 89.99).toFixed(2));
  mouseTotal.innerText = `${sonucMouse}`;
  localStorage.setItem("sonucMouse", sonucMouse);
  productTotal();
  totalSum();
});

// -------- Remove

minusMouse.addEventListener("click", () => {
  if (mouseCounter <= 0) {
    product3.classList.add("hidden");
  } else {
    mouseCounter--;
    document.getElementById("quantityMouse").innerText = `${mouseCounter}`;
    localStorage.setItem("mouseCounter", mouseCounter);

    sonucMouse = Number((mouseCounter * 89.99).toFixed(2));
    mouseTotal.innerText = `${sonucMouse}`;
    localStorage.setItem("sonucMouse", sonucMouse);

    productTotal();
    totalSum();
  }
});

//!-------- Delete Buttons
//* Delete Products

deleteBtn.addEventListener(
  "click",
  () => {
    if (confirm("Do you really want to remove all the items?")) {
      main.classList.add("hidden");
      myCart.innerText = `My Cart`;
      localStorage.clear();

      document.getElementById("totalSum").innerText = `0`;
      document.getElementById("shipping").innerText = `0`;
      document.getElementById("Total").innerText = `0`;
      document.getElementById("tax").innerText = `0`;

      let warningP = document.createElement("p");
      let warningText = document.createTextNode("There is No Product!");
      warningP.appendChild(warningText);
      gross.before(warningP);
      warningP.className = "warningP";
    }
  },
  { once: true }
);

//* Delete Macs

deleteMac.addEventListener("click", () => {
  if (confirm("Do you really want to remove this item?")) {
    product1.classList.add("hidden");
    counterMac = 0;
    sonucMac = 0;
    localStorage.setItem("counterMac", counterMac);
    sonucMac = Number((counterMac * 1474.99).toFixed(2));
    macTotal.innerText = `${sonucMac}`;
    localStorage.setItem("sonucMac", sonucMac);

    productTotal();
    totalSum();
  }
});

//* Delete Keyboard

deleteKeyboard.addEventListener("click", () => {
  if (confirm("Do you really want to remove this item?")) {
    product2.classList.add("hidden");
    counterKeyboard = 0;
    sonucKeyboard = 0;
    localStorage.setItem("counterKeyboard", counterKeyboard);
    sonucKeyboard = Number((counterKeyboard * 185.99).toFixed(2));
    keyboardTotal.innerText = `${sonucKeyboard}`;
    localStorage.setItem("sonucKeyboard", sonucKeyboard);
    productTotal();
    totalSum();
  }
});

//* Delete Mouse

deleteMouse.addEventListener("click", () => {
  if (confirm("Do you really want to remove this item?")) {
    product3.classList.add("hidden");
    mouseCounter = 0;
    sonucMouse = 0;
    localStorage.setItem("mouseCounter", mouseCounter);
    sonucMouse = Number((mouseCounter * 89.99).toFixed(2));
    mouseTotal.innerText = `${sonucMouse}`;
    localStorage.setItem("sonucMouse", sonucMouse);

    productTotal();
    totalSum();
  }
});

window.addEventListener("load", () => {
  //Mac Counter and Calculation
  counterMac = Number(localStorage.getItem("counterMac"));
  quantityMac.innerText = counterMac;

  sonucMac = Number(localStorage.getItem("sonucMac"));
  macTotal.innerText = `${sonucMac}`;

  //Keyboard Counter and Calculation
  counterKeyboard = Number(localStorage.getItem("counterKeyboard"));
  quantityKeyboard.innerText = counterKeyboard;

  sonucKeyboard = Number(localStorage.getItem("sonucKeyboard"));
  keyboardTotal.innerText = `${sonucKeyboard}`;

  //Mouse Counter and Calculation

  mouseCounter = Number(localStorage.getItem("mouseCounter"));
  quantityMouse.innerText = mouseCounter;

  sonucMouse = Number(localStorage.getItem("sonucMouse"));
  mouseTotal.innerText = `${sonucMouse}`;

  payment = Number(localStorage.getItem("payment"));

  productTotal();
  totalSum();
});

//* ----------- Fonksiyonlar -----------------*//

const productTotal = () => {
  total = mouseCounter + counterMac + counterKeyboard;
  document.getElementById("cartNumber").innerText = `${total}`;
};

const totalSum = () => {
  //*selected products total
  let payment = Number((sonucKeyboard + sonucMac + sonucMouse).toFixed(2));
  document.getElementById("totalSum").innerText = `${payment}`;
  localStorage.setItem("payment", payment);

  //*shipping
  if (payment >= 3000 || payment == 0) {
    document.getElementById("shipping").innerText = "0.00 $";
  } else {
    document.getElementById("shipping").innerText = `25 $`;
  }

  //*Tax Calculation
  document.getElementById("tax").innerText = `${(payment * 0.18).toFixed(2)} $`;

  //*Total Line
  if (payment >= 3000 || payment == 0) {
    document.getElementById("Total").innerText = `${(
      payment * 0.18 +
      payment
    ).toFixed(2)} $`;
  } else {
    document.getElementById("Total").innerText = `${(
      payment * 0.18 +
      payment +
      25
    ).toFixed(2)} $`;
  }
};
