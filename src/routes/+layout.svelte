<script>
  import Header from "../components/header/Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <div class="container">
    <slot />
    </div>
  </main>

  <footer></footer>
</div>
