/* Carrito de Compras */

//Aumentar y Disminuir cantidad de articulos
const disminuir = document.querySelectorAll(".boton-menos");
const cantidad = document.querySelectorAll(".cantidad");
const aumentar = document.querySelectorAll(".boton-mas");

const carro = new Carrito();

//Agregar articulos al carrito y vaciar carrito
const agregar = document.querySelectorAll(".agregar");
const listArticulos = document.querySelector(".info-compra");
const limpiarCarrito = document.getElementById("limpiar");
const eliminarArticulo = document.querySelector(".eliminar");

cargarEventos()

function cargarEventos() {

    let newValue = 1;
    for (let i = 0; i < aumentar.length; i++) {
        /* alert("Hizo click en aumentar"); */
        aumentar[i].addEventListener('click', function (event) {
            var buttonClicked = event.target;
            /* console.log(buttonClicked); */
            var input = buttonClicked.parentElement.children[1];
            /* console.log(input); */
            var inputValue = input.value;
            newValue = parseInt(inputValue) + 1;
            input.value = newValue;

            /* c++;
            c = (c < 10) ? "0" + c : c;
            cantidad.textContent = c;
            console.log(c); */
        });
    }
    for (let i = 0; i < disminuir.length; i++) {
        /* alert("Hizo click en disminuir"); */
        disminuir[i].addEventListener('click', function (event) {
            var buttonClicked = event.target;
            var input = buttonClicked.parentElement.children[1];
            var inputValue = input.value;
            newValue = parseInt(inputValue) - 1;
            if (newValue >= 0) {
                input.value = newValue;
            } else {
                alert('La cantidad debe ser mayor a 0');
            }
            /* if (c > 1){
                c--;
                c = (c < 10) ? "0" + c : c;
                cantidad.textContent = c;
                console.log(c);
            } */
        });
    }

    let arrayId = [0];
    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', (e) => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            //Agregamos los datos del archivo productos.js
            let id = agregar[i].getAttribute('id');
            /* console.log(id);
            console.log(infoArticulos[i]); */
            carro.insertarCarrito(infoArticulos[id - 1], cantidad, arrayId);

            /* agregarAlCarrito(id); */
        });
    }

    limpiarCarrito.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });

    /* eliminarArticulo[i].addEventListener('click', () => {
        alert("Quiere eliminar el articulo?");
        carro.eliminarProducto(e);
    }) */

}