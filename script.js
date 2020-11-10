// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

function addClass() {
  let ul = document.querySelector(".selected").parentNode.parentNode;
  var lista = ul.getElementsByTagName("li");

  for (let i = 0; i < lista.length; i++) {
    if (i % 2 === 1) {
      lista[i].style.display = "none";
    } else {
      let name = "element-" + (i + 1);
      lista[i].firstChild.classList.add(name);
    }
  }
  return lista;
}

function addSecondList() {
  let lista = addClass();
  let lista2 = document.getElementById("list2");
  for (let i = 0; i < lista.length; i++) {
    if (i % 2 === 0) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(""));

      let button = document.createElement("button");
      button.innerHTML = "Texto de ejemplo " + (i + 1);
      button.classList.add("element-" + (i + 1));

      li.appendChild(button);
      lista2.appendChild(li);
    }
  }
  console.log(lista2);
}

window.addEventListener("load", onLoad);

function onLoad() {
  addSecondList();
  console.log("hi");
}
