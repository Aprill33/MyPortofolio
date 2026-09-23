import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { MagnetButton, DockNav } from "./ReactBits";
import logoImg from "../assets/Profil/april3.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, lang, toggleLang } = useContext(ThemeLangContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: lang === "id" ? "Beranda" : "Home", path: "/" },
    { name: lang === "id" ? "Proyek" : "Projects", path: "/projects" },
    { name: lang === "id" ? "Sertifikat" : "Certificates", path: "/certificates" },
    { name: lang === "id" ? "Kontak" : "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 soft-glass border-b border-peach/50 dark:border-dusty-rose/25 soft-shadow"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo with April's Photo */}
          <NavLink 
            to="/" 
            className="text-2xl font-bold tracking-tight text-neo-black dark:text-dark-text flex items-center gap-2.5 group"
          >
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-dusty-rose via-peach to-rose-accent shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] group-hover:scale-110 transition-transform duration-300">
              <img
                src={logoImg}
                alt="Aprilliyanti"
                className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-dark-card"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Aprilliyanti<span className="text-dusty-rose font-bold">.</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-[#231720]/90 p-1.5 rounded-full border border-peach/40 dark:border-dusty-rose/30 soft-shadow backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === "/" && location.pathname === "");
              return (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive 
                      ? "text-white font-semibold" 
                      : "text-neo-black/70 dark:text-dark-text/80 hover:text-neo-black dark:hover:text-white hover:bg-peach/30 dark:hover:bg-dusty-rose/20"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-rose-accent rounded-full -z-10 shadow-sm dark:shadow-[0_0_15px_rgba(232,122,138,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <MagnetButton
              onClick={toggleLang}
              className="px-3.5 py-1.5 font-semibold text-xs uppercase tracking-wider bg-white/80 dark:bg-[#231720]/90 border border-peach/50 dark:border-dusty-rose/30 rounded-full text-neo-black dark:text-dark-text hover:border-dusty-rose hover:bg-peach/30 dark:hover:bg-dusty-rose/30 transition-all soft-shadow cursor-pointer"
            >
              {lang === "id" ? "ID" : "EN"}
            </MagnetButton>
            
            <MagnetButton
              onClick={toggleTheme}
              className="p-2.5 bg-white/80 dark:bg-[#231720]/90 text-neo-black dark:text-dark-text border border-peach/50 dark:border-dusty-rose/30 rounded-full hover:bg-peach/30 dark:hover:bg-dusty-rose/30 transition-all soft-shadow cursor-pointer"
              ariaLabel="Toggle Theme"
            >
              {theme === "light" ? <HiMoon size={18} className="text-dusty-rose" /> : <HiSun size={18} className="text-peach" />}
            </MagnetButton>

            <MagnetButton
              href="https://github.com/Aprill33"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-medium text-sm shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] hover:shadow-lg transition-all"
            >
              <FaGithub className="text-base" />
              GitHub
            </MagnetButton>
          </div>

          {/* Quick Controls Mobile Top Header Bar */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-3 py-1 font-bold text-xs uppercase bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-dusty-rose/30 rounded-full shadow-sm cursor-pointer"
            >
              {lang === "id" ? "ID" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-dusty-rose/30 rounded-full shadow-sm cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <HiMoon size={18} className="text-dusty-rose" /> : <HiSun size={18} className="text-peach" />}
            </button>
            <a
              href="https://github.com/Aprill33"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gradient-to-r from-dusty-rose to-rose-accent text-white rounded-full shadow-sm flex items-center justify-center border border-peach/50 dark:border-dusty-rose/30 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </motion.header>

      {/* REACTBITS FLOATING MOBILE DOCK NAVIGATION */}
      <DockNav />
    </>
  );
};

export default Header;