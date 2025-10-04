"use client";

import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const featured = PROJECTS.slice(0, 3);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="space-y-20 relative">
      {/* Static background */}
      <div className="fixed inset-0 -z-10 mesh-gradient" />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-[80vh] flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Hi there! I'm{" "}
                  <span className="section-title">Son Tran</span> 💻
                </h1>
                <p className="text-xl text-[rgb(var(--muted-foreground))]">
                  Data Science @ University of Florida
                </p>
              </div>
              
              <p className="text-lg text-[rgb(var(--foreground))] max-w-2xl leading-relaxed">
                I'm a data-driven builder who enjoys turning messy real-world signals into clean systems and useful products. I've shipped analytics pipelines, LLM-powered reporting, forecasting tools, and UI that people actually use.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="https://drive.google.com/file/d/13MADvJCuZBvB1gjFIc22UHVH178xMMLw/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-black"
                  >
                    View Resume
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="btn-ghost">
                      Get in Touch
                    </Link>
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/msontran/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-ghost"
                  >
                    View LinkedIn
                  </motion.a>
                  <motion.a 
                    href="https://github.com/smtran8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-ghost"
                  >
                    View Github
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Portrait of Son Tran"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl float"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <Section
          title="Featured Projects"
          action={<Link href="/about" className="btn-ghost">About me</Link>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, index) => (
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
        </Section>
      </motion.div>
    </div>
  );
}
