"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";

const Hamburger = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex items-center justify-center"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
      </button>

      <div
        className={`absolute left-0 top-10 mt-2 w-52 rounded-xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 transition-all duration-200 origin-top ${
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-1 w-full rounded-t-xl" />
        <ul className="flex flex-col gap-1 p-2">
          {navLinks.map((navItems, index) => (
            <NavLink
              key={index}
              navItems={navItems}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
