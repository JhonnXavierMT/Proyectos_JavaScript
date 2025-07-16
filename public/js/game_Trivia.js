let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let result = document.getElementById("resultado");
let robot = document.getElementById("robot");
let humano = document.getElementById("humano");

let myArray = ["P", "Pa", "T"]


let valores = {
    P: "🗿",
    Pa: "📄",
    T: "✂"
}

let resultado = (entrada) => {
    
    let aleatorio = myArray[Math.floor(Math.random() * 3)]
    robot.innerText = valores[aleatorio];
    
    if (entrada == aleatorio) {
        return "Empate 👀⚡"
    }
    if (entrada == "P" && aleatorio == "Pa") {
        return "perdiste 🤖"
    }
    if (entrada == "P" && aleatorio == "T") {
        return "Ganaste 🔥"
    }
    if (entrada == "Pa" && aleatorio == "T") {
        return "perdiste 🤖"
    }
    if (entrada == "Pa" && aleatorio == "P") {
        return "Ganaste 🔥"
    }
    if (entrada == "T" && aleatorio == "P") {
        return "perdiste 🤖"
    }
    if (entrada == "T" && aleatorio == "Pa") {
        return "Ganaste 🔥"
    }
}

button.addEventListener("click", function () {

    result.innerText = resultado(this.value);

    humano.innerText = valores[this.value];

});

button2.addEventListener("click", function () {
    
    result.innerText = resultado(this.value);
    
    humano.innerText = valores[this.value];

});

button3.addEventListener("click", function () {
    
    result.innerText = resultado(this.value);
    
    humano.innerText = valores[this.value];

});

