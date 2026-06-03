import Container from "../common/Container";

import { products } from "../../data/products";
import ProductCard from "../common/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../common/SectionTitle";

function FeaturedProducts() {
  return (
    <section className="bg-black py-32 text-white">

      <Container>

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

          {/* LEFT */}
          <div>

            <SectionTitle
            title="Featured Products"
            subtitle="Curated Essentials"
            align="left"
          />

          </div>

          {/* RIGHT */}
          <button className="uppercase tracking-[4px] text-xs text-[#C8A96B] border-b border-[#C8A96B] pb-2 hover:text-white hover:border-white transition-all duration-300">

            View All Products

          </button>

        </div>

        {/* SWIPER */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >

          {products.map((product) => (

            <SwiperSlide key={product.id}>

              <ProductCard product={product} />

            </SwiperSlide>

          ))}

        </Swiper>

      </Container>

    </section>
  );
}

export default FeaturedProducts;