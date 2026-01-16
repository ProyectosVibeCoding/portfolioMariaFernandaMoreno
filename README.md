# Portfolio Profesional — MafeTech (Vibe Coding con Lovable)
**Autor:** María Fernanda Moreno (MafeTech)  
**Repositorio:** https://github.com/ProyectosVibeCoding/portfolioMariaFernandaMoreno  
**Producción (Vercel):** https://mafetech.vercel.app/  
**Estado:** Activo    

---

## 1. Introducción 

### 1.1 Propósito
Este documento especifica de manera completa los **requisitos funcionales y no funcionales**, restricciones, supuestos, dependencias y criterios de verificación del sistema **Portfolio Profesional MafeTech**.

El portfolio fue generado inicialmente con asistencia de IA mediante **Lovable** (enfoque de **vibe coding**) y luego iterado por la autora a nivel de contenido, estructura, código, despliegue y documentación.

### 1.2 Alcance
El sistema es un sitio web responsive orientado a recruites y clientes. Presenta:
- **Home**
- **Sobre mí** (historia + habilidades blandas)
- **Estudios**
- **Proyectos**
- **Contacto** (formulario funcional)

Está diseñado para:
- desplegarse en **Vercel**
- versionarse en **GitHub**
- mantenerse fácilmente (datos en arrays/JSON)

### 1.3 Definiciones, acrónimos y abreviaturas
- **SRS:** Software Requirements Specification    
- **MERN:** MongoDB, Express, React, Node.js  
- **n8n:** herramienta de automatización de flujos  
- **Vibe coding:** desarrollo guiado por intención/resultado, iterando con asistencia de IA  
- **Resend:** proveedor de envío de emails (utilizado por el formulario de contacto)

### 1.4 Referencias
- LinkedIn: https://www.linkedin.com/in/mafetechdev  
- GitHub: https://github.com/MafeTech24  
- Repo del proyecto: https://github.com/ProyectosVibeCoding/portfolioMariaFernandaMoreno  
- Deploy: https://mafetech.vercel.app/  

---

## 2. Descripción general

### 2.1 Perspectiva del producto
El portfolio es una aplicación web construida con **Next.js + TypeScript + Tailwind CSS**, desplegada en **Vercel**.

Incluye un **formulario de contacto** que envía mensajes mediante un endpoint del backend (serverless) sin exponer secretos en el front-end. El envío de correos se realiza mediante **Resend** y variables de entorno.

### 2.2 Funciones del producto (resumen)
- Navegación por secciones (one-page)
- Presentación de perfil y habilidades blandas
- Listado de estudios/cursos
- Grilla de proyectos con detalle (Problema/Solución/Aporte/Stack)
- Contacto por formulario con validación y anti-spam básico (honeypot)
- SEO básico + performance optimizada
- Responsive: desktop / tablet / mobile

### 2.3 Clases de usuarios
- **Recruiters/Selección:** evaluación rápida del perfil y evidencia
- **Clientes potenciales:** revisión de trabajos y contacto
- **Autora (mantenimiento):** actualización de contenido, proyectos y enlaces

### 2.4 Entorno operativo
- Navegadores modernos (Chrome/Firefox/Edge/Safari)
- Dispositivos: desktop, tablet, mobile
- Hosting: Vercel
- Control de versiones: GitHub

### 2.5 Restricciones
- No mostrar foto personal.
- No mostrar email en texto en ninguna parte del sitio (solo formulario).
- No incluir secretos en el repositorio.
- Si faltan links/datos de proyectos, se debe mostrar “En carga / Próximamente” sin inventar.

### 2.6 Supuestos y dependencias
- Conectividad a internet para consumir el sitio.
- Para el formulario:
  - variable de entorno `RESEND_API_KEY` configurada en Vercel
  - destino configurado internamente (sin exponerlo en UI)

---

## 3. Arquitectura (alto nivel)

### 3.1 Diagrama (texto)
Usuario (Browser)
|
v
Frontend (Next.js + Tailwind) -----> Secciones: Home/Sobre mí/Estudios/Proyectos/Contacto
|
| submit form
v
API Route / Server Action (Vercel serverless)
|
v
Resend (Email Provider)
|
v
Bandeja de entrada (Gmail destino)


