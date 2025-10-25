import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  }
};

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "", 
  variant = "fadeUp" 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
