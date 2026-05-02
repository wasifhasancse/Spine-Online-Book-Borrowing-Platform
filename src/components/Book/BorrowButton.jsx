'use client';
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const BorrowButton = () => {
const userData = authClient.useSession();
  const manageBorrow = () => {
    if (!userData) {
      redirect("/signin");
    }
    alert("Borrowing functionality is not implemented yet.");
  }
  return (
      <button onClick={manageBorrow} className="inline-flex items-center justify-center rounded-xl bg-[#1f5d99] px-5 py-3 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-6 md:text-base cursor-pointer">
        Borrow This Book
      </button>
  );
};

export default BorrowButton;
