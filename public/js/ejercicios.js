/** @type {HTMLDivElement} */
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
const container_rpt3 = document.querySelector("#rpt3")
const container_rpt4 = document.querySelector("#rpt4")
const container_rpt5 = document.querySelector("#rpt5")
const container_rpt6 = document.querySelector("#rpt6")
const containerNain = document.querySelector("#contenedor_9")
//_________________inputs_____________________
const box1 = document.getElementById("box_One");
const box2 = document.getElementById("box_Two");
const box3 = document.getElementById("box_Three");
const box4 = document.getElementById("box_Four");
const box5 = document.getElementById("box_Five");
const box6 = document.getElementById("box_Six");
const box7_Array = document.getElementById("box_array");
const box8_buscar = document.getElementById("box_buscar");
const box9_tareas = document.getElementById("box_tareas");
//_________________botones_____________________
const btn1 = document.getElementById("btn_primos");
const btn2 = document.getElementById("btn_factoriales");
const btn3 = document.getElementById("btn_capicua");
const btn4 = document.getElementById("btn_contPalabra");
const btn5 = document.getElementById("btn_fivonaci");
const btn6 = document.getElementById("btn_agregar");
const btn_ordenar = document.getElementById("btn_ordenar");
const btn_delet_repet = document.getElementById("Elminar_duplicados");
const btn_buscar = document.getElementById("btn_buscar_elemento");
const btn_sum_elements = document.getElementById("sum_elements");
const btn_promedio = document.getElementById("btn_promedio");
const btn_addArray = document.getElementById("btn_add_array");
const btn_aplanar_array = document.getElementById("btn_aplanar_array");
const btn_agregar_tarea = document.getElementById("btn_agregar_tarea");
const btn_delet_tarea = document.getElementById("btn_delet_tarea");
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
function buscar_elemento() {
    btn_buscar.addEventListener("click", () => {
        container_rpt3.textContent = "";
        const resultado = document.createElement("p");
        const valor_buscar = document.getElementById("box_buscar").value;
        if (lista.includes(valor_buscar)) {
            resultado.textContent = "😄 Se encontro el elemento " + valor_buscar;
        } else {
            resultado.textContent = "😒 No se encontro el elemento " + valor_buscar;
        }
        container_rpt3.appendChild(resultado);
    });
}
//11)✅ Suma de elementos: Suma todos los números de un array.
function suma_de_elementos() {
    btn_sum_elements.addEventListener("click", () => {
        let sum = 0;
        lista.forEach(elementos => {

            sum = sum + Number(elementos)
        });
        const nuevo = document.createElement("p");
        nuevo.textContent = "La suma de los elementos es " + sum;
        container_rpt4.appendChild(nuevo);
    });
}
//12)✅ Promedio de edades: Array de personas con edades, calcular el promedio.
function promedio_de_elementos() {
    btn_promedio.addEventListener("click", () => {
        let sum = 0;
        let cont = 0;
        lista.forEach(elementos => {
            sum = sum + Number(elementos);
            cont++;
        });
        const nuevo = document.createElement("p");
        nuevo.textContent = " 😎 El promedio de los elementos es " + (~~(sum / cont));
        container_rpt5.appendChild(nuevo);
    });
}
//13)✅ Aplanar array: Convierte un array multidimensional en uno plano.
function add_array() {
    btn_addArray.addEventListener("click", () => {
        container_rpt6.textContent = "";
        lista.push(["A", "B", "C", "D", "E", "F"]);
        lista.forEach(element => {
            const nuevo = document.createElement("p")
            nuevo.textContent = "[" + element + "]";
            container_rpt6.appendChild(nuevo);
        });
    });
}
function aplanar_array() {
    btn_aplanar_array.addEventListener("click", () => {
        container_rpt6.textContent = "";
        let newlista = lista.flat(Infinity);
        newlista.forEach(element => {
            const nuevo = document.createElement("p")
            nuevo.textContent = "[ " + element + " ]";
            container_rpt6.appendChild(nuevo);
        });
    });
}
//_______________NIVEL AVANZADO_________________
//15)✅ To-do List: Lista de tareas donde se pueden agregar, eliminar y marcar como hechas.
function agregar_Tarea() {
    btn_agregar_tarea.addEventListener("click", () => {
        const p = document.createElement("p");
        const div = document.createElement("div");
        p.className = "texto-tareas"
        p.textContent = box9_tareas.value;
        div.className = "contenedor-tareas";
        div.appendChild(p);
        div.appendChild(delet_Tarea());
        containerNain.appendChild(div);
    });
}
function delet_Tarea() {
    const boton = document.createElement("button");
    boton.textContent = "X"
    boton.className = "button-delet"
    boton.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        containerNain.removeChild(item);
    });
    return boton;
}
//16)✅ Cronómetro: Iniciar, pausar y reiniciar con setInterval().
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let enMarcha = false;
function actualizarDisplay() {
    const formato = (valor) => (valor < 10 ? "0" + valor : valor);
    document.getElementById("display").textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
}
function iniciarCronometro() {
    if (enMarcha) return;
    enMarcha = true;
    intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++
        }
        if (minutos === 60) {
            minutos = 0;
            horas++
        }
        actualizarDisplay();
    }, 1000);
}
function detenerCronometro() {
    clearInterval(intervalo);
    enMarcha = false;
}
function reiniciarCronometro() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    enMarcha = false;
    actualizarDisplay();
}
//17)✅ Contador de clics: Cuenta las veces que se hace clic en un botón.
let contador_De_clicks = 0
function contar_clicks() {
    contador_De_clicks++;
    document.getElementById("contenedor_10").innerHTML = `<h1>${contador_De_clicks}</h1>`;
}
//18)✅ Generador de contraseñas aleatorias.
function Generador_de_contraseña(longitud) {
    function ramNum() {
        const numero = Math.floor(Math.random() * (100)) + 1;
        return String(numero);
    }
    function ramLetmin() {
        const letras = "abcdefghijklmnopqrstuvwxyz";
        return letras.charAt(Math.floor(Math.random() * letras.length));
    }
    function ramLetmay() {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letras.charAt(Math.floor(Math.random() * letras.length));
    }
    function ramCarter() {
        const letras = "#$?¡!¿+*-/%";
        return letras.charAt(Math.floor(Math.random() * letras.length));
    }
    const texto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$+";
    let password = "";
    for (let i = 0; i < longitud - 4; i++) {
        password += texto.charAt(Math.floor(Math.random() * texto.length));
    }
    return password + ramNum() + ramLetmay() + ramLetmin() + ramCarter();
}
//19)✅ Validación de formulario: Verifica si los campos están completos, longitud mínima, email válido, etc.

