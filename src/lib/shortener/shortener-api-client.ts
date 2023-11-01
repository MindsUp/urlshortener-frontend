export function loadData() {
  return fetch("http://localhost:8080/v1/shortened-url");
}

export async function submitShortener(url: string, alias: string) {
    const body = {
        url: url,
        alias: alias
    }
    const response = await fetch("http://localhost:8080/v1/shortened-url",
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
