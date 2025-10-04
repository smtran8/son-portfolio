"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.links.repo && project.links.repo.length > 0 ? project.links.repo : "/projects";
  const isExternal = /^https?:\/\//.test(href);

  const content = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="card-3d group cursor-pointer h-full min-h-[450px]"
    >
      <div className="space-y-3 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-[rgb(var(--foreground))] group-hover:text-[--accent] transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-2 py-1 rounded-full">
              {project.year}
            </span>
            {isExternal && (
              <ExternalLink className="h-4 w-4 text-[rgb(var(--muted-foreground))] group-hover:text-[--accent] transition-colors" />
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-[rgb(var(--muted-foreground))] leading-relaxed line-clamp-4 flex-grow">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-xs text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-xs text-[rgb(var(--muted-foreground))]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-[rgb(var(--muted-foreground))] uppercase tracking-wide">
              Key Results
            </h4>
            <ul className="space-y-1.5">
              {project.metrics.slice(0, 3).map((metric, i) => (
                <li key={i} className="text-sm text-[rgb(var(--foreground))] flex items-start gap-2">
                  <span className="text-[--accent] mt-1">•</span>
                  <span className="line-clamp-3">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Role */}
        <div className="pt-1 border-t border-[rgb(var(--card-border))] mt-auto">
          <span className="text-xs text-[rgb(var(--muted-foreground))]">
            Role: <span className="font-medium text-[--accent]">{project.role}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className="block">
      {content}
    </Link>
  );
}


