<div class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">

  <div class="relative w-full max-w-sm">

    <div class="mb-8 text-center">
      <h1 class="font-pricedown text-4xl tracking-tighter text-white mb-2">
        Alder<span class="bg-linear-to-r from-primary to-sky-700 bg-clip-text text-transparent">Grounds</span>
      </h1>
      <p class="text-muted-foreground text-sm font-semibold">
        Sign in to your account to continue.
      </p>
    </div>

    <div
      class="border border-white/10 bg-white/5 backdrop-blur-sm p-8"
      style="clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)">

      <form class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <label class="font-pricedown text-white text-sm tracking-tighter">Username</label>
          <input
            type="text"
            placeholder="your_username"
            class="bg-white/5 border border-white/10 text-white text-sm font-semibold placeholder:text-muted-foreground/50 px-4 h-10 outline-none focus:border-primary/60 duration-200 w-full"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
          />
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <label class="font-pricedown text-white text-sm tracking-tighter">Password</label>
            <a href="/auth/forgot-password" class="text-xs text-muted-foreground hover:text-primary duration-200 font-semibold">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            class="bg-white/5 border border-white/10 text-white text-sm font-semibold placeholder:text-muted-foreground/50 px-4 h-10 outline-none focus:border-primary/60 duration-200 w-full"
            style="clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)"
          />
        </div>

        <button
          type="submit"
          class="mt-2 border border-primary bg-primary hover:bg-primary/80 duration-200 cursor-pointer h-10 font-pricedown text-white tracking-tighter w-full"
          style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)">
          SIGN IN
        </button>

      </form>

      <div class="mt-6 flex items-center gap-3">
        <div class="h-px flex-1 border-t border-white/10"></div>
        <span class="text-muted-foreground text-xs font-semibold">OR</span>
        <div class="h-px flex-1 border-t border-white/10"></div>
      </div>

      <a
        href="https://discord.gg/JR6X4v7VnS"
        class="mt-6 flex items-center justify-center gap-3 border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-white/8 duration-200 cursor-pointer h-10 font-semibold text-white text-sm w-full"
        style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)">
        Continue with Discord
      </a>

    </div>

    <p class="mt-6 text-center text-sm text-muted-foreground font-semibold">
      Don't have an account?
      <a href="/auth/register" class="text-primary hover:text-primary/80 duration-200">
        Sign up
      </a>
    </p>

  </div>

</div>
