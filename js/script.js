// We put the DOM elements in variables
const burgerBtn = document.querySelector(".header__burgerBtn");
const navBar = document.querySelector(".header__fullNavBar");
const closeBtn = document.querySelector(".header__fullNavBar-closeBtn");
const body = document.querySelector("body");

// We add an event listener to the burger button
burgerBtn.addEventListener("click", () => {
  // When the burger button is clicked, we open the nav bar
  navBar.style.display = "flex";
  body.classList.add("no-scroll");
});

// We add an event listener to the close button
closeBtn.addEventListener("click", () => {
  // When the close button is clicked, we close the nav bar
  navBar.style.display = "none";
  body.classList.remove("no-scroll");
});