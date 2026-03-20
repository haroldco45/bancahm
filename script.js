function changeScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');

    if (screenId === 'screen-qr') {
        setTimeout(() => {
            mostrarCarga("Validando QR...", () => {
                window.location.href = 'https://www.davivienda.com';
            });
        }, 2500);
    }
}

function mostrarCarga(texto, callback) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.add('hidden'));
    const loader = document.getElementById('screen-loading');
    loader.classList.remove('hidden');
    document.getElementById('loading-text').innerText = texto;
    
    setTimeout(callback, 2000); // 2 segundos de farsa
}

function ejecutarEnvio() {
    const monto = document.getElementById('input-monto').value;
    const celular = document.getElementById('input-celular').value;

    if (!monto || !celular) {
        alert("Completa los datos para el envío");
        return;
    }

    mostrarCarga(`Enviando $${monto} a ${celular}...`, () => {
        // Intento de abrir Daviplata
        window.location.href = "daviplata://";
        
        // Backup si no abre la app
        setTimeout(() => {
            if (!document.hidden) {
                window.location.href = "https://www.daviplata.com";
            }
        }, 1500);
    });
}
