// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu-row li a');

// Recorre cada enlace y añade un evento de clic
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Elimina la clase 'active' de todos los enlaces
        menuLinks.forEach(item => item.classList.remove('active'));
        // Añade la clase 'active' al enlace que fue clickeado
        this.classList.add('active');
    });
});




// Mostrar/Ocultar ventana de chat cuando se presiona el ícono
document.getElementById("chatbot-button").addEventListener("click", function (event) {
    event.preventDefault();
    const chatWindow = document.getElementById("chat-window");
    chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
});

// Acción del botón 'Enviar'
document.getElementById("send-button").addEventListener("click", function () {
    const chatInput = document.getElementById("chat-input").value.trim();
    if (chatInput !== "") {
        // Redirigir a WhatsApp con el mensaje personalizado
        const phoneNumber = "51904188179"; // Número de WhatsApp en formato correcto
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(chatInput)}`;
        window.open(whatsappURL, "_blank");
    } else {
        alert("Por favor, ingresa un mensaje.");
    }
});








$(document).ready(function () {
    const productos = [
        { id: 'adaptador-rosca-hembra', name: 'ADAPTADOR ROSCA HEMBRA' },
        { id: 'adaptador-rosca-macho', name: 'ADAPTADOR ROSCA MACHO' },
        { id: 'codo-90-rosca-hembra', name: 'CODO DE 90 ROSCA HEMBRA' },
        { id: 'codo-90-rosca-macho', name: 'CODO DE 90 ROSCA MACHO' },
        { id: 'codo-90', name: 'CODO DE 90' },
        { id: 'reduccion', name: 'REDUCCIÓN' },
        { id: 'tee', name: 'TEE' },
        { id: 'tee-rosca-hembra', name: 'TEE ROSCA HEMBRA' },
        { id: 'tee-rosca-macho', name: 'TEE ROSCA MACHO' },
        { id: 'union-o-coupling', name: 'UNION O COUPLING' },
        { id: 'valvula-esferica', name: 'VALVULA ESFERICA' },
        { id: 'cemento-cpvc-naranja-8613', name: 'CEMENTO CPVC NARANJA 8613 BAILEY' },
        { id: 'cemento-pvc-azul-l6453', name: 'CEMENTO PVC AZUL L-6453 BAILEY' },
        { id: 'cemento-pvc-dorado-l3010', name: 'CEMENTO PVC DORADO L-3010 BAILEY' },
        { id: 'cemento-pvc-gris-l5125', name: 'CEMENTO PVC GRIS L-5125 BAILEY' },
        { id: 'cemento-pvc-l5023', name: 'CEMENTO PVC L-5023 BAILEY' },
        { id: 'cemento-pvc-l6023', name: 'CEMENTO PVC L-6023 BAILEY' },
        { id: 'primador-p1030', name: 'PRIMADOR P-1030 BAILEY' },
        { id: 'asiento-hdpe', name: 'ASIENTO HDPE' },
        { id: 'campana-hdpe-bes', name: 'CAMPANA HDPE BES+' },
        { id: 'codo-22-hdpe-kit', name: 'CODO DE 22.5 KIT HDPE' },
        { id: 'codo-22-hdpe-bes', name: 'CODO DE 22.5 HDPE BES+' },
        { id: 'codo-45-hdpe-bes', name: 'CODO DE 45 HDPE BES+' },
        { id: 'codo-45-hdpe-borfit', name: 'CODO DE 45 HDPE BORFIT' },
        { id: 'codo-45-hdpe-bes-2', name: 'CODO DE 45 HDPE BES+' },
        { id: 'codo-90-hdpe-bes', name: 'CODO DE 90 HDPE BES+' },
        { id: 'codo-90-hdpe-borfit', name: 'CODO DE 90 HDPE BORFIT' },
        { id: 'codo-90-hdpe-bes-2', name: 'CODO DE 90 HDPE BES+' },
        { id: 'contratuerca-liviana-hdpe-ld', name: 'CONTRATUERCA LIVIANA HDPE LD' },
        { id: 'cruceta-termo-hdpe-bes', name: 'CRUCETA TERMOFUSION HDPE BES+' },
        { id: 'reduccion-campana-bes', name: 'REDUCCION CAMPANA BES+' },
        { id: 'reduccion-campana-borfit', name: 'REDUCCION CAMPANA BORFIT' },
        { id: 'reduccion-campana-bes-2', name: 'REDUCCION CAMPANA BES+' },
        { id: 'stub-end-bes', name: 'STUB END BES+' },
        { id: 'tapon-termo-hdpe-bes', name: 'TAPON TERMOFUSION HDPE BES+' },
        { id: 'tee-hdpe-electro-bes', name: 'TEE HDPE ELECTROFUSION BES+' },
        { id: 'tee-hdpe-electro-borfit', name: 'TEE HDPE ELECTROFUSION BORFIT' },
        { id: 'tee-termo-hdpe-bes', name: 'TEE TERMOFUSION HDPE BES+' },
        { id: 'union-coupling-hdpe', name: 'UNION COUPLING HDPE' },
        { id: 'union-coupling-hdpe-borfit', name: 'UNION COUPLING HDPE BORFIT' },
        { id: 'valvula-aire-doble-efecto', name: 'VALVULA DE AIRE DOBLE EFECTO' },
        { id: 'valvula-aire-economico', name: 'VALVULA DE AIRE ECONOMICO' },
        { id: 'valvula-aire-simple-efecto', name: 'VALVULA DE AIRE SIMPLE EFECTO' },
        { id: 'yee-termo-hdpe-bes', name: 'YEE TERMOFUSION HDPE BES+' }, { id: 'codo-45-pp', name: 'CODO DE 45 PP' },
        { id: 'codo-90-injerto-pp', name: 'CODO DE 90 CON INJETO PP' },
        { id: 'reduccion-excentrica-pp', name: 'REDUCCION EXCENTRICA PP PESTAN' },
        { id: 'codo-90-pp', name: 'CODO DE 90 PP' },
        { id: 'contratuerca-tanque-pp', name: 'CONTRATUERCA PARA TANQUE PP' },
        { id: 'llave-ducha-campana', name: 'LLAVE DE DUCHA CON CAMPANA' },
        { id: 'niple-pp', name: 'NIPLE PP' },
        { id: 'reduccion-campana-pp', name: 'REDUCCION CAMPANA PP' },
        { id: 'tapon-hembra-pp', name: 'TAPON HEMBRA PP' },
        { id: 'yee-pp', name: 'YEE PP PESTAN' },
        { id: 'terraja-tubo-pp', name: 'TERRAJA PARA TUBO PP' },
        { id: 'union-cupla-pp', name: 'UNION O CUPLA PP' },
        { id: 'union-universal-pp', name: 'UNION UNIVERSAL PP' },
        { id: 'codo-45-pph', name: 'CODO DE 45 PPH PESTAN' },
        { id: 'codo-90-pph', name: 'CODO DE 90 PPH PESTAN' },
        { id: 'reduccion-excentrica-pph', name: 'REDUCCION EXCENTRICA PPH PESTAN' },
        { id: 'tapon-hembra-pph', name: 'TAPON HEMBRA PPH PESTAN' },
        { id: 'tee-registro-pph', name: 'TEE CON REGISTRO PPH PESTAN' },
        { id: 'tee-pph', name: 'TEE PPH PESTAN' },
        { id: 'tubo-pph', name: 'TUBO PPH PESTAN' },
        { id: 'union-pph', name: 'UNION PPH PESTAN' },
        { id: 'yee-pph', name: 'YEE PPH PESTAN' },
        { id: 'adaptador-hembra', name: 'ADAPTADOR HEMBRA FUSION PPR' },
        { id: 'adaptador-macho', name: 'ADAPTADOR MACHO FUSION PPR' },
        { id: 'check-fusion', name: 'CHECK FUSION PPR' },
        { id: 'codo-45', name: 'CODO DE 45 FUSION PPR' },
        { id: 'codo-90-injerto', name: 'CODO DE 90 CON INJERTO FUSION' },
        { id: 'codo-90', name: 'CODO DE 90 FUSION PPR' },
        { id: 'niple', name: 'NIPLE PPR' },
        { id: 'curva', name: 'CURVA FUSION PPR' },
        { id: 'filtro-yee', name: 'FILTRO YEE FUSION PPR' },
        { id: 'llave-paso', name: 'LLAVE DE PASO PESADA FUSION PPR' },
        { id: 'montura', name: 'MONTURA FUSION PPR' },
        { id: 'reduccion-campana', name: 'REDUCCION CAMPANA FUSION PPR' },
        { id: 'stub-end', name: 'STUB END FUSION PPR' },
        { id: 'tee-fusion', name: 'TEE FUSION PPR' },
        { id: 'tee-reduccion', name: 'TEE REDUCCION FUSION PPR' },
        { id: 'tee-sanitaria', name: 'TEE SANITARIA FUSION PPR' },
        { id: 'union-coupling', name: 'UNION O COUPLING FUSION PPR' },
        { id: 'union-universal-metal', name: 'UNION UNIVERSAL DE METAL' },
        { id: 'valvula-compuerta', name: 'VALVULA COMPUERTA FUSION PPR' },
        { id: 'valvula-aire', name: 'VALVULA DE AIRE FUSION PPR' },
        { id: 'valvula-esferica-metal', name: 'VALVULA ESFERICA DE METAL' },
        { id: 'adaptador-sch-80-pvc-lesso', name: 'ADAPTADOR SCH-80 PVC LESSO' },
        { id: 'brida-fija-sch-80-pvc-era', name: 'BRIDA FIJA SCH-80 PVC ERA' },
        { id: 'brida-loca-sch-80-pvc-era', name: 'BRIDA LOCA SCH-80 PVC ERA' },
        { id: 'buge-pvc-mixto-lesso', name: 'BUGE PVC MIXTO LESSO' },
        { id: 'bushing-o-buge-con-rosca-pvc', name: 'BUSHING O BUGE CON ROSCA PVC' },
        { id: 'check-bola-doble-era', name: 'CHECK BOLA CON DOBLE ERA' },
        { id: 'check-bola-una-universal', name: 'CHECK BOLA CON UNA UNIVERSAL' },
        { id: 'check-capleta-pvc', name: 'CHECK CAPLETA PVC' },
        { id: 'check-paleta-pvc-era', name: 'CHECK PALETA PVC ERA' },
        { id: 'check-resorte-pvc-era', name: 'CHECK RESORTE PVC ERA' },
        { id: 'codo-45-sch-80-presion', name: 'CODO DE 45° SCH-80 A PRESION' },
        { id: 'codo-45-sch-80-rosca', name: 'CODO DE 45° SCH-80 CON ROSCA' },
        { id: 'codo-90-pvc-mixto-lesso', name: 'CODO DE 90° PVC MIXTO LESSO' },
        { id: 'codo-90-sch-80-presion', name: 'CODO DE 90° SCH-80 A PRESION' },
        { id: 'codo-90-sch-80-rosca', name: 'CODO DE 90° SCH-80 CON ROSCA' },
        { id: 'cruceta-sch-80-presion-lesso', name: 'CRUCETA SCH-80 A PRESION LESSO' },
        { id: 'niple-fabrica-dado-pvc', name: 'NIPLE DE FABRICA CON DADO PVC' },
        { id: 'reduccion-buge-sch-80-pvc', name: 'REDUCCION BUGE SCH-80 PVC' },
        { id: 'reduccion-campana', name: 'REDUCCION CAMPANA SCH-80 PVC' },
        { id: 'tapon-hembra-a-presion', name: 'TAPON HEMBRA SCH-80 A PRESION' },
        { id: 'tapon-hembra-con-rosca', name: 'TAPON HEMBRA SCH-80 CON ROSCA' },
        { id: 'tapon-macho-con-rosca', name: 'TAPON MACHO SCH-80 CON ROSCA' },
        { id: 'tee-pvc-mixto', name: 'TEE PVC MIXTO LESSO' },
        { id: 'tee-reduccion-a-presion', name: 'TEE REDUCCION SCH-80 A PRESION' },
        { id: 'tee-a-presion', name: 'TEE SCH-80 A PRESION PVC LESSO' },
        { id: 'tee-con-rosca', name: 'TEE SCH-80 CON ROSCA PVC LESSO' },
        { id: 'tricodo-a-presion', name: 'TRICODO SCH-80 A PRESION PVC' },
        { id: 'union-coupling-mixto', name: 'UNION COUPLING PVC MIXTO LESSO' },
        { id: 'union-a-presion', name: 'UNION SCH-80 A PRESION PVC LESSO' },
        { id: 'union-con-rosca', name: 'UNION SCH-80 CON ROSCA PVC' },
        { id: 'union-universal', name: 'UNION UNIVERSAL SCH-80 PVC' },
        { id: 'valvula-doble-union', name: 'VALVULA CON DOBLE UNION SCH-80' },
        { id: 'valvula-esferica-simple', name: 'VALVULA ESFERICA SIMPLE SCH-80' },
        { id: 'valvula-flotador', name: 'VALVULA FLOTADOR DE PVC LD' },
        { id: 'valvula-mariposa', name: 'VALVULA MARIPOSA TIPO PALANCA' },
        { id: 'yee-a-presion', name: 'YEE SCH-80 A PRESION PVC LESSO' },
        { id: 'check-flex-horizontal', name: 'CHECK FLEX HORIZONTAL' },
        { id: 'duo-check-hierro-ductil', name: 'DUO CHECK DE HIERRO DUCTIL' },
        { id: 'filtro-yee-hierro-ductil', name: 'FILTRO YEE HIERRO DUCTIL' },
        { id: 'hierro-ductil-adaptador', name: 'HIERRO DUCTIL ADAPTADOR' },
        { id: 'adaptador-acerrojada', name: 'ADAPTADOR ACERROJADA' },
        { id: 'medidor-caudal-analogo', name: 'MEDIDOR DE CAUDAL ANALOGO' },
        { id: 'medidor-doble-chorro', name: 'MEDIDOR DE DOBLE CHORRO' },
        { id: 'union-acerrojada-hdpe', name: 'UNION ACERROJADA PARA HDPE' },
        { id: 'union-dresser-amplio-rango', name: 'UNION DRESSER AMPLIO RANGO' },
        { id: 'valvula-bridada-timon', name: 'VALVULA BRIDADA CON TIMON' },
        { id: 'valvula-compuerta', name: 'VALVULA COMPUERTA' },
        { id: 'valvula-aire-triple-efecto', name: 'VALVULA DE AIRE TRIPLE EFECTO' },
        { id: 'valvula-mariposa-timon', name: 'VALVULA MARIPOSA TIPO TIMON' },
        { id: 'valvula-mariposa-palanca', name: 'VALVULA MARIPOSA TIPO PALANCA' },
        { id: 'extrusora-weldy', name: 'EXTRUSORA WELDY' },
        { id: 'griotech-200mm', name: 'GRIOTECH 200mm' },
        { id: 'griotech-450mm', name: 'GRIOTECH 450mm' },
        { id: 'griotech-63-315mm', name: 'GRIOTECH 63mm a 315mm' },
        { id: 'i-plast-105-soldadora', name: 'I PLAST 105 SOLDADORA' },
        { id: 'soldador-de-cuña', name: 'SOLDADOR DE CUÑA' },
        { id: 'sopladora-aire-caliente', name: 'SOPLADORA DE AIRE CALIENTE' },

    ];

    // Ejecutar búsqueda al hacer clic en el botón de búsqueda
    $('#search-btn').on('click', function () {
        realizarBusqueda();
    });

    // Ejecutar búsqueda al presionar Enter en el campo de entrada
    $('#search-input').on('keypress', function (e) {
        if (e.which === 13) {
            realizarBusqueda();
        }
    });

    function realizarBusqueda() {
        const searchTerm = $('#search-input').val().toLowerCase().trim();

        if (searchTerm) {
            // Filtrar productos según el término de búsqueda
            const resultados = productos.filter(producto =>
                producto.name.toLowerCase().includes(searchTerm)
            );

            // Vaciar el campo de búsqueda
            $('#search-input').val('');

            if (resultados.length > 0) {
                const productIds = resultados.map(producto => producto.id).join(',');
                // Redirigir a resultados.html con los IDs de los productos encontrados
                window.location.href = 'resultados.html?productos=' + productIds;
            } else {
                // Redirigir a resultados.html con mensaje de "No existen resultados"
                window.location.href = 'resultados.html?productos=none';
            }
        } else {
            alert('Por favor, ingrese un término para buscar');
        }
    }
});

