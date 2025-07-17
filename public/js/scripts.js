// ┌────────────────────────────────────────────┐
// │     SELECTORES DEL DOM: ID Y CLASE         │
// └────────────────────────────────────────────┘

// Selección por ID (retorna un solo elemento)
const elemPorId = document.getElementById("miId"); 
// 👆 Selecciona el elemento con id="miId"

// Selección por clase (retorna HTMLCollection)
const elemsPorClase = document.getElementsByClassName("miClase"); 
// 👆 Selecciona todos los elementos con class="miClase"

// Acceder al primer elemento de la colección por clase
const primerElemClase = elemsPorClase[0]; 
// 👆 Accede al primer elemento con class="miClase"

// querySelector por ID
const queryPorId = document.querySelector("#miId"); 
// 👆 Selecciona el primer elemento con id="miId"

// querySelector por clase
const queryPorClase = document.querySelector(".miClase"); 
// 👆 Selecciona el primer elemento con class="miClase"

// querySelector con combinación de selectores
const divConClase = document.querySelector("div.miClase"); 
// 👆 Selecciona el primer <div> con class="miClase"

// querySelectorAll por clase (retorna NodeList)
const todosPorClase = document.querySelectorAll(".miClase"); 
// 👆 Selecciona todos los elementos con class="miClase"

// querySelectorAll por ID (rara vez útil, pues ID es único)
const todosPorId = document.querySelectorAll("#miId"); 
// 👆 Selecciona todos los elementos con id="miId" (debería haber solo uno)

// Acceder al primer elemento del NodeList
const primerQueryClase = todosPorClase[0]; 
// 👆 Primer elemento con class="miClase" usando querySelectorAll

// Recorrer todos los elementos de una clase (NodeList)
todosPorClase.forEach(elem => {
  // 👇 Aquí puedes manipular cada elemento, por ejemplo:
  elem.style.color = "red";
});
// ┌──────────────────────────────────────────────────────────────┐
// │     INSERTAR ELEMENTOS en ID y CLASE con JavaScript DOM      │
// └──────────────────────────────────────────────────────────────┘

// Seleccionar por ID e insertar texto directamente
document.getElementById("miId").textContent = "Hola desde ID";
// 👆 Reemplaza el contenido del elemento con ID "miId"

// Insertar HTML dentro de un elemento por ID
document.getElementById("miId").innerHTML = "<strong>Texto en negrita</strong>";
// 👆 Reemplaza el contenido con HTML interpretado

// Agregar contenido al final (append) usando ID
document.getElementById("miId").insertAdjacentHTML("beforeend", "<p>Nuevo párrafo</p>");
// 👆 Inserta el HTML al final del contenido existente

// Agregar contenido al principio (prepend) usando ID
document.getElementById("miId").insertAdjacentHTML("afterbegin", "<p>Inicio</p>");
// 👆 Inserta el HTML al inicio del contenido existente

// Seleccionar el primer elemento con una clase y modificar texto
document.querySelector(".miClase").textContent = "Hola desde clase";
// 👆 Cambia el texto del primer elemento con class="miClase"

// Insertar HTML dentro del primer elemento con esa clase
document.querySelector(".miClase").innerHTML = "<em>Texto en cursiva</em>";
// 👆 Reemplaza el contenido con HTML

// Insertar un nuevo div dentro de todos los elementos con la clase
document.querySelectorAll(".miClase").forEach(elem => {
  elem.insertAdjacentHTML("beforeend", "<div>Insertado a cada uno</div>");
});
// 👆 Agrega un nuevo div al final de cada elemento con esa clase

// Crear y agregar un nuevo elemento (más controlado)
const nuevoElemento = document.createElement("span");
nuevoElemento.textContent = "Soy un span nuevo";
// 👇 Agregarlo dentro de un ID
document.getElementById("miId").appendChild(nuevoElemento);

// Crear y agregar a todos los elementos con la clase
document.querySelectorAll(".miClase").forEach(elem => {
  const nuevo = document.createElement("p");
  nuevo.textContent = "Párrafo dinámico";
  elem.appendChild(nuevo);
});

