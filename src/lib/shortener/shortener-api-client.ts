export function loadData() {
  return fetch("data/history.json").then((response) => response.json());
}

export function submitShortener(url: string, alias: string) {
  return { url: url, alias: alias, createdAt: new Date().toISOString() };
}
