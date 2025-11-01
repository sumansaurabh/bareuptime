# 🚀 BareUptime

[![Demostración en vivo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![Lanzamiento de la app](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![Estrellas en GitHub](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **Monitoreo de disponibilidad de nivel empresarial a precios de startup**: supervisa tus sitios web y APIs con un 99,9 % de fiabilidad por solo $50/año en lugar de los $360+/año que cobran los competidores.

## 🤔 ¿Por qué BareUptime?

Las herramientas tradicionales de monitoreo de disponibilidad son **ridículamente costosas**. Todo lo que realmente necesitamos es un sistema que responda dos preguntas sencillas:

1. **¿Está disponible mi sitio web/API?**
2. **¿Puede notificarme de inmediato** — en el móvil, Slack, Discord o email?

Eso es todo. No necesitamos tableros animados ni procesos de ventas corporativos.

### El problema de las soluciones actuales

La mayoría de las herramientas bloquean funciones esenciales tras costosos muros de pago:
- 📱 **¿Notificaciones push móviles?** *Premium - $20/mes*
- 🔗 **¿Acceso a API/Webhooks?** *Premium - $10/mes*
- 🌍 **¿Monitoreo global?** *Premium - $15/mes*
- 🔒 **¿Monitoreo de SSL?** *Premium - $10/mes*

**Total: $360+/año** por funciones que cuestan centavos en operar.

## ✨ Qué hace diferente a BareUptime

### 🏆 Funciones que deberían ser gratis (¡y lo son!)

| Función | BareUptime | UptimeRobot | Otros |
|---------|------------|-------------|-------|
| **Apps móviles (iOS/Android)** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Monitoreo de certificados SSL** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Integraciones vía Webhook** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Monitoreo global de red** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Acceso a la API** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Costo anual** | **$50** | $360+ | $400+ |

### 💰 Desglose honesto de precios

Esto no es software inflado por capital de riesgo. Aquí está exactamente lo que cubren tus $50/año:

| Componente de infraestructura | Costo mensual |
|------------------------------|---------------|
| Pools globales de workers (8 ubicaciones) | $92.00 |
| Servidores API y bases de datos | $24.00 |
| Infraestructura de email/notificaciones | $50.00 |
| Tarifas de tiendas de apps móviles | $8.25 |
| Procesamiento de pagos | $22.50 |
| **Costo mensual total** | **$196.75** |

**Costo por usuario (10 000 usuarios): $0.20/mes**
**Nuestro precio: $4.17/mes ($50/año)**
**Promedio de la industria: $30+/mes**

## 🚀 Primeros pasos

### Opción 1: Usa nuestro servicio alojado
1. Visita [app.bareuptime.co](https://app.bareuptime.co)
2. Agrega la URL de tu sitio web
3. Obtén monitoreo instantáneo + apps móviles
4. **Plan gratuito**: 10 monitores, todas las funciones incluidas

### Opción 2: Autoalojamiento (próximamente)
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ Stack tecnológico

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Componentes UI**: Radix UI, shadcn/ui
- **Base de datos**: Supabase (PostgreSQL)
- **Monitoreo**: Pools globales de workers
- **Notificaciones**: Push, Email, Webhooks, Slack, Discord
- **Apps móviles**: React Native (iOS y Android)

## 📋 Funciones

### Monitoreo central
- ✅ **Monitoreo de sitios web y APIs** (GET, POST, PUT, DELETE)
- ✅ **Seguimiento de expiración de certificados SSL**
- ✅ **Encabezados personalizados y autenticación**
- ✅ **Monitoreo global desde 8+ ubicaciones**
- ✅ **Intervalos de verificación de 1 minuto a 1 hora**

### Alertas inteligentes
- ✅ **Notificaciones push móviles** (apps para iOS y Android)
- ✅ **Alertas por email** con línea de tiempo de incidentes
- ✅ **Integraciones con Slack, Discord, Teams**
- ✅ **Notificaciones vía Webhook** para flujos personalizados
- ✅ **Escalamiento de alertas** y gestión de guardias

### Experiencia para desarrolladores
- ✅ **Páginas de estado públicas** para cada monitor
- ✅ **API REST** para automatización
- ✅ **Compatibilidad con MCP (Model Context Protocol)**
- ✅ **Tablero en tiempo real**
- ✅ **Línea de tiempo de incidentes** y análisis de causa raíz

## 🌍 Infraestructura global

Nuestra red de monitoreo abarca:
- 🇺🇸 **Estados Unidos** (Costa Este y Oeste)
- 🇩🇪 **Alemania** (Fráncfort)
- 🇨🇦 **Canadá** (Toronto)
- 🇮🇳 **India** (Bombay)
- 🇦🇺 **Australia** (Sídney)
- *Más ubicaciones se añaden según la demanda*

## 📱 Apps móviles

Descarga nuestras apps nativas para recibir alertas críticas:

- 📱 [App Store de iOS](https://apps.apple.com/app/bareuptime) - *Próximamente*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *Próximamente*

## 🧑‍💻 Contribuciones

¡Aceptamos contribuciones! Este proyecto está construido por desarrolladores cansados de las herramientas de monitoreo sobrevaloradas.

### Desarrollo local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Configura el entorno**
   ```bash
   cp .env.example .env.local
   # Agrega tus claves de Supabase y otras APIs
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

5. **Abre el navegador**
   Ve a [http://localhost:3000](http://localhost:3000)

### Estructura del proyecto
```
bareuptime/
├── app/                 # App router de Next.js
│   ├── api/             # Rutas API
│   ├── components/      # Componentes específicos de página
│   └── globals.css      # Estilos globales
├── components/          # Componentes UI compartidos
│   └── ui/              # Componentes de shadcn/ui
├── hooks/               # Custom hooks de React
├── lib/                 # Funciones utilitarias
└── public/              # Recursos estáticos
```

## 🎯 Hoja de ruta

### ✅ Completado (v1.0)
- [x] Monitoreo de disponibilidad principal
- [x] Panel web
- [x] Notificaciones por email
- [x] Integraciones vía Webhook
- [x] Monitoreo de SSL
- [x] Red global de monitoreo

### 🚧 En progreso (v1.1)
- [ ] Apps móviles (iOS y Android)
- [ ] Enrutamiento avanzado de alertas
- [ ] Documentación de la API
- [ ] Autoalojamiento con Terraform

### 🎯 Futuro (v2.0)
- [ ] Monitoreo de rendimiento
- [ ] Agregación de logs
- [ ] Métricas personalizadas
- [ ] Funciones de colaboración para equipos

## 📄 Licencia

Este proyecto está licenciado bajo MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙋‍♂️ Soporte

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [Únete a la comunidad](https://discord.gg/bareuptime)
- 🐛 **Reporte de bugs**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentación**: [docs.bareuptime.co](https://docs.bareuptime.co)

---

⭐ **Si BareUptime ayuda a tu proyecto, ¡déjanos una estrella!** Ayuda a que otros desarrolladores encuentren esta solución de monitoreo rentable.
