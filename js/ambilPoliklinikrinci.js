const ambilPoliklinik = async () => {
  const response = await fetch(
    "https://be-palembang-28.up.railway.app/poliklinik"
  );
  const poliklinik = await response.json();

  const h = "text/html";
  let parser = new DOMParser();

  poliklinik.forEach((poliklinik) => {
    let productStr = `
          <ul class="specialty-list">
            <li>
              <img img src="data:image/png;base64,${poliklinik.gambar_poliklinik}">
              <div class="specialty-info">
                  <h2>${poliklinik.nama_poliklinik}</h2>
                  <p>${poliklinik.deskripsi_poliklinik}</p>
                  <a href="lihatpoliklinik.html?id=${poliklinik.id_poliklinik}">
                      <button class="view-doctor-button">Lihat Dokter</button>
                  </a>
              </div>
            </li> 
          </ul>
          
        `;
    let el = parser.parseFromString(productStr, h);
    let root = document.querySelector("div.tampil-poliklinik");
    root.appendChild(el.body.firstChild);
  });
};

ambilPoliklinik();
