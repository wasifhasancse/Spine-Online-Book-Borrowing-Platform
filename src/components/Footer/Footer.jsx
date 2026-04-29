import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { GiBookCover } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com",
      icon: <FaFacebookF aria-hidden="true" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: <FaLinkedinIn aria-hidden="true" />,
    },
    {
      label: "X",
      href: "https://x.com",
      icon: <FaXTwitter aria-hidden="true" />,
    },
  ];

  const policyLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Return Policy", href: "/returns" },
    { label: "Help Center", href: "/help-center" },
  ];

  return (
    <footer className="mt-20 border-t border-[#d7e5de] bg-linear-to-br from-[#eef5f1] via-white to-[#fdf7ea]">
      <div className="mx-auto max-w-11/12 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 sm:col-span-2 xl:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#2f5f52]"
            >
              <GiBookCover />
              Spine
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Borrow, read, and return books with ease. Spine helps readers find
              their next favorite book while keeping borrowing simple.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c7d8cf] bg-white text-[#2f5f52] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2f5f52] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#2f5f52] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/all-books"
                    className="hover:text-[#2f5f52] transition-colors"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="hover:text-[#2f5f52] transition-colors"
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900">
                Policies
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {policyLinks.map((policy) => (
                  <li key={policy.label}>
                    <Link
                      href={policy.href}
                      className="hover:text-[#2f5f52] transition-colors"
                    >
                      {policy.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 rounded-2xl border border-[#d7e5de] bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                Contact Us
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <MdEmail className="text-[#2f5f52]" aria-hidden="true" />
                  <a
                    href="mailto:support@spinebooks.com"
                    className="break-all hover:text-[#2f5f52] transition-colors"
                  >
                    support@spinebooks.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdPhone className="text-[#2f5f52]" aria-hidden="true" />
                  <a
                    href="tel:+8801712345678"
                    className="hover:text-[#2f5f52] transition-colors"
                  >
                    +880 1712-345678
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn className="text-[#2f5f52]" aria-hidden="true" />
                  Dhanmondi, Dhaka 1209, Bangladesh
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-[#d7e5de] pt-5 text-xs text-gray-500 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Spine. All rights reserved.</p>
          <p>Built for book lovers and modern libraries.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-[#2f5f52] transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#2f5f52] transition">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-[#2f5f52] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
