function checkDriverAge(age) {
  var age = prompt("What is your Age?")

  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off")
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!")
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
  }
}

checkDriverAge()

var checkDriverAge2 = function () {
  var age = prompt("What is your Age?")

  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off")
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!")
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
  }
}

checkDriverAge2()

var checkDriverAge3 = function (age) {

  if (Number(age) < 18) {
    console.log("Sorry, you are too yound to drive this car. Powering off")
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!")
  } else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!")
  }
}


checkDriverAge3(92)