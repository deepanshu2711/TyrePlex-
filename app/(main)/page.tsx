import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSlider from "@/components/MainSlider";
import Reviews from "@/components/Reviews";
import ServicesOffered from "@/components/ServicesOffered";

export default function Home() {
  return (
    <div className="bg-[#F5F6F9] min-h-screen">
      <Header />
      <MainSlider />
      <Hero />
      <Reviews />
      <ServicesOffered />
    </div>
  );
}
