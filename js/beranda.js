const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

function redirectToLoginPage() {
  window.location.href = "login.html";
}
