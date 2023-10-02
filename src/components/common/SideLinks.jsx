import React from "react";
import { motion } from "framer-motion";
import cv from "../documents/cv.pdf";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiFile,
} from "react-icons/bi";

const SideLinks = () => { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .3 }}
    >
      <ul className="sideLinks">
        <li>
          <a href="https://www.linkedin.com/in/nicolasfararomero/" title="LinkedIn">
            <BiLogoLinkedin />
          </a>
        </li>
        <li className="m-0 my-lg-2">
          <a href="https://github.com/nicofara27" title="GitHub">
            <BiLogoGithub />
          </a>
        </li>
        <li className="m-0 my-lg-2">
          <a href={cv}>
            <BiFile title="resume" />
          </a>
        </li>
        <li>
          <a href="mailto:nicolas.fara.romero@gmail.com">
            <BiLogoGmail title="Gmail" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideLinks;
