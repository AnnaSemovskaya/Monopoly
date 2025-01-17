const gameSize = 3;
const cells = [[0,0,0],[0,0,0],[0,0,0]];

window.onload = function() {

	newGame();
}

function newGame() {
	for(let i = 0; i < gameSize; i++) {
		for(let j = 0; j < gameSize; j++) {
			const cell = document.getElementById("cell-" + i + j);
			cell.onclick = function() {
				if (cells[i][j] === 0 || cells[i][j] === -1) {
					cell.style.backgroundImage = "url('./IMG/x.gif')";
					cells[i][j] = 1;
				} else {
					cell.style.backgroundImage = "url('./IMG/o.gif')";
					cells[i][j] = -1;			
				}
			}
		}
	}
}
