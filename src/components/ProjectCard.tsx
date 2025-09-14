import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.links.repo && project.links.repo.length > 0 ? project.links.repo : "/projects";
  return (
    <Link href={href} className="card block p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{project.title}</h3>
        <span className="text-xs text-gray-500">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-gray-700">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((t) => (
          <span key={t} className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-700">
            {t}
          </span>
        ))}
      </div>
      {project.metrics?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {project.metrics.slice(0, 2).map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      )}
    </Link>
  );
}


