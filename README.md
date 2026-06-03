# CIMARA PH

Plataforma institucional del Conjunto Cerrado CIMARA PH.

## Componentes

- Portal web institucional
- Asamblea virtual
- Dashboard de control
- Formularios de votación
- Gestión documental
- Transparencia institucional

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Google Forms
- Google Sheets
- Apps Script
- GitHub

- DOCUMENTO DE DESCRIPCIÓN TÉCNICA Y VISUAL: CIMARA PH
Nombre de la Obra: SISTEMA ESTÁTICO DE INFORMACIÓN CONDOMINIAL Y GESTIÓN DE PQRS - CIMARA PH Tipo de Soporte Lógico: Aplicación Web Front-End Estática Plataforma de Despliegue: GitHub Pages (conjuntocimara.github.io/cimara-ph/)
1. ARQUITECTURA Y USO DE LENGUAJES DE PROGRAMACIÓN
El sistema opera bajo una arquitectura desacoplada en el lado del cliente (Front-End) sin dependencias de bases de datos relacionales en servidor, optimizando la velocidad de carga, la seguridad y el consumo de recursos.
• HTML5 (Estructuración Semántica): Define la jerarquía del sitio mediante etiquetas nativas (<header>, <nav>, <section>, <footer>). Modula el árbol de nodos (DOM) e integra elementos de hipermedia y formularios estructurados para la captura de datos.
• CSS3 (Diseño Visual y Responsividad): Aplica la capa estilística mediante selectores avanzados, variables nativas y tipografías fluidas. Implementa un sistema de rejillas flexibles (Flexbox y CSS Grid) que garantiza un diseño adaptable (Responsive Design) para smartphones, tabletas y computadores de escritorio.
• JavaScript ES6+ (Lógica y Dinamismo): Ejecuta scripts en el hilo principal del navegador para manipular el DOM en tiempo real. Gestiona la lógica de apertura/cierre de menús móviles, la escucha de eventos (Event Listeners) y la interactividad del usuario sin recargar la página.
2. MÓDULOS PRINCIPALES Y FUNCIONALIDAD TÉCNICA
• Módulo de Navegación y Accesibilidad: Controla la visibilidad de menús colapsables en dispositivos móviles mediante la alternancia de clases CSS controladas por JavaScript.
• Módulo de Gestión de PQRS y Contacto: Captura los flujos de texto de los copropietarios en los campos del formulario. Valida las expresiones regulares del lado del cliente (formato de correo electrónico y campos obligatorios) antes de procesar el envío.
• Módulo de Interoperabilidad e Integración: Canaliza de forma segura vectores de salida para redireccionar a los usuarios hacia pasarelas de pago certificadas y
APIs de mensajería instantánea externa mediante atributos target="_blank" y rel="noopener noreferrer".
3. REQUERIMIENTOS DEL ENTORNO DE EJECUCIÓN
• Hardware Mínimo: Dispositivo con procesador de arquitectura x86/ARM (computador o smartphone), 512 MB de memoria RAM libre y tarjeta de red con acceso a protocolo TCP/IP (Internet).
• Software Compatible: Navegadores web modernos con motores de renderizado actualizados (V8, Blink, WebKit, Gecko) como Google Chrome, Mozilla Firefox, Safari o Microsoft Edge, sin necesidad de plugins locales.
4. DESCRIPCIÓN DE LA INTERFAZ GRÁFICA DE USUARIO (GUI)
La interfaz visual del software se compone de las siguientes áreas organizadas jerárquicamente:
1. Encabezado Dinámico (Navbar): Barra superior fija con el logotipo institucional del Conjunto Címara y menús de acceso rápido indexados.
2. Cuerpo Informativo Central (Hero & Grid): Secciones visuales que despliegan la información legal, circulares y comunicados organizados de forma limpia sobre un fondo de alto contraste para mejorar la legibilidad.
3. Módulo de Interacción (Formulario): Cuadros de texto limpios y botones reactivos con efectos visuales (hover) que guían al copropietario en el proceso de radicación.
4. Pie de Página (Footer): Banda de cierre con datos de contacto legal, enlaces a redes y atribución de derechos de autor.
Copyright (c) 2026 Maria Alejandra Bernal Rodriguez (Txilor_alvarez)
Por la presente se concede permiso, de forma gratuita, a cualquier persona u organización sin ánimo de lucro autorizada que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), para utilizar, copiar y modificar el Software exclusivamente para uso comunitario e informativo interno, sujeto a las siguientes condiciones:
1. ATRIBUCIÓN Y DERECHOS DE AUTOR: El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software, manteniendo visible la autoría de Maria Alejandra Bernal Rodriguez.
2. RESTRICCIÓN COMERCIAL Y DE USO EXTERNO: Queda estrictamente PROHIBIDO el uso, copia, modificación, fusión, publicación, distribución, sublicenciamiento o venta del Software con fines comerciales, de lucro directo o indirecto, o para su implementación en copropiedades, conjuntos residenciales o terceros ajenos a la autorización inicial sin el consentimiento previo, por escrito y firmado de la autora.
3. ACCIONES LEGALES: El incumplimiento de cualquiera de estas condiciones revocará de forma automática esta licencia y facultará a la autora a exigir las indemnizaciones económicas, reparaciones por daños a activos intangibles y sanciones legales pertinentes bajo las leyes de propiedad intelectual de la República de Colombia.
EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO MODO, QUE SURJA DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATADOS EN EL SOFTWARE.
