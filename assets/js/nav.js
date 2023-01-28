const menuBtn = document.querySelector(".menu-button");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
		document.getElementsByClassName("mobile-nav")[0].classList.add("open");
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
		document
			.getElementsByClassName("mobile-nav")[0]
			.classList.remove("open");
	}
});

const contact = () => {
	window.location.href = "mailto:hello@soos.dev";
};
