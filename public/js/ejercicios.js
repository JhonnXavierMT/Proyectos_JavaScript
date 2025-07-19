//--------------------------------------------------
// ┌────────────────────────────────────┐
// │ 1.         VARIABLES               │
// └────────────────────────────────────┘
//_____________contenedores__________________
const contendorOne = document.querySelector(".contenedor_1");
const contendorTwo = document.querySelector("#contenedor_2");
const contendorThree = document.querySelector("#contenedor_3");
const contenedorFour=document.querySelector("#contenedor_4");
//_________________inputs_____________________
const box1 = document.getElementById("box_One");
const box2 = document.getElementById("box_Two");
const box3 = document.getElementById("box_Three")
//_________________botones_____________________
const btn1 = document.getElementById("btn_primos");
const btn2 = document.getElementById("btn_factoriales");
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
        contendorThree.textContent="";
        const cantidad = box2.value;
        let cont = 0
        let prim = 2
        while (cont < cantidad) {
            let primo=0
            let div = 0
            for (let j = 2; j < prim; j++) {
                if (prim % j == 0) {
                    primo=j;
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
    btn2.addEventListener("click",()=>{
        contenedorFour.textContent="";
        const cantidad = box3.value;
        for (let i = 1; i <= cantidad; i++) {
            let cont = 1;
            let facto = 1;
            while (cont <=i) {
                facto = facto * cont;
                cont++;
            }
            const nuevo = document.createElement("p");
            nuevo.textContent=facto+",";
            contenedorFour.appendChild(nuevo);
        }
    });
}
//----------------Ejercicio 5----------------------
//----------------Ejercicio 6----------------------
//----------------Ejercicio 7----------------------
//_______________NIVEL INERMEDIO_________________
//8)✅ Ordenar array: Ordena un arreglo de números de forma ascendente y descendente.
//9)✅ Eliminar duplicados de un array.
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