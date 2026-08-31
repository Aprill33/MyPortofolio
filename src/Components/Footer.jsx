import { useContext } from "react";
import { personalInfo, socialIcons } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Footer = () => {
  const { lang } = useContext(ThemeLangContext);
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-peach dark:bg-dusty-rose border-t-4 border-neo-black dark:border-white py-16 px-6 lg:px-12 transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Side: Name and Invite */}
        <div className="text-center md:text-left flex flex-col gap-4">
          <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-neo-black">
            &lt;April<span className="text-card-white">/</span>&gt;
          </div>
          <p className="text-base md:text-lg font-medium text-neo-black border-2 border-neo-black bg-cream p-4 rounded-xl shadow-[4px_4px_0_#221C1B]">
            {lang === "id" 
              ? "Mari berkolaborasi dan ciptakan karya digital yang luar biasa bersama!" 
              : "Let's collaborate and create outstanding digital works together!"}
          </p>
          <p className="text-sm text-neo-black font-medium mt-2">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.1, y: -4, x: -4 }}
            whileTap={{ scale: 0.9 }}
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl bg-cream border-4 border-neo-black flex items-center justify-center text-neo-black hover:bg-neo-black hover:text-white transition-colors duration-300 shadow-[6px_6px_0_#221C1B] hover:shadow-[2px_2px_0_#221C1B]"
            aria-label="GitHub"
          >
            <socialIcons.github className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -4, x: -4 }}
            whileTap={{ scale: 0.9 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl bg-cream border-4 border-neo-black flex items-center justify-center text-neo-black hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-colors duration-300 shadow-[6px_6px_0_#221C1B] hover:shadow-[2px_2px_0_#221C1B]"
            aria-label="LinkedIn"
          >
            <socialIcons.linkedin className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -4, x: -4 }}
            whileTap={{ scale: 0.9 }}
            href={`mailto:${personalInfo.email}`}
            className="w-14 h-14 rounded-2xl bg-cream border-4 border-neo-black flex items-center justify-center text-neo-black hover:bg-card-white transition-colors duration-300 shadow-[6px_6px_0_#221C1B] hover:shadow-[2px_2px_0_#221C1B]"
            aria-label="Email"
          >
            <socialIcons.email className="text-2xl" />
          </motion.a>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;