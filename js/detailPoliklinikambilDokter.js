const urlParams = new URLSearchParams(window.location.search);
const idPoli = parseInt(urlParams.get("id"));

const ambilDok = async () => {
  const response = await fetch("https://be-palembang-28.up.railway.app/dokter");
  const dokters = await response.json();

  const h = "text/html";
  let parser = new DOMParser();

  const urlParams = new URLSearchParams(window.location.search);
  const idPoli = parseInt(urlParams.get("id"));

  dokters.forEach((dokter) => {
    if (dokter.id_poliklinik === idPoli) {
      let productStr = `
            <div class="card-docs">
                <img src="data:image/png;base64,${dokter.gambar_dokter}">
                <div class="dokter-name">${dokter.nama_dokter}</div>
                <div class="dokter-spesialis">${dokter.deskripsi_dokter}</div>
                <a href="rincidokter.html?id=${dokter.id_dokter}" class="lihat-button">Lihat</a>
            </div>
        `;

      let el = parser.parseFromString(productStr, h);
      let root = document.querySelector("div.dokter-card");
      root.appendChild(el.body.firstChild);
    }
  });
};

ambilDok();
