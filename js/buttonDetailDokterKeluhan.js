const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

const link = document.getElementById("linkAddKeluhanDokter");
link.setAttribute("href", `formjanji.html?idDokter=${id}`);
