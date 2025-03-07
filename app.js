// Arreglo para almacenamiento de nombres
let amigos = [];

// Función para añadir amigos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);

        document.getElementById("amigo").value = "";

        actualizarLista();
    }
}

// Función para actualización de nombres en interfaz
function actualizarLista() {

    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sorteo
function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let amigosRestantes = [...amigos];

    let resultados = [];

    // Sorteo de amigo secreto
    amigos.forEach(function (amigo) {
    
        let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
        let amigoSorteado = amigosRestantes.splice(indiceAleatorio, 1)[0];

        
        resultados.push({ amigo: amigo, amigoSorteado: amigoSorteado });
    });

    // Mostrar los resultados del sorteo
    mostrarResultados(resultados);
}

// Función para mostrar resultado en HTML
function mostrarResultados(resultados) {
    let resultadoLista = document.getElementById("resultado");

    // Limpiar la lista de resultados existente
    resultadoLista.innerHTML = "";

    // Mostrar el resultado de cada sorteo
    resultados.forEach(function (resultado) {
        let li = document.createElement("li");
        li.textContent = `${resultado.amigo} -> ${resultado.amigoSorteado}`;
        resultadoLista.appendChild(li);
    });
}

// Función para reiniciar los registros y la lista
function reiniciar() {
    // Verificar si el campo de entrada o las listas están vacías
    const campoAmigo = document.getElementById("amigo").value;
    const listaAmigos = document.getElementById("listaAmigos").innerHTML;
    const resultado = document.getElementById("resultado").innerHTML;
    
    // Validar si el campo de entrada o las listas están vacíos
    if (campoAmigo === '' && listaAmigos === '' && resultado === '') {
        alert("No hay nada que reiniciar. Las listas ya están vacías.");
        return;
    }

    // Si todo está bien, limpiar los campos y las listas
    document.getElementById("amigo").value = ''; // Limpiar el campo de entrada
    document.getElementById("listaAmigos").innerHTML = ''; // Limpiar la lista de amigos
    document.getElementById("resultado").innerHTML = ''; // Limpiar los resultados de los sorteos
    
    // Opcionalmente, también podemos reiniciar la variable que almacena los amigos
    amigos = [];
    
    alert("Se ha reiniciado la lista."); 
}