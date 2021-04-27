async function fetchData(type) {
  return await fetch(`https://jsonplaceholder.typicode.com/${type}`).then(
    resp => resp.json()
  )
}
export { fetchData };
