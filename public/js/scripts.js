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
/* 
<p id="miParrafo">Hola mundo</p>
<div class="miClase">Contenido de la clase</div>
<h1>Encabezado principal</h1> */
// ┌─────────────────────────────┐
// │ Obtener contenido por ID    │
// └─────────────────────────────┘
const valorParrafo = document.getElementById("miParrafo").textContent;
// 👆 Obtiene solo el texto del <p>
console.log(valorParrafo); // Muestra en consola
alert(valorParrafo);       // Muestra en ventana emergente

// ┌─────────────────────────────┐
// │ Obtener contenido por clase │
// └─────────────────────────────┘
const valorClase = document.querySelector(".miClase").textContent;
// 👆 Obtiene el texto del primer elemento con class="miClase"
console.log(valorClase);

// ┌────────────────────────────────────┐
// │ Obtener contenido por etiqueta/tag │
// └────────────────────────────────────┘
const valorH1 = document.querySelector("h1").textContent;
// 👆 Obtiene el texto del primer <h1>
console.log(valorH1);
//--------------------------------------------------
/* 
<input type="text" id="texto" value="Hola texto"><br>

<input type="number" id="numero" value="123"><br>

<input type="radio" name="genero" value="Hombre" checked> Hombre
<input type="radio" name="genero" value="Mujer"> Mujer<br>

<input type="checkbox" id="acepto" checked> Acepto los términos<br>

<select id="pais">
  <option value="bolivia">Bolivia</option>
  <option value="argentina" selected>Argentina</option>
  <option value="peru">Perú</option>
</select><br>

<textarea id="comentario">Este es un comentario</textarea><br>

<button onclick="mostrarValores()">Mostrar valores</button>

<div id="resultado"></div> */
function mostrarValores() {
  // Obtener valor de un input de texto
  const texto = document.getElementById("texto").value;

  // Obtener valor de un input numérico
  const numero = document.getElementById("numero").value;

  // Obtener valor del radio seleccionado
  const genero = document.querySelector('input[name="genero"]:checked').value;

  // Saber si el checkbox está marcado (true/false)
  const acepta = document.getElementById("acepto").checked;

  // Obtener el valor del <select> seleccionado
  const pais = document.getElementById("pais").value;

  // Obtener el contenido del <textarea>
  const comentario = document.getElementById("comentario").value;

  // Mostrar todos los valores
  const resultado = `
    Texto: ${texto}<br>
    Número: ${numero}<br>
    Género: ${genero}<br>
    Acepta términos: ${acepta}<br>
    País: ${pais}<br>
    Comentario: ${comentario}
  `;

  document.getElementById("resultado").innerHTML = resultado;
}
// ┌────────────────────────────────────┐
// │ 1. Evento CLICK                   │
// └────────────────────────────────────┘
document.getElementById("btnClick").addEventListener("click", () => {
  console.log("Se hizo clic en el botón");
});

// ┌────────────────────────────────────┐
// │ 2. Evento INPUT (teclear)         │
// └────────────────────────────────────┘
document.getElementById("inputTexto").addEventListener("input", (e) => {
  console.log("Valor actual:", e.target.value);
});

// ┌────────────────────────────────────┐
// │ 3. Evento CHANGE (select o checkbox)│
// └────────────────────────────────────┘
document.getElementById("selectPais").addEventListener("change", (e) => {
  console.log("País seleccionado:", e.target.value);
});

document.getElementById("chkAcepto").addEventListener("change", (e) => {
  console.log("¿Acepta términos?:", e.target.checked);
});

// ┌────────────────────────────────────┐
// │ 4. Eventos de TECLADO             │
// └────────────────────────────────────┘
document.getElementById("inputTexto").addEventListener("keydown", (e) => {
  console.log("Tecla presionada:", e.key);
});

document.getElementById("inputTexto").addEventListener("keyup", (e) => {
  console.log("Tecla soltada:", e.key);
});

// ┌────────────────────────────────────┐
// │ 5. Eventos de MOUSE               │
// └────────────────────────────────────┘
const div = document.getElementById("miDiv");

div.addEventListener("mouseover", () => {
  console.log("Mouse sobre el div");
});

div.addEventListener("mouseout", () => {
  console.log("Mouse fuera del div");
});

div.addEventListener("dblclick", () => {
  console.log("Doble clic en el div");
});

// ┌────────────────────────────────────┐
// │ 6. Envío de FORMULARIO            │
// └────────────────────────────────────┘
document.getElementById("miFormulario").addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recarga
  const nombre = e.target.nombre.value;
  console.log("Formulario enviado. Nombre:", nombre);
});

// ┌────────────────────────────────────┐
// │ 7. FOCUS y BLUR                   │
// └────────────────────────────────────┘
const input = document.getElementById("inputTexto");

input.addEventListener("focus", () => {
  console.log("Input enfocado");
});

input.addEventListener("blur", () => {
  console.log("Input perdió el foco");
});

// ┌────────────────────────────────────┐
// │ 8. Evento LOAD (al cargar la página) │
// └────────────────────────────────────┘
window.addEventListener("load", () => {
  console.log("La página ha cargado completamente");
});

// ┌────────────────────────────────────┐
// │ 9. Evento SCROLL                  │
// └────────────────────────────────────┘
window.addEventListener("scroll", () => {
  console.log("Scroll detectado");
});

// ┌────────────────────────────────────┐
// │ 10. Delegación de eventos         │
// └────────────────────────────────────┘
// Escucha clicks en botones dentro de un contenedor
document.body.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("Botón clickeado mediante delegación:", e.target.textContent);
  }
});
