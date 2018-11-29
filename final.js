import { pokemon } from './assets/pokemon.js'

const pokeData = pokemon

// Filters main pokemon file to make arrays of the start pokemon based on type
const fireType = pokemon.filter(pokemon => pokemon.type[0] === "fire") 
const waterType = pokemon.filter(pokemon => pokemon.type[0] === "water")
const grassType = pokemon.filter(pokemon => pokemon.type[0] === "grass")

console.log(pokemon)

//-------------------------------------------

const pokeContainer = document.querySelector('#container')

let i = 0 // variable for selecting info from the array





//------------ Main Pokemon Card/Button Functions -----------------

// Function to set up the front side of the pokemon card
const cardFront = (element) => {
    let imgName = (`${element.id}${element.ename}.png`)
    let fig = document.createElement('figure')
    fig.className = "card_face card_face_front"
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `pokemon_Images/${imgName}`
    cap.textContent = element.ename
    fig.appendChild(img)
    fig.appendChild(cap)
    return fig
}

// function to set up theh backside of the pokemon card
const cardBack = (element) => {
    let i = 0;
    let backDiv = document.createElement('div')
    backDiv.className = "card_face card_face_back"
    let name = document.createElement('h3')
    let pokeId = document.createElement('p1')
    let attack = document.createElement('p2')
    let defence = document.createElement('p3')
    let hp = document.createElement('p4')
    name.textContent = (`Name: ${element.ename}`)
    pokeId.textContent = (`Id Number: ${element.id}`)
    attack.textContent = (`Attack: ${element.base.Attack}`)
    defence.textContent = (`Defense: ${element.base.Defense}`)
    hp.textContent = (`HP: ${element.base.HP}`)
    backDiv.appendChild(name)
    backDiv.appendChild(pokeId)
    backDiv.appendChild(attack)
    backDiv.appendChild(defence)
    backDiv.appendChild(hp)
    i++
    return backDiv
}

// function to create pokemon cards based on a certain array, and places them in specified div
function printPokemon(array, pokeSection) {
    array.forEach(pokemon => {
        let pokemonCard = document.createElement('div')
        pokemonCard.className = "card"
        pokemonCard.appendChild(cardFront(pokemon))
        pokemonCard.appendChild(cardBack(pokemon))
        pokeSection.appendChild(pokemonCard)
        pokemonCard.addEventListener('click', function(){
            pokemonCard.classList.toggle('is-flipped');
        })
    }) 
}

// uses above function prints all the pokemon to the page
printPokemon(pokemon, pokeContainer) 


// function to resond to button press based on desired poke-type
function typeButton (typeButton, arrayName, pokeType, section, cardType) {
    typeButton.addEventListener('click', () => {
        let messageDiv = document.createElement('div')
        let message = document.createElement('h2')
        message.textContent = `You've selected ${pokeType} Pokemon!`// 
        messageDiv.appendChild(message)
        messageDiv.className= 'typeHeading'
        section.appendChild(messageDiv)
        let cardType = document.createElement('div')
        cardType.className = 'typeCard'
        section.appendChild(cardType)
        printPokemon(arrayName, cardType)
    })
}

function Pokemon (ename, id, base, type) {
    this.ename = ename
    this.id = id
    this.base = {
        Attack: base.Attack,
        Defense: base.Defense,
        HP: base.HP
    }
    this.type = type
}

let dragonite = new Pokemon("Dragonite", 149, {"Attack": 134, "Defense": 95, "HP": 91}, "dragon")
let mew = new Pokemon("Mew", 151, {"Attack": 100, "Defense": 100, "HP": 100}, "psychic")
let mewTwo = new Pokemon("Mewtwo", 150, {"Attack": 110, "Defense": 110, "HP": 90}, "psychic")

let rareType = [dragonite, mew, mewTwo]

console.log(dragonite)
console.log(mew)
console.log(mewTwo)
console.log(rareType)


//-------------- end of functions --------------------
// sets up the card layout based on type to be used when specific button is pressed
let fireSection = document.querySelector('#fireContainer')
let fireCard = document.querySelector('#fireCards')
let fireButton = document.querySelector('#fireType')

let waterSection = document.querySelector('#waterContainer')
let waterCard = document.querySelector('#waterCards')
let waterButton = document.querySelector('#waterType')

let grassSection = document.querySelector('#grassContainer')
let grassCard = document.querySelector('#grassCards')
let grassButton = document.querySelector('#grassType')

let rareSection = document.querySelector('#rareContainer')
let rareCard = document.querySelector('#rareCards')
let rareButton = document.querySelector('#raretype')

// Print main poke-types after type-button has been pushed
typeButton (fireButton, fireType, "Fire-Type", fireSection, fireCard)
typeButton (waterButton, waterType, "Water-Type", waterSection, waterCard)
typeButton (grassButton, grassType, "Grass-Type", grassSection, grassCard)
typeButton (rareButton, rareType, "Rare-Type", rareSection, rareCard)














///////////////////////////////////////////////////////
/*

let congrats = document.querySelector('#pokemonInfo')

let fireButton = document.querySelector('#fireButton')
let waterButton = document.querySelector('#waterButton')
let grassButton = document.querySelector('#grassButton')


fireButton.addEventListener('click', () => {
    let message = document.createElement('h2')
    message.textContent = "Congrats You selected Charmander!"
    congrats.appendChild(message)

    // adds buttons to the pokemon info section
    let buttonDiv = document.createElement('div')
    buttonDiv.className = "pokemonSection"
    let evolutionButton = document.createElement('a')
    let weaknessButton = document.createElement('a')
    let strengthButton = document.createElement('a')
    evolutionButton.className = 'button'
    weaknessButton.className = 'button'
    strengthButton.className = 'button'
    evolutionButton.textContent = "Evolutions"
    weaknessButton.textContent = "Weaknesses"
    strengthButton.textContent = "Strengths"
    buttonDiv.appendChild(evolutionButton)
    buttonDiv.appendChild(weaknessButton)
    buttonDiv.appendChild(strengthButton)
    congrats.appendChild(buttonDiv)

    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(cardFront(fireType))
    card.appendChild(cardBack(fireType))
    pokeContainer.appendChild(card)

    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    })
})

waterButton.addEventListener('click', () => {
    let message = document.createElement('h2')
    message.textContent = "Congrats You selected Squirtle!"
    congrats.appendChild(message)
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(cardFront(waterType))
    card.appendChild(cardBack(waterType))
    pokeContainer.appendChild(card)
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    })
})

grassButton.addEventListener('click', () => {
    let message = document.createElement('h2')
    message.textContent = "Congrats You selected Bulbasaur!"
    congrats.appendChild(message)
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(cardFront(grassType))
    card.appendChild(cardBack(grassType))
    pokeContainer.appendChild(card)
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    })
})

//---------------------------------------------
*/