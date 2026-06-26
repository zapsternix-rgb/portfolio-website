import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight"
            style={{ color: scrolled ? "#1D1D1F" : "#1D1D1F" }}
          >
            <span className="text-[#005EB8]">M</span>anav
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-[#86868B] hover:text-[#1D1D1F] dark:text-[#86868B] dark:hover:text-[#F5F5F0] transition-colors rounded-full hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 btn-primary text-[13px]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}