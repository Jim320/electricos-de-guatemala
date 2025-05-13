// ===== Modal de Términos y Condiciones =====
const abrirModal = document.getElementById('terminos-link');
const cerrarModal = document.querySelector('.close');
const modal = document.getElementById('modal');

abrirModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

cerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ===== Menú hamburguesa =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Contenido =====
function mostrarHistoria() {
  const contenedor = document.getElementById('multimedia-historia');
  contenedor.innerHTML = `
    <h3>Historia</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mOXBp3iUvn0?si=IHVF1v4k9xcJqT80" frameborder="0" allowfullscreen></iframe>
    <br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakFwW1CeiO1epSN-hI_GV1e9IU1QvZ3hrzw&s" alt="Historia">
  `;
  contenedor.scrollIntoView({ behavior: 'smooth' });
}

function mostrarMision() {
  const contenedor = document.getElementById('multimedia-mision');
  contenedor.innerHTML = `
    <h3>Misión</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fEWLyvph_Zw?si=p0EEk7jaXkSUBexH" frameborder="0" allowfullscreen></iframe>
    <br>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-BPg75hBOOfATqvu2mfoYUH_zOlTxVsyE7qZD9ymYSRvW_hBGIUHljnhh5A1AcP14iFw&usqp=CAU" alt="Misión">
  `;
  contenedor.scrollIntoView({ behavior: 'smooth' });
}

function mostrarVision() {
  const contenedor = document.getElementById('multimedia-vision');
  contenedor.innerHTML = `
    <h3>Visión</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/f4_6rzBT7Pk?si=DScgZcUVl-PtNTJZ" frameborder="0" allowfullscreen></iframe>
    <br>
    <img src="https://www.ingalec.es/images/ingalec-instalaciones-electricas.jpg" alt="Visión">
  `;
  contenedor.scrollIntoView({ behavior: 'smooth' });
}
