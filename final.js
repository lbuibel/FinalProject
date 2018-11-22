import { people } from './assets/starwarsPeople.js'
import { senators } from './assets/senator.js'
import { pokemon } from './assets/pokemon.js'

console.log(`Star wars people import: ${people}`)
console.log(`Senators import: ${senators}`)
console.log(`Pokemon import: ${pokemon}`)

const electricType = pokemon.filter(pokemon => pokemon.type[0] === "electric");
const fireType = pokemon.filter(pokemon => pokemon.type[0] === "fire");
const waterType = pokemon.filter(pokemon => pokemon.type[0] === "water")
const grassType = pokemon.filter(pokemon => pokemon.type[0] === "grass")

/*
const fireAttack = pokemon.reduce((strongest, pokemon) => {
    return (strongest[0].base.Attack || 0) > fireType[0].base.Attack ? strongest : pokemon
}, {})
*/



console.log(electricType[0].base.Attack)
console.log(fireType)
console.log(waterType)
console.log(grassType)

console.log(fireAttack)
