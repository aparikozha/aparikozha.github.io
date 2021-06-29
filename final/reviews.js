const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const container = document.getElementById("container-nav");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  container.classList.toggle("show");
});