<script lang="ts">
	import { enhance } from '$app/forms';
	import TextField from '$lib/TextField.svelte';
	import type { PageData } from './$types.js';

	export let form;
	export let data: PageData;
</script>

<main class="flex-grow min-h-0 bg-violet-500">
  <div class="mx-auto py-12 text-center">
    <h1 class="text-4x">Edit Profile Info</h1>
    <div class="flex flex-col items-center gap-8">
      <form method="POST" use:enhance class="text-center w-[90vw] lg:w-[50vw] xl:w-[33vw]">
        {#if form?.message}
          <p>{form.message}</p>
        {/if}

        <h2>User Info</h2>
        <div class="flex flex-col gap-6">
          <TextField name="name" type="text" placeholder="Name" value={form?.name ?? data.name} />
          <TextField name="email" type="email" placeholder="Email" value={form?.email ?? data.email} />
          <TextField
            name="pokemonId"
            type="number"
            placeholder="Pokemon Id"
            value={form?.pokemonId ?? data.pokemonId}
          />
          <button
            class="mt-2 cursor-pointer bg-pink-400 hover:brightness-110 transition-all p-3 border-0 rounded-xl text-lg text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</main>
