document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const dokterId = params.get("id");

  fetch(`https://be-palembang-28.up.railway.app/dokter/${dokterId}`)
    .then((response) => response.json())
    .then((data) => tampilkanDetailDokter(data))
    .catch((error) => console.error("Error:", error));

  function tampilkanDetailDokter(dokter) {
    if (dokter) {
      const namaElement = document.getElementById("nama_dokter");
      const deskripsiElement = document.getElementById("deskripsi_dokter");
      const alumniElement = document.getElementById("alumni_dokter");
      const gambarElement = document.getElementById("gambar_dokter");

      namaElement.innerHTML = dokter.nama_dokter;
      deskripsiElement.innerHTML = dokter.deskripsi_dokter;
      alumniElement.innerHTML = dokter.alumni_dokter;
      gambarElement.setAttribute("src",`data:image/png;base64,${dokter.gambar_dokter}`);
    } else {
      console.error("Dokter tidak ditemukan");
    }
  }
});
