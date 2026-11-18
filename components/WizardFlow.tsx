
"use client";

import { useState } from "react";


const stages = [
  "Coffee / Non-coffee",
  "Milk / Non-milk",
  "Relevant flavour",
  "Sweetness",
  "Temperature",
  "Your match",
];

const examples = [
  {
    id: "pomelo",
    label: "Zesty Pomelo",
    subtitle: "THE SHORTER ROUTE",
    explanation:
      "Selecting non-coffee and non-milk leads directly to a recommendation. The remaining questions are unnecessary for this route.",
    steps: [
      {
        label: "Coffee or non-coffee?",
        answer: "Non-coffee",
        skipped: false,
      },
      {
        label: "Milk or non-milk?",
        answer: "Non-milk",
        skipped: false,
      },
      {
        label: "Relevant flavour",
        answer: "Not needed",
        skipped: true,
      },
      {
        label: "Sweetness",
        answer: "Not needed",
        skipped: true,
      },
      {
        label: "Temperature",
        answer: "Not needed",
        skipped: true,
      },
      {
        label: "Your match",
        answer: "Zesty Pomelo",
        skipped: false,
      },
    ],
  },
  {
    id: "americano",
    label: "Iced Americano",
    subtitle: "THE LONGER ROUTE",
    explanation:
      "The coffee route asks additional preference questions to narrow the recommendation.",
    steps: [
      {
        label: "Coffee or non-coffee?",
        answer: "Coffee",
        skipped: false,
      },
      {
        label: "Milk or non-milk?",
        answer: "Non-milk",
        skipped: false,
      },
      {
        label: "Which coffee style?",
        answer: "Bold & Roasty",
        skipped: false,
      },
      {
        label: "How sweet should it be?",
        answer: "50%",
        skipped: false,
      },
      {
        label: "Hot or iced?",
        answer: "Iced",
        skipped: false,
      },
      {
        label: "Your match",
        answer: "Iced Americano",
        skipped: false,
      },
    ],
  },
];


export default function WizardFlow() {
  const [active, setActive] = useState("pomelo");

  return (
    <section
      id="wizard-flow"
      className="my-16 text-[#102D62]"
    >
      {/* Section heading */}
      <div className="mb-10">
        

        <h3 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
          Not every drink needs five questions.
        </h3>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          The wizard follows a general preference sequence,
          but different answers can lead to shorter paths.
          The goal is to ask only questions that help narrow
          the recommendation.
        </p>
      </div>

      {/* General five-stage flow */}
      <div className="case-figure rounded-3xl bg-[#102D62] p-6 md:p-8">
    

        <div className="flex flex-wrap items-center gap-2">
          {stages.map((stage, index) => (
            <div
              key={stage}
              className="flex items-center gap-2"
            >
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white">
                {stage}
              </div>

              {index < stages.length - 1 && (
                <span
                  className="text-xl text-cyan-300"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

    
      </div>

      {/* Example selection */}
      <div className="print-hide mt-12">
        <p className="mb-4 text-sm font-semibold text-slate-600">
          Select an example to highlight its journey:
        </p>

        <div className="flex flex-wrap gap-3">
          {examples.map((example) => (
            <button
              key={example.id}
              type="button"
              onClick={() => setActive(example.id)}
              aria-pressed={active === example.id}
              className={`rounded-full border px-6 py-3 font-semibold transition-colors ${
                active === example.id
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
              }`}
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      {/* Both examples stay visible for PDF */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {examples.map((example) => {
          const selected = active === example.id;
          const questionCount = example.steps.filter(
            (step) => !step.skipped && step.label !== "Your match"
          ).length;

          return (
            <article
              key={example.id}
              className={`case-figure rounded-3xl border-2 bg-white p-6 transition-colors md:p-8 ${
                selected
                  ? "border-blue-500"
                  : "border-blue-100"
              }`}
            >
              <div className="mb-7">
                <p className="text-xs font-bold tracking-widest text-blue-600">
                  {example.subtitle.toUpperCase()}
                </p>

                <h4 className="mt-3 text-2xl font-bold">
                  {example.label}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {example.explanation}
                </p>

                <div className="mt-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
                  {questionCount} preference questions
                </div>
              </div>

              <ol className="space-y-3">
                {example.steps
  .filter((step) => !step.skipped)
  .map((step, index) => {
                  const isMatch = step.label === "Your match";

                  return (
                    <li key={step.label}>
                      <div
                        className={`flex items-center justify-between gap-3 rounded-2xl border p-4 ${
                          isMatch
                            ? "border-[#102D62] bg-[#102D62] text-white"
                            : step.skipped
                            ? "border-dashed border-slate-200 bg-slate-50 text-slate-400"
                            : "border-blue-100 bg-[#F1F6FF] text-[#102D62]"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className={`text-xs font-bold ${
                              isMatch
                                ? "text-cyan-200"
                                : "text-blue-500"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <p className="text-xs opacity-75">
                              {step.label}
                            </p>

                            <p className="mt-1 font-semibold">
                              {step.answer}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 text-xs font-medium">
                          {step.skipped
                            ? "SKIP"
                            : isMatch
                            ? "MATCH ✓"
                            : "✓"}
                        </span>
                      </div>

                      {index < example.steps.filter((step) => !step.skipped).length - 1 && (
                        <div
                          className="py-1 text-center text-blue-300"
                          aria-hidden="true"
                        >
                          ↓
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </article>
          );
        })}
      </div>

      {/* Design rationale */}
      <div className="case-figure mt-10 rounded-3xl bg-[#E8F2FF] p-8 md:p-10">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          WHY THIS MATTERS
        </p>

        <h4 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
          The wizard should reduce decisions,
          not create unnecessary ones.
        </h4>

        <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
          Although our wizard follows a general sequence of preference questions, not every user needs to complete all five. For example, selecting non-coffee and non-milk leads directly to Zesty Pomelo, while reaching an Iced Americano involves further questions about coffee style, sweetness and temperature. By allowing users to skip irrelevant questions, we aimed to prevent the wizard itself from becoming another source of decision fatigue.
        </p>
      </div>
    </section>
  );
}
