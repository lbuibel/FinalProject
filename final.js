import { people } from './assets/starwarsPeople.js'
import { senatorData } from './assets/senator.js'
import { pokemon } from './assets/pokemon.js'


const senators = senatorData[0].results[0].members


const electricType = pokemon.filter(pokemon => pokemon.type[0] === "electric");
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

