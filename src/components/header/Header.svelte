<script>
  import { onMount } from "svelte";

  // Add this to initialize the Bootstrap tooltip
  onMount(() => {
    window.$('[data-bs-toggle="tooltip"]').tooltip();
  });
</script>

<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/logo.png" alt="Logo" height="36" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
