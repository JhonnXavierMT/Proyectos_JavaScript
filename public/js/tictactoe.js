let turno = true;
let cuadro = document.getElementsByClassName("cuadrado");

for (let index = 0; index < cuadro.length; index++) {
    cuadro[index].addEventListener("click", pintar);
}

function pintar(e) {
    let cellvalue = e.target.innerHTML;
    if (!cellvalue.length) {
        let ganador = document.querySelector("#winner").innerHTML;
        if (!ganador.length) {
            e.target.innerHTML = turno ? "X" : "O";
        }
        turno = !turno;

        if (verificar(0, 1, 2) ||
            verificar(3, 4, 5) ||
            verificar(6, 7, 8) ||
            verificar(0, 3, 6) ||
            verificar(1, 4, 7) ||
            verificar(2, 5, 8) ||
            verificar(0, 4, 8) ||
            verificar(2, 4, 6)) {
            return;

        }
        if (empate()) {
            mostrarGanador(9);
        }

    }
}
function verificar(c1, c2, c3) {

    if (cuadro[c1].innerHTML.length &&
        cuadro[c1].innerHTML == cuadro[c2].innerHTML &&
        cuadro[c2].innerHTML == cuadro[c3].innerHTML
    ) {
        mostrarGanador(cuadro[c1].innerHTML);
        return true;
    }
    return false;
}
function empate() {
    for (let index = 0; index < cuadro.length; index++) {
        if (!cuadro[index].innerHTML) {
            return false;
        }
    }
    return true;
}
function mostrarGanador(player) {
    let ganador = document.querySelector("#winner");
    if (player == 9) {
        ganador.innerHTML = "Es un EMPATE ";
    } else {
        ganador.innerHTML = "El ganador es " + player;
        // 🎉 Lanza confeti
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

document.querySelector("#recetear").addEventListener("click", () => {
    location.reload();
})