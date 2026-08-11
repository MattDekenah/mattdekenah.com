/**
 * Renders the small subset of markdown used inside single-line CV fields:
 * `**bold**`, `*italic*` and `[text](url)`. Everything else is escaped, so
 * content coming out of the CMS can never inject markup.
 *
 * Multi-paragraph copy (the hero blurb, the professional profile) uses real
 * markdown bodies and Astro's own renderer instead — this is only for the
 * one-line list items where a rich-text editor would be overkill.
 */

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

const escape = (value: string) => value.replace(/[&<>"]/g, (c) => ESCAPES[c]!);

/**
 * Encodes every character as an HTML numeric entity. Browsers decode it
 * transparently; the naive address harvesters that trawl for `name@domain`
 * in page source do not. The original site did the same by hand.
 */
export function obfuscate(text: string): string {
  return [...text].map((c) => `&#${c.codePointAt(0)};`).join("");
}

export function inlineMarkdown(text: string): string {
  return escape(text)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
