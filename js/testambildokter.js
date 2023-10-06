document.addEventListener("DOMContentLoaded", function () {
  var id = getParameterByName("id_dokter");

  var apiUrl = "https://be-palembang-28.up.railway.app/dokter/" + id;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var contentDiv = document.getElementById("content");

      if (data) {
        contentDiv.innerHTML =
          "<h2>" +
          data.nama_dokter +
          "</h2><p>" +
          data.deskripsi_dokter +
          "</p>"; 
      }
    })
    .catch((error) => {
      console.error("Gagal memuat data: ", error);
    });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
