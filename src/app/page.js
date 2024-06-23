import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainLinks } from "./components/MainLinks";
import { SubMenuMain } from "./components/SubMenuMain";

export default function Home() {
  return (
    <main className="bg-[#1a1a1a]">
      <Header />
      <Hero />
      <SubMenuMain />
      <MainLinks />
      <Footer />
    </main>
  );
}
