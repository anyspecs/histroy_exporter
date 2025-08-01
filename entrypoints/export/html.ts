export function simplifyHtml(html: string): string {
  return html
    .replace(/<(\w+)\s+[^>]*>/g, '<$1>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function formatHtmlMetadata(url: string, platform: string): string {
  return `<h1>Conversation extracted from ${url}</h1><p><strong>Platform:</strong> ${platform}</p><p><strong>Format:</strong> html</p>`;
}

export function formatHtmlMessage(speaker: string, text: string): string {
  return `<h2>${speaker}:</h2><div>${text}</div>`;
}

export function downloadHtml(content: string): string {
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `conversation_${new Date().toISOString().replace(/[:.]/g, '-')}.html`;
  a.click();
  URL.revokeObjectURL(url);
  return 'File download initiated';
}