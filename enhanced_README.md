# BareUptime

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/bareuptime/bareuptime.svg)](https://github.com/bareuptime/bareuptime/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/bareuptime/bareuptime.svg)](https://github.com/bareuptime/bareuptime/issues)

A lightweight, minimalist uptime monitoring solution designed to be simple, efficient, and easy to deploy. BareUptime provides essential website monitoring capabilities without the complexity of enterprise-grade solutions.

## ✨ Features

- **Lightweight & Fast**: Minimal resource consumption with maximum performance
- **Simple Configuration**: Easy setup with minimal configuration required
- **Multiple Monitoring Types**: HTTP/HTTPS, TCP, and ping monitoring
- **Flexible Notifications**: Email, Slack, Discord, and webhook integrations
- **Status Page**: Clean, customizable status page for public or private use
- **Historical Data**: Track uptime statistics and response times over time
- **Docker Ready**: Quick deployment with Docker and Docker Compose
- **Self-Hosted**: Complete control over your monitoring data
- **API Access**: RESTful API for integration with other tools

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ or Docker
- A database (SQLite for development, PostgreSQL/MySQL for production)

### Installation Options

#### Option 1: Using npm/yarn

```bash
# Clone the repository
git clone https://github.com/bareuptime/bareuptime.git
cd bareuptime

# Install dependencies
npm install
# or
yarn install

# Configure your environment
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run migrate

# Start the application
npm start
```

#### Option 2: Using Docker

```bash
# Clone the repository
git clone https://github.com/bareuptime/bareuptime.git
cd bareuptime

# Start with Docker Compose
docker-compose up -d
```

#### Option 3: Using Docker Hub

```bash
# Create a docker-compose.yml
curl -o docker-compose.yml https://raw.githubusercontent.com/bareuptime/bareuptime/main/docker-compose.example.yml

# Configure environment variables
cp .env.example .env
# Edit .env with your settings

# Start the service
docker-compose up -d
```

## 📋 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Application
NODE_ENV=production
PORT=3000
BASE_URL=https://your-domain.com

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/bareuptime
# or for SQLite
DATABASE_URL=sqlite:./data/bareuptime.db

# Authentication (optional)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password

# Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=BareUptime <noreply@your-domain.com>

# Slack Integration (optional)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK

# Discord Integration (optional)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR/DISCORD/WEBHOOK
```

### Monitor Configuration

Add monitors via the web interface or API:

```json
{
  "name": "My Website",
  "url": "https://example.com",
  "method": "GET",
  "interval": 60,
  "timeout": 10,
  "expectedStatus": 200,
  "notifications": ["email", "slack"]
}
```

## 🔧 Usage

### Web Interface

1. Access the dashboard at `http://localhost:3000`
2. Log in with your admin credentials (if authentication is enabled)
3. Add monitors using the "Add Monitor" button
4. Configure notification channels in Settings
5. View your status page at `http://localhost:3000/status`

### API Usage

#### Authentication

```bash
# Login to get JWT token (if authentication enabled)
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your-password"}'
```

#### Manage Monitors

```bash
# List all monitors
curl -X GET http://localhost:3000/api/monitors \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create a new monitor
curl -X POST http://localhost:3000/api/monitors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Example Site",
    "url": "https://example.com",
    "interval": 60
  }'

# Get monitor status
curl -X GET http://localhost:3000/api/monitors/1/status \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🏗️ Architecture

BareUptime follows a simple architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Dashboard │    │   API Server    │    │   Monitor Jobs  │
│                 │◄──►│                 │◄──►│                 │
│   React/Vue     │    │   Node.js/      │    │   Background    │
│   Frontend      │    │   Express       │    │   Workers       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │    Database     │
                       │                 │
                       │ SQLite/MySQL/   │
                       │ PostgreSQL      │
                       └─────────────────┘
```

## 🔍 Monitoring Types

### HTTP/HTTPS Monitoring

- Status code validation
- Response time measurement
- Content validation (keyword matching)
- Custom headers support
- SSL certificate expiration alerts

### TCP Port Monitoring

- Port connectivity checks
- Response time measurement
- Custom timeout settings

### Ping Monitoring

- ICMP ping tests
- Packet loss detection
- Network latency measurement

## 🔔 Notification Channels

### Email Notifications

Configure SMTP settings to receive email alerts when monitors go down or come back up.

### Slack Integration

```bash
# Add Slack webhook URL to your environment
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

### Discord Integration

```bash
# Add Discord webhook URL to your environment
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR/DISCORD/WEBHOOK
```

### Custom Webhooks

Configure custom webhook endpoints to integrate with any service:

```json
{
  "type": "webhook",
  "url": "https://your-api.com/webhook",
  "headers": {
    "Authorization": "Bearer YOUR_TOKEN"
  },
  "payload": {
    "event": "{{event}}",
    "monitor": "{{monitor.name}}",
    "status": "{{status}}"
  }
}
```

## 📊 Status Pages

Create beautiful status pages to keep your users informed:

### Public Status Page

- Clean, responsive design
- Real-time status updates
- Historical uptime data
- Incident timeline
- Custom branding options

### Private Status Pages

- Password protected access
- Team-specific information
- Internal incident management

## 🛠️ Development

### Local Development Setup

```bash
# Clone and install
git clone https://github.com/bareuptime/bareuptime.git
cd bareuptime
npm install

# Setup development database
cp .env.example .env.development
npm run migrate:dev

# Start development server
npm run dev
```

### Building from Source

```bash
# Build the application
npm run build

# Run in production mode
npm start
```

### Running Tests

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run with coverage
npm run test:coverage
```

## 📦 Deployment

### Production Deployment

#### Using PM2

```bash
# Install PM2 globally
npm install -g pm2

# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Using Docker in Production

```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  bareuptime:
    image: bareuptime/bareuptime:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/bareuptime
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:14
    environment:
      POSTGRES_DB: bareuptime
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

#### Reverse Proxy Configuration

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Follow the existing code style
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features

## 🐛 Troubleshooting

### Common Issues

#### Monitor Not Working

1. Check network connectivity from the server
2. Verify URL is correct and accessible
3. Check firewall settings
4. Review monitor configuration

#### Notifications Not Sending

1. Verify notification channel configuration
2. Check SMTP/webhook settings
3. Review application logs
4. Test notification channels manually

#### Database Connection Issues

1. Verify database credentials
2. Check database server is running
3. Ensure database exists and is accessible
4. Review connection string format

### Logs and Debugging

```bash
# View application logs
tail -f logs/bareuptime.log

# Debug mode
NODE_ENV=development DEBUG=bareuptime:* npm start

# Docker logs
docker logs bareuptime-app
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

### Monitor Endpoints

- `GET /api/monitors` - List all monitors
- `POST /api/monitors` - Create a new monitor
- `GET /api/monitors/:id` - Get monitor details
- `PUT /api/monitors/:id` - Update monitor
- `DELETE /api/monitors/:id` - Delete monitor
- `GET /api/monitors/:id/stats` - Get monitor statistics

### Status Endpoints

- `GET /api/status` - Get overall status
- `GET /api/status/:id` - Get monitor status
- `GET /api/incidents` - List incidents

For detailed API documentation, visit `/api/docs` when the application is running.

## 🔒 Security

### Best Practices

- Use strong passwords for admin accounts
- Enable HTTPS in production
- Keep the application updated
- Use environment variables for sensitive data
- Configure proper firewall rules
- Regular security audits

### Reporting Security Issues

Please report security vulnerabilities to security@bareuptime.com. Do not create public issues for security concerns.

## 📈 Performance

### Optimization Tips

- Use a production-grade database (PostgreSQL/MySQL)
- Configure proper monitoring intervals
- Use caching for status pages
- Monitor resource usage
- Scale horizontally with load balancers

### Resource Requirements

**Minimum Requirements:**
- CPU: 1 core
- RAM: 512MB
- Storage: 1GB
- Network: Stable internet connection

**Recommended for Production:**
- CPU: 2+ cores
- RAM: 2GB+
- Storage: 10GB+ (for historical data)
- Network: Redundant connections

## 🌐 Community

- **GitHub Issues**: [Bug reports and feature requests](https://github.com/bareuptime/bareuptime/issues)
- **Discussions**: [Community discussions](https://github.com/bareuptime/bareuptime/discussions)
- **Discord**: [Join our community](https://discord.gg/bareuptime)
- **Twitter**: [@bareuptime](https://twitter.com/bareuptime)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who help make BareUptime better
- Inspired by other uptime monitoring solutions
- Built with love for the open-source community

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes in each version.

---

<div align="center">
  <strong>Made with ❤️ by the BareUptime team</strong>
  <br>
  <a href="https://github.com/bareuptime/bareuptime">⭐ Star us on GitHub</a>
</div>
