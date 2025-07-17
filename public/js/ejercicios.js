const ejercicioOne = document.querySelector(".Ejercicio_1");

console.log(ejercicioOne);

for (let i = 0; i < 10; i++) {
    const nuevo = document.createElement("p");
    nuevo.textContent = i;
    ejercicioOne.appendChild(nuevo);
}
