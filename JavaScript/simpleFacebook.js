var database = [
  {
    username: "Rahat",
    password: "123",
  },
  {
    username: "Mukta",
    password: "01821809090",
  },
  {
    username: "Alien",
    password: "Zap!!",
  },
]

var newsFeed = [
  {
    username: "Jafor",
    timeLine: "Hi there Im Jafor",
  },
  {
    username: "Sadek",
    timeLine: "Hi there Im Sadek",
  },
]

var usernamePrompt = prompt('Enter your "User Name"')
var passwordPrompt = prompt('Enter your "Password"')


function checkValidation(user, password) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && password === database[i].password) {
      return true
    }
  }
  return false
}

function signIn(user, password) {
  if (checkValidation(user, password)) {
    console.log(newsFeed)
  } else {
    alert("You Entered Wrong UserName or Password!!!")
  }
}

signIn(usernamePrompt, passwordPrompt)
