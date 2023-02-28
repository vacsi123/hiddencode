const generateBtn = document.getElementById("generateBtn");
const number = document.getElementById("number");

generateBtn.addEventListener("click", function() {
	let randomNum = Math.floor(Math.random() * 101);
	number.textContent = randomNum;

	if (randomNum >= 0 && randomNum < 20) {
		document.body.style.backgroundColor = "red";
	} else if (randomNum >= 20 && randomNum < 40) {
		document.body.style.backgroundColor = "blue";
	} else if (randomNum >= 40 && randomNum < 60) {
		document.body.style.backgroundColor = "green";
	} else if (randomNum >= 60 && randomNum < 80) {
		document.body.style.backgroundColor = "orange";
	} else {
		document.body.style.backgroundColor = "purple";
	}
});
