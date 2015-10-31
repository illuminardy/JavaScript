document.addEventListener('DOMContentLoaded', initializeBoard);

// Declarations
var currentPlayer = "X",
	currentColor = "blue",
	board = [];

function initializeBoard(){
	board = [["", "", ""],["", "", ""],["", "", ""]];
	var tds = document.querySelectorAll(".square");
	for (var i = 0; i < tds.length; i++){
		tds[i].onclick = playerClickedCellFunc;
	}
}

function playerClickedCellFunc(){
	if (this.innerHTML === ""){
		this.innerHTML = currentPlayer;
		this.style.color = currentColor;
		var row = this.parentNode.id;
		var col = this.id;

		board[row][col] = currentPlayer;
		if (playerWon()) {
			alert("has won the game!!!");
			return;
		}
		switchCurrentPlayer();
	}
}

function switchCurrentPlayer(){
	if (currentPlayer == "X"){
		currentPlayer = "O";
		currentColor = "red"
	} else {
		currentPlayer = "X";
		currentColor = "blue"
	}
}

function playerWon(){
	var consecutiveSymbols = 0;
	
	// Check horizontals
	for (var i = 0; i < board.length; i++){
		for (var j = 0; j < board[0].length; j++){
			if (board[i][j] === currentPlayer){
				consecutiveSymbols++;
			} else {
				consecutiveSymbols = 0; 
				break;
			}
		}
		if (consecutiveSymbols === 3) return true;
	}
	
	// Check verticals
	for (var i = 0; i < board[0].length; i++){
		for (var j = 0; j < board.length; j++){
			if (board[j][i] === currentPlayer){
				consecutiveSymbols++;
			} else {
				consecutiveSymbols = 0; 
				break;
			}
		}
		if (consecutiveSymbols === 3) return true;
	}
	
	// Check first diagonal
	if ((board[0][0] === currentPlayer) && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) return true;
	
	// Check second diagonal
	if (board[1][1] === currentPlayer){
		if (board[0][2] === board[2][0] && board[0][2] == currentPlayer) return true;
	}
	
	return false;
}
