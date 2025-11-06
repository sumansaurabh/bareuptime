# 🚀 BareUptime

[![Demo en Vivo](https://img.shields.io/badge/Demo-En_Vivo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![Lanzar App](https://img.shields.io/badge/App-Lanzar-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![Estrellas GitHub](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **Monitoreo de disponibilidad de nivel empresarial a precios para startups** - Monitorea tus sitios web y APIs con 99.9% de confiabilidad por solo $50/año en lugar de $360+/año de la competencia.

## 🤔 ¿Por qué BareUptime?

Las herramientas tradicionales de monitoreo de disponibilidad son **ridículamente caras**. Todo lo que realmente necesitamos es un sistema que responda dos preguntas simples:

1. **¿Mi sitio web/API está funcionando?**
2. **¿Puede notificarme inmediatamente** — en móvil, Slack, Discord o email?

Eso es todo. No necesitamos dashboards animados elaborados ni llamadas de ventas empresariales.

### El Problema con las Soluciones Actuales

La mayoría de las herramientas bloquean características esenciales detrás de costosos muros de pago:
- 📱 **¿Notificaciones push móviles?** *Premium - $20/mes*
- 🔗 **¿Acceso API/Webhooks?** *Premium - $10/mes*
- 🌍 **¿Monitoreo global?** *Premium - $15/mes*
- 🔒 **¿Monitoreo SSL?** *Premium - $10/mes*

**Total: $360+/año** por características que cuestan centavos ejecutar.

## ✨ Qué Hace Diferente a BareUptime

### 🏆 Características Que Deberían Ser Gratuitas (¡Y Lo Son!)

| Característica | BareUptime | UptimeRobot | Otros |
|----------------|------------|-------------|-------|
| **Apps Móviles (iOS/Android)** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Monitoreo de Certificados SSL** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Integraciones Webhook** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Gratis | ✅ Gratis | ❌ Premium |
| **Monitoreo de Red Global** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Acceso API** | ✅ Gratis | ❌ Premium | ❌ Premium |
| **Costo Anual** | **$50** | $360+ | $400+ |

### 💰 Desglose Honesto de Precios

Esto no es software hinchado respaldado por capital riesgo. Esto es exactamente lo que cubren tus $50/año:

| Componente de Infraestructura | Costo Mensual |
|-------------------------------|---------------|
| Pools de trabajadores globales (8 ubicaciones) | $92.00 |
| Servidores API y bases de datos | $24.00 |
| Infraestructura de email/notificaciones | $50.00 |
| Tarifas de tiendas de apps móviles | $8.25 |
| Procesamiento de pagos | $22.50 |
| **Costo mensual total** | **$196.75** |

**Costo por usuario (10K usuarios): $0.20/mes**
**Nuestro precio: $4.17/mes ($50/año)**
**Promedio de la industria: $30+/mes**

## 🚀 Inicio Rápido

### Opción 1: Usar Nuestro Servicio Hospedado
1. Visita [app.bareuptime.co](https://app.bareuptime.co)
2. Agrega la URL de tu sitio web
3. Obtén monitoreo instantáneo + apps móviles
4. **Nivel gratuito**: 10 monitores, todas las características incluidas

### Opción 2: Auto-hospedaje (Próximamente)
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Componentes UI**: Radix UI, shadcn/ui
- **Base de Datos**: Supabase (PostgreSQL)
- **Monitoreo**: Pools de trabajadores globales
- **Notificaciones**: Push, Email, Webhooks, Slack, Discord
- **Apps Móviles**: React Native (iOS y Android)

## 📋 Características

### Monitoreo Principal
- ✅ **Monitoreo de sitios web y APIs** (GET, POST, PUT, DELETE)
- ✅ **Seguimiento de expiración de certificados SSL**
- ✅ **Headers personalizados y autenticación**
- ✅ **Monitoreo global desde más de 8 ubicaciones**
- ✅ **Intervalos de verificación de 1 minuto a 1 hora**

### Alertas Inteligentes
- ✅ **Notificaciones push móviles** (apps iOS y Android)
- ✅ **Alertas por email** con línea de tiempo de incidentes
- ✅ **Integración con Slack, Discord, Teams**
- ✅ **Notificaciones webhook** para flujos de trabajo personalizados
- ✅ **Escalado de alertas** y enrutamiento de guardia

### Experiencia del Desarrollador
- ✅ **Páginas de estado públicas** para cada monitor
- ✅ **REST API** para automatización
- ✅ **Soporte MCP (Model Context Protocol)**
- ✅ **Dashboard en tiempo real**
- ✅ **Línea de tiempo de incidentes** y análisis de causa raíz

## 🌍 Infraestructura Global

Nuestra red de monitoreo abarca:
- 🇺🇸 **Estados Unidos** (Costa Este y Oeste)
- 🇩🇪 **Alemania** (Frankfurt)
- 🇨🇦 **Canadá** (Toronto)
- 🇮🇳 **India** (Mumbai)
- 🇦🇺 **Australia** (Sídney)
- *Más ubicaciones agregadas según demanda*

## 📱 Apps Móviles

Descarga nuestras apps móviles nativas para alertas críticas:

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *Próximamente*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *Próximamente*

## 🧑‍💻 Contribuir

¡Damos la bienvenida a las contribuciones! Este proyecto está construido por desarrolladores que estaban cansados de las herramientas de monitoreo sobrevaloradas.

### Desarrollo Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Configuración del Entorno**
   ```bash
   cp .env.example .env.local
   # Agrega tus claves API de Supabase y otras
   ```

4. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

5. **Abrir navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

### Estructura del Proyecto
```
bareuptime/
├── app/                 # Next.js app router
│   ├── api/            # Rutas API
│   ├── components/     # Componentes específicos de página
│   └── globals.css     # Estilos globales
├── components/         # Componentes UI compartidos
│   └── ui/            # Componentes shadcn/ui
├── hooks/             # Hooks personalizados de React
├── lib/               # Funciones de utilidad
└── public/            # Assets estáticos
```

## 🎯 Hoja de Ruta

### ✅ Completado (v1.0)
- [x] Monitoreo básico de disponibilidad
- [x] Dashboard web
- [x] Notificaciones por email
- [x] Integraciones webhook
- [x] Monitoreo SSL
- [x] Red de monitoreo global

### 🚧 En Progreso (v1.1)
- [ ] Apps móviles (iOS y Android)
- [ ] Enrutamiento avanzado de alertas
- [ ] Documentación API
- [ ] Auto-hospedaje con Terraform

### 🎯 Futuro (v2.0)
- [ ] Monitoreo de rendimiento
- [ ] Agregación de logs
- [ ] Métricas personalizadas
- [ ] Características de colaboración en equipo

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙋‍♂️ Soporte

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [Únete a nuestra comunidad](https://discord.gg/bareuptime)
- 🐛 **Reportes de Bugs**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentación**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 Acerca de

Construido por [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify), BareUptime fue creado por frustración con las herramientas de monitoreo empresarial sobrevaloradas que cobran cientos de dólares por funcionalidad básica.

**Nuestra misión**: Proporcionar infraestructura de monitoreo de nivel empresarial a precios amigables para startups.

---

⭐ **¡Si BareUptime ayuda a tu proyecto, por favor danos una estrella!** Ayuda a otros desarrolladores a encontrar esta solución de monitoreo rentable.
