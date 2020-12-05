const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const pokemons = {}

function salvarPokemon(pokemon) {
    if (!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function getPokemon(id) {
    return pokemons[id] || {}
}

function getPokemons() {
    return Object.values(pokemons)
}

module.exports = { salvarPokemon, getPokemon, getPokemons, }