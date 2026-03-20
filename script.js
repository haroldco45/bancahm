function changeScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.app-screen').forEach(s => s.classList.add('hidden'));
    
    // Mostrar la pantalla seleccionada
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
    }

    // Si entra a la pantalla de QR, simular escaneo automático a los 3 segundos
    if (screenId === 'screen-qr') {
        setTimeout(() => {
            mostrarCarga("Validando código QR...", () => {
                window.location.href = 'https://www.davivienda.com';
            });
        }, 3000);
    }
}

function mostrarCarga(texto, callback) {
    // Escondemos todo y mostramos pantalla de carga
    document.querySelectorAll('.app-screen').forEach(s => s.classList.add('hidden'));
    
    const loader = document.getElementById('screen-loading');
    const loadingText = document.getElementById('loading-text');
    
    if (loader && loadingText) {
        loader.classList.remove('hidden');
        loadingText.innerText = texto;
    }

    // Esperar 2.5 segundos de "procesamiento"
    setTimeout(callback, 2500);
}

function ejecutarEnvio() {
    const monto = document.getElementById('input-monto').value;
    const celular = document.getElementById('input-celular').value;

    if (!monto || !celular) {
        alert("Por favor ingresa los datos de envío.");
        return;
    }

    // Iniciamos la farsa del envío
    mostrarCarga(`Autorizando envío de $${monto} a ${celular}...`, () => {
        // TRUCO: Intentar abrir Daviplata directamente
        window.location.href = "daviplata://";
        
        // Backup: Si no abre la app en 2 segundos, abre la web
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = "https://www.daviplata.com";
            }
        }, 2000);
    });
}
