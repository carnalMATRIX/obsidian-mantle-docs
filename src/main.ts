import { Plugin } from "obsidian";
import { DocsView, MANTLE_DOCS_VIEW_TYPE } from "./view";

export default class MantleDocs extends Plugin {
  async onload() {
    console.log("Mantle Docs: Loading plugin...");

    this.registerView(
      MANTLE_DOCS_VIEW_TYPE,
      (leaf) => new DocsView(leaf)
    );

    // Register extensions to open in our custom view
    const extensions = [
        "json", "ts", "js", "mjs", "cjs", 
        "css", "scss", "less", "html", "htm",
        "py", "java", "c", "cpp", "h", "hpp", "cs", "go", "rs", "rb", "php",
        "yaml", "yml", "toml", "ini", "env", "xml", "sql",
        "txt", "log", "sh", "bash", "zsh", "fish",
        "jsonld", "webmanifest"
    ];
    
    try {
      this.registerExtensions(extensions, MANTLE_DOCS_VIEW_TYPE);
    } catch (e) {
      console.warn("Mantle Docs: Could not register some extensions (they might be claimed by other plugins).", e);
    }

    console.log("Mantle Docs loaded");
  }

  async onunload() {
    console.log("Mantle Docs unloaded");
  }
}
