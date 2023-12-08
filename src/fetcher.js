export const fetcher = (url) => {
    fetch(BASE_URL + url)
    .then(response => response.json())
    .then(data => {
        return data;
    })
}