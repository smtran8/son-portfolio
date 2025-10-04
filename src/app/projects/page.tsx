"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { TagChip } from "@/components/TagChip";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [profileRef, profileInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filtersRef, filtersInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="space-y-16 relative">
      {/* Static background */}
      <div className="fixed inset-0 -z-10 mesh-gradient" />

      {/* Header Section */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 relative"
      >
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/profile.jpg"
              alt="Portrait of Son Tran"
              width={120}
              height={120}
              className="rounded-3xl shadow-2xl float"
              priority
            />
          </motion.div>
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold section-title"
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl leading-relaxed"
            >
              A collection of data science and machine learning projects showcasing my work in analytics, AI, and quantitative research.
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Filter Tags */}
      <motion.section
        ref={filtersRef}
        initial={{ opacity: 0, y: 30 }}
        animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Filter</h2>
        <div className="flex flex-wrap gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={filtersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TagChip label="All" active={!active} onClick={() => setActive(null)} />
          </motion.div>
          {allTags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={filtersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
            >
              <TagChip label={tag} active={active === tag} onClick={() => setActive(tag)} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">
          {active ? `Projects tagged with "${active}"` : "All Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}


