const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const idDokter = urlParams.get("idDokter");

let url = `https://be-palembang-28.up.railway.app/keluhan`;
let urlDokter = `https://be-palembang-28.up.railway.app/dokter`;
let methodAPI = "POST";

optionDokter();

if (id) {
  methodAPI = "PATCH";

  url += `/${id}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch keluhan");
      }
      return response.json();
    })
    .then((data) => {
      if (data !== null) {
        document.querySelector("#nama_keluhan").value = data.nama_keluhan;
        document.querySelector("#nama_dokter").value = data.id_dokter;
        document.querySelector("#jenis_kelamin").value = data.jenis_kelamin;
        document.querySelector("#waktu_keluhan").value = data.waktu_keluhan;
        document.querySelector("#umur").value = data.umur;
        document.querySelector("#kartu_identitas").value = data.kartu_identitas;
        document.querySelector("#deskripsi_keluhan").value =
          data.deskripsi_keluhan;
        document.querySelector("#nama_pasien").value = data.nama_pasien;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const form = document.querySelector("#formAddKeluhan");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const jsonData = {
    nama_keluhan: document.querySelector("#nama_keluhan").value.toString(),
    id_dokter: document.querySelector("#nama_dokter").value.toString(),
    jenis_kelamin: document.querySelector("#jenis_kelamin").value.toString(),
    waktu_keluhan: document.querySelector("#waktu_keluhan").value.toString(),
    umur: document.querySelector("#umur").value.toString(),
    kartu_identitas: document
      .querySelector("#kartu_identitas")
      .value.toString(),
    deskripsi_keluhan: document
      .querySelector("#deskripsi_keluhan")
      .value.toString(),
    nama_pasien: document.querySelector("#nama_pasien").value.toString(),
  };

  try {
    const response = await fetch(url, {
      method: methodAPI,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      alert("Data berhasil dikirim ke database!");
    } else {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  } catch (error) {
    console.error("Network error:", error);
  }

  window.location.href = "listjanji.html";
});

function optionDokter() {
  const select = document.querySelector("#nama_dokter");

  if (idDokter) {
    urlDokter += `/${idDokter}`;
  }

  fetch(urlDokter)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch dokter");
      }
      return response.json();
    })
    .then((dataDokter) => {
      if (idDokter) {
        const option = document.createElement("option");
        option.value = dataDokter.id_dokter;
        const urlPoliklink = `https://be-palembang-28.up.railway.app/poliklinik/${dataDokter.id_poliklinik}`;

        fetch(urlPoliklink)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch poliklink");
            }
            return response.json();
          })
          .then((dataPoliklink) => {
            option.textContent =
              dataDokter.nama_dokter + " - " + dataPoliklink.nama_poliklinik;
          })
          .catch((error) => {
            console.error(error);
          });

        select.appendChild(option);
        document.querySelector("#nama_dokter").value = dataDokter.id_dokter;
      } else {
        dataDokter.forEach((dokter) => {
          const option = document.createElement("option");
          option.value = dokter.id_dokter;

          const urlPoliklink = `https://be-palembang-28.up.railway.app/poliklinik/${dokter.id_poliklinik}`;

          fetch(urlPoliklink)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch poliklink");
              }
              return response.json();
            })
            .then((dataPoliklink) => {
              option.textContent =
                dokter.nama_dokter + " - " + dataPoliklink.nama_poliklinik;
            })
            .catch((error) => {
              console.error(error);
            });

          select.appendChild(option);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
