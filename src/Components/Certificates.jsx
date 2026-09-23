import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { certificatesData } from "../Data/Data";
import { HiX, HiZoomIn, HiBadgeCheck, HiCalendar, HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { SplitText, SpotlightCard, MagnetButton, ShinyText } from "./ReactBits";

const Certificates = () => {
  const { lang } = useContext(ThemeLangContext);
  const location = useLocation();
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const getLocalizedText = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.id || textObj.en || "";
  };

  // Listen for navigation state from Home page ("Lihat Sertifikat" button)
  useEffect(() => {
    if (location.state?.certTitle) {
      const target = String(location.state.certTitle).toLowerCase();
      const found = certificatesData.list.find((item) => {
        const titleId = String(typeof item.title === "object" ? item.title.id : item.title).toLowerCase();
        const titleEn = String(typeof item.title === "object" ? item.title.en : item.title).toLowerCase();
        return titleId.includes(target) || target.includes(titleId) || titleEn.includes(target);
      });
      if (found) {
        setSelectedCert(found);
      }
    }
  }, [location.state]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  // Lock body scroll during modal view
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const categories = ["Semua", "Web & React", "Backend & .NET", "Database", "Tools & Git", "Fundamental"];

  const filteredList = selectedCategory === "Semua"
    ? certificatesData.list
    : certificatesData.list.filter((c) => c.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section with ReactBits */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-bold uppercase tracking-wider border border-dusty-rose/30 shadow-sm">
            <HiBadgeCheck className="text-rose-accent text-sm" />
            <ShinyText text={lang === "id" ? "SERTIFIKASI FORMAL" : "OFFICIAL CERTIFICATIONS"} speed={3} />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neo-black dark:text-dark-text tracking-tight">
            <span className="text-rose-accent dark:text-dusty-rose text-pink-glow drop-shadow-sm">
              <SplitText text={getLocalizedText(certificatesData.title)} delay={0.03} />
            </span>
          </h1>

          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg leading-relaxed">
            {getLocalizedText(certificatesData.subtitle)}
          </p>

          {/* Category Filter Pills with Magnet & Glow */}
          <div className="pt-4 flex justify-center flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-md dark:shadow-[0_0_20px_rgba(232,122,138,0.5)] scale-105"
                      : "bg-white/80 dark:bg-[#251922]/90 text-neo-black/70 dark:text-dark-text/80 border border-peach/40 dark:border-dusty-rose/25 hover:border-dusty-rose dark:hover:border-dusty-rose hover:text-neo-black dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ReactBits Spotlight Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredList.map((cert, index) => {
            const titleText = getLocalizedText(cert.title);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setSelectedCert(cert)}
                className="h-full"
              >
                <SpotlightCard
                  className="group cursor-pointer rounded-3xl overflow-hidden border border-peach/40 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#251822]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_10px_35px_rgba(232,122,138,0.18)] backdrop-blur-md flex flex-col justify-between hover:border-dusty-rose transition-all duration-300 h-full"
                  spotlightColor="rgba(232, 122, 138, 0.35)"
                >
                  {/* Image Thumbnail Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream/70 dark:bg-dark-bg/60 p-4 border-b border-peach/30 dark:border-dusty-rose/20 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={titleText}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                    
                    {/* Soft Hover Spotlight Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/95 dark:bg-dark-card/95 text-neo-black dark:text-dark-text px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform border border-dusty-rose/40">
                        <HiZoomIn className="text-dusty-rose text-base" />
                        {lang === "id" ? "Pratinjau Sertifikat" : "Preview Certificate"}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/30">
                          {cert.category}
                        </span>
                        <span className="text-xs font-medium text-neo-black/60 dark:text-dark-text/60 flex items-center gap-1">
                          <HiCalendar className="text-dusty-rose" />
                          {cert.period}
                        </span>
                      </div>

                      <h3 className="font-bold text-neo-black dark:text-dark-text text-base md:text-lg group-hover:text-dusty-rose transition-colors leading-snug line-clamp-2">
                        {titleText}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-peach/30 dark:border-dusty-rose/20 flex items-center justify-between text-xs text-neo-black/60 dark:text-dark-text/60">
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className="text-dusty-rose font-bold group-hover:underline flex items-center gap-1">
                        {lang === "id" ? "Perbesar →" : "Enlarge →"}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Preview Modal with High Z-Index & Proportional Layout */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-neo-black/80 dark:bg-black/85 backdrop-blur-md p-4 md:p-8 select-none overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-3xl w-full max-h-[85vh] bg-white dark:bg-[#1E141C] rounded-3xl border border-peach/50 dark:border-dusty-rose/40 shadow-2xl flex flex-col my-auto z-10 overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-peach/30 dark:border-dusty-rose/20 flex items-center justify-between bg-cream/90 dark:bg-[#2B1D27]/90 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3 pr-4">
                  <div className="w-10 h-10 rounded-full bg-peach/40 dark:bg-dusty-rose/20 flex items-center justify-center shrink-0 border border-dusty-rose/30">
                    <HiBadgeCheck className="text-dusty-rose text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base md:text-lg text-neo-black dark:text-dark-text leading-tight line-clamp-1">
                      {getLocalizedText(selectedCert.title)}
                    </h3>
                    <p className="text-xs text-dusty-rose font-semibold mt-0.5">
                      {selectedCert.issuer} — {selectedCert.period}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-full bg-peach/40 dark:bg-white/10 text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close Modal"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* Modal Certificate Preview */}
              <div className="relative p-4 md:p-6 bg-cream/20 dark:bg-dark-bg/80 flex items-center justify-center overflow-auto flex-1 max-h-[55vh]">
                <img
                  src={selectedCert.image}
                  alt={getLocalizedText(selectedCert.title)}
                  className="max-w-full max-h-[50vh] object-contain rounded-xl shadow-lg border border-peach/30 dark:border-dusty-rose/20"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 bg-cream/90 dark:bg-[#2B1D27]/90 border-t border-peach/30 dark:border-dusty-rose/20 flex items-center justify-between gap-4 shrink-0">
                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/30">
                  {selectedCert.category}
                </span>

                <MagnetButton
                  href={selectedCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold text-xs shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] hover:shadow-lg transition-all"
                >
                  {lang === "id" ? "Buka Ukuran Penuh / Unduh" : "Open Full Size / Download"}
                </MagnetButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

