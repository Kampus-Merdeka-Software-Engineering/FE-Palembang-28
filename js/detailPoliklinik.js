document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const poliklinikId = params.get("id");

  fetch(`https://be-palembang-28.up.railway.app/poliklinik/${poliklinikId}`)
    .then((response) => response.json())
    .then((data) => tampilkanDetailDokter(data))
    .catch((error) => console.error("Error:", error));

  function tampilkanDetailDokter(poliklinik) {
    if (poliklinik) {
      const namaElement = document.getElementById("nama_poliklinik");
      const deskripsiElement = document.getElementById("deskripsi_poliklinik");
      const gambarElement = document.getElementById("gambar_poliklinik");

        namaElement.innerHTML = poliklinik.nama_poliklinik;
        deskripsiElement.innerHTML = poliklinik.deskripsi_poliklinik;
        gambarElement.setAttribute("src", `data:image/png;base64,${poliklinik.gambar_poliklinik}`);
        
    } else {
      console.error("Poliklinik tidak ditemukan");
    }
  }

});
