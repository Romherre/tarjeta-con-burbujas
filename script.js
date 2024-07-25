// Variable que indica el perfil actual mostrado
let perfilActual = 1;

// Función para cambiar entre dos perfiles
function cambiarPerfil() {
    if (perfilActual === 1) {
        // Si el perfil actual es 1, cambiar al perfil 2
        document.getElementById('nombre-perfil').innerText = 'Soyherre';
        document.getElementById('descripcion-perfil').innerText = 'Diseñadora UI/UX con talento para crear interfaces de usuario hermosas.';
        document.getElementById('imagen-perfil').src = 'img/ux.jpeg';
        perfilActual = 2;
    } else {
        // Si el perfil actual no es 1, cambiar al perfil 1
        document.getElementById('nombre-perfil').innerText = 'Romina Herrera';
        document.getElementById('descripcion-perfil').innerText = 'Desarrolladora web apasionada por crear aplicaciones web interactivas.';
        document.getElementById('imagen-perfil').src = 'img/programadora.jpeg';
        perfilActual = 1;
    }
}

// Función para crear burbujas animadas en el fondo
function crearBurbujas() {
    // Selecciona el contenedor donde se agregarán las burbujas
    const container = document.querySelector('.bubbles-container');
    // Número de burbujas a crear
    const numeroDeBurbujas = 20;

    // Crear burbujas en un bucle
    for (let i = 0; i < numeroDeBurbujas; i++) {
        const bubble = document.createElement('div'); 
        bubble.className = 'bubble'; 

        bubble.style.width = `${Math.random() * 100 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}%`;
        // Definir duración de la animación de manera aleatoria
        bubble.style.animationDuration = `${Math.random() * 20 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        // Agregar la burbuja al contenedor
        container.appendChild(bubble);
    }
}

// Llama a la función crear las burbujas
crearBurbujas();





