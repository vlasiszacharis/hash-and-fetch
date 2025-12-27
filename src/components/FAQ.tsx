"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "We specialise in modern web technologies including React, Next.js, Node.js, Python, PostgreSQL, and cloud platforms like AWS, Azure, and GCP. We're also experienced with TypeScript, GraphQL, and various DevOps tools. We adapt to your existing tech stack and can recommend the best tools for your specific needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple MVP can take 4-8 weeks, while larger enterprise solutions may span several months. We provide detailed estimates after our initial discovery call and work in agile sprints to ensure continuous delivery and flexibility.",
  },
  {
    question: "Can you augment our existing team?",
    answer:
      "Absolutely. Team augmentation is one of our core offerings. We can embed engineers directly into your team, adopt your workflows and tools, and work as a seamless extension of your in-house developers. We've helped companies scale from 2 to 20+ engineers.",
  },
  {
    question: "What makes you different from other dev agencies?",
    answer:
      "We focus on production-ready code from day one. Every engineer has at least 5 years of experience building scalable systems. We don't just write code—we understand business context, contribute to architecture decisions, and take ownership of what we build. Plus, we offer ongoing support after delivery.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes, we provide comprehensive post-launch support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We believe in building long-term partnerships and many of our clients have worked with us for years.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <p className="text-white/90 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
