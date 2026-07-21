import { skills } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="Expertise"
        title="Technical Skills"
        description="Core technologies I use to build reliable, scalable systems for enterprise platforms."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.05}>
            <div className="card-surface h-full p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
