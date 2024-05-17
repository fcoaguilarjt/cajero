
let cuentas = [
    { nombre: "Ana", saldo: 300, password: "123"},
    { nombre: "Miguel", saldo: 500, password: "123"},
    { nombre: "Diego", saldo: 800, password: "123"}
    ];



    
function mostrarCajero() {
        location.href = 'cajero.html';
        }
function mostrarInicio() {
        location.href = 'index.html';
        }


//Se crea la funcion de elegir una cuenta
function elegirCuenta()
{

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("msj");

    for (let i = 0; i < cuentas.length; i++)
        if(username == cuentas[i].nombre && password == cuentas[i].password)
    {
        mostrarCajero();
        localStorage.setItem("i", i);
    }

    else{
        mensaje.innerText = "Error al iniciar sesion, intenta nuevamente"
        mensaje.style.color = "red"
    }
}

document.getElementById("btnConsultar").addEventListener("click", function() {
    document.getElementById("seccionConsultar").style.display = "block";
    document.getElementById("seccionRetirar").style.display = "none";
    document.getElementById("seccionDepositar").style.display = "none";

});

document.getElementById("btnRetirar").addEventListener("click", function() {
    document.getElementById("seccionConsultar").style.display = "none";
    document.getElementById("seccionRetirar").style.display = "Block";
    document.getElementById("seccionDepositar").style.display = "none";

});

document.getElementById("btnDepositar").addEventListener("click", function() {
    document.getElementById("seccionConsultar").style.display = "none";
    document.getElementById("seccionRetirar").style.display = "none";
    document.getElementById("seccionDepositar").style.display = "Block";

});


function consultar(){
    let saldoIni = cuentas[localStorage.getItem('i')].saldo;
    let saldo = document.getElementById("saldoActual");
    saldo.innerText = "Tu saldo es de: " + saldoIni + " MXN";
}

function retirar(){
    
    let montoaRetirar = document.getElementById("montoaRetirar").value;
    let saldoIni = cuentas[localStorage.getItem('i')].saldo;
    let saldo = document.getElementById("saldoFinal");
    let saldoFinal = Number(saldoIni) - Number(montoaRetirar);
    if (saldoFinal < 10){
        alert("No puedes retirar esa cantidad, el saldo final no puede ser menor a 10")
        saldoFinal = saldoIni
    }
    else{
        cuentas[localStorage.getItem('i')].saldo = saldoFinal;
        alert("Operacion realizada con exito, consulta tu saldo nuevamente")
    }
    document.getElementById("montoaRetirar").value = "";


}

function depositar(){
    let montoaDepositar = document.getElementById("montoaDepositar").value;
    let saldoIni = cuentas[localStorage.getItem('i')].saldo;
    let saldo = document.getElementById("saldoUltimo");
    let saldoFinal = Number(saldoIni) + Number(montoaDepositar);
    if (saldoFinal > 990){
        alert("No puedes depositar esa cantidad, el saldo final no puede ser mayor a 990")
        saldoFinal = saldoIni
    }
    else{
        cuentas[localStorage.getItem('i')].saldo = saldoFinal;
        alert("Operacion realizada con exito, consulta tu saldo nuevamente")
    }
    document.getElementById("montoaDepositar").value = "";
}




