import { pokemon } from './assets/pokemon.js'
import { legendary } from './assets/legendary.js'


// Filters main pokemon file to make arrays of the start pokemon based on type
const fireType = pokemon.filter(pokemon => pokemon.type[0] === "fire") 
const waterType = pokemon.filter(pokemon => pokemon.type[0] === "water")
const grassType = pokemon.filter(pokemon => pokemon.type[0] === "grass")

console.log(pokemon)

//-------------------------------------------

const pokeContainer = document.querySelector('#container')

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
    let counter = 0;
    typeButton.addEventListener('click', () => {
        if (counter < 1){
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
            console.log(`The selected type of pokemon was ${pokeType}`)
            counter++
        } else{
            console.log(`${pokeType} button is already selected`)
        }
    })
}


// constructor to create new pokeon - will be used to create rare pokemon array
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


//-------------- end of functions --------------------

// addition of rare pokemon
let dragonite = new Pokemon("Dragonite", 149, {"Attack": 134, "Defense": 95, "HP": 91}, "dragon")
let mew = new Pokemon("Mew", 151, {"Attack": 100, "Defense": 100, "HP": 100}, "psychic")
let mewTwo = new Pokemon("Mewtwo", 150, {"Attack": 110, "Defense": 110, "HP": 90}, "psychic")

let rareType = [dragonite, mew, mewTwo] // new array with all the newly made rare pokemon


// sets up the card layout based on type when specific button is pressed
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


// random legendary bird button
let bird1 = legendary[0] // articuno
let bird2 = legendary[1] // zapdos
let bird3 = legendary[2] // moltres

let button = document.querySelector('#newCard')

var bird; // variable used when selecting random bird

button.addEventListener('click', () => {
    switch (Math.floor(Math.random() * Math.floor(4))){
        // bird choice conditioned based on the random number that was generated
        case 1:
            bird = legendary[0];
            break;
        case 2:
            bird = legendary[1];
            break;
        case 3:
            bird = legendary[2];
    }

    console.log(`The randomly selected bird was ${bird.ename}`)

    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(cardFront(bird))
    card.appendChild(cardBack(bird))
    legendaryContainer.appendChild(card)
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    })
})
