"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const GetUserAuth = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: userData, isPending } = authClient.useSession();
  const isSignedIn = Boolean(userData?.session);

  const manageSignOut = () => {
    toast.success("Signed out successfully, See you again!");
    authClient.signOut()
  }
  return (
    <>
      {isPending ? (
        <div className="mx-auto h-10 w-10 rounded-full border-4 border-[#9ac5ee] border-t-[#0f3d66] animate-spin" />
      ) : !isSignedIn ? (
        <Link
          href="/signin"
          className="rounded-md bg-[#1f5d99] px-3 py-2 text-sm text-[#eaf4ff] transition duration-300 hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-4 md:text-base"
        >
          Sign In
        </Link>
      ) : (
        <div className="relative">
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 border-[#d9ecff] ring-2 ring-[#93c5fd] shadow-md shadow-[#1f5d9920] transition hover:scale-[1.03] hover:ring-[#60a5fa]"
          >
            <Image
              src={
                userData?.user?.image ||
                "https://img.icons8.com/color/1200/user.jpg"
              }
              alt="User avatar"
              className="h-full w-full object-cover"
              height={200}
              width={200}
            />
          </div>

          <div
            className={`absolute right-0 top-12 mt-2 w-60 origin-top rounded-2xl border border-[#a7cdf2] bg-[#f8fbff] p-2 shadow-xl shadow-[#1f5d9930] ring-1 ring-[#1f5d991f] transition-all duration-200 ${
              menuOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="mb-2 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-[#edf6ff] via-[#e8f3ff] to-[#dceeff] px-3 py-5">
              <FaUserAlt />
              <p className="truncate text-sm font-bold text-[#0f3d66] text-center">
                {userData?.user?.name}
              </p>
            </div>
            <ul className="flex flex-col gap-2 p-1">
              <Link
                href="/profile"
                className="rounded-xl border border-[#9ac5ee] bg-[#ffffff] px-3 py-2 text-sm font-semibold text-[#0f3d66] transition duration-300 hover:border-[#1f5d99] hover:bg-[#edf5ff]"
              >
                Profile
              </Link>
              <Link
                onClick={manageSignOut}
                href="/signin"
                className="rounded-xl bg-[#1f5d99] px-3 py-2 text-sm font-semibold text-[#eaf4ff] transition duration-300 hover:bg-[#0f3d66] active:bg-[#0b2d4d]"
              >
                Sign Out
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default GetUserAuth;

