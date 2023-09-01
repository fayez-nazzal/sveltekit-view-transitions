<script lang="ts">
  import "virtual:uno.css";

  import { onNavigate } from "$app/navigation";
  import HeaderItem from "$lib/HeaderItem.svelte";

  onNavigate(() => {
    // check browser compatibility
    if (!document.startViewTransition) return;

    return new Promise((fulfil) => {
      /* This will take a screenshot of the whole page, and freeze
					until the animation promise resolves */
      document.startViewTransition(() => new Promise(fulfil));
    });
  });
</script>

<div class="h-screen flex flex-col font-sans font-medium text-white">
  <header>
    <nav class="flex justify-center gap-4 bg-sky p-2.5">
      <HeaderItem href="/">
        <i class="i-mdi-view-dashboard w-6 h-6" />
        <span>Dashboard</span>
      </HeaderItem>
      <HeaderItem href="/edit">
        <i class="i-mdi-account w-6 h-6" />
        <span>Edit Profile</span>
      </HeaderItem>
    </nav>
  </header>

  <div class="flex flex-col flex-grow min-h-0 content">
    <slot />
  </div>
</div>

<style>
  /* For animating the inner content only, without the nav-bar,
     we assign a unique transition name */
  .content {
    view-transition-name: content;
  }

  /* Set transition origin for old and new snapshots of the inner page */
  :root::view-transition-old(content),
  :root::view-transition-new(content) {
    transform-origin: center;
  }

  /* Animate the old snapshot out */
  :root::view-transition-old(content) {
    animation: 1s ease-in-out both scale-out-slide-left;
  }

  /* Animate the new snapshot in */
  :root::view-transition-new(content) {
    animation: 1s ease-in-out both slide-left-scale-in 0.5s;
  }

  /* Define the animations */
  @keyframes scale-out-slide-left {
    0% {
      transform: scale(1) translateX(0);
    }

    50% {
      transform: scale(0.8) translateX(0);
    }

    100% {
      transform: scale(0.8) translateX(-150vw);
    }
  }

  @keyframes slide-left-scale-in {
    0% {
      transform: scale(0.8) translateX(150vw);
    }

    50% {
      transform: scale(0.8) translateX(0);
    }

    100% {
      transform: scale(1) translateX(0);
    }
  }
</style>
