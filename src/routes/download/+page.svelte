<script>
  import DownloadSection from '$lib/pages/download/download.svelte';
  import SystemRequirementsSection from '$lib/pages/download/system-requirements.svelte';
  import InstallationSection from '$lib/pages/download/installation.svelte';
</script>

<main>
  <section>
    <DownloadSection/>
  </section>

  <section>
    <SystemRequirementsSection />
  </section>

  <section>
    <InstallationSection />
  </section>
</main>
