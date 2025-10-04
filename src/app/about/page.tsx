"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="space-y-16 relative">
      {/* Static background */}
      <div className="fixed inset-0 -z-10 mesh-gradient" />
      
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
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl leading-relaxed"
            >
              I'm a data-driven builder who enjoys turning messy real-world signals into clean systems and useful products. I've shipped analytics pipelines, LLM-powered reporting, forecasting tools, and UI that people actually use.
            </motion.p>
          </div>
        </div>
      </motion.header>

      <motion.section 
        ref={skillsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-3d"
          >
            <h3 className="text-lg font-semibold text-[--accent] mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C/C++", "SQL", "DAX", "R", "Matlab"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-sm text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-3d"
          >
            <h3 className="text-lg font-semibold text-[--accent] mb-3">Libraries & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "PostgreSQL", "Supabase", "pandas", "NumPy", "Matplotlib", "FastAPI", "Gemini API"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-sm text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-3d"
          >
            <h3 className="text-lg font-semibold text-[--accent] mb-3">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Tableau", "Excel", "WorldQuant BRAIN"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-sm text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-3d"
          >
            <h3 className="text-lg font-semibold text-[--accent] mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Data Analysis", "Data Engineering", "Data Visualization", "Machine Learning", "Alpha Signal Development"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-sm text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        ref={educationRef}
        initial={{ opacity: 0, y: 30 }}
        animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Education</h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-3d"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[--accent]">University of Florida</h3>
                <p className="text-[rgb(var(--muted-foreground))]">B.S. in Data Science</p>
              </div>
              <span className="text-sm text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-3 py-1 rounded-full">
                Aug 2024 – May 2028
              </span>
            </div>
                  <div className="space-y-2">
                    <p className="text-[rgb(var(--foreground))]">
                      <span className="font-medium">GPA:</span> 3.73 • <span className="font-medium">Honor Awards:</span> University of Florida's Dean List (2024), Reitz Union's Rising Star (2025)
                    </p>
                    <div>
                      <p className="font-medium text-[rgb(var(--foreground))] mb-2">Key Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Programming Fundamentals", "Introduction to Computational Math", "Programming with Data in R", "Computational Linear Algebra", "Application of Discrete Structures", "Database Design (UCI)"].map((course, index) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={educationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                            className="rounded-full border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] px-3 py-1 text-xs text-[rgb(var(--foreground))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        ref={experienceRef}
        initial={{ opacity: 0, y: 30 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Experience</h2>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-3d"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[--accent]">Data Engineer</h3>
                  <p className="text-[rgb(var(--muted-foreground))]">University of Florida</p>
                </div>
                <span className="text-sm text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-3 py-1 rounded-full">
                  Mar 2025 – Present
                </span>
              </div>
                  <div className="space-y-3">
                    {[
                      "Collaborated cross-functionally with technical peers to engineer and deploy a full-stack tutor reporting platform for E2S, a nonprofit serving 200+ UWC students, improving system scalability and maintainability",
                      "Designed and automated an LLM-powered reporting pipeline with OpenAI API, generating 500+ structured session summaries and progress reports with 90% less manual effort",
                      "Developed a responsive HTML interface and public website using modern web frameworks, increasing tutor applications by 30% and enhancing program accessibility"
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[--accent] mt-1">•</span>
                        <span className="text-[rgb(var(--foreground))]">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-3d"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[--accent]">Event Productions Student Assistant</h3>
                  <p className="text-[rgb(var(--muted-foreground))]">Reitz Union, UF</p>
                </div>
                <span className="text-sm text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-3 py-1 rounded-full">
                  Jan 2025 – Present
                </span>
              </div>
                  <div className="space-y-3">
                    {[
                      "Coordinated logistics for 1000+ events; during peak periods, used 7 Points Ops and the Event Management System (EMS) to supervise 50+ events/day, direct crews and resources, and sustain 98% setup accuracy",
                      "Managed audio/lighting for 200+ events; ran weekly inventories and documentation with 100% compliance, and resolved 95% of 300+ radio requests within 5 minutes to keep operations on time"
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[--accent] mt-1">•</span>
                        <span className="text-[rgb(var(--foreground))]">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={experienceRef}
        initial={{ opacity: 0, y: 30 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Leadership Experience</h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-3d"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[--accent]">Volunteer Lead</h3>
                <p className="text-[rgb(var(--muted-foreground))]">2025 UF Data Science and Informatics Spring Symposium — University of Florida</p>
              </div>
              <span className="text-sm text-[rgb(var(--muted-foreground))] bg-[rgb(var(--muted))] px-3 py-1 rounded-full">
                Mar 2025
              </span>
            </div>
            <div className="space-y-3">
              {[
                "Directed 15+ volunteers across 5 sessions; managed registration/logistics for 200+ attendants and 10+ speakers"
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[--accent] mt-1">•</span>
                  <span className="text-[rgb(var(--foreground))]">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Get In Touch</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-3d"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/smtran8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-black"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/msontran/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-black"
              >
                LinkedIn
              </motion.a>
                  <motion.a
                    href="/Minh Son Tran_Resume.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-black"
                  >
                    Download Résumé
                  </motion.a>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-[rgb(var(--card-border))]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="text-[--accent] font-medium">Phone:</span>
                <span className="text-[rgb(var(--foreground))]">352-709-6136</span>
              </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[--accent] font-medium">Email:</span>
                    <span className="text-[rgb(var(--foreground))]">davidtran.forwork@gmail.com</span>
                  </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}


