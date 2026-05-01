import Link from "next/link";
import { GiBookCover } from "react-icons/gi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  const productLinks = [
    { label: "All Books", href: "/all-books" },
    { label: "Borrow Requests", href: "/profile" },
    { label: "My Reading List", href: "/profile" },
    { label: "Community Picks", href: "/all-books" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help-center" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="mt-16 bg-linear-to-b from-[#c0dcfb] to-[#afcff3]">
      <div className="mx-auto max-w-11/12 py-10 md:py-12 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-20">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#0f3d66] transition-colors hover:text-[#1f5d99]"
            >
              <GiBookCover />
              Spine
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#1f5d99]">
              Empowering readers across Bangladesh with a smart, simple online
              book borrowing platform.
            </p>
            <div>
              <h3 className="text-base font-semibold text-[#0f3d66]">
                Contact Us
              </h3>
              <ul className="space-y-2 pt-1 text-sm text-[#1f5d99]">
                <li className="flex items-center gap-2">
                  <MdEmail className="text-[#1f5d99]" aria-hidden="true" />
                  <a
                    href="mailto:support@spinebooks.com"
                    className="transition-colors hover:text-[#0f3d66] active:text-[#1f5d99]"
                  >
                    support@spinebooks.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdPhone className="text-[#1f5d99]" aria-hidden="true" />
                  <a
                    href="tel:+8801712345678"
                    className="transition-colors hover:text-[#0f3d66] active:text-[#1f5d99]"
                  >
                    +880 1712-345678
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn className="text-[#1f5d99]" aria-hidden="true" />
                  Dhanmondi, Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="space-y-4 text-right">
              <h3 className="text-base font-semibold text-[#0f3d66]">
                Product
              </h3>
              <ul className="space-y-2 text-sm text-[#1f5d99]">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#0f3d66] active:text-[#1f5d99]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-right">
              <h3 className="text-base font-semibold text-[#0f3d66]">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-[#1f5d99]">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#0f3d66] active:text-[#1f5d99]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-right">
              <h3 className="text-base font-semibold text-[#0f3d66]">
                Support
              </h3>
              <ul className="space-y-2 text-sm text-[#1f5d99]">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#0f3d66] active:text-[#1f5d99]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#8fbae9] pt-5 text-xs text-[#1f5d99cc]">
          <div className="flex flex-col gap-3 md:flex-row items-center md:justify-between">
            <p>© {new Date().getFullYear()} Spine. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6">
              <Link
                href="/terms"
                className="transition hover:text-[#0f3d66] active:text-[#1f5d99]"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="transition hover:text-[#0f3d66] active:text-[#1f5d99]"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="transition hover:text-[#0f3d66] active:text-[#1f5d99]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
