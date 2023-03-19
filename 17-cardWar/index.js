let deckId
let computerScore = 0
let yourScore = 0
const remaining = document.getElementById("remaining-cards")
const computerScoreEl = document.getElementById("computer-score")
const yourScoreEl = document.getElementById("your-score")
const winnerText = document.querySelector('h2')
let turns = 10 
let turns2 = 10 

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remaining.innerText = `Remaining turns: ${turns}`
            document.getElementById('computer-score').style.display = 'block'
            document.getElementById('your-score').style.display = 'block'
            document.getElementById('instructions').style.display = 'none'
            deckId = data.deck_id
        })
        if(document.getElementById("new-deck").innerText === "RESTART GAME") {       
            window.location.reload()
        }
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            const cardSlotOne = document.getElementById("card-slot1")
            const cardSlotTwo = document.getElementById("card-slot2")
            
            cardSlotOne.style.border = 'none'
            cardSlotTwo.style.border = 'none'

            cardSlotOne.innerHTML = `
                <span class="you">🤖</span>
                <img src=${data.cards[0].image} />  
            `
            cardSlotTwo.innerHTML = `
                <span class="computer">🙂</span>
                <img src=${data.cards[1].image} />  
            `
            
            document.getElementById("new-deck").style.color = '#ecbb3d'

            function determineWinner(card1, card2) {
                const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
                "10", "JACK", "QUEEN", "KING", "ACE"]

                const card1ValueIndex = valueOptions.indexOf(card1.value)
                const card2ValueIndex = valueOptions.indexOf(card2.value)

                if(card1ValueIndex > card2ValueIndex) {
                    computerScore++
                    computerScoreEl.innerText = `Computer Score: ${computerScore}`
                    return 'Computer wins!'
                } else if (card2ValueIndex > card1ValueIndex) {
                    yourScore++
                    yourScoreEl.innerText = `Your Score: ${yourScore}`
                    return 'You win!'
                } else {
                    return "It's a tie!"
                }

            }

            winnerText.innerText = determineWinner(data.cards[0], data.cards[1])

            remaining.innerText = `Remaining turns: ${turns = turns-1}`
            document.querySelector('#draw-cards').innerText = `DRAW (${turns2 = turns2-1})`

            if(data.remaining === 32) {
                document.querySelector('#draw-cards').style.cursor = 'none'
                document.querySelector('button:hover').style.backgroundColor = '#ecbb3d'
                document.querySelector('button:hover').style.color = '#ecbb3d'
                document.querySelector('#draw-cards').disabled = 'true'
                document.getElementById("new-deck").innerText = 'RESTART GAME'
                document.getElementById("new-deck").style.color = 'green'
                if(computerScore > yourScore) {
                    winnerText.innerText = "Computer beats you!"
                    winnerText.classList.add('loose')
                } else if(computerScore < yourScore) {
                    winnerText.innerText = "You beat the computer!"
                    winnerText.classList.add('win')
                } else if(computerScore == yourScore) {
                    winnerText.innerText = "It's a Draw."
                    winnerText.classList.add('draw')
                }
            }           
            
    })
})