// app/components/FontLoader.tsx (o en cualquier ruta)
"use client";
import Head from "next/head";

export default function FontLoader() {
  return (
    <Head>
      <link
        href="https://fonts.cdnfonts.com/css/bright-almond-personal-use-only"
        rel="stylesheet"
      />
    </Head>
  );
}
