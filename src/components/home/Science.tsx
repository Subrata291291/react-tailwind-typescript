import Container from "../common/Container";

const scienceFeatures = [
  {
    number: "01",
    title: "Clinical Precision",
    description:
      "Every formula is developed in partnership with leading dermatologists and tested against pharmaceutical-grade benchmarks.",
  },

  {
    number: "02",
    title: "Rare Actives",
    description:
      "We source only the highest-purity compounds — Bakuchiol, Peptide complexes, and cold-pressed botanical oils at clinically effective concentrations.",
  },

  {
    number: "03",
    title: "Zero Compromise",
    description:
      "No parabens, no fillers, no artificial fragrance. Every ingredient earns its place through independent efficacy data.",
  },
];

function Science() {
  return (
    <section className="bg-black py-32 text-white">

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* LEFT CONTENT */}
          <div>

            {/* SUBTITLE */}
            <p className="text-[#C8A96B] uppercase tracking-[6px] text-xs mb-8">

              Our Commitment

            </p>

            {/* TITLE */}
            <h2 className="text-5xl md:text-7xl leading-[1.05] font-serif mb-10">

              Science is our <br />

              <span className="text-[#C8A96B] italic">
                greatest luxury.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-12">

              LUMIÈRE was founded on a single belief:
              that true luxury in skincare is measurable,
              verifiable efficacy. Not packaging.
              Not promises.

            </p>

            {/* BUTTON */}
            <button className="text-white uppercase tracking-[4px] text-sm border-b border-white pb-2 hover:text-[#C8A96B] hover:border-[#C8A96B] transition-all duration-300">

              Read The Lumière Story

            </button>

          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col">

            {scienceFeatures.map((feature, index) => (

              <div
                key={feature.number}
                className={`py-10 ${
                  index !== 0
                    ? "border-t border-white/10"
                    : ""
                }`}
              >

                <div className="flex gap-8">

                  {/* NUMBER */}
                  <div className="text-[#C8A96B] text-5xl font-serif min-w-17.5">

                    {feature.number}

                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-3xl font-serif mb-4">

                      {feature.title}

                    </h3>

                    <p className="text-zinc-400 leading-8">

                      {feature.description}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Science;