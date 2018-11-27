import { people } from './assets/starwarsPeople.js'
import { senatorData } from './assets/senator.js'
import { pokemon } from './assets/pokemon.js'

const senators = senatorData[0].results[0].members
const pokeData = pokemon

console.log(pokeData)

const fireType = pokemon.filter(pokemon => pokemon.type[0] === "fire");
const waterType = pokemon.filter(pokemon => pokemon.type[0] === "water")
const grassType = pokemon.filter(pokemon => pokemon.type[0] === "grass")

const fireAttack = fireType.reduce((acc, pokemon) => fireType[0].base.Attack > 0 ? pokemon : acc, 0)
console.log(`highest fire attack: ${fireAttack.ename}`)

const waterAttack = waterType.reduce((acc, pokemon) => waterType[0].base.Attack > 0 ? pokemon : acc, 0)
console.log(`highest water attack: ${waterAttack.ename}`)

console.log(fireType)
console.log(waterType)
console.log(grassType)

console.log(fireType[0].base.Attack)


//-------------------------------------------

const pokeContainer = document.querySelector('#container')

let i = 0

const cardFront = (element) => {
    let imgName = (`${element[i].id}${element[i].ename}.png`)
    let fig = document.createElement('figure')
    fig.className = "card_face card_face_front"
    let cap = document.createElement('figcaption')
    let img = document.createElement('img')
    img.src = `pokemon_Images/${imgName}`
    cap.textContent = element[i].ename
    fig.appendChild(img)
    fig.appendChild(cap)
    return fig
}

const cardBack = (element) => {
    let i = 0;
    let backDiv = document.createElement('div')
    backDiv.className = "card_face card_face_back"
    let name = document.createElement('h3')
    let pokeId = document.createElement('p1')
    let attack = document.createElement('p2')
    let defence = document.createElement('p3')
    let hp = document.createElement('p4')
    name.textContent = (`Name: ${element[i].ename}`)
    pokeId.textContent = (`Id Number: ${element[i].id}`)
    attack.textContent = (`Attack: ${element[i].base.Attack}`)
    defence.textContent = (`Defense: ${element[i].base.Defense}`)
    hp.textContent = (`HP: ${element[i].base.HP}`)
    backDiv.appendChild(name)
    backDiv.appendChild(pokeId)
    backDiv.appendChild(attack)
    backDiv.appendChild(defence)
    backDiv.appendChild(hp)
    i++
    return backDiv
}

/*
pokemon.forEach(pokemon => {
    let pokemonCard = document.createElement('div')
    pokemonCard.className = "card"
    pokemonCard.appendChild(cardFront(pokemon))
    pokemonCard.appendChild(cardBack(pokemon))
    pokeContainer.appendChild(pokemonCard)
    pokemonCard.addEventListener('click', function(){
        pokemonCard.classList.toggle('is-flipped');
    })
})
*/

///////////////////////////////////////////////////////

let congrats = document.querySelector('#pokemonInfo')


let fireButton = document.querySelector('#fireButton')
let waterButton = document.querySelector('#waterButton')
let grassButton = document.querySelector('#grassButton')

fireButton.addEventListener('click', () => {
    let message = document.createElement('h2')
    message.textContent = "Congrats You selected Charmander!"
    congrats.appendChild(message)
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
