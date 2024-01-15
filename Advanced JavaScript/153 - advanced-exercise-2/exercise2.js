//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
        case "left":
            break;
            whatHappens = "you run into a troll";
            
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}




//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");



//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function game(direction){
    var result;
    switch(direction){
        case "forward":
            return result = " you encounter a monster";
        case "back":
            return result = "Home";

        case "left":
            return result = "you found a river"

        case "right":
            return result = "you run into a troll"
        
        default:
            return result = "your saying gibberish. Enter a valid direction!!!"
    }
}