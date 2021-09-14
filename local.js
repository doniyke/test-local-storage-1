let name = localStorage.getItem("playerName");
let point = localStorage.getItem("playerPoint");
let level = localStorage.getItem("playerLevel");;
let display = 0;
let guess = 0;
if (name != "" && name != null ) {
	document.getElementById('playerName').innerHTML = name;
	document.getElementById('playerPoint').innerHTML = point;
	document.getElementById('playerLevel').innerHTML = level;
}else{
	name = prompt("Enter Your Name To Start Playing");
	localStorage.setItem("playerName", name)
	localStorage.setItem("playerPoint", 5);
	localStorage.setItem("playerLevel", 1);
	document.getElementById('playerName').innerHTML = name;
	document.getElementById('playerPoint').innerHTML = 5;
	document.getElementById('playerLevel').innerHTML = 1;
}

function resetPoint() {
	localStorage.setItem("playerPoint", 5);
	document.getElementById('playerPoint').innerHTML = 5;
}
function clearData() {
	localStorage.clear()
	window.location.reload();
}

function guessData(userGameLevel) {
	let latestLevel = parseInt(userGameLevel)
	return Math.floor(Math.random() * (latestLevel - 1 + 1) + 1)
}

function makeAGuess() {

	guess = parseInt(prompt("Enter Your Guess Numbers",0))
	display = guessData(level);
	document.getElementById('displayData').innerHTML = display;
	document.getElementById('playerGuess').innerHTML = guess;
	if (display == guess) {
		alert("Correct Answer")
		point++
		localStorage.setItem("playerPoint", point);
		document.getElementById('playerPoint').innerHTML = point;
		if (point == 7) {
			alert("Congrats !! Level Cleared, Proceed To Next Level")
			level++
			localStorage.setItem("playerLevel", level);
			point = 5;
			localStorage.setItem("playerPoint", point);
			window.location.reload();
		}
	}else{
		alert("Ops.. Wrong Answer")
		point--
		localStorage.setItem("playerPoint", point);
		document.getElementById('playerPoint').innerHTML = point;
		if (point <= 0) {
			if (level > 1) {
				alert("Game Over, Level Failed.. You have Just Lost A Level")
				level--
				localStorage.setItem("playerLevel", level);
				point = 5;
				localStorage.setItem("playerPoint", point);
				window.location.reload();
			}else{
				alert("Game Over, Level Failed Please Try Again")
				point = 5;
				localStorage.setItem("playerPoint", point);
				window.location.reload();
			}
		}
	}

}







