"use client";

import { useState } from "react";
import { ArrowUpRight, Code, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    category: "MG Capital",
    title: "Stock Analysis Platform",
    description:
      "Built a complete investment platform where users can analyse stocks, track their portfolio, and get daily market insights through videos and articles.",
    technologies: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    category: "E-Commerce Brand",
    title: "Online Store & Blog",
    description:
      "Created a beautiful online store with product catalogue, shopping cart, checkout, and an integrated blog for content marketing and SEO.",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
  },
  {
    category: "Healthcare Startup",
    title: "Patient Booking System",
    description:
      "Developed an easy-to-use appointment booking system where patients can find doctors, schedule visits, and receive reminders via email and SMS.",
    technologies: ["React", "Node.js", "MongoDB", "Twilio"],
  },
  {
    category: "Logistics Company",
    title: "Real-time Tracking Dashboard",
    description:
      "Built a dashboard that shows live delivery tracking, route optimisation, and automated customer notifications when packages are on the way.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "WebSocket"],
  },
];

export default function CaseStudies() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              What we&apos;ve built
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors border border-border rounded-lg px-4 py-2 w-fit"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 sm:p-8 transition-colors card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-white/80 text-sm">{study.category}</span>
                <ArrowUpRight className="w-5 h-5 text-muted" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
                {study.title}
              </h3>

              <p className="text-white/90 mb-6 text-base">{study.description}</p>

              <button
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-4"
              >
                <Code className="w-4 h-4" />
                For Geeks
                {expandedCard === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {expandedCard === index && (
                <div className="flex flex-wrap gap-2 animate-fade-in-up">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
