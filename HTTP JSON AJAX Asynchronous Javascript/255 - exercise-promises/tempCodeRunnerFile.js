const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplace",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",

]




Promise.all(urls.map(url => {
  return fetch(url)
  .then(result => result.json())
})).then(data => console.log(data)).catch(err => console.log("err"))