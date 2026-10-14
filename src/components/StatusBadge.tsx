import type { ProjectStatus } from "../data/types";

const map: Record<ProjectStatus, { label: string; dot: string }> = {
  "under-improvement": { label: "Under improvement", dot: "bg-amber-500" },
  deployed: { label: "Deployed", dot: "bg-emerald-500" },
  backend: { label: "Backend project", dot: "bg-accent-deep" },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const s = map[status];
  return (
    <span className="mt-3 inline-flex items-center gap-2 text-sm">
      <span className={`h-2 w-2 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}
