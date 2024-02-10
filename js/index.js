let montoDeInversion;
let tiempoDeInversion;
let interesEfectivoAnual;
let tablaTasas = [
    [9.4, 9.5, 10.4, 10.5, 10.6, 10.75, 10,65, 10.25, 9.5, 9.2, 9.2, 9.2],
    [9.4, 9.5, 10.4, 10.5, 10.6, 10.75, 10,65, 10.25, 9.6, 9.3, 9.3, 9.3],
    [9.5, 9.6, 10.5, 10.6, 10.7, 10.85, 10,75, 10.35, 9.7, 9.4, 9.4, 9.4],
    [9.6, 9.7, 10.6, 10.65, 10.75, 10.9, 10,8, 10.45, 9.8, 9.5, 9.5, 9.5],
    [9.6, 9.7, 10.6, 10.65, 10.75, 10.9, 10,8, 10.45, 9.8, 9.5, 9.5, 9.5],
    [9.7, 9.8, 10.7, 10.75, 10.85, 11.00, 10,9, 10.55, 9.9, 9.6, 9.6, 9.6],
    [9.7, 9.8, 10.7, 10.75, 10.85, 11.00, 10,9, 10.55, 9.9, 9.6, 9.6, 9.6],
    [9.3, 9.4, 10.2, 10.25, 10.35, 10.45, 10,4, 10.4, 9.6, 9.3, 9.3, 9.3],
];
let rangoDias = [30, 60, 90, 120, 150, 180, 240, 360, 540, 720, 1080, 1440, 1799];
let rangoMontos = [500, 5000, 20000, 50000, 200000, 500000, 1000000, 5000000];

function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function buscarTasa (dias, monto){
    let indiceDias;
    let indiceMontos;
    for (let i = 0; i < rangoDias.length; i++) {
        if (dias>= rangoDias[i] && dias < rangoDias[i+1]) {
            indiceDias = i;
        }
    }
    for (let j = 0; j < rangoMontos.length; j++) {
        if (monto>= rangoMontos[j] && monto < rangoMontos[j+1]) {
            indiceMontos = j;
        }
    }
    return tablaTasas[indiceMontos][indiceDias];

}


asignarTexto('#title-cdt','Simulador Rendimientos CDT');
asignarTexto('#text-description-cdt', 'Por favor ingrese el valor y los meses a los cuales quiere abrir tu CDT');

montoDeInversion =parseInt(prompt('Por favor ingrese el valor que quiere invertir'));
tiempoDeInversion = parseInt(prompt('Por favor indique a cuantos días quiere su CDT'));

interesEfectivoAnual = buscarTasa(tiempoDeInversion, montoDeInversion);
console.log(interesEfectivoAnual);

