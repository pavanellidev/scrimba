let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                    return 'Computer wins!'
                } else if (card2ValueIndex > card1ValueIndex) {
                    return 'You win!'
                } else {
                    return "It's a tie!"
                }
            }

            document.querySelector('h2').innerText = determineWinner(data.cards[0], data.cards[1])

    })
})