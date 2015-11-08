var TicTacToe = (function(){
    // Declarations
    var currentPlayer = "X",
    currentColor = "blue",
    board = [],
    newGameDiv;

    function initializeBoard(){
        board = [["", "", ""],["", "", ""],["", "", ""]];

        var table = document.body.querySelector("table");
        table.onclick = playerClickedCell;

        newGameDiv = document.body.querySelector(".newGame");
        newGameDiv.onclick = clearBoard;
    }

    function playerClickedCell(event){
    	var target = event.target;

        if (target.innerHTML === ""){
            target.innerHTML = currentPlayer;
            target.style.color = currentColor;
            var row = target.parentNode.id;
            var col = target.id;

            board[row][col] = currentPlayer;
            if (playerWon()) {
            	newGameDiv.className = newGameDiv.className + " active";
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
        // Check horizontals
        if (board[0][0] == currentPlayer && board[0][0] == board[0][1] && board[0][1] == board[0][2]) return true;
        if (board[1][0] == currentPlayer && board[1][0] == board[1][1] && board[1][1] == board[1][2]) return true;
        if (board[2][0] == currentPlayer && board[2][0] == board[2][1] && board[2][1] == board[2][2]) return true;

        // Check verticals
        if (board[0][0] == currentPlayer && board[0][0] == board[1][0] && board[1][0] == board[2][0]) return true;
        if (board[0][1] == currentPlayer && board[0][1] == board[1][1] && board[1][1] == board[2][1]) return true;
        if (board[0][2] == currentPlayer && board[0][2] == board[1][2] && board[1][2] == board[2][2]) return true;

        // Check first diagonal
        if (board[0][0] == currentPlayer && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return true;

        // Check second diagonal
        if (board[1][1] == currentPlayer && board[0][2] == board[2][0] && board[0][2] == board[1][1]) return true;

        return false;
    }

    function clearBoard(){
    	var tds = document.body.querySelectorAll("td");

    	for (var i = 0; i < tds.length; i++){
    		tds[i].innerHTML = "";
    	}

    	board = [["", "", ""],["", "", ""],["", "", ""]];
    	newGameDiv.className = "newGame";    
    }

    return { play: initializeBoard };
	
})();

document.addEventListener("DOMContentLoaded", function(event) {
    TicTacToe.play();
});
