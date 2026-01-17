import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-primary/15 rounded-full blur-[180px]" />
          <div className="absolute top-[400px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[1000px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[1600px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[2200px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[2800px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[3400px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[4000px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute top-[4600px] left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1600px] h-[1000px] bg-primary/13 rounded-full blur-[200px]" />
        </div>
        <div className="relative">
          <Hero />
          <Services />
          <CaseStudies />
          <HowWeWork />
          <FAQ />
          <CTA />
          <Team />
        </div>
      </main>
      <Footer />
    </>
  );
}
