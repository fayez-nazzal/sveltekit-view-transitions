import type { LayoutServerLoad } from './$types';

const defaultData = {
  name: 'Hash Ketchum', // Ash Ketchum's cousin, he's a developer
  email: 'hash@catchemcode.com',
  pokemonId: 7,
};

export const load = (async ({ cookies }) => {
  const name = cookies.get('name') || defaultData.name;
  const email = cookies.get('email') || defaultData.email;
  const pokemonId = cookies.get('pokemonId') || defaultData.pokemonId.toString();

  cookies.set('name', name);
  cookies.set('email', email);
  cookies.set('pokemonId', pokemonId);

  const paddedPokemonId = pokemonId.padStart(3, '0');
  const pokemonAssetsUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';
  const pokemonImageSrc = `${pokemonAssetsUrl}/${paddedPokemonId}.png`;

  return {
    pokemonImageSrc,
    name,
    email,
    pokemonId,
  };
}) satisfies LayoutServerLoad;
