// Define a function to handle the button click event
function redirectToPage() {
  window.location.href = "editformjanji.html";
}

try {
  document.getElementById("btn_detailkeluhan").addEventListener("click", redirectToPage);
} catch (error) {
  console.error("An error occurred:", error.message);
}
