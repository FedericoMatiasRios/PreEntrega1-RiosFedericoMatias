//  OBJETOS ----------------------------------------------

const hombre = {
    edad_0a23: { bajoPeso: { de: 0.0, a: 19.0 }, pesoNormal: { de: 19.1, a: 24.0 }, sobrepeso: { de: 24.1, a: 29.0 }, obesidad: { de: 29.1, a: 38.9 }, obesidadMorbida: { de: 39.0 } },
    edad_24a33: { bajoPeso: { de: 0.0, a: 20.0 }, pesoNormal: { de: 20.1, a: 25.0 }, sobrepeso: { de: 25.1, a: 30.0 }, obesidad: { de: 30.1, a: 39.9 }, obesidadMorbida: { de: 40.0 } },
    edad_34a43: { bajoPeso: { de: 0.0, a: 21.0 }, pesoNormal: { de: 21.1, a: 26.0 }, sobrepeso: { de: 26.1, a: 31.0 }, obesidad: { de: 31.1, a: 40.9 }, obesidadMorbida: { de: 41.0 } },
    edad_44a53: { bajoPeso: { de: 0.0, a: 22.0 }, pesoNormal: { de: 22.1, a: 27.0 }, sobrepeso: { de: 27.1, a: 32.0 }, obesidad: { de: 32.1, a: 41.9 }, obesidadMorbida: { de: 42.0 } },
    edad_54a63: { bajoPeso: { de: 0.0, a: 23.0 }, pesoNormal: { de: 23.1, a: 28.0 }, sobrepeso: { de: 28.1, a: 33.0 }, obesidad: { de: 33.1, a: 42.9 }, obesidadMorbida: { de: 43.0 } },
    edad_64a99: { bajoPeso: { de: 0.0, a: 24.0 }, pesoNormal: { de: 24.1, a: 29.0 }, sobrepeso: { de: 29.1, a: 34.0 }, obesidad: { de: 34.1, a: 43.9 }, obesidadMorbida: { de: 44.0 } },
};

const mujer = {
    edad_0a23: { bajoPeso: { de: 0.0, a: 18.0 }, pesoNormal: { de: 18.1, a: 23.0 }, sobrepeso: { de: 23.1, a: 28.0 }, obesidad: { de: 28.1, a: 37.9 }, obesidadMorbida: { de: 38.0 } },
    edad_24a33: { bajoPeso: { de: 0.0, a: 19.0 }, pesoNormal: { de: 19.1, a: 24.0 }, sobrepeso: { de: 24.1, a: 29.0 }, obesidad: { de: 29.1, a: 38.9 }, obesidadMorbida: { de: 39.0 } },
    edad_34a43: { bajoPeso: { de: 0.0, a: 20.0 }, pesoNormal: { de: 20.1, a: 25.0 }, sobrepeso: { de: 25.1, a: 30.0 }, obesidad: { de: 30.1, a: 39.9 }, obesidadMorbida: { de: 40.0 } },
    edad_44a53: { bajoPeso: { de: 0.0, a: 21.0 }, pesoNormal: { de: 21.1, a: 26.0 }, sobrepeso: { de: 26.1, a: 31.0 }, obesidad: { de: 31.1, a: 40.9 }, obesidadMorbida: { de: 41.0 } },
    edad_54a63: { bajoPeso: { de: 0.0, a: 22.0 }, pesoNormal: { de: 22.1, a: 27.0 }, sobrepeso: { de: 27.1, a: 32.0 }, obesidad: { de: 32.1, a: 41.9 }, obesidadMorbida: { de: 42.0 } },
    edad_64a99: { bajoPeso: { de: 0.0, a: 23.0 }, pesoNormal: { de: 23.1, a: 28.0 }, sobrepeso: { de: 28.1, a: 33.0 }, obesidad: { de: 33.1, a: 42.9 }, obesidadMorbida: { de: 43.0 } },
};

//  ARRAYS ----------------------------------------------
const tipoPeso = ["bajo", "saludable", "alto", "muy alto", "demasiado alto"];

//  FUNCIONES SECUNDARIAS -------------------------------

//  Variables que se definirán dentro de las funciones y se utilizarán fuera de ellas
let obj;
let nivelDePeso;

function calcularPeso(genero, edad) {
    //  Genera lista de variables en formato string, luego se ejecutara este string como códgo js con eval()
    // Estas variables extraen su contenido accediendo a los objetos creados al inicio
    //  Permite ahorrar muchas líneas y no repetir tanto el código
    obj =
        'bajoPeso = ' + genero + '.' + edad + '.bajoPeso;' +
        'pesoNormal = ' + genero + '.' + edad + '.pesoNormal;' +
        'sobrepeso = ' + genero + '.' + edad + '.sobrepeso;' +
        'obesidad = ' + genero + '.' + edad + '.obesidad;' +
        'obesidadMorbida = ' + genero + '.' + edad + '.obesidadMorbida;'
        ;
    return obj
}

function nivel_peso(index) {
    //  Crear string con el nivel de peso correspondiente al usuario
    nivelDePeso = 'Posee un peso ' + tipoPeso[index] + ' para su altura.';
}

// FUNCIÓN PRINCIPAL -----------------------------------

