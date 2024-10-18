// Función Obtener Clima Buenos Aires (Hay que registrarse en https://api.openweathermap.org para obtener Token)
// El codigo esta en la pagina...(La Key de la API se pasa por variable a la URL)
async function obtenerClima() {
    const apiKey = 'e44311d89985c7e1dfdf43144c5de162'; // Reemplazar con la API Key (Token)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,AR&appid=${apiKey}&units=metric&lang=es`;

// Aca hace un Try (Si funciona devuelve el valor en Celcius) vs Catch (Si no funciona devuelve No Disponible)
    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperatura = data.main.temp;
        document.getElementById('temperatura').textContent = `${temperatura}°C`;
    } catch (error) {
        document.getElementById('temperatura').textContent = 'No disponible';
    }
}

// Función Obtener Hora Buenos Aires (Esto viene por defecto en Javascript)
function obtenerHora() {
    const now = new Date();
    const opcionesHora = { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const horaActual = now.toLocaleTimeString('es-AR', opcionesHora);
    document.getElementById('horaActual').textContent = horaActual;
}

// Ejecutar las funciones
obtenerClima(); // Aca iria un setInverval? Ver Comentarios debajo!?
setInterval(obtenerHora, 1000); // En este caso se pone siempre 1000 porque equivale a un segundo.

//  Para actualizar cada 1 Segundo  =    1000
//  Para actualizar cada 1 Minuto   =   60000
//  Para actualizar cada 15 Minutos =  900000
//  Para actualizar cada 30 Minutos = 1800000
//  Para actualizar cada 60 Minutos = 3600000
