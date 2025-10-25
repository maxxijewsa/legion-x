import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideGlow = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", hideGlow);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", hideGlow);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
