"use client";

import Link from "next/link";

const team = [
  {
    name: "Apostolis Grigoris",
    role: "Lead Software Engineer",
    description:
      "Experienced software engineer with 4+ years of professional experience.",
    technologies: [".NET", "Angular", "React", "Next.js", "PostgreSQL", "Supabase"],
    linkedin: "https://www.linkedin.com/in/apostolos-grigoris/",
  },
  {
    name: "Vlasios Zacharis",
    role: "Software Engineer",
    description:
      "Software engineer with startup experience, specialising in building scalable web applications and delivering production-ready code.",
    technologies: ["JavaScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    linkedin: "https://www.linkedin.com/in/zacharisvlasios/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wider">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Meet the Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl p-6 sm:p-8 transition-colors card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </div>

              <p className="text-white/90 mb-6 text-base">{member.description}</p>

              <div className="flex flex-wrap gap-2">
                {member.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
