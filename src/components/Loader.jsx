import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Brief branded splash screen shown while the page mounts.
export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="font-display italic text-3xl text-white">Afreen</div>
          <div className="relative h-px w-44 overflow-hidden bg-white/20">
            <div className="absolute left-[-40%] top-0 h-full w-[40%] animate-loadbar bg-rose" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
