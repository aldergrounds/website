<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";

  type Contributor = {
    username: string;
    fallback: string;
    size?: "lg" | "md" | "sm";
  };

  const contributors: Contributor[] = [
    { username: "ocalasans", fallback: "CL" },
    { username: "sant0zr", fallback: "S0" },
    { username: "LESS14", fallback: "LL" },
    { username: "Galarc", fallback: "GL" },
    { username: "mad-cheski", fallback: "CH" },
  ];

  const extraCount = 12;
</script>

<div class="px-10 flex flex-col gap-5 py-16 items-center">
  <!-- Header -->
  <div class="flex flex-col items-center text-center justify-center">
    <span class="font-semibold text-sm bg-primary p-2 text-white w-fit">
      COMMUNITY
    </span>
    <h1
      class="mt-5 animate-fade-in-up mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl cursor-default"
    >
      AG Contributors
    </h1>
    <p class="text-muted-foreground animate-fade-in-up max-w-md text-sm leading-relaxed sm:text-lg">
      Check out the list of community users who keep our project going.
    </p>
  </div>

  <!-- Avatars card -->
  <div
    class="p-8
           flex flex-col gap-8"
  >

    <!-- Cluster -->
    <div class="flex flex-wrap gap-4 items-end">
      {#each contributors as contributor}
        <div class="group relative flex flex-col items-center gap-2">
          <!-- Avatar -->
          <Avatar.Root
            class="size-14 ring-2 ring-transparent
                   group-hover:ring-primary transition-all duration-300
                   ease-out group-hover:scale-110 group-hover:z-10 cursor-pointer"
          >
            <Avatar.Image
              src="https://github.com/{contributor.username}.png"
              alt="@{contributor.username}"
            />
            <Avatar.Fallback class="bg-white/10 text-white text-sm font-bold">
              {contributor.fallback}
            </Avatar.Fallback>
          </Avatar.Root>

          <!-- Username tooltip -->
          <span
            class="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100
                   transition-all duration-200 translate-y-1 group-hover:translate-y-0
                   whitespace-nowrap"
          >
            @{contributor.username}
          </span>
        </div>
      {/each}

      <!-- Extra count bubble -->
      <div class="group relative flex flex-col items-center gap-2">
        <div
          class="size-12 rounded-full border-2 border-dashed border-white/20
                 bg-white/5 flex items-center justify-center
                 transition-all duration-300 hover:border-primary/50 cursor-default"
        >
          <span class="text-xs text-muted-foreground font-bold">+{extraCount}</span>
        </div>
        <span class="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100
                     transition-all duration-200 whitespace-nowrap">
          and more
        </span>
      </div>
    </div>
  </div>
</div>
