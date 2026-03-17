import { Project, Skill, Testimonial, ProcessStep, NavLink } from "../types";

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const tools = [
  "Webflow",
  "n8n",
  "Make",
  "OpenAI",
  "Zapier",
  "Airtable",
  "Notion",
  "Slack",
  "HubSpot",
  "Anthropic",
  "Framer",
  "Figma",
  "Webflow",
  "n8n",
  "Make",
  "OpenAI",
  "Zapier",
  "Airtable",
  "Notion",
  "Slack",
  "HubSpot",
  "Anthropic",
  "Framer",
  "Figma",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Lead Qualification Engine",
    description:
      "End-to-end sales automation built with n8n + GPT-4. Qualifies inbound leads, enriches contact data via Apollo & Clearbit, and auto-drafts personalized follow-up emails. Reduced SDR workload by 70%.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    tags: ["n8n", "OpenAI GPT-4", "HubSpot", "Clearbit", "Slack"],
    liveLink: "#",
    githubLink: "#",
    stats: "70% Less Manual Work",
  },
  {
    id: 2,
    title: "Luminary — Award-Winning Webflow Site",
    description:
      "Pixel-perfect Webflow build for a luxury creative agency. Features custom GSAP scroll animations, Webflow CMS blog, Memberstack gated content, and Finsweet CMS filtering. 98 Lighthouse score.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    tags: ["Webflow", "GSAP", "Memberstack", "Finsweet", "Lottie"],
    liveLink: "#",
    githubLink: "#",
    stats: "98 Lighthouse Score",
  },
  {
    id: 3,
    title: "Ops Autopilot — Business Process Suite",
    description:
      "Unified automation hub connecting 12+ tools via Make (Integromat). Syncs CRM, invoicing, project management, and client onboarding into a single zero-touch pipeline. Saves 40+ hours per month.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["Make", "Airtable", "Notion", "Stripe", "Zapier"],
    liveLink: "#",
    githubLink: "#",
    stats: "40+ Hours Saved / Month",
  },
];

export const skills: Skill[] = [
  {
    name: "Webflow Development",
    icon: "Layers",
    description:
      "Custom Webflow sites, CMS, Ecommerce, Memberstack, Finsweet, GSAP interactions",
    level: "Expert",
  },
  {
    name: "AI Workflow Automation",
    icon: "Zap",
    description:
      "n8n, Make, Zapier — multi-step pipelines, error handling, conditional logic",
    level: "Expert",
  },
  {
    name: "LLM & OpenAI Integration",
    icon: "Brain",
    description:
      "GPT-4, Claude, function calling, RAG pipelines, embeddings, AI agents",
    level: "Advanced",
  },
  {
    name: "No-Code Architecture",
    icon: "GitBranch",
    description:
      "Airtable, Notion, Softr — scalable no-code stacks for lean teams",
    level: "Expert",
  },
  {
    name: "CRM & Sales Automation",
    icon: "BarChart",
    description:
      "HubSpot, Pipedrive, automated sequences, lead scoring, enrichment",
    level: "Advanced",
  },
  {
    name: "Frontend Development",
    icon: "Code",
    description:
      "React, Next.js, TypeScript — when you need code beyond no-code",
    level: "Advanced",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "Pulse SaaS",
    content:
      "Stackzen rebuilt our entire lead gen pipeline with n8n + GPT-4. We went from manually qualifying 200 leads/week to having it happen automatically overnight. Genuinely game-changing.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder",
    company: "Luminary Studio",
    content:
      "The Webflow site Stackzen built for us won a Webflow Showcase award. It's fast, beautiful, and our team can manage it without touching code. Worth every penny.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "COO",
    company: "TerraScale",
    content:
      "We were drowning in manual ops work. Stackzen mapped our entire business process and automated 80% of it in Make. Our team now focuses on actual strategy, not admin.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Strategy & Audit",
    description:
      "Map your current tools, workflows, and website. Identify automation opportunities and design gaps. Deliver a clear roadmap with ROI estimates.",
    icon: "Sparkles",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Build Webflow prototypes or automation flow diagrams for approval. You see exactly what you're getting before a single line is wired.",
    icon: "Layers",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Develop pixel-perfect Webflow sites and multi-step automation flows. Connect your tools, test edge cases, and document everything.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Launch & Automate",
    description:
      "Go live with confidence. I monitor the first 48 hours, fix any issues, and hand over clear instructions so your team owns it.",
    icon: "Zap",
  },
];
