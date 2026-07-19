import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { siteConfig } from "../data/siteConfig";

export default function FloatingButtons() {
  const showTopButton = useScrollPosition(500);

  return (
    <div className="fixed bottom-7 right-[26px] z-[900] flex flex-col items-center gap-3.5">
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-soft dark:border-white/10 dark:bg-[#161414]"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label="Call Afreen Salon"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rose text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <Phone size={24} />
      </a>
      <a
        href={`https://wa.me/${siteConfig.phoneRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
