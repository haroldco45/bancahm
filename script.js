// Función para cambiar entre pantallas simuladas
function changeScreen(screenId) {
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }

    // Lógica del Escáner (Mantiene lo anterior)
    if (screenId === 'screen-qr') {
        setTimeout(() => {
            alert('¡Código detectado! Autorizando en Davivienda...');
            window.location.href = 'https://www.davivienda.com'; 
        }, 3000);
    }
}

// NUEVA FUNCIÓN: El salto a Daviplata
function ejecutarEnvio() {
    const monto = document.getElementById('input-monto').value;
    const celular = document.getElementById('input-celular').value;

    if (!monto || !celular) {
        alert("Por favor completa los datos de envío.");
        return;
    }

    alert(`Procesando envío de $${monto} a ${celular} vía BANCA HM...`);

    // Intentamos abrir Daviplata usando su esquema de URL (Deep Link)
    // Nota: El éxito depende de los permisos del navegador en el celular
    setTimeout(() => {
        // Esquema común para intentar abrir apps en Android/iOS
        window.location.href = "daviplata://"; 
        
        // Si en 2 segundos no abre la app (porque el navegador lo bloquea o no detecta el link),
        // lo mandamos a la web de Daviplata como respaldo.
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = "https://www.daviplata.com";
            }
        }, 2000);
    }, 1500);
}
