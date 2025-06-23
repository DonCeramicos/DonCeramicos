import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Philosopher,
  Phudu,
  Poiret_One,
  Rancho,
} from "next/font/google";
import { Context } from "@/context/context";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/whatsApp-Button";
import FontLoader from "@/components/fontProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Don Cerámicos | Cerámicos de calidad y diseño",
    description:
      "Descubrí nuestra amplia variedad de cerámicos para pisos y paredes con calidad premium. Envíos a todo el país.",
  };
}

const phudu = Phudu({
  variable: "--font-phudu",
  subsets: ["latin"],
});

const porietOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: "400",
});

const rancho = Rancho({
  variable: "--font-rancho",
  subsets: ["latin"],
  weight: "400",
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Context>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${porietOne.variable}  ${phudu.variable} ${rancho.variable} ${philosopher.variable} antialiased`}
        >

          <Navbar />
          {children}
          <Toaster
            position="top-center"
            style={{ zIndex: 999, fontFamily: "rancho" }}
          />
          <WhatsAppFloatingButton />
          <Footer />
        </body>
      </Context>
    </html>
  );
}
