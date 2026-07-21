import { GraduationCap } from "lucide-react";
import { education, profile } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        description="A backend-focused engineer who thrives on solving complex synchronization and scalability challenges in enterprise environments."
      />

      <FadeIn>
        <div className="card-surface grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-slate-300 light:text-slate-700">
              I specialize in designing event-driven architectures and distributed
              systems that power enterprise SaaS at scale. My work at SAP Labs India
              centers on backend services, Kafka pipelines, and reliability
              engineering — with a consistent focus on measurable outcomes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300 light:text-slate-700">
              I am open to new opportunities where I can contribute to
              high-growth technology teams building reliable, scalable products
              at global scale.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/8 bg-white/3 p-4 light:border-slate-200 light:bg-slate-50">
              <p className="text-xs uppercase tracking-wider text-slate-500">Focus</p>
              <p className="mt-1 font-medium text-white light:text-slate-900">
                Distributed Systems & Backend Engineering
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/3 p-4 light:border-slate-200 light:bg-slate-50">
              <p className="text-xs uppercase tracking-wider text-slate-500">Strength</p>
              <p className="mt-1 font-medium text-white light:text-slate-900">
                Kafka, Scala, Microservices, Cloud-Native
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/3 p-4 light:border-slate-200 light:bg-slate-50">
              <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
              <p className="mt-1 font-medium text-white light:text-slate-900">
                {profile.location} · {profile.relocation}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading
        eyebrow="Background"
        title="Education"
        description="Strong academic foundation in software engineering and computer science."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <FadeIn key={item.institution} delay={index * 0.1}>
            <div className="card-surface flex items-start gap-4 p-6">
              <div className="rounded-xl border border-gold-500/20 bg-gold-500/10 p-3 text-gold-400">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white light:text-slate-900">
                  {item.institution}
                </h3>
                <p className="mt-1 text-slate-400 light:text-slate-600">{item.degree}</p>
                <p className="mt-2 text-sm font-medium text-gold-400 light:text-gold-600">
                  {item.score}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
