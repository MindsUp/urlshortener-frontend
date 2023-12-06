import {error, redirect} from "@sveltejs/kit";
import {findByAlias} from "$lib/shortener/shortener-api-client";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  // Getting the current path
  const { alias } = params;

  // Making a request to the backend
  const res = await findByAlias(alias);

  if (res.ok) {
    const data = await res.json();

    throw redirect(307, data.url);
  } else {
    // error handling
    throw error(404, "Alias not found");
  }
}
