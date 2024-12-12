document.getElementById("agregar").addEventListener("click", agregarProducto);
document.getElementById("remover").addEventListener("click", removerProducto);
let selector = document.getElementById("seleccion");
let tbody = document.getElementById("productosCarrito");

function agregarProducto() {
    let seleccion = selector.value;
    
    //Hacer los elementos necesarios para la tabla.
    let tr = document.createElement("tr");
    let tdProducto = document.createElement("td");
    let tdPrecio = document.createElement("td");

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
}

function removerProducto() {
    alert("Remover");
}