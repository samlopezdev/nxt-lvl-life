import NavAction from "../components/home/NavAction";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import InfoSection from "../components/home/InfoSection";
import VideoSection from "../components/home/VideoSection"
import SummarySection from "../components/home/SummarySection";
import Footer from "../components/home/FooterSection"

export default function Home() {
  
  return (
    <>
      <header className="absolute left-0 top-0 z-10 w-full px-10 py-5 text-white [transition:.5s_ease] xl:px-48">
        <nav className="relative flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold uppercase">Nxt Lvl Life</h2>

          <NavAction />
        </nav>
      </header>

      <main>
        <HeroSection />

        <InfoSection />

        <AboutSection />

        <VideoSection />

        <SummarySection />
      </main>

      <Footer />
    </>
  );
}
