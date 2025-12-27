"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Kickstart your project in 2 weeks
        </h2>

        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Book a free consultation with our team. We&apos;ll discuss your
          project requirements, recommend the best approach, and show you how we
          can help you ship faster.
        </p>

        <Link
          href="mailto:hello@hashandfetch.com"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
