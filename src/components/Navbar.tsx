import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Brands", href: "#brands" },
  { name: "Reels", href: "#reels" },
  { name: "Systems", href: "#systems" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-5xl"
    >
      <div className="bg-black border-2 border-primary px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-xl font-heading font-black tracking-tighter text-primary uppercase"
        >
          RAUNAK.KUMAR
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[0.7rem] xl:text-[0.75rem] font-black text-white hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-4 md:px-5 py-2 bg-primary text-black text-[0.6rem] md:text-[0.7rem] font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            WhatsApp Me
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-primary p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 bg-black border-2 border-primary p-6 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black text-white hover:text-primary transition-colors uppercase tracking-[0.2em] py-2 border-b border-white/10"
                >
                  {item.name}
                </a>
              ))}
              <button
                className="mt-4 w-full py-3 bg-primary text-black text-[0.7rem] font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => {
                  window.open(WHATSAPP_LINK, "_blank");
                  setIsOpen(false);
                }}
              >
                WhatsApp Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
