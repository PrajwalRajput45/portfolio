export type ProjectStatus = "under-improvement" | "deployed" | "backend";

export interface Project {
  slug: string;
  title: string;
  tier: "primary" | "secondary";
  status?: ProjectStatus;
  summary: string;
  stack: string[];
  /** Only features documented in the repo README. */
  highlights: string[];
  links: { repo: string; live?: string };
  /** Primary projects get a /projects/:slug page. */
  caseStudy?: {
    challenges: string[]; // TODO: write from real experience
    lessons: string[]; // TODO: write from real experience
  };
  screenshot?: string; // TODO: real screenshot in /public/projects/
}

export interface Skill {
  name: string;
  group: "hands-on" | "learning";
}
