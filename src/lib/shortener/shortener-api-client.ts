export function loadData() {
  return fetch("data/history.json").then((response) => response.json());
}

export function urlShortener(url: URL, alias: string) {
  return (
    '{ "url": "' +
    url +
    '", "alias": "' +
    alias +
    '", "createdAt": "' +
    new Date().toISOString() +
    '" }'
  );
}
