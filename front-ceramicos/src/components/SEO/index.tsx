// src/components/SEO.tsx
import { SEOProps } from "@/types";
import Head from "next/head";



export const SEO = ({
  title = "Don Cerámicos - Calidad y diseño en cerámicos",
  description = "Descubrí nuestra amplia variedad de cerámicos para pisos y paredes, con calidad premium y diseños exclusivos. ¡Envíos a todo el país!",
  keywords = "cerámicos, pisos, paredes, calidad, diseño, Don Cerámicos, azulejos, revestimientos",
  canonicalUrl = "https://donceramicos.com",
  ogImage = "/favicon/favicon-96x96.png", // Reemplazalo por una imagen real
}: SEOProps) => (
  <Head>
    {/* Básicos */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={canonicalUrl} />

    {/* Móviles */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />

    {/* Open Graph (FB, IG, WhatsApp) */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={ogImage} />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    {/* Favicon desde /public/favicon */}
    <link rel="icon" href="/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />

    {/* Google site verification (si usás Search Console) */}
    {/* <meta name="google-site-verification" content="TU_TOKEN_VERIFICACION" /> */}
  </Head>
);
