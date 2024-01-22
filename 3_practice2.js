//problem:-create a game where you start with any random game number. ask the user to keep guessing the game number until user enter correct value
let GameNum = 27;

let userNum=prompt("Guess number:");

while(GameNum!=userNum)
{
 userNum=prompt("opps wrong..guess again");
 //remember prompt return string
}
console.log("you won!");
