import { submitShortener } from "$lib/shortener/shortener-api-client";

/** @type {import('./$types').Actions} */
export const actions = {
  submitShortener1: async ({request}) => {
    const data = await request.formData();
    const url = String(data.get("url"));
    const alias = String(data.get("alias"));

    console.log(url + "  - action - " + alias);

    return submitShortener(url, alias);
  }
}
