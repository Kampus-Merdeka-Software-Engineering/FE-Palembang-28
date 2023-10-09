const ambilPoli = async() => {
    const response = await fetch("https://be-palembang-28.up.railway.app/poliklinik");
    const polikliniks = await response.json();
   
    const h = "text/html"
    let parser = new DOMParser();

        polikliniks.forEach((polikliniks) => {
          let productStr = `
            <div class="container-box">
                <div class="container-img">
                    <img src="data:image/png;base64,${polikliniks.gambar_poliklinik}">
                </div>
                <h5>${polikliniks.nama_poliklinik}</h5>
                <p id="deskripsi_poli">${polikliniks.deskripsi_poliklinik}</p>
                <div class="polibtn">
                    <a href="lihatpoliklinik.html?id=${polikliniks.id_poliklinik}" class="poli-btn">Lihat Detail</a>
                </div>
            </div>  s
        `;
          let el = parser.parseFromString(productStr, h);
          let root = document.querySelector("div.row-items");
          root.appendChild(el.body.firstChild);
        });
};

ambilPoli();