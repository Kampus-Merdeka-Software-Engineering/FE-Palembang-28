const ambilKeluhan = async () => {
  const response = await fetch("https://be-palembang-28.up.railway.app/keluhan"
  );
  const keluhan = await response.json();
  console.log(keluhan);

  const h = "text/html";
  let parser = new DOMParser();

  keluhan.forEach((keluhan) => {
    let productStr = `
        <div class="appointment">
            <div class="speciality">
                <p>${keluhan.nama_keluhan} - ${keluhan.nama_pasien}</p>
            </div>
            <a href="detail_dokter.html?id=${keluhan.id_keluhan}">
              <button class="detail-button" id="btn_detailkeluhan">Detail</button>
            </a>
            
        </div>
        `;
    let el = parser.parseFromString(productStr, h);
    let root = document.querySelector("div.container");
    root.appendChild(el.body.firstChild);
  });
};

ambilKeluhan();