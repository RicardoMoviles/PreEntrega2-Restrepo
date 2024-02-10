function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTexto('#title-cdt','Simulador Rendimientos CDT');
asignarTexto('#text-description-cdt', 'Por favor ingrese el valor y los meses a los cuales quiere abrir tu CDT');