document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    if (name && date) {
      const appointmentList =
        JSON.parse(localStorage.getItem("appointments")) || [];
      appointmentList.push({ name, date });
      localStorage.setItem("appointments", JSON.stringify(appointmentList));

      document.getElementById("appointmentForm").reset();
      window.location.href = "janjimu.html";
    }
  });
