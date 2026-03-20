// Función para cambiar entre pantallas simuladas
function changeScreen(screenId) {
    // Esconder todas las pantallas
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    // Mostrar la pantalla seleccionada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }

    // --- LA TRAMPA ---
    // Si la pantalla es la del QR, simulamos que escanea y abre Davivienda
    if (screenId === 'screen-qr') {
        setTimeout(() => {
            alert('¡Código detectado! Abriendo portal de pago seguro...');
            // Esta es la URL real de Davivienda. Cuando la abras, tendrás que loguearte.
            window.location.href = 'https://www.davivienda.com'; 
        }, 3000); // 3 segundos de "escaneo" simulado
    }
}
