import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-primary/25 rounded-full blur-[180px]" />
          <div className="absolute top-[600px] -right-[200px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
          <div className="absolute top-[1200px] -left-[200px] w-[700px] h-[700px] bg-primary/18 rounded-full blur-[140px]" />
          <div className="absolute top-[1800px] right-[10%] w-[900px] h-[800px] bg-primary/20 rounded-full blur-[160px]" />
          <div className="absolute top-[2500px] -left-[100px] w-[800px] h-[700px] bg-primary/18 rounded-full blur-[150px]" />
          <div className="absolute top-[3200px] right-[20%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px]" />
          <div className="absolute top-[3800px] left-[30%] w-[900px] h-[800px] bg-primary/22 rounded-full blur-[170px]" />
          <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/20 rounded-full blur-[150px]" />
        </div>
        <div className="relative">
          <Hero />
          <Services />
          <CaseStudies />
          <HowWeWork />
          <Testimonials />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
