
localStorage.removeItem("score");


var score = localStorage.getItem("score");

if (score === null) {
  score = 0;
}


function playGame(playerChoice) {
  
  var computerChoice = Math.floor(Math.random() * 3); 
  
  
  if (playerChoice === computerChoice) {
    
    alert("It's a tie!");
  } else if ((playerChoice === 0 && computerChoice === 2) || 
             (playerChoice === 1 && computerChoice === 0) ||
             (playerChoice === 2 && computerChoice === 1)) {
    
    score++;
    localStorage.setItem("score", score);
    document.getElementById("score").innerText = score;
    alert("You win!");
  } else {
    
    localStorage.setItem("score", score);
    alert("You lose!");
    window.location.href = "leaderboard.html";
  }
}


document.getElementById("rock").addEventListener("click", function() {
  playGame(0); 
});
document.getElementById("paper").addEventListener("click", function() {
  playGame(1); 
});
document.getElementById("scissors").addEventListener("click", function() {
  playGame(2); 
});


document.getElementById("score").innerText = score;
