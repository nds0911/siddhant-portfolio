import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl light:text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400 light:text-slate-600">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
