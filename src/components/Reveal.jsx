import { motion } from "framer-motion";

// Wraps any section content in a consistent scroll-reveal animation.
// Centralising this keeps easing/timing identical across the whole site.
export default function Reveal({
  children,
  delay = 0,
  y = 36,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
