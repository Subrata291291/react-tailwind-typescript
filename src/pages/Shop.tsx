import { useEffect, useMemo, useState } from "react";

import Container from "../components/common/Container";
import ProductCard from "../components/common/ProductCard";
import SectionTitle from "../components/common/SectionTitle";

import { products } from "../data/products";

function Shop() {

  /* FILTER STATES */
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [maxPrice, setMaxPrice] =
    useState(500);

  const [sortOption, setSortOption] =
    useState("Best Sellers");

  /* PAGINATION */
  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 6;

  /* FILTERED PRODUCTS */
  const filteredProducts = useMemo(() => {

    let filtered = [...products];

    /* CATEGORY FILTER */
    if (selectedCategory !== "All") {

      filtered = filtered.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    /* PRICE FILTER */
    filtered = filtered.filter(
      (product) => product.price <= maxPrice
    );

    /* SORTING */
    if (sortOption === "Price Low To High") {

      filtered.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortOption === "Price High To Low") {

      filtered.sort(
        (a, b) => b.price - a.price
      );
    }

    return filtered;

  }, [
    selectedCategory,
    maxPrice,
    sortOption,
  ]);

  /* RESET PAGE ON FILTER CHANGE */
  useEffect(() => {

    setCurrentPage(1);

  }, [
    selectedCategory,
    maxPrice,
    sortOption,
  ]);

  /* TOTAL PAGES */
  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProducts.length /
        productsPerPage
    )
  );

  /* PREVENT INVALID PAGE */
  useEffect(() => {

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }

  }, [currentPage, totalPages]);

  /* PAGINATION LOGIC */
  const startIndex =
    (currentPage - 1) *
    productsPerPage;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );

  /* CATEGORIES */
  const categories = [
    "All",
    "Serums",
    "Moisturisers",
    "Facial Oils",
  ];

  return (
    <section className="bg-black min-h-screen text-white pt-40 pb-24">

      <Container>

        {/* PAGE HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10 mb-14">

          {/* TITLE */}
          <SectionTitle
            title="All Products"
            subtitle="The Collection"
          />

          {/* BREADCRUMB */}
          <div className="text-sm text-zinc-500">

            Home /{" "}

            <span className="text-white">

              Shop

            </span>

          </div>

        </div>

        {/* SHOP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

          {/* SIDEBAR */}
          <aside className="border-r border-white/10 pr-10">

            {/* FILTER TITLE */}
            <p className="text-zinc-500 uppercase tracking-[4px] text-xs mb-10">

              Filter By

            </p>

            {/* CATEGORY */}
            <div className="mb-14">

              <h3 className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-6">

                Product Type

              </h3>

              <div className="space-y-5">

                {categories.map((category) => (

                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`block text-left transition ${
                      selectedCategory === category
                        ? "text-white"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >

                    {category}

                  </button>

                ))}

              </div>

            </div>

            {/* PRICE RANGE */}
            <div>

              <h3 className="text-[#C8A96B] uppercase tracking-[4px] text-xs mb-6">

                Price Range

              </h3>

              <div>

                <input
                  type="range"
                  min="50"
                  max="500"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(
                      Number(e.target.value)
                    )
                  }
                  className="w-full accent-[#C8A96B]"
                />

                <div className="flex items-center justify-between mt-4 text-sm text-zinc-500">

                  <span>$50</span>

                  <span>
                    ${maxPrice}
                  </span>

                </div>

              </div>

            </div>

          </aside>

          {/* PRODUCTS */}
          <div>

            {/* TOP BAR */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">

              {/* PRODUCT COUNT */}
              <p className="text-zinc-500">

                {filteredProducts.length} products found

              </p>

              {/* SORT */}
              <select
                value={sortOption}
                onChange={(e) =>
                  setSortOption(
                    e.target.value
                  )
                }
                className="bg-[#111] border border-white/10 px-4 py-3 text-sm outline-none"
              >

                <option>
                  Best Sellers
                </option>

                <option>
                  Price Low To High
                </option>

                <option>
                  Price High To Low
                </option>

              </select>

            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {paginatedProducts.map(
                (product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                )
              )}

            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-3 mt-16 flex-wrap">

              {Array.from(
                { length: totalPages },
                (_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(
                        index + 1
                      )
                    }
                    className={`w-12 h-12 border text-sm transition-all duration-300 ${
                      currentPage ===
                      index + 1
                        ? "bg-[#C8A96B] text-black border-[#C8A96B]"
                        : "border-white/10 text-zinc-400 hover:border-[#C8A96B] hover:text-white"
                    }`}
                  >

                    {index + 1}

                  </button>

                )
              )}

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Shop;