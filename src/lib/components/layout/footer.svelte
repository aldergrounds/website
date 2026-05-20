<script lang="ts">
  import Github from "$lib/assets/icons/gh-logo.png";
  import Youtube from "$lib/assets/icons/yt-logo.png";
  import Discord from "$lib/assets/icons/dc-logo.png";
</script>

<footer class="bg-muted-foreground/5 relative px-6 py-12 border-t border-white/10">
  <div class="mx-auto max-w-4xl">
    <div class="flex flex-col sm:flex-row items-start justify-between gap-10 mb-10">
      <div class="flex flex-col gap-3">
        <h1 class="font-pricedown text-2xl">A<span class="text-primary">G</span></h1>
        <p class="text-muted-foreground text-sm font-semibold max-w-56 leading-relaxed">
          Multiplayer mod cross-platform for Grand Theft Auto: San Andreas.
        </p>
        <div class="flex items-center gap-4 mt-1">
          <a href="https://github.com/aldergrounds" class="cursor-pointer size-5 opacity-50 hover:opacity-100 duration-200">
            <img src={Github} alt="Github">
          </a>
          <a href="https://youtube.com/aldergrounds" class="cursor-pointer size-5 opacity-50 hover:opacity-100 duration-200">
            <img src={Youtube} alt="Youtube">
          </a>
          <a href="https://discord.gg/JR6X4v7VnS" class="cursor-pointer size-5 opacity-50 hover:opacity-100 duration-200">
            <img src={Discord} alt="Discord">
          </a>
        </div>
      </div>

      <div class="flex gap-16">
        <div class="flex flex-col gap-3">
          <span class="font-pricedown text-white text-sm tracking-tighter">Product</span>
          <ul class="flex flex-col gap-2 text-muted-foreground text-sm font-semibold">
            <li><a href="/servers" class="hover:text-white duration-200">Servers</a></li>
            <li><a href="/download" class="hover:text-white duration-200">Download</a></li>
            <li><a href="/changelog" class="hover:text-white duration-200">Changelog</a></li>
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <span class="font-pricedown text-white text-sm tracking-tighter">Developers</span>
          <ul class="flex flex-col gap-2 text-muted-foreground text-sm font-semibold">
            <li><a href="/documentation" class="hover:text-white duration-200">Documentation</a></li>
            <li><a href="https://github.com/aldergrounds" class="hover:text-white duration-200">GitHub</a></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10 pt-6">
      <span class="text-muted-foreground text-xs font-semibold">
        © {new Date().getFullYear()} AlderGrounds. All rights reserved.
      </span>
      <span class="text-muted-foreground text-xs font-semibold">
        Not affiliated with Rockstar Games.
      </span>
    </div>

  </div>
</footer>
