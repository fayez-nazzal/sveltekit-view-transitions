<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="flex-grow min-h-0 bg-indigo-400">
  <div class="mx-auto py-12 text-center">
    <h1 class="text-4x">Welcome, {data.name}!</h1>
    <div class="flex flex-col items-center gap-8">
      <h2>Your Pokeomon</h2>
      <div
        class="flex items-center justify-center bg-gray-100 ring-5 ring-pink-400 p-3 rounded-full">
        <img
          src={data.pokemonImageSrc}
          alt="Avatar"
          class="w-64 h-64 rounded-full" />
      </div>
      <div>
        <h2>Your email</h2>
        <p class="text-normal underline">{data.email}</p>
      </div>
    </div>
  </div>
</main>
