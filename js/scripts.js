/**
 * CyberAdmin Portfolio - Lógica del fondo de consola
 */
document.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('code-bg');

    const logs = [
        "SSH: Login attempt from 192.168.1.45...",
        "PACKET: TCP dynamic routing updated",
        "SQL: Database normalization complete",
        "SYS: System kernel optimized",
        "NET: VLAN 10 tagging successful",
        "AUTH: Access granted to admin_user",
        "PING: 8.8.8.8 reply in 12ms",
        "DHCP: New lease assigned 10.0.0.124",
        "FIREWALL: Rule 14 blocked traffic from 45.12.3.1",
        "BASH: apt-get upgrade -y (in progress...)"
    ];

    function createLog() {
        if (!bg) return; // Seguridad por si el elemento no existe

        const line = document.createElement('div');
        // Añadimos un prefijo de tiempo para que parezca más real
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        line.textContent = `[${time}] ${logs[Math.floor(Math.random() * logs.length)]}`;

        // Estilo aleatorio de indentación para dar profundidad
        line.style.paddingLeft = Math.random() * 30 + "px";
        line.style.opacity = (Math.random() * 0.5 + 0.5).toString(); // Opacidad variable

        bg.appendChild(line);

        // Mantener el rendimiento: eliminar líneas antiguas
        if (bg.childNodes.length > 60) {
            bg.removeChild(bg.firstChild);
        }

        // Auto-scroll al final para efecto de terminal
        bg.scrollTop = bg.scrollHeight;
    }

    // Iniciamos el bucle
    setInterval(createLog, 150);
});