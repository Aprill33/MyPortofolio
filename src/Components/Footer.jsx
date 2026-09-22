import { useContext } from "react";
import { personalInfo, socialIcons } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Footer = () => {
  const { lang } = useContext(ThemeLangContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 dark:bg-dark-card/60 border-t border-peach/40 dark:border-white/10 py-12 px-6 lg:px-12 backdrop-blur-md relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side */}
        <div className="text-center md:text-left flex flex-col gap-2">
          <div className="text-xl font-bold tracking-tight text-neo-black dark:text-dark-text flex items-center justify-center md:justify-start gap-1.5">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center font-bold text-sm">
              A
            </span>
            <span>Aprilliyanti<span className="text-dusty-rose">.</span></span>
          </div>
          <p className="text-sm text-neo-black/70 dark:text-dark-text/70">
            {lang === "id" 
              ? "Full-Stack Web & .NET Developer — Solusi Digital Interaktif & Responsif." 
              : "Full-Stack Web & .NET Developer — Interactive & Responsive Digital Solutions."}
          </p>
          <p className="text-xs text-neo-black/50 dark:text-dark-text/50 mt-1">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-colors soft-shadow"
            aria-label="GitHub"
          >
            <socialIcons.github className="text-lg" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-[#0077B5] hover:text-white transition-colors soft-shadow"
            aria-label="LinkedIn"
          >
            <socialIcons.linkedin className="text-lg" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-colors soft-shadow"
            aria-label="Email"
          >
            <socialIcons.email className="text-lg" />
          </motion.a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;