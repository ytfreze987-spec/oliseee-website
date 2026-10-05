import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import { ErrorBoundary } from "./components/ErrorBoundary";
import CarbonCursor from "./components/CarbonCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Videos from "./components/Videos";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: false,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -70 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#060709] font-body text-[#F2F4F8] antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <CarbonCursor />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Videos />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
