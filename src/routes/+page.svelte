<script>
  import ChangelogSection from "$lib/pages/landing-page/changelog.svelte";
  import CommunitySection from "$lib/pages/landing-page/community.svelte";
  import HomeSection from "$lib/pages/landing-page/home.svelte";
  import StatusSection from "$lib/pages/landing-page/status.svelte";
</script>

<main>
  <section>
    <HomeSection />
  </section>

  <section>
    <ChangelogSection />
  </section>

  <section>
    <StatusSection />
  </section>

  <section>
    <CommunitySection />
  </section>
</main>
