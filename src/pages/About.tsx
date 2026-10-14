import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { useTitle } from "../lib/useTitle";

const list = "mt-4 flex flex-wrap gap-x-6 gap-y-2 text-lg text-ink/80";

export default function About() {
  useTitle("About");
  const ed = profile.education;
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">About</h1>
        {profile.photo && <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="mt-8 h-40 w-40 rounded-full border border-line object-cover" />}
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/80">{profile.intro}</p>

        <h2 className="mt-16 font-display text-2xl font-semibold">Education</h2>
        <p className="mt-3 text-lg text-ink/80">
          {ed.degree}
          {ed.institution && `, ${ed.institution}`}
          {ed.graduationYear && ` (${ed.graduationYear})`}
        </p>
        {profile.training && <p className="mt-2 text-lg text-ink/80">{profile.training}</p>}
        {profile.certificates.length > 0 && (
          <ul className="mt-2 list-disc pl-5 text-lg text-ink/80">{profile.certificates.map((c) => <li key={c}>{c}</li>)}</ul>
        )}

        <h2 className="mt-16 font-display text-2xl font-semibold">Journey</h2>
        <ol className="mt-6 space-y-6 border-l border-line pl-6">
          {profile.journey.map((j, i) => (
            <li key={j.title}>
              <p className="font-display text-lg font-semibold">{i + 1}. {j.title}</p>
              <p className="mt-1 text-ink/75">{j.text}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-display text-2xl font-semibold">Skills</h2>
        <h3 className="mt-6 text-sm font-medium text-ink/65">Hands-on in projects</h3>
        <ul className={list}>{skills.filter((s) => s.group === "hands-on").map((s) => <li key={s.name}>{s.name}</li>)}</ul>
        <h3 className="mt-8 text-sm font-medium text-ink/65">Currently learning</h3>
        <ul className={list}>{skills.filter((s) => s.group === "learning").map((s) => <li key={s.name}>{s.name}</li>)}</ul>
      </div>
    </div>
  );
}
