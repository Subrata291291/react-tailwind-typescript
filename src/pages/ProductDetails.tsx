import { useEffect, useMemo, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Container from "../components/common/Container";

import { products } from "../data/products";

import { useCart } from "../context/CartContext";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  /* FIND PRODUCT */
  const product = products.find(
    (item) => item.id.toString() === id
  );

  /* IMAGES */
  const productImages = useMemo(() => {
    if (!product) return [];

    return [
      product.image,
      products[0]?.image,
      products[1]?.image,
    ].filter(Boolean);
  }, [product]);

  /* ACTIVE IMAGE */
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (productImages.length > 0) {
      setActiveImage(productImages[0]);
    }
  }, [productImages]);

  /* RELATED PRODUCTS */
  const relatedProducts = products.filter(
    (item) => item.id !== product?.id
  );

  if (!product) {
    return (
      <section className="bg-black min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-serif">
          Product Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen pt-36 pb-28">

      <Container>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-[90px_1fr_480px] gap-8 items-start">

          {/* THUMBNAILS */}
          <div className="hidden xl:flex flex-col gap-4">

            {productImages.map((image, index) => (

              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`border overflow-hidden transition-all duration-300 ${
                  activeImage === image
                    ? "border-[#C8A96B]"
                    : "border-white/10 hover:border-[#C8A96B]"
                }`}
              >

                <img
                  src={image}
                  alt=""
                  className="w-full h-24 object-cover"
                />

              </button>

            ))}

          </div>

          {/* MAIN IMAGE */}
          <div className="relative bg-[#15110f] overflow-hidden group">

            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-175 object-cover transition-all duration-500"
            />

          </div>

          {/* PRODUCT INFO */}
          <div>

            <p className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-4">

              Shop / Serums

            </p>

            <h1 className="text-5xl font-serif mb-4 leading-tight">

              {product.name}

            </h1>

            <p className="text-[#C8A96B] uppercase tracking-[3px] text-xs mb-6">

              Botanical • Clinical • Luxury

            </p>

            <p className="text-3xl text-[#C8A96B] mb-8">

              ${product.price}

            </p>

            <p className="text-zinc-400 leading-8 mb-10">

              A potent botanical complex designed to restore
              luminosity, hydration, and resilience.
              Powered by clinically active botanical extracts.

            </p>

            {/* BENEFITS */}
            <div className="space-y-4 mb-10">

              <div className="flex items-center gap-3">

                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />

                <p className="text-zinc-300">
                  Reduces fine lines in 14 days
                </p>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />

                <p className="text-zinc-300">
                  Deep hydration & skin repair
                </p>

              </div>

            </div>

            {/* SAMPLE */}
            {/* <div className="border border-white/10 p-5 mb-6">

              <p className="uppercase tracking-[3px] text-xs text-zinc-500 mb-4">

                Choose Your Complimentary Sample

              </p>

              <select className="w-full bg-transparent outline-none text-white">

                <option className="bg-black">
                  Midnight Recovery Oil (2ml)
                </option>

                <option className="bg-black">
                  Retinol Serum Sample
                </option>

                <option className="bg-black">
                  Peptide Cream Sample
                </option>

              </select>

            </div> */}

            {/* BUTTONS */}
            <div className="space-y-4 mb-10">

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-[#C8A96B] text-black uppercase tracking-[4px] text-sm py-5 hover:bg-white transition-all duration-300"
              >

                Add To Bag — ${product.price}

              </button>

              <button className="w-full border border-[#C8A96B] text-[#C8A96B] uppercase tracking-[4px] text-sm py-5 hover:bg-[#C8A96B] hover:text-black transition-all duration-300">

                Complimentary Protocol Consultation

              </button>

            </div>

            {/* ACCORDION */}
            <div className="border-t border-white/10">

              <div className="border-b border-white/10 py-6">

                <div className="flex items-center justify-between">

                  <h3 className="uppercase tracking-[3px] text-xs">

                    Regimen Transformation

                  </h3>

                  <span>+</span>

                </div>

              </div>

              <div className="border-b border-white/10 py-6">

                <div className="flex items-center justify-between">

                  <h3 className="uppercase tracking-[3px] text-xs">

                    How To Use

                  </h3>

                  <span>+</span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* COMPLETE THE RITUAL */}
        <div className="mt-32 relative">

          {/* HEADER */}
          <div className="flex items-end justify-between mb-14">

            <div>

              <p className="text-[#C8A96B] uppercase tracking-[5px] text-xs mb-5">

                Enhance Results

              </p>

              <h2 className="text-5xl font-serif">

                Complete The Ritual

              </h2>

            </div>

            <Link
              to="/shop"
              className="text-[#C8A96B] uppercase tracking-[4px] text-xs border-b border-[#C8A96B] pb-2 hover:text-white hover:border-white transition-all duration-300"
            >

              Shop All Rituals

            </Link>

          </div>

          {/* CUSTOM ARROWS */}
          <button className="ritual-prev absolute -left-6.25 top-[55%] z-20 text-[#C8A96B] hover:text-white transition">

            <FiChevronLeft size={50} />

          </button>

          <button className="ritual-next absolute -right-6.25 top-[55%] z-20 text-[#C8A96B] hover:text-white transition">

            <FiChevronRight size={50} />

          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".ritual-prev",
              nextEl: ".ritual-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 4,
              },
            }}
          >

            {relatedProducts.map((item) => (

              <SwiperSlide key={item.id}>

                <Link to={`/product/${item.id}`}>

                  <div className="bg-[#15110f] overflow-hidden group cursor-pointer">

                    {/* IMAGE */}
                    <div className="overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-75 object-cover group-hover:scale-105 transition-all duration-700"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <p className="text-[#C8A96B] uppercase tracking-[3px] text-[10px] mb-3">

                        Step Of Ritual

                      </p>

                      <h3 className="text-2xl font-serif mb-3">

                        {item.name}

                      </h3>

                      <p className="text-zinc-500 mb-6">

                        {item.description}

                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(item);
                        }}
                        className="border border-[#C8A96B] text-[#C8A96B] uppercase tracking-[3px] text-xs px-8 py-4 hover:bg-[#C8A96B] hover:text-black transition-all duration-300"
                      >

                        Quick Add

                      </button>

                    </div>

                  </div>

                </Link>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </Container>

    </section>
  );
}

export default ProductDetails;