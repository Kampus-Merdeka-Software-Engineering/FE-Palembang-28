document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const keluhanId = params.get("id");

  fetch(`https://be-palembang-28.up.railway.app/keluhan/${keluhanId}`)
    .then((response) => response.json())
    .then((data) => tampilkanDetailKeluhan(data))
    .catch((error) => console.error("Error:", error));

  function tampilkanDetailKeluhan(keluhan) {
    if (keluhan) {
      const namaKeluhan = document.getElementById("nama_keluhan");
      const namaDokter = document.getElementById("nama_dokter");
      const spesialisDokter = document.getElementById("spesialis_dokter");
      const namaPasien = document.getElementById("nama_pasien");
      const jenisKelamin = document.getElementById("jenis_kelamin");
      const waktuKeluhan = document.getElementById("waktu_keluhan");
      const umur = document.getElementById("umur");
      const kartuIdentitas = document.getElementById("kartu_identitas");
      const deskripsiKeluhan = document.getElementById("deskripsi_keluhan");

      namaKeluhan.innerHTML = keluhan.nama_keluhan;
      namaPasien.innerHTML = keluhan.nama_pasien;
      jenisKelamin.innerHTML = keluhan.jenis_kelamin;
      waktuKeluhan.innerHTML = keluhan.waktu_keluhan;
      umur.innerHTML = keluhan.umur;
      kartuIdentitas.innerHTML = keluhan.kartu_identitas;
      deskripsiKeluhan.innerHTML = keluhan.deskripsi_keluhan;

      let urlDokter = `https://be-palembang-28.up.railway.app/dokter/${keluhan.id_dokter}`;
      fetch(urlDokter)
        .then((response) => response.json())
        .then((data) => {
          namaDokter.innerHTML = data.nama_dokter;

          const urlPoliklink = `https://be-palembang-28.up.railway.app/poliklinik/${data.id_poliklinik}`;

          fetch(urlPoliklink)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch poliklink");
              }
              return response.json();
            })
            .then((dataPoliklink) => {
              spesialisDokter.innerHTML = dataPoliklink.nama_poliklinik;
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => console.error("Error:", error));
    } else {
      console.error("keluhan tidak ditemukan");
    }
  }
});
