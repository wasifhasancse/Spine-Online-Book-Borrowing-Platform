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
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {navItems.icon} {navItems.label}
      </Link>
    </li>
  );
};

export default NavLink;
