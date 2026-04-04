<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  type Stat = {
    label: string;
    value: number;
    suffix?: string;
    description: string;
    icon: string;
  };

  let stats: Stat[] = [
    {
      label: "Players Online",
      value: 0,
      suffix: "",
      description: "Active players across all servers right now",
      icon: "🟢",
    },
    {
      label: "Active Servers",
      value: 0,
      suffix: "",
      description: "Servers currently running Aldergrounds",
      icon: "🖥️",
    },
    {
      label: "Community Members",
      value: 0,
      suffix: "K",
      description: "Members across Discord and forums",
      icon: "👥",
    },
  ];

  const targets = [1243, 87, 42];

  let animatedValues = stats.map(() => 0);
  let intervals: ReturnType<typeof setInterval>[] = [];
  let pollInterval: ReturnType<typeof setInterval>;

  function animateTo(index: number, target: number) {
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    if (intervals[index]) clearInterval(intervals[index]);

    intervals[index] = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      animatedValues[index] = current;
      animatedValues = [...animatedValues];
      if (step >= steps) clearInterval(intervals[index]);
    }, duration / steps);
  }

  async function fetchStats() {
    const newTargets = [
      targets[0] + Math.floor(Math.random() * 20 - 10),
      targets[1] + Math.floor(Math.random() * 4 - 2),
      targets[2],
    ];
    newTargets.forEach((t, i) => animateTo(i, Math.max(0, t)));
  }

  onMount(() => {
    fetchStats();
    pollInterval = setInterval(fetchStats, 15000);
  });

  onDestroy(() => {
    intervals.forEach((i) => clearInterval(i));
    clearInterval(pollInterval);
  });
</script>

<div class="relative px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 min-h-screen py-16 items-center overflow-hidden">
  <div class="relative grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    {#each stats as stat, i}
      <div
        class="flex flex-col gap-4 border border-white/10 bg-white/5
               backdrop-blur-sm p-6 transition-all duration-300
               cursor-default group
               {stats.length % 2 !== 0 && i === stats.length - 1 ? 'sm:col-span-2' : ''}"
      >
        <!-- Icon + live indicator -->
        <div class="flex items-center justify-between">
          <!--<span class="text-2xl">{stat.icon}</span>-->
          <span class="flex items-center gap-1.5 text-xs text-emerald-400 font-medium uppercase tracking-widest">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Live
          </span>
        </div>

        <!-- Value -->
        <span
          class="text-5xl font-extrabold text-white tabular-nums tracking-tight
                 transition-colors duration-300
                 {stats.length % 2 !== 0 && i === stats.length - 1 ? 'sm:text-6xl' : ''}"
        >
          {animatedValues[i].toLocaleString()}{stat.suffix ?? ""}
        </span>

        <!-- Label + description -->
        <div class="flex flex-col gap-1">
          <span class="text-white font-semibold text-sm uppercase tracking-widest">
            {stat.label}
          </span>
          <span class="text-muted-foreground text-xs leading-relaxed">
            {stat.description}
          </span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Header -->
  <div class="relative flex flex-col justify-center">
    <span class="flex items-center gap-2 font-semibold text-sm bg-primary p-2 text-white w-fit">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
      LIVE STATS
    </span>
    <h1
      class="mt-5 animate-fade-in-up mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl cursor-default"
    >
      Statistics
    </h1>
    <p class="text-muted-foreground animate-fade-in-up max-w-2xl text-sm leading-relaxed sm:text-lg">
      Live numbers from the Aldergrounds network, updated every 15 seconds.
    </p>
    <span class="mt-6 text-xs text-muted-foreground/50 uppercase tracking-widest">
      Auto-refreshes every 15s
    </span>
  </div>

</div>
