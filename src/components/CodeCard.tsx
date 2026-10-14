import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

type Seg = [text: string, cls: string];

const kw = "text-accent";
const key = "text-paper";
const str = "text-emerald-300";
const pn = "text-mist";

const learning = ["Java", "Spring Boot", "SQL"].filter((n) =>
  skills.some((s) => s.group === "learning" && s.name === n)
);
const building = projects.find((p) => p.status === "under-improvement")?.title;
const github = profile.links.github.split("/").pop();

const lines: Seg[][] = [
  [["const ", kw], ["developer", key], [" = {", pn]],
  [["  name", key], [": ", pn], [`"${profile.name}"`, str], [",", pn]],
  [["  focus", key], [": ", pn], ['"Full-Stack Development"', str], [",", pn]],
  [["  learning", key], [": ", pn], [`[${learning.map((l) => `"${l}"`).join(", ")}]`, str], [",", pn]],
  ...(building ? [[["  building", key], [": ", pn], [`"${building}"`, str], [",", pn]] as Seg[]] : []),
  [["  github", key], [": ", pn], [`"${github}"`, str], [",", pn]],
  [["};", pn]],
];

const lineLen = (l: Seg[]) => l.reduce((n, [t]) => n + t.length, 0);
const total = lines.reduce((n, l) => n + lineLen(l) + 1, -1);
const plain = lines.map((l) => l.map(([t]) => t).join("")).join("\n");

export default function CodeCard() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduce) {
      setN(total);
      return;
    }
    let i = 0;
    let id = 0;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => {
        i += 1;
        setN(i);
        if (i >= total) window.clearInterval(id);
      }, 28);
    }, 900);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [reduce]);

  let left = n;
  let caretDone = false;
  const rendered = lines.map((line, li) => {
    const showCaret = !caretDone && left <= lineLen(line);
    if (showCaret) caretDone = true;
    const parts = line.map(([text, cls], si) => {
      const shown = text.slice(0, Math.max(left, 0));
      left -= text.length;
      return <span key={si} className={cls}>{shown}</span>;
    });
    left -= 1;
    return (
      <div key={li} className="min-h-[1.7em]">
        {parts}
        {showCaret && !reduce && <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-accent" />}
      </div>
    );
  });

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 px-5 py-3 font-mono text-xs text-mist">developer.ts</div>
      <pre className="sr-only">{plain}</pre>
      <div aria-hidden className="whitespace-pre-wrap break-words p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-[15px]">
        {rendered}
      </div>
    </div>
  );
}
