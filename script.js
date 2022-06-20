var popoverTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

var callOne = true;

function rating() {
	let divTranslate = document.getElementById("asideTranslateId");
	divTranslate.classList.add("asideTranslate");
}

function removeRating() {
	let removeTranslate = document.getElementById("asideTranslateId");
	removeTranslate.classList.remove("asideTranslate");
}

function call() {
	if (callOne) rating();
	else removeRating();
	callOne = !callOne;
}

// CALLING DARK MODE =>>
var callDarkMode = true;

function darkModeStart() {
	document.getElementById("lightModeId").classList.remove("lightModeToggle");
	document
		.getElementById("lightModeId")
		.classList.add("transitionDarkMode1");
	document.getElementById("darkModeId").classList.add("transitionDarkMode2");

	// document.getElementById("darkModeId").classList.add("darkModeToggle");
	document.getElementById("lightModeId").innerHTML = "Dark Mode";
	document.getElementById("darkModeId").innerHTML = "Light Mode";
	document.getElementById("bodyId").classList.add("darkModeEffect");
	document.getElementById("heroTitle").style.color = "pink";
}

// CALLING LIGHT MODE =>>

function lightModeStart() {
	document
		.getElementById("lightModeId")
		.classList.add("transitionLightMode1");
	document.getElementById("lightModeId").innerHTML = "Light Mode";
	document
		.getElementById("darkModeId")
		.classList.remove("transitionDarkMode2");
	document.getElementById("bodyId").classList.remove("darkModeEffect");
	document.getElementById("darkModeId").innerHTML = "Dark Mode";
	document.getElementById("heroTitle").style.color = "#0b2239";
}

function callingDarkMode() {
	if (callDarkMode) darkModeStart();
	else lightModeStart();
}

// search function

function openPage() {
	let x = document.getElementById("search").value;

	if (x === "facebook") {
		window.open(
			"https://www.flaticon.com/search?word=facebook&type=icon"
		);
	}
}

// testing
function test() {
	console.log("test");
}

test();
