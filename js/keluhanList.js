// const axios = require("axios");

// const getUsers = async () => {
//   try {
//     const response = await axios.get("https://be-palembang-28.up.railway.app/keluhan");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// const displayUsers = async () => {
//   const users = await getUsers();

//   if (users.length > 0) {
//     console.log("User List:");
//     users.forEach((user, index) => {
//       console.log(`#${index + 1}: ${user.name}, ${user.email}, ${user.gender}`);
//     });
//   } else {
//     console.log("No users found.");
//   }
// };

// const main = async () => {
//   await displayUsers();

//   // Example of deleting a user (replace with actual user ID)
//   // await deleteUser(userId);
// };

// main();

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
            <button class="detail-button" id="btn_detailkeluhan">Detail</button>
        </div>
        `;
    let el = parser.parseFromString(productStr, h);
    let root = document.querySelector("div.container");
    root.appendChild(el.body.firstChild);
  });
};

ambilKeluhan();