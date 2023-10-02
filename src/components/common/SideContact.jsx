import React from "react";
import { motion } from "framer-motion";

const SideContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="sideContact"
    >
      <a
        className="sideContent__mail"
        href="mailto:nicolas.fara.romero@gmail.com"
      >
        nicolas.fara.romero@gmail.com
      </a>
    </motion.div>
  );
};

export default SideContact;
