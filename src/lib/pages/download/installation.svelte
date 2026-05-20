<section class="relative px-6 py-16 sm:py-24">
  <div class="mx-auto max-w-6xl">

    <div class="mb-12 text-center">
      <h2 class="font-pricedown text-4xl tracking-tighter text-white sm:text-5xl">
        Installation
      </h2>

      <p class="text-muted-foreground mt-3 text-lg font-semibold">
        "Just a few steps and you're in."
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-4">
      {#each [
        {
          title: "Download Launcher",
          description:
            "Download the latest AlderGrounds client or developer SDK.",
        },

        {
          title: "Install Files",
          description:
            "Run the installer and follow the setup instructions.",
        },

        {
          title: "Select GTA SA Folder",
          description:
            "Choose your GTA San Andreas installation directory.",
        },

        {
          title: "Play Online",
          description:
            "Launch AlderGrounds and join multiplayer servers.",
        },
      ] as step, index}

        <div
          class="group flex flex-col gap-5 border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.07]"
          style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
        >
          <div
            class="flex size-14 items-center justify-center border border-primary/40 bg-primary/10 transition-all duration-200 group-hover:bg-primary/20"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
          >

            <span class="font-pricedown text-2xl text-primary">
              0{index + 1}
            </span>

          </div>

          <div class="flex flex-col gap-2">
            <span class="font-pricedown text-xl tracking-tighter text-white">
              {step.title}
            </span>

            <p class="text-muted-foreground text-sm font-semibold leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
