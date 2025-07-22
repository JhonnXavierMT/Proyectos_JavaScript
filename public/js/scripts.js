// ┌────────────────────────────────────────────┐
// │     SELECTORES DEL DOM: ID Y CLASE         │
// └────────────────────────────────────────────┘
function seleccionar_Id_clses (){
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
}
// ┌──────────────────────────────────────────────────────────────┐
// │     INSERTAR ELEMENTOS en ID y CLASE con JavaScript DOM      │
// └──────────────────────────────────────────────────────────────┘
function insertar_elementos_id_clase(){

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
}
//--------------Obtener valores de elementos de entrada de htnl-----------------------
function Obtener_Valor_de_form(){

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
}
//______________Manejo de eventos________
function eventosscripts(){

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
}
//
// ┌────────────────────────────────────┐
// │ 1. Metodos para manipular cadenas  │
// └────────────────────────────────────┘
//
function manipular_cadenas(){
  

  // .length → longitud de la cadena
  console.log(texto.length); 
  // → 10
  
  // .toUpperCase() → convierte a mayúsculas
  console.log(texto.toUpperCase()); 
  // → "HOLA MUNDO"
  
  // .toLowerCase() → convierte a minúsculas
  console.log(texto.toLowerCase()); 
  // → "hola mundo"
  
  // .charAt(posición) → obtiene el carácter en la posición
  console.log(texto.charAt(1)); 
  // → "o"
  
  // .at(-1) → obtiene el último carácter (moderno)
  console.log(texto.at(-1)); 
  // → "o"
  
  // .includes("subcadena") → verifica si contiene
  console.log(texto.includes("Mun")); 
  // → true
  
  // .startsWith("H") → empieza con...
  console.log(texto.startsWith("H")); 
  // → true
  
  // .endsWith("o") → termina con...
  console.log(texto.endsWith("o")); 
  // → true
  
  // .indexOf("M") → posición de la primera ocurrencia
  console.log(texto.indexOf("M")); 
  // → 5
  
  // .lastIndexOf("o") → última posición de ocurrencia
  console.log(texto.lastIndexOf("o")); 
  // → 9
  
  // .slice(inicio, fin) → extrae desde inicio hasta antes de fin
  console.log(texto.slice(0, 4)); 
  // → "Hola"
  
  // .substring(inicio, fin) → igual que slice pero sin negativos
  console.log(texto.substring(5, 10)); 
  // → "Mundo"
  
  // .substr(inicio, longitud) → extrae desde inicio cierta cantidad (deprecated)
  console.log(texto.substr(5, 3)); 
  // → "Mun"
  
  // .replace("original", "nuevo") → reemplaza la primera ocurrencia
  console.log(texto.replace("Hola", "Adiós")); 
  // → "Adiós Mundo"
  
  // .replaceAll("o", "x") → reemplaza todas las ocurrencias (moderno)
  console.log(texto.replaceAll("o", "x")); 
  // → "Hxlx Mundx"
  
  // .trim() → quita espacios al inicio y final
  console.log(frase.trim()); 
  // → "JavaScript es genial"
  
  // .trimStart() y .trimEnd()
  console.log(frase.trimStart()); 
  // → "JavaScript es genial "
  console.log(frase.trimEnd()); 
  // → " JavaScript es genial"
  
  // .repeat(n) → repite la cadena n veces
  console.log("JA ".repeat(3)); 
  // → "JA JA JA "
  
  // .split(",") → convierte cadena a array separando por coma
  console.log(lista.split(",")); 
  // → ["manzana", "pera", "banana"]
  
  // .concat(cadena2) → une cadenas
  console.log(texto.concat("!!!")); 
  // → "Hola Mundo!!!"
  
  // También puedes usar `+`
  console.log(texto + "!!!"); 
  // → "Hola Mundo!!!"
  
  // .padStart(longitud, "relleno") → rellena al inicio
  console.log("5".padStart(3, "0")); 
  // → "005"
  
  // .padEnd(longitud, "relleno") → rellena al final
  console.log("5".padEnd(3, "0")); 
  // → "500"
  
  // .match(/regex/) → busca con expresiones regulares
  console.log(texto.match(/o/g)); 
  // → ["o", "o"]
  
  // .replace con regex
  console.log(texto.replace(/o/g, "x")); 
  // → "Hxlx Mundx"
  //_________ARRAYS__________________
}
//
  // ┌────────────────────────────────────┐
  // │ 1. Metodos para manipular Arrays   │
  // └────────────────────────────────────┘
  //
