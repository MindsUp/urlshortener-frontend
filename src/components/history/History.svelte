<script lang="ts">
  import { Trash } from "svelte-bootstrap-icons";
  import { onMount } from "svelte";
  import { loadData } from "../../lib/shortener/shortener-api-client";
  import type { URLShortener } from "../../$types/shortener";
  import Time from "svelte-time";

  /** @type {import('./$types').PageData} */
  export let history: URLShortener[] = [];

  onMount(async () => {
    loadData()
      .then((data) => {
        history = data.resource.slice(0, 5);
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
        <ol class="list-group list-group-flush list-group-numbered">
          {#each history as shortener}
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-truncate">
                <div class="align-self-start">
                  <div class="fw-bold">{shortener.alias}</div>
                </div>
                <div class="align-self-center col text-truncate">
                  <span><a href="{shortener.url}" target="_blank">{shortener.url}</a></span>
                </div>
                <div class="align-self-end">
                  <span>Created at: <Time relative timestamp="{shortener.createdAt}" /></span>
                </div>
              </div>
              <button type="button" class="btn btn-outline-danger"><Trash /></button>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</div>
