import { projects } from "../data/projects";
import ProjectRow from "../components/ProjectRow";
import { useTitle } from "../lib/useTitle";

export default function Projects() {
  useTitle("Projects");
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Projects</h1>
        <h2 className="mb-2 mt-16 text-sm font-medium text-ink/65">Case studies</h2>
        {projects.filter((p) => p.tier === "primary").map((p) => <ProjectRow key={p.slug} p={p} />)}
        <h2 className="mb-2 mt-16 text-sm font-medium text-ink/65">Other projects</h2>
        {projects.filter((p) => p.tier === "secondary").map((p) => <ProjectRow key={p.slug} p={p} />)}
        <div className="border-t border-line" />
      </div>
    </div>
  );
}
