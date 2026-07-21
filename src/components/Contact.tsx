import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/profile";
import { FadeIn, SectionHeading } from "./FadeIn";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container pb-28">
      <SectionHeading
        eyebrow="Connect"
        title="Let's Work Together"
        description="Open to full-time opportunities, contract work, and technical discussions. Let's build something great together."
      />

      <FadeIn>
        <div className="card-surface overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/8 p-8 md:border-b-0 md:border-r light:border-slate-200">
              <h3 className="text-xl font-semibold text-white light:text-slate-900">
                Contact Details
              </h3>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                I respond within 24 hours. Available for immediate opportunities.
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 text-slate-300 transition hover:text-gold-400 light:text-slate-700 light:hover:text-gold-600"
                  >
                    <span className="rounded-lg border border-white/10 p-2 light:border-slate-200">
                      <Mail size={18} />
                    </span>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 text-slate-300 transition hover:text-gold-400 light:text-slate-700 light:hover:text-gold-600"
                  >
                    <span className="rounded-lg border border-white/10 p-2 light:border-slate-200">
                      <Phone size={18} />
                    </span>
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-300 light:text-slate-700">
                  <span className="rounded-lg border border-white/10 p-2 light:border-slate-200">
                    <MapPin size={18} />
                  </span>
                  {profile.location}
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-slate-300 transition hover:text-gold-400 light:text-slate-700 light:hover:text-gold-600"
                  >
                    <span className="rounded-lg border border-white/10 p-2 light:border-slate-200">
                      <Linkedin size={18} />
                    </span>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-white light:text-slate-900">
                Ready to Connect?
              </h3>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                Choose your preferred way to get in touch.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Job%20Opportunity%20for%20Software%20Developer`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 hover:shadow-gold-500/30"
                >
                  <Send size={16} />
                  Discuss an Opportunity
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold-500/50 hover:text-gold-400 light:border-slate-300 light:text-slate-800"
                >
                  <Mail size={16} />
                  {copied ? "Email Copied!" : "Copy Email Address"}
                </button>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold-500/50 hover:text-gold-400 light:border-slate-300 light:text-slate-800"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8 light:border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Software Developer · Distributed Systems Specialist</p>
      </div>
    </footer>
  );
}
