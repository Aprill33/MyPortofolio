import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 soft-glass border-b border-peach/50 dark:border-white/10 soft-shadow"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold tracking-tight text-neo-black dark:text-dark-text flex items-center gap-1.5 group"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="font-semibold text-lg tracking-tight">
            Aprilliyanti<span className="text-dusty-rose">.</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 dark:bg-dark-card/80 p-1.5 rounded-full border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === "/" && location.pathname === "");
            return (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive 
                    ? "text-white font-semibold" 
                    : "text-neo-black/70 dark:text-dark-text/70 hover:text-neo-black dark:hover:text-dark-text hover:bg-peach/30 dark:hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-dusty-rose to-rose-accent rounded-full -z-10 shadow-sm"
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
          <button
            onClick={toggleLang}
            className="px-3.5 py-1.5 font-semibold text-xs uppercase tracking-wider bg-white/80 dark:bg-dark-card/80 border border-peach/50 dark:border-white/15 rounded-full text-neo-black dark:text-dark-text hover:border-dusty-rose hover:bg-peach/30 transition-all soft-shadow cursor-pointer"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2.5 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-white/15 rounded-full hover:bg-peach/30 dark:hover:bg-white/10 transition-all soft-shadow cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <HiMoon size={18} className="text-dusty-rose" /> : <HiSun size={18} className="text-peach" />}
          </button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Aprill33"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
          >
            <FaGithub className="text-base" />
            GitHub
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-white/15 rounded-full"
          >
            {theme === "light" ? <HiMoon size={18} className="text-dusty-rose" /> : <HiSun size={18} className="text-peach" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neo-black dark:text-dark-text border border-peach/50 dark:border-white/15 rounded-full bg-white/80 dark:bg-dark-card/80"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-xl border-l border-peach/40 dark:border-white/10 flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center pb-6 border-b border-peach/30 dark:border-white/10">
                <span className="font-semibold text-lg">Menu Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-peach/40 text-neo-black hover:bg-dusty-rose hover:text-white transition-colors"
                >
                  <HiX size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-3 py-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-5 py-3 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-md"
                          : "bg-white/60 dark:bg-dark-card/60 text-neo-black dark:text-dark-text hover:bg-peach/40"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-peach/30 dark:border-white/10">
                <button
                  onClick={toggleLang}
                  className="w-full py-3 rounded-2xl bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text font-medium text-sm border border-peach/40 dark:border-white/10 text-center"
                >
                  {lang === "id" ? "Ganti ke Bahasa English" : "Switch to Bahasa Indonesia"}
                </button>
                <a
                  href="https://github.com/Aprill33"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-2xl bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <FaGithub size={18} />
                  Visit GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;