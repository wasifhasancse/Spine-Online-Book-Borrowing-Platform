import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { IoBook, IoHomeSharp } from "react-icons/io5";
import GetUserAuth from "./GetUserAuth";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import ProductCart from "./ProductCart";

const navLinks = [
  { label: "Home", href: "/", icon: <IoHomeSharp /> },
  { label: "All Books", href: "/all-books", icon: <IoBook /> },
  { label: "My Profile", href: "/profile", icon: <FaUserAlt /> },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#9ac5ee] bg-[#dbedff]/85 backdrop-blur-md">
      <div className="mx-auto h-16 max-w-11/12 flex items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <Hamburger navLinks={navLinks} className="md:hidden" />
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#0f3d66] transition-colors hover:text-[#1f5d99]"
          >
            <GiBookCover />
            Spine
          </Link>
        </div>

        <ul className="hidden items-center gap-2.5 md:flex">
          {navLinks.map((navItems, index) => (
            <NavLink key={index} navItems={navItems} />
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <ProductCart />
          <GetUserAuth />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
