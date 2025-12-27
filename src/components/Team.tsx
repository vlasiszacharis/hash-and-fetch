"use client";

import { Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Apostolis Grigoris",
    nameGr: "Αποστόλης Γρηγόρης",
    role: "Lead Software Engineer",
    description:
      "Experienced software engineer with 4+ years of professional experience. Holds a Master's degree in Computer Science and is Azure certified.",
    technologies: [".NET", "Angular", "React", "Next.js", "PostgreSQL", "Supabase"],
  },
  {
    name: "Vlasios Zacharis",
    nameGr: "Βλάσιος Ζαχαρής",
    role: "Software Engineer",
    description:
      "Software engineer with startup experience, specialising in building scalable web applications and delivering production-ready code.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
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
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {member.nameGr}
                  </h3>
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
