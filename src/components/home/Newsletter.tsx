import Container from "../common/Container";

function Newsletter() {
  return (
    <section className="bg-[#15110f] py-36 text-white">

      <Container>

        <div className="max-w-4xl mx-auto text-center">

          {/* SUBTITLE */}
          <p className="text-[#C8A96B] uppercase tracking-[6px] text-xs mb-8">

            Private Circle

          </p>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-serif leading-none mb-10">

            First Access. Always.

          </h2>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 text-lg leading-8 max-w-2xl mx-auto mb-14">

            Join the LUMIÈRE inner circle for early access
            to new formulations, expert editorials,
            and invitations to exclusive events.

          </p>

          {/* FORM */}
          <form className="max-w-3xl mx-auto">

            <div className="flex flex-col md:flex-row">

              {/* INPUT */}
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[#0d0d0d] border border-white/10 px-8 py-6 text-white placeholder:text-zinc-500 outline-none focus:border-[#C8A96B] transition-all duration-300"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#C8A96B] text-black uppercase tracking-[4px] text-sm px-12 py-6 hover:bg-white transition-all duration-300"
              >

                Subscribe

              </button>

            </div>

          </form>

          {/* SMALL TEXT */}
          <p className="text-zinc-500 text-sm mt-6">

            We respect your privacy. Unsubscribe at any time.

          </p>

        </div>

      </Container>

    </section>
  );
}

export default Newsletter;