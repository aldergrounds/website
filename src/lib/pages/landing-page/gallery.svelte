<script lang="ts">
  const screenshots = [
    {
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1600&auto=format&fit=crop",
    },

    {
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    },
  ];
</script>

<section class="relative px-6 py-16 sm:py-24 overflow-hidden">
  <div class="mx-auto max-w-6xl">
    <div class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
      {#each screenshots as screenshot}
        <div
          class="group relative min-w-[85%] sm:min-w-[70%] lg:min-w-[45%] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
          style="clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)"
        >
          <img
            src={screenshot.image}
            alt="AlderGrounds screenshot"
            class="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
          <div class="absolute inset-0 bg-black/10"></div>

          <div class="absolute bottom-0 left-0 flex w-full items-center justify-between p-5">
            <div class="flex flex-col">
              <span class="font-pricedown text-xl text-white">
                AlderGrounds
              </span>

              <span class="text-xs font-semibold text-zinc-300">
                AG SERVER
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
