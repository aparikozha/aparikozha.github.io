let registration = document.getElementById("reg_form");
let span = document.getElementById("error_span");
registration.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName");
  let firstNameValue = firstName.value;
  let lastName = document.getElementById("lastName");
  let lastNameValue = lastName.value;
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword").value;

  if (firstNameValue.length < 5) {
    document.getElementById("error_span").textContent =
      "Please enter first name";
    document.getElementById("firstName").style.border = "3px solid #FA1400";
  }

  if (lastNameValue.length < 5 && firstNameValue.length >= 5) {
    document.getElementById("error_span").textContent =
      "Please enter last name";
    document.getElementById("lastName").style.border = "3px solid #FA1400";
    document.getElementById("firstName").style.border = "3px solid black";
  }

  if (
    (password.length < 8 || password.length > 20) &&
    firstNameValue.length >= 5 &&
    lastNameValue.length >= 5
  ) {
    document.getElementById("password").style.border = "3px solid #FA1400";
    document.getElementById("error_span").textContent =
      "Please enter password!";
    document.getElementById("firstName").style.border = "3px solid black";
    document.getElementById("lastName").style.border = "3px solid black";
  }

  if (
    repeatPassword.length == 0 &&
    firstNameValue.length >= 5 &&
    lastNameValue.length >= 5 &&
    (password.length >= 8 || password.length >= 20)
  ) {
    document.getElementById("password").style.border = "3px solid #FA1400";
    document.getElementById("error_span").textContent =
      "Please repeat password!";
    document.getElementById("firstName").style.border = "3px solid black";
    document.getElementById("lastName").style.border = "3px solid black";
    document.getElementById("password").style.border = "3px solid black";
  }

  if (
    password !== repeatPassword &&
    repeatPassword.length > 0 &&
    firstNameValue.length >= 5 &&
    lastNameValue.length >= 5 &&
    (password.length >= 8 || password.length >= 20)
  ) {
    document.getElementById("repeatPassword").style.border =
      "3px solid #FA1400";
    document.getElementById("password").style.border = "3px solid #FA1400";
    document.getElementById("error_span").textContent =
      "Passwords don't match!";
    document.getElementById("firstName").style.border = "3px solid black";
    document.getElementById("lastName").style.border = "3px solid black";
  }
});

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const container = document.getElementById("container-nav");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  container.classList.toggle("show");
});
