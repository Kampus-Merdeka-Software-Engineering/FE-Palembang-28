function deleteKeluhan(id) {
  const response = confirm("Apakah anda yakin menghapus data keluhan ini");

  if (response) {
    fetch(`https://be-palembang-28.up.railway.app/keluhan/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete keluhan");
        }
        // Keluhan deleted successfully
        // Redirect to the list of keluhan
        window.location.href = "listjanji.html";
      })
      .catch((error) => {
        console.error(error);
        // Show an error message to the user
        alert("Failed to delete keluhan");
      });
  }
}
