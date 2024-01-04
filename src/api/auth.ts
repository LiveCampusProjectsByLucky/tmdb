export async function loginViaApi(api_key: string) {
  return await fetch(`https://api.themoviedb.org/3/authentication?api_key=${api_key}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}
