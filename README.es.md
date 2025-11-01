# 🚀 BareUptime

[![Demostración en Vivo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![Lanzamiento de la App](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![Estrellas en GitHub](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **Monitoreo de uptime de nivel empresarial a precio de startup**: supervisa tus sitios web y APIs con un 99.9% de fiabilidad por solo $50/año en lugar de $360+/año con la competencia.

## 🤔 ¿Por qué BareUptime?

Las herramientas tradicionales de monitoreo son **ridículamente caras**. Realmente solo necesitamos un sistema que responda dos preguntas sencillas:

1. **¿Mi sitio web/API está en línea?**
2. **¿Puede avisarme de inmediato** — en móvil, Slack, Discord o email?

Eso es todo. No necesitamos paneles animados ni llamadas de ventas.

### El problema con las soluciones actuales

La mayoría oculta funciones esenciales tras muros de pago:
- 📱 **Notificaciones push móviles?** *Premium - $20/mes*
- 🔗 **Acceso API/Webhooks?** *Premium - $10/mes*
- 🌍 **Monitoreo global?** *Premium - $15/mes*
- 🔒 **Monitoreo SSL?** *Premium - $10/mes*

**Total: $360+/año** por funciones que cuestan centavos.

## ✨ Qué hace diferente a BareUptime

### 🏆 Funciones que deberían ser gratuitas (¡y lo son!)

| Función | BareUptime | UptimeRobot | Otros |
|---------|------------|-------------|--------|
| **Apps móviles (iOS/Android)** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Monitoreo de certificados SSL** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Integraciones Webhook** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Monitoreo global** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Acceso a la API** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Costo anual** | **$50** | $360+ | $400+ |

### 💰 Desglose de precios transparente

Esto no es software inflado por capital riesgo. Esto cubre tus $50/año:

| Componente de infraestructura | Costo mensual |
|------------------------------|---------------|
| Pools globales (8 ubicaciones) | $92.00 |
| Servidores API y bases de datos | $24.00 |
| Infraestructura de notificaciones | $50.00 |
| Tarifas de tiendas móviles | $8.25 |
| Procesamiento de pagos | $22.50 |
| **Costo mensual total** | **$196.75** |

**Costo por usuario (10K usuarios): $0.20/mes**
**Nuestro precio: $4.17/mes ($50/año)**
**Promedio del sector: $30+/mes**

## 🚀 Primeros pasos

### Opción 1: Usa nuestro servicio alojado
1. Visita [app.bareuptime.co](https://app.bareuptime.co)
2. Agrega la URL de tu sitio
3. Obtén monitoreo instantáneo + apps móviles
4. **Plan gratuito**: 10 monitores, todas las funciones incluidas

### Opción 2: Autoalojado (Próximamente)
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

## 📋 Funcionalidades

### Monitoreo principal
- ✅ **Monitoreo de sitios web y APIs** (GET, POST, PUT, DELETE)
- ✅ **Seguimiento de expiración SSL**
- ✅ **Encabezados y autenticación personalizados**
- ✅ **Monitoreo global desde 8+ ubicaciones**
- ✅ **Intervalos de 1 minuto a 1 hora**

### Alertas inteligentes
- ✅ **Notificaciones push móviles** (apps iOS y Android)
- ✅ **Alertas por email** con cronología de incidentes
- ✅ **Integración con Slack, Discord, Teams**
- ✅ **Webhooks** para flujos personalizados
- ✅ **Escalamiento de alertas** y turnos on-call

### Experiencia para desarrolladores
- ✅ **Páginas de estado públicas** por monitor
- ✅ **API REST** para automatización
- ✅ **Soporte MCP (Model Context Protocol)**
- ✅ **Panel en tiempo real**
- ✅ **Cronología de incidentes** y análisis de causa raíz

## 🌍 Infraestructura global

Nuestra red de monitoreo abarca:
- 🇺🇸 **Estados Unidos** (Costa Este y Oeste)
- 🇩🇪 **Alemania** (Fráncfort)
- 🇨🇦 **Canadá** (Toronto)
- 🇮🇳 **India** (Mumbai)
- 🇦🇺 **Australia** (Sídney)
- *Más ubicaciones según demanda*

## 📱 Apps móviles

Descarga nuestras apps nativas para alertas críticas:

- 📱 [App Store iOS](https://apps.apple.com/app/bareuptime) - *Próximamente*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *Próximamente*

## 🧑‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Este proyecto nace de desarrolladores cansados de herramientas carísimas.

### Desarrollo local

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Instala dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Configura el entorno**
   ```bash
   cp .env.example .env.local
   # Añade tus claves de Supabase y otras APIs
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

5. **Abre el navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

### Estructura del proyecto
```
bareuptime/
├── app/                 # App router de Next.js
│   ├── api/            # Rutas API
│   ├── components/     # Componentes específicos por página
│   └── globals.css     # Estilos globales
├── components/         # Componentes UI compartidos
│   └── ui/            # Componentes shadcn/ui
├── hooks/             # Hooks React personalizados
├── lib/               # Funciones utilitarias
└── public/            # Recursos estáticos
```

## 🎯 Hoja de ruta

### ✅ Completado (v1.0)
- [x] Monitoreo central de uptime
- [x] Panel web
- [x] Notificaciones por email
- [x] Integraciones webhook
- [x] Monitoreo SSL
- [x] Red global de monitoreo

### 🚧 En progreso (v1.1)
- [ ] Apps móviles (iOS y Android)
- [ ] Enrutamiento avanzado de alertas
- [ ] Documentación de la API
- [ ] Autoalojado con Terraform

### 🎯 Futuro (v2.0)
- [ ] Monitoreo de rendimiento
- [ ] Agregación de logs
- [ ] Métricas personalizadas
- [ ] Funciones de colaboración en equipo

## 📄 Licencia

Este proyecto está bajo licencia MIT; consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙋‍♂️ Soporte

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [Únete a la comunidad](https://discord.gg/bareuptime)
- 🐛 **Reportes de bugs**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentación**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 Sobre nosotros

Creado por [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify), BareUptime nació del hartazgo con herramientas de monitoreo empresariales que cobran cientos de dólares por funciones básicas.

**Nuestra misión**: Proporcionar monitoreo de nivel empresarial a precios accesibles para startups.

---

⭐ **Si BareUptime ayuda a tu proyecto, danos una estrella.** ¡Así más desarrolladores encuentran esta solución rentable!
