let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let username = localStorage.getItem("username");
let score = localStorage.getItem("score");
console.log("Retrieved score: " + score);

leaderboard.push({ username: username, score: score });


leaderboard.sort((a, b) => b.score - a.score);

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

document.getElementById("score").innerHTML = `Score: ${score}`;

let leaderboardList = document.getElementById("leaderboard");
leaderboardList.innerHTML = "";


for (let i = 0; i < leaderboard.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${leaderboard[i].username}: ${leaderboard[i].score}`;
  leaderboardList.appendChild(listItem);
}
