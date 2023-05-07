<script>
  import "../app.scss";
  import Header from "../components/header/Header.svelte";
</script>

<div class="app">
  <Header />

  <main>
    <div class="container-fluid">
      <div class="row py-5">
        <slot />
      </div>
    </div>
  </main>

  <footer></footer>
</div>
