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


module.exports = fetchPokemon;