var GameOfLife = (function(){
    // Declarations
    var board = [],
        neigborsPerCell = [];

    function init(){
        board = [["", "A", ""],["", "", "A"],["A", "A", "A"]];
        neigborsPerCell = [[1, 1, 2],[3, 5, 3],[1, 3, 2]];
    }

    function aliveNeighbors(row, column){
        var numAlive = 0;

        for (var i = row - 1; i <= row + 1; i++){
            for (var j = column - 1; j <= column + 1; j++){
                // Verifying that indices don't fall outside the boundaries
                if ((i < 0 || j < 0) || (i > board.length - 1 || j > board[0].length - 1) || (i === row && j === column)) {
                    continue;
                } else if (board[i][j] === 'A'){
                    numAlive++;
                }
            }
        }
        neigborsPerCell[row][column] = numAlive;
        return numAlive;
    }

    function nextStage(){
        // To get all current neighbors before modifying board
        for (var i = 0; i < board.length; i++){
            for (var j = 0; j < board[0].length; j++){
                aliveNeighbors(i, j);
            }
        }
        // To update state of the board
        for (var i = 0; i < board.length; i++){
            for (var j = 0; j < board[0].length; j++){
                var totalAliveNeighbors = neigborsPerCell[i][j];
                if ((board[i][j] === 'A') && (totalAliveNeighbors !== 2 && totalAliveNeighbors !== 3)){
                    board[i][j] = '';
                } else if ((board[i][j] === '') && (totalAliveNeighbors === 3)){
                    board[i][j] = 'A';
                }
            }
        }
    }

    return { 
        aliveNeighbors: aliveNeighbors,
        init: init,
        nextStage: nextStage
    };
	
})();

document.addEventListener("DOMContentLoaded", function(event) {
    GameOfLife.init();
});
 