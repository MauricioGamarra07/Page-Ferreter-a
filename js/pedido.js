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

const contadorCarrito = document.getElementById("contador");

const precioTotal = document.querySelector(".precioTotal");

let arregloCarrito = [];

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

    let contador = 0;
    let array = [0];
    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', (e) => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            let id = parseInt(agregar[i].getAttribute('id'));
            console.log(id);

            let num = array.find(item => item == id);
            console.log(num);

            let arregloArticulo = [];

            if (num == id){
                console.log("Ya se agregó");
                for (let i = 0; i < arregloCarrito.length; i++){
                    if (arregloCarrito[i][0] == id){
                        arregloCarrito[i][4] += cantidad;
                    }
                    console.log(arregloCarrito);
                }
                carro.actualizarCarrito(arregloCarrito);
            }else{
                array.push(id);
                array.sort();
                contador ++;
                contadorCarrito.textContent = contador;
                arregloArticulo.push(infoArticulos[i]["id"]);
                arregloArticulo.push(infoArticulos[i]["img"]);
                arregloArticulo.push(infoArticulos[i]["nombre"]);
                arregloArticulo.push(infoArticulos[i]["precio"]);
                arregloArticulo.push(cantidad);
                arregloCarrito.push(arregloArticulo);
                /* console.log(arregloArticulo); */
                console.log(arregloCarrito);
                carro.insertarCarrito(infoArticulos[id - 1], cantidad);
            }
            console.log(array);

            /* Usamos un for para Calcular el Precio Total, recorrienco todos los
                arreglos de productos y multiplicando su precio y cantidad */
            totalCompra = 0;
            for (let i = 0; i < arregloCarrito.length; i++) {
                totalCompra += arregloCarrito[i][3] * arregloCarrito[i][4];
            }
            precioTotal.textContent = `S/ ${totalCompra}`;
            console.log(totalCompra);


            /* console.log(contador); */
            /* console.log(infoArticulos[i]); */

            //Agregamos los datos del archivo productos.js
            /* carro.insertarCarrito(infoArticulos[id - 1], cantidad); */

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