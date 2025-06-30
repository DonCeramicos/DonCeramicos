// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import  {format}  from 'date-fns';
import { getProducts } from '@/helpers';
import { ICeramicos } from '@/types';

export async function GET() {
  const baseUrl = 'https://donceramicos.com'; // Cambiá esto por tu dominio cuando lo tengas
  const ceramicos = await getProducts(); // Simula acceder a tu contexto (Firebase)
  const today = format(new Date(), 'yyyy-MM-dd');

  const staticRoutes = [
    { loc: '/', priority: 1.0 },
    { loc: '/catalogo', priority: 0.9 },
    { loc: '/#home', priority: 0.8 },
    { loc: '/#contacto', priority: 0.8 },
    { loc: '/catalogo#ofertas', priority: 0.8 },
    { loc: '/catalogo#catalogo', priority: 0.8 }
  ];

  const productRoutes = ceramicos.map((item : ICeramicos) => ({
    loc: `/detailItem/${item.id}`,
    priority: 0.7,
    changefreq: 'weekly',
  }));

  const urls = [...staticRoutes, ...productRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url.loc}</loc>
        <changefreq>${url.changefreq || 'monthly'}</changefreq>
        <priority>${url.priority}</priority>
        <lastmod>${today}</lastmod>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
