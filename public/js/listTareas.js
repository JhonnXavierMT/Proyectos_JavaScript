const input = document.querySelector("input")
const btnAdd = document.querySelector(".btnAdd")
const lista = document.querySelector("ul")
const empty = document.querySelector(".empty")

btnAdd.addEventListener("click", (e) => {
    if (input.value !== "") {
        e.preventDefault();
        const texto = input.value;
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = texto;
        li.appendChild(p);
        li.appendChild(DeletTarea());
        lista.appendChild(li);
        input.value = "";
        empty.style.display = "none";
    }

});
function DeletTarea() {
    const btnDelet = document.createElement("button");
    btnDelet.textContent = "X"
    btnDelet.className = "btn-eliminar"
    btnDelet.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        lista.removeChild(item);
        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            empty.style.display = "block"
        }
    });
    return btnDelet;
}

