Proyecto: Amigo Secreto

Este proyecto es una implementación web del clásico juego "Amigo Secreto", donde los usuarios pueden agregar los nombres de sus amigos, realizar un sorteo para asignar el amigo secreto a cada participante y reiniciar el proceso si es necesario.
Descripción

La aplicación permite a los usuarios:

    Ingresar los nombres de sus amigos.
    Ver la lista de amigos añadidos.
    Realizar un sorteo para asignar los amigos secretos.
    Limpiar las listas de amigos y resultados cuando se desee reiniciar el proceso.

Funcionalidades

    Agregar amigos: Los usuarios pueden agregar el nombre de sus amigos en un campo de texto. Si el campo está vacío y se intenta agregar, se muestra una alerta indicando que debe ingresar un nombre.

    Sortear amigos secretos: Cuando los amigos estén añadidos, los usuarios pueden hacer clic en un botón para "Sortear amigo", lo cual asigna un amigo secreto aleatoriamente.

    Reiniciar: Los usuarios pueden reiniciar el proceso, limpiando los registros y las listas de amigos y resultados. Si las listas ya están vacías, se muestra una alerta informando que no hay nada que reiniciar.

Estructura de Archivos

    index.html: Estructura HTML de la aplicación.
    style.css: Estilos CSS para el diseño y la presentación.
    app.js: Lógica JavaScript para la interacción con el usuario, como agregar amigos, realizar el sorteo y reiniciar el proceso.

Instrucciones de Uso

    Agregar amigos:
        En el campo de texto, escribe el nombre de un amigo y haz clic en el botón "Añadir".
        Los nombres añadidos se mostrarán en una lista debajo del campo de texto.

    Sortear amigo secreto:
        Una vez que hayas añadido amigos, haz clic en el botón "Sortear amigo".
        Se asignará un amigo secreto a cada persona y se mostrará el resultado en la parte inferior.

    Reiniciar:
        Haz clic en el botón "Reiniciar" para borrar todos los registros de amigos y resultados.
        Si intentas reiniciar sin haber agregado amigos, se mostrará una alerta indicando que no hay nada que reiniciar.

Funciones Implementadas
agregarAmigo()

Función que permite agregar el nombre de un amigo a la lista, verificando si el campo de texto no está vacío.
sortearAmigo()

Función que asigna un amigo secreto a cada persona de la lista de amigos, sorteando aleatoriamente los nombres.
reiniciar()

Función que limpia el campo de texto, la lista de amigos y los resultados del sorteo. Incluye validación para asegurarse de que no se reinicie si no hay datos que borrar.
Estilos

    Los botones están diseñados con un estilo moderno y fácil de usar, con interacciones de hover.
    El fondo y el texto son adecuados para asegurar una buena visibilidad en todo tipo de dispositivos.

CSS Variables

Se utilizan variables CSS para definir los colores principales y secundarios del proyecto, lo que facilita la personalización de la apariencia del sitio.
Tecnologías Utilizadas

    HTML: Para la estructura de la página.
    CSS: Para los estilos visuales y el diseño.
    JavaScript: Para la lógica y la interacción con el usuario.


Requisitos

Este proyecto no requiere ninguna instalación especial, ya que solo necesita un navegador moderno para ejecutarse.
Cambios Realizados:

    Validación de campo:
        Se agregó una validación en el campo de texto de "Añadir amigo" para asegurarse de que no se pueda agregar un nombre vacío.

    Función de reiniciar con confirmación:
        Se implementó una validación para la función de reiniciar, asegurando que no se reinicie el formulario si no hay datos.
        Al hacer clic en "Reiniciar", ahora el sistema preguntará si realmente desea reiniciar, y si no hay datos para reiniciar, se mostrará una alerta.

    Botón de reiniciar:
        Se añadió un nuevo botón de reiniciar al lado del botón de sorteo.
        El botón tiene el mismo estilo que el de "Sortear", y ambos botones se encuentran alineados horizontalmente.

Desarrollado por Christopher León.