function calcularIMC() {

    //  Variables que serán ingresadas por el usuario
    let genero;
    let edad;
    let peso;
    let altura;

    //  Tomamos el género elegido desde el radio button del HTML
    if (document.getElementById('hombre').checked) {
        genero = 'hombre';
    } else if (document.getElementById('mujer').checked) {
        genero = 'mujer';
    }

    //  Si el usuario no eligió su género, lo alertamos y terminamos la función
    if (!genero) {
        alert('Debe elegir su género.')
        return;
        //  Si el usuario eligió su género, le pedimos el resto de variables
    } else {
        //  Pedimos que ingrese su edad  
        edad = +(prompt('Ingrese su edad:'));
        //  Nos aseguramos de que haya ingresado números
        edad = parseInt(edad);
        //  Si la edad está vacía o el usuario ingresó 0
        if (edad == 0) {
            alert('Error: ha olvidado ingresar su edad.');
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(edad)) {
            alert('Error: debe ingresar solo números.');
            return;
        }
        //  Pedimos que ingrese su peso
        peso = +(prompt('Ingrese su peso:'));
        //  Nos aseguramos de que haya ingresado números
        peso = parseInt(peso);
        //  Si el peso está vacío o el usuario ingresó 0
        if (peso == 0) {
            alert('Error: ha olvidado ingresar su peso.');
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(peso)) {
            alert('Error: debe ingresar solo números.');
            return;
        }
        //  Pedimos que ingrese su altura
        altura = +(prompt('Ingrese su altura:'));
        //  Nos aseguramos de que haya ingresado números
        // parseFloat en vez de parseInt como los anteriores para permitir alturas con punto, ejemplo 1.68
        altura = parseFloat(altura);
        //  Si la altura está vacía o el usuario ingresó 0
        if (altura == 0) {
            alert('Error: ha olvidado ingresar su altura.');
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(altura)) {
            alert('Error: debe ingresar solo números.');
            return;
        }
    }

    //  Si el usuario es hombre
    if (genero == 'hombre') {
        // Y tiene entre 'x' y 'x' años
        if (edad <= 23) {
            //  Generamos string con la función calcularPeso y lo ejecutamos como código js con eval
            eval(calcularPeso('hombre', 'edad_0a23'));
            //  Ejemplo del resultado (variables que acceden a valores de los objetos):
            //  bajoPeso = hombre.edad_0a23.bajoPeso;
            //  pesoNormal = hombre.edad_0a23.pesoNormal;
            //  sobrepeso = hombre.edad_0a23.sobrepeso;
            //  obesidad = hombre.edad_0a23.obesidad;
            //  obesidadMorbida = hombre.edad_0a23.obesidadMorbida;
        } else if (edad > 23 && edad <= 33) {
            eval(calcularPeso('hombre', 'edad_24a33'));
        } else if (edad > 33 && edad <= 43) {
            eval(calcularPeso('hombre', 'edad_34a43'))
        } else if (edad > 43 && edad <= 53) {
            eval(calcularPeso('hombre', 'edad_44a53'))
        } else if (edad > 53 && edad <= 63) {
            eval(calcularPeso('hombre', 'edad_54a63'))
        } else if (edad > 63) {
            eval(calcularPeso('hombre', 'edad_64a99'))
        }
        //  Si el usuario es mujer, repetimos lo anterior
    } else if (genero == 'mujer') {
        if (edad <= 23) {
            eval(calcularPeso('mujer', 'edad_0a23'));
        } else if (edad > 23 && edad <= 33) {
            eval(calcularPeso('mujer', 'edad_24a33'));
        } else if (edad > 33 && edad <= 43) {
            eval(calcularPeso('mujer', 'edad_34a43'));
        } else if (edad > 43 && edad <= 53) {
            eval(calcularPeso('mujer', 'edad_44a53'));
        } else if (edad > 53 && edad <= 63) {
            eval(calcularPeso('mujer', 'edad_54a63'));
        } else if (edad > 63) {
            eval(calcularPeso('mujer', 'edad_64a99'))
        }
    } else {
        //  Este error no debería aparecer nunca, pero entiendo que es buena práctica definirlo igual
        alert('Hubo un error, intente otra vez.')
        return;
    }

    //  Si el usuario ingreso su altura como número entero, ejemplo 168
    if (altura == parseInt(altura)) {
        //  Lo convertimos a decimal, ejemplo 1.68
        altura = altura / 100;
    }

    //  Calculamos el Índice de Masa Corporal (IMC)
    let imc = parseFloat(peso / (altura * altura)).toFixed(1);

    //  Si el IMC obtenido está en el rango considerado bajo para su edad, género y altura
    if (imc <= bajoPeso.a) {
        //  Llamamos función que devuelve string cambiando el nivel de peso
        nivel_peso(0);
        //  Si está entre el rango considerado normal para su edad, género y altura
    } else if (imc >= pesoNormal.de && imc <= pesoNormal.a) {
        nivel_peso(1);
        //  Si está entre el rango considerado sobrepeso para su edad, género y altura
    } else if (imc >= sobrepeso.de && imc <= sobrepeso.a) {
        nivel_peso(2);
        //  Si está entre el rango considerado obesidad para su edad, género y altura
    } else if (imc >= obesidad.de && imc <= obesidad.a) {
        nivel_peso(3);
        //  Si está entre el rango considerado obesidad morbida para su edad, género y altura
    } else if (imc >= obesidadMorbida.de) {
        nivel_peso(4);
    }

    // Calculamos cuál sería el peso ideal 
    let pesoIdealBase = (pesoNormal.de * (altura * altura)).toFixed(1);
    let pesoIdealTope = (pesoNormal.a * (altura * altura)).toFixed(1);
    let pesoIdeal = 'Su peso ideal se encuentra entre ' + pesoIdealBase + 'kg y ' + pesoIdealTope + 'kg.';

    //  Revisamos nuevamente que todas las variables se han ingresado correctamente
    if (peso && altura && edad) { //    Génnero no, ya que lo chequeamos anteriormente
        alert('Su índice de masa corporal es: ' + imc + '.\n' + nivelDePeso + '\n' + pesoIdeal);
    } else {
        //  Si el usuario ingresa por ejemplo su altura con coma 1,68 se mostrará este error
        alert("Error: debe ingresar solo números.");
    }
}