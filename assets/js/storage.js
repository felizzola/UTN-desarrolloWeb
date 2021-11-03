function agendar() {
  let btng = document.getElementById("btn-guardar-agenda");
  btng.addEventListener("click", newItemAgenda, false);
  showWebinars();
}

function newItemAgenda() {
  let clave = document.getElementById("nameClase").value;
  let fecha = document.getElementById("fechaClase").value;
  localStorage.setItem(clave, fecha);
  alert("webinar: " + clave + " agendada");
  location.reload();
  showWebinars();
}

function showWebinars() {
  let listaagenda = document.getElementById("listaagendados");
  for (let i = 0; i < localStorage.length; i++) {
    let index = localStorage.key(i);
    listaagenda.innerHTML +=
      '<p style="line-height: 37px; color: #333;"><strong> * ' +
      index +
      ': </strong> ' +
      localStorage.getItem(index) +
      '</p>';
  }
  listaagenda.innerHTML += '<button class="btn-agendav" onclick="vaciar()">Vaciar</button>'
}

function vaciar() {
    localStorage.clear();
    location.reload();
}

/*     window.addEventListener('load', eliminar, false);  */
window.addEventListener("load", agendar, false);
