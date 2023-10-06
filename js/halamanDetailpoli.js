document.addEventListener("DOMContentLoaded", function () {
  const daftarDokterElement = document.getElementById("daftarDokter");
  const idPoli = 501; // Ganti dengan ID_Poli yang diinginkan

  // Mengambil data dokter dari sumber eksternal menggunakan fetch
  fetch("https://be-palembang-28.up.railway.app/dokter")
    .then((response) => response.json())
    .then((data) => tampilkanDaftarDokter(data, idPoli))
    .catch((error) => console.error("Error:", error));

  function tampilkanDaftarDokter(daftarDokter, idPoli) {
    const dokterPoli = daftarDokter.filter(
      (dokter) => dokter.id_poliklinik === idPoli
    );

    dokterPoli.forEach((dokter) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `detail_dokter.html?id=${dokter.id_dokter}`;
      link.innerText = dokter.nama_dokter;
      listItem.appendChild(link);
      daftarDokterElement.appendChild(listItem);
    });
  }
});
