"use client";

import { motion } from "framer-motion";

export default function SectionRevealer({
  children,
  classname
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <motion.div
      className={classname}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }} // 👈 Добавлено условие показа один раз
    >
      {children}
    </motion.div>
  );
}
