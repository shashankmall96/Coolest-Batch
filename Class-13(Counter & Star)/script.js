let incrementField = document.getElementById("factor");

let addBtn = document.getElementById("add");

let substractBtn = document.getElementById("substract");

let reset = document.getElementById("reset");

let counterNumber = document.getElementById("number");

let incrementFactor = 1;

incrementField.addEventListener("change", function (e) {
  console.log(e);
  incrementFactor = parseInt(e.target.value);

  if (incrementFactor < 1) {
    incrementFactor = 1;
  }
});

addBtn.addEventListener("click", function () {
  console.log("button working");
  let total = parseInt(counterNumber.innerText) + incrementFactor;

  counterNumber.innerText = total;
});

substractBtn.addEventListener("click", function () {
  console.log("button working");
  let total = parseInt(counterNumber.innerText) - incrementFactor;

  if (total < 0) {
    total = 0;
  }

  counterNumber.innerText = total;
});

reset.addEventListener("click", function () {
  counterNumber.innerText = 0;
});
