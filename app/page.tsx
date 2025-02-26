import Header from "@/components/header";
import { HomePageBackground } from "@/components/homebackground";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <HomePageBackground />
      <Header />
      <Hero />
    </div>
  );
}
