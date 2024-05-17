function funcion1() {
    var dato = "Hola";
    return dato;
}

function funcion2(dato) {
    console.log(dato);
}

// Llamada a la función2 con el valor devuelto por la función1
funcion2(funcion1());