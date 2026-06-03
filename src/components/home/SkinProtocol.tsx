import Container from "../common/Container";

function SkinProtocol() {
  return (
    <section className="bg-[#1A1714] py-28 text-white">

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* SUBTITLE */}
            <p className="text-[#C8A96B] uppercase tracking-[6px] text-xs mb-6">

              Personalised Science

            </p>

            {/* TITLE */}
            <h2 className="text-5xl md:text-5xl font-serif leading-none mb-8 max-w-3xl">

              Your Skin. Your Protocol.

            </h2>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-lg leading-8 max-w-2xl">

              Answer 7 questions. Receive a bespoke formulation ritual
              curated by our dermatological team — complimentary,
              with no obligation.

            </p>

          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-col items-start lg:items-end">

            {/* BUTTON */}
            <button className="bg-[#C8A96B] font-medium text-black uppercase tracking-[4px] text-sm px-14 py-5 hover:bg-white transition-all duration-300 hover:scale-105">

              Begin Consultation

            </button>

            {/* SMALL TEXT */}
            <p className="text-zinc-500 text-sm mt-5 tracking-wide">

              Takes under 3 minutes

            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default SkinProtocol;