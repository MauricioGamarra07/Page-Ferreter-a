const contProductos2 = document.querySelector(".columnas4");

colocarProductos(infoArticulos)

function colocarProductos(articulo) {

    for (let j = 0; j < articulo.length; j++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('border-warning');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${articulo[j].img}">
            <p>Artículo: ${articulo[j].nombre}</p>
            <p>Precio: S/${articulo[j].precio}</p>
            <p>Marca: ${articulo[j].marca}</p>
            <div class="btn-group">
                <button type="button" class="btn btn-outline-primary boton-menos">-</button>
                <input type="text" class="cantidad" name="cant" value="1" id="1" style="width:60px">
                <button type="button" class="btn btn-outline-primary boton-mas">+</button>
            </div>  
            <button type="button" class="btn btn-primary agregar" id="${articulo[j].id}">Agregar al carrito</button>
       `;
        contProductos2.appendChild(div);
    }
}