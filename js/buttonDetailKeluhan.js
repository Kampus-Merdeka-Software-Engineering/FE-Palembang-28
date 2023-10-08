const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const link = document.getElementById("linkEditKeluhan");
link.setAttribute("href", `formjanji.html?id=${id}`);

const button = document.getElementById("deletekeluhan");
button.addEventListener("click", function () {
  deleteKeluhan(id);
});
