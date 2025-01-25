let numeroSecreto =0;
let intentos;
let listaNumerosSorteados = [];
let nuemroMaximo= 10;

//funcion para asignar texto a elementos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//función para generar un número aleatorio
function verificarIntento() { 
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos=== 1 ? 'vez':'veces')}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no ha adivinado el número secreto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor.');
        }else {
            asignarTextoElemento('p','El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//función para comparar el número secreto con el número del usuario
function generarNumeroSecreto() {
    let numero = Math.floor(Math.random() * 10) + 1;
    if (listaNumerosSorteados.length === nuemroMaximo) {
        asignarTextoElemento('p','Ya no hay más números para adivinar. Reinicia el juego.');
        //document.getElementById('reiniciar').removeAttribute('disabled');
        //return;
    }else{
        if (listaNumerosSorteados.includes(numero)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numero);
            return numero;
        }
    }
    
}
//función para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}
//función para mostrar mensajes iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica el número secreto que está entre 1 y ${nuemroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    return;
}
//función para reiniciar el juego
function reiniciarJuego() {   
    limpiarCaja();
    condicionesIniciales();
    return;
}


condicionesIniciales();