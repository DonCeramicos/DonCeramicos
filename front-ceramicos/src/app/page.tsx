import { HomeComponent } from "../components/home/index";
import { Footer } from "../components/footer";
import Contact from "@/components/contact";
import { ProductList } from "@/components/ProductList";
import { Navbar } from "@/components/navbar";
import { Offers } from "@/components/offers";
import WhatsAppFloatingButton from "../components/whatsApp-Button";
import { Carousel } from "@/components/carousel";
export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />
      <HomeComponent />
      <ProductList />
      <Offers />
      <Contact />
      <Footer />
      <Carousel />
    </>
  );
}
