function agregarTarea() {
    // Obtener el valor del campo de tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    // Validar que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa una tarea.',
        });
        return;
    }

    // Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Crear botón Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn-eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
        Swal.fire({
            icon: 'success',
            title: 'Tarea eliminada',
            text: 'La tarea fue eliminada correctamente.',
            timer: 1500,
            showConfirmButton: false,
        });
    };

    // Añadir el botón Eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    // Agregar el nuevo elemento a la lista de tareas
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.appendChild(nuevaTarea);

    // Limpiar el campo de entrada
    document.getElementById("nuevaTarea").value = "";

    // Mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Tarea agregada',
        text: 'Tu tarea fue añadida con éxito.',
        timer: 1500,
        showConfirmButton: false,
    });
}
