const allSquares = document.querySelectorAll('#grid .square')
const mole = document.querySelector('.mole')
const scoreBoard = document.querySelector('#score')
const timer = document.querySelector('#timer')

let randomSquareId
let randomSquare
let score = 0
let time = 60
let selectSquareTimer

scoreBoard.textContent = score
function selectRandomSquare(){
    allSquares.forEach(square =>{
        return square.classList.remove('mole')
    })
    randomSquareId = Math.floor(Math.random() * 9);
    const randomSquare = allSquares[randomSquareId]
    randomSquare.classList.add('mole')
    randomSquare.addEventListener('mousedown',hitMole)
}

function moveMole(){
    selectSquareTimer = setInterval(selectRandomSquare,500)    
}

function hitMole(){
    const hitPosition = this.getAttribute('id')
    if(parseInt(hitPosition) === (randomSquareId+1)){
        score++;        
    }
    scoreBoard.textContent = score
}

function setTimer(){
        time--;
        timer.innerHTML=time
        if(time === 0){-
            clearInterval(countDownTimer)
            clearInterval(selectSquareTimer)
            if(confirm(`GAME OVER! You Score is ${score}\nReload the game?`)){
                location.reload()                
            }else{
                score = 0
                scoreBoard.textContent=score
                allSquares[randomSquareId].classList.remove('mole')    
            }
        }
}

let countDownTimer = setInterval(setTimer, 1000)

moveMole()

