<script>
  import Discord from "$lib/assets/icons/dc-logo.png";
</script>

<div class="relative min-h-screen flex">
  <!-- Sidebar -->
  <div class="hidden lg:flex flex-col justify-between w-[420px] shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-sm px-12 py-16">
    <a href="/" class="font-pricedown text-2xl text-white tracking-tighter">
      Alder<span class="bg-linear-to-r from-primary to-sky-700 bg-clip-text text-transparent">Grounds</span>
    </a>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <p class="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Multiplayer mod for</p>
        <h2 class="gta-title bg-primary text-white text-sm px-3 py-1.5 self-start">Grand Theft Auto: San Andreas.</h2>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1 border-l-2 border-primary pl-4">
          <span class="font-pricedown text-2xl text-white tracking-tighter">1.2K</span>
          <span class="text-muted-foreground text-xs font-semibold">Players online right now</span>
        </div>
        <div class="flex flex-col gap-1 border-l border-white/10 pl-4">
          <span class="font-pricedown text-2xl text-white tracking-tighter">48</span>
          <span class="text-muted-foreground text-xs font-semibold">Active servers</span>
        </div>
        <div class="flex flex-col gap-1 border-l border-white/10 pl-4">
          <span class="font-pricedown text-2xl text-white tracking-tighter">32K</span>
          <span class="text-muted-foreground text-xs font-semibold">Total downloads</span>
        </div>
      </div>
    </div>
    <p class="text-muted-foreground text-xs font-semibold">
      © {new Date().getFullYear()} AlderGrounds. Not affiliated with Rockstar Games.
    </p>
  </div>

  <!-- Main Content -->
  <div class="flex flex-1 items-center justify-center px-6 py-16">
    <div class="w-full max-w-sm flex flex-col gap-0">
      <!-- Mobile Logo -->
      <div class="mb-8 lg:hidden text-center">
        <h1 class="font-pricedown text-4xl tracking-tighter text-white mb-2">
          Alder<span class="bg-linear-to-r from-primary to-sky-700 bg-clip-text text-transparent">Grounds</span>
        </h1>
      </div>

      <div class="mb-8">
        <h2 class="font-pricedown text-3xl tracking-tighter text-white mb-1">Create account</h2>
        <p class="text-muted-foreground text-sm font-semibold">Join the community and start playing.</p>
      </div>

      <form class="flex flex-col gap-5 mb-6">
        <div class="flex flex-col gap-2">
          <label class="font-pricedown text-white text-sm tracking-tighter">Username</label>
          <input
            type="text"
            placeholder="your_username"
            class="bg-white/5 border border-white/10 text-white text-sm font-semibold placeholder:text-muted-foreground/50 px-4 h-10 outline-none focus:border-primary/60 duration-200 w-full"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-pricedown text-white text-sm tracking-tighter">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            class="bg-white/5 border border-white/10 text-white text-sm font-semibold placeholder:text-muted-foreground/50 px-4 h-10 outline-none focus:border-primary/60 duration-200 w-full"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-pricedown text-white text-sm tracking-tighter">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            class="bg-white/5 border border-white/10 text-white text-sm font-semibold placeholder:text-muted-foreground/50 px-4 h-10 outline-none focus:border-primary/60 duration-200 w-full"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);"
          />
        </div>

        <button
          type="submit"
          class="mt-2 border border-primary bg-primary hover:bg-primary/80 duration-200 cursor-pointer h-10 font-pricedown text-white tracking-tighter w-full"
          style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
          CREATE ACCOUNT
        </button>
      </form>

      <div class="flex items-center gap-3 mb-6">
        <div class="h-px flex-1 border-t border-white/10"></div>
        <span class="text-muted-foreground text-xs font-semibold">OR</span>
        <div class="h-px flex-1 border-t border-white/10"></div>
      </div>

      <p class="text-center text-sm text-muted-foreground font-semibold">
        Already have an account?
        <a href="/auth/login" class="text-primary hover:text-primary/80 duration-200">Sign in</a>
      </p>
    </div>
  </div>
</div>
