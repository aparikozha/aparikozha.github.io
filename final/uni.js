function userData(page) {
  fetch("http://universities.hipolabs.com/search?country=Georgia")
    .then((response) => response.json())
    .then((info) => {
      let fragment = document.createDocumentFragment();
      info.map((item) => {
        let li = document.createElement("li");
        let list = document.getElementById("list");
        let page = document.createElement("span");
        let name = document.createElement("span");
        name.textContent = item.name;
        li.appendChild(name);
        name.style.fontSize = "30px";
        name.style.margin = "20px";
        page.textContent = item.domains;
        li.appendChild(page);

        let country = document.createElement("span");
        country.textContent = item.country;
        li.appendChild(country);

        list.appendChild(li);
      });
      list.appendChild(fragment);
    })
    .catch((error) => {
      let message = document.createElement("h1");
      message.textContent = error;
      document.body.appendChild(message);
    });
}
userData(1);

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const container = document.getElementById("container-nav");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  container.classList.toggle("show");
});
