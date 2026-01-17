"use client";

import { Code2, Database, Cloud, Brain } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end development of web applications, APIs, and microservices tailored to your business needs.",
    bullets: ["Full-stack web applications", "RESTful & GraphQL APIs"],
  },
  {
    number: "02",
    icon: Database,
    title: "Database Engineering",
    description:
      "Design, optimisation, and management of database systems for performance and reliability.",
    bullets: ["Schema design & migrations", "Query optimisation"],
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure setup, CI/CD pipelines, and cloud-native solutions for seamless deployments.",
    bullets: [
      "AWS, Azure, GCP setup",
      "CI/CD pipeline automation",
      "Container orchestration",
    ],
  },
  {
    number: "04",
    icon: Brain,
    title: "AI Solutions",
    description:
      "Integration of AI models and intelligent automation into your products.",
    bullets: ["LLM integration & RAG"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-card rounded-2xl p-6 sm:p-8 transition-colors group card-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-white/90 text-sm font-mono">
                    {service.number}
                  </span>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-white/90 mb-6 text-base">{service.description}</p>

              <ul className="space-y-2">
                {service.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-base text-white/90 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
