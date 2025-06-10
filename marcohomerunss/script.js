document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {};
  for (const [key, value] of formData.entries()) {
    if (!value.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (key.includes("email") && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
      alert("Correo no válido.");
      return;
    }
    data[key] = value.trim();
  }

  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "confirmation.html";
});
