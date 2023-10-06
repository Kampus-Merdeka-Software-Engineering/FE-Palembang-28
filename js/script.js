const header = document.querySelector("header");

window.addEventListener ("scroll", function(){

    header.classList.toggle ("sticky", window.scrollY > 0);
}); 

function redirectToLoginPage() {
  window.location.href = "login.html";
}

function redirectToformjanjimuPage() {
  window.location.href = "addformjanji.html";
}

function redirectTorincidokterPage() {
  window.location.href = "rincidokter.html";
}

function redirectTospesialisasidokterPage() {
  window.location.href = "rincipoliklinik.html";
}

function redirectTolihatdokterPage() {
  window.location.href = "lihatdokter.html";
}

