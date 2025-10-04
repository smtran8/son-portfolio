import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Son Tran's portfolio of data science and machine learning projects, including analytics pipelines, LLM-powered reporting, and forecasting tools.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}