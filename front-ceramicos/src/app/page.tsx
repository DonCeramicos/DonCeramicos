import { HomeComponent } from "../components/home/index";
import Contact from "@/components/contact";
import WhatsAppFloatingButton from "../components/whatsApp-Button";
export default function Home() {
  return (
    <>
      <WhatsAppFloatingButton />
      <HomeComponent />
      <Contact />
    </>
  );
}