function metodos_de_arrays(){
  // ┌────────────────────────────┐
// │ 📦 CREACIÓN Y ACCESO       │
// └────────────────────────────┘
const frutas = ["manzana", "pera", "banana"];
console.log(frutas[0]);         // → "manzana"
console.log(frutas.length);     // → 3

// ┌────────────────────────────┐
// │ ➕ AÑADIR ELEMENTOS         │
// └────────────────────────────┘
frutas.push("uva");             // Añade al final
// frutas = ["manzana", "pera", "banana", "uva"]

frutas.unshift("naranja");      // Añade al inicio
// frutas = ["naranja", "manzana", "pera", "banana", "uva"]

// ┌────────────────────────────┐
// │ ➖ ELIMINAR ELEMENTOS       │
// └────────────────────────────┘
frutas.pop();                   // Quita el último ("uva")
// frutas = ["naranja", "manzana", "pera", "banana"]

frutas.shift();                 // Quita el primero ("naranja")
// frutas = ["manzana", "pera", "banana"]

// ┌────────────────────────────┐
// │ 🔍 BÚSQUEDA Y VERIFICACIÓN │
// └────────────────────────────┘
console.log(frutas.includes("pera"));      // → true
console.log(frutas.indexOf("banana"));     // → 2
console.log(frutas.lastIndexOf("pera"));   // → 1

// ┌────────────────────────────┐
// │ 🧩 EXTRAER Y COPIAR         │
// └────────────────────────────┘
const algunos = frutas.slice(0, 2);        // ["manzana", "pera"]
const copia = [...frutas];                 // Copia con spread operator

// ┌────────────────────────────┐
// │ 🧪 CAMBIO DIRECTO           │
// └────────────────────────────┘
frutas.splice(1, 1, "kiwi");               // Elimina 1 desde índice 1 y agrega "kiwi"
// frutas = ["manzana", "kiwi", "banana"]

// ┌────────────────────────────┐
// │ 🔄 RECORRER (forEach)       │
// └────────────────────────────┘
frutas.forEach((fruta, i) => {
  console.log(`${i}: ${fruta}`);
});
// → 0: manzana, 1: kiwi, 2: banana

// ┌────────────────────────────┐
// │ 📌 FILTRAR ELEMENTOS        │
// └────────────────────────────┘
const conA = frutas.filter(f => f.includes("a"));
// → ["manzana", "banana"]

// ┌────────────────────────────┐
// │ 🧱 TRANSFORMAR ELEMENTOS    │
// └────────────────────────────┘
const mayusculas = frutas.map(f => f.toUpperCase());
// → ["MANZANA", "KIWI", "BANANA"]

// ┌────────────────────────────┐
// │ 🔍 ENCONTRAR UN ELEMENTO    │
// └────────────────────────────┘
const encontrada = frutas.find(f => f.startsWith("b"));
// → "banana"

// ┌────────────────────────────┐
// │ 🔢 ORDENAR ELEMENTOS        │
// └────────────────────────────┘
const numeros = [4, 10, 2, 30];
numeros.sort((a, b) => a - b);  // Ordena ascendente
// → [2, 4, 10, 30]

frutas.sort();  // Ordena alfabéticamente
// → ["banana", "kiwi", "manzana"]

// ┌────────────────────────────┐
// │ 🔁 REVERSA Y CONCATENAR     │
// └────────────────────────────┘
const invertido = [...frutas].reverse();   // No cambia el original
// → ["manzana", "kiwi", "banana"]

const todo = frutas.concat(["sandía", "melón"]);
// → ["banana", "kiwi", "manzana", "sandía", "melón"]

// ┌────────────────────────────┐
// │ 🔤 UNIR EN UNA CADENA       │
// └────────────────────────────┘
const texto = frutas.join(" - ");
// → "banana - kiwi - manzana"

// ┌────────────────────────────┐
// │ ➕ REDUCIR A UN VALOR       │
// └────────────────────────────┘
const suma = numeros.reduce((acc, num) => acc + num, 0);
// → 46

// ┌────────────────────────────┐
// │ ❓ CONDICIONES SOBRE ARRAY  │
// └────────────────────────────┘
console.log(frutas.every(f => typeof f === "string")); 
// → true

console.log(frutas.some(f => f.startsWith("b")));      
// → true
// ┌────────────────────────────┐
// │ 🧱 APLANAR UN ARRAY       │
// └────────────────────────────┘

// Array anidado (niveles)
const arrayAnidado = [1, 2, [3, 4], [5, [6, 7]]];

// 🔹 .flat(n) → aplana hasta "n" niveles
const aplanado1 = arrayAnidado.flat();       
// → [1, 2, 3, 4, 5, [6, 7]]   (aplana 1 nivel)

const aplanado2 = arrayAnidado.flat(2);      
// → [1, 2, 3, 4, 5, 6, 7]     (aplana 2 niveles)

// 🔹 .flat(Infinity) → aplana todos los niveles
const completamentePlano = arrayAnidado.flat(Infinity);
// → [1, 2, 3, 4, 5, 6, 7]

// 🔹 Alternativa moderna usando .reduce() + recursividad
function aplanarRecursivo(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(aplanarRecursivo(val)) : acc.concat(val), []);
}
console.log(aplanarRecursivo(arrayAnidado));
// → [1, 2, 3, 4, 5, 6, 7]

}
// ┌───────────────────────────────────────┐
// │ 📦  objeto JSON (JavaScript)│
// └───────────────────────────────────────┘

