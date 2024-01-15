var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

function inputLength() {
  return input.value.length
}

function createButton(string, type) {
  var button = document.createElement("button")

  button.classList.add(type)
  button.appendChild(document.createTextNode(string))

  return button
}

function deleteButton(event) {
  var buttonDelete = event.target
  var parent = buttonDelete.parentElement.parentElement
  parent.removeChild(buttonDelete.parentElement)
}

function doneButton(event) {
  var buttonDone = event.target
  var parent = buttonDone.parentElement
  parent.classList.add("done")
}
function createListElement() {
  var li = document.createElement("li")
  var buttonDone = createButton("Done", "btnone")
  var buttonDelete = createButton("Delete", "delete")

  li.appendChild(document.createTextNode(input.value))
  li.appendChild(buttonDone)
  li.appendChild(buttonDelete)
  ul.appendChild(li)

  input.value = ""

  buttonDelete.addEventListener("click", deleteButton)
  buttonDone.addEventListener("click", doneButton)
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement()
  }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)
