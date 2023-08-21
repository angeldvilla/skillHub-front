const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', toggleMode);

function toggleMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  }
}

// Verificar la preferencia almacenada en localStorage al cargar la página
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  body.classList.add('dark-mode');
}

export default toggleMode;