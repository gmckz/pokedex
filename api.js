class Pokedex {
    constructor() {
        this.pokemonList = [];
    }

    all() {
        return this.pokemonList;
    }

    catch(pokemon) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.pokemonList.push({
                    name: data.name,
                    id: data.id,
                    height: data.height,
                    weight: data.weight,
                    types: data.types
                })
                })
    }
}

const fetchPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                return {
                    name: data.name,
                    id: data.id,
                    height: data.height,
                    weight: data.weight,
                    types: data.types
                }
                })
}


module.exports = {Pokedex, fetchPokemon};
