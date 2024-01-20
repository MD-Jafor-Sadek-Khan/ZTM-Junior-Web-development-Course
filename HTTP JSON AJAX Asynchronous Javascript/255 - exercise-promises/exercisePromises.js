// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success")
})

promise.then((resolve) => console.log(resolve)).catch(error => console.log(error))

// #2) Run the above promise and make it console.log "success"

const promise2 = new Promise((resolve, reject)=>{
  if(true) resolve("success")
  reject("error")
})

promise2.then(resolve => console.log(resolve)).catch(error => console.log(error))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("success").then(result => console.log(result))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch(err => console.log("Oooops something went wrong"))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",

]




Promise.all(urls.map(url => {
  return fetch(url)
  .then(result => result.json())
})).then(data => console.log(data)).catch(err => console.log("err"))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
