// Inicialización de Mermaid para el diagrama de flujo
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        }
    });

    // Definición del diagrama de flujo de la metodología
    const flowchartDefinition = `%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#6366f1', 'primaryTextColor': '#fff', 'primaryBorderColor': '#4f46e5', 'lineColor': '#6366f1', 'secondaryColor': '#f1f5f9', 'tertiaryColor': '#f8fafc'}}}%%
    graph TD
        Start([Inicio]) --> Fase1
        
        subgraph Fase1["Fase 1: Definición y Planificación"]
            F1A[Identificación del Problema] --> F1B[Investigación Contextual]
            F1B --> F1C[Definición de Requerimientos]
            F1C --> F1D[Selección de Herramientas]
        end
        
        Fase1 --> Fase2
        
        subgraph Fase2["Fase 2: Prototipado Conversacional"]
            F2A[Descripción Inicial] --> F2B[Generación del Prototipo Base]
            F2B --> F2C[Refinamiento Iterativo]
            F2C --> F2D[Prueba de Concepto]
        end
        
        Fase2 --> Fase3
        
        subgraph Fase3["Fase 3: Desarrollo y Optimización"]
            F3A[Expansión de Funcionalidades] --> F3B[Integración de Servicios]
            F3B --> F3C[Optimización Técnica]
            F3C --> F3D[Pruebas Sistemáticas]
        end
        
        Fase3 --> Fase4
        
        subgraph Fase4["Fase 4: Despliegue y Validación"]
            F4A[Preparación para el Despliegue] --> F4B[Despliegue del Prototipo]
            F4B --> F4C[Validación con Usuarios]
            F4C --> F4D[Iteración Post-Despliegue]
        end
        
        Fase4 --> Fase5
        
        subgraph Fase5["Fase 5: Evolución y Escalabilidad"]
            F5A[Evaluación de Limitaciones] --> F5B[Plan de Evolución]
            F5B --> F5C[Documentación Técnica]
            F5C --> F5D[Transición]
        end
        
        Fase5 --> End([Producto Digital])
        
        style F1A fill:#6366f1,color:white,stroke:#4f46e5,stroke-width:2px
        style F1B fill:#6366f1,color:white,stroke:#4f46e5,stroke-width:2px
        style F1C fill:#6366f1,color:white,stroke:#4f46e5,stroke-width:2px
        style F1D fill:#6366f1,color:white,stroke:#4f46e5,stroke-width:2px
        
        style F2A fill:#8b5cf6,color:white,stroke:#7c3aed,stroke-width:2px
        style F2B fill:#8b5cf6,color:white,stroke:#7c3aed,stroke-width:2px
        style F2C fill:#8b5cf6,color:white,stroke:#7c3aed,stroke-width:2px
        style F2D fill:#8b5cf6,color:white,stroke:#7c3aed,stroke-width:2px
        
        style F3A fill:#ec4899,color:white,stroke:#db2777,stroke-width:2px
        style F3B fill:#ec4899,color:white,stroke:#db2777,stroke-width:2px
        style F3C fill:#ec4899,color:white,stroke:#db2777,stroke-width:2px
        style F3D fill:#ec4899,color:white,stroke:#db2777,stroke-width:2px
        
        style F4A fill:#10b981,color:white,stroke:#059669,stroke-width:2px
        style F4B fill:#10b981,color:white,stroke:#059669,stroke-width:2px
        style F4C fill:#10b981,color:white,stroke:#059669,stroke-width:2px
        style F4D fill:#10b981,color:white,stroke:#059669,stroke-width:2px
        
        style F5A fill:#f59e0b,color:white,stroke:#d97706,stroke-width:2px
        style F5B fill:#f59e0b,color:white,stroke:#d97706,stroke-width:2px
        style F5C fill:#f59e0b,color:white,stroke:#d97706,stroke-width:2px
        style F5D fill:#f59e0b,color:white,stroke:#d97706,stroke-width:2px
        
        style Start fill:#6366f1,color:white,stroke:#4f46e5,stroke-width:2px
        style End fill:#10b981,color:white,stroke:#059669,stroke-width:2px
    `;

    // Renderizar el diagrama de flujo
    const flowchartElement = document.getElementById('metodologia-flowchart');
    if (flowchartElement) {
        flowchartElement.innerHTML = flowchartDefinition;
        mermaid.init(undefined, flowchartElement);
    }

    // Navegación móvil
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }

    // Acordeón de fases
    const faseItems = document.querySelectorAll('.fase-item');
    
    faseItems.forEach(item => {
        const header = item.querySelector('.fase-header');
        
        header.addEventListener('click', () => {
            // Cerrar todos los otros items
            faseItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el estado activo del item actual
            item.classList.toggle('active');
        });
    });

    // Tabs de flujo de trabajo
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Añadir clase activa al botón clickeado
            btn.classList.add('active');
            
            // Mostrar el panel correspondiente
            const tabId = btn.getAttribute('data-tab');
            
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // Filtrado de herramientas
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toolItems = document.querySelectorAll('.tool-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Añadir clase activa al botón clickeado
            btn.classList.add('active');
            
            // Filtrar las herramientas
            const filter = btn.getAttribute('data-filter');
            
            toolItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = '';
                } else {
                    if (item.getAttribute('data-category').includes(filter)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Modales
    const toolModal = document.getElementById('tool-modal');
    const practiceModal = document.getElementById('practice-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Botones de detalles de herramientas
    const detailButtons = document.querySelectorAll('.btn-details');
    
    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tool = btn.getAttribute('data-tool');
            const modalTitle = document.getElementById('tool-modal-title');
            const modalBody = document.getElementById('tool-modal-body');
            
            // Configurar contenido según la herramienta
            switch(tool) {
                case 'manus':
                    modalTitle.textContent = 'Manus.im';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> Manus es un agente de IA avanzado que permite crear productos digitales completos mediante conversación natural. Destaca por su capacidad de planificación y ejecución autónoma de tareas complejas.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Planificación estructurada de proyectos digitales</li>
                                <li>Capacidad para crear sitios web, aplicaciones y herramientas completas</li>
                                <li>Generación de código y documentación</li>
                                <li>Interfaz conversacional intuitiva</li>
                                <li>Posibilidad de iterar sobre el producto hasta obtener el resultado deseado</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>Requiere invitación para acceder (según se menciona en el documento original)</li>
                                <li>La versión gratuita puede tener limitaciones en proyectos muy complejos</li>
                                <li>El deploy de aplicaciones complejas puede requerir pasos adicionales</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Alta cantidad de iteraciones en la versión gratuita</p>
                            <p><strong>Capacidad de deploy:</strong> Sí, para la mayoría de proyectos web</p>
                            
                            <div class="tool-link">
                                <a href="https://manus.im/" target="_blank" class="btn btn-primary">Visitar Manus.im</a>
                            </div>
                        </div>
                    `;
                    break;
                case 'genspark':
                    modalTitle.textContent = 'GenSpark.ai';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> GenSpark es un agente de IA que permite crear diversos tipos de contenido y productos digitales mediante una interfaz conversacional. Ofrece múltiples herramientas integradas como generación de diapositivas, hojas de cálculo y chat.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Múltiples herramientas integradas (AI Slides, AI Sheets, AI Chat)</li>
                                <li>Interfaz intuitiva y fácil de usar</li>
                                <li>Capacidad para generar y modificar código</li>
                                <li>Buena para prototipos rápidos</li>
                                <li>Registro gratuito disponible</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>La versión gratuita incluye solo 10 aplicaciones de desarrollo con enlaces temporales</li>
                                <li>Solo permite aplicaciones públicas en el plan gratuito</li>
                                <li>Funcionalidades avanzadas requieren suscripción</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Moderada, con trial del agente incluido</p>
                            <p><strong>Capacidad de deploy:</strong> Limitada en la versión gratuita</p>
                            
                            <div class="tool-link">
                                <a href="https://www.genspark.ai/" target="_blank" class="btn btn-primary">Visitar GenSpark.ai</a>
                            </div>
                        </div>
                    `;
                    break;
                case 'replit':
                    modalTitle.textContent = 'Replit';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> Replit es una plataforma de desarrollo en la nube con capacidades de IA integradas. Permite crear, ejecutar y desplegar código directamente desde el navegador, con soporte para múltiples lenguajes de programación.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Entorno de desarrollo completo en la nube</li>
                                <li>Soporte para múltiples lenguajes de programación</li>
                                <li>Integración con Claude Sonnet para asistencia en codificación</li>
                                <li>Capacidad de deploy incluida</li>
                                <li>Comunidad activa y recursos de aprendizaje</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>Plan gratuito limitado a aplicaciones públicas</li>
                                <li>Recursos computacionales restringidos en la versión gratuita</li>
                                <li>Deploy avanzado requiere plan de pago</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Alta, especialmente para proyectos pequeños y medianos</p>
                            <p><strong>Capacidad de deploy:</strong> Sí, con algunas limitaciones en la versión gratuita</p>
                            
                            <div class="tool-link">
                                <a href="https://replit.com/" target="_blank" class="btn btn-primary">Visitar Replit</a>
                            </div>
                        </div>
                    `;
                    break;
                case 'deepseek':
                    modalTitle.textContent = 'DeepSeek';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> DeepSeek es un modelo de lenguaje avanzado que permite generar código, responder preguntas y asistir en el desarrollo de productos digitales mediante conversación natural.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Iteraciones prácticamente ilimitadas en la versión gratuita</li>
                                <li>Excelente capacidad para generar y explicar código</li>
                                <li>Soporte para múltiples lenguajes de programación</li>
                                <li>Interfaz limpia y fácil de usar</li>
                                <li>Buena comprensión de contexto técnico</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>No es un agente completo (no planifica de forma autónoma)</li>
                                <li>No ofrece deploy directo de aplicaciones</li>
                                <li>Requiere conocimientos técnicos para implementar las soluciones</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Muy alta, prácticamente ilimitadas</p>
                            <p><strong>Capacidad de deploy:</strong> No, requiere implementación manual</p>
                            
                            <div class="tool-link">
                                <a href="https://chat.deepseek.com/" target="_blank" class="btn btn-primary">Visitar DeepSeek</a>
                            </div>
                        </div>
                    `;
                    break;
                case 'qwen':
                    modalTitle.textContent = 'Qwen.ai';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> Qwen es un modelo de lenguaje desarrollado por Alibaba que ofrece capacidades avanzadas de generación de código y asistencia en desarrollo de productos digitales.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Iteraciones prácticamente ilimitadas</li>
                                <li>Capacidad "Artifacts" para generar código completo</li>
                                <li>Función "Web Dev" especializada en desarrollo web</li>
                                <li>Buena comprensión de requisitos técnicos</li>
                                <li>Interfaz intuitiva con diferentes modos de uso</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>No es un agente completo (no planifica de forma autónoma)</li>
                                <li>No ofrece deploy directo</li>
                                <li>Puede requerir refinamiento manual del código generado</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Muy alta, prácticamente ilimitadas</p>
                            <p><strong>Capacidad de deploy:</strong> No, requiere implementación manual</p>
                            
                            <div class="tool-link">
                                <a href="https://chat.qwen.ai/" target="_blank" class="btn btn-primary">Visitar Qwen.ai</a>
                            </div>
                        </div>
                    `;
                    break;
                case 'yourware':
                    modalTitle.textContent = 'Yourware.so';
                    modalBody.innerHTML = `
                        <div class="tool-detail">
                            <p><strong>Descripción:</strong> Yourware es una plataforma especializada en la creación de productos digitales mediante IA, con enfoque en la generación de interfaces y experiencias de usuario de alta calidad.</p>
                            
                            <h4>Ventajas:</h4>
                            <ul>
                                <li>Especializada en creación de productos digitales</li>
                                <li>Integración con Claude 3.7 Sonnet</li>
                                <li>Buena capacidad para generar interfaces visuales</li>
                                <li>Enfoque en experiencia de usuario</li>
                                <li>Resultados de alta calidad visual</li>
                            </ul>
                            
                            <h4>Limitaciones:</h4>
                            <ul>
                                <li>Posibles restricciones en la versión gratuita</li>
                                <li>Puede requerir conocimientos técnicos para implementación completa</li>
                                <li>Deploy no incluido directamente</li>
                            </ul>
                            
                            <p><strong>Iteraciones gratuitas:</strong> Moderada</p>
                            <p><strong>Capacidad de deploy:</strong> Limitada, enfocada más en prototipado</p>
                            
                            <div class="tool-link">
                                <a href="https://www.yourware.so/" target="_blank" class="btn btn-primary">Visitar Yourware.so</a>
                            </div>
                        </div>
                    `;
                    break;
                default:
                    modalTitle.textContent = 'Detalles de la Herramienta';
                    modalBody.innerHTML = `<p>Información no disponible para esta herramienta.</p>`;
            }
            
            // Mostrar el modal
            toolModal.style.display = 'block';
        });
    });
    
    // Botones de ejemplos de prácticas
    const exampleButtons = document.querySelectorAll('.btn-example');
    
    exampleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const practice = btn.getAttribute('data-practice');
            const modalTitle = document.getElementById('practice-modal-title');
            const modalBody = document.getElementById('practice-modal-body');
            
            // Configurar contenido según la práctica
            switch(practice) {
                case 'prompting':
                    modalTitle.textContent = 'Ejemplo de Prompting Efectivo';
                    modalBody.innerHTML = `
                        <div class="practice-example">
                            <h4>Prompt Básico (Poco Efectivo)</h4>
                            <div class="example-box bad">
                                <p>Crea una landing page para mi negocio.</p>
                            </div>
                            
                            <h4>Prompt Efectivo</h4>
                            <div class="example-box good">
                                <p>Quiero crear una landing page para mi negocio de consultoría financiera para pequeñas empresas.</p>
                                <p>Funcionalidades clave:</p>
                                <ol>
                                    <li>Sección hero con título, subtítulo y formulario de contacto</li>
                                    <li>Sección de servicios con 3 tarjetas destacando nuestras especialidades</li>
                                    <li>Sección de testimonios con slider</li>
                                </ol>
                                <p>Estilo visual:</p>
                                <ul>
                                    <li>Colores corporativos: azul (#1a56db) y gris (#4b5563)</li>
                                    <li>Estilo minimalista y profesional</li>
                                    <li>Optimizado para dispositivos móviles</li>
                                </ul>
                                <p>Audiencia objetivo: Dueños de pequeñas empresas y startups</p>
                                <p>Tecnologías preferidas: HTML, CSS y JavaScript vanilla (sin frameworks)</p>
                            </div>
                            
                            <h4>¿Por qué es más efectivo?</h4>
                            <ul>
                                <li>Proporciona contexto específico sobre el tipo de negocio</li>
                                <li>Detalla las funcionalidades requeridas con estructura clara</li>
                                <li>Especifica preferencias visuales y técnicas</li>
                                <li>Define la audiencia objetivo</li>
                                <li>Establece limitaciones tecnológicas</li>
                            </ul>
                        </div>
                    `;
                    break;
                case 'iteraciones':
                    modalTitle.textContent = 'Ejemplo de Gestión de Iteraciones';
                    modalBody.innerHTML = `
                        <div class="practice-example">
                            <h4>Enfoque Ineficiente</h4>
                            <div class="example-box bad">
                                <p>Iteración 1: "Cambia todo el diseño, no me gusta nada."</p>
                                <p>Iteración 2: "Ahora cambia los colores y la fuente."</p>
                                <p>Iteración 3: "Vuelve al diseño anterior pero con otros botones."</p>
                            </div>
                            
                            <h4>Enfoque Efectivo</h4>
                            <div class="example-box good">
                                <p>Iteración 1 (Estructura): "La estructura general se ve bien, pero necesito los siguientes cambios:</p>
                                <ol>
                                    <li>Mover el formulario de contacto debajo de la sección de servicios</li>
                                    <li>Añadir una sección de FAQ antes del footer</li>
                                </ol>
                                <p>Mantén el diseño visual actual por ahora."</p>
                                
                                <p>Iteración 2 (Estilo Visual): "La estructura ahora es perfecta. Vamos a mejorar el estilo visual:</p>
                                <ol>
                                    <li>Cambiar la paleta de colores a tonos azules (#1a56db para primario, #e0f2fe para fondos claros)</li>
                                    <li>Usar la fuente 'Poppins' para títulos y 'Inter' para texto</li>
                                    <li>Añadir sombras sutiles a las tarjetas de servicios</li>
                                </ol>
                                <p>Mantén la estructura y funcionalidad actual."</p>
                                
                                <p>Iteración 3 (Interactividad): "El diseño visual es excelente. Ahora mejoremos la interactividad:</p>
                                <ol>
                                    <li>Añadir animaciones suaves al hacer scroll</li>
                                    <li>Implementar validación en el formulario de contacto</li>
                                    <li>Hacer que las tarjetas de servicios sean clicables y muestren más información</li>
                                </ol>
                                <p>Mantén el estilo visual actual."</p>
                            </div>
                            
                            <h4>Beneficios de este enfoque</h4>
                            <ul>
                                <li>Cada iteración tiene un enfoque específico (estructura, estilo, interactividad)</li>
                                <li>Se preservan los aspectos positivos de iteraciones anteriores</li>
                                <li>Las instrucciones son específicas y detalladas</li>
                                <li>Se mantiene un progreso constante hacia el objetivo final</li>
                                <li>Se minimiza el riesgo de "empezar desde cero" repetidamente</li>
                            </ul>
                        </div>
                    `;
                    break;
                case 'recursos':
                    modalTitle.textContent = 'Ejemplo de Optimización de Recursos';
                    modalBody.innerHTML = `
                        <div class="practice-example">
                            <h4>Enfoque Ineficiente</h4>
                            <div class="example-box bad">
                                <p>Usar una IA diferente para cada pequeña tarea:</p>
                                <ul>
                                    <li>Generar estructura HTML con una IA</li>
                                    <li>Cambiar a otra IA para el CSS</li>
                                    <li>Usar una tercera IA para el JavaScript</li>
                                    <li>Generar cada imagen con prompts separados</li>
                                </ul>
                                <p>Resultado: Agotamiento rápido de créditos, inconsistencia en el diseño, y tiempo perdido en cambios de contexto.</p>
                            </div>
                            
                            <h4>Enfoque Efectivo</h4>
                            <div class="example-box good">
                                <p>Estrategia de combinación de herramientas:</p>
                                <ol>
                                    <li>Usar DeepSeek o Qwen para generar el código base completo (HTML, CSS, JS) aprovechando sus iteraciones ilimitadas</li>
                                    <li>Refinar el diseño y la experiencia de usuario con Yourware.so, especializado en interfaces</li>
                                    <li>Utilizar Manus o Replit para el deploy final y ajustes post-implementación</li>
                                    <li>Reutilizar componentes comunes como navegación, footer, y tarjetas en diferentes proyectos</li>
                                    <li>Aprovechar CDNs gratuitos para bibliotecas y frameworks (Bootstrap, Tailwind, FontAwesome)</li>
                                </ol>
                            </div>
                            
                            <h4>Plantilla Reutilizable para Proyectos Web</h4>
                            <div class="code-example">
                                <pre><code>
// Estructura de archivos
project/
  ├── index.html      // Página principal
  ├── css/
  │   ├── styles.css  // Estilos personalizados
  │   └── reset.css   // Normalización entre navegadores
  ├── js/
  │   └── main.js     // Funcionalidad principal
  └── assets/
      └── images/     // Imágenes optimizadas
                                </code></pre>
                            </div>
                            
                            <h4>Beneficios</h4>
                            <ul>
                                <li>Maximiza el valor de cada herramienta según sus fortalezas</li>
                                <li>Reduce el número total de iteraciones necesarias</li>
                                <li>Mantiene la consistencia en el diseño y la experiencia</li>
                                <li>Acelera el desarrollo de futuros proyectos mediante la reutilización</li>
                                <li>Minimiza los costos al aprovechar recursos gratuitos</li>
                            </ul>
                        </div>
                    `;
                    break;
                case 'calidad':
                    modalTitle.textContent = 'Ejemplo de Evaluación de Calidad';
                    modalBody.innerHTML = `
                        <div class="practice-example">
                            <h4>Lista de Verificación para Productos Digitales</h4>
                            <div class="checklist">
                                <h5>1. Funcionalidad Básica</h5>
                                <ul>
                                    <li>✓ Todas las páginas cargan correctamente</li>
                                    <li>✓ Los enlaces internos funcionan</li>
                                    <li>✓ Los formularios envían datos correctamente</li>
                                    <li>✓ No hay errores en la consola JavaScript</li>
                                    <li>✓ Las funcionalidades principales operan según lo esperado</li>
                                </ul>
                                
                                <h5>2. Experiencia de Usuario</h5>
                                <ul>
                                    <li>✓ Diseño responsive en móviles, tablets y escritorio</li>
                                    <li>✓ Navegación intuitiva y clara</li>
                                    <li>✓ Tiempos de carga aceptables</li>
                                    <li>✓ Feedback visual para interacciones</li>
                                    <li>✓ Accesibilidad básica (contraste, textos alternativos)</li>
                                </ul>
                                
                                <h5>3. Seguridad Básica</h5>
                                <ul>
                                    <li>✓ Validación de entradas en formularios</li>
                                    <li>✓ Protección contra inyección de código</li>
                                    <li>✓ Manejo seguro de datos sensibles</li>
                                    <li>✓ Conexiones seguras (HTTPS)</li>
                                </ul>
                                
                                <h5>4. Rendimiento</h5>
                                <ul>
                                    <li>✓ Optimización de imágenes</li>
                                    <li>✓ Minimización de CSS y JavaScript</li>
                                    <li>✓ Carga diferida de recursos no críticos</li>
                                    <li>✓ Rendimiento aceptable en dispositivos de gama media</li>
                                </ul>
                            </div>
                            
                            <h4>Herramientas de Evaluación Recomendadas</h4>
                            <ul>
                                <li><strong>Lighthouse (Google):</strong> Análisis automatizado de rendimiento, accesibilidad, SEO y mejores prácticas</li>
                                <li><strong>BrowserStack:</strong> Pruebas en múltiples navegadores y dispositivos</li>
                                <li><strong>GTmetrix:</strong> Análisis de velocidad y optimización</li>
                                <li><strong>WAVE:</strong> Evaluación de accesibilidad web</li>
                            </ul>
                            
                            <div class="example-box good">
                                <p><strong>Ejemplo de Informe de Evaluación:</strong></p>
                                <p>"He completado la evaluación de calidad del prototipo y he identificado los siguientes puntos:</p>
                                <ul>
                                    <li>✅ Funcionalidad: Todas las características principales funcionan correctamente</li>
                                    <li>⚠️ Experiencia: El formulario de contacto necesita mejor feedback visual</li>
                                    <li>✅ Seguridad: Validación de entradas implementada correctamente</li>
                                    <li>⚠️ Rendimiento: Las imágenes de la galería necesitan optimización</li>
                                    <li>❌ Compatibilidad: Problemas de visualización en Safari móvil</li>
                                </ul>
                                <p>Recomiendo priorizar la optimización de imágenes y la corrección de problemas en Safari antes del lanzamiento."</p>
                            </div>
                        </div>
                    `;
                    break;
                default:
                    modalTitle.textContent = 'Ejemplo de Práctica';
                    modalBody.innerHTML = `<p>Ejemplo no disponible para esta práctica.</p>`;
            }
            
            // Mostrar el modal
            practiceModal.style.display = 'block';
        });
    });
    
    // Cerrar modales
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toolModal.style.display = 'none';
            practiceModal.style.display = 'none';
        });
    });
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === toolModal) {
            toolModal.style.display = 'none';
        }
        if (e.target === practiceModal) {
            practiceModal.style.display = 'none';
        }
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    burger.classList.remove('toggle');
                }
                
                // Scroll suave
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para la barra de navegación
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de scroll para elementos
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .fase-item, .step, .tip, .recommendation-card, .practice-card, .consideration, .resource-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Añadir clase para animación CSS
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .card, .fase-item, .step, .tip, .recommendation-card, .practice-card, .consideration, .resource-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .card.animate, .fase-item.animate, .step.animate, .tip.animate, .recommendation-card.animate, .practice-card.animate, .consideration.animate, .resource-card.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .example-box {
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1rem;
            }
            
            .example-box.bad {
                background-color: #fee2e2;
                border: 1px solid #ef4444;
            }
            
            .example-box.good {
                background-color: #dcfce7;
                border: 1px solid #10b981;
            }
            
            .code-example {
                background-color: #1e293b;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                overflow-x: auto;
                margin: 1rem 0;
            }
            
            .code-example pre {
                margin: 0;
                font-family: monospace;
            }
            
            .checklist h5 {
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                color: #4f46e5;
            }
            
            .tool-detail h4 {
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                color: #4f46e5;
            }
            
            .tool-link {
                margin-top: 1.5rem;
                text-align: center;
            }
        </style>
    `);
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
