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
      const alumniElement = document.getElementById("alumni_dokter");
      const deskripsiElement = document.getElementById("deskripsi_dokter");

      namaElement.innerHTML = dokter.nama_dokter;
      alumniElement.innerHTML = `Alumni: ${dokter.alumni_dokter}`;
      deskripsiElement.innerHTML = `Deskripsi: ${dokter.deskripsi_dokter}`;
    } else {
      console.error("Dokter tidak ditemukan");
    }
  }
});
