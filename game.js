var button = document.querySelector("button");
button.onclick = restart;
var allSquares = document.getElementsByTagName("td");
var isPlayerTurn = document.querySelector('input:checked').value;
var computersIcon = (isPlayerTurn) ? "clicked-circle" : "clicked-x";
var playersIcon = (isPlayerTurn) ? "clicked-x" : "clicked-circle";

setUpBoard();

function restart() {    //get all squares and make them all display none
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].classList.remove("clicked-x");
        allSquares[i].classList.remove("clicked-circle");
    }
}

function yourTurn(btn) {   //play game
    computerTurn();
    if (isPlayerTurn) {
        if (!btn.classList.contains("clicked-x") && !btn.classList.contains("clicked-circle")) {
            btn.classList.add(playersIcon);
            isPlayerTurn = false;
        }
    }
}

function computerTurn() {
    if (!isPlayerTurn) {    //pick random square
        let emptyIndex = Math.floor(Math.random() * 9);
        while(spaceOccupied(emptyIndex)) {
            emptyIndex = Math.floor(Math.random() * 9);
        }
        allSquares[emptyIndex].classList.add(computersIcon);
        isPlayerTurn = true;
    }
}

function spaceOccupied(index) {
    if (allSquares[index].classList.contains("clicked-x") || allSquares[index].classList.contains("clicked-circle")) {
        return true;
    } return false;
}

function setUpBoard() {
    for(let x = 0; x < allSquares.length; x++) {
        allSquares[x].addEventListener("click",function() {
            yourTurn(allSquares[x]);
        });
    }
}