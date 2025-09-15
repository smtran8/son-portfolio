import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";

export default function Home() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <div className="space-y-12 relative">
      {/* Left-gutter avatar on desktop, matching About/Projects */}
      <Image
        src="/profile.jpg"
        alt="Portrait of Son Tran"
        width={144}
        height={144}
        className="hidden sm:block absolute left-0 -translate-x-[130%] md:-translate-x-[150%] top-0 rounded-full border border-gray-200"
        priority
      />
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Son Tran</h1>
        <p className="text-gray-600">Data Science @ University of Florida</p>
        <p className="text-gray-700 max-w-2xl">
          I’m a data-driven builder who enjoys turning messy real-world signals into clean systems and useful products. I’ve shipped analytics pipelines, LLM-powered reporting, forecasting tools, and UI that people actually use.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects" className="btn">Projects</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </div>
      </section>

      <Section
        title="Featured Projects"
        action={<Link href="/about" className="btn bg-gray-900 hover:opacity-90">About me</Link>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
