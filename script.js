//Funciones Carrito
//Se declaran las constantes del carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const comprarBtn = document.getElementById('comprar');

// se declaran las funciones del carrito
cargarEventListeners();

function cargarEventListeners(){ //se declaran la funciones pertinentes al carrito de compras

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    comprarBtn.addEventListener('click', comprar);
}

function comprarElemento(e){ //declara las acciones que se reaalizan al oprimir el boton agregar al carrito
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){ //se declara la informacion que se estrae de cada producto que se agrega al carrito
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){ // Se declara lo que se muetra del pruducto en el panel del carrito

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" width=100 />
    </td>
    <td>
    ${elemento.titulo}
    </td>
    <td>
    ${elemento.precio}

    </td>
    <td>
   <a href="#" class="borrar" data-id="${elemento.id}"> x </a>
    </td>

    `;

    lista.appendChild(row);
}

function eliminarElemento(e){ // se declara la funcion de la x 
    e.preventDefault();
    let elemento,
    elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(){ // se delcara la funcion del boton Vaciar Carrito
    const confirmacion = confirm("¿Estás seguro de que deseas vaciar el carrito?");
    if (confirmacion) {
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }
    return false;
}

function comprar(){ // Se decalra la funcion del boton comprar
    alert("Su compra está en proceso, muchas gracias!");
    var lista = document.getElementsByClassName("#lista-carrito tbody") [0];
    while (lista.hasChildNodes()){
        lista.removeChild(lista.firstChild);
    }

}



// Cerrar el menú al hacer clic en cualquier sección dentro de la clase "navbar"
const seccionesNavbar = document.querySelectorAll('.navbar a');  // Selecciona todos los enlaces dentro de .navbar

seccionesNavbar.forEach(function(seccion) {
    seccion.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.style.display = 'none';  // Cierra el menú al hacer clic en cualquier enlace de la navbar
    });
});
