import { siteConfig } from "@/config/site.config";

/**
 * Injects the accent colors from site.config.ts as CSS custom properties so
 * that changing a single hex value in the config recolors the entire site.
 * Rendered server-side as a plain <style> tag — no flash, no client JS.
 */
export function ThemeStyle() {
  const { accent, accentSecondary, background } = siteConfig.theme;

  // `:root:root` bumps specificity so these win over globals.css defaults
  // regardless of stylesheet load order.
  const css = `:root:root{--accent:${accent};--accent-secondary:${accentSecondary};}:root:not(.light){--background:${background};}`;

  return <style id="gat-theme" dangerouslySetInnerHTML={{ __html: css }} />;
}
