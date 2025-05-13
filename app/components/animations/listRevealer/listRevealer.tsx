"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ListRevealerProps {
  children: ReactNode[];
  delay?: number;
  amount?: number;
}

export default function ListRevealer({
  children,
  delay = 0.1,
  amount = 0.3,
}: ListRevealerProps) {
  return (
    <>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 * index }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * delay }}
          viewport={{ once: true, amount }} // 👈 Только один раз
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
