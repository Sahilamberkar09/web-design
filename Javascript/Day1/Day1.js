// Stone Paper Scrissors Game
var startgame = confirm("Let's Start the Best of 3 Game");

if (startgame == true) {
  var player1Wins = 0;
  var player2Wins = 0;

  for (var round = 1; round <= 3; round++) {
    document.write(
      `Round ${round} - Current Score: Player 1 (${player1Wins}) - Player 2 (${player2Wins})`
    );

    var person1 = prompt(
      "Player 1: Enter Stone, Paper, or Scissors:"
    ).toLowerCase();
    var person2 = prompt(
      "Player 2: Enter Stone, Paper, or Scissors:"
    ).toLowerCase();

    if (
      (person1 !== "stone" && person1 !== "paper" && person1 !== "scissors") ||
      (person2 !== "stone" && person2 !== "paper" && person2 !== "scissors")
    ) {
      alert(
        "Invalid input from one or both players. Please enter Stone, Paper, or Scissors."
      );
      round--;
      continue;
    }
    if (person1 === person2) {
      alert("It's a Tie!");
    } else if (
      (person1 === "paper" && person2 === "stone") ||
      (person1 === "stone" && person2 === "scissors") ||
      (person1 === "scissors" && person2 === "paper")
    ) {
      alert("Player 1 Wins This Round!");
      player1Wins++;
    } else {
      alert("Player 2 Wins This Round!");
      player2Wins++;
    }
    if (player1Wins === 2 || player2Wins === 2) {
      break;
    }
  }
  if (player1Wins > player2Wins) {
    alert(
      `Player 1 Wins the Game! Final Score: Player 1 (${player1Wins}) - Player 2 (${player2Wins})`
    );
  } else if (player2Wins > player1Wins) {
    alert(
      `Player 2 Wins the Game! Final Score: Player 1 (${player1Wins}) - Player 2 (${player2Wins})`
    );
  } else {
    alert("The game ends in a Tie!");
  }
} else {
  alert("Game canceled");
}
