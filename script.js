const menuEmail = document.querySelector('.navbar-email');
const menuEscritorio = document.querySelector('.menu-escritorio');
const iconoMenuMovil = document.querySelector('.menu');
const menuMovil = document.querySelector('.menu-movil');

menuEmail.addEventListener('click', cambiarMenuEscritorio);
iconoMenuMovil.addEventListener('click', camibarMenuMovil);

function cambiarMenuEscritorio() {
    menuEscritorio.classList.toggle('inactive');
}

function camibarMenuMovil() {
    menuMovil.classList.toggle('inactive');
}


