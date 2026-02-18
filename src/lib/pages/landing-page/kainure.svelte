<script lang="ts">
  import Typescript from "$lib/assets/icons/ts-logo.png";
  import Javascript from "$lib/assets/icons/js-logo.png";
  import Lua from "$lib/assets/icons/lua-logo.png";
  let stackSelected = $state(".ts");
</script>

<div class="grid grid-cols-2 items-center min-h-dvh px-10">
  <div class="relative mx-auto max-w-4xl">
    <div>
      <span class="font-semibold text-sm bg-primary p-2">FRAMEWORK</span>
      <h1 class="mt-5 animate-fade-in-up mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl group cursor-default">
        Kainure
      </h1>
      <p class="text-muted-foreground animate-fade-in-up mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl animation-delay-200">
        A modern, high-performance framework for developing gamemodes using your favorite technologies.
      </p>
    </div>
    <div class="flex gap-5">
      <button
        onclick={() => stackSelected = ".ts"}
        class={`animation-delay-100 flex flex-col items-center justify-center group backdrop-blur-lg hover:border p-5 rounded-full hover:bg-white/5 hover:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        ${stackSelected == ".ts" && "bg-white/5 border border-white/10"}`}
      >
        <img src={Typescript} alt="Typescript icon" class="size-12 transition-transform duration-300 group-hover:scale-110">
      </button>
      <button
        onclick={() => stackSelected = ".js"}
        class={`animation-delay-300 flex flex-col items-center justify-center group backdrop-blur-lg hover:border p-5 rounded-full hover:bg-white/5 hover:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        ${stackSelected == ".js" && "bg-white/5 border border-white/10"}`}
      >
        <img src={Javascript} alt="Javascript icon" class="size-12 transition-transform duration-300 group-hover:scale-110">
      </button>
      <button
        onclick={() => stackSelected = ".lua"}
        class={`animation-delay-500 flex flex-col items-center justify-center group backdrop-blur-lg hover:border p-5 rounded-full hover:bg-white/5 hover:border-white/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        ${stackSelected == ".lua" && "bg-white/5 border border-white/10"}`}
      >
        <img src={Lua} alt="Lua icon" class="size-12 transition-transform duration-300 group-hover:scale-110">
      </button>
    </div>
  </div>
  <div class="mx-auto grid max-w-lg ">
    {#if stackSelected == ".ts"}
      <div class="flex items-center gap-2 py-2 px-3 font-semibold bg-muted-foreground/15">
        <img src={Typescript} alt="Typescript icon" class="size-12">
        <h1>Typescript</h1>
      </div>
      <div class="py-5 px-3 bg-muted-foreground/10">
        <span class="text-sm text-muted-foreground">
          Is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
        </span>
      </div>
    {:else if stackSelected == ".js"}
      <div class="flex items-center gap-2 py-2 px-3 font-semibold bg-muted-foreground/15">
        <img src={Javascript} alt="Javascript icon" class="size-12">
        <h1>Javascript</h1>
      </div>
      <div class="py-5 px-3 bg-muted-foreground/10">
        <span class="text-sm text-muted-foreground">
          Is a versatile, high-level programming language that enables interactive web pages and is an essential part of web applications.
        </span>
      </div>
    {:else if stackSelected == ".lua"}
      <div class="flex items-center gap-2 py-2 px-3 font-semibold bg-muted-foreground/15">
        <img src={Lua} alt="Lua icon" class="size-12">
        <h1>Lua</h1>
      </div>
      <div class="py-5 px-3 bg-muted-foreground/10">
        <span class="text-sm text-muted-foreground">
          Is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural, object-oriented, and functional programming.
        </span>
      </div>
    {/if}
  </div>
</div>

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up {
      animation: none !important;
      opacity: 1 !important;
    }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    will-change: opacity, transform;
  }
  .animation-delay-100 {
    animation-delay: 0.1s, 0.1s;
  }
  .animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
  }
  .animation-delay-300 {
    animation-delay: 0.3s, 0.3s;
  }
  .animation-delay-500 {
    animation-delay: 0.5s, 0.5s;
  }
</style>
