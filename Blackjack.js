
let cardEl = document.querySelector("#card-el")
let cards = []
let sum = 0
let player = {
    name: "Minh",
    chips: "100"
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips


let messageEl = document.getElementById("message-el")
let hasBlackjack = false 
let isAlive = false
let message = ""

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    
    

    renderGame()
}


function renderGame() {
    if  (sum <= 20) {
        message = "Do you wanna draw a new card?"
        hasBlackjack = false
        isAlive = true
    }   else if (sum === 21) {
        message = "Wohoo! You has blackjack"
        hasBlackjack = true
        isAlive = true
    }   else { message = "You're out of the game!"
        hasBlackjack = false
        isAlive = false    
    }
    cardEl.textContent = "Card: "

    for (let i = 0; i < cards.length ; i++) {
        cardEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
    document.querySelector("#sum-el").textContent = "Sum:" + sum
}

function Newcard() {
    
    if (isAlive === true && hasBlackjack === false){
        console.log ("okay")
    let newcard = getRandomCard()
    cards.push(newcard)
    sum += newcard
    renderGame()
    }
}

function getRandomCard() {
    random = Math.floor(Math.random()*13) + 1
    if (random === 1) {return 11
    } else if (random >= 10) {return 10
    } else {return random}
    
}