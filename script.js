document.getElementById("agregar").addEventListener("click", agregarProducto);
document.getElementById("remover").addEventListener("click", removerProducto);
document.getElementById("btnCarrito").addEventListener("click", comprar)
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
    alert("Remover");
    
    actualizarPrecio()
}

function comprar() {
    alert("Se ha hecho la compra")
    location.reload()
}

function actualizarPrecio(){
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