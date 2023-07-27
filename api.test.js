const pokedex = require('./api');
const pokedexClass = pokedex.Pokedex


//testing callbacks using three different methods
describe('fetchPokemon', () => {
    //when returning a promise, Jest waits for the promise before ending the test
    it('fetchPokemon(charizard) returns data for charizard', () => {
        return pokedex.fetchPokemon('charizard')
            .then((pokemon) => {
                expect(pokemon.name).toEqual('charizard');
            })
    });
    //when adding a done parameter to the function passed into it() 
    //Jest waits for the done function to be called before ending the test
    it('fetchPokemon(jigglypuff) returns data for jigglypuff', (done) => {
        pokedex.fetchPokemon('jigglypuff')
            .then((pokemon) => {
                expect(pokemon.name).toEqual('jigglypuff');
                done();
            });
    });
});

describe('Pokedex', () => {
    it('pokemonList initially empty', () => {
        const myPokedex = new pokedexClass;
        expect(myPokedex.all()).toEqual([])
    })
})

// when using async/await syntax, test waits for command following 
// await to execute before moving to next line
describe('catch', () => {
    it('catching pikachu adds pikachu to pokemonList', async () => {
        const myPokedex = new pokedexClass;
        await myPokedex.catch('pikachu');
        expect(myPokedex.all()[0].name).toEqual('pikachu')
    })
    it('then adding jigglipuff adds jigglypuff to pokemonList', async () => {
        const myPokedex = new pokedexClass;
        await myPokedex.catch('pikachu');
        await myPokedex.catch('jigglypuff');
        expect(myPokedex.all()[1].name).toEqual('jigglypuff')
    })
})
