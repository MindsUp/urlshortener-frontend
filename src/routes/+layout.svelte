<script>
  import Header from "../components/header/Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer></footer>
</div>
