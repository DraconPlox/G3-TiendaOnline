document.getElementById("agregar").addEventListener("click", agregarProducto);
document.getElementById("remover").addEventListener("click", removerProducto);
let selector = document.getElementById("seleccion");
let tbody = document.getElementById("productosCarrito");

function agregarProducto() {
    let seleccion = selector.value;

    //Hacer los elementos necesarios para la tabla.
    let tr = document.createElement("tr");
    let tdProducto = document.createElement("td");
    let tdPrecio = document.createElement("th");

    let id = seleccion.split(" ")[0].toLowerCase();
    tdProducto.appendChild(document.createTextNode(
        document.querySelector(`#${id} .titulo`).textContent)
    );
    tdPrecio.appendChild(document.createTextNode(
        document.querySelector(`#${id} .precio`).textContent)
    );

    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    tbody.appendChild(tr);

    actualizarPrecio()
}

function removerProducto() {
    let seleccion = selector.value

    if (seleccion == "Selecciona un producto") {
        alert("Debes seleccionar un producto para eliminar.");
        return;
    }

    // Obtenemos el ID del producto
    let id = seleccion.split(" ")[0].toLowerCase();
    let idProducto = document.querySelector(`#${id} .titulo`).textContent.trim();

    let trProductos = tbody.getElementsByTagName("tr");

    for (let i = 0; i < trProductos.length; i++) {

        let producto = trProductos[i].getElementsByTagName("td")[0];

        if (producto && producto.textContent.trim() == idProducto) {
            tbody.deleteRow(i);
            alert("Producto eliminado")
            break;
        }
    }

    actualizarPrecio()
}

function actualizarPrecio() {
    let precios = document.getElementById("productosCarrito").getElementsByTagName("th")
    let precioTotal = 0
    for (let i = 0; i < precios.length; i++) {
        let precio = precios[i].textContent
        precio.replace("€", "")
        precio = precio.replace(",", ".")
        let precioFinal = parseFloat(precio)
        precioTotal += precioFinal
    }
    document.getElementById("precioCarrito").innerHTML = precioTotal + "€"
}