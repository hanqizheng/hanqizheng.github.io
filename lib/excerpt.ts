export function markdownToPlainText(value: string) {
  return value
    .replace(/!\[([^\]]*)]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/(?:^|\s)[>#-]\s+/g, " ")
    .replace(/[*_`~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatPostExcerpt(value: string, maxLength = 160) {
  const normalized = markdownToPlainText(value);
  const characters = Array.from(normalized);

  if (characters.length <= maxLength) {
    return normalized;
  }

  const clipped = characters
    .slice(0, maxLength)
    .join("")
    .trimEnd()
    .replace(/[，。！？；：、,.!?;:…—-]+$/u, "");

  return `${clipped}…`;
}
