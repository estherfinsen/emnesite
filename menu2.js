const burger2 = document.querySelector(".burger2");
const nav = document.querySelector("nav");
const menu2s = document.querySelector(".menu2");
const links = document.querySelectorAll(".menu2 li a");

burger2.addEventListener("click", () => {
  burger2.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger2.classList.remove("active");
    nav.classList.remove("active");
  });
});
