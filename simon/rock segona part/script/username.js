function saveUsername() {
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  window.location.href = "play.html";
}
