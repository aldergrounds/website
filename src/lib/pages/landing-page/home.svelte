<script lang="ts">
  import Github from "$lib/assets/icons/gh-logo.png";
  import Youtube from "$lib/assets/icons/yt-logo.png";
  import Discord from "$lib/assets/icons/dc-logo.png";
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 sm:py-24 lg:py-32">
  <div class="relative mx-auto max-w-4xl text-center">
    <h1
      class="font-pricedown mb-6 text-5xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-8xl"
    >
      Alder<span class="bg-linear-to-r from-primary to-sky-700 bg-clip-text text-transparent">Grounds</span>
    </h1>

    <p class="flex flex-col gap-2 text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl font-semibold">
      Multiplayer mod cross-platform for
      <span class="gta-title bg-primary text-white px-2 py-0.5">Grand Theft Auto: San Andreas.</span>
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a
        href="/download"
        class="border border-primary hover:bg-primary duration-200 cursor-pointer px-10 h-12 font-pricedown text-lg flex items-center justify-center"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);"
      >
        DOWNLOAD AGORA
      </a>

      <a
        href="#servers"
        class="border border-white/20 hover:border-white/40 duration-200 cursor-pointer px-8 h-12 font-pricedown text-lg flex items-center justify-center"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);"
      >
        VER SERVIDORES
      </a>
    </div>

    <!-- Social -->
    <div class="flex flex-wrap items-center justify-center gap-8">
      <div>
        <span class="text-xs text-muted-foreground font-semibold">FIND US</span>
      </div>
      <a href="https://github.com/aldergrounds" target="_blank" class="cursor-pointer size-9 hover:scale-110 transition">
        <img src={Github} alt="Github">
      </a>
      <a href="https://youtube.com/aldergrounds" target="_blank" class="cursor-pointer size-9 hover:scale-110 transition">
        <img src={Youtube} alt="Youtube">
      </a>
      <a href="https://discord.gg/JR6X4v7VnS" target="_blank" class="cursor-pointer size-9 hover:scale-110 transition">
        <img src={Discord} alt="Discord">
      </a>
    </div>
  </div>
</section>
