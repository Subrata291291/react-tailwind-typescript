import Container from "../components/common/Container";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  /* TOTAL PRICE */
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-black min-h-screen text-white pt-40 pb-24">

      <Container>

        {/* PAGE TITLE */}
        <div className="mb-16">

          <p className="text-[#C8A96B] uppercase tracking-[6px] text-xs mb-6">

            Your Selection

          </p>

          <h1 className="text-6xl md:text-7xl font-serif">

            Cart

          </h1>

        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="border border-white/10 p-16 text-center">

            <h2 className="text-3xl font-serif mb-6">

              Your cart is empty

            </h2>

            <p className="text-zinc-500">

              Add products to begin your ritual.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">

            {/* CART ITEMS */}
            <div className="space-y-8">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-40 h-40 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      {/* TITLE */}
                      <h2 className="text-3xl font-serif mb-2">

                        {item.name}

                      </h2>

                      {/* DESCRIPTION */}
                      <p className="text-zinc-500 mb-2">

                        {item.description}

                      </p>

                      {/* PRICE */}
                      <p className="text-[#C8A96B] text-2xl">

                        $
                        {item.price * item.quantity}

                      </p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-4 mt-4">

                        {/* DECREASE */}
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="w-10 h-10 border border-white/10 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300"
                        >

                          -

                        </button>

                        {/* COUNT */}
                        <span className="text-lg min-w-5 text-center">

                          {item.quantity}

                        </span>

                        {/* INCREASE */}
                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="w-10 h-10 border border-white/10 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300"
                        >

                          +

                        </button>

                      </div>

                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-left text-[12px] uppercase tracking-[3px] text-zinc-500 hover:text-white transition mt-6"
                    >

                      Remove Item

                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="border border-white/10 p-10 h-fit sticky top-32">

              <h2 className="text-3xl font-serif mb-10">

                Order Summary

              </h2>

              {/* SUBTOTAL */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">

                <span className="text-zinc-500">

                  Subtotal

                </span>

                <span className="text-2xl">

                  ${totalPrice}

                </span>

              </div>

              {/* SHIPPING */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">

                <span className="text-zinc-500">

                  Shipping

                </span>

                <span>

                  Free

                </span>

              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between mb-10">

                <span className="text-xl">

                  Total

                </span>

                <span className="text-3xl text-[#C8A96B]">

                  ${totalPrice}

                </span>

              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#C8A96B] text-black uppercase tracking-[4px] text-sm py-5 hover:bg-white transition-all duration-300"
              >

                Proceed To Checkout

              </button>

            </div>

          </div>

        )}

      </Container>

    </section>
  );
}

export default Cart;