//------ la parte de modal de edteams canal de youtube tutorial--------
//añadir un objeto de atributo a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr)) {
            element.setAttribute(attr, attrObj[attr]);
        }
    }
}
//crear elementos con atributos e hijos
//element => elemento HTML
//atributes => id:"x" class="x" del element
//children =>
const addElementos = (element, atributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
        if (el.nodeType) {
            if (el.nodeType === 1 || el.nodeType == 11) {
                customElement.appendChild(el);
            }
        }
    });
    addAttributes(customElement, atributes);
    return customElement;
};
// Crear el modal
const createModal = (textoContent) => {
    // Cerrar (X)
    const closeBtn = addElementos(
        "span",
        { class: "close" },
        []);
    closeBtn.textContent = "×";

    // Contenido del modal
    const modalText = addElementos("h2", {}, []);
    modalText.textContent = textoContent;

    const content = addElementos(
        "div",
        { class: "modal-content" },
        [closeBtn, modalText]);

    // Fondo oscuro
    const modal = addElementos(
        "div",
        { class: "modal", id: "modal" }, [content]);

    // Agregar al cuerpo
    document.body.appendChild(modal);

    // Funcionalidad para cerrar
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
    // Cerrar al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
};


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
buscar_elemento();
suma_de_elementos();
promedio_de_elementos();
add_array();
aplanar_array();
agregar_Tarea();
document.getElementById("start").addEventListener("click", iniciarCronometro);
document.getElementById("stop").addEventListener("click", detenerCronometro);
document.getElementById("reset").addEventListener("click", reiniciarCronometro);
document.getElementById("contar").addEventListener("click", contar_clicks);
document.getElementById("password_generate").addEventListener("click", () => {
    document.getElementById("contenedor_11").textContent = Generador_de_contraseña(12)
});
//al escribir en un input

// Mostrar modal al hacer clic
document.getElementById("openModal").addEventListener("click", () => {
    createModal("hola mundo"); // Solo se crea una vez
});
//formulario-------
document.getElementById("nombre").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
});