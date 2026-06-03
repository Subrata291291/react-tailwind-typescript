import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { toast } from "react-toastify";

import type { Product } from "../types/product";

/* CART ITEM TYPE */
interface CartItem extends Product {
  quantity: number;
}

/* CONTEXT TYPE */
interface CartContextType {
  cartItems: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: string) => void;

  increaseQuantity: (id: string) => void;

  decreaseQuantity: (id: string) => void;
}

/* CONTEXT */
const CartContext =
  createContext<CartContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function CartProvider({
  children,
}: Props) {

  /* STATE */
  const [cartItems, setCartItems] = useState<
    CartItem[]
  >([]);

  /* ADD TO CART */
  const addToCart = (product: Product) => {
    setCartItems((prev) => {

      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      /* IF ITEM EXISTS */
      if (existingItem) {

        toast.success("Quantity updated");

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      /* NEW ITEM */
      toast.success("Added to cart");

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* INCREASE */
  const increaseQuantity = (id: string) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

    toast.success("Quantity increased");
  };

  /* DECREASE */
  const decreaseQuantity = (id: string) => {

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    toast.info("Quantity decreased");
  };

  /* REMOVE */
  const removeFromCart = (id: string) => {

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.error("Item removed");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

/* CUSTOM HOOK */
export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}