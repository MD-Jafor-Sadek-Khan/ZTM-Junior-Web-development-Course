const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]


const loopThroughUrl = async (urls) =>{
  const responseArray = []
  for await (const url of urls){
    const response = await fetch(url)
    responseArray.push(await response.json())
  }
  const [users,posts,albums] = await Promise.all(responseArray)
  console.log('Users:', users);
  console.log('Posts:', posts);
  console.log('Albums:', albums);

  console.log(`${users} ${posts} ${albums}`);
}

loopThroughUrl(urls)