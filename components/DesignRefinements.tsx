
import Image from "next/image";

const refinements = [
  {
    number: "01",
    title: "Making each decision feel smaller",
    problem:
      "A long list of flavour filters risked recreating the same choice overload we wanted to solve.",
    before: "Multiple flavour descriptors to consider",
    after: "Simple, sequential preference questions",
    decision:
      "We moved towards questions users could answer more instinctively, such as sweet or bitter, and creamy or refreshing.",
    why:
      "Each answer narrows the recommendation without making users evaluate every preference at once.",
    beforeImage: "",
    afterImage: "",
  },
  {
    number: "02",
    title: "Making selections unmistakable",
    problem:
      "Users needed a clear indication that their choice had been registered and that they were progressing through the wizard.",
    before: "Early interaction and selection designs",
    after: "Blue outline, checkmark and progress indicator",
    decision:
      "Selected options use a blue border and a checkmark in the top-right corner. A five-step progress indicator communicates the journey.",
    why:
      "Immediate feedback reduces uncertainty, while visible progress helps users understand how much remains.",
    beforeImage: "",
    afterImage: "",
  },
  {
    number: "03",
    title: "Making the next action obvious",
    problem:
      "Excessive descriptions and competing text elements could distract users from the main question.",
    before: "More explanatory text and visual elements",
    after: "Clearer hierarchy and consistent actions",
    decision:
      "We removed unnecessary descriptions, reduced the prominence of question numbers, and kept Continue in a consistent position.",
    why:
      "Users can focus on answering the question rather than working out where to look or what to do next.",
    beforeImage: "",
    afterImage: "",
  },
];

export default function DesignRefinements() {
  return (
    <section
      id="refinements"
      className="bg-[#F3F7FF] px-6 py-24 text-[#142B55]"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section introduction */}
        <p className="text-sm font-bold tracking-widest text-blue-600">
          04 / DESIGN REFINEMENT
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Making the experience feel less like a questionnaire.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          A recommendation wizard could easily become another
          source of decision fatigue. Through refinement, we
          focused on making each choice simpler, clearer
          and easier to navigate.
        </p>

        {/* Refinement cards */}
        <div className="mt-14 space-y-10">
          {refinements.map((item) => (
            <article
              key={item.number}
              className="refinement-card overflow-hidden rounded-3xl border border-blue-100 bg-white"
            >
              <div className="p-7 md:p-10">
                <p className="text-sm font-bold tracking-widest text-blue-600">
                  REFINEMENT {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                  {item.problem}
                </p>

                {/* Side-by-side design comparison */}
                <div className="mt-9 grid gap-5 md:grid-cols-2">

                  {/* Earlier direction */}
                  <div className="rounded-2xl bg-slate-100 p-5">
                    <p className="text-xs font-bold tracking-widest text-slate-500">
                      EARLIER DIRECTION
                    </p>

                    <div className="mt-4 flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
                      {item.beforeImage ? (
                        <Image
                          src={item.beforeImage}
                          alt={`Earlier design: ${item.title}`}
                          width={700}
                          height={900}
                          className="h-auto max-h-80 w-auto object-contain"
                        />
                      ) : (
                        <p className="max-w-xs text-center text-sm text-slate-400">
                          Add your early Figma design screenshot here
                        </p>
                      )}
                    </div>

                    <p className="mt-4 text-sm font-medium text-slate-600">
                      {item.before}
                    </p>
                  </div>

                  {/* Refined direction */}
                  <div className="rounded-2xl bg-blue-50 p-5">
                    <p className="text-xs font-bold tracking-widest text-blue-600">
                      REFINED DESIGN
                    </p>

                    <div className="mt-4 flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-blue-200 bg-white p-4">
                      {item.afterImage ? (
                        <Image
                          src={item.afterImage}
                          alt={`Refined design: ${item.title}`}
                          width={700}
                          height={900}
                          className="h-auto max-h-80 w-auto object-contain"
                        />
                      ) : (
                        <p className="max-w-xs text-center text-sm text-blue-400">
                          Add your refined Figma screenshot here
                        </p>
                      )}
                    </div>

                    <p className="mt-4 text-sm font-medium text-blue-700">
                      {item.after}
                    </p>
                  </div>
                </div>

                {/* Design reasoning */}
                <div className="mt-8 grid gap-6 border-t border-slate-100 pt-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-blue-600">
                      WHAT WE CHANGED
                    </p>

                    <p className="mt-3 leading-relaxed text-slate-600">
                      {item.decision}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-blue-600">
                      WHY IT MATTERS
                    </p>

                    <p className="mt-3 leading-relaxed text-slate-600">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section takeaway */}
        <div className="refinement-card mt-12 rounded-3xl bg-[#123D86] p-8 text-white md:p-12">
          <p className="text-sm font-bold tracking-widest text-cyan-200">
            DESIGN TAKEAWAY
          </p>

          <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight">
            The wizard should guide users, not give them
            another set of decisions to struggle with.
          </h3>

          <p className="mt-5 max-w-3xl leading-relaxed text-blue-100">
            By breaking preferences into smaller steps,
            improving selection feedback and simplifying
            visual hierarchy, we aimed to make the experience
            feel like a helpful conversation rather than
            a lengthy form.
          </p>
        </div>
      </div>
    </section>
  );
}
