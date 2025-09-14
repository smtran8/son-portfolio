import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="flex items-start gap-4">
          <Image
            src="/profile.jpg"
            alt="Portrait of Son Tran"
            width={96}
            height={96}
            className="rounded-full border border-gray-200"
            priority
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="text-gray-700 max-w-2xl">
              I’m a data-driven builder who enjoys turning messy real-world signals into clean systems and useful products. I’ve shipped analytics pipelines, LLM-powered reporting, forecasting tools, and UI that people actually use.
            </p>
          </div>
        </div>
      </header>

      <section className="space-y-1">
        <h2 className="text-lg font-semibold">Skills</h2>
        <div className="space-y-1 text-gray-800">
          <p><span className="font-medium">Languages:</span> Python, C/C++, SQL, R</p>
          <p><span className="font-medium">Libraries/Tools:</span> pandas, NumPy, Matplotlib, Git, OpenAI API, WorldQuant BRAIN, PostgreSQL, Power BI, QlikView, FastAPI, Socrata API</p>
          <p><span className="font-medium">Platforms:</span> Google Cloud Platform, VS Code, PyCharm, Visual Studio</p>
          <p><span className="font-medium">Interests:</span> Software Engineering, Quantitative Research, Data Science, Data Visualization, NLP, Full-Stack, Mobile & Web, AI/ML, Mathematics, Backtesting</p>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Education</h2>
        <p className="text-gray-800">
          <span className="font-medium">University of Florida</span> — B.S. in Data Science (Aug 2024 – May 2028), GPA 3.73. Dean’s List (Fall 2024, Spring 2025).
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Courses:</span> Programming Fundamentals; Intro to Computational Math; Programming with Data in R; Computational & Linear Algebra; Discrete Structures; Database Design & Operational BI (UCI); Financial Analysis (UIUC).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Data Engineer — University of Florida (Mar 2025 – Present, Gainesville, FL)</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Built and deployed a full-stack tutor reporting platform for E2S (serving 200+ UWC students).</li>
              <li>Automated an LLM reporting pipeline with OpenAI API generating 500+ structured session summaries; reduced manual effort ~90%.</li>
              <li>Shipped a responsive HTML interface and public site; increased tutor applications ~30%.</li>
              <li>Implemented real-time tutor activity logging & dashboards (Matplotlib) for 50+ coordinators.</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Event Productions Student Assistant — Reitz Union, UF (Jan 2025 – Present)</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Supported 1000+ events; coordinated furniture/equipment with 98% setup accuracy across 50+ weekly setups.</li>
              <li>Managed audio/lighting for 200+ events; maintained inventory and EMS compliance 100%.</li>
              <li>Resolved 95% of 300+ radio assistance requests within 5 minutes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Contact</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <Link href="https://github.com/smtran8" className="btn">GitHub</Link>
          <Link href="https://www.linkedin.com/in/msontran/" className="btn">LinkedIn</Link>
          <Link href="/resume.pdf" className="btn" prefetch={false}>Download Résumé</Link>
        </div>
        <p className="text-gray-700">Phone Number: 3527096136</p>
        <p className="text-gray-700">
          Email: <span className="[unicode-bidi:bidi-override] [direction:rtl]">ude.lfu@nart.ms</span>
        </p>
      </section>
    </div>
  );
}


