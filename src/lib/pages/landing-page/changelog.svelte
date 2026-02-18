<script lang="ts">
  type EntryType = "added" | "fixed" | "improved" | "upcoming" | "in-progress";

  type Entry = {
    type: EntryType;
    description: string;
  };

  type ChangelogItem = {
    version?: string;
    date: string;
    title: string;
    isRoadmap?: boolean;
    entries: Entry[];
  };

  const badgeStyles: Record<EntryType, string> = {
    added: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    fixed: "bg-red-500/20 text-red-400 border border-red-500/30",
    improved: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    upcoming: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  };

  const items: ChangelogItem[] = [
    {
      version: "v0.3.0",
      date: "Feb 2025",
      title: "Releases",
      entries: [
        { type: "added", description: "Linux & macOS client builds" },
        { type: "improved", description: "Network sync performance by 40%" },
        { type: "fixed", description: "Player desync on high-ping servers" },
      ],
    },
    {
      version: "v0.2.0",
      date: "Dec 2024",
      title: "Logs (Commits)",
      entries: [
        { type: "added", description: "Full SA-MP Legacy protocol support" },
        { type: "added", description: "Kainure framework initial release" },
      ],
    },
  ];

  let selected = items[0];
</script>

<div class="px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 min-h-screen py-16 items-center">
  <div class="flex flex-col justify-center gap-6">
    <div>
      <span class="font-semibold text-sm bg-primary p-2 text-white w-fit">
        CHANGELOG
      </span>
      <h1 class="mt-5 mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl cursor-default">
        Updates and Releases
      </h1>
      <p class="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-lg">
        Track every update released and see what the team is building next.
      </p>
    </div>

    <!-- Version list -->
    <div class="flex flex-col gap-1">
      {#each items as item}
        <button
          onclick={() => selected = item}
          class="flex items-center justify-between px-4 py-3 text-left
                 transition-all duration-200 group
                 {selected === item
            ? 'bg-white/5 border'
            : 'hover:bg-white/5 border border-transparent'}"
        >
          <div class="flex items-center gap-3">
            <!-- dot -->
            <span
              class="w-2 h-2 rounded-full shrink-0 transition-all duration-200
                     {item.isRoadmap
                ? selected === item ? 'bg-violet-400' : 'bg-violet-400/40'
                : selected === item ? 'bg-primary' : 'bg-primary/40'}"
            ></span>
            <span
              class="text-sm font-medium transition-colors duration-200
                     {selected === item ? 'text-white' : 'text-muted-foreground'}"
            >
              {item.title}
            </span>
          </div>
          <div class="flex items-center gap-2">
            {#if item.isRoadmap}
              <span class="text-xs text-violet-400 font-medium">Roadmap</span>
            {:else}
              <span class="text-xs text-muted-foreground font-mono">{item.version}</span>
            {/if}
            <span class="text-xs text-muted-foreground/50">{item.date}</span>
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Detail card -->
  <div class="border border-white/10 bg-white/5 backdrop-blur-sm p-8
              transition-all duration-300 flex flex-col gap-6">

    <!-- Card header -->
    <div class="flex items-start justify-between gap-4">
      <div class="flex flex-col gap-2">
        {#if selected.isRoadmap}
          <span class="text-xs px-3 py-1 rounded-full font-medium uppercase tracking-widest w-fit
                       bg-violet-500/20 text-violet-400 border border-violet-500/30">
            Roadmap
          </span>
        {:else}
          <span class="text-xs px-3 py-1 rounded-full font-medium uppercase tracking-widest w-fit
                       bg-primary/20 text-primary border border-primary/30 font-mono">
            {selected.version}
          </span>
        {/if}
        <h2 class="text-white font-extrabold text-2xl">{selected.title}</h2>
      </div>
      <span class="text-muted-foreground/50 text-xs uppercase tracking-widest shrink-0 mt-1">
        {selected.date}
      </span>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-white/10"></div>

    <!-- Entries -->
    <ul class="flex flex-col gap-4">
      {#each selected.entries as entry}
        <li class="flex items-center gap-3">
          <span class="text-xs px-2 py-0.5 rounded-full font-medium capitalize shrink-0 {badgeStyles[entry.type]}">
            {entry.type}
          </span>
          <span class="text-muted-foreground text-sm leading-relaxed">
            {entry.description}
          </span>
        </li>
      {/each}
    </ul>
  </div>

</div>
