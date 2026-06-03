import { Link } from "react-router-dom";

import type { Product } from "../../types/product";

import { useCart } from "../../context/CartContext";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-[#0d0d0d] overflow-hidden transition-all duration-500 hover:-translate-y-2">

      {/* CLICKABLE AREA */}
      <Link to={`/product/${product.id}`}>

        {/* IMAGE */}
        <div className="relative overflow-hidden">

          {/* PRODUCT NUMBER */}
          <div className="absolute top-4 left-4 z-20 bg-[#C9A96E] text-black text-[10px] tracking-[2px] px-4 py-2 uppercase">

            {product.id}

          </div>

          {/* PRODUCT IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>

        </div>
        {/* QUICK ADD */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#C9A96E] text-black uppercase tracking-[3px] text-xs py-4 hover:bg-white transition-all duration-300"
        >

          + Quick Add

        </button>
        {/* CONTENT */}
        <div className="p-6 bg-[#1A1714]">

          <h3 className="text-[22px] font-serif mb-2 text-white">
            {product.name}
          </h3>

          <p className="text-zinc-400 text-sm mb-3">
            {product.description}
          </p>

          <p className="text-[#C8A96B] text-xl">
            ${product.price}
          </p>

        </div>

      </Link>

    </div>
  );
}

export default ProductCard;