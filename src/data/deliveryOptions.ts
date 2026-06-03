import type { DeliveryOption } from "../types/checkout";

export const deliveryOptions: DeliveryOption[] = [
  {
    id: "standard",
    title: "Standard Delivery",
    description:
      "Eco-conscious packaging (3-5 days)",
    price: 0,
  },

  {
    id: "express",
    title: "Express Ritual",
    description:
      "Priority delivery within 24h",
    price: 25,
  },
];