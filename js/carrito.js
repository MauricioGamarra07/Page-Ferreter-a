class Carrito {
    
    //muestra producto seleccionado en carrito
    insertarCarrito(producto, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('producto'); */
        row.innerHTML = `
            <th scope="row"><img src="${producto.img}" style="width: 150px; height:80px"></th>
            <td><h4>${producto.nombre}</h4></td>
            <td><h4>${producto.precio}</h4></td>
            <td><h4>${cant}</h4></td>
            <td><h4>${producto.precio*cant}</h4></td>
        `;
        listaProductos.appendChild(row);
        /* this.guardarProductosLocalStorage(producto); */
    }
}