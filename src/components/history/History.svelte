<script lang="ts">
  import { Trash } from "svelte-bootstrap-icons";
</script>

<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">History</h5>
        <ul class="list-group list-group-flush">
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
                      value="/xyz"
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
                      value="www.google.com"
                    />
                  </div>
                </div>
                <span>Created at: 2021-05-25 15:40</span>
              </div>
              <div class="col-2 text-center">
                <button type="button" class="btn btn-outline-danger"><Trash /></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
