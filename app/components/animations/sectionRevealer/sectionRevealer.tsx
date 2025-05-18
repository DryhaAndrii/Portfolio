"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  classname?: string;
  left?: boolean;
}

export default function SectionRevealer({
  children,
  classname,
  left = false,
}: Props) {
  const x = left ? 100 : -100;
  return (
    <motion.div
      className={classname}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
