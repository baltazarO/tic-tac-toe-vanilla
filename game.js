var button = document.querySelector("button");
button.onclick = restart;
var allSquares = document.getElementsByTagName("td");
var isPlayerTurn = document.querySelector('input:checked').value;
var computersIcon = (isPlayerTurn) ? "clicked-circle" : "clicked-x";
var playersIcon = (isPlayerTurn) ? "clicked-x" : "clicked-circle";

setUpBoard();
computerTurn();
yourTurn();

function restart() {
    //get all squares and make them all display none
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].classList.remove("clicked-x");
        allSquares[i].classList.remove("clicked-circle");
    }
}

function yourTurn() {  //play game
    if (isPlayerTurn) {

    }
}

function computerTurn() {
    if (!isPlayerTurn) {    //pick random square
        let emptyIndex = Math.floor(Math.random() * 9);
        while(allSquares[emptyIndex].classList.contains("clicked-x") || allSquares[emptyIndex].classList.contains("clicked-circle")) {
            emptyIndex = Math.floor(Math.random() * 9);
        }
        allSquares[emptyIndex].classList.add(computersIcon);
        isPlayerTurn = true;
    }
}



