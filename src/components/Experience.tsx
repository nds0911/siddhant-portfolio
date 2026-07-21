import { Briefcase, Clock } from "lucide-react";
import { experience } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        description="Building enterprise-grade systems with measurable impact on performance, reliability, and delivery speed."
      />

      <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-1/2 light:before:bg-slate-200">
        {experience.map((job, index) => (
          <FadeIn key={job.company} delay={index * 0.1}>
            <div
              className={`relative flex flex-col gap-4 md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 bg-navy-950 text-gold-500 md:left-1/2 md:-translate-x-1/2 light:bg-white">
                <Briefcase size={16} />
              </div>

              <div className="card-surface ml-12 w-full p-6 md:ml-0 md:w-1/2">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white light:text-slate-900">
                      {job.role}
                    </h3>
                    <p className="text-gold-400 light:text-gold-600">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-slate-400 light:text-slate-500">
                    <p>{job.period}</p>
                    <p className="flex items-center gap-1">
                      <Clock size={12} />
                      {job.duration}
                    </p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="mb-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-slate-400 light:text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {job.technologies && (
                  <div className="mt-4 border-t border-white/5 pt-4 light:border-slate-200">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-white/5 px-2 py-0.5 text-xs text-slate-400 light:bg-slate-100 light:text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
