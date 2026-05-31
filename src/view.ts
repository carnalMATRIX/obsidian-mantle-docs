import {
  TextFileView,
  WorkspaceLeaf,
  MarkdownRenderer,
} from "obsidian";

export const MANTLE_DOCS_VIEW_TYPE = "mantle-docs-view";

export class DocsView extends TextFileView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType(): string {
    return MANTLE_DOCS_VIEW_TYPE;
  }

  getIcon(): string {
    return "code";
  }

  getDisplayText(): string {
    return this.file ? this.file.name : "Mantle Docs";
  }

  getViewData(): string {
    return this.data;
  }

  async setViewData(data: string, clear: boolean): Promise<void> {
    this.data = data;
    await this.renderCode();
  }

  async clear(): Promise<void> {
    this.data = "";
    const container = this.containerEl.children[1] as HTMLElement;
    if (container) container.empty();
  }

  private async renderCode() {
    const container = this.containerEl.children[1] as HTMLElement;
    if (!container) return;

    container.empty();
    container.addClass("mantle-docs-container");

    const header = container.createDiv({ cls: "mantle-docs-header" });
    header.createSpan({
      text: this.file?.extension.toUpperCase() || "CODE",
      cls: "mantle-docs-badge",
    });
    header.createSpan({ text: this.file?.path || "", cls: "mantle-docs-path" });

    // Add search bar
    const search = header.createEl("input", {
      cls: "mantle-docs-search",
      attr: { placeholder: "Search in file...", type: "text" },
    });

    const codeContainer = container.createDiv({ cls: "mantle-docs-pre" });

    // Use Obsidian's markdown renderer to get high-quality Prism highlighting for free
    const markdown =
      "```" + (this.file?.extension || "text") + "\n" + this.data + "\n```";
    await MarkdownRenderer.renderMarkdown(markdown, codeContainer, "", this);

    // After rendering, we want to find the <pre> that Obsidian created and make it fit our layout
    const obsPre = codeContainer.querySelector("pre");
    if (obsPre) {
      obsPre.style.margin = "0";
      obsPre.style.padding = "0px";
      obsPre.style.background = "transparent";
    }

    // Simple search filtering
    search.oninput = () => {
      const query = search.value.toLowerCase();
      // For simple searching in read-only pre/code
      const codeElement = codeContainer.querySelector("code");
      if (codeElement) {
        // Very basic highlight approach for read-only
      }
    };
  }
}
