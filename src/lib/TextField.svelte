<script lang="ts">
	export let type: string;
	export let value: string;
	export let name: string;
	export let placeholder: string;
</script>

<input
  class="p-3 rounded-xl drop-shadow outline-none border-none ring-3 ring-transparent focus:ring-pink-400 focus:border-pink-400 transition-all text-lg"
  {name}
  {type}
  {placeholder}
  {value}
/>
