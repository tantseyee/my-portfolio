
import Image from "next/image";
import Link from "next/link";
import WizardFlow from "@/components/WizardFlow";
import MyContributions from "@/components/MyContributions";

const imageFolder = "/images/ask-luckin/";

type Photo = {
  file: string;
  caption: string;
};

function Gallery({
  photos,
  columns = 2,
}: {
  photos: Photo[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <div
      className={`case-gallery my-10 grid gap-5 ${
        columns === 3
          ? "md:grid-cols-3"
          : columns === 2
          ? "md:grid-cols-2"
          : "grid-cols-1"
      }`}
    >
      {photos.map((photo) => {
        const src =
          imageFolder + encodeURIComponent(photo.file);

        return (
          <figure
            key={photo.file}
            className="case-figure rounded-3xl border border-blue-100 bg-white p-3 shadow-sm"
          >
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${photo.caption}`}
            >
              

<div className="flex w-full items-start justify-center overflow-hidden rounded-2xl bg-white">
  <Image
    src={src}
    alt={photo.caption}
    width={1200}
    height={900}
    className="h-auto w-full object-contain"
  />
</div>


            </a>
            <figcaption className="px-3 py-3 text-sm text-slate-500">
              {photo.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}


function Chapter({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="case-section scroll-mt-24 border-t border-blue-100 py-20 md:py-28"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-black tracking-tight text-[#102D62] md:text-5xl">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}


function Copy({ children }: { children: React.ReactNode }) {
  return (
    <p className="article-copy text-[17px] leading-[1.9] text-[#425773]">
      {children}
    </p>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="case-figure my-10 rounded-r-3xl border-l-4 border-blue-600 bg-[#E8F2FF] px-7 py-8 text-2xl font-bold leading-snug text-[#102D62] md:text-3xl">
      {children}
    </blockquote>
  );
}

const chapters = [
  ["motivation", "Motivation"],
  ["research", "Research"],
  ["exploration", "Exploration"],
  ["selection", "The Decision"],
  ["challenges", "Challenges"],
  ["refinement", "Refinement"],
  ["evaluation", "Evaluation"],
  ["reflection", "Reflection"],
];

export default function AskLuckinPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#203654]">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-hide {
            display: none !important;
          }

          .case-figure {
            break-inside: avoid;
            box-shadow: none !important;
          }

          .case-section {
            padding-top: 25px !important;
            padding-bottom: 25px !important;
          }

          .article-copy {
            font-size: 10pt !important;
            line-height: 1.5 !important;
          }

          h1, h2, h3, blockquote {
            break-after: avoid;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="print-hide sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-bold text-[#102D62] hover:text-blue-600"
          >
            ← Tse Yee
          </Link>
          <span className="hidden text-xs font-bold uppercase tracking-widest text-blue-600 sm:block">
            DV2008 · UI/UX Case Study
          </span>
          <a
            href="#reflection"
            className="text-sm font-semibold text-blue-600"
          >
            Reflection ↓
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-[#E8F2FF] px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-blue-200/60" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[40px] border-blue-200/60" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            An interface design story
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#102D62] md:text-7xl">
            Ask Luckin:
            <br />
            <span className="text-[#1671E8]">
              Turning Decision Fatigue
            </span>{" "}
            into a Confident Drink Choice
          </h1>

          <p className="mt-8 text-xl text-[#45688E]">
            A UX case study on Luckin Coffee&apos;s mobile ordering app.
          </p>

          <div className="mt-14 max-w-3xl rounded-3xl border border-white bg-white/70 p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
              A little introduction
            </p>
            <p className="text-lg leading-relaxed text-[#20436F]">
              Hello! :) I&apos;m Tse Yee and in the last few months,
              I have been working in a group of 4 to redesign
              the Luckin App&apos;s Interface. This UI/UX case study
              showcases the final result and what I have learnt.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "User Research",
              "Figma",
              "Interaction Design",
              "Usability Testing",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-200 px-4 py-2 text-sm font-medium text-[#315B91]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Chapter navigation */}
      <div className="print-hide mx-auto max-w-6xl overflow-x-auto px-6 py-7">
        <div className="flex min-w-max gap-6 text-sm font-medium text-[#5275A0]">
          {chapters.map(([id, name]) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-blue-600 hover:underline"
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <article className="mx-auto max-w-6xl px-6">

        {/* 01 MOTIVATION */}
        <Chapter id="motivation" title="Motivation">
          <div className="mx-auto max-w-3xl space-y-5">
            <Highlight>
              A blue deer has become difficult to miss in Singapore.
            </Highlight>

            <Copy>
              It appears in shopping malls, near MRT stations,
              below office towers and for us at NTU, right at
              South Spine. Luckin Coffee has increasingly become
              part of the everyday routine: ordering something
              cold between classes or grabbing a caffeine boost
              before an afternoon lecture.
            </Copy>
          </div>

          <Gallery
            photos={[
              {
                file: "blue deer has become difficult to miss.png",
                caption: "The familiar Luckin Coffee blue deer",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              That familiarity was exactly why my group chose to study it.
            </Copy>

            <Copy>
              For regular customers, the interface is familiar enough
              that most people do not stop to question it. Like many
              students, we had grown used to ordering through the app
              without thinking much about it. But once we paid closer
              attention, we noticed a few small moments that made
              choosing a drink harder than expected. That curiosity
              became the starting point for our project.
            </Copy>
          </div>

          <Gallery
            columns={1}
            photos={[
              {
                file: "survey front cover.png",
                caption: "Our initial user research survey",
              },
            ]}
          />
        </Chapter>

        {/* 02 RESEARCH */}
        <Chapter
          id="research"
          title="Uncovering Pain Points"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              To uncover the main pain points, we used 2 research methods:
            </Copy>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="case-figure rounded-2xl bg-[#E8F2FF] p-7">
                <p className="text-5xl font-black text-blue-600">39</p>
                <p className="mt-3 font-semibold text-[#173B6A]">
                  A User Survey conducted with a sample size of 39
                  customers, conducted on Google Forms
                </p>
              </div>

              <div className="case-figure rounded-2xl bg-[#E8F2FF] p-7">
                <p className="text-5xl font-black text-blue-600">5</p>
                <p className="mt-3 font-semibold text-[#173B6A]">
                  Semi-structured user interviews conducted with
                  5 customers in person
                </p>
              </div>
            </div>

            <Copy>
              The survey showed that deciding on a drink was not
              always effortless.
            </Copy>

            <Copy>
              The average level of overwhelm when deciding on their
              drink was 2.54 out of 5, with 5 being very overwhelmed.
            </Copy>

            <Copy>
              The average ease-of-decision score was 3.85 out of 5,
              with 5 being very easy to decide on their drink.
            </Copy>
          </div>

          <Gallery
            photos={[
              {
                file: "overwhelmed survey 1 to 5.png",
                caption: "Initial survey: feeling of overwhelm",
              },
              {
                file: "ease of decision survey 1 to 5.png",
                caption: "Initial survey: ease of deciding",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Highlight>
              However, a rating alone could not explain what
              was creating that uncertainty.
            </Highlight>

            <Copy>
              Because my role was mainly to conduct the interviews,
              I wanted to move beyond what users
              disliked about the app&apos;s interface. I did not
              want to begin by asking participants about the pain
              points because that would have pushed them towards
              my assumption. Instead, I started with their ordering
              habits: when they used the app, whether they usually
              knew what they wanted, and how they approached a new
              drink. From there, I followed up on moments of hesitation.
            </Copy>
          </div>

          
{/* Interview findings */}
<div className="mt-16">

  <h3 className="mt-3 text-3xl font-bold text-[#102D62]">
    What were users telling me?
  </h3>

  <p className="mt-4 max-w-2xl text-slate-600">
    These quotes revealed different frustrations with
    the menu, but they pointed towards a common problem.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {[
      {
        number: "01",
        quote:
          "A drink I saw appeared under another category...I wonder whether it's the same or different version so I scroll back up to double check.",
        rotation: "md:-rotate-2",
      },
      {
        number: "02",
        quote:
          "Constantly marketing and releasing new drinks and promotions...lead to some decision paralysis, if you're a new user.",
        rotation: "md:rotate-2",
      },
      {
        number: "03",
        quote:
          "If you're just browsing, it can take longer because there are many categories, seasonal drinks and recommendations.",
        rotation: "md:-rotate-1",
      },
    ].map((item) => (
      <figure
        key={item.number}
        className={`case-figure relative rounded-[28px] border-2 border-[#D7E7FF] bg-white p-7 transition-transform duration-300 hover:rotate-0 ${item.rotation}`}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-blue-500">
            INTERVIEWEE {item.number}
          </span>
          <span className="text-3xl text-blue-300">
            ”
          </span>
        </div>

        <blockquote className="text-xl font-semibold leading-relaxed text-[#173B6A]">
          “{item.quote}”
        </blockquote>


        <div className="absolute -bottom-3 left-9 h-5 w-5 rotate-45 border-b-2 border-r-2 border-[#D7E7FF] bg-white" />
      </figure>
    ))}
  </div>

  <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-500">
    Selected comments from five semi-structured interviews.
  </p>
</div>

{/* Transition to affinity mapping */}
<div className="mx-auto mt-20 max-w-3xl space-y-5">
  <Copy>
    After each interview, I did not immediately turn every
    comment into a solution. I first brought the responses
    together and colour-coded them, a lightweight
    affinity-mapping exercise.
  </Copy>
</div>

{/* Colour coding methodology */}
<div className="case-figure mt-12 grid items-center gap-8 rounded-3xl border border-blue-100 bg-white p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">

  <div className="mx-auto w-full max-w-[340px]">
    <Image
      src="/images/ask-luckin/luckin%20legend%20coding%20interview%20data%20into%20themes.png"
      alt="Colour coding legend used to categorise interview responses"
      width={550}
      height={850}
      className="h-auto w-full rounded-xl"
    />
  </div>

  <div>
    <p className="text-xs font-bold tracking-widest text-blue-600">
      MY RESEARCH PROCESS
    </p>

    <h3 className="mt-4 text-3xl font-bold text-[#102D62]">
      From raw comments to recurring patterns.
    </h3>

    <p className="mt-5 leading-relaxed text-slate-600">
      I colour-coded interview responses into themes,
      according to this legend
      instead of treating every comment as an isolated issue.
    </p>

    <p className="mt-5 leading-relaxed text-slate-600">
      This helped me identify patterns within drink
      categorisation and understand where customers
      experienced difficulty.
    </p>
  </div>
</div>



{/* Synthesis: separate from the legend */}
<div className="mt-12">
  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
    Connecting the dots
  </p>

  <h3 className="mt-3 text-3xl font-bold text-[#102D62]">
    I started noticing a pattern in Drink Categorisation.
  </h3>


</div>
            <div className="mx-auto max-w-3xl space-y-5">
            
{/* Connecting the dots: observations to insight */}
<div className="my-12">


  {/* Initial observations */}
  <p className="mb-6 text-lg text-[#425773]">
    When I first coded these comments, I treated them
    as separate issues:
  </p>

  
<div className="grid gap-4 md:grid-cols-3">
  {[
    {
      number: "01",
      title: "Duplicate listings",
    },
    {
      number: "02",
      title: "Decision paralysis",
    },
    {
      number: "03",
      title: "Browsing fatigue",
    },
  ].map((item) => (
    <div
      key={item.number}
      className="case-figure flex min-h-[150px] flex-col justify-between rounded-3xl border border-[#D8E7FC] bg-white p-6"
    >
      <span className="text-xs font-bold tracking-widest text-blue-500">
        OBSERVATION {item.number}
      </span>

      <h4 className="mt-6 text-xl font-bold text-[#102D62]">
        {item.title}
      </h4>
    </div>
  ))}
</div>


  {/* Connection */}
  <div className="my-9 flex justify-center">
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl text-blue-500">↓</span>
    </div>
  </div>

  <div className="case-figure rounded-3xl bg-[#E7F0FF] p-8 md:p-10">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
      MY INTERPRETATION
    </p>

    <h4 className="mt-5 text-2xl font-bold leading-snug text-[#102D62] md:text-3xl">
      Users were spending effort working out what each
      option meant before deciding on their drink.
    </h4>

    <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#425773]">
      <p>
        Seeing the big picture helped form this interpretation.
      </p>


      <p>
        This was the moment I realised that the category
        system was not doing the job it was meant to do:
        helping them narrow down choices.
      </p>
    </div>
  </div>

  {/* Final insight */}
  <div className="my-9 flex justify-center">
    <span className="text-4xl text-blue-500">↓</span>
  </div>

  <div className="case-figure rounded-3xl bg-[#102D62] p-8 text-white md:p-12">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
      THE KEY INSIGHT
    </p>

    <h4 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-4xl">
      People need help narrowing the
      decision before they start browsing.
    </h4>
  </div>

</div>

          </div>
        </Chapter>

        {/* 03 EXPLORATION */}
        <Chapter
          id="exploration"
          title="Exploring Better Starting Points"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              Once I understood that the issue was decision-making
              rather than simple navigation, I did not want to jump
              straight into one solution. I began by sketching
              different ways an uncertain customer could enter
              the menu without needing to understand Luckin&apos;s
              existing category structure.
            </Copy>

            <Copy>
              I explored ideas such as drink families, taste tags,
              visual taste scales, quick comparison, mood-based
              recommendations and a beginner menu. Each direction
              addressed part of the problem, but in a different way.
              For example, a visual taste scale could help users
              understand one drink at a glance, while drink
              comparison could help users distinguish between
              options they had already shortlisted.
            </Copy>
          </div>

          <Gallery
            columns={1}
            photos={[
              {
                file: "luckin sketches overall.png",
                caption: "Early explorations and concept sketches",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              During this stage, I kept asking questions to
              evaluate each concept: Would it reduce decision
              effort? Would it make unfamiliar drinks easier
              to understand?
            </Copy>

            <Copy>
              This helped me avoid treating every idea as a
              feature that needed to be included. Combining all
              of them would have created another overwhelming
              interface. Instead, I began to see certain
              concepts as possible supporting tools, while
              looking for one main interaction.
            </Copy>
          </div>
        </Chapter>

        {/* 04 DECISION */}
        <Chapter
          
          id="selection"
          title="Narrowing Down"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              I helped the group turn our ideas into early
              sketches and they all had several promising
              directions: mood-based recommendations,
              a beginner&apos;s menu, drink families,
              visual taste scales and a comparison tool.
            </Copy>

            <Copy>
              The difficult part was surprisingly not coming
              up with ideas, we had quite alot. It was letting
              go of ideas that were useful but did not solve
              the earliest moment of uncertainty.
            </Copy>

            <Copy>
              A visual scale could make one drink easier to
              understand, but it still required users to browse
              first. A quick comparison tool was useful for
              distinguishing similar drinks, but only after
              users had already shortlisted options.
            </Copy>

            <Copy>
              I realised that users may need help before they
              start comparing drinks. If someone opens the menu
              without knowing what they want, improving
              individual drink cards will not solve their first
              problem: where to begin.
            </Copy>

            <Copy>
              A guided wizard offered the clearest starting point.
              It allowed users to answer simple questions about
              what they wanted, instead of asking them to decode
              Luckin&apos;s menu categories first. However, I was
              worried about a trade-off: a guided flow could take
              more time than directly ordering a usual drink.
              For this reason, our team chose to make the wizard
              an optional entry point rather than a replacement
              for the existing menu.
            </Copy>
          </div>

          <div className="case-figure mt-12 rounded-3xl bg-[#102D62] p-10 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              The design decision
            </p>

            <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
              Help users decide where to begin,
              not just what to compare.
            </h3>

        
          </div>
        </Chapter>

        {/* 05 CHALLENGE */}
        <Chapter
          
          id="challenge"
          title="Challenge"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Highlight>
              Nobody wants to fill out a form when opening
              a coffee app.
            </Highlight>

            <Copy>
              A key challenge was that a wizard can easily
              overwhelm users by making them make more choices.
              That would have defeated the purpose: users
              already felt overwhelmed by choices, so the
              interface should not feel overwhelming.
            </Copy>

            <Copy>
              We initially considered a longer list of filters
              like types of flavours (roasty, chocolatey, fruity).
              But I felt it would recreate the same problem we
              were trying to solve: asking users to process
              too many choices.
            </Copy>

            <Copy>
              Instead, we started with the things people could
              answer instinctively. Do I want coffee or non-coffee?
              Am I looking for something sweet or bitter? Creamy
              or refreshing? Each answer was intended to make
              the next question feel simpler.
            </Copy>

            <Copy>
              To decide on the flow of the wizard, I helped
              organise all the luckin drinks into clear
              categories on Figma.
            </Copy>
          </div>

          <Gallery
            photos={[
              {
                file: "organising each drink on figma.png",
                caption: "Organising the drink categories in Figma",
              },
              {
                file: "final wizard flowchart.png",
                caption: "Final recommendation wizard flowchart",
              },
            ]}
          />

          {/* Interactive explanation of the conditional wizard flow */}
<WizardFlow />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              Then I worked with the team to sequence each
              question so that every answer meaningfully narrowed
              the recommendation. This also raised a challenge:
              taste is subjective. Terms such as &quot;creamy,&quot;
              &quot;refreshing,&quot; &quot;sweet&quot; may be
              interpreted slightly differently for every user.
              Designing preference labels that were simple enough
              to answer quickly, without oversimplifying what
              each drink actually tastes like, required careful thought.
            </Copy>
          </div>
        </Chapter>

        {/* 06 REFINEMENT */}
        <Chapter
          
          id="refinement"
          title="Refinement"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              We kept each screen focused on one small decision
              at a time, so users did not have to process every
              preference at once, supported by a five-step
              progress indicator.
            </Copy>

            <Copy>
              We also paid close attention to feedback and
              hierarchy. Selected options use a blue outline
              and checkmark icon on the top right so users get
              immediate feedback on their chosen choice. The
              action element &apos;Continue&apos; is consistently
              placed at the bottom of the screen, using
              Luckin&apos;s familiar blue, while Back and Close
              remain available for users who want to change
              direction or leave the wizard.
            </Copy>
          </div>

          <Gallery
            photos={[
              {
                file: "luckin prototype 1.png",
                caption: "Ask Luckin prototype screens",
              },
              {
                file: "luckin prototype 2.png",
                caption: "Ask Luckin prototype screens",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              During refinement, I used a friendlier tone
              and made the hierarchy in each screen stronger
              by removing unnecessary descriptions under
              each question and decreasing the font size
              of the quesiton number.
            </Copy>

            <Copy>
              Finally, we kept the visual language close
              to Luckin&apos;s existing app: rounded cards,
              navy headings and blue action elements.
            </Copy>
          </div>

          <Gallery
            columns={1}
            photos={[
              {
                file: "luckin prototype before after refinement.png",
                caption: "Before-and-after prototype refinements",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              These details may seem small individually,
              but together they made the wizard become
              less like a questionnaire, and more like
              a friendly guide to help them figure out
              what they feel like drinking.
            </Copy>
          </div>
        </Chapter>

        {/* 07 EVALUATION */}
        <Chapter
          
          id="evaluation"
          title="Usability Testing"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              We returned to roughly the same group of
              respondents from our first survey and used
              back the same questions so we could compare
              our findings with the first survey.
            </Copy>
          </div>

          <div className="my-12 grid gap-5 sm:grid-cols-2">
            <div className="case-figure rounded-3xl border border-blue-100 bg-white p-8">
              <p className="font-semibold text-slate-500">
                Ease of decision
              </p>
              <p className="mt-5 text-5xl font-black text-blue-600">
                +13.2%
              </p>
              <p className="mt-4 text-slate-600">
                3.85 → 4.36 out of 5
              </p>
            </div>

            <div className="case-figure rounded-3xl border border-blue-100 bg-white p-8">
              <p className="font-semibold text-slate-500">
                Feeling of overwhelm
              </p>
              <p className="mt-5 text-5xl font-black text-blue-600">
                −27.2%
              </p>
              <p className="mt-4 text-slate-600">
                2.54 → 1.85 out of 5
              </p>
            </div>
          </div>

          

          <Gallery
            photos={[
              {
                file: "survey assignment 3 ease of decision.png",
                caption: "Follow-up survey: ease of decision",
              },
              {
                file: "survey assignment 3 level of overwhelm.png",
                caption: "Follow-up survey: feeling of overwhelm",
              },
            ]}
          />

          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              What we found most useful was the nuance
              behind the overall results. Respondents
              who had previously felt more uncertain
              about what to order gave a more positive
              impression of the wizard. In contrast,
              frequent coffee drinkers often already
              knew their usual order and were less
              likely to report that they would use it.
            </Copy>

            <Copy>
              This reinforced an important decision in
              the final design: Ask Luckin should remain
              optional. It should only be used when
              someone needs help choosing, without
              slowing down someone who already knows
              exactly what they want.
            </Copy>
          </div>
        </Chapter>

<MyContributions />

        {/* 08 REFLECTION */}
        <Chapter
        
          id="reflection"
          title="Reflection"
        >
          <div className="mx-auto max-w-3xl space-y-5">
            <Copy>
              At the start of this project, my instinct
              was to make the menu clearer: reduce
              duplicate listings, rename categories
              or add filters.
            </Copy>

            <Copy>
              Conducting the interviews changed that
              framing. When I listened to how people
              described browsing, the issue was not
              simply that information was missing.
              It was that users had to interpret too
              much information before they could
              decide what mattered to them.
            </Copy>

            <Highlight>
              This was the point where I began to see
              design less as adding features, and more
              as reducing the mental work needed to
              take the next step.
            </Highlight>

            <Copy>
              Our current prototype suggests that the
              Ask Luckin Wizard can make deciding feel
              easier. But I worry that if it narrows
              choices too aggressively, it may filter
              off an option a user would have preferred. 
            Therefore, I would also want to test the feature in a live,
              task-based study with a wider and more
              varied group of Luckin customers.
              I would compare the usual menu against
              our wizard and measure:
            </Copy>

            <ul className="ml-6 list-disc space-y-3 text-[17px] leading-relaxed text-[#425773]">
              <li>Time taken to settle on a drink</li>
              <li>
                Whether users accept, customise or
                abandon the recommendation
              </li>
              <li>
                Confidence and satisfaction after ordering
              </li>
            </ul>
          </div>
        </Chapter>

        
{/* Closing thought */}
<section className="case-section py-20 text-center md:py-28">
  <div className="mx-auto max-w-3xl">

    <p className="text-sm font-semibold tracking-widest text-blue-600">
      ONE LAST THOUGHT
    </p>

    <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#425773]">
      Looking back, what started as an attempt to improve
      Luckin&apos;s menu turned into an exploration of how
      people make decisions.
    </p>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#425773]">
      Ask Luckin may not be something every customer needs,
      but for someone who opens the app without knowing
      what to order, I hope it can make that small moment
      of uncertainty a little easier :) 
    </p>

  </div>
</section>

        
<footer className="border-t border-blue-100 py-16">
  <div className="rounded-3xl bg-[#E8F2FF] p-8 md:p-12">
    <p className="text-sm font-bold tracking-widest text-blue-600">
      WANT TO SEE THE FINAL DESIGN?
    </p>

    <h2 className="mt-4 text-3xl font-black text-[#102D62] md:text-4xl">
      Experience Ask Luckin yourself!
    </h2>


    <a
      href="https://www.figma.com/proto/yc8jItMZ8jw4HKPYKC7KN2/Better-Luckin?node-id=113-312&t=VZ0zHLp9sj6gCeju-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=113%3A312"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#102D62] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
    >
      Click here to try the prototype!
      <span aria-hidden="true">↗</span>
    </a>
  </div>

  <p className="mt-10 max-w-3xl leading-relaxed text-slate-600">
    Ask Luckin was developed as a team project by Claudia,
    Tse Yee, Jiahao and Anastasia for DV2008 Interface Design.
  </p>

  <Link
    href="/"
    className="print-hide mt-8 inline-block font-semibold text-blue-700 hover:underline"
  >
    ← Back to Portfolio
  </Link>
</footer>

      </article>
    </main>
  );
}
