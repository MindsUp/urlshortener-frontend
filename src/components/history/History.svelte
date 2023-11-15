<script lang="ts">
  import { Trash } from "svelte-bootstrap-icons";
  import { onMount } from "svelte";
  import { loadData, deleteByAlias } from "$lib/shortener/shortener-api-client";
  import type { URLShortener } from "../../$types/shortener";
  import Time from "svelte-time";

  /** @type {import('./$types').PageData} */
  export let history: URLShortener[] = [];

  onMount(async () => {
      loadHistory()
  });

  function loadHistory(){
      loadData()
          .then((response:any) => response.json())
          .then((body:any) => {
              history = body.resource;
          })
          .catch((error) => {
              console.log(error);
          });
  }

  function deleteData(alias: string) {
    deleteByAlias(alias)
        .then(() => loadHistory())
        .catch((error) => {
          console.log(error);
        });
  }
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
              <button type="button" class="btn btn-outline-danger" on:click="{deleteData(shortener.alias)}"><Trash /></button>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</div>
