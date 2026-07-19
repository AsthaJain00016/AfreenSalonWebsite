import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[998] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-[999] flex h-full w-[min(340px,86vw)] flex-col gap-6 bg-white px-9 pb-10 pt-28 shadow-2xl dark:bg-[#161414]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-7 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
            >
              <X size={18} />
            </button>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-display text-lg"
              >
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={onClose} className="btn btn-primary mt-3">
              Book Appointment
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
