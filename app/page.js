import Image from "next/image";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <h1><strong>Bakit Late</strong></h1>
      <p>Wala po akong laptop.</p>
      <Footer />
    </div>
  );
}
