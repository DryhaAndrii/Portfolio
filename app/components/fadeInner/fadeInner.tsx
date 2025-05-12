"use client";

import { motion } from "framer-motion";

export default function FadeInner({
  children,
  highlight,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  if (highlight) {
    return (
      <motion.div
        initial={{ opacity: 0,scale:0,x:-400 }}
        animate={{ opacity: 1,scale:1,x:0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
