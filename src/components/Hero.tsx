import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile, impactStats } from "../data/profile";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold-500/8 blur-3xl" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="section-container relative flex min-h-[calc(100vh-7rem)] flex-col justify-center">
        <FadeIn>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-400">
            <MapPin size={14} />
            {profile.availability}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl light:text-slate-900">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-2xl font-medium text-gold-400 md:text-3xl">
            {profile.title}
          </p>
          <p className="mt-2 text-lg text-slate-400 md:text-xl light:text-slate-600">
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 light:text-slate-600">
            {profile.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 hover:shadow-gold-500/30"
            >
              <Mail size={16} />
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400 light:border-slate-300 light:bg-slate-100 light:text-slate-800 light:hover:border-gold-500 light:hover:bg-gold-50"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="card-surface p-5 text-center sm:text-left"
              >
                <p className="text-3xl font-bold gold-gradient">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400 light:text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-gold-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label="Scroll to about"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
}
