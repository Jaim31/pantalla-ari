    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const dateString = `${dayName}, ${day} de ${month}`;

        document.getElementById('time').textContent =timeString ;  
        document.getElementById('date').textContent = dateString;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Llama a la función para que se ejecute al cargar la página
