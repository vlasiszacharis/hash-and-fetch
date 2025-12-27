"use client";

import {
  Zap,
  Gauge,
  Eye,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Quick Ramp-up",
    description:
      "We onboard fast and hit the ground running. Expect meaningful contributions within the first week.",
  },
  {
    icon: Gauge,
    title: "Development Velocity",
    description:
      "We focus on shipping features consistently. No fluff, just measurable progress every sprint.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Daily standups, shared Slack channels, and full visibility into progress via your project management tools.",
  },
  {
    icon: ShieldCheck,
    title: "Production-ready",
    description:
      "We write clean, tested, documented code. Every PR is reviewed and meets your team's standards.",
  },
  {
    icon: TrendingUp,
    title: "Scale on Demand",
    description:
      "Need more capacity? We can scale the team up or down based on your project needs.",
  },
  {
    icon: Wrench,
    title: "We Build It, We Run It",
    description:
      "We don't just deliver code. We support, monitor, and maintain what we build.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            How We Work
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 transition-colors group card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {step.title}
              </h3>

              <p className="text-white/90 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
