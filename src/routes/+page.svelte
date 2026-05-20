<script>
  import NavbarLandingPage from '$lib/components/layout/navbar.svelte';
  import FooterLandingPage from '$lib/components/layout/footer.svelte';

  import GallerySection from "$lib/pages/landing-page/gallery.svelte";
  import PreviewServersSection from "$lib/pages/landing-page/preview-servers.svelte";
  import FeaturesSection from "$lib/pages/landing-page/features.svelte";
  import HomeSection from "$lib/pages/landing-page/home.svelte";
  import CollaboratorsSection from "$lib/pages/landing-page/collaborators.svelte";
  import StatusSection from "$lib/pages/landing-page/status.svelte";
  import DevelopersSection from "$lib/pages/landing-page/developers.svelte";
  import CommunitySection from "$lib/pages/landing-page/community.svelte";
  import ChangelogSection from "$lib/pages/landing-page/changelog.svelte";
</script>

<header>
  <NavbarLandingPage/>
</header>

<main>
  <section>
    <HomeSection />
  </section>

  <section>
    <StatusSection />
  </section>

  <section>
    <FeaturesSection />
  </section>

  <section>
    <GallerySection />
  </section>

  <section>
    <PreviewServersSection />
  </section>

  <section>
    <ChangelogSection />
  </section>

  <section>
    <DevelopersSection />
  </section>

  <section>
    <CollaboratorsSection />
  </section>

  <section>
    <CommunitySection />
  </section>
</main>

<footer>
  <FooterLandingPage />
</footer>
