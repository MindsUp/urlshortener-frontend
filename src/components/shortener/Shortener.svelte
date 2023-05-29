<script lang="ts">
  import { onMount } from "svelte";
  import { urlShortener } from "../../lib/shortener/shortener-api-client";

  /** @type {import('./$types').Actions} */
  export const actions = {
    default: async ({ request }) => {
      const data = await request.formData();
      const url = data.get("url");
      const alias = data.get("alias");

      return urlShortener(url, alias);
    }
  };

  onMount(async () => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

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
<form method="POST" class="needs-validation" novalidate>
  <div class="row mb-3">
    <label for="url" class="col-2 col-form-label">Url</label>
    <div class="col-8">
      <div class="input-group has-validation">
        <input id="url" class="form-control" type="url" required />
        <div class="invalid-feedback">Please provide an url</div>
      </div>
    </div>
  </div>
  <div class="row mb-3">
    <label for="alias" class="col-2 col-form-label">Alias</label>
    <div class="col-8">
      <div class="input-group has-validation">
        <input id="alias" class="form-control" type="text" required />
        <div class="invalid-feedback">Please provide an alias</div>
      </div>
    </div>
  </div>
  <div class="d-grid col-5 mx-auto">
    <button class="btn btn-primary">Submit</button>
  </div>
</form>
