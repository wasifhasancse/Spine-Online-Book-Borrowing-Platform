import Link from "next/link";
import NavLink from "./NavLink";
import { FaUserAlt } from "react-icons/fa";
import { IoBook, IoHomeSharp } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/", icon: <IoHomeSharp /> },
  { label: "All Books", href: "/books", icon: <IoBook /> },
  { label: "My Profile", href: "/profile", icon: <FaUserAlt /> },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-11/12 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-500"
        >
          <GiBookCover />
          Spine
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {navLinks.map((navItems, index) => (
            <NavLink key={index} navItems={navItems} />
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-indigo-200">
            <Image
              src="https://img.icons8.com/color/1200/user.jpg"
              alt="User avatar"
              className="h-full w-full object-cover"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
