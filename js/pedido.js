const carrito = document.querySelector(".carrito");
const modal = document.querySelector(".modal-compra");
const salir = document.querySelector("#boton-cerrar");

const contProductos1 = document.querySelector(".columnas3");
const contProductos2 = document.querySelector(".columnas4");

const listaProductos = document.querySelector(".info-compra");

ejecutar()

function ejecutar(){

    carrito.addEventListener('click', ()=>{
        modal.classList.add("modal-show");
    })

    salir.addEventListener('click', ()=>{
        modal.classList.remove("modal-show");
    })
}

colocarProductos(infoProductos)

function colocarProductos(producto) {
    for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('producto');
    div.innerHTML = `
        <img src="${producto[i].img}">
        <h4>Artículo: ${producto[i].nombre}</h4>
        <h4>Precio: S/${producto[i].precio}</h4>
        <h4>Marca: ${producto[i].marca}</h4>
        <button type="button" class="btn btn-primary agregar" id="${producto[i].id}">Agregar al carrito</button>
   `;
   contProductos1.appendChild(div);
    }
    for (let j = 6; j < producto.length; j++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto[j].img}">
            <h4>Artículo: ${producto[j].nombre}</h4>
            <h4>Precio: S/${producto[j].precio}</h4>
            <h4>Marca: ${producto[j].marca}</h4>
            <button type="button" class="btn btn-primary agregar" id="${producto[j].id}">Agregar al carrito</button>
       `;
       contProductos2.appendChild(div);
    }
}