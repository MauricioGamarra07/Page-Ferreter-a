class Carrito {
    
    //muestra producto seleccionado en carrito
    insertarCarrito(articulo, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('articulo'); */
        row.innerHTML = `
            <th scope="row"><img src="${articulo.img}" style="width: 150px; height:80px"></th>
            <td><h4>${articulo.nombre}</h4></td>
            <td><h4>${articulo.precio}</h4></td>
            <td><h4>${cant}</h4></td>
            <td><h4>${articulo.precio*cant}</h4></td>
            <td><span class="fa fa-trash eliminar" id="eliminar${articulo.id}"></span></td>
        `;
        listArticulos.appendChild(row);
        /* this.guardarProductosLocalStorage(producto); */
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