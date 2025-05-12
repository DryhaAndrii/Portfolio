// components/StaggeredReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ListRevealerProps {
  children: ReactNode[];
  delay?: number;
}

export default function ListRevealer({
  children,
  delay = 0.1,
}: ListRevealerProps) {
  return (
    <>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 * index }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * delay, duration: 0.6 }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
