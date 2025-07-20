//--------------------------------------------------
// ┌────────────────────────────────────┐
// │ 1.         VARIABLES               │
// └────────────────────────────────────┘
//_____________contenedores__________________
const contendorOne = document.querySelector(".contenedor_1");
const contendorTwo = document.querySelector("#contenedor_2");
const contendorThree = document.querySelector("#contenedor_3");
const contenedorFour = document.querySelector("#contenedor_4");
const contenedorFive = document.querySelector("#contenedor_5")
const contenedorSix = document.querySelector("#contenedor_6")
const contenedorSeven = document.querySelector("#contenedor_7")
const contenedorEight = document.querySelector("#contenedor_8")
const container_rpt1 = document.querySelector("#rpt1")
const container_rpt1_2 = document.querySelector("#rpt1_2")
const container_rpt2 = document.querySelector("#rpt2")
//_________________inputs_____________________
const box1 = document.getElementById("box_One");
const box2 = document.getElementById("box_Two");
const box3 = document.getElementById("box_Three");
const box4 = document.getElementById("box_Four");
const box5 = document.getElementById("box_Five");
const box6 = document.getElementById("box_Six");
const box7_Array = document.getElementById("box_array");
//_________________botones_____________________
const btn1 = document.getElementById("btn_primos");
const btn2 = document.getElementById("btn_factoriales");
const btn3 = document.getElementById("btn_capicua");
const btn4 = document.getElementById("btn_contPalabra");
const btn5 = document.getElementById("btn_fivonaci");
const btn6 = document.getElementById("btn_agregar");
const btn_ordenar = document.getElementById("btn_ordenar");
const btn_delet_repet = document.getElementById("Elminar_duplicados");
//-------------------------------------------------
// ┌────────────────────────────────────┐
// │ 2.        FUNCIONES                │
// └────────────────────────────────────┘
//______________NIVEL BASICO________________________
//-----------------ejercicio 1----------------------
function ejercicio1() {
    for (let i = 1; i < 11; i++) {
        const nuevo = document.createElement("p");
        nuevo.textContent = i;
        contendorOne.appendChild(nuevo);
    }
}
//----------------Ejercicio 2----------------------
function ejercicio2() {
    const nuevo = document.createElement("p");
    box1.addEventListener("input", (e) => {
        nuevo.textContent = e.target.value;
        contendorTwo.appendChild(nuevo)
    })
}
//----------------Ejercicio 3----------------------
function ejercicio3() {
    btn1.addEventListener("click", () => {
        contendorThree.textContent = "";
        const cantidad = box2.value;
        let cont = 0
        let prim = 2
        while (cont < cantidad) {
            let primo = 0
            let div = 0
            for (let j = 2; j < prim; j++) {
                if (prim % j == 0) {
                    primo = j;
                    div++;
                }
            }
            if (div == 1) {
                const nuevo = document.createElement("p");
                nuevo.textContent = primo;
                contendorThree.appendChild(nuevo);
                cont++;
            }
            prim++;
        }
    });
}
//----------------Ejercicio 4----------------------
function ejercicio4() {
    btn2.addEventListener("click", () => {
        contenedorFour.textContent = "";
        const cantidad = box3.value;
        for (let i = 1; i <= cantidad; i++) {
            let cont = 1;
            let facto = 1;
            while (cont <= i) {
                facto = facto * cont;
                cont++;
            }
            const nuevo = document.createElement("p");
            nuevo.textContent = facto + ",";
            contenedorFour.appendChild(nuevo);
        }
    });
}
//----------------Ejercicio 5----------------------
function ejercicio5() {
    btn3.addEventListener("click", () => {
        contenedorFive.textContent = "";
        const valor = Number(box4.value);
        let cantidad = valor;
        let nuevo = 0;
        cont = 0
        while (cantidad > 0) {
            cont = cantidad % 10;
            nuevo = (nuevo * 10) + cont;
            cantidad = ~~(cantidad / 10);
        }
        const resultado = document.createElement("p");
        if (nuevo == valor) {
            resultado.textContent = "🥳 " + valor + " Es un Numero capicua 😃";
        } else {
            resultado.textContent = "😣 " + valor + " No es un Numero capicua 😪";
        }
        contenedorFive.appendChild(resultado)
    });
}
//----------------Ejercicio 6----------------------
function ejercicio6() {
    btn4.addEventListener("click", () => {
        contenedorSix.textContent = "";
        const palabra = (box5.value).trim();
        let cont = 0;
        for (let i = 0; i < palabra.length; i++) {
            //alert(palabra[i])
            let element = palabra[i].toUpperCase();
            if (
                element == "A" ||
                element == "E" ||
                element == "I" ||
                element == "O" ||
                element == "U") {
                cont++;
            }
        }
        const nuevo = document.createElement("p");
        nuevo.textContent = "La cantidad de vocales es: " + cont + " 💁‍♂️";
        contenedorSix.appendChild(nuevo);
    });
}

