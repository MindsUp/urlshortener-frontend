<script>
  import Header from "../components/header/Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <div class="container-fluid py-3">
      <slot />
    </div>
  </main>

  <footer></footer>
</div>
