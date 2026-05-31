# Mantle Docs

Mantle Docs is a high-performance, read-only document viewer designed specifically for code and raw data files (JSON, TypeScript, CSS, CSV, HTML, YAML, etc.) within your Obsidian vault. It eliminates raw-text editing lag, applying syntax highlighting and syntax structures in a clean interface.

---

## 🎨 Cohesive Styling

Mantle Docs is engineered to inherit aesthetic tokens from the **Project Mantle** core layout. While compatible with any theme, it is optimized to merge with the **Zenith theme**, adopting its code blocks, dark IDE tones, parched light tones, and typography.

---

## ✨ Key Features

* **Instant Syntax Rendering:** Renders complex code documents with custom themes for TypeScript, JSON, CSS, Markdown, YAML, and more.
* **Read-Only Mode Protection:** Prevents accidental keystrokes from modifying code/data records.
* **Large File Optimization:** Built-in virtualization engines allow you to view massive files without lag.
* **Interactive Code Blocks:** Toggle line numbers, wrap lines, and copy snippets with a single click.

---

## 📥 Installation

### Method A: Via Obsidian Community Directory (Recommended)
1. Go to **Settings** > **Community plugins** > **Browse**.
2. Search for **Mantle Docs**.
3. Click **Install**, then click **Enable**.

### Method B: Via BRAT (Beta Reviewer's Auto-update Tester)
1. Install the **BRAT** plugin from Obsidian's community store.
2. In BRAT settings, click **Add Beta plugin** and enter:
   `https://github.com/carnalMATRIX/obsidian-mantle-docs`
3. Click **Add Plugin** to download and auto-update.

### Method C: Manual Installation
1. Download `main.js`, `manifest.json`, and `styles.css` from the latest [GitHub Release](https://github.com/carnalMATRIX/obsidian-mantle-docs/releases).
2. Inside your vault, navigate to `.obsidian/plugins/`.
3. Create a folder named `mantle-docs` and paste the three downloaded files inside.
4. Restart Obsidian, go to **Settings** > **Community plugins**, and enable **Mantle Docs**.

---

## 🔍 Troubleshooting

### Code formatting does not apply
* **File Extensions:** Verify that the file has a recognized code extension (e.g., `.ts`, `.json`, `.css`, `.yaml`). Files with `.txt` extensions will render as plain unhighlighted text.
* **Syntax Conflicts:** Check that another syntax highlighting plugin is not conflicting or attempting to parse the same file types.

### Code is editable instead of read-only
* **Viewer Toggle:** Toggle the reading/preview view inside the tab (using `Cmd+E` or `Ctrl+E`) to ensure the document is set to preview mode.

---

## 🛠️ Development

If you wish to modify or add language highlights to this plugin locally:
1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the compiler in watch mode:
   ```bash
   npm run dev
   ```
4. Build minified production code:
   ```bash
   npm run build
   ```

---

## 📄 License

Copyright (c) 2026 Ryan Bakker. Released under a **Personal Use License**. Non-commercial, personal use only. Redistribution or modification for distribution is strictly prohibited. See the `LICENSE` file for full terms.