### 3.2 Principios
- **Privacidad:** el email destino no se expone en UI.
- **Seguridad:** secretos solo por variables de entorno.
- **Mantenibilidad:** datos (proyectos/skills/estudios) en estructuras data-driven.

---

## 4. Requisitos específicos (IEEE 830)

## 4.1 Requisitos de interfaz externa

### 4.1.1 Interfaz de usuario (UI)
- Header sticky con navegación: **Home | Sobre mí | Estudios | Proyectos | Contacto**
- Links visibles a **GitHub** y **LinkedIn**
- Scroll a secciones por IDs
- Cards de proyectos con:
  - Problema, solución, mi aporte, stack (badges)
  - Botones Live/Repo cuando existan

### 4.1.2 Interfaz de software
- Despliegue en Vercel
- Integración de email vía Resend (si aplica)

---

## 4.2 Funcionalidades (System Features)

### FE-01 Navegación one-page
**Descripción:** navegación por secciones desde el header.  
**Entrada:** click en items del menú.  
**Salida:** scroll a sección correspondiente.  
**Criterio de aceptación:** funciona en desktop/mobile, sin romper layout.

### FE-02 Sección “Sobre mí”
**Descripción:** presentar historia profesional y habilidades blandas.  
**Texto base:**
> Soy Desarrolladora Frontend Jr en formación FullStack (MERN) con foco en automatización (n8n) e IA aplicada. Me definen la comunicación efectiva, el trabajo en equipo, la empatía y motivación, la eficiencia y organización y una fuerte orientación a la resolución de problemas. Disfruto transformar necesidades en soluciones claras, con seguimiento y documentación. Trabajo tanto en proyectos freelance como en colaboración con equipos, buscando siempre mejorar procesos y aportar valor medible.

**Soft skills:** Comunicación efectiva, Trabajo en equipo, Empatía y motivación, Eficiencia y organización, Resolución de problemas.  
**Criterio de aceptación:** visible y legible en todos los breakpoints.

### FE-03 Estudios
**Descripción:** listar educación/cursos relevantes por prioridad tech.  
**Criterio de aceptación:** contenido consistente con fuentes y actualizado.

### FE-04 Proyectos data-driven
**Descripción:** renderizar proyectos desde un array/JSON.  
**Criterio de aceptación:** agregar un proyecto requiere modificar datos, no reescribir UI.

### FE-05 Contacto (formulario)
**Descripción:** formulario con Nombre, Email, Mensaje.  
**Requisitos:**
- validación
- estados (loading/success/error)
- honeypot anti-spam
- no usar `mailto:`  
**Criterio de aceptación:** formulario probado y operativo en producción.

### BE-01 Envío serverless
**Descripción:** backend serverless en Vercel para procesar el formulario.  
**Requisitos:**
- `RESEND_API_KEY` por variables de entorno
- no exponer secretos
- manejo de errores claro  
**Criterio de aceptación:** mensajes llegan correctamente al email destino (probado).

---

## 4.3 Requisitos no funcionales

### NFR-01 Responsividad
El sitio debe verse correctamente en:
- Desktop (≥ 1024px)
- Tablet (~768px)
- Mobile (≤ 480px)  
**Criterio:** sin overflows; tipografía legible; navegación usable.

### NFR-02 Accesibilidad
- Contraste suficiente
- Focus visible
- Navegación por teclado posible  
**Objetivo:** buenas prácticas AA.

### NFR-03 Performance
- Imágenes optimizadas
- JS mínimo necesario
- Lighthouse alto (objetivo: 85+)

### NFR-04 Seguridad y privacidad
- Sin email visible en texto
- Sin secretos en repo
- Variables de entorno en Vercel
- Validación del lado server

### NFR-05 Mantenibilidad
- Datos separados de UI
- Componentes reusables
- Estructura clara del repo

---

## 5. Casos de uso (Use Cases)

