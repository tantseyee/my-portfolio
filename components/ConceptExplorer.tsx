
"use client";

import { useState } from "react";

const concepts = [
  {
    number: "01",
    title: "Visual Taste Scale",
    purpose: "Help users understand unfamiliar drinks.",
    strength:
      "Communicates flavour characteristics visually, making drinks easier to interpret.",
    limitation:
      "Users still need to browse the menu and narrow down choices themselves.",
    selected: false,
  },
  {
    number: "02",
    title: "Quick Compare",
    purpose: "Help users compare shortlisted drinks.",
    strength:
      "Highlights differences between drinks that users are already considering.",
    limitation:
      "Less useful for someone who has not yet formed a shortlist.",
    selected: false,
  },
  {
    number: "03",
    title: "Ask Luckin Wizard",
    purpose: "Help users find a starting point.",
    strength:
      "Uses preference questions to guide uncertain customers towards suitable drinks.",
    limitation:
      "Introduces extra steps, so it works best as an optional feature.",
    selected: true,
  },
];

export default function ConceptExplorer() {
  const [active, setActive] = useState(2);

  return (
    <section
      id="concepts"
      className="bg-white px-6 py-24 text-[#142B55]"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-widest text-blue-600">
          03 / EXPLORING DIRECTIONS
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Three ideas. One important design decision.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          We explored different approaches to make drink
          selection easier. Each addressed a different stage
          of decision-making, but we wanted to help customers
          who did not know where to begin.
        </p>

        {/* All content remains visible for PDF export */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {concepts.map((concept, index) => (
            <button
              type="button"
              key={concept.number}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`concept-card flex h-full flex-col rounded-3xl border p-7 text-left transition-all duration-300 ${
                active === index
                  ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-bold text-blue-500">
                  CONCEPT {concept.number}
                </span>

                {concept.selected && (
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    SELECTED
                  </span>
                )}
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                {concept.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                {concept.purpose}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xs font-bold tracking-wider text-blue-600">
                  WHAT WORKED
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {concept.strength}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold tracking-wider text-blue-600">
                  THE TRADE-OFF
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {concept.limitation}
                </p>
              </div>

              <div className="mt-auto pt-7">
                <span className="text-sm font-semibold text-blue-600">
                  {active === index
                    ? "Currently exploring ✓"
                    : "Explore this direction →"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Final rationale */}
        <div className="concept-card mt-10 rounded-3xl bg-[#123D86] p-8 text-white md:p-12">
          <p className="text-sm font-bold tracking-widest text-cyan-200">
            WHY WE CHOSE THE WIZARD
          </p>

          <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            The best interaction may happen before
            users start browsing.
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">
            The visual taste scale helped users understand
            drinks, while Quick Compare helped them evaluate
            options they had already shortlisted. However,
            neither fully addressed the uncertainty of
            customers who did not know where to start.
          </p>

          <p className="mt-5 max-w-3xl leading-relaxed text-blue-100">
            Ask Luckin was selected because it helps users
            narrow their preferences before entering the
            regular menu. By keeping it optional, we could
            support uncertain customers without interrupting
            those who already knew what they wanted.
          </p>
        </div>
      </div>
    </section>
  );
}
