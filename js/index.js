document.querySelector("#toggler").addEventListener("click", function () {
  document.querySelector("#nav_links ul").classList.toggle('showList');
});
let nav_items = document.querySelector(".nav_items");

toggler.addEventListener("click", listDisplay);

function listDisplay() {
  nav_items.classList.toggle("showList");
}

let nav_content = document.getElementById("nav_content");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // console.log(document.documentElement.scrollTop);

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    nav_content.style.padding = "10px 0px";
    nav_content.style.backgroundColor = "lightskyblue";
  } else {
    nav_content.style.padding = "20px 0px";
    nav_content.style.backgroundColor = "transparent";
  }
}

let destination = document.getElementById("destination");
let people = document.getElementById("people");
let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let phone = document.getElementById("phone_no");

let destinationError = document.getElementById("destinationError");
let peopleError = document.getElementById("peopleError");
let checkinError = document.getElementById("checkinError");
let checkoutError = document.getElementById("checkoutError");
let phoneError = document.getElementById("phoneError");

destination.addEventListener("input", destinationValidation);
people.addEventListener("input", peopleValidation);
checkin.addEventListener("click", checkinValidation);
checkout.addEventListener("click", checkoutValidation);
phone.addEventListener("input", phoneValidation);

function destinationValidation() {
  let data = destination.value;
  // console.log("Name:",data);
  if (data.length < 1) {
    destinationError.innerHTML = "Required field";
  } else {
    destinationError.innerHTML = "";
  }
}
function peopleValidation() {
  let data = people.value;
  // console.log("Name:",data);
  if (data.length < 1) {
    peopleError.innerHTML = "Required field";
  } else {
    peopleError.innerHTML = "";
  }
}
function phoneValidation() {
  let data = phone.value;
  // console.log("Name:",data);
  if (data.length < 1) {
    phoneError.innerHTML = "Required field";
  } else {
    phoneError.innerHTML = "";
  }
}
