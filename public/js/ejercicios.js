//--------------------------------------------------
//--------------------variables---------------------
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
//-----------------funciones------------------------

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
//--------------------MAIN--------------------------
ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();