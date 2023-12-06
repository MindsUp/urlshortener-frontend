<script lang="ts">
  import { submitShortener } from "$lib/shortener/shortener-api-client";
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";

  let shortener = {
    url: "",
    alias: ""
  };

  const submitData = () => {
    submitShortener(shortener.url, shortener.alias + "B")
            .then((response:any) => response.json())
            .then((response: any) => {
              console.log("On Shortener.svelte: "+JSON.stringify(response));
            });
  };

  onMount(async () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  });
</script>

<div class="d-grid mb-3 col-5 mx-auto justify-content-center">
  <h1>Shortener</h1>
</div>
<form method="POST" action="?/submitShortener1" class="needs-validation" novalidate use:enhance>
  <div class="row mb-3">
    <label for="url" class="col-2 col-form-label">Url</label>
    <div class="col-8">
      <div class="input-group has-validation">
        <input
          id="url"
          name="url"
          class="form-control"
          type="text"
          required
          bind:value="{shortener.url}"
        />
        <div class="invalid-feedback">Please provide an url</div>
      </div>
    </div>
  </div>
  <div class="row mb-3">
    <label for="alias" class="col-2 col-form-label">Alias</label>
    <div class="col-8">
      <div class="input-group has-validation">
        <input
          id="alias"
          name="alias"
          class="form-control"
          type="text"
          required
          bind:value="{shortener.alias}"
        />
        <div class="invalid-feedback">Please provide an alias</div>
      </div>
    </div>
  </div>
  <div class="d-grid col-5 mx-auto">
    <button class="btn btn-primary" on:click="{submitData}">Submit</button>
  </div>
</form>
