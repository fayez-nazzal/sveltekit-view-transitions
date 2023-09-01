<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: isActive = $page.url.pathname === href;
</script>

<a
  class="flex items-center gap-2 text-xl color-white hover:bg-cyan-100/20 p-2.5 rounded-xl {isActive &&
    'bg-cyan-100/40'}"
  href={href}>
  <slot />
</a>