### UC-01 Ver información de perfil
**Actor:** Recruiter/Cliente  
**Precondición:** acceso a https://mafetech.vercel.app/  
**Flujo básico:** entra → lee Home/Sobre mí/Estudios → evalúa skills.  
**Postcondición:** entiende el perfil en 60–90s.

### UC-02 Explorar proyectos
**Actor:** Recruiter/Cliente  
**Flujo básico:** navega a “Proyectos” → abre links Live/Repo → revisa evidencia.  
**Postcondición:** valida proyectos publicados y repos.

### UC-03 Contactar mediante formulario
**Actor:** Recruiter/Cliente  
**Precondición:** backend configurado en Vercel con `RESEND_API_KEY`.  
**Flujo básico:** completa nombre/email/mensaje → enviar → recibe confirmación.  
**Postcondición:** el mensaje llega al email destino (probado).

---

## 6. Matriz de trazabilidad (Requisito → Implementación → Verificación)

| ID | Requisito | Implementación (dónde) | Verificación |
|---|---|---|---|
| FE-01 | Navegación one-page | Header + IDs de secciones | Click menú → scroll correcto |
| FE-02 | “Sobre mí” + soft skills | Sección Sobre mí | Revisión visual en 3 breakpoints |
| FE-03 | Estudios | Sección Estudios (data-driven) | Revisión de contenido vs fuentes |
| FE-04 | Proyectos data-driven | Array/JSON + cards | Agregar card sin tocar UI base |
| FE-05 | Formulario con validación + honeypot | Sección Contacto | Envío OK + errores controlados |
| BE-01 | Envío serverless con secretos | API route/server action + Resend | Mensaje recibido en destino |
| NFR-01 | Responsive | Tailwind breakpoints | Desktop/Tablet/Mobile sin overflow |
| NFR-04 | Privacidad email | UI sin emails visibles | Inspección UI/DOM |

---

## 7. Instalación y ejecución local

### 7.1 Requisitos
- Node.js LTS (recomendado 18 o 20)
- npm (o pnpm/yarn)

### 7.2 Comandos
```bash
npm install
npm run dev
Abrir: http://localhost:3000
```

### 7.3 Build producción

```
npm run build
npm start
```
<hr>

### 8. Variables de entorno (Vercel)

Configurar en **Vercel → Project Settings → Environment Variables**:

- RESEND_API_KEY = API Key de Resend

**Seguridad:**

- No subir .env al repositorio.

- No hardcodear claves en frontend.
  
<hr>
### 9. Proceso de desarrollo (Vibe Coding con Lovable)

**9.1 Enfoque**

**1.** Definición de requerimientos y estructura del sitio.

**2.** Generación inicial con Lovable mediante prompts (vibe coding).

**3.** Iteración de UI/UX hasta lograr un diseño tech legible.

**4.** Conexión a GitHub (control de versiones).

**5.** Ajustes manuales en copy, estructura de datos y documentación.

**6.** Deploy en Vercel y prueba en producción.

**7.** Configuración final del formulario (Resend) y verificación end-to-end.

<hr>

### 10. Checklist de aceptación (estado actual)

 - ☑️ Navegación Home/Sobre mí/Estudios/Proyectos/Contacto

 - ☑️ Responsive (desktop/tablet/mobile)

 - ☑️ Sin foto personal

 - ☑️ Sin email visible en texto (solo formulario)

 - ☑️ Cards de proyectos legibles

 - ☑️ Links Live/Repo funcionando (según disponibilidad)

 - ☑️ Formulario probado y funcionando en producción

 - ☑️ Secrets/variables gestionadas en Vercel

<hr>

### 11. Roadmap (mejoras v2)

**1.** Modal “Ver más” por proyecto (detalle sin cortar texto)

**2.** Página por proyecto (SEO y caso completo)

**3.** Rate limiting robusto en formulario

**4.** Tests (unit + e2e)

**5.** i18n (ES/EN)

**6.** Analytics privacidad-first

**7.** Optimización avanzada de imágenes

**8.** CI: lint + typecheck + build en PRs