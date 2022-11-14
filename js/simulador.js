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
let errorElement = document.getElementById('error');

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
    nivelDePeso = 'Posee un peso <b>' + tipoPeso[index] + '</b> para su altura.';
}

//  Bloque de código reutilizable
function reiniciarAnimacion() {
    errorElement.style.animation = 'none';
    errorElement.offsetHeight;
    errorElement.style.animation = null;
    errorElement.style.display = 'block';
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
        reiniciarAnimacion();
        errorElement.innerHTML = 'Debe elegir su género.';
        return;
        //  Si el usuario eligió su género, le pedimos el resto de variables
    } else {
        //  Pedimos que ingrese su edad  
        edad = document.getElementById('edad').value;
        //  Si la edad está vacía o el usuario ingresó 0
        if (edad == 0) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar su edad.';
            document.getElementById('edad').style.backgroundColor = '#f8d7da';
            document.getElementById('edad').style.border = '1px solid #f5c6cb';
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(edad)) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar solo números.';
            document.getElementById('edad').style.backgroundColor = '#f8d7da';
            document.getElementById('edad').style.border = '1px solid #f5c6cb';
            return;
        }
        //  Pedimos que ingrese su peso
        peso = document.getElementById('peso').value;
        //  Si el peso está vacío o el usuario ingresó 0
        if (peso == 0) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar su peso.';
            document.getElementById('edad').style.backgroundColor = '#fff';
            document.getElementById('edad').style.border = 'unset';
            document.getElementById('peso').style.backgroundColor = '#f8d7da';
            document.getElementById('peso').style.border = '1px solid #f5c6cb';
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(peso)) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar solo números.';
            document.getElementById('edad').style.backgroundColor = '#fff';
            document.getElementById('edad').style.border = '1px solid #f5c6cb';
            document.getElementById('peso').style.backgroundColor = '#f8d7da';
            document.getElementById('peso').style.border = '1px solid #f5c6cb';
            return;
        }
        //  Pedimos que ingrese su altura
        altura = document.getElementById('altura').value;
        //  Si la altura está vacía o el usuario ingresó 0
        if (altura == 0) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar su altura.';
            document.getElementById('peso').style.backgroundColor = '#fff';
            document.getElementById('peso').style.border = 'unset';
            document.getElementById('altura').style.backgroundColor = '#f8d7da';
            document.getElementById('altura').style.border = '1px solid #f5c6cb';
            return;
        }
        //  Si el usuario ingresó texto en vez de números
        else if (isNaN(altura)) {
            reiniciarAnimacion();
            errorElement.innerHTML = 'Debe ingresar solo números.';
            document.getElementById('peso').style.backgroundColor = '#fff';
            document.getElementById('peso').style.border = 'unset';
            document.getElementById('altura').style.backgroundColor = '#f8d7da';
            document.getElementById('altura').style.border = '1px solid #f5c6cb';
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
        reiniciarAnimacion();
        errorElement.innerHTML = 'Hubo un error, intente otra vez.';
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
    let pesoIdeal = 'Su peso ideal se encuentra entre <b>' + pesoIdealBase + 'kg</b> y <b>' + pesoIdealTope + 'kg</b>.';

    //  Revisamos nuevamente que todas las variables se han ingresado correctamente
    if (peso && altura && edad) { //    Génnero no, ya que lo chequeamos anteriormente
        document.getElementById("modalBox").style.display = "block";

        //  Definimos array vacío, para luego hacerle push con las consultas 
        let listaHistorial = []

        //  Definimos consulta a ser pusheada
        const itemHistorial = {
            datos: [genero, edad, peso, altura, imc, pesoIdealBase, pesoIdealTope],
        }

        //  Ya existe un historial de consultas?
        const getImcHistorial = localStorage.getItem('imcHistorial')
        //  Si existe
        if (getImcHistorial) {
            //  Cambiamos el valor vacío de la lista por el contenido que almacenado en localStorage
            listaHistorial = JSON.parse(localStorage.getItem('imcHistorial'))
            //  Hacemos push a la lista con los datos de la nueva consulta
            listaHistorial.push(itemHistorial)
            //  Volvemos a establecer la clave, actualizada
            localStorage.setItem('imcHistorial', JSON.stringify(listaHistorial))
        //  Si no existe
        } else {
            //  Hacemos push con los datos de la consulta a la lista vacía
            listaHistorial.push(itemHistorial)
            //  Establecemos la clave imcHistorial 
            localStorage.setItem('imcHistorial', JSON.stringify(listaHistorial))
        }

        document.getElementById('resultado').innerHTML = '<center>Su índice de masa corporal es: <b>' + imc + '</b><br>' + nivelDePeso + '<br>' + pesoIdeal + '</center>';
        //  Si se obtiene el resultado, ocultamos todos los errores
        errorElement.style.display = 'none';
    } else {
        //  Si el usuario ingresa por ejemplo su altura con coma 1,68 se mostrará este error
        reiniciarAnimacion();
        errorElement.innerHTML = 'Debe ingresar solo números.';
    }
}

//  EVENTOS ----------------------------------------------

//  Llamar función Principal cuando se clickea el botón "Calcular IMC"
document.getElementById("imc").addEventListener("click", calcularIMC);

//  Cerrar modal box si se clickea sobre la "x"
document.getElementById("cerrar").addEventListener("click", function () { document.getElementById("modalBox").style.display = "none"; location.reload(); });

window.addEventListener('click', function () {
    //  Cerrar modal box si se clckea en cualquier parte fuera del mismo
    if (event.target == document.getElementById("modalBox")) {
        document.getElementById("modalBox").style.display = "none";
        location.reload();
    }
});

// Comento evento 'load', fuera del evento carga más rápido y se evita la 'animación/delay' de caraga
//window.addEventListener('load', function () {
//  Crear tabla obteniendo los datos de localStorage
for (let x = 0; x < JSON.parse(localStorage.getItem("imcHistorial")).length; x++) {
    let retrievedScores = JSON.parse(localStorage.getItem("imcHistorial"))[x].datos;
    document.getElementById("historial").innerHTML += "<tr><td>" + retrievedScores['0'] + "</td><td>" + retrievedScores['1'] + "</td><td>" + retrievedScores['2'] + "kg</td><td>" + retrievedScores['3'] + "</td><td>" + retrievedScores['4'] + "</td><td> Entre " + retrievedScores['5'] + 'kg y ' + retrievedScores['6'] + "kg</td></tr>";
}
//  Si existen datos en localStorage, mostrar la tabla
JSON.parse(localStorage.getItem("imcHistorial")).length != 0 ? document.getElementById('contenedor-historial').style.display = 'block' : null;
//})