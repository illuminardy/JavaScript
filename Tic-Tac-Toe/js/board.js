var TicTacToe = (function(){
    // Declarations
    var currentPlayer = "X",
    currentColor = "blue",
    board = [];

    function initializeBoard(){
        board = [["", "", ""],["", "", ""],["", "", ""]];
        var tds = document.body.querySelectorAll(".square");
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

    return { play: initializeBoard };
	
})();

document.addEventListener("DOMContentLoaded", function(event) {
    TicTacToe.play();
});
