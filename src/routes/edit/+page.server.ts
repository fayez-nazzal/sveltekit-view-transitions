import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    const name = data.get('name') as string | null;
    const email = data.get('email') as string | null;
    const pokemonId = data.get('pokemonId') as string | null;

    if (!name || !email || !pokemonId) {
      return fail(400, {
        message: 'Please fill out all fields',
        name,
        email,
        pokemonId,
      });
    }

    cookies.set('name', name);
    cookies.set('email', email);
    cookies.set('pokemonId', pokemonId);

    return {
      message: 'Your profile has been updated!',
      name,
      email,
      pokemonId,
    };
  },
} satisfies Actions;
