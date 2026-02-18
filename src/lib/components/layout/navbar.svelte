<script lang="ts">
  import Discord from "$lib/assets/icons/dc-logo.png";
  import Github from "$lib/assets/icons/gh-logo.png";

  let scrolled = false;
  let mobileOpen = false;

  const links = [
    { label: "Download", href: "/download" },
    { label: "Changelog", href: "/changelog" },
    { label: "Kainure", href: "/kainure" },
    { label: "Docs", href: "/docs" },
  ];

  const socials = [
    { label: "Discord", href: "https://discord.gg/aldergrounds", icon: Discord },
    { label: "GitHub", href: "https://github.com/aldergrounds", icon: Github },
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      scrolled = window.scrollY > 20;
    });
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
         {scrolled
    ? 'border-b border-white/10 bg-muted-foreground/5 backdrop-blur-md'
    : 'bg-transparent'}"
>
  <nav class="px-10 h-16 flex items-center justify-between gap-8">
    <!-- Brand -->
    <a href="/" class="shrink-0 text-xl font-extrabold tracking-tight">
      A<span
        class="bg-linear-to-r from-primary to-sky-700
               bg-clip-text text-transparent"
      >G</span>
    </a>

    <!-- Desktop links -->
    <ul class="hidden md:flex items-center gap-1">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="px-4 py-2 text-sm font-medium text-muted-foreground
                   hover:text-white rounded-lg hover:bg-white/5
                   transition-all duration-200"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Right side -->
    <!--<div class="hidden md:flex items-center gap-3">
      <a
        href="/download"
        class=""
      >
        T
      </a>
    </div>-->

    <!-- Mobile hamburger -->
    <button
      onclick={() => (mobileOpen = !mobileOpen)}
      class="md:hidden flex flex-col gap-1.5 p-2 group"
      aria-label="Toggle menu"
    >
      <span
        class="block h-0.5 w-5 bg-white transition-all duration-300
               {mobileOpen ? 'translate-y-2 rotate-45' : ''}"
      ></span>
      <span
        class="block h-0.5 w-5 bg-white transition-all duration-300
               {mobileOpen ? 'opacity-0' : ''}"
      ></span>
      <span
        class="block h-0.5 w-5 bg-white transition-all duration-300
               {mobileOpen ? '-translate-y-2 -rotate-45' : ''}"
      ></span>
    </button>

  </nav>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div
      class="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md
             px-10 py-6 flex flex-col gap-6"
    >
      <ul class="flex flex-col gap-1">
        {#each links as link}
          <li>
            <a
              href={link.href}
              onclick={() => (mobileOpen = false)}
              class="block px-4 py-2.5 text-sm font-medium text-muted-foreground
                     hover:text-white hover:bg-white/5 rounded-lg
                     transition-all duration-200"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>

      <div class="w-full h-px bg-white/10"></div>

      <div class="flex items-center gap-3">
        {#each socials as social}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            class="flex items-center justify-center size-9 rounded-lg
                   border border-white/10 bg-white/5
                   hover:border-primary/50 hover:bg-white/10
                   transition-all duration-200 group"
          >
            <img
              src={social.icon}
              alt={social.label}
              class="size-4 object-contain opacity-60 group-hover:opacity-100
                     transition-opacity duration-200 invert"
            />
          </a>
        {/each}

        <a
          href="/download"
          class="ml-auto px-5 py-2 text-sm font-bold text-white
                 bg-primary rounded-lg shadow-lg shadow-primary/20
                 hover:brightness-110 transition-all duration-200"
        >
          Download
        </a>
      </div>
    </div>
  {/if}

</header>
