

function allowDrop(event) {
    event.preventDefault();
}


function drag(event) {
    // target of the drag event is the thing we are dragging
    event.dataTransfer.setData("text", elementId);
    console.log("On drag, set data of: " + elementId);
}


function drop(event) {
    event.preventDefault();
    // target of drop event is the element below whatever mouse is over
    // when drag is ended
    let data = event.dataTransfer.getData("text");
    console.log("On drop, reading data of: " + data);

    let diceCopy = document.getElementById("diceImage").cloneNode(true);

    let diceCopyText = diceCopy.querySelector("p");
    diceCopyText.innerText = rollDice();

    event.target.appendChild(diceCopy);
   
}

function rollDice(diceSize = 20) {
    return Math.floor(Math.random() * diceSize) + 1;
}

let diceElement = document.getElementById("diceImage");
diceElement.addEventListener("dragstart", (event) => drag(event));
diceElement.draggable = true;

let diceRollingArea = document.getElementById("diceRollingArea");
diceRollingArea.addEventListener("drop", (event) => drop(event));
diceRollingArea.addEventListener("dragover", (event) => allowDrop(event));