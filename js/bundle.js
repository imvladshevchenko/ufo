var wheel = document.getElementById("wheel");
var wheelBtn = document.getElementById("button");
var modal = document.getElementById("modal");
var firstWrapper = document.getElementById("firstWrapper");
var secondWrapper = document.getElementById("secondWrapper");
var buttonText = document.getElementById("buttonText");
var getPrizes = document.getElementById("getPrizes");
var redirectLink = document.getElementById("redirectLink");
var firstTitle = document.getElementById("firstTitle");
var secondTitle = document.getElementById("secondTitle");
var modalAlienFirst = document.getElementById("modalAlienFirst");
var modalAlienSecond = document.getElementById("modalAlienSecond");

var counter = 0;

function animation() {
  if (counter < 1) {
    wheel.classList.toggle("step-1");
    wheelBtn.classList.toggle("animation-in-process");
    setTimeout(() => (modalAlienFirst.style.display = "block"), 5640);
    counter++;
  } else {
    firstWrapper.style.display = "none";
    secondWrapper.style.display = "block";
    firstTitle.style.display = "none";
    secondTitle.style.display = "flex";
    getPrizes.style.display = "none";
    redirectLink.style.display = "flex";
    wheel.classList.toggle("step-2");
    wheelBtn.classList.toggle("animation-in-process");
    setTimeout(() => (modalAlienSecond.style.display = "flex"), 5640);
  }
  function modalPopup() {
    modal.classList.toggle("modal-active");
    overlay.classList.toggle("overlay-active");
  }
  setTimeout(modalPopup, 5500);
}

function closeModal() {
  modalAlienFirst.style.display = "none";
  modal.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
  wheelBtn.classList.toggle("animation-in-process");
}
