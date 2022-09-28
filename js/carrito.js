class Carrito {
    //muestra producto seleccionado en carrito
    insertarCarrito(articulo, cant, array) {
        const row = document.createElement('tr');
        /* row.classList.add('articulo'); */
        row.innerHTML = `
            <th scope="row"><img src="${articulo.img}" style="width: 150px; height:80px"></th>
            <td><h4>${articulo.nombre}</h4></td>
            <td><h4>${articulo.precio}</h4></td>
            <td><h4>${cant}</h4></td>
            <td><h4>${articulo.precio * cant}</h4></td>
            <td><span class="fa fa-trash eliminar" id="eliminar${articulo.id}"></span></td>
        `;

        let id = 0;
        for (let i = 0; i < array.length; i++) {
            /* console.log(articulo.id); */
            id = articulo.id;
            console.log(id);
            if (id == array[id]){
                console.log("Ya se agregó el articulo");
                /* alert("Ya está en el carrito"); */
            }else{
                listArticulos.appendChild(row);
                array.push(articulo.id);
                console.log(array);
                return array;
            }
        }
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