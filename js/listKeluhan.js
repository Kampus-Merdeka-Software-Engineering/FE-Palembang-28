const ambilKeluhan = async () => {
  const response = await fetch(
    "https://be-palembang-28.up.railway.app/keluhan"
  );
  const keluhan = await response.json();

  const h = "text/html";
  let parser = new DOMParser();

  const root = document.querySelector("div.container");

  if (keluhan.length === 0) {
    let noDataElement = document.createElement("div");
    noDataElement.classList.add("no-data-message");

    // Membuat elemen gambar
    let imgElement = document.createElement("img");
    imgElement.src = "img/nothing.jpg"; 
    imgElement.classList.add("centered-image");

    noDataElement.appendChild(imgElement);

    root.appendChild(noDataElement);

  } else {
    keluhan.forEach((keluhan) => {
      let productStr = `
        <div class="appointment">
            <div class="speciality">
                <p>${keluhan.nama_keluhan} - ${keluhan.nama_pasien}</p>
            </div>
            <a href="detailkeluhan.html?id=${keluhan.id_keluhan}">
              <button class="detail-button" id="btn_detailkeluhan">Detail</button>
            </a>
        </div>
      `;
      let el = parser.parseFromString(productStr, h);
      root.appendChild(el.body.firstChild);
    });
  }
};

ambilKeluhan();
