const fetchPokemon = require('./api');


//testing callbacks using two different methods
describe('fetchPokemon', () => {
    //when returning a promise, Jest waits for the promise before ending the test
    it('fetchPokemon(charizard) returns data for charizard', () => {
        return fetchPokemon('charizard')
            .then((pokemon) => {
                expect(pokemon.name).toEqual('charizard');
            })
    });
    //when adding a done parameter to the function passed into it() 
    //Jest waits for the done function to be called before ending the test
    it('fetchPokemon(jigglypuff) returns data for jigglypuff', (done) => {
        fetchPokemon('jigglypuff')
            .then((pokemon) => {
                expect(pokemon.name).toEqual('jigglypuff');
                done();
            });
    });
});

