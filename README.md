# CyberShield Security - Company Profile Website

A responsive cybersecurity company website with a retro 8-bit aesthetic, built with Vue.js, Vite, and Tailwind CSS. Designed for deployment as a Portainer stack with Docker and Nginx.

## Features

- **8-bit/retro aesthetic** using pixel fonts and custom CSS effects
- **Responsive design** - works on desktop, tablet, and mobile
- **SEO optimized** - meta tags, sitemap, robots.txt
- **Security hardened** - CSP headers, OWASP protection
- **Fast loading** - optimized build with code splitting
- **Contact form** - Formspree integration (no backend needed)
- **SSL/HTTPS** - handled by Cloudflare

## Tech Stack

- **Frontend**: Vue 3 + Vite
- **UI**: Custom 8-bit styled components
- **Styling**: Tailwind CSS
- **Deployment**: Docker + Nginx
- **SSL**: Cloudflare managed SSL

## Project Structure

```
webportfo/
├── docker-compose.yml          # Portainer stack
├── Dockerfile                  # Multi-stage build
├── nginx/
│   ├── nginx.conf              # Security headers
│   └── default.conf            # Site config
├── src/
│   ├── main.js                 # Entry point
│   ├── App.vue                 # Root component
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Hero, Services, Contact
│   │   └── ui/                 # 8-bit components
│   ├── views/                  # Page components
│   ├── router/                 # Vue Router config
│   └── data/                   # Service content
└── public/                     # Static assets
```

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Docker Deployment

1. Build and start containers:
```bash
docker-compose up -d --build
```

2. View logs:
```bash
docker-compose logs -f web
```

3. Stop containers:
```bash
docker-compose down
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL | - |
| `VITE_DOMAIN` | Your domain name | - |
| `VITE_SITE_NAME` | Site name | CyberShield Security |

## Pages

- **/** - Homepage with hero, services overview, testimonials
- **/services/red-teaming** - Red Teaming service page
- **/services/security-awareness** - Security Awareness training
- **/services/phishing-simulations** - Phishing simulation platform
- **/services/soc-assessment** - SOC maturity assessment
- **/services/outsourcing** - Cybersecurity staff augmentation
- **/about** - Company mission and credentials
- **/contact** - Contact form and lead magnet

## Customization

### Styling

Edit `src/assets/styles/main.css` and `tailwind.config.js` to customize:
- Colors (cyber-green, cyber-pink, cyber-blue)
- Fonts (Press Start 2P, VT323, Share Tech Mono)
- Pixel effects and animations

### Content

Edit `src/data/services.ts` to update service pages content.

### Form Integration

Update `.env` with your Formspree endpoint:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Security Features

- **CSP** - Content Security Policy
- **X-Frame-Options** - Clickjacking protection
- **X-XSS-Protection** - XSS filtering
- **Non-root user** - Container runs as nginx user
- **Read-only filesystem** - Container security
- **SSL/HTTPS** - Managed by Cloudflare

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
