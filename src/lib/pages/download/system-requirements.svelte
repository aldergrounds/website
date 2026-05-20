<script lang="ts">
  const requirements = {
    minimum: [
      "Windows 10",
      "Intel Core i3 / Ryzen 3",
      "4GB RAM",
      "Intel HD 4000",
      "3GB Storage",
    ],

    recommended: [
      "Windows 11",
      "Intel Core i5 / Ryzen 5",
      "8GB RAM",
      "GTX 1050 / RX 560",
      "SSD Storage",
    ],
  };
</script>

<section class="relative px-6 py-16 sm:py-24">
  <div class="mx-auto max-w-5xl">
    <div class="mb-12 text-center">
      <h2 class="font-pricedown text-4xl tracking-tighter text-white sm:text-5xl">
        System Requirements
      </h2>

      <p class="text-muted-foreground mt-3 text-lg font-semibold">
        "Can your machine handle San Andreas chaos?"
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div
        class="border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
      >
        <div class="flex items-center justify-between">
          <span class="font-pricedown text-2xl tracking-tighter text-primary">
            Minimum
          </span>

          <span class="text-xs font-semibold text-muted-foreground">
            30 FPS
          </span>
        </div>

        <div class="mt-8 flex flex-col gap-4">
          {#each requirements.minimum as item}
            <div
              class="flex items-center gap-3 border border-white/5 bg-black/20 px-4 py-3"
              style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
            >
              <div class="size-2 rounded-full bg-primary"></div>

              <span class="text-sm font-semibold text-zinc-300">
                {item}
              </span>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
      >
        <div class="flex items-center justify-between">
          <span class="font-pricedown text-2xl tracking-tighter text-primary">
            Recommended
          </span>

          <span class="text-xs font-semibold text-muted-foreground">
            BEST EXPERIENCE
          </span>
        </div>

        <div class="mt-8 flex flex-col gap-4">
          {#each requirements.recommended as item}
            <div
              class="flex items-center gap-3 border border-white/5 bg-black/20 px-4 py-3"
              style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
            >
              <div class="size-2 rounded-full bg-primary"></div>

              <span class="text-sm font-semibold text-zinc-300">
                {item}
              </span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
