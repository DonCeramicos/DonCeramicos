import { HomeComponent } from "../components/home/index";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main aria-label="zona principal del sitio Don Ceramicos con seccion home y contactanos con formulario de contacto">
      <HomeComponent />
      <Contact />
    </main>
  );
}
