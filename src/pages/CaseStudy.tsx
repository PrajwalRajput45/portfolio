import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import StatusBadge from "../components/StatusBadge";
import { useTitle } from "../lib/useTitle";

const ul = "mt-3 list-disc space-y-2 pl-5 text-lg text-ink/80";

export default function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug && x.caseStudy);
  useTitle(p?.title);
  if (!p || !p.caseStudy) return <Navigate to="/projects" replace />;
  const { challenges, lessons } = p.caseStudy;
  const dev = import.meta.env.DEV;
  const note = (label: string) => (
    <p className="mt-3 border border-dashed border-line p-4 text-sm text-ink/60">Add {label} in projects.ts. This block is hidden in production until filled.</p>
  );

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-36">
          <Link to="/projects" className="text-sm text-mist hover:text-paper">All projects</Link>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-7xl">{p.title}</h1>
          {p.status && <div><StatusBadge status={p.status} /></div>}
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper/75">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <a href={p.links.repo} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4">Repository</a>
            {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4">Live demo</a>}
          </div>
        </div>
      </section>
      <section className="bg-paper text-ink">
        {p.screenshot && (
          <div className="mx-auto max-w-6xl px-6 pt-16">
            <img src={p.screenshot} alt={`${p.title} screenshot`} loading="lazy" className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top" />
          </div>
        )}
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Built with</h2>
            <p className="mt-3 text-lg text-ink/80">{p.stack.join(", ")}</p>
            <h2 className="mt-12 font-display text-2xl font-semibold">What it does</h2>
            <ul className={ul}>{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <div>
            {(challenges.length > 0 || dev) && <h2 className="font-display text-2xl font-semibold">Challenges</h2>}
            {challenges.length > 0 ? <ul className={ul}>{challenges.map((c) => <li key={c}>{c}</li>)}</ul> : dev && note("challenges")}
            {(lessons.length > 0 || dev) && <h2 className="mt-12 font-display text-2xl font-semibold">What I learned</h2>}
            {lessons.length > 0 ? <ul className={ul}>{lessons.map((l) => <li key={l}>{l}</li>)}</ul> : dev && note("lessons")}
          </div>
        </div>
      </section>
    </>
  );
}
