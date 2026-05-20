<script>
  //import ChangelogSection from "$lib/pages/landing-page/changelog.svelte";
  import PreviewServersSection from "$lib/pages/landing-page/preview-servers.svelte";
  import FeaturesSection from "$lib/pages/landing-page/features.svelte";
  import HomeSection from "$lib/pages/landing-page/home.svelte";
  import HowItWorksSection from "$lib/pages/landing-page/how-it-works.svelte";
  import StatusSection from "$lib/pages/landing-page/status.svelte";
</script>

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

  <!--<section>
    <ChangelogSection />
  </section>-->

  <section>
    <HowItWorksSection />
  </section>

  <section>
    <PreviewServersSection />
  </section>
</main>
