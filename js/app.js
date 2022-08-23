const userChoiceBox = document.getElementById("user-selection");
const computerChoiceBox = document.getElementById("computer-selection");
const resultBox = document.getElementById("result");
var currScore = document.getElementById("count");
var user = 0;
var computer = 0;
function userSelection(s){
    user = s;
    if(s===1){
        userChoiceBox.innerHTML = (
            `<img class="rock mar" src="./img/rock.png">`
        );
    }
    if(s===2){
        userChoiceBox.innerHTML = (
            `<img class="paper mar" src="./img/paper.png">`
        );
    }
    if(s===3){
        userChoiceBox.innerHTML = (
            `<img class="scissor mar" src="./img/scissors.png">`
        );
    }
    computerSelection();
    computeResult();
    setTimeout(removeResult,2000);
}
function removeResult(){
    resultBox.setAttribute("style", "visibility:hidden;");
}

function computerSelection(){
    let ch = Math.floor(Math.random()*3) +1;
    computer = ch;
    if(ch===1){
        computerChoiceBox.innerHTML = (
            `<img class="rock mar" src="./img/rock.png">`
        );
    }
    if(ch===2){
        computerChoiceBox.innerHTML = (
            `<img class="paper mar" src="./img/paper.png">`
        );
    }
    if(ch===3){
        computerChoiceBox.innerHTML = (
            `<img class="scissor mar" src="./img/scissors.png">`
        );
    }
}

function computeResult(){
    if(user === 1 && computer === 1){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/Tie.png">`
        );
    }
    if(user === 1 && computer === 2){
       resultBox.innerHTML = (
            `<img class="mar" src="./img/YouLoose.png">`
        );
    }
    if(user === 1 && computer === 3){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/YouWin.png">`
        );
        currScore.innerHTML = ` <h1> ${parseInt(currScore.innerText, 10) + 1} </h1>`
    }

    if(user === 2 && computer === 1){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/YouWin.png">`
        );
        currScore.innerHTML = ` <h1> ${parseInt(currScore.innerText, 10) + 1} </h1>`
    }
    if(user === 2 && computer === 2){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/Tie.png">`
        );
    }
    if(user === 2 && computer === 3){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/YouLoose.png">`
        );
    }

    if(user === 3 && computer === 1){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/YouLoose.png">`
        );
    }
    if(user === 3 && computer === 2){
        resultBox.innerHTML = (
            `<img class="mar" src="./img/YouWin.png">`
        );
        currScore.innerHTML = ` <h1> ${parseInt(currScore.innerText, 10) + 1} </h1>`
    }
    if(user === 3 && computer === 3){
        resultBox.innerHTML = `<img class="mar" src="./img/Tie.png">`;
    }
    resultBox.setAttribute(
        "style",
        "visibility:visible; "
    );
}