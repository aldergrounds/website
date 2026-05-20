<script lang="ts">
	import './layout.css';
	import '$lib/assets/fonts/fonts.css';
	import favicon from '$lib/assets/favicon.svg';
  import FooterLandingPage from '$lib/components/layout/footer.svelte';
  import NavbarLandingPage from '$lib/components/layout/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header>
  <NavbarLandingPage />
</header>

{@render children()}

<footer>
  <FooterLandingPage />
</footer>
