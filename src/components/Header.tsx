import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { SITE } from "../data/works";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/#work" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleWorkClick = () => {
    setOpen(false);
    if (location.pathname !== "/") {
      return;
    }
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative z-50 w-full">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-800 transition-colors hover:text-black md:text-[11px]"
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.label === "Work" ? (
              <a
                key={link.label}
                href="/#work"
                onClick={handleWorkClick}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-black hover:underline md:text-[11px]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-black hover:underline md:text-[11px]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="relative z-[60] flex flex-col gap-[6px] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-8 bg-black transition-all duration-300 ${open ? "w-6 translate-y-[3.75px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-8 bg-black transition-all duration-300 ${open ? "w-6 -translate-y-[3.75px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full mt-4 border-b border-gray-200 bg-[#fcfcfc] py-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-[0.2em]">
              {navLinks.map((link) =>
                link.label === "Work" ? (
                  <a
                    key={link.label}
                    href="/#work"
                    onClick={handleWorkClick}
                    className="text-gray-800"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-gray-800"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
