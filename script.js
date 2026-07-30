// === BASE DE DATOS CON 10 NIVELES PARA CADA GRADO === //

const datosNiveles = {
    grado3: [
        { id: 1, titulo: "Nivel 1: ¿Qué es un Robot?", objetivo: "Identificar la definición de robot.", pregunta: "¿Qué es un robot?", opciones: ["Un juguete de cuerda sin energía.", "Una máquina programable que realiza acciones automáticas.", "Una pantalla para ver videos."], correcta: 1 },
        { id: 2, titulo: "Nivel 2: El Cerebro del Robot", objetivo: "Reconocer qué componente procesa la información.", pregunta: "¿Cuál es el 'cerebro' que ejecuta el código en un robot?", opciones: ["Las ruedas", "La batería", "El microcontrolador / procesador"], correcta: 2 },
        { id: 3, titulo: "Nivel 3: El Sentido de la Vista", objetivo: "Identificar el sensor que detecta distancia.", pregunta: "¿Qué componente le ayuda al robot a medir la distancia a un obstáculo?", opciones: ["Sensor Ultrasonido", "Un foco LED", "Un motor"], correcta: 0 },
        { id: 4, titulo: "Nivel 4: Moviendo al Robot", objetivo: "Saber qué componente genera el movimiento.", pregunta: "¿Qué componente necesita el robot para girar sus ruedas?", opciones: ["Sensor de luz", "Servomotor / Motor DC", "Cable USB"], correcta: 1 },
        { id: 5, titulo: "Nivel 5: Primer Comando", objetivo: "Elegir el código correcto para avanzar.", pregunta: "Queremos que el robot vaya hacia adelante. ¿Qué bloque de código usamos?", opciones: ["AVANZAR(1)", "DETENER()", "GIRAR_IZQUIERDA()"], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Detección de Obstáculos", objetivo: "Usar condicional simple.", pregunta: "Si el robot encuentra una pared enfrente, ¿qué comando debe ejecutar?", opciones: ["AVANZAR(5)", "GIRAR_DERECHA()", "APAGAR()"], correcta: 1 },
        { id: 7, titulo: "Nivel 7: La Energía del Robot", objetivo: "Reconocer la fuente de energía.", pregunta: "¿De dónde obtiene energía un robot móvil para funcionar?", opciones: ["De la batería", "Del motor", "Del sensor"], correcta: 0 },
        { id: 8, titulo: "Nivel 8: Secuencia de Pasos", objetivo: "Ordenar comandos para formar una ruta.", pregunta: "Para hacer un cuadrado, el robot avanza y luego debe...", opciones: ["Apagarse", "Girar 90°", "Dar reversa"], correcta: 1 },
        { id: 9, titulo: "Nivel 9: El Sensor de Tacto", objetivo: "Reconocer un botón o pulsador.", pregunta: "¿Qué componente detecta cuando el robot choca directamente contra un objeto?", opciones: ["Sensor de colisión / Pulsador", "LED brillante", "Bocina"], correcta: 0 },
        { id: 10, titulo: "Nivel 10: Algoritmo Completo", objetivo: "Completar la secuencia para llegar a la meta.", pregunta: "¿Cuál secuencia hace que el robot dé 2 pasos y gire?", opciones: ["AVANZAR(1) -> GIRAR()", "AVANZAR(1) -> AVANZAR(1) -> GIRAR()", "GIRAR() -> DETENER()"], correcta: 1 }
    ],
    grado4: [
        { id: 1, titulo: "Nivel 1: Circuitos Eléctricos", objetivo: "Comprender la ruta de la corriente.", pregunta: "¿Qué es un circuito eléctrico cerrado?", opciones: ["Un camino continuo por donde fluye la electricidad.", "Un cable cortado por la mitad.", "Una batería apagada."], correcta: 0 },
        { id: 2, titulo: "Nivel 2: Luces Indicadoras", objetivo: "Aprender sobre LEDs.", pregunta: "¿Qué componente se usa para que el robot emita luz cuando encuentra algo?", opciones: ["Buzzer", "Diodo LED", "Resistencia"], correcta: 1 },
        { id: 3, titulo: "Nivel 3: Protegiendo Componentes", objetivo: "Identificar la función de la resistencia.", pregunta: "¿Para qué sirve una resistencia en un circuito?", opciones: ["Para dar más energía al robot.", "Para limitar la corriente y no quemar el LED.", "Para mover las ruedas."], correcta: 1 },
        { id: 4, titulo: "Nivel 4: Sensor de Luz (LDR)", objetivo: "Detectar cambios de iluminación.", pregunta: "¿Qué sensor usamos si queremos que el robot siga una línea negra en el suelo?", opciones: ["Sensor de luz / LDR / Infrarrojo", "Sensor de sonido", "Termómetro"], correcta: 0 },
        { id: 5, titulo: "Nivel 5: Bucles Repetir", objetivo: "Usar estructuras de repetición.", pregunta: "En código, si queremos repetir 'AVANZAR' 4 veces, ¿qué estructura usamos?", opciones: ["BUCLE REPETIR 4 VECES", "SI... ENTONCES", "DETENER"], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Interruptores", objetivo: "Comprender el control manual.", pregunta: "¿Qué componente abre o cierra el paso de corriente al presionarlo?", opciones: ["Un switch / interruptor", "Un motor", "Una rueda"], correcta: 0 },
        { id: 7, titulo: "Nivel 7: Código de Luces Intermitentes", objetivo: "Programar un LED parapadeante.", pregunta: "¿Qué secuencia hace titilar una luz LED?", opciones: ["ENCENDER -> ESPERAR(1s) -> APAGAR -> ESPERAR(1s)", "ENCENDER -> ENCENDER", "APAGAR -> DETENER"], correcta: 0 },
        { id: 8, titulo: "Nivel 8: Motores con Reductor", objetivo: "Entender el torque y fuerza.", pregunta: "¿Para qué se usa una caja reductora junto al motor del robot?", opciones: ["Para ganar fuerza (torque) y controlar la velocidad.", "Para consumir más batería.", "Para cambiar el color del robot."], correcta: 0 },
        { id: 9, titulo: "Nivel 9: Variables de Velocidad", objetivo: "Aprender sobre variables.", pregunta: "Si creamos la variable `int velocidad = 100;`, ¿qué pasa si cambiamos a `velocidad = 50;`?", opciones: ["El robot irá más rápido.", "El robot irá a la mitad de velocidad.", "El robot se apaga."], correcta: 1 },
        { id: 10, titulo: "Nivel 10: Reto de Circuito y Código", objetivo: "Integrar sensores y motores.", pregunta: "Si `sensor_luz < 30` (está oscuro), ¿qué instrucción debe ejecutar el robot?", opciones: ["ENCENDER_FAROS()", "APAGAR_TODO()", "GIRAR_EN_CIRCULOS()"], correcta: 0 }
    ],
    grado5: [
        { id: 1, titulo: "Nivel 1: Condicionales IF", objetivo: "Evaluar decisiones lógicas en código.", pregunta: "¿Qué hace la instrucción `IF (distancia < 10)`?", opciones: ["Verifica si hay un objeto a menos de 10 cm.", "Suma 10 a la distancia.", "Repite el código 10 veces."], correcta: 0 },
        { id: 2, titulo: "Nivel 2: Condicionales IF / ELSE", objetivo: "Usar caminos alternativos.", pregunta: "En `IF (obstaculo) { DETENER() } ELSE { AVANZAR() }`, ¿qué hace el robot si NO hay obstáculo?", opciones: ["Se detiene", "Avanza", "Gira sin parar"], correcta: 1 },
        { id: 3, titulo: "Nivel 3: El Microcontrolador Arduino", objetivo: "Identificar pines de entrada y salida.", pregunta: "¿Qué tipo de pin usas para leer los datos de un sensor?", opciones: ["Pin de Entrada (INPUT)", "Pin de Salida (OUTPUT)", "Pin de Tierra (GND)"], correcta: 0 },
        { id: 4, titulo: "Nivel 4: Servomotor de Precisión", objetivo: "Controlar ángulos exactos.", pregunta: "A diferencia de un motor normal, ¿qué nos permite hacer un servomotor?", opciones: ["Moverse a ángulos precisos (ej: girar a 90°).", "Dar vueltas infinitas sin parar.", "Generar luz."], correcta: 0 },
        { id: 5, titulo: "Nivel 5: Bucles WHILE", objetivo: "Repetir mientras una condición sea verdadera.", pregunta: "¿Cuándo se detiene un bucle `WHILE (bateria > 0)`?", opciones: ["Cuando la batería llega a 0.", "Inmediatamente después del primer paso.", "Nunca se detiene."], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Puentes H (Controlador de Motores)", objetivo: "Control de dirección de motores.", pregunta: "¿Qué componente nos permite cambiar la dirección de giro de los motores en robótica?", opciones: ["Módulo Driver / Puente H (L298N)", "Sensor de humedad", "Pantalla LCD"], correcta: 0 },
        { id: 7, titulo: "Nivel 7: Lectura de Señales Analógicas vs Digitales", objetivo: "Diferenciar tipos de señales.", pregunta: "¿Cuál es una señal digital pura?", opciones: ["Una lectura de temperatura de 24.5 °C.", "Un estado de Encendido (1) o Apagado (0).", "El nivel de brillo gradual de una lámpara."], correcta: 1 },
        { id: 8, titulo: "Nivel 8: Protocolo de Comunicación", objetivo: "Módulos de comunicación inalámbrica.", pregunta: "¿Qué componente le permite al robot recibir órdenes desde un teléfono celular?", opciones: ["Módulo Bluetooth / Wi-Fi", "Sensor infrarrojo", "Potenciómetro"], correcta: 0 },
        { id: 9, titulo: "Nivel 9: Depuración (Debugging)", objetivo: "Encontrar errores en el código.", pregunta: "Si el robot gira en sentido contrario al programado, ¿cuál es el diagnóstico correcto?", opciones: ["El código está perfecto.", "Los cables del motor o los valores de salida están invertidos.", "Falta poner un LED."], correcta: 1 },
        { id: 10, titulo: "Nivel 10: Gran Misión Mecatrónica", objetivo: "Integrar sensores, actuadores y lógica avanzada.", pregunta: "Diseña la lógica: 'Si detecta fuego (bool) Y la distancia (float) es menor a 20.0cm, apagar con la bomba de agua'. ¿Qué operadores usamos?", opciones: ["Operador Lógico AND (Y)", "Operador Lógico OR (O)", "Operador de Suma"], correcta: 0 }
    ]
};

// Cargar o inicializar progreso persistente por grado en el navegador
let progresoTotal = JSON.parse(localStorage.getItem('roboKidsProgresoGrados')) || {
    grado3: { nivelMaximo: 1, completados: [] },
    grado4: { nivelMaximo: 1, completados: [] },
    grado5: { nivelMaximo: 1, completados: [] }
};

let gradoSeleccionado = 'grado3';
let nivelActualId = null;

// Cargar la aplicación al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderizarMapaNiveles();
});

// Función para cambiar entre Grado 3, Grado 4 y Grado 5
function seleccionarGrado(grado) {
    gradoSeleccionado = grado;

    // Actualizar estilos de tarjetas de grados
    document.querySelectorAll('.card-level').forEach(card => card.classList.remove('active-grado'));
    const tarjetaActiva = document.getElementById(`card-${grado}`);
    if (tarjetaActiva) tarjetaActiva.classList.add('active-grado');

    // Actualizar título del mapa
    const titulos = {
        grado3: "🎮 NIVELES: GRADO 3.° (Exploración y Componentes)",
        grado4: "🎮 NIVELES: GRADO 4.° (Circuitos y Sensores)",
        grado5: "🎮 NIVELES: GRADO 5.° (Algoritmos y Mecatrónica)"
    };
    document.getElementById('titulo-grado-actual').innerText = titulos[grado];

    renderizarMapaNiveles();

    // Desplazar pantalla al mapa de niveles suavemente
    document.getElementById('mapa-programacion').scrollIntoView({ behavior: 'smooth' });
}

// Renderizar los 10 nodos de niveles según el grado activo
function renderizarMapaNiveles() {
    const gridContainer = document.getElementById('grid-niveles-juego');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    const nivelesGrado = datosNiveles[gradoSeleccionado];
    const progresoGrado = progresoTotal[gradoSeleccionado];

    nivelesGrado.forEach((nivel) => {
        const estaDesbloqueado = nivel.id <= progresoGrado.nivelMaximo;
        const estaCompletado = progresoGrado.completados.includes(nivel.id);

        const card = document.createElement('div');
        card.className = `level-node ${estaDesbloqueado ? 'unlocked' : 'locked'} ${estaCompletado ? 'completed' : ''}`;

        card.innerHTML = `
            <div class="node-number">${estaCompletado ? '✅' : (estaDesbloqueado ? nivel.id : '🔒')}</div>
            <div class="node-title">${nivel.titulo}</div>
            <div class="node-status">${estaCompletado ? '¡Completado!' : (estaDesbloqueado ? '¡Disponible!' : 'Bloqueado')}</div>
        `;

        if (estaDesbloqueado) {
            card.addEventListener('click', () => abrirNivel(nivel.id));
        }

        gridContainer.appendChild(card);
    });
}

// Abrir modal con el reto / pregunta del nivel elegido
function abrirNivel(id) {
    nivelActualId = id;
    const datosNivel = datosNiveles[gradoSeleccionado].find(n => n.id === id);

    document.getElementById('nivel-titulo-modal').innerText = datosNivel.titulo;
    document.getElementById('nivel-objetivo-text').innerText = datosNivel.objetivo;
    document.getElementById('nivel-pregunta-text').innerText = datosNivel.pregunta;

    // Ocultar mensajes anteriores de feedback
    const feedbackBox = document.getElementById('mensaje-feedback');
    feedbackBox.style.display = 'none';

    // Renderizar las opciones de respuesta
    const opcionesContainer = document.getElementById('opciones-respuesta');
    opcionesContainer.innerHTML = '';

    datosNivel.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.innerText = `${String.fromCharCode(65 + index)}) ${opcion}`;
        btn.onclick = () => verificarRespuesta(index, datosNivel.correcta);
        opcionesContainer.appendChild(btn);
    });

    document.getElementById('modal-pantalla-nivel').classList.add('active');
}

