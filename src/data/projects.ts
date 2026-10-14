import type { Project } from "./types";

const gh = "https://github.com/PrajwalRajput45";

export const projects: Project[] = [
  {
    slug: "ai-trip-planner",
    title: "AI Trip Planner SaaS",
    tier: "primary",
    status: "under-improvement",
    summary:
      "An AI-assisted trip-planning app with destination input, quick planning actions, and popular destination picks. Still being fixed and improved.",
    stack: ["Next.js", "Tailwind CSS", "Convex", "OpenRouter API"],
    highlights: [
      "Destination input",
      "Quick trip-planning actions",
      "Popular destination selection",
    ],
    links: { repo: `${gh}/AI-Trip-Planner` },
    caseStudy: {
      challenges: [
        "Handling inconsistent AI-generated JSON and extra text that broke itinerary parsing.",
        "Fixing Convex schema validation when the stored trip data did not match the expected field type.",
        "Synchronizing the current conversation step with collected trip details to avoid repeated questions.",
        "Debugging API route issues and handling OpenRouter rate-limit or credit-related errors.",
        "Making itinerary rendering resilient to missing or inconsistent fields in generated travel data.",
      ],
      lessons: [
        "AI responses need validation and normalization before being consumed by the UI.",
        "Database schemas must match the actual structure of the data being stored.",
        "Multi-step conversational interfaces require carefully synchronized state.",
        "External APIs need defensive error handling and clear failure states.",
        "Debugging across the frontend, API, AI response, and database layers requires tracing the full data flow.",
      ],
    }, // TODO: AI flow, data handling, real challenges
  },
  {
    slug: "student-management-api",
    title: "Student Management API",
    tier: "primary",
    status: "backend",
    summary:
      "A REST API for managing students, profiles, and courses, with search, filtering, pagination, and aggregation endpoints.",
    stack: ["Node.js", "Express 5", "MongoDB", "Mongoose"],
    highlights: [
      "CRUD endpoints",
      "Student, profile, and course models",
      "Search, filtering, and pagination",
      "Aggregation endpoints and index diagnostics",
    ],
    links: { repo: `${gh}/student-management-api` },
    caseStudy: {
      challenges: [
        "Designing student, profile, and course models to support the required API operations.",
        "Building flexible search and filtering queries for retrieving relevant records.",
        "Implementing pagination to return data in manageable result sets.",
        "Using MongoDB aggregation pipelines for operations beyond basic CRUD.",
        "Investigating query performance and understanding how indexes affect database operations.",
      ],
      lessons: [
        "Good API design requires clear resource models and predictable responses.",
        "Mongoose schemas help define and validate the structure of application data.",
        "Search, filtering, and pagination should work together consistently.",
        "Aggregation pipelines enable more advanced data processing inside MongoDB.",
        "Index diagnostics help guide database optimization decisions.",
      ],
    }, // TODO
  },
  {
    slug: "netflix-homepage",
    title: "Netflix Homepage Recreation",
    tier: "primary",
    status: "deployed",
    summary:
      "A responsive frontend recreation of a streaming homepage. A layout and styling exercise, not a streaming app.",
    stack: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Media queries"],
    highlights: [
      "Navigation bar",
      "Hero section",
      "Trending movie cards",
      "FAQ and footer",
      "Responsive styling",
    ],
    links: {
      repo: `${gh}/Netflix_HomePage`,
      live: "https://prajwalrajput45.github.io/Netflix_HomePage/",
    },
    caseStudy: {
      challenges: [
        "Structuring the navigation, hero, trending sections, FAQ, and footer into a consistent page layout.",
        "Aligning images and text while maintaining the intended proportions of each section.",
        "Making content responsive using Flexbox, CSS Grid, and media queries.",
        "Fixing card wrapping and container sizing issues that caused awkward layouts.",
        "Maintaining consistent spacing, typography, and alignment across the page.",
      ],
      lessons: [
        "Flexbox and CSS Grid are complementary tools for building page layouts.",
        "Understanding the box model helps prevent unexpected sizing and overflow issues.",
        "Responsive layouts require deliberate decisions about widths, wrapping, and breakpoints.",
        "Consistent spacing and typography make a recreation feel more polished.",
        "Testing at different viewport sizes is essential before deploying a frontend project.",
      ],
    }, // TODO
  },
  {
    slug: "ai-chatbuddy",
    title: "AI ChatBuddy",
    tier: "secondary",
    summary: "A chatbot interface with a live demo.", // TODO: verify real AI/API behaviour before expanding
    stack: [], // TODO: confirm from source files
    highlights: [],
    links: {
      repo: `${gh}/Ai_chatBuddy`,
      live: "https://prajwalrajput45.github.io/Ai_chatBuddy/",
    },
  },
  {
    slug: "task-tracker-cli",
    title: "Task Tracker CLI",
    tier: "secondary",
    summary:
      "A command-line task manager with priorities, tags, due dates, time tracking, and analytics.",
    stack: [
      "JavaScript",
      "Node.js",
      "Commander",
      "Inquirer",
      "Chalk",
      "Axios",
      "date-fns",
    ],
    highlights: [
      "Task CRUD",
      "Time tracking and analytics",
      "Weather and quote API features",
    ],
    links: { repo: `${gh}/Task-Tracker-CLI-project` },
  },
];
