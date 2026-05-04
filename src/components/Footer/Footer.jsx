import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  const productLinks = [
    { label: "All Books", href: "/all-books" },
    { label: "Borrow Requests", href: "/profile" },
    { label: "My Reading List", href: "/profile" },
    { label: "Active Membership", href: "/profile" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { label: "GitHub", href: "https://github.com", icon: FaGithub },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help-center" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="mt-16 border-t border-[#7ab8ee] bg-linear-to-b from-[#b8d8f8] to-[#a3c8f0]">

      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-0">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-[#0f3d66] transition-colors hover:text-[#1f5d99]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1f5d99] text-[#eaf4ff] shadow-md">
                <GiBookCover size={20} />
              </span>
              Spine
            </Link>
            <p className="text-sm leading-relaxed text-[#1a4f80]">
              Empowering readers across Bangladesh with a smart, simple online
              book borrowing platform.
            </p>
            <div className="h-0.5 w-12 rounded-full bg-[#1f5d99] opacity-40" />
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f3d66]">
                Follow Us
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7ab8ee] bg-white/60 text-[#1f5d99] shadow-sm transition-all duration-200 hover:border-[#1f5d99] hover:bg-[#1f5d99] hover:text-white hover:shadow-md"
                  >
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0f3d66]">Contact</h3>
              <div className="h-0.5 w-8 rounded-full bg-[#1f5d99]" />
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:support@spinebooks.com"
                  className="group flex items-center gap-3 text-sm text-[#1a4f80] transition-colors hover:text-[#0f3d66]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1f5d99]/10 text-[#1f5d99] transition group-hover:bg-[#1f5d99] group-hover:text-white">
                    <MdEmail size={15} />
                  </span>
                  <span className="break-all leading-relaxed">
                    support@spinebooks.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+8801712345678"
                  className="group flex items-center gap-3 text-sm text-[#1a4f80] transition-colors hover:text-[#0f3d66]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1f5d99]/10 text-[#1f5d99] transition group-hover:bg-[#1f5d99] group-hover:text-white">
                    <MdPhone size={15} />
                  </span>
                  <span>+880 1712-345678</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+8801712345678"
                  className="group flex items-center gap-3 text-sm text-[#1a4f80] transition-colors hover:text-[#0f3d66]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1f5d99]/10 text-[#1f5d99] transition group-hover:bg-[#1f5d99] group-hover:text-white">
                    <MdLocationOn size={15} />
                  </span>
                  <span>Dhanmondi, Dhaka, Bangladesh</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-10 md:col-span-2">
            <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0f3d66]">Product</h3>
              <div className="h-0.5 w-8 rounded-full bg-[#1f5d99]" />
            </div>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-[#1a4f80] transition-all hover:translate-x-1 hover:text-[#0f3d66]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#1f5d99] opacity-50 transition-all group-hover:w-2 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0f3d66]">Support</h3>
              <div className="h-0.5 w-8 rounded-full bg-[#1f5d99]" />
            </div>
            <ul className="space-y-2.5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-[#1a4f80] transition-all hover:translate-x-1 hover:text-[#0f3d66]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#1f5d99] opacity-50 transition-all group-hover:w-2 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#7ab8ee]/60 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-[#1f5d99]/80 md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#0f3d66]">Spine</span>. All
              rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-[#1f5d99]/70">
              {["Terms", "Privacy", "Cookies"].map((label, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && (
                    <span
                      className="h-3 w-px bg-[#7ab8ee]"
                      aria-hidden="true"
                    />
                  )}
                  <Link
                    href={`/${label.toLowerCase()}`}
                    className="px-1.5 transition-colors hover:text-[#0f3d66]"
                  >
                    {label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
