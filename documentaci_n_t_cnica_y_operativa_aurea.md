# 📘 Documentación Técnica y Operativa — Aurea Clínica Estética & Bienestar (Landing Page B2C/B2B)

## 📄 Índice

1. [Propósito del Proyecto y Enfoque Comercial](#-propósito-del-proyecto-y-enfoque-comercial)
2. [Arquitectura General y Principios SOLID](#-arquitectura-general-y-principios-solid)
3. [Estructura del Proyecto y Árbol de Directorios](#-estructura-del-proyecto-y-árbol-de-directorios)
4. [Motor de Datos Estéticos y Catálogo Reactivo](#-motor-de-datos-estéticos-y-catálogo-reactivo)
5. [Sistema de Adquisición de Pacientes y WhatsApp Directo](#-sistema-de-adquisición-de-pacientes-y-whatsapp-directo)
6. [Suite Ejecutiva B2B (Calculadora de ROI y CMS en Vivo)](#-suite-ejecutiva-b2b-calculadora-de-roi-y-cms-en-vivo)
7. [Comparador Interactivo de Resultados (Antes y Después)](#-comparador-interactivo-de-resultados-antes-y-después)
8. [Sistema de Diseño (Liquid Glass & Tailwind CSS)](#-sistema-de-diseño-liquid-glass--tailwind-css)
9. [Adaptabilidad Responsive Multi-Dispositivo](#-adaptabilidad-responsive-multi-dispositivo)
10. [Infraestructura y Herramientas 100% Gratuitas](#-infraestructura-y-herramientas-100-gratuitas)
11. [Declaración de Uso de Asistencia de Inteligencia Artificial](#-declaración-de-uso-de-asistencia-de-inteligencia-artificial)
12. [Propiedad Intelectual, Copyright y Términos de Servicio](#-propiedad-intelectual-copyright-y-términos-de-servicio)

---

## 🚀 Propósito del Proyecto y Enfoque Comercial

**Aurea** es una landing page de alta gama orientada al sector de la medicina estética y el bienestar femenino. Ha sido diseñada específicamente como **demostración de capacidades técnicas y de conversión ante clínicas e inversores**, mostrando cómo transformar tráfico orgánico y publicitario (Instagram y TikTok) en citas confirmadas sin fricción.

### Aspectos Clave de la Solución:
* **Enfoque Dual (B2C + B2B):** Funciona como un escaparate comercial elegante para pacientes que buscan tratamientos estéticos, y simultáneamente incluye un **Modo Auditoría B2B** secreto para dueños de clínicas que evalúan el retorno de inversión y la autonomía del sistema.
* **Cero Fricción en Venezuela:** Adaptada al ecosistema comercial local, integrando un módulo informativo y de gestión para métodos de pago frecuentes (Pago Móvil, Zelle, Binance, PayPal, Cashea y Divisas).
* **Rendimiento Extremo:** Desarrollada con HTML5 nativo, Tailwind CSS y JavaScript modularizado bajo buenas prácticas de ingeniería, sin depender de librerías pesadas de terceros.

---

## 🏛️ Arquitectura General y Principios SOLID

La plataforma está construida utilizando una arquitectura modular inspirada en los principios de diseño de software **SOLID**, garantizando un código desacoplado, mantenible y escalable:

* **Principio de Responsabilidad Única (SRP):** Cada clase en JavaScript tiene un propósito único y bien acotado (`SecuritySanitizer`, `ToastNotifier`, `ConversionTracker`, `ClinicalCatalogRepository`, `LeadCaptureForm`, `B2BExecutiveSuite`).
* **Principio de Abierto/Cerrado (OCP):** Los catálogos de rituales y los componentes visuales están diseñados para extenderse fácilmente sin modificar el núcleo de la aplicación.
* **Seguridad y Endurecimiento Web (OWASP):** Implementación de cabeceras estrictas de Política de Seguridad de Contenido (CSP) y sanitización de datos en tiempo real para prevenir ataques XSS.

---

## 📂 Estructura del Proyecto y Árbol de Directorios

La estructura de archivos está organizada de manera limpia, separando los recursos estáticos, estilos modulares y la lógica de control:

```text
aurea-landing/
├── css/
│   └── styles.css                 # Estilos personalizados (Liquid Glass, animaciones y responsive)
├── img/
│   ├── armonizacion-facial.webp   # Recursos fotográficos de alta calidad optimizados
│   ├── Laser-dermatologico.jpg
│   ├── Hidratacion-o-relleno-de-labios.webp
│   ├── piel-antes.jpg
│   └── piel-despues.avif
├── js/
│   └── app.js                     # Lógica modular de componentes, eventos y simuladores
├── index.html                     # Documento HTML5 raíz estructurado semánticamente
└── README.md                      # Documentación técnica y descriptiva del proyecto
```

---

## 💎 Motor de Datos Estéticos y Catálogo Reactivo

Gestionado a través de la clase `ClinicalCatalogRepository` en `js/app.js`, el sistema almacena de forma estructurada los metadatos de cada tratamiento médico-estético:

* **Escaparate Dinámico:** Permite alternar entre los protocolos destacados (Armonización Facial, Bioestimulación de Colágeno, Láser Dermatológico, etc.) actualizando instantáneamente tiempos de sesión, sensaciones, duración estimada y beneficios clínicos.
* **Sincronización Contextual:** Al hacer clic en *"Reservar este protocolo"*, la aplicación selecciona automáticamente el tratamiento en el formulario final de agendamiento.

---

## 📱 Sistema de Adquisición de Pacientes y WhatsApp Directo

El formulario de conversión está optimizado para reducir al mínimo la tasa de abandono (*frictionless lead capture*):
1. **Validación en Vivo:** Verifica la longitud del nombre y el formato del número telefónico de contacto en tiempo real.
2. **Puente Comercial a WhatsApp:** Genera de forma automatizada un enlace con mensaje prellenado (`https://wa.me/...`) que estructura la solicitud de la paciente directamente para la recepcionista de la clínica.
3. **Confirmación In-Page:** Muestra un estado visual de éxito inmediato sin necesidad de recargar la página.

---

## 📊 Suite Ejecutiva B2B (Calculadora de ROI y CMS en Vivo)

Pensada exclusivamente para reuniones de ventas y demostraciones ante directores médicos:
* **Proyección de ROI Mensual:** Una calculadora interactiva basada en rangos deslizantes (*Sliders*) que proyecta el presupuesto publicitario en Meta Ads, consultas estimadas y retornos financieros estimados en USD.
* **Autonomía Total (CMS en Vivo):** Permite modificar en tiempo real los precios y etiquetas de los rituales directamente desde el panel de auditoría, demostrando la flexibilidad operativa de la plataforma.

---

## 🔍 Comparador Interactivo de Resultados (Antes y Después)

Implementado en la clase `BeforeAfterSlider`, permite al usuario deslizar una cortina interactiva sobre imágenes fotográficas para contrastar el estado inicial y el resultado posterior a un tratamiento estético. Cuenta con soporte nativo tanto para eventos de ratón (*Desktop*) como para gestos táctiles fluidos (`touch-action: pan-y` para dispositivos móviles).

---

## 🎨 Sistema de Diseño (Liquid Glass & Tailwind CSS)

El apartado visual se aparta de las páginas corporativas tradicionales mediante una estética de lujo y bienestar:
* **Efectos de Vidrio Esmerilado (*Liquid Glass*):** Implementados con desenfoques avanzados (`backdrop-filter: blur`), gradientes translúcidos y sombras pasteles suaves.
* **Paleta Cromática Exclusiva:** Tonos perla (`#FFFDFD`), rosas polvorientos (`#C97B93`, `#F8DCE5`), ciruelas profundos (`#3B2C32`) y acentos en champaña.
* **Tipografía Editorial:** Combinación de *Cormorant Garamond* para títulos elegantes con serifa y *Plus Jakarta Sans* para una legibilidad moderna y limpia.

---

## 📱 Adaptabilidad Responsive Multi-Dispositivo

Diseñada bajo la filosofía *Mobile-First*, la interfaz se adapta de manera fluida y nativa a cualquier factor de forma:
* **Teléfonos Inteligentes (iPhone / Android):** Rejillas flexibles de una sola columna, tipografías fluidas que evitan desbordamientos horizontales y botones interactivos de fácil acceso táctil.
* **Tablets e iPads:** Distribución simétrica en columnas intermedias que aprovechan el espacio horizontal de pantallas medianas.
* **Escritorio (PC / Laptops):** Experiencia inmersiva a pantalla completa con efectos de orbes ambientales difusos.

---

## 🛠️ Infraestructura y Herramientas 100% Gratuitas

La landing page está optimizada para operar con un costo de mantenimiento nulo:
* **Control de Versiones:** Repositorio centralizado en [GitHub](https://github.com/).
* **Alojamiento y Despliegue:** Compatible con plataformas CDN de alto rendimiento como [Vercel](https://vercel.com/) o [Render](https://render.com/).
* **Herramientas de Medición:** Preparada para la integración gratuita de **Meta Pixel** y **Google Analytics 4**.

---

## 🤖 Declaración de Uso de Asistencia de Inteligencia Artificial

Con el firme compromiso de mantener total transparencia, declaramos que el desarrollo de este software ha sido concebido, dirigido y arquitectado íntegramente por talento humano.

La asistencia de **Inteligencia Artificial (IA)** se ha empleado de forma **estrictamente puntual y auxiliar** para optimizar los tiempos de ejecución:
* **Depuración y análisis de errores (Debugging):** Diagnóstico rápido de excepciones en controladores de eventos y renderizado DOM.
* **Documentación técnica:** Estructuración y redacción de manuales operativos y especificaciones del sistema.
* **Refactorización de estilos:** Optimización de reglas CSS y transiciones de alto rendimiento visual.

*Ninguna parte crítica de la lógica de negocio, arquitectura de conversión o diseño de la experiencia de usuario ha sido automatizada sin la debida supervisión, auditoría y validación humana.*

---

## ⚖️ Propiedad Intelectual, Copyright y Términos de Servicio

© **2026 Gabriel Marte. Todos los derechos reservados.**

El código fuente, los diseños de interfaz de usuario (UI/UX), la estructura de componentes y toda la documentación técnica asociada a **Aurea** son propiedad intelectual exclusiva del autor.

* **Permisos de Evaluación y Uso Demostrativo:** Se autoriza a clientes potenciales y evaluadores técnicos a visualizar, clonar y probar este repositorio exclusivamente con fines de demostración, evaluación comercial y revisión de portafolio.
* **Cláusula de Restricciones:** Queda estrictamente prohibida la reproducción, distribución, modificación o reventa no autorizada de este software para la creación de productos comerciales derivados sin la autorización previa y por escrito del autor.