function manipular_JSON(){
  // ┌───────────────────────────────────────┐
// │ 📦 1. Crear un objeto JSON (JavaScript)│
// └───────────────────────────────────────┘
const persona = {
  nombre: "Jhonn",
  edad: 25,
  pais: "Bolivia",
  habilidades: ["PHP", "JavaScript", "Python"]
};

// ┌───────────────────────────────────────┐
// │ 📤 2. Convertir objeto JS a JSON      │
// └───────────────────────────────────────┘
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// → '{"nombre":"Jhonn","edad":25,"pais":"Bolivia","habilidades":["PHP","JavaScript","Python"]}'

// ┌───────────────────────────────────────┐
// │ 📥 3. Convertir JSON a objeto JS      │
// └───────────────────────────────────────┘
const personaObjeto = JSON.parse(personaJSON);
console.log(personaObjeto.nombre); 
// → "Jhonn"

// ┌───────────────────────────────────────┐
// │ 🔍 4. Acceder a datos JSON            │
// └───────────────────────────────────────┘
console.log(personaObjeto.edad);         // → 25
console.log(personaObjeto.habilidades[1]); // → "JavaScript"

// ┌───────────────────────────────────────┐
// │ 📝 5. Modificar valores del JSON      │
// └───────────────────────────────────────┘
personaObjeto.edad = 26;
personaObjeto.habilidades.push("HTML");
console.log(personaObjeto);

// ┌───────────────────────────────────────┐
// │ ➕ 6. Agregar propiedades nuevas       │
// └───────────────────────────────────────┘
personaObjeto.email = "jhonn@email.com";
console.log(personaObjeto.email); 
// → "jhonn@email.com"

// ┌───────────────────────────────────────┐
// │ ❌ 7. Eliminar propiedades del JSON   │
// └───────────────────────────────────────┘
delete personaObjeto.pais;
console.log(personaObjeto.pais); 
// → undefined

// ┌───────────────────────────────────────┐
// │ 🔁 8. Recorrer un JSON (for...in)     │
// └───────────────────────────────────────┘
for (let clave in personaObjeto) {
  console.log(`${clave}: ${personaObjeto[clave]}`);
}
// → nombre: Jhonn, edad: 26, habilidades: [...], email: ...

// ┌───────────────────────────────────────┐
// │ 🔂 9. Recorrer arrays dentro del JSON │
// └───────────────────────────────────────┘
personaObjeto.habilidades.forEach((hab, i) => {
  console.log(`Habilidad ${i + 1}: ${hab}`);
});

// ┌───────────────────────────────────────┐
// │ 📦 10. JSON con array de objetos      │
// └───────────────────────────────────────┘
const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 27 }
];

// Acceder a propiedades de objetos en el array
console.log(usuarios[1].nombre); 
// → "Luis"

// Recorrer array de objetos
usuarios.forEach((usuario) => {
  console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
});

// ┌───────────────────────────────────────┐
// │ 🧪 11. Filtrar array de JSON          │
// └───────────────────────────────────────┘
const mayores25 = usuarios.filter(u => u.edad > 25);
console.log(mayores25);
// → [{nombre: "Luis", edad: 30}, {nombre: "Marta", edad: 27}]

