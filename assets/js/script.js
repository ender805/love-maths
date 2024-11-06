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