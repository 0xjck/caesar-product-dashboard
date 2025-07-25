# Caesar Product Dashboard

A comprehensive product dashboard for Caesar AI featuring PRDs, design system access, interactive prototypes, and development tools.

## Features

- **Product Dashboard**: Central hub for Caesar product development
- **Current PRDs**: Active product requirements with direct Jira integration
- **Design System**: Quick access to Figma design files and Storybook components
- **Prototype Access**: Direct links to mobile and desktop prototypes
- **Coming Soon**: Preview of upcoming tools and resources
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Version Management**: Automated version display and tracking

## Components

- **Main Dashboard**: Clean layout with key product sections
- **Navigation Header**: Transparent header with prototype access and admin tools
- **PRD Management**: Live links to Jira boards and project tracking
- **Design Resources**: Direct access to Figma files and component libraries
- **Settings Integration**: Mobile and desktop settings interface prototypes

## Usage

Open `index.html` in a web browser to view the prototype.

### View Modes

- **Desktop**: Full-width layout with side navigation
- **Mobile**: Phone-like container (390px) with mobile-optimized interactions

### Navigation

- Click the hamburger menu to toggle navigation
- Navigation pushes chat content (desktop) or overlays (mobile)
- In mobile view, navigation hides input area when expanded

## Development

This is a static HTML prototype built for rapid iteration and testing of UI/UX concepts.

Built with vanilla HTML, CSS, and JavaScript - no dependencies required.

### Version Management

The version number displayed on the main page is automatically injected at build time:

```bash
# Inject current version
npm run build

# Or manually
node inject-version.js
```

**Version Sources (in priority order):**
1. `package.json` version field
2. Latest git tag (`git describe --tags --abbrev=0`)
3. Git commit hash (fallback: `v0.0.0-<hash>`)
4. Default: `v1.0.0-dev`

### Build Scripts

```bash
npm run build        # Inject version into HTML
npm run dev          # Inject version and open in browser  
npm run version:inject # Just inject version
```