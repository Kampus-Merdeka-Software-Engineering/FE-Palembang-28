document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username !== "revou" || password !== "password") {
    passwordError.textContent = "Invalid username or password.";
    return;
  }

  window.location.href = "beranda.html";
});