// ┌───────────────────────────────────────┐
// │ 🔤 12. Convertir JSON a texto bonito  │
// └───────────────────────────────────────┘
const bonito = JSON.stringify(personaObjeto, null, 2);
console.log(bonito);
/*
{
  "nombre": "Jhonn",
  "edad": 26,
  "habilidades": ["PHP", "JavaScript", "Python", "HTML"],
  "email": "jhonn@email.com"
}
*/

}
// ┌───────────────────────────────────────┐
// │ 🎨  Estilos (JavaScript)│
// └───────────────────────────────────────┘
function estilos_etiquetas(){
  // ┌────────────────────────────────────────┐
// │ 🎯 1. Seleccionar el elemento a editar │
// └────────────────────────────────────────┘
const miCaja = document.getElementById("caja");  // Asegúrate que exista un div con id="caja"

// ┌────────────────────────────────────────┐
// │ 🎨 2. Cambiar el color del texto       │
// └────────────────────────────────────────┘
miCaja.style.color = "blue";  
// → Cambia el color del texto a azul

// ┌────────────────────────────────────────┐
// │ 🎨 3. Cambiar el fondo (background)    │
// └────────────────────────────────────────┘
miCaja.style.backgroundColor = "lightyellow";  
// → Fondo amarillo claro

// ┌────────────────────────────────────────┐
// │ 🅰️ 4. Cambiar el tipo y tamaño de fuente│
// └────────────────────────────────────────┘
miCaja.style.fontFamily = "Arial, sans-serif"; 
miCaja.style.fontSize = "20px";  
// → Fuente Arial, tamaño 20px

// ┌────────────────────────────────────────┐
// │ 📏 5. Cambiar ancho y alto             │
// └────────────────────────────────────────┘
miCaja.style.width = "300px";
miCaja.style.height = "150px";

// ┌────────────────────────────────────────┐
// │ 📦 6. Añadir padding y margen          │
// └────────────────────────────────────────┘
miCaja.style.padding = "10px";
miCaja.style.margin = "20px";

// ┌────────────────────────────────────────┐
// │ 🎯 7. Alinear texto                    │
// └────────────────────────────────────────┘
miCaja.style.textAlign = "center";  
// → Centra el texto horizontalmente

// ┌────────────────────────────────────────┐
// │ 🧱 8. Borde: estilo, ancho y color     │
// └────────────────────────────────────────┘
miCaja.style.border = "2px solid black";  
// → Borde negro sólido de 2px

// ┌────────────────────────────────────────┐
// │ 🧊 9. Redondear bordes                 │
// └────────────────────────────────────────┘
miCaja.style.borderRadius = "10px";  
// → Esquinas redondeadas

// ┌────────────────────────────────────────┐
// │ 🔄 10. Mostrar u ocultar el elemento   │
// └────────────────────────────────────────┘
miCaja.style.display = "none";      // → Oculta
miCaja.style.display = "block";     // → Muestra como bloque

// ┌────────────────────────────────────────┐
// │ 👻 11. Cambiar opacidad y visibilidad  │
// └────────────────────────────────────────┘
miCaja.style.opacity = "0.5";       // → 50% transparente
miCaja.style.visibility = "hidden"; // → Oculto pero conserva espacio

// ┌────────────────────────────────────────┐
// │ 🧲 12. Posicionar el elemento          │
// └────────────────────────────────────────┘
miCaja.style.position = "absolute";
miCaja.style.top = "100px";
miCaja.style.left = "50px";

// ┌────────────────────────────────────────┐
// │ 💡 13. Agregar sombra (box-shadow)    │
// └────────────────────────────────────────┘
miCaja.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.3)";
// → Sombra suave gris

// ┌────────────────────────────────────────┐
// │ 💫 14. Transiciones suaves (opcional) │
// └────────────────────────────────────────┘
miCaja.style.transition = "all 0.3s ease";
// → Hace suaves los cambios de estilo

}


function insertar_HTML(){
  // ┌──────────────────────────────────────┐
// │ 🧱 1. innerHTML: insertar HTML directo│
// └──────────────────────────────────────┘
const contenedor = document.getElementById("miDiv");
contenedor.innerHTML = "<h2>Hola Mundo</h2><p>Este es un párrafo creado con JS</p>";
// → Reemplaza todo el contenido del div con estas etiquetas

// ┌──────────────────────────────────────┐
// │ 🧩 2. insertAdjacentHTML: sin borrar lo anterior │
// └──────────────────────────────────────┘
contenedor.insertAdjacentHTML("beforeend", "<p>Otro párrafo agregado al final</p>");
// Posibles posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// ┌──────────────────────────────────────┐
// │ 🧬 3. createElement + appendChild     │
// └──────────────────────────────────────┘
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Esto es un <p> creado con createElement";
contenedor.appendChild(nuevoParrafo);
// → Crea la etiqueta y la agrega al final del contenedor

// ┌──────────────────────────────────────┐
// │ 🔀 4. append() / prepend(): más flexible │
// └──────────────────────────────────────┘
const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Subtítulo agregado con prepend()";
contenedor.prepend(nuevoH3); // Lo coloca al principio

contenedor.append("<p>Este va al final con append()</p>");

// ┌──────────────────────────────────────┐
// │ 📌 5. insertBefore: insertar en lugar específico │
// └──────────────────────────────────────┘
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Elemento nuevo en lista";

const ul = document.querySelector("ul");
const segundoLi = ul.children[1]; // segundo elemento de la lista

ul.insertBefore(nuevoLi, segundoLi);
// → Inserta antes del segundo <li>

// ┌──────────────────────────────────────┐
// │ 🧽 6. template literal con innerHTML │
// └──────────────────────────────────────┘
const nombre = "Jhonn";
contenedor.innerHTML += `
  <div class="card">
    <h4>Bienvenido, ${nombre}</h4>
    <p>Este contenido es generado con template strings</p>
  </div>
`;

}