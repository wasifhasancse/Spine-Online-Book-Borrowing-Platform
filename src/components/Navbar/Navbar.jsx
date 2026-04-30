import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { IoBook, IoHomeSharp } from "react-icons/io5";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import SignInButton from "./SignInButton";

const navLinks = [
  { label: "Home", href: "/", icon: <IoHomeSharp /> },
  { label: "All Books", href: "/all-books", icon: <IoBook /> },
  { label: "My Profile", href: "/profile", icon: <FaUserAlt /> },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto h-16 max-w-11/12 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Hamburger navLinks={navLinks} className="md:hidden" />
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-500"
          >
            <GiBookCover />
            Spine
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((navItems, index) => (
            <NavLink key={index} navItems={navItems} />
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <SignInButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
