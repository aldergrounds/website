<script lang="ts">
  import Github from "$lib/assets/icons/gh-logo.png";
  import Youtube from "$lib/assets/icons/yt-logo.png";
  import Discord from "$lib/assets/icons/dc-logo.png";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 sm:py-24 lg:py-32">
  <!-- Background glow -->
  <!--<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div class="h-150 w-150 rounded-full bg-primary/10 blur-[120px]"></div>
  </div>-->

  <div class="relative mx-auto max-w-4xl text-center">
    <h1
      class="animate-fade-in-up animation-delay-100 mb-6 text-5xl font-extrabold
             tracking-tighter text-white sm:text-6xl lg:text-8xl"
    >
      Alder<span
        class="bg-linear-to-r from-primary to-sky-700
               bg-clip-text text-transparent"
      >Grounds</span>
    </h1>

    <p
      class="text-muted-foreground animate-fade-in-up animation-delay-200 mx-auto
             mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl"
    >
      A cross-platform multiplayer mod for Grand Theft Auto: San Andreas.
    </p>

    <!-- CTA buttons -->
    <div class="animate-fade-in-up animation-delay-300 mb-10 flex flex-wrap items-center justify-center gap-8">
      <a href="https://github.com/aldergrounds" class="cursor-pointer size-12">
        <img src={Github} alt="Github logo">
      </a>

      <a href="https://youtube.com/aldergrounds" class="cursor-pointer size-12">
        <img src={Youtube} alt="Youtube logo">
      </a>

       <a href="https://discord.gg/JR6X4v7VnS" class="cursor-pointer size-12">
        <img src={Discord} alt="Discord logo">
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg
      class="size-5 text-muted-foreground/40"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

</div>

<style>
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-100 { animation-delay: 0.1s; }
  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-300 { animation-delay: 0.3s; }
</style>
