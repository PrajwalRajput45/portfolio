import { Link } from "react-router-dom";
import type { Project } from "../data/types";
import StatusBadge from "./StatusBadge";

export default function ProjectRow({ p }: { p: Project }) {
  const titleClass = "font-display text-3xl font-semibold tracking-tight";
  return (
    <article className="grid gap-5 border-t border-line py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
      <div>
        {p.caseStudy ? (
          <Link to={`/projects/${p.slug}`} className={`${titleClass} hover:text-accent-deep`}>{p.title}</Link>
        ) : (
          <h3 className={titleClass}>{p.title}</h3>
        )}
        <div>{p.status && <StatusBadge status={p.status} />}</div>
      </div>
      <div>
        {p.screenshot && <img src={p.screenshot} alt={`${p.title} screenshot`} loading="lazy" className="mb-6 aspect-[16/10] w-full rounded-lg border border-line object-cover object-top" />}
        <p className="max-w-prose text-lg text-ink/80">{p.summary}</p>
        {p.stack.length > 0 && <p className="mt-4 text-sm text-ink/65">{p.stack.join(", ")}</p>}
        <div className="mt-5 flex flex-wrap gap-6 text-sm font-medium">
          {p.caseStudy && <Link to={`/projects/${p.slug}`} className="text-accent-deep underline underline-offset-4">Case study</Link>}
          <a href={p.links.repo} target="_blank" rel="noreferrer" className="underline underline-offset-4">Repository</a>
          {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer" className="underline underline-offset-4">Live demo</a>}
        </div>
      </div>
    </article>
  );
}
