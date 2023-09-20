function loadAppointments() {
  const appointmentList =
    JSON.parse(localStorage.getItem("appointments")) || [];
  const listElement = document.getElementById("appointmentList");
  listElement.innerHTML = "";

  appointmentList.forEach((appointment, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${appointment.name} - ${appointment.date} 
            <button onclick="editAppointment(${index})">Edit</button>
            <button onclick="deleteAppointment(${index})">Delete</button>
        `;
    listElement.appendChild(listItem);
  });
}

function editAppointment(index) {
  const appointmentList = JSON.parse(localStorage.getItem("appointments"));
  const appointment = appointmentList[index];

  const name = prompt("Edit Name:", appointment.name);
  const date = prompt("Edit Date:", appointment.date);

  if (name !== null && date !== null) {
    appointmentList[index] = { name, date };
    localStorage.setItem("appointments", JSON.stringify(appointmentList));
    loadAppointments();
  }
}

function deleteAppointment(index) {
  const appointmentList = JSON.parse(localStorage.getItem("appointments"));
  appointmentList.splice(index, 1);
  localStorage.setItem("appointments", JSON.stringify(appointmentList));
  loadAppointments();
}

loadAppointments();
