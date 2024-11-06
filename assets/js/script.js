document.addEventListener("DoMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");  

  for (let button of buttons) {
    button. addEventListener("click", function() {
        if (this.getAttribute("data-type")=== "submit") {
            alert("You clicked Submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert("You clicked $(gameType");
        }
    })
  }
})


function runGame () {
    // creates two random numbers between 1 and 25 - you can change this later if you want)
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

}

function checkGame () {

}

function calculateCorrectAnswer () {

}
function IncrementScore () {

}

function IncrementWrongAnswer () {

}

function displayAdditionalQuestion () {

}
function displaySubstractQuestion () {

}

function displayMultiplyQuestion () {

}