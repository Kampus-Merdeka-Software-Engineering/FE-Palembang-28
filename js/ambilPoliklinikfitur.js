const ambilPoli = async() => {
    const response = await fetch("https://be-palembang-28.up.railway.app/poliklinik");
    const polikliniks = await response.json();

    const h = "text/html"
    let parser = new DOMParser();

        polikliniks.forEach((polikliniks) => {
          let productStr = `
            <div class="specialty">
                <img src="data:image/png;base64,${polikliniks.gambar_poliklinik}">
                <p>${polikliniks.nama_poliklinik}</p>
            </div>
        `;
          let el = parser.parseFromString(productStr, h);
          let root = document.querySelector("div.specialties");
          root.appendChild(el.body.firstChild);
        });
};

ambilPoli();