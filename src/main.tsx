import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

/* SWIPER */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* TOASTIFY */
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot( document.getElementById("root")!).render(
  <CartProvider>

      <App />

      {/* TOAST */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
        toastClassName="custom-toast"
        progressClassName="custom-toast-progress"
      />

    </CartProvider>
);