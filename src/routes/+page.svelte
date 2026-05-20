<script>
  import GallerySection from "$lib/pages/landing-page/gallery.svelte";
  import PreviewServersSection from "$lib/pages/landing-page/preview-servers.svelte";
  import FeaturesSection from "$lib/pages/landing-page/features.svelte";
  import HomeSection from "$lib/pages/landing-page/home.svelte";
  import HowItWorksSection from "$lib/pages/landing-page/how-it-works.svelte";
  import StatusSection from "$lib/pages/landing-page/status.svelte";
  import TrailerSection from "$lib/pages/landing-page/trailer.svelte";
  import DevelopersSection from "$lib/pages/landing-page/developers.svelte";
  import CommunitySection from "$lib/pages/landing-page/community.svelte";
</script>

<main>
  <section>
    <HomeSection />
  </section>

  <section>
    <StatusSection />
  </section>

  <section>
    <TrailerSection />
  </section>

  <section>
    <FeaturesSection />
  </section>

  <section>
    <GallerySection />
  </section>

  <section>
    <HowItWorksSection />
  </section>

  <section>
    <PreviewServersSection />
  </section>

  <section>
    <DevelopersSection />
  </section>

  <section>
    <CommunitySection />
  </section>
</main>
