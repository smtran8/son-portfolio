export type Project = {
  title: string;
  slug: string;
  year: string;
  tags: string[];
  summary: string;
  metrics: string[];
  stack: string[];
  role: string;
  links: { demo?: string; repo?: string; report?: string };
  cover?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DiegoAI - Email Automation AI",
    slug: "diegoai-email-automation",
    year: "Sep 2025",
    tags: ["AI", "Python", "SQL", "SWE"],
    summary:
      "AI tool for brokers that ranks shippers by on-time delivery with automated email outreach and prospect filtering.",
    metrics: [
      "Integrated Gemini API (2.5-pro) with PDF parsing for business data extraction",
      "60% reduction in manual work, producing 1,000+ company target list",
      "2,500+ clients across 15+ industries with 95% accuracy",
      "85% reduction in manual tasks for 500+ monthly runs",
    ],
    stack: [
      "Python",
      "Gemini API",
      "Power BI",
      "Supabase",
      "SQL",
      "PDF Processing",
    ],
    role: "AI/ML Engineer",
    links: { repo: "" },
    cover: "/images/projects/diegoai-cover.png",
  },
  {
    title: "CivicOps-311: SLA Risk Prediction",
    slug: "civicops-311-sla-risk",
    year: "Aug 2025",
    tags: ["Data", "ML", "SWE", "Python", "SQL"],
    summary:
      "City 311 analytics: warehouse + features + SLA-breach prediction with a simple scoring service.",
    metrics: [
      "5,000+ tickets ingested & analyzed",
      "ROC-AUC 0.703; 36% recall on 4,714 closed tickets",
      "3 FastAPI scoring endpoints with Swagger docs",
      "5 SQL KPI queries (SLA attainment, P90 response)",
    ],
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "PostgreSQL",
      "FastAPI",
      "Power BI",
      "Socrata API",
    ],
    role: "Data/ML Engineer",
    links: { repo: "https://github.com/smtran8/civicops-311-gainesville" },
    cover: "/images/projects/civicops-311-cover.png",
  },
  {
    title: "Alpha Signal Development",
    slug: "alpha-signal-development",
    year: "May 2025",
    tags: ["Quant", "Data", "Python"],
    summary:
      "Research and backtesting of three equity alpha signals with risk neutralization.",
    metrics: [
      "12.5% annualized returns",
      "Sharpe 2.1",
      "8% lower drawdown; 40% lower turnover",
      "Outperformed S&P 500 by 9%",
    ],
    stack: ["Python", "pandas", "NumPy", "WorldQuant BRAIN"],
    role: "Quant Researcher",
    links: { repo: "" },
    cover: "/images/projects/alpha-signal-cover.png",
  },
  {
    title: "Smart Schedule Planner",
    slug: "smart-schedule-planner",
    year: "Apr 2025",
    tags: ["Data", "SWE", "Python"],
    summary:
      "Predictive task planner with from-scratch linear regression and probabilistic outputs.",
    metrics: [
      "92% accuracy on 500+ simulated tasks",
      "35% lower prediction error vs baseline",
      "40% faster iteration cycles via modular architecture",
    ],
    stack: ["Python", "NumPy", "pandas", "JSON"],
    role: "Engineer",
    links: { repo: "https://github.com/Lokaghna/MAD2502FinalProject" },
    cover: "/images/projects/smart-planner-cover.png",
  },
];


