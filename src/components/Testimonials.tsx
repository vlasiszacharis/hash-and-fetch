"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Hash & Fetch transformed our development velocity. What used to take us months now ships in weeks. Their team integrated seamlessly with ours and delivered exceptional quality from day one.",
    author: "Sarah Chen",
    role: "CTO at MG Capital",
  },
  {
    quote:
      "Working with Hash & Fetch felt like having a senior engineering team on demand. They understood our architecture immediately and started contributing meaningful code within days.",
    author: "Marcus Williams",
    role: "VP Engineering at FinServe",
  },
  {
    quote:
      "The team's expertise in cloud infrastructure saved us countless hours. They set up our entire CI/CD pipeline and helped us achieve 99.9% uptime. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Head of Product at MedTech",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <div className="bg-card rounded-2xl p-8 sm:p-12 card-hover">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <blockquote className="text-xl sm:text-2xl font-medium mb-8 leading-relaxed">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {testimonials[activeIndex].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-semibold">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-white/80 text-base">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
