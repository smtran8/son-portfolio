"use client";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { TagChip } from "@/components/TagChip";

export default function ProjectsPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const [active, setActive] = useState<string | null>(null);
  const filtered = active
    ? PROJECTS.filter((p) => p.tags.includes(active))
    : PROJECTS;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <div className="flex flex-wrap gap-2">
        <TagChip label="All" active={!active} onClick={() => setActive(null)} />
        {allTags.map((t) => (
          <TagChip key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}


