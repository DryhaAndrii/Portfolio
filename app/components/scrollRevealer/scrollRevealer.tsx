// components/RevealOnScroll.tsx
"use client";

import { motion } from "framer-motion";

export default function ScrollRevealer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Анимация запускается, когда 20% элемента видно
    >
      {children}
    </motion.div>
  );
}
