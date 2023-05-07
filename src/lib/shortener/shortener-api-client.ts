export function loadData() {
    return fetch("../../../data/history.json")
    .then((response) => response.json());
}

