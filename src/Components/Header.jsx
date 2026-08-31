import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, lang, toggleLang } = useContext(ThemeLangContext);

  // Handle scroll effect
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-peach/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-[0_4px_0_#221C1B] border-b-2 border-neo-black dark:border-white py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-semibold tracking-tighter text-neo-black dark:text-dark-text relative group"
        >
          <span className="relative z-10">&lt;April<span className="text-card-white">/</span>&gt;</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-card-white dark:bg-dark-card px-4 py-2 rounded-xl border-2 border-neo-black dark:border-white shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FBB5B1]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === "/" && location.pathname === "") ;
            return (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 z-10 rounded-md border-2 border-transparent ${
                  isActive ? "text-neo-black border-neo-black bg-peach" : "text-neo-black/70 dark:text-dark-text/70 hover:text-neo-black dark:hover:text-dark-text hover:bg-dusty-rose hover:border-neo-black"
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="px-3 py-2 font-medium text-sm bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white rounded-lg shadow-[3px_3px_0_#221C1B] dark:shadow-[3px_3px_0_#FFF6EE] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#221C1B] transition-all"
          >
            {lang === "id" ? "ID" : "EN"}
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 font-medium bg-peach dark:bg-dusty-rose text-neo-black border-2 border-neo-black dark:border-white rounded-lg shadow-[3px_3px_0_#221C1B] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#221C1B] transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
          </button>

           <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Aprill33"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-xl bg-dusty-rose text-neo-black font-semibold border-2 border-neo-black dark:border-white shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] hover:bg-peach transition-colors"
          >
            GitHub
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 font-medium bg-peach text-neo-black border-2 border-neo-black rounded-lg shadow-[2px_2px_0_#221C1B]"
          >
            {theme === "light" ? <HiMoon size={18} /> : <HiSun size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neo-black dark:text-dark-text focus:outline-none p-2 border-2 border-neo-black dark:border-white rounded-lg bg-card-white dark:bg-dark-card shadow-[2px_2px_0_#221C1B] dark:shadow-[2px_2px_0_#FBB5B1]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neo-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-cream dark:bg-dark-bg border-l-4 border-neo-black dark:border-white flex flex-col"
            >
              <div className="flex justify-end p-6 border-b-2 border-neo-black dark:border-white">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg border-2 border-neo-black dark:border-white bg-peach hover:bg-dusty-rose text-neo-black transition-colors shadow-[2px_2px_0_#221C1B]"
                >
                  <HiX size={24} />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3 rounded-xl border-2 border-neo-black dark:border-white text-lg font-semibold transition-all shadow-[3px_3px_0_#221C1B] dark:shadow-[3px_3px_0_#FFF6EE] ${
                        isActive
                          ? "bg-dusty-rose text-neo-black"
                          : "bg-card-white dark:bg-dark-card text-neo-black dark:text-dark-text hover:bg-peach"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </div>

              <div className="mt-auto p-6 flex flex-col gap-4">
                <button
                  onClick={toggleLang}
                  className="w-full py-3 rounded-xl border-2 border-neo-black dark:border-white bg-card-white dark:bg-dark-card text-neo-black dark:text-dark-text font-semibold shadow-[3px_3px_0_#221C1B] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#221C1B] transition-all text-center"
                >
                  {lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
                </button>
                <a
                  href="https://github.com/Aprill33"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-6 py-4 rounded-xl border-2 border-neo-black dark:border-white bg-neo-black text-cream dark:bg-white dark:text-neo-black font-semibold hover:bg-dusty-rose hover:text-neo-black transition-colors shadow-[4px_4px_0_#FBB5B1]"
                >
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