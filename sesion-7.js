// ACCEDER A ELEMENTOS DEL DOM A TRAVÉS DE JAVASCRIPT

    // console.log(document)
    // seleccionar elementos por nombre de etiqueta
    // console.log("Elemento <a>: ", document.body.getElementsByTagName("a"))
    var links = document.body.getElementsByTagName("a");
    var link = links[0];
    //console.log("1er Link: ", link);

    // seleccionar un elemento por id
    // console.log("id title: ", document.getElementById("title"))

    // seleccionar elementos por atributo class
    // console.log("clase text: ",document.body.getElementsByClassName("subtitle"))
    var subtitle = document.body.getElementsByClassName("subtitle")[0];
    subtitle.textContent = "Hola desde Javascript";
    //console.log("Párrafo subtitle: ", subtitle);


    // Ejemplo de manipulación del DOM

    var parrafos = document.body.getElementsByClassName("number");
    //console.log("párrafos: ", parrafos)

    document.body.insertBefore(parrafos[2], parrafos[0]);

    // Ejemplo de creación de nodos

    function crearNodo(type, child) {
      var node = document.createElement(type);

      if (typeof (child) === "string") {
        var text = document.createTextNode(child);
        node.appendChild(text);
      } else {
        node.appendChild(child);
      }

      return node;
    }

    // var h2 = document.createElement("h2");

    // var text = document.createTextNode("Hola desde el nodo h2");
    // console.log("text: ", text);

    // h2.appendChild(text);
    // console.log("h2", h2)

    var nuevoContenido = crearNodo("p", crearNodo("strong", "Hola soy un nodo creado"))

    document.body.appendChild(nuevoContenido);

    link.href = "https://google.com"
    link.className = "linkColor";
    //console.log("link: ", link);

    // Solución RETO 1

    var images = document.body.getElementsByTagName("img");

    for (var i = images.length - 1; i >= 0; i--) {
      var image = images[i];
      if (Boolean(image.alt)) {
        var text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }

    // Solución RETO 2

    var data = [
      { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
      { name: "Everest", height: 8848, place: "Nepal" },
      { name: "Mount Fuji", height: 3776, place: "Japan" },
      { name: "Vaalserberg", height: 323, place: "Netherlands" },
      { name: "Denali", height: 6168, place: "United States" },
      { name: "Popocatepetl", height: 5465, place: "Mexico" },
      { name: "Mont Blanc", height: 4808, place: "Italy/France" }
    ];

    function buildTable(data) {
      // Crear tabla
      var table = document.createElement("table");

      // Obtener propiedades del primer objeto
      var fields = Object.keys(data[0]);

      // Crear encabezado
      var headRow = document.createElement("tr");

      // Iterar cada elemento del encabezado
      fields.forEach(function (field) {
        var headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode(field));
        headRow.appendChild(headCell);
      });
      // Agregar encabezado a tabla
      table.appendChild(headRow);

      // Iterar sobre cada objeto de data
      data.forEach(function (object) {
        // Crear renglón
        var row = document.createElement("tr");

        // Por cada propiedad iterar
        fields.forEach(function (field) {

          // Crear celda
          var cell = document.createElement("td");
          cell.appendChild(document.createTextNode(object[field]));
          // Si el valor es numérico, agregar estilo
          if (typeof object[field] == "number") {
            cell.style.textAlign = "right";
          }
          // Añadir celda a renglón
          row.appendChild(cell);
        });
        // Añadir renglón a la tabla
        table.appendChild(row);
      });

      return table;
    }

    document.getElementById("mountains").appendChild(buildTable(data));