function calcularIMC() {
    let peso = +(prompt('Ingrese su peso:'));
    let altura = +(prompt('Ingrese su altura:'));

    if (altura == parseInt(altura)) {
        altura = altura / 100;
    }

    let imc = parseFloat(peso / (altura * altura)).toFixed(1);

    let nivelDePeso;

    if (imc < 18.5) {
        nivelDePeso = 'Posee un peso bajo para su altura.';
    } else if (imc >= 18.5 && imc <= 24.9) {
        nivelDePeso = 'Posee un peso saludable para su altura.';
    } else if (imc > 24.9 && imc <= 29.9) {
        nivelDePeso = 'Posee un peso alto para su altura.';
    } else if (imc > 29.9) {
        nivelDePeso = 'Posee un peso muy alto para su altura.';
    }

    let pesoIdealBase = (18.5 * (altura * altura)).toFixed(1);
    let pesoIdealTope = (24.9 * (altura * altura)).toFixed(1);
    let pesoIdeal = 'Su peso ideal se encuentra entre ' + pesoIdealBase + 'kg y ' + pesoIdealTope + 'kg.';

    if (peso && altura) {
        alert('Su índice de masa corporal es: ' + imc + '.\n' + nivelDePeso + '\n' + pesoIdeal);
    } else if (peso == 0 || altura == 0) {
        alert("Error: ha olvidado ingresar alguno de los datos.")
    } else {
        alert("Error: debe ingresar solo números.");
    }
}