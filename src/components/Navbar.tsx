import { useState, useEffect } from "react";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex flex-col">
          <span className="font-display text-2xl tracking-tight text-primary leading-none font-black">
            SureLock
          </span>
          <span className="font-sans text-xs font-black tracking-[0.2em] text-white/70 uppercase leading-none mt-1">
            SECURITY
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-bold tracking-wide uppercase text-white/80 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Button className="gap-2 rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-200" asChild>
              <a href="tel:0234567891">
                <Phone className="h-4 w-4" />
                Call 0234567891
              </a>
            </Button>
          </div>
        </div>

        <button
          className="md:hidden text-white/80 hover:text-white p-2 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full inset-x-0 bg-background border-b border-white/10 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-white/80 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full h-14 gap-3 justify-center rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-200" asChild>
                  <a href="tel:0234567891">
                    <Phone className="h-5 w-5" />
                    Call 0234567891
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
