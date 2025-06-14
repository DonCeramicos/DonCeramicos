import { HomeComponent } from "../components/home/index";
import { Footer } from "../components/footer";
import Contact from "@/components/contact";
import { ProductList } from "@/components/ProductList";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <ProductList />
      <Contact />
      <Footer />
    </>
  );
}
