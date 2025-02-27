import Header from "@/components/header";
import About from "@/components/about";
import { HeroParallax } from "@/components/heroparallax";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#1a232e]">
      <Header />
      <div className="relative">
        <HeroParallax products={products} />
        <div className="gradient-02-large z-0" />
      </div>
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <Contact />
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </div>
  );
}
