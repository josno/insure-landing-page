var navBtn = document.querySelector(".nav-button");

const toggleMenu = () => {
	document.querySelector(".top").classList.toggle("top-active");
	document.querySelector(".middle").classList.toggle("middle-active");
	document.querySelector(".bottom").classList.toggle("bottom-active");
};

navBtn.addEventListener("click", () => {
	toggleMenu();
});
