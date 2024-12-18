// Stone Paper Scrissors Game
var startgame = confirm("Lets Start the Game");
if (startgame == true) {
  var person1 = prompt("Enter Any Stone / Paper / Scrissors").toLowerCase();
  var person2 = prompt("Enter Any Stone / Paper / Scrissors").toLowerCase();

  if (person1 == "paper" && person2 == "paper") {
    alert("Tied");
  } else if (person1 == "stone" && person2 == "stone") {
    alert("Tied");
  } else if (person1 == "scrissors" && person2 == "scrissors") {
    alert("Tied");
  } else if (person1 == "paper" && person2 == "stone") {
    alert("Player 1 wins");
  } else if (person1 == "stone" && person2 == "scissors") {
    alert("Player 1 wins");
  } else if (person1 == "scissors" && person2 == "paper") {
    alert("Player 1 wins");
  } else if (person1 == "stone" && person2 == "paper") {
    alert("Player 2 wins");
  } else if (person1 == "scrissors" && person2 == "stone") {
    alert("Player 2 wins");
  } else if (person1 == "paper" && person2 == "scrissors") {
    alert("Player 2 wins");
  } else {
    alert("Invalid Charactors");
  }
} else {
  alert("game canceled");
}
