const Hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector(".nav ul");

Hamburger.addEventListener("click", function () {
	nav.classList.toggle("slide");
});
