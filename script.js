const menuEmail = document.querySelector('.navbar-email');
const menuEscritorio = document.querySelector('.menu-escritorio');

menuEmail.addEventListener('click', cambiarMenuEscritorio);

function cambiarMenuEscritorio() {
    menuEscritorio.classList.remove('inactive');
}