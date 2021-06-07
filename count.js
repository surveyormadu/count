var myInput = document.querySelector(".input");
var myContaner = document.querySelector(".main");

myInput.addEventListener(
	"focus",
	function () {
		var displayHeight = window.innerHeight - myContaner.scrollTop;
		myContaner.style.height = displayHeight + "px";
		console.log(displayHeight);
	},
	true
);

myInput.addEventListener(
	"blur",
	function () {
		myContaner.style.height = "100%";
	},
	true
);
