<script lang="ts">
  import { onMount } from 'svelte';

  type Contributor = {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
  };

  let contributors: Contributor[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch('https://api.github.com/repos/aldergrounds/aldergrounds/contributors?per_page=12');
      contributors = await res.json();
    } catch {
      contributors = [];
    } finally {
      loading = false;
    }
  });
</script>

<div class="relative px-6 py-16 sm:py-24">
  <div class="mx-auto max-w-4xl">

    <div class="mb-12 text-center">
      <h2 class="font-pricedown mb-3 text-4xl tracking-tighter text-white sm:text-5xl">
        <span class="bg-linear-to-r from-primary to-sky-700 bg-clip-text text-transparent">Contributors</span>
      </h2>
      <p class="text-muted-foreground font-semibold text-lg">
        People who make AlderGrounds possible.
      </p>
    </div>

    {#if loading}
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {#each Array(8) as _}
          <div class="flex flex-col items-center gap-3 animate-pulse">
            <div class="size-16 bg-white/10 rounded-full"></div>
            <div class="flex flex-col items-center gap-1.5">
              <div class="h-3 w-20 bg-white/10 rounded"></div>
              <div class="h-2.5 w-14 bg-white/5 rounded"></div>
            </div>
          </div>
        {/each}
      </div>

    {:else if contributors.length === 0}
      <p class="text-center text-muted-foreground font-semibold">
        Could not load contributors.
        <a href="https://github.com/aldergrounds" class="text-primary hover:underline">View on GitHub →</a>
      </p>

    {:else}
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {#each contributors as c}
          <a href={c.html_url} target="_blank" rel="noopener noreferrer"
            class="flex flex-col items-center gap-3 group">
            <img
              src={c.avatar_url}
              alt={c.login}
              class="size-16 rounded-full grayscale group-hover:grayscale-0 duration-200"
            />
            <div class="text-center">
              <p class="font-pricedown text-white text-sm tracking-tighter">{c.login}</p>
              <p class="text-primary text-xs font-semibold">{c.contributions} commits</p>
            </div>
          </a>
        {/each}
      </div>
    {/if}

    <div class="mt-10 flex justify-center">
      <a href="https://github.com/aldergrounds"
        class="border border-white/10 hover:border-primary/40 duration-200 cursor-pointer px-8 h-10 font-pricedown text-muted-foreground hover:text-white text-sm flex items-center"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)">
        VIEW ON GITHUB
      </a>
    </div>

  </div>
</div>
