const adivinar = [
    "Reloj",
    "Meses",
    "Cumpleaños",
    "Sombra",
    "Calendario",
    "Mañana"
];
const preguntas = [
    "Tiene números pero no sabe contar, tiene agujas pero no sabe coser.",
    "Doce hermanitos viven juntos, cada uno con su propio nombre y duración.",
    "Solo una vez al año tú celebras ese día, y conmemoras la fecha en que llegaste a la vida.",
    "Me ves cada día, pero nunca soy igual. A veces soy largo, a veces corto, ¿quién soy?",
    "Te indica el día, el mes y el año, pero no habla ni camina.",
    "Todos me esperan, pero cuando llego, ya no estoy."
];

const azar = Math.floor(Math.random()*adivinar.length);
const pregunta_array = document.getElementById("preguntas");
pregunta_array.textContent=preguntas[azar];
let newArray = [];
let persona = 0;
const mensajeFinal = document.createElement("h2");

const palabra = document.getElementById("palabra");
function youWinner() {

    if (adivinar[azar].length == newArray.join("").length && adivinar[azar].toUpperCase() == newArray.join("").toUpperCase()) {
        mensajeFinal.className = "neon";
        mensajeFinal.textContent = "✨Ganaste 🎉";
        document.getElementById("mensaje").appendChild(mensajeFinal);
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}
function ahorcado(valor) {
    if (valor == false) {
        persona++;
    }
    switch (persona) {
        case 0:
            break
        case 1:
            document.getElementById("cabeza").className = "mostrar"
            break;
        case 2:
            document.getElementById("cuerpo").className = "mostrar"
            document.getElementById("cabeza").textContent = "🤨";
            break;
        case 3:
            document.getElementById("b_izq").className = "mostrar"
            break;
        case 4:
            document.getElementById("b_der").className = "mostrar"
            break;
        case 5:
            document.getElementById("p_izq").className = "mostrar"
            break;
        case 6:
            document.getElementById("cabeza").textContent = "😬";
            document.getElementById("p_der").className = "mostrar"
            break;
        default:
            document.getElementById("cabeza").textContent = "💀";
            mensajeFinal.className = "neon";
            mensajeFinal.textContent = "🕸️ Perdiste 😢";
            document.getElementById("mensaje").appendChild(mensajeFinal);
            break;
    }
}

function verificar(i) {
    if (adivinar[azar].charAt(i).toUpperCase() == newArray[i].toUpperCase() || newArray[i] == "") {
        return true;
    }
    return false;
}
function letras(i) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "1");
    input.addEventListener("input", (e) => {
        newArray[i] = e.target.value;
        ahorcado(verificar(i))
        youWinner();
    });
    return input;
}
function newPalabra(longitud) {
    for (let i = 0; i < longitud; i++) {
        palabra.appendChild(letras(i));
    }
}
document.querySelector("#recetear").addEventListener("click", () => {
    location.reload();
})
newPalabra(adivinar[azar].length)
