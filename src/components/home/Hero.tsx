import Container from "../common/Container";

function Hero() {
  return (
    <section className="relative h-screen max-h-230 bg-black overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-360 mx-auto w-full">

          <Container>

            {/* TOP LABEL */}
            <p className="text-[#C8A96B] uppercase tracking-[6px] text-xs mb-8">
              New Collection — 2026
            </p>

            {/* MAIN TITLE */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-7xl leading-tight font-serif">

              The Art of  <span className="text-[#C8A96B] italic"> Luminous </span> Skin

            </h1>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-lg leading-7 mt-4 max-w-lg">
              Precision formulations engineered at the intersection
              of luxury and clinical science. Revealed over time.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-8 mt-12">

              <button className="bg-[#C8A96B] font-medium text-black px-10 py-4 uppercase tracking-[3px] text-sm hover:bg-white transition">
                Explore The Collection
              </button>

              <button className="text-white uppercase hidden sm:block tracking-[3px] text-sm border-b border-white pb-1 hover:text-[#C8A96B] transition">
                Our Science
              </button>

            </div>

          </Container>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute hidden sm:block bottom-20 right-12 text-[#C8A96B] uppercase tracking-[4px] text-xs">

        <p>Scroll To Discover</p>

        <div className="w-px h-16 bg-[#C8A96B] mx-auto mt-4"></div>

      </div>

    </section>
  );
}

export default Hero;