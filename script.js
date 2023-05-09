const menuEmail = document.querySelector('.navbar-email');
const menuEscritorio = document.querySelector('.menu-escritorio');
const iconoMenuMovil = document.querySelector('.menu');
const menuMovil = document.querySelector('.menu-movil');
const iconoMenuCarrito = document.querySelector('.navbar-shopping-card');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', cambiarMenuEscritorio);
iconoMenuMovil.addEventListener('click', cambiarMenuMovil);
iconoMenuCarrito.addEventListener('click', cambiarCarritoAside);

function cambiarMenuEscritorio() {
    const carritoCerrado = aside.classList.contains('inactive');

    if (!carritoCerrado) {
        aside.classList.add('inactive');
    }

    menuEscritorio.classList.toggle('inactive');
}

function cambiarMenuMovil() {
    const carritoCerrado = aside.classList.contains('inactive');

    if (!carritoCerrado) {
        aside.classList.add('inactive');
    }

    menuMovil.classList.toggle('inactive');
}

function cambiarCarritoAside() {
    const menuMovilCerrado = menuMovil.classList.contains('inactive');
    const menuEscritorioCerrado = menuEscritorio.classList.contains('inactive');

    if (!menuEscritorioCerrado) {
        menuEscritorio.classList.add('inactive');
    }

    if (!menuMovilCerrado) {
        menuMovil.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    
}


