"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navItems, onClick }) => {
  const pathname = usePathname();
  const isActive = navItems.href == pathname;
  return (
    <li>
      <Link
        href={navItems.href}
        onClick={onClick}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
          isActive
            ? "bg-[#0f3d66] text-[#eaf4ff]"
            : "text-[#1f5d99] hover:bg-[#93c5fd40] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff]"
        }`}
      >
        {navItems.icon} {navItems.label}
      </Link>
    </li>
  );
};

export default NavLink;
