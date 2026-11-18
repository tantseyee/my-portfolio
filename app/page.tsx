import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

          <h2 className="font-bold text-xl">
            Tse Yee
          </h2>

          <div className="flex gap-8">
            <a href="#projects">Projects</a>
            <a href="#strengths">Strengths</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 pt-40 pb-32">

        <p className="text-cyan-400 mb-4">
          SOFTWARE ENGINEER • UI/UX DESIGNER
        </p>

        <h1 className="text-6xl font-bold max-w-4xl">
          I turn complex systems into intuitive experiences.
        </h1>

        <p className="text-xl text-gray-400 mt-8 max-w-2xl">
          Information Engineering & Media student at NTU with
          experience building software solutions for smart
          manufacturing systems at HMGICS.
        </p>

      </section>


{/* Projects Section */}
<section
  id="projects"
  className="mx-auto max-w-6xl scroll-mt-24 px-8 py-20"
>
  <h2 className="mb-10 text-4xl font-bold">
    Projects
  </h2>

  <div className="space-y-6">

    {/* Ask Luckin UI/UX Case Study */}
    <Link
      href="/projects/ask-luckin"
      className="group block rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#102B5E] to-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_15px_50px_rgba(34,211,238,0.12)]"
    >
      <p className="text-sm font-semibold tracking-widest text-cyan-300">
        UI/UX DESIGN · FEATURED PROJECT
      </p>

      <h3 className="mt-4 text-3xl font-bold text-white">
        Ask Luckin
      </h3>

      <p className="mt-3 max-w-xl text-slate-300">
        Turning decision fatigue into a confident drink choice.
        A research-driven redesign of Luckin Coffee's
        mobile ordering experience.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Figma", "UX Research", "Prototyping"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 font-semibold text-cyan-300">
        Explore case study →
      </p>
    </Link>

    {/* Existing Clock Project */}
    <ProjectCard />

  </div>
</section>


      {/* Strengths */}
      <section
        id="strengths"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold">
          Strengths
        </h2>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold">
          Experience
        </h2>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold">
          Contact
        </h2>
      </section>

    </main>
  );
}