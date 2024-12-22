// Referencia al contenedor de las cards y botones
const cardsContainer = document.querySelector(".cards");
const filterButtons = document.querySelectorAll("#buscarfiltros .buttons button");
const searchBar = document.querySelector("#buscarfiltros .search-bar input");
const searchButton = document.querySelector("#buscarfiltros .search-bar button");

// Data inicial
const descargas = [
    {
        "id": 0,
        "tipo": "Mod",
        "name": "MC Command Center (MCCC)",
        "foto": "img/00.jpg",
        "link": "https://deaderpool-mccc.com/",
        "desc": "Permite gestionar casi todos los aspectos del juego, como la vida de los Sims, relaciones, carreras, entre otros.",
    },
    {
        "id": 1,
        "tipo": "Aplicacion",
        "name": "The Sims 4 Studio",
        "foto": "img/01.jpg",
        "link": "https://sims4studio.com/",
        "desc": "Herramienta para crear contenido personalizado, como ropa, objetos y animaciones.",
    },
    {
        "id": 2,
        "tipo": "Mod",
        "name": "UI Cheats Extension",
        "foto": "img/02.jpg",
        "link": "https://scarlet-ice.tumblr.com/post/169394747407/ui-cheats-extension",
        "desc": "Introduce más realismo a los Sims, añadiendo cambios físicos, nuevos rasgos y emociones basadas en sus vivencias.",
    },
    {
        "id": 3,
        "tipo": "Mod",
        "name": "Slice of Life",
        "foto": "img/03.jpg",
        "link": "https://kawaiistaciemods.com/slice-of-life-mod",
        "desc": "Introduce más realismo a los Sims, añadiendo cambios físicos, nuevos rasgos y emociones basadas en sus vivencias.",
    },
    {
        "id": 4,
        "tipo": "Mod",
        "name": "Basemental Drugs",
        "foto": "img/04.jpg",
        "link": "https://basementalcc.com/",
        "desc": "Introduce más realismo a los Sims, añadiendo cambios físicos, nuevos rasgos y emociones basadas en sus vivencias.",
    },
    {
        "id": 5,
        "tipo": "Mod",
        "name": "More Columns in CAS",
        "foto": "img/05.jpg",
        "link": "https://sims4studio.com/thread/5973",
        "desc": "Expande la interfaz de Crear un Sim añadiendo más columnas para facilitar la navegación.",
    },
    {
        "id": 6,
        "tipo": "Mod",
        "name": "Pregnancy Overhaul",
        "foto": "img/06.jpg",
        "link": "https://sims4studio.com/thread/5973",
        "desc": "Mejora la experiencia de embarazo en el juego, con nuevas opciones y reacciones más realistas.",
    },
    {
        "id": 7,
        "tipo": "Mod",
        "name": "Pregnancy Overhaul",
        "foto": "img/07.jpg",
        "link": "https://kawaiistaciemods.com/",
        "desc": "Mejora la experiencia de embarazo en el juego, con nuevas opciones y reacciones más realistas.",
    },
    {
        "id": 8,
        "tipo": "Mod",
        "name": "Life’s Drama",
        "foto": "img/08.jpg",
        "link": "https://kawaiistaciemods.com/lifes-drama",
        "desc": "Añade eventos dramáticos y nuevas interacciones que enriquecen las historias de los Sims.",
    },
    {
        "id": 9,
        "tipo": "Mod",
        "name": "Custom Foods and Recipes",
        "foto": "img/09.jpg",
        "link": "https://modthesims.info/d/544257",
        "desc": "Añade nuevos alimentos y recetas al juego, mejorando la variedad culinaria para los Sims.",
    },
    {
        "id": 10,
        "tipo": "Objetos",
        "name": "Mural Copa Del Mundo 2022",
        "foto": "img/10.jpg",
        "link": "https://www.dominio.com/dir/archivo.pkg",
        "desc": "Mural escala 8x0 slots. Atajada Dibu Martinez (ARG) a Kolomani (FRA) Minuto 121 Partido Final",
    },
];

// Función para renderizar las cards
function renderCards(data) {
    cardsContainer.innerHTML = ""; // Limpiar contenedor
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.foto}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank">Descargar</a>
        `;
        cardsContainer.appendChild(card);
    });
}

// Función para actualizar el estado activo de los botones
function updateActiveButton(activeButton) {
    filterButtons.forEach(button => button.classList.remove("active"));
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

// Manejo de los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.textContent.toLowerCase();
        updateActiveButton(button);

        if (filter === "todos") {
            renderCards(descargas);
        } else if (filter === "mods") {
            const filtered = descargas.filter(item => item.tipo.toLowerCase() === "mod");
            renderCards(filtered);
        } else if (filter === "aplicaciones") {
            const filtered = descargas.filter(item => item.tipo.toLowerCase() === "aplicacion");
            renderCards(filtered);
        } else if (filter === "objetos") {
            const filtered = descargas.filter(item => item.tipo.toLowerCase() === "objetos");
            renderCards(filtered);
        } else {
            console.warn("Filtro desconocido:", filter);
            renderCards([]);
        }
    });
});

// Manejo de la barra de búsqueda
searchButton.addEventListener("click", () => {
    const query = searchBar.value.toLowerCase();
    updateActiveButton(filterButtons[0]); // Activa "Todos" al buscar

    const filtered = descargas.filter(item => item.name.toLowerCase().includes(query));
    renderCards(filtered);
});

// Inicializar mostrando todas las cards y activando el botón "Todos"
renderCards(descargas);
updateActiveButton(filterButtons[0]);
