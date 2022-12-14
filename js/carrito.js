class Carrito {
    //muestra articulo seleccionado en carrito

    insertarCarrito(articulo, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('articulo'); */
        row.innerHTML = `
            <td data-label="Imagen"><img src="${articulo.img}" style="width: 150px; height:80px"></th>
            <td data-label="Articulo"><h4>${articulo.nombre}</h4></td>
            <td data-label="Precio"><h4>${articulo.precio}</h4></td>
            <td data-label="Cantidad"><h4>${cant}</h4></td>
            <td data-label="Total"><h4>${articulo.precio * cant}</h4></td>
            <td data-label="Eliminar"><span class="fa fa-trash eliminar" id="${articulo.id}"></span></td>
        `;

        listArticulos.appendChild(row);
    }

    actualizarCarrito(arreglo) {
        listArticulos.innerHTML = ""; //Cada vez que yo llame a actualizarCarrito, lo primero q hago
        //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
        //actualizado
        //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

        //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
        arreglo.forEach((prod) => {
            const row = document.createElement('tr');
            /* row.classList.add('articulo'); */
            row.innerHTML = `
            <td data-label="Imagen"><img src="${prod[1]}" style="width: 150px; height:80px"></th>
            <td data-label="Articulo"><h4>${prod[2]}</h4></td>
            <td data-label="Precio"><h4>${prod[3]}</h4></td>
            <td data-label="Cantidad"><h4>${prod[4]}</h4></td>
            <td data-label="Total"><h4>${prod[3] * prod[4]}</h4></td>
            <td data-label="Eliminar"><span class="fa fa-trash eliminar" id="${prod[0]}"></span></td>
        `;
            listArticulos.appendChild(row);

        })
    }

    //Elimina todos los productos
    vaciarCarrito(e) {
        e.preventDefault();
        while (listArticulos.firstChild) {
            listArticulos.removeChild(listArticulos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage() {
        localStorage.clear();
    }
}