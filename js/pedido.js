/* Carrito de Compras */

//Aumentar y Disminuir cantidad de articulos
const disminuir = document.querySelectorAll(".boton-menos");
const cantidad = document.querySelectorAll(".cantidad");
const aumentar = document.querySelectorAll(".boton-mas");

const carro = new Carrito();

//Agregar articulos al carrito y vaciar carrito
const agregar = document.querySelectorAll(".agregar");
const listArticulos = document.querySelector(".info-compra");
const procesar = document.getElementById("procesar");

const contadorCarrito = document.getElementById("contador");
const precioTotal = document.querySelector(".precioTotal");

let arregloCarrito = [];
let array = [0];
let contador = 0;

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

    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', (e) => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            let id = parseInt(agregar[i].getAttribute('id'));
            console.log(id);

            /* Buscamos si el id ya se agregó en el array y lo asignamos a la variable num */
            let num = array.find(item => item == id);
            console.log(num);

            let arregloArticulo = [];

            /* Si num es igual al id significa que ya se gragó el articulo */
            if (num == id) {
                console.log("Ya se agregó");
                /* Recorremos la longitud del arreglo del Carrito */
                for (let i = 0; i < arregloCarrito.length; i++) {
                    /* Buscamos el array del articulo con ayuda de su id, luego al encontrarlo
                     solo le aumentamos la cantidad  */
                    if (arregloCarrito[i][0] == id) {
                        arregloCarrito[i][4] += cantidad;
                    }
                    console.log(arregloCarrito);
                }
                /* Luego que le aumentamos la cantidad al articulo, actualizamos el arreglo del carrito */
                carro.actualizarCarrito(arregloCarrito);
                calcularTotal(arregloCarrito);
            }
            /* Si el articulo no se ha agregado aún */
            else {
                /* Como es la primera vez que agregamos ese articulo, vamos ha añadir su id a un array y 
                agregamos el valor del contador del Carrito */
                array.push(id);
                contador++;
                contadorCarrito.textContent = contador;
                /* Agregamos la información de ese artículo */
                arregloArticulo.push(infoArticulos[i]["id"]);
                arregloArticulo.push(infoArticulos[i]["img"]);
                arregloArticulo.push(infoArticulos[i]["nombre"]);
                arregloArticulo.push(infoArticulos[i]["precio"]);
                arregloArticulo.push(cantidad);
                /* Y luego lo agregamos al arreglo del Carrito */
                arregloCarrito.push(arregloArticulo);
                /* console.log(arregloArticulo); */
                console.log(arregloCarrito);

                carro.insertarCarrito(infoArticulos[id - 1], cantidad);
                calcularTotal(arregloCarrito);
            }
            console.log(array);


            const eliminar = listArticulos.querySelectorAll('.eliminar');

            for (let i = 0; i < eliminar.length; i++) {
                eliminar[i].addEventListener('click', eliminarArticulo);
            }

        });
    }

    procesar.addEventListener("click", procesarPedido);

}

function procesarPedido(){
    alert("Procesando Pedido");
}

function calcularTotal(arreglo) {
    /* Usamos un for para Calcular el Precio Total, recorrienco todos los
        arreglos de productos y multiplicando su precio y cantidad */
    totalCompra = 0;
    for (let i = 0; i < arreglo.length; i++) {
        totalCompra += arreglo[i][3] * arreglo[i][4];
    }
    precioTotal.textContent = `S/ ${totalCompra}`;
    console.log(totalCompra);
}


function eliminarArticulo(event) {
    //alert("Apretó el botón eliminar");


    //Eliminamos la fila del articulo con sus datos respectivos
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    /* Primero, capturamos el id del botón eliminar */
    const idEliminar = parseInt(buttonClicked.getAttribute('id'));
    console.log("El id del boton eliminar es: " + idEliminar);

    /* Eliminamos el id del array de id's */
    let indice = array.indexOf(idEliminar);
    if (indice == -1) {
        alert("El id no se encuentra en el array, primero agregue el articulo");
    } else {
        console.log("El indice del id en el array es: " + indice);
        array.splice(indice, 1);
        console.log(array);
    }

    /* Eliminamos el array de artículo del array del Carrito y luego
    actualizamos el Carrito */

    /* console.log(arregloCarrito); */
    let indiceArticulo = indice - 1;
    if (indiceArticulo < 0) {
        alert("Error en los indices, id no encontrado");
    } else {
        console.log(indiceArticulo);
        arregloCarrito.splice(indiceArticulo, 1);
        console.log(arregloCarrito);
        contador--;
        contadorCarrito.textContent = contador;
    }

    calcularTotal(arregloCarrito);
}