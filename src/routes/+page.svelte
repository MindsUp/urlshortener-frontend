<script>
  import { afterUpdate } from "svelte";
  import Home from "../components/home/Home.svelte";

  /** @type {import('./$types').ActionData} */
  export let form;

  afterUpdate(async () => {
    if (form?.success) {
      console.log(form.createdAt);
    }
  });
</script>

<Home />
