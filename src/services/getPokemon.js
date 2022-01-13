const baseUrl = 'http://pokeapi.salestock.net/api/v2/';
const query = {
  pokemon: 'pokemon'
}

export async function fetchPokemon(pokemon) {
  console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`, {
    mode:'cors'
  }).then((response)=> {
    console.log(response);
    return response;
  })
}