// Verificar respuesta seleccionada por el estudiante
function verificarRespuesta(indiceSeleccionado, indiceCorrecto) {
    const feedbackBox = document.getElementById('mensaje-feedback');
    feedbackBox.style.display = 'block';

    if (indiceSeleccionado === indiceCorrecto) {
        feedbackBox.className = 'feedback-box correcto';
        feedbackBox.innerHTML = '🎉 ¡EXCELENTE! Respuesta correcta. ¡Nivel completado!';

        setTimeout(() => {
            completarNivelActual();
        }, 1200);

    } else {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.innerHTML = '❌ ¡Ups! Esa no es la respuesta correcta. ¡Inténtalo de nuevo!';
    }
}

// Cerrar modal
function cerrarNivel() {
    document.getElementById('modal-pantalla-nivel').classList.remove('active');
}

// Guardar progreso y desbloquear el siguiente nivel
function completarNivelActual() {
    if (!nivelActualId) return;

    const progresoGrado = progresoTotal[gradoSeleccionado];

    if (!progresoGrado.completados.includes(nivelActualId)) {
        progresoGrado.completados.push(nivelActualId);
    }

    if (nivelActualId >= progresoGrado.nivelMaximo && nivelActualId < 10) {
        progresoGrado.nivelMaximo = nivelActualId + 1;
    }

    localStorage.setItem('roboKidsProgresoGrados', JSON.stringify(progresoTotal));

    cerrarNivel();
    renderizarMapaNiveles();
}

// Reiniciar progreso exclusivo del grado seleccionado
function reiniciarProgresoGradoActual() {
    if (confirm(`¿Quieres reiniciar los 10 niveles del ${gradoSeleccionado.replace('grado', 'Grado ')}°?`)) {
        progresoTotal[gradoSeleccionado] = { nivelMaximo: 1, completados: [] };
        localStorage.setItem('roboKidsProgresoGrados', JSON.stringify(progresoTotal));
        renderizarMapaNiveles();
    }
}