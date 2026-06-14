import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import About from "@/app/components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="relative top-0 z-0  bg-blue-100 ">
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
