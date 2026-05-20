<script lang="ts">
  let selectedTab: "play" | "dev" = "play";

  const downloads = {
    play: {
      title: "Launcher AlderGrounds",

      description:
        "Official multiplayer launcher for players. Includes automatic updates, anti-cheat and server browser.",

      version: "v0.4.2",

      size: "1.2 GB",

      button: "DOWNLOAD CLIENT",

      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",

      overlay:
        "from-orange-500/20 via-transparent to-transparent",
    },

    dev: {
      title: "Developer SDK",

      description:
        "Server SDK and development tools for creating gamemodes, servers and custom integrations.",

      version: "v0.4.2-dev",

      size: "420 MB",

      button: "DOWNLOAD SDK",

      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",

      overlay:
        "from-sky-500/20 via-transparent to-transparent",
    },
  };
</script>

<section class="relative px-6 py-16 sm:py-24">
  <div class="mx-auto flex max-w-6xl flex-col gap-12">
    <div class="flex flex-col items-center text-center">
      <h2 class="font-pricedown text-4xl tracking-tighter text-white sm:text-5xl">
        A<span class="bg-linear-to-r from-primary to-sky-600 bg-clip-text text-transparent"> G</span>
        - Download
      </h2>

      <p class="text-muted-foreground mt-3 max-w-2xl text-lg font-semibold">
        Choose your experience. Play online with friends or build your own multiplayer server.
      </p>

      <div
        class="mt-8 flex border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
      >

        <button
          on:click={() => (selectedTab = "play")}
          class={`h-11 px-8 font-pricedown text-sm transition-all duration-200 cursor-pointer ${
            selectedTab === "play"
              ? "bg-primary text-white"
              : "text-muted-foreground hover:text-white"
          }`}
          style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
        >
          PLAY
        </button>

        <button
          on:click={() => (selectedTab = "dev")}
          class={`h-11 px-8 font-pricedown text-sm transition-all duration-200 cursor-pointer ${
            selectedTab === "dev"
              ? "bg-primary text-white"
              : "text-muted-foreground hover:text-white"
          }`}
          style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
        >
          DEVELOP
        </button>
      </div>
    </div>

    <div
      class="overflow-hidden border border-primary/20 bg-white/5 backdrop-blur-xl"
      style="clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)"
    >

      <div class="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div class="flex flex-col justify-between p-8 sm:p-10">
          <div class="flex flex-col gap-4">
            <div>
              <span class="font-pricedown text-4xl tracking-tighter text-white">
                {downloads[selectedTab].title}
              </span>

              <div class="mt-2 flex items-center gap-3">
                <span class="font-pricedown text-primary text-xl">
                  {downloads[selectedTab].version}
                </span>

                <span class="text-xs font-semibold text-muted-foreground">
                  Updated May 19, 2026
                </span>
              </div>
            </div>

            <p class="max-w-xl text-sm font-semibold leading-relaxed text-zinc-400">
              {downloads[selectedTab].description}
            </p>

            <div class="flex flex-wrap gap-3 pt-2">
              <div
                class="border border-white/10 bg-black/30 px-3 py-2"
                style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
              >
                <span class="text-xs font-semibold text-white">
                  Size: {downloads[selectedTab].size}
                </span>
              </div>

              <div
                class="border border-white/10 bg-black/30 px-3 py-2"
                style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
              >
                <span class="text-xs font-semibold text-white">
                  Windows
                </span>
              </div>
            </div>
          </div>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              class="group relative overflow-hidden border border-primary bg-primary/10 px-10 py-4 font-pricedown text-xl tracking-wide text-white transition-all duration-200 hover:bg-primary hover:scale-[1.02] cursor-pointer"
              style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
            >
              <span class="relative z-10">
                {downloads[selectedTab].button}
              </span>
              <div class="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>

            <a
              href="/changelog"
              class="flex h-14 items-center justify-center border border-white/10 px-8 font-pricedown text-sm text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-white"
              style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
            >
              VIEW CHANGELOG
            </a>
          </div>
        </div>

        <div class="relative min-h-[320px] overflow-hidden">
          <img
            src={downloads[selectedTab].image}
            alt={downloads[selectedTab].title}
            class="absolute inset-0 h-full w-full object-cover transition-all duration-500"
          />

          <div class={`absolute inset-0 bg-gradient-to-br ${downloads[selectedTab].overlay}`}></div>
          <div class="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-950/90"></div>
        </div>
      </div>
    </div>
  </div>
</section>
