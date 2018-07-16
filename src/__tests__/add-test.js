import getCharacters from '../services/MarvelService';

test('Retorno da API = 20', async () => {
    return getCharacters().then((resolve) => {
        const data = resolve.data.data.results;    
        expect(data.length).toBe(20);
    });
});
