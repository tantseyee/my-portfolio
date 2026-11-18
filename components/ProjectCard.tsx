
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition-all duration-300 hover:border-cyan-400">

      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Product Design
      </p>

      <h3 className="mt-3 text-3xl font-bold text-white">
        Coral Dream Alarm Clock
      </h3>

      <p className="mt-4 max-w-2xl text-slate-400">
        A seashell-inspired alarm clock concept exploring
        product modelling, visual communication, and design.
      </p>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
      >
        {open ? "Close Project ↑" : "Open Case Study →"}
      </button>

      {open && (
        <div className="mt-8 space-y-6 border-t border-slate-700 pt-8">

          <p className="text-slate-300">
            Explore the design posters and visual analysis
            created for this project.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Image
              src="/images/clock-poster1.jpg"
              alt="Coral Dream promotional poster"
              width={900}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />

            <Image
              src="/images/clock-poster2.jpg"
              alt="Coral Dream design analysis poster"
              width={900}
              height={1200}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <Image
            src="/images/clock-analysis.jpg"
            alt="Coral Dream syntactic analysis"
            width={1200}
            height={800}
            className="h-auto w-full rounded-2xl"
          />

        </div>
      )}
    </article>
  );
}
