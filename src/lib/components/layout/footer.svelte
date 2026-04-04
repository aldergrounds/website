<script lang="ts">
  import Discord from "$lib/assets/icons/dc-logo.png";
  import Github from "$lib/assets/icons/gh-logo.png";
  import Youtube from "$lib/assets/icons/yt-logo.png";

  const links = [
    {
      title: "ORGANIZATION",
      items: [
        { label: "Download", href: "/download" },
        { label: "Changelog", href: "/changelog" },
        { label: "Roadmap", href: "/roadmap" },
      ],
    },
    {
      title: "Developers",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "GitHub", href: "https://github.com/aldergrounds" },
      ],
    },
    {
      title: "Community",
      items: [
        { label: "Discord", href: "https://discord.gg/aldergrounds" },
        { label: "Contributors", href: "/contributors" },
        { label: "YouTube", href: "https://youtube.com/@aldergrounds" },
      ],
    },
  ];
</script>

<div class="relative bg-muted-foreground/5 overflow-hidden border-t border-white/10">
  <div class="relative px-10 py-16 flex flex-col gap-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="flex flex-col gap-4 max-w-sm">
        <h2 class="text-3xl font-extrabold tracking-tight">
          Alder<span class="bg-linear-to-r from-primary to-sky-700
               bg-clip-text text-transparent">Grounds</span>
        </h2>
        <p class="text-muted-foreground text-sm leading-relaxed">
          A cross-platform multiplayer mod for Grand Theft Auto: San Andreas.
        </p>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {#each links as group}
          <div class="flex flex-col gap-4">
            <span class="text-white font-semibold text-xs uppercase tracking-widest">
              {group.title}
            </span>
            <ul class="flex flex-col gap-2.5">
              {#each group.items as item}
                <li>
                  <a
                    href={item.href}
                    class="text-muted-foreground text-sm hover:text-white
                           transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-white/10"></div>

    <!-- Bottom row -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <span class="text-muted-foreground text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Aldergrounds. All rights reserved.
      </span>
      <div class="flex items-center gap-2">
        <span class="relative flex h-1.5 w-1.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
        </span>
        <span class="text-muted-foreground text-xs uppercase tracking-widest">
          FOR GTA SAN ANDREAS
        </span>
      </div>
    </div>
  </div>
</div>
