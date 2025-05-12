"use client";

import { motion } from "framer-motion";

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -100, filter: "blur(100px)" },
  visible: { opacity: 1, scale: 1, x: 0, filter: "blur(0px)" },
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface FadeInnerProps {
  children: React.ReactNode;
  highlight?: boolean;
}

export default function FadeInner({ children, highlight }: FadeInnerProps) {
  if (highlight) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={highlightVariants}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={defaultVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
