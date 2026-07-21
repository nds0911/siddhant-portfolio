import { FolderKanban, ExternalLink, Github, TrendingUp } from "lucide-react";
import { projects } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Work"
        title="Key Projects"
        description="Selected projects showcasing distributed systems design, scalability, and measurable business impact."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.name} delay={index * 0.1}>
            <article className="group card-surface flex h-full flex-col p-6 transition hover:border-gold-500/30">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-gold-500/20 bg-gold-500/10 p-2.5 text-gold-400">
                    <FolderKanban size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white light:text-slate-900">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gold-500">{project.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-gold-500/50 hover:text-gold-400 light:border-slate-200 light:hover:border-gold-500"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-gold-500/50 hover:text-gold-400 light:border-slate-200 light:hover:border-gold-500"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400 light:text-slate-600">
                {project.description}
              </p>

              {project.impact && (
                <div className="mb-4 rounded-lg border border-gold-500/20 bg-gold-500/5 p-3">
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-gold-500">
                    <TrendingUp size={14} />
                    Impact Metrics
                  </div>
                  <p className="text-sm text-slate-300 light:text-slate-700">
                    {project.impact}
                  </p>
                </div>
              )}

              {project.scale && (
                <p className="mb-4 text-xs text-slate-500 light:text-slate-600">
                  📊 Scale: {project.scale}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300 light:bg-slate-100 light:text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
