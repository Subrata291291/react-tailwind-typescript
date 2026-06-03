import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const protocols = [
  {
    id: 1,
    label: "Morning Ritual",
    title: "Luminance AM Protocol",
    description:
      "4 curated pieces. Protection, glow, and lasting radiance.",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 2,
    label: "Evening Ritual",
    title: "Renewal PM Protocol",
    description:
      "5 targeted formulas. Repair, restore, and transform overnight.",
    price: "$580",
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1400&auto=format&fit=crop",
  },
];

function Protocols() {
  return (
    <section className="bg-[#15110f] py-32 text-white">

      <Container>

        {/* SECTION TITLE */}
        <SectionTitle
          title="Complete Rituals"
          subtitle="Designed Together"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          {protocols.map((protocol) => (

            <div
              key={protocol.id}
              className="relative group overflow-hidden min-h-155"
            >

              {/* IMAGE */}
              <img
                src={protocol.image}
                alt={protocol.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 flex items-end h-full p-10">

                <div>

                  {/* LABEL */}
                  <p className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-3">

                    {protocol.label}

                  </p>

                  {/* TITLE */}
                  <h3 className="text-4xl font-serif mb-4 leading-tight">

                    {protocol.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-zinc-400 max-w-md leading-7 mb-8">

                    {protocol.description}

                  </p>

                  {/* BUTTON */}
                  <button className="uppercase tracking-[3px] text-sm text-[#C8A96B] border-b border-[#C8A96B] pb-2 hover:text-white hover:border-white transition-all duration-300">

                    Shop The Set — {protocol.price}

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Protocols;