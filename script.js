const menuEmail = document.querySelector('.navbar-email');
const menuEscritorio = document.querySelector('.menu-escritorio');
const iconoMenuMovil = document.querySelector('.menu');
const menuMovil = document.querySelector('.menu-movil');
const iconoMenuCarrito = document.querySelector('.navbar-shopping-card');
const shoppingCartContainer = document.querySelector('#ShoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', cambiarMenuEscritorio);
iconoMenuMovil.addEventListener('click', cambiarMenuMovil);
iconoMenuCarrito.addEventListener('click', cambiarCarritoAside);

function cambiarMenuEscritorio() {
    const carritoCerrado = shoppingCartContainer.classList.contains('inactive');

    if (!carritoCerrado) {
        shoppingCartContainer.classList.add('inactive');
    }

    menuEscritorio.classList.toggle('inactive');
}

function cambiarMenuMovil() {
    const carritoCerrado = shoppingCartContainer.classList.contains('inactive');

    if (!carritoCerrado) {
        shoppingCartContainer.classList.add('inactive');
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

    shoppingCartContainer.classList.toggle('inactive');
    
}

const listaProductos = [];

listaProductos.push({
    nombre: 'Articulo',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

listaProductos.push({
    nombre: 'Articulo',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

listaProductos.push({
    nombre: 'Articulo',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function crearArticulos(arr) {
    for (producto of arr) {
        const productCard = document.createElement('article');
        productCard.classList.add('card-product');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.imagen);
    
        const productInfo = document.createElement('section');
        productInfo.classList.add('info-product');
    
        const productSection = document.createElement('section'); 
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.precio;
        const productName = document.createElement('p');
        productName.innerText = producto.nombre;
    
        productSection.appendChild(productPrice);
        productSection.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './estilos/iconos/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart); 
    
        productInfo.appendChild(productSection);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

crearArticulos(listaProductos);
