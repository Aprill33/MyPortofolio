import { useContext } from "react";
import { personalInfo, socialIcons } from "../Data/Data";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { MagnetButton } from "./ReactBits";
import { HiArrowUp } from "react-icons/hi";
import logoImg from "../assets/Profil/april3.jpeg";

const Footer = () => {
  const { lang } = useContext(ThemeLangContext);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white/80 dark:bg-dark-card/90 border-t border-peach/50 dark:border-white/10 py-12 px-6 lg:px-12 backdrop-blur-md relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side Branding */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-2.5">
          <div className="text-xl font-bold tracking-tight text-neo-black dark:text-dark-text flex items-center gap-2.5">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-dusty-rose to-peach shadow-sm">
              <img
                src={logoImg}
                alt="Aprilliyanti"
                className="w-8 h-8 rounded-full object-cover border border-white dark:border-dark-card"
              />
            </div>
            <span>Aprilliyanti<span className="text-dusty-rose font-bold">.</span></span>
          </div>
          <p className="text-sm text-neo-black/70 dark:text-dark-text/70 max-w-md">
            {lang === "id" 
              ? "Full-Stack Web & .NET Developer — Solusi Digital Interaktif & Responsif." 
              : "Full-Stack Web & .NET Developer — Interactive & Responsive Digital Solutions."}
          </p>
          <div className="flex items-center gap-2 text-xs text-neo-black/60 dark:text-dark-text/60 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
        </div>

        {/* Right Side: Social Links & Scroll To Top */}
        <div className="flex items-center gap-3">
          <MagnetButton
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white hover:border-transparent transition-colors soft-shadow"
            ariaLabel="GitHub"
          >
            <socialIcons.github className="text-lg" />
          </MagnetButton>

          <MagnetButton
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-[#0077B5] hover:text-white hover:border-transparent transition-colors soft-shadow"
            ariaLabel="LinkedIn"
          >
            <socialIcons.linkedin className="text-lg" />
          </MagnetButton>

          <MagnetButton
            href={`mailto:${personalInfo.email}`}
            className="w-11 h-11 rounded-2xl bg-cream dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white hover:border-transparent transition-colors soft-shadow"
            ariaLabel="Email"
          >
            <socialIcons.email className="text-lg" />
          </MagnetButton>

          {/* Scroll To Top Magnet Button */}
          <MagnetButton
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-gradient-to-r from-dusty-rose to-rose-accent text-white flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all"
            ariaLabel="Scroll to Top"
          >
            <HiArrowUp />
          </MagnetButton>
        </div>

      </div>
    </footer>
  );
};

export default Footer;