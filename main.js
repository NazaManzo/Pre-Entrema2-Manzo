class Producto {
    constructor(nombre, precio, proveedor) {

        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}

const lista = [];
let respuesta = 0;

while (respuesta != -1) {
    respuesta = Number(prompt("Elejir una opcion: 1-Agregar producto // 2-Mostrar productos // 3-Sumar // 4-Salir: "));
    switch (respuesta) {
        case 1: lista.push(agregar());
            break;
        case 2: mostrar(lista);
            break;
        case 3: sumar(lista);
            break;
        case 4: respuesta = -1;
            break;
        default:
            alert("Introduce un número válido.");
    }
}

function agregar() {

    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = Number(prompt("Ingrese su precio: "));
    let proveedor = prompt("ingrese el nombre del proveedor: ");

    const producto = new Producto(nombre, precio, proveedor);

    return producto;
}

function mostrar(lista) {

    for (let i = 0; i < lista.length; i++) {

        alert("Producto: " + lista[i].nombre +
            "\nPrecio: $" + lista[i].precio +
            "\nProveedor: " + lista[i].proveedor);
    }
}

function sumar(lista){

    let sumatoria=0;
    let mensaje = "Lista de productos:\n";
    for(let i=0 ; i<lista.length;i++)
    {
        mensaje += `Producto: ${lista[i].nombre}, Precio: $${lista[i].precio}\n`;
        sumatoria+= lista[i].precio;
    }
    mensaje += `\nTotal: ${sumatoria}`;
    alert(mensaje);
}