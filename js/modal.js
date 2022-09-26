const carrito = document.querySelector(".carrito");
const modal = document.querySelector(".modal-compra");
const salir = document.querySelector("#boton-cerrar");

const vaciarCarrito = document.getElementById("limpiar");

ejecutar()

function ejecutar() {

    carrito.addEventListener('click', () => {
        modal.classList.add("modal-show");
    })

    salir.addEventListener('click', () => {
        modal.classList.remove("modal-show");
    })
}