document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const dokterId = params.get("id");

  // Mengambil data dokter dari sumber eksternal menggunakan fetch
  fetch(`https://be-palembang-28.up.railway.app/keluhan/${dokterId}`)
    .then((response) => response.json())
    .then((data) => tampilkanDetailDokter(data))
    .catch((error) => console.error("Error:", error));

  function tampilkanDetailDokter(dokter) {
    if (dokter) {
      console.log("Mauuu");
      const namaElement = document.getElementById("nama_dokter");
      const alumniElement = document.getElementById("alumni_dokter");
      const deskripsiElement = document.getElementById("deskripsi_dokter");

      namaElement.innerHTML = dokter.nama_keluhan;
      alumniElement.innerHTML = `Alumni: ${dokter.kartu_identitas}`;
      deskripsiElement.innerHTML = `Deskripsi: ${dokter.deskripsi_keluhan}`;
    } else {
      console.error("Dokter tidak ditemukan");
    }
  }
});
