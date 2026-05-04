"use client";
import { DataContext } from "@/context/BookCartContext";
import { useContext, useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { LiaOpencart } from "react-icons/lia";

const ProductCart = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(DataContext);
  console.log(cartItems);
  return (
    <>
      {
        <div className="relative">
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative h-8 w-8 cursor-pointer overflow-hidden transition hover:scale-[1.03]"
          >
            <LiaOpencart className="w-full h-full" />
          </div>

          <div
            className={`absolute right-0 top-12 mt-2 w-50 md:w-60 origin-top rounded-2xl border border-[#a7cdf2] bg-[#f8fbff] p-2 shadow-xl shadow-[#1f5d9930] ring-1 ring-[#1f5d991f] transition-all duration-200 ${
              menuOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-[#edf6ff] via-[#e8f3ff] to-[#dceeff] px-3 py-5">
              <CiSaveDown1 className="text-2xl" />
              <p className="truncate text-sm font-bold text-[#0f3d66] text-center">
                {cartItems.length} items in cart
              </p>
              <p className="text-sm font-medium text-[#6b88a3]">
                Total: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProductCart;
