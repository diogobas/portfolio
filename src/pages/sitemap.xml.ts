const siteUrl = (import.meta.env.PUBLIC_SITE_URL || 'https://diogobastos.pages.dev').replace(
  /\/$/,
  ''
);

const paths = ['/', '/projects/', '/experience/', '/resume/', '/certifications/'];

export function GET() {
  const urls = paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
