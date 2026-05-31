# Mantle Docs

> [!CAUTION]
> **Status: Beta (v1.0.0)**  
> This plugin is currently in Alpha. Features and UI are subject to change.

Mantle Docs allows you to view code and data files (such as JSON, TypeScript, and CSS) with elegant, read-only formatting directly inside Obsidian. This is ideal for developers who want to reference project files without switching windows.

## Features
- **Elegant Code Views**: Beautifully formatted, read-only views for various file types.
- **Syntax Highlighting**: Supports a wide range of coding and data formats.
- **Zenith Optimized**: Styled to match the [Zenith theme](https://github.com/carnalMATRIX/obsidian-mantle-zenith) for a professional development experience within Obsidian.

## Installation

### Manual Installation
1. Download the `main.js`, `manifest.json`, and `styles.css` from the latest release.
2. Create a folder named `mantle-docs` in your vault's `.obsidian/plugins/` directory.
3. Move the downloaded files into that folder.
4. Restart Obsidian and enable **Mantle Docs** in **Settings > Community plugins**.

## Development

To modify this plugin:
1. Navigate to this directory in your terminal.
2. Install dependencies: `npm install`
3. Build the plugin: `npm run build`
4. For active development, use: `npm run dev`

This plugin is built with TypeScript and esbuild.