//----------------Ejercicio 7----------------------
function ejercicio7() {
    btn5.addEventListener("click", () => {
        contenedorSeven.textContent = "";
        const cantidad = box6.value;
        let a = 1;
        let b = 0;
        let c = 0;
        for (let i = 1; i <= cantidad; i++) {
            c = a + b;
            const nuevo = document.createElement("p");
            nuevo.textContent = c + ","
            contenedorSeven.appendChild(nuevo);
            a = b;
            b = c
        }
    });
}

//_______________NIVEL INERMEDIO_________________
//1) nuevo elemento a array.
let lista = [];
function NuevoElementoArray() {
    btn6.addEventListener("click", () => {
        const element = box7_Array.value;
        lista.push(element);
        contenedorEight.textContent = "";
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            const nuevo = document.createElement("p");
            nuevo.textContent = element;
            contenedorEight.appendChild(nuevo);
        }
    });
}
//8)✅ Ordenar array: Ordena un arreglo de números de forma ascendente y descendente.
function ordenarAcendenteDescendente() {
    btn_ordenar.addEventListener("click", () => {
        let myArray = [...lista.sort((a, b) => a - b)]
        myArray.forEach(element => {
            const nuevo = document.createElement("P");
            nuevo.textContent = element;
            container_rpt1.appendChild(nuevo);
        });
        let myArray2 = [...lista.sort((a, b) => b - a)]
        myArray2.forEach(element => {
            const nuevo = document.createElement("P");
            nuevo.textContent = element;
            container_rpt1_2.appendChild(nuevo);
        });
    });
}
//9)✅ Eliminar duplicados de un array.
function eliminarDuplicados() {
    btn_delet_repet.addEventListener("click", () => {
        let myaray = [];
        lista.forEach(element => {
            if (!myaray.includes(element)) {
                myaray.push(element);
            }
        });
        myaray.forEach(elemento => {
            let nuevo = document.createElement("p");
            nuevo.textContent = elemento;
            container_rpt2.append(nuevo);
        });
    });
}
//10)✅ Buscar elemento en array: Retorna la posición de un valor dado o -1 si no existe.

//11)✅ Aplanar array: Convierte un array multidimensional en uno plano.

//12)✅ Suma de elementos: Suma todos los números de un array.
//13)✅ Promedio de edades: Array de personas con edades, calcular el promedio.
//_______________NIVEL AVANZADO_________________
//14)✅ Manipular DOM: Crear botones, inputs y mostrar sus valores al hacer clic.
//15)✅ To-do List: Lista de tareas donde se pueden agregar, eliminar y marcar como hechas.
//16)✅ Cronómetro: Iniciar, pausar y reiniciar con setInterval().
//17)✅ Convertidor de temperaturas: Celsius ↔ Fahrenheit con entrada de usuario.
//18)✅ Calculadora de IMC: Con peso y altura calcula el Índice de Masa Corporal.
//19)✅ Contador de clics: Cuenta las veces que se hace clic en un botón.
//20)✅ Generador de contraseñas aleatorias.
//21)✅ Validación de formulario: Verifica si los campos están completos, longitud mínima, email válido, etc.
//----------------------------------------------
// ┌────────────────────────────────────┐
// │ 3.            MAIN                 │
// └────────────────────────────────────┘
//----------------------------------------------
ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
NuevoElementoArray();
ordenarAcendenteDescendente();
eliminarDuplicados();