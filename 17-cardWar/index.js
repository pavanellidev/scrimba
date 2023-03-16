let deckId
let computerScore = 0
let yourScore = 0
const remaining = document.getElementById("remaining-cards")
const computerScoreEl = document.getElementById("computer-score")
const yourScoreEl = document.getElementById("your-score")
const winnerText = document.querySelector('h2')

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remaining.innerText = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
        })
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
                <img src=${data.cards[0].image} />  
            `
            cardSlotTwo.innerHTML = `
                <img src=${data.cards[1].image} />  
            `
  
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

            remaining.innerText = `Remaining cards: ${data.remaining}`

            if(data.remaining === 0) {
                document.querySelector('#draw-cards').style.cursor = 'none'
                document.querySelector('button:hover').style.backgroundColor = '#ecbb3d'
                document.querySelector('button:hover').style.color = '#ecbb3d'
            } 
    })
})