if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.body.classList.add("dark-mode");
} else {
	document.body.classList.add("light-mode");
}

if (localStorage.getItem("dark-mode") === "true") {
	document.body.classList.remove("light-mode");
	document.body.classList.add("dark-mode");
} else if (localStorage.getItem("dark-mode") === "false") {
	document.body.classList.remove("dark-mode");
	document.body.classList.add("light-mode");
}

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (e) {
		if (localStorage.getItem("dark-mode") === "true") {
			document.body.classList.remove("light-mode");
			document.body.classList.add("dark-mode");
		} else {
			if (e.matches) {
				document.body.classList.remove("light-mode");
				document.body.classList.add("dark-mode");
			} else {
				document.body.classList.remove("dark-mode");
				document.body.classList.add("light-mode");
			}
		}
	});

// if safari, add "safari" class to body
if (navigator.userAgent.indexOf("Safari") != -1) {
	document.body.classList.add("safari");
}