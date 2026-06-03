import Container from "./Container";

const footerLinks = {
  products: [
    "Shop All",
    "Serums",
    "Moisturisers",
    "Eye Care",
    "Facial Oils",
    "Gift Sets",
  ],

  science: [
    "Our Science",
    "Ingredients Glossary",
    "Clinical Studies",
    "The Journal",
    "Brand Story",
  ],

  support: [
    "My Account",
    "Track an Order",
    "Returns & Exchanges",
    "Contact Us",
    "Store Locator",
  ],
};

function Footer() {
  return (
    <footer className="bg-black text-white pt-28 pb-10">

      <Container>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] gap-20 pb-20">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <h2 className="text-5xl tracking-[8px] font-serif mb-4">

              LUMIÈRE

            </h2>

            {/* SUBTITLE */}
            <p className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-8">

              Science-Led Skincare

            </p>

            {/* DESCRIPTION */}
            <p className="text-zinc-500 leading-8 max-w-sm">

              Luxury and efficacy are not opposites.
              For those who demand both.

            </p>

          </div>

          {/* PRODUCTS */}
          <div>

            <h3 className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-8">

              Products

            </h3>

            <ul className="space-y-5">

              {footerLinks.products.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition"
                  >

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* SCIENCE */}
          <div>

            <h3 className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-8">

              Science & Story

            </h3>

            <ul className="space-y-5">

              {footerLinks.science.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition"
                  >

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-8">

              Support

            </h3>

            <ul className="space-y-5">

              {footerLinks.support.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition"
                  >

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <p className="text-zinc-600 text-sm">

            © 2025 LUMIÈRE. All rights reserved.

          </p>

          {/* BOTTOM LINKS */}
          <div className="flex items-center gap-8 text-sm text-zinc-500">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Pinterest
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;