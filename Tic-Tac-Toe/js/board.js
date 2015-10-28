document.addEventListener('DOMContentLoaded', initializeBoard);

// Initial representation of the board
var board = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
];

function initializeBoard(){
	var gameBoardDiv = document.getElementById("gameBoard");
	
	for (var i = 0; i < board.length; i++){
		// Create parent divs per row
		var parentDiv = document.createElement("div");
		parentDiv.className = "row";
		document.body.appendChild(parentDiv);
		
		for (var j = 0; j < board[0].length; j++){
			
			// Create child divs
			var childDiv = document.createElement("div");
			childDiv.className = "square";
			childDiv.innerHTML = board[i][j];
			childDiv.onclick = playerClickedCellFunc;
			
			var rowAttr = document.createAttribute("rowNum");
			rowAttr.value = i;   
			
			var colAttr = document.createAttribute("colNum");
			colAttr.value = j; 
			
			childDiv.setAttributeNode(rowAttr);
			childDiv.setAttributeNode(colAttr);
			parentDiv.appendChild(childDiv);
		}
		gameBoardDiv.appendChild(parentDiv);
	}
}

// Player objects
var player1 = {
	name: "Anny",
	symbol: "X"
};

var player2 = {
	name: "Yanardy",
	symbol: "O"
};

var currentPlayer = player1;
var currentColor = "blue";

function switchCurrentPlayer(){
	var currentPlayerDiv = document.getElementById("currentPlayer");
	if (currentPlayer == player1){
		currentPlayer = player2;
		currentColor = "red"
	} else {
		currentPlayer = player1;
		currentColor = "blue"
	}
	currentPlayerDiv.innerHTML = "Current Player: " + currentPlayer.name;
}

function playerClickedCellFunc(){
	if (this.innerHTML === " "){
		this.innerHTML = currentPlayer.symbol;
		this.style.color = currentColor;
		var row = this.attributes.rowNum.value;
		var col = this.attributes.colNum.value;
		board[row][col] = currentPlayer.symbol;
		if (playerWon()) {
			alert(currentPlayer.name + " " + "has won the game!!!");
			return;
		}
		switchCurrentPlayer();
	}
};

function playerWon(){
	var consecutiveSymbols = 0;
	
	// Check horizontals
	for (var i = 0; i < board.length; i++){
		for (var j = 0; j < board[0].length; j++){
			if (board[i][j] === currentPlayer.symbol){
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
			if (board[j][i] === currentPlayer.symbol){
				consecutiveSymbols++;
			} else {
				consecutiveSymbols = 0; 
				break;
			}
		}
		if (consecutiveSymbols === 3) return true;
	}
	
	// Check first diagonal
	if ((board[0][0] === currentPlayer.symbol) && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) return true;
	
	// Check second diagonal
	if (board[1][1] === currentPlayer.symbol){
		if (board[0][2] === board[2][0] && board[0][2] == currentPlayer.symbol) return true;
	}
	
	return false;
}
