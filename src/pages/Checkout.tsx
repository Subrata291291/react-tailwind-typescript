import { useState } from "react";

import type { Product } from "../types/product";

import Container from "../components/common/Container";

import { useCart } from "../context/CartContext";

import { products } from "../data/products";

function Checkout() {
  const { cartItems } = useCart();

  /* DELIVERY METHOD */
  const [deliveryMethod, setDeliveryMethod] =
    useState("standard");

  /* SELECTED SAMPLE IDS */
  const [selectedSamples, setSelectedSamples] =
    useState<string[]>([]);

  /* SELECTED SAMPLE PRODUCTS */
  const [
    selectedSampleProducts,
    setSelectedSampleProducts,
  ] = useState<Product[]>([]);

  /* TOTAL PRICE */
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  /* SHIPPING */
  const shipping =
    deliveryMethod === "next-day" ? 5 : 0;

  /* TOTAL */
  const total = subtotal + shipping;

  /* PRODUCTS NOT IN CART */
  const sampleProducts = products.filter(
    (product) =>
      !cartItems.some(
        (item) => item.id === product.id
      )
  );

  /* SAMPLE SELECT */
  const handleSampleSelect = (
    product: Product
  ) => {
    const exists =
      selectedSampleProducts.find(
        (item) => item.id === product.id
      );

    /* REMOVE */
    if (exists) {
      setSelectedSampleProducts((prev) =>
        prev.filter(
          (item) => item.id !== product.id
        )
      );

      setSelectedSamples((prev) =>
        prev.filter((id) => id !== product.id)
      );

      return;
    }

    /* LIMIT 2 */
    if (
      selectedSampleProducts.length >= 1
    ) {
      return;
    }

    /* ADD */
    setSelectedSampleProducts((prev) => [
      ...prev,
      product,
    ]);

    setSelectedSamples((prev) => [
      ...prev,
      product.id,
    ]);
  };

  return (
    <section className="bg-black min-h-screen text-white pt-40 pb-24">

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14">

          {/* LEFT SIDE */}
          <div>

            {/* EXPRESS CHECKOUT */}
            <div className="mb-14">

              <p className="uppercase tracking-[4px] text-xs text-[#C8A96B] mb-6">

                Express Checkout

              </p>

              <div className="grid grid-cols-2 gap-6">

                <button className="bg-[#C8A96B] text-black uppercase tracking-[3px] text-sm py-5 hover:bg-white transition-all duration-300">

                  Apple Pay

                </button>

                <button className="border border-white/10 uppercase tracking-[3px] text-sm py-5 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300">

                  Google Pay

                </button>

              </div>

            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-5 mb-16">

              <div className="flex-1 h-px bg-white/10"></div>

              <span className="text-[10px] uppercase tracking-[3px] text-zinc-500">

                Or Continue With Shipping

              </span>

              <div className="flex-1 h-px bg-white/10"></div>

            </div>

            {/* SHIPPING INFO */}
            <div className="mb-16">

              <h2 className="text-4xl font-serif mb-10">

                Shipping Information

              </h2>

              <div className="space-y-8">

                {/* EMAIL */}
                <div>

                  <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder=""
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B] transition-all"
                  />

                </div>

                {/* NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div>

                    <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                      First Name

                    </label>

                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B]"
                    />

                  </div>

                  <div>

                    <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                      Last Name

                    </label>

                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B]"
                    />

                  </div>

                </div>

                {/* ADDRESS */}
                <div>

                  <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                    Street Address

                  </label>

                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B]"
                  />

                </div>

                {/* CITY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div>

                    <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                      Postal Code

                    </label>

                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B]"
                    />

                  </div>

                  <div>

                    <label className="text-[12px] uppercase tracking-[3px] text-zinc-500 block mb-4">

                      City

                    </label>

                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-[#C8A96B]"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* SAMPLES */}
            <div className="border border-white/10 p-8 px-4 md:px-0 bg-[#14110f]">

              {/* TOP */}
              <div className="flex items-center justify-between mb-10">

                <h2 className="text-2xl sm:text-3xl font-serif">

                  Select Your Free Samples

                </h2>

                <p className="uppercase tracking-[3px] text-xs text-[#C8A96B]">

                  Choose 2

                </p>

              </div>

              {/* SAMPLE GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {sampleProducts.map((product) => (

                  <div
                    key={product.id}
                    onClick={() =>
                      handleSampleSelect(product)
                    }
                    className={`border p-4 cursor-pointer transition-all duration-300 ${
                      selectedSamples.includes(
                        product.id
                      )
                        ? "border-[#C8A96B]"
                        : "border-white/10"
                    }`}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover mb-5"
                    />

                    <p className="text-zinc-500 uppercase text-[10px] tracking-[3px] mb-2">

                      Sample

                    </p>

                    <h3 className="font-serif text-xl mb-5">

                      {product.name}

                    </h3>

                    <label className="flex items-center gap-3 text-sm text-zinc-400">

                      <input
                        type="checkbox"
                        checked={selectedSamples.includes(
                          product.id
                        )}
                        readOnly
                      />

                      Select

                    </label>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* ORDER SUMMARY */}
            <div className="bg-[#1a1715] border border-white/10 p-8 sticky top-32">

              <h2 className="text-4xl font-serif mb-10">

                Order Summary

              </h2>

              {/* PRODUCTS */}
              <div className="space-y-8 mb-10">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-5"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />

                    <div className="flex-1">

                      <div className="flex items-start justify-between">

                        <div>

                          <h3 className="font-serif text-lg">

                            {item.name}

                          </h3>

                          <p className="text-zinc-500 text-sm mt-2">

                            Qty : {item.quantity}

                          </p>

                        </div>

                        <p className="text-lg">

                          $
                          {item.price *
                            item.quantity}

                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* SELECTED SAMPLES */}
              {selectedSampleProducts.length >
                0 && (

                <div className="border-t border-white/10 pt-8 mb-10">

                  <p className="uppercase tracking-[3px] text-xs text-[#C8A96B] mb-6">

                    Selected Samples

                  </p>

                  <div className="space-y-5">

                    {selectedSampleProducts.map(
                      (sample) => (

                        <div
                          key={sample.id}
                          className="flex gap-4"
                        >

                          <img
                            src={sample.image}
                            alt={sample.name}
                            className="w-16 h-16 object-cover"
                          />

                          <div>

                            <h4 className="font-serif text-lg">

                              {sample.name}

                            </h4>

                            <p className="text-zinc-500 text-sm mt-1">

                              Complimentary
                              Sample

                            </p>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {/* DELIVERY */}
              <div className="border-t border-white/10 pt-8 mb-10">

                <p className="uppercase tracking-[3px] text-xs text-[#C8A96B] mb-6">

                  Delivery Method

                </p>

                <div className="space-y-5">

                  {/* STANDARD */}
                  <label className="flex items-start justify-between gap-4 cursor-pointer border border-white/10 p-5">

                    <div className="flex items-start gap-4">

                      <input
                        type="radio"
                        name="delivery"
                        checked={
                          deliveryMethod ===
                          "standard"
                        }
                        onChange={() =>
                          setDeliveryMethod(
                            "standard"
                          )
                        }
                        className="mt-1"
                      />

                      <div>

                        <p>

                          Standard Concierge
                          Delivery

                        </p>

                        <p className="text-zinc-500 text-sm mt-1">

                          Eco-conscious
                          packaging (3–5
                          days)

                        </p>

                      </div>

                    </div>

                    <span className="text-[#C8A96B]">

                      Free

                    </span>

                  </label>

                  {/* NEXT DAY */}
                  <label className="flex items-start justify-between gap-4 cursor-pointer border border-white/10 p-5">

                    <div className="flex items-start gap-4">

                      <input
                        type="radio"
                        name="delivery"
                        checked={
                          deliveryMethod ===
                          "next-day"
                        }
                        onChange={() =>
                          setDeliveryMethod(
                            "next-day"
                          )
                        }
                        className="mt-1"
                      />

                      <div>

                        <p>

                          Next Day Ritual
                          Arrival

                        </p>

                        <p className="text-zinc-500 text-sm mt-1">

                          Signature gift
                          wrap included

                        </p>

                      </div>

                    </div>

                    <span className="text-[#C8A96B]">

                      $5

                    </span>

                  </label>

                </div>

              </div>

              {/* TOTALS */}
              <div className="space-y-5 border-t border-white/10 pt-8">

                <div className="flex items-center justify-between">

                  <span className="text-zinc-500">

                    Subtotal

                  </span>

                  <span>${subtotal}</span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-zinc-500">

                    Shipping

                  </span>

                  <span>${shipping}</span>

                </div>

                <div className="flex items-center justify-between pt-4">

                  <span className="text-2xl">

                    Total

                  </span>

                  <span className="text-3xl text-[#C8A96B]">

                    USD ${total}

                  </span>

                </div>

              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#C8A96B] text-black font-medium uppercase tracking-[4px] text-sm py-5 mt-10 hover:bg-white transition-all duration-300">

                Complete Your Ritual

              </button>

              <p className="text-center text-zinc-500 text-xs tracking-[2px] mt-6 uppercase">

                Free returns within 30
                days of delivery

              </p>

            </div>

            {/* BADGES */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="border border-white/10 p-6 text-center text-xs uppercase tracking-[3px] text-zinc-400">

                Eco-Luxury Certified

              </div>

              <div className="border border-white/10 p-6 text-center text-xs uppercase tracking-[3px] text-zinc-400">

                Secure Payment

              </div>

              <div className="border border-white/10 p-6 text-center text-xs uppercase tracking-[3px] text-zinc-400">

                Ethical Sourcing

              </div>

              <div className="border border-white/10 p-6 text-center text-xs uppercase tracking-[3px] text-zinc-400">

                Carbon Neutral

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Checkout;