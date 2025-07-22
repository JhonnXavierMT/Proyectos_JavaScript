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

function minimo_de_caracteres(longitud) {

}

//----------------------------------------------
// ┌────────────────────────────────────┐
// │ 3.            MAIN                 │
// └────────────────────────────────────┘
//----------------------------------------------

// Mostrar modal al hacer clic
document.getElementById("openModal").addEventListener("click", () => {
    createModal("hola mundo"); // Solo se crea una vez
});