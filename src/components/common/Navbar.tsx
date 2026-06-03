import { useEffect, useState } from "react";

import { useCart } from "../../context/CartContext";

import {
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import Container from "./Container";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >

        <Container>

          <div className="flex items-center justify-between py-6">

            {/* LEFT MENU DESKTOP */}
            <nav className="hidden lg:flex items-center gap-10 text-sm tracking-[3px] uppercase text-[#C8A96B]">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="hover:text-white transition"
              >
                Shop
              </Link>

              <Link
                to="/science"
                className="hover:text-white transition"
              >
                Science
              </Link>

            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setMenuOpen(true)
              }
              className="lg:hidden text-[#C8A96B]"
            >

              <FiMenu size={28} />

            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="text-center"
            >

              <h1 className="text-3xl md:text-5xl tracking-[8px] text-white font-serif">

                LUMIÈRE

              </h1>

              <p className="text-[10px] tracking-[4px] mt-1 text-[#C8A96B] uppercase">

                Science-Led Skincare

              </p>

            </Link>

            {/* RIGHT MENU */}
            <div className="flex items-center gap-6 md:gap-10 text-sm tracking-[3px] uppercase text-[#C8A96B]">

              <Link
                to="/account"
                className="hidden lg:block hover:text-white transition"
              >

                Account

              </Link>

              <Link
                to="/search"
                className="hidden lg:block hover:text-white transition"
              >

                Search

              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="relative flex items-center hover:text-white transition"
              >

                <FiShoppingBag size={22} />

                <span className="tracking-normal absolute -top-2 -right-3 bg-[#C8A96B] text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">

                  {cartItems.length}

                </span>

              </Link>

            </div>

          </div>

        </Container>

      </header>

      {/* OVERLAY */}
      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* OFFCANVAS MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-black border-r border-white/10 z-50 transition-all duration-500 ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">

          <div>

            <h2 className="text-3xl tracking-[6px] text-white font-serif">

              LUMIÈRE

            </h2>

            <p className="text-[10px] tracking-[4px] mt-2 text-[#C8A96B] uppercase">

              Science-Led Skincare

            </p>

          </div>

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            className="text-[#C8A96B]"
          >

            <FiX size={28} />

          </button>

        </div>

        {/* MENU LINKS */}
        <div className="flex flex-col p-8 space-y-8 text-[#C8A96B] uppercase tracking-[4px] text-sm">

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition"
          >

            Home

          </Link>

          <Link
            to="/shop"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition"
          >

            Shop

          </Link>

          <Link
            to="/science"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition"
          >

            Science

          </Link>

          <Link
            to="/account"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition"
          >

            Account

          </Link>

          <Link
            to="/search"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition"
          >

            Search

          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
            className="hover:text-white transition flex items-center gap-3"
          >

            Cart ({cartItems.length})

          </Link>

        </div>

      </div>
    </>
  );
}

export default Navbar;