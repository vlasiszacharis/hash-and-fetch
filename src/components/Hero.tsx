"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 sm:pt-48 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
          Build with confidence,
          <br />
          <span className="text-primary">deliver on time</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-100">
          We help CTOs and product teams speed up development, build scalable
          systems, and ship production-ready code without compromising on
          quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Link
            href="#cta"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#case-studies"
            className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg font-medium transition-colors w-full sm:w-auto text-center"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
