import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import ProjectRow from "../components/ProjectRow";
import CodeCard from "../components/CodeCard";
import { useTitle } from "../lib/useTitle";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  useTitle();
  const featured = projects.filter((p) => p.tier === "primary");
  const { links } = profile;
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink" onMouseMove={onMove}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(to bottom, black 40%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(380px circle at var(--mx, 75%) var(--my, 30%), rgba(76,201,240,0.10), transparent 70%)" }} />
        <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-28 pt-40 sm:pb-40 sm:pt-52 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p variants={item} className="text-lg text-mist">{profile.role}</motion.p>
            <motion.h1 variants={item} className="mt-6 font-display text-[clamp(3.25rem,9vw,8rem)] font-semibold leading-[0.92] tracking-tight">
              {profile.name.split(" ").map((w) => <span key={w} className="block">{w}</span>)}
            </motion.h1>
            <motion.div variants={item} className="mt-10 h-px w-24 bg-accent" />
            {profile.tagline && <motion.p variants={item} className="mt-8 max-w-xl text-2xl text-paper">{profile.tagline}</motion.p>}
            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">{profile.intro}</motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="rounded-full bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-white">View projects</Link>
              <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent">GitHub</a>
            </motion.div>
          </div>
          <motion.div variants={item} className="w-full max-w-md lg:max-w-none lg:justify-self-end">
            <CodeCard />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-12 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h2>
          {featured.map((p) => <ProjectRow key={p.slug} p={p} />)}
          <div className="border-t border-line pt-8">
            <Link to="/projects" className="font-medium text-accent-deep underline underline-offset-4">See all projects</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h2>
          <a href={links.email} className="mt-8 inline-block break-all font-display text-2xl underline decoration-accent underline-offset-8 sm:text-4xl">
            {links.email.replace("mailto:", "")}
          </a>
          <div className="mt-10 flex flex-wrap gap-8 text-mist">
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-paper">GitHub</a>
            {links.linkedin && <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">LinkedIn</a>}
            {links.resume && <a href={links.resume} target="_blank" rel="noreferrer" className="hover:text-paper">Resume</a>}
          </div>
        </div>
      </section>
    </>
  );
}
