const button = document.querySelector("button");
const allSquares = document.getElementsByTagName("td");
var isPlayerTurn = document.querySelector('input').checked;
const computersIcon = (isPlayerTurn) ? "clicked-circle" : "clicked-x";
const playersIcon = (isPlayerTurn) ? "clicked-x" : "clicked-circle";
var gameOver = false;
const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

button.onclick = restart;
setUpBoard();

function restart() {    //get all squares and make them all display none
    gameOver = false;
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].classList.remove("clicked-x");
        allSquares[i].classList.remove("clicked-circle");
    }
    isPlayerTurn = document.querySelector('input').checked;
    computerTurn();
}

function squareClick(btn) {   //play game
    if (!gameOver) {
        if (isPlayerTurn) {
            if (!btn.classList.contains("clicked-x") && !btn.classList.contains("clicked-circle")) {
                btn.classList.add(playersIcon); // add my icon to square visually
                isPlayerTurn = false;
            }
        }
        checkWin(playersIcon);
        computerTurn();
    }
}

function computerTurn() {
    if (!gameOver) {
        if (!isPlayerTurn) {    //pick random square
            let emptyIndex = Math.floor(Math.random() * 9);
            while (spaceOccupied(emptyIndex)) {
                emptyIndex = Math.floor(Math.random() * 9);
            }
            allSquares[emptyIndex].classList.add(computersIcon);
            isPlayerTurn = true;
            checkWin(computersIcon);
        }
    }
}

function spaceOccupied(index) {
    if (allSquares[index].classList.contains("clicked-x") || allSquares[index].classList.contains("clicked-circle")) {
        return true;
    } return false;
}

function setUpBoard() {
    for (let x = 0; x < allSquares.length; x++) {
        allSquares[x].addEventListener("click", function () {
            squareClick(allSquares[x]);
        });
    }
    computerTurn();
}

function checkWin(side) {
    if (checkWinCombo(side)) {
        gameOver = true;
        alert(side + " wins the game!!!");
    } else if (checkDraw()) {
        gameOver = true;
        alert("Game is a draw");
    }
}

function checkWinCombo(side) {
    return WINNING_COMBOS.some(combo => {
        return combo.every(square => {
            return allSquares[square].classList.contains(side);
        })
    })
}

function checkDraw() {
    for (let index = 0; index < allSquares.length; index++) {
        if (!allSquares[index].classList.contains("clicked-x") && !allSquares[index].classList.contains("clicked-circle")) {
            return false;
        }
    }
    return true;
}
