import Brands from "@/components/brands";
import Hero from "@/components/hero";
import ProductCarousel from "@/components/product-carousel";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <Hero />
      <Brands />
      <ProductCarousel />
    </div>
  );
}
