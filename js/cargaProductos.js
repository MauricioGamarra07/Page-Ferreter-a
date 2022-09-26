const contProductos1 = document.querySelector(".columnas3");
const contProductos2 = document.querySelector(".columnas4");

colocarProductos(infoArticulos)

function colocarProductos(articulo) {
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        /* div.classList.add('border-warning'); */
        div.classList.add('producto');
        div.innerHTML = `
        <img src="${articulo[i].img}">
        <h4>Artículo: ${articulo[i].nombre}</h4>
        <h4>Precio: S/${articulo[i].precio}</h4>
        <h4>Marca: ${articulo[i].marca}</h4>
        <div class="btn-group">
            <button type="button" class="btn btn-outline-primary boton-menos">-</button>
            <input type="text" class="cantidad" name="cant" value="1" id="1" style="width:60px">
            <button type="button" class="btn btn-outline-primary boton-mas">+</button>
        </div>  
        <button type="button" class="btn btn-primary agregar" id="${articulo[i].id}">Agregar al carrito</button>
   `;
        contProductos1.appendChild(div);
    }

    for (let j = 6; j < articulo.length; j++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${articulo[j].img}">
            <h4>Artículo: ${articulo[j].nombre}</h4>
            <h4>Precio: S/${articulo[j].precio}</h4>
            <h4>Marca: ${articulo[j].marca}</h4>
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