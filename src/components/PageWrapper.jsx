import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -40 },
};

const pageTransition = { type: "tween", ease: "easeInOut", duration: 0.6 };

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
