import { Award, Trophy, Shield } from "lucide-react";
import { achievements, certifications } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements & Certifications"
        description="Awards, certifications, and professional recognitions earned throughout my career."
      />

      <div className="space-y-8">
        {/* Achievements */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white light:text-slate-900">
            <Trophy size={20} className="text-gold-500" />
            Awards & Recognition
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <FadeIn key={achievement.title} delay={index * 0.1}>
                <div className="card-surface group flex h-full flex-col p-5 transition hover:border-gold-500/30">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="rounded-lg border border-gold-500/20 bg-gold-500/10 p-2 text-gold-400">
                      <Award size={18} />
                    </div>
                    <span className="text-xs font-medium text-gold-500">{achievement.year}</span>
                  </div>
                  <h4 className="mb-1 font-semibold text-white light:text-slate-900">
                    {achievement.title}
                  </h4>
                  <p className="mb-2 text-sm text-slate-400 light:text-slate-600">
                    {achievement.organization}
                  </p>
                  <p className="mt-auto text-sm leading-relaxed text-slate-500 light:text-slate-600">
                    {achievement.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Certifications - only show if there are any */}
        {certifications.length > 0 && (
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white light:text-slate-900">
              <Shield size={20} className="text-gold-500" />
              Professional Certifications
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <FadeIn key={cert.name} delay={index * 0.1}>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface group flex h-full flex-col p-5 transition hover:border-gold-500/30 hover:bg-white/[0.02] light:hover:bg-slate-50"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div className="rounded-lg border border-gold-500/20 bg-gold-500/10 p-2 text-gold-400">
                        <Shield size={18} />
                      </div>
                      <span className="text-xs font-medium text-gold-500">{cert.year}</span>
                    </div>
                    <h4 className="mb-2 font-semibold leading-snug text-white group-hover:text-gold-400 light:text-slate-900 light:group-hover:text-gold-600">
                      {cert.name}
                    </h4>
                    <p className="mt-auto text-sm text-slate-400 light:text-slate-600">
                      {cert.issuer}
                    </p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
