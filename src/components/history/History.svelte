<script lang="ts">
  import { Trash } from "svelte-bootstrap-icons";
  import { onMount } from "svelte";
  import { loadData } from "../../lib/shortener/shortener-api-client";
  import type { URLShortener } from "../../$types/shortener";
  import Time from "svelte-time";

  /** @type {import('./$types').PageData} */
  export let history: URLShortener[] = [];
  onMount(async () => {
    /**
     * @type {any[]}
     */
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    console.log(tooltipTriggerList?.length);
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      // @ts-ignore
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    loadData()
      .then((data) => {
        history = data.resource.slice(0, 10);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">History</h5>
        <ul class="list-group list-group-flush">
          {#each history as shortener}
            <li class="list-group-item">
              <div class="row">
                <div class="col-10">
                  <div class="form-group row">
                    <label for="alias" class="col-sm-3 col-form-label">Alias:</label>
                    <div class="col-sm">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        id="alias"
                        value="{shortener.alias}"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="url" class="col-sm-3 col-form-label">URL:</label>
                    <div class="col-sm">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        id="url"
                        value="{shortener.url}"
                      />
                    </div>
                  </div>
                  <span data-bs-toggle="tooltip" data-bs-title="Another tooltip"
                    >Created at: <Time relative timestamp="{shortener.createdAt}" /></span
                  >
                </div>
                <div class="col-2 text-center">
                  <button type="button" class="btn btn-outline-danger"><Trash /></button>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
