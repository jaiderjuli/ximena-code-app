const buttonSi = document.getElementById('yes');
const buttonNo = document.getElementById('no');
const listaNombres = document.getElementById('listaNombres');
const formulario = document.getElementById('formulario');
let nombresSi = [];

const Lo_sabía = () => {
  const nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre) {
    nombresSi.push(nombre);
    actualizarLista();
    alert(`Hola, ${nombre}! NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)`);
    alert('🤩a las 6:00pm te esperamos😎 App de Ximena');
    abrirModalAgregarPersona(); 
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
};

const abrirModalAgregarPersona = () => {
  modal.style.display = 'block';
};

const cerrarModalAgregarPersona = () => {
  modal.style.display = 'none';
};

const agregarPersona = (event) => {
  event.preventDefault(); 

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const estado = document.getElementById('estado').value;

  if (nombre && telefono) {
    nombresSi.push({ nombre, telefono, estado });
    actualizarLista();
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    cerrarModalAgregarPersona(); 
  } else {
    alert("Por favor, ingresa todos los campos.");
  }
};

const eliminarPersona = (index) => {
  nombresSi.splice(index, 1);
  actualizarLista();
};

const actualizarLista = () => {
  listaNombres.innerHTML = '';
  if (nombresSi.length > 0) {
    const encabezado = document.createElement('li');
    encabezado.innerHTML = `
      <div><strong>Nombre</strong></div>
      <div><strong>Teléfono</strong></div>
      <div><strong>Estado</strong></div>
      <div><strong>Acciones</strong></div>
    `;
    listaNombres.appendChild(encabezado);
  }
  nombresSi.forEach((persona, index) => {
    const item = document.createElement('li');
    let contenido = '';

   
    if (persona.nombre) contenido += `<div>${persona.nombre}</div>`;
    if (persona.telefono) contenido += `<div>${persona.telefono}</div>`;
    if (persona.estado) contenido += `<div>${persona.estado}</div>`;

    item.innerHTML = `${contenido}
      <button onclick="eliminarPersona(${index})">Eliminar</button>`;
    listaNombres.appendChild(item);
  });
};

const App_xime = () => {
  buttonNo.style.position = 'absolute';
  buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

buttonSi.addEventListener('click', Lo_sabía);
buttonNo.addEventListener('mouseover', App_xime);
formulario.addEventListener('submit', agregarPersona);


const modal = document.getElementById('modalAgregarPersona');
const btnCerrarModal = document.getElementById('btnCerrarModal');


btnCerrarModal.addEventListener('click', () => {
  cerrarModalAgregarPersona();
});


window.addEventListener('click', (event) => {
  if (event.target == modal) {
    cerrarModalAgregarPersona();
  }
});


