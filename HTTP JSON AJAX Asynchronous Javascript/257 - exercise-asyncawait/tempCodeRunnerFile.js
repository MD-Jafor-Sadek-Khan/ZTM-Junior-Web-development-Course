const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
]

const getData = async (links) => {
  try {
    const [users, posts, albums] = await Promise.all(
      links.map(async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      })
    )
    console.log("users",users);
    console.log("posts",posts);
    console.log("albums",albums);   
  } catch (error) {
    console.log("oooooops");
  }
}

getData(urls)