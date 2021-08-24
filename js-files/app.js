console.log('tictactoe.js connected');

const clList = document.getElementsByClassName('single-field');
const numbers = [11,22,33,44,55,66,77,88,99];


const drawGame = document.getElementById('draw-game');
const onePlayerScore = document.getElementById('one-score');
const twoPlayerScore = document.getElementById('two-score');
const playerOne = 'O';
const playerTwo = 'X';
let cnt = 1;

document.getElementById('restart-game').addEventListener('click', function(){
    for(let i=0; i<clList.length; i++){
        clList[i].innerText = numbers[i];
        clList[i].style.color = '#DE5A2B';
    }
    cnt = 1;
    const finalField = document.getElementById('final-field');
    finalField.style.backgroundColor = '#e7eb01';
    finalField.style.visibility ='hidden';
    const winResult = document.getElementById('show-result');
    winResult.innerText = 'Draw';
})

function getWinner(player){
    const finalField = document.getElementById('final-field');
    const winResult = document.getElementById('show-result');
    if(player === 'O'){
        onePlayerScore.innerText = (parseInt(onePlayerScore.innerText)+1)
    }
    else if(player === 'X'){
        twoPlayerScore.innerText = (parseInt(twoPlayerScore.innerText)+1)
    }
    finalField.style.backgroundColor = '#14CF46';
    winResult.innerText = `Winner ${player}`;
    finalField.style.visibility = 'visible';
}

function getResult(player,cnt){
    const boxOne = document.getElementById('box-one').innerText;
    const boxTwo = document.getElementById('box-two').innerText;
    const boxThree = document.getElementById('box-three').innerText;
    const boxFour = document.getElementById('box-four').innerText;
    const boxFive = document.getElementById('box-five').innerText;
    const boxSix = document.getElementById('box-six').innerText;
    const boxSeven = document.getElementById('box-seven').innerText;
    const boxEight = document.getElementById('box-eight').innerText;
    const boxNine = document.getElementById('box-nine').innerText;
    const finalField = document.getElementById('final-field');
    console.log(boxOne,boxTwo,boxThree);
    console.log(boxFour,boxFive,boxSix);
    console.log(boxSeven,boxEight,boxNine);
    if(cnt>4 && cnt <10){
        // 123
        if(boxOne === boxTwo && boxTwo === boxThree){
            console.log(`cond 1 : winner,${player}`);
            getWinner(player);
        }
        // 456
        else if(boxFour === boxFive && boxFive === boxSix){
            console.log(`cond 2 : winner,${player}`);
            getWinner(player);
        }
        // 789
        else if(boxSeven === boxEight && boxEight === boxNine){
            console.log(`cond 3 : winner,${player}`);
            getWinner(player);
        }
        // 147
        else if(boxOne === boxFour && boxFour === boxSeven){
            console.log(`cond 4 : winner,${player}`);
            getWinner(player);
        }
        // 258
        else if(boxTwo === boxFive && boxFive === boxEight){
            console.log(`cond 5 : winner,${player}`);
            getWinner(player);
        }
        // 369
        else if(boxThree === boxSix && boxSix === boxNine){
            console.log(`cond 6 : winner,${player}`);
            getWinner(player);
        }
        // 159
        else if(boxOne == boxFive && boxFive == boxNine){
            console.log(`cond 7 : winner,${player}`);
            getWinner(player);
        }
        // 357
        else if(boxThree == boxFive && boxFive == boxSeven){
            console.log(`cond 8 : winner,${player}`);
            getWinner(player);
        }
    }
    if(cnt == 9){
        finalField.style.visibility = 'visible';
        const prevDraw = parseInt(drawGame.innerText);
        drawGame.innerText = prevDraw+1;
    }
}

for(const item of clList){
    item.addEventListener('click', function(){
        let itemLen = item.innerText.length;
        if(cnt%2==1 && itemLen>1){
            item.innerText = playerOne;
            item.style.color = '#000000'
            getResult(playerOne,cnt);
        }
        else if(itemLen>1){
            item.innerText = playerTwo;
            item.style.color = '#000000'
            getResult(playerTwo,cnt);
        }
        cnt++;
    })
}