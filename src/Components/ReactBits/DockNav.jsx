import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiHome, HiDesktopComputer, HiBadgeCheck, HiMail } from "react-icons/hi";
import { ThemeLangContext } from "../../Context/ThemeLangContext";

export const DockNav = () => {
  const location = useLocation();
  const { lang } = useContext(ThemeLangContext);

  const dockItems = [
    {
      name: lang === "id" ? "Beranda" : "Home",
      path: "/",
      icon: HiHome,
    },
    {
      name: lang === "id" ? "Proyek" : "Projects",
      path: "/projects",
      icon: HiDesktopComputer,
    },
    {
      name: lang === "id" ? "Sertifikat" : "Certificates",
      path: "/certificates",
      icon: HiBadgeCheck,
    },
    {
      name: lang === "id" ? "Kontak" : "Contact",
      path: "/contact",
      icon: HiMail,
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[95] md:hidden px-3">
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-[#F48FB1] via-[#E87A8A] to-[#D66B7D] dark:from-[#C2596A] dark:via-[#B04A5C] dark:to-[#9E3B4E] backdrop-blur-xl border border-white/60 dark:border-pink-300/40 shadow-[0_10px_35px_rgba(232,122,138,0.5)]"
      >
        {dockItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === "/" && location.pathname === "");
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className="relative group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#D66B7D] dark:text-[#9E3B4E] shadow-[0_4px_15px_rgba(0,0,0,0.18)] scale-105"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
              >
                <Icon size={20} />
              </motion.div>

              {/* Hover Tooltip Label */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl bg-neo-black/95 dark:bg-dark-card/95 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-dusty-rose/40 shadow-md">
                {item.name}
              </div>
            </NavLink>
          );
        })}
      </motion.div>
    </div>
  );
};

export default DockNav;

