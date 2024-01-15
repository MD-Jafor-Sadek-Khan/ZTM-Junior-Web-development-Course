var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

function changeBackgroundGradient() {
  var body = document.querySelector("#gradient")
  var colorOutput = document.getElementsByTagName("h3")[0]

  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value} )`

  colorOutput.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeBackgroundGradient)
color2.addEventListener("input", changeBackgroundGradient)
