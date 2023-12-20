import { PUBLIC_BACKEND_URL } from '$env/static/public'

function buildUrl(version = "v1") {
  return `${PUBLIC_BACKEND_URL}/${version}/shortened-url`
}

export function loadData() {
  return fetch(buildUrl());
}

export function findByAlias(alias: string):Promise<Response> {
  return fetch(`${buildUrl()}/${alias}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export function deleteByAlias(alias: string):Promise<Response> {
  return fetch(`${buildUrl()}/${alias}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function submitShortener(url: string, alias: string) {
    const body = {
        url: url,
        alias: alias
    }
    const response = await fetch(buildUrl(),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    console.log("On shortener-api-client.ts")
    return response;
}
