export type Project = {
  title: string;
  slug: string;
  year: number;
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
    title: "CivicOps-311: SLA Risk Prediction",
    slug: "civicops-311-sla-risk",
    year: 2025,
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
    links: { repo: "" },
    cover: "/images/projects/civicops-311-cover.png",
  },
  {
    title: "Alpha Signal Development",
    slug: "alpha-signal-development",
    year: 2025,
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
    year: 2025,
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
    links: { repo: "" },
    cover: "/images/projects/smart-planner-cover.png",
  },
];


