export function ThemeScript() {
  const script = `
    (() => {
      try {
        const stored = localStorage.getItem("theme");
        const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        document.documentElement.dataset.theme = stored || system;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
