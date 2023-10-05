document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("deskripsi_poli");
  var text = element.innerHTML;
  var maxLength = 50;

  if (text.length > maxLength) {
    element.innerHTML = text.slice(0, maxLength) + "...";
  }
});
