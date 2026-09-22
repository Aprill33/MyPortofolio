import { useState, useEffect, useContext } from "react";
import { certificatesData } from "../Data/Data";
import { HiX, HiZoomIn, HiBadgeCheck, HiCalendar } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Certificates = () => {
  const { lang } = useContext(ThemeLangContext);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3">
            <HiBadgeCheck className="text-sm" />
            {lang === "id" ? "Sertifikasi Formal" : "Official Certifications"}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neo-black dark:text-dark-text mb-4">
            {certificatesData.title[lang]}
          </h1>
          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {certificatesData.subtitle[lang]}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-md scale-105"
                  : "bg-white/70 dark:bg-dark-card/70 text-neo-black/70 dark:text-dark-text/70 border border-peach/40 dark:border-white/10 hover:border-dusty-rose hover:text-neo-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredList.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white/70 dark:bg-dark-card/70 rounded-3xl overflow-hidden border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md flex flex-col justify-between hover:border-dusty-rose/50 transition-all duration-300"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Thumbnail Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream dark:bg-dark-bg/50 p-4 border-b border-peach/30 dark:border-white/10 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
                
                {/* Soft Hover Spotlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 text-neo-black px-4 py-2.5 rounded-full font-semibold text-xs flex items-center gap-2 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <HiZoomIn className="text-dusty-rose text-base" />
                    Lihat Sertifikat
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose">
                      {cert.category}
                    </span>
                    <span className="text-xs font-medium text-neo-black/50 dark:text-dark-text/50 flex items-center gap-1">
                      <HiCalendar className="text-dusty-rose" />
                      {cert.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-neo-black dark:text-dark-text text-base md:text-lg group-hover:text-dusty-rose transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-peach/30 dark:border-white/10 flex items-center justify-between text-xs text-neo-black/60 dark:text-dark-text/60">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="text-dusty-rose font-semibold group-hover:underline">Perbesar &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 bg-white/20 text-white hover:bg-dusty-rose transition-colors p-3 rounded-full border border-white/30 backdrop-blur-md shadow-lg z-[110] cursor-pointer"
              aria-label="Close Modal"
            >
              <HiX size={24} />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="bg-white dark:bg-dark-card border border-peach/50 dark:border-white/10 p-3 sm:p-4 shadow-2xl rounded-3xl w-full">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[78vh] object-contain rounded-2xl"
                />
                
                <div className="mt-4 px-3 py-2 flex flex-wrap items-center justify-between gap-3 bg-cream/60 dark:bg-dark-bg/60 rounded-2xl border border-peach/30 dark:border-white/10">
                  <div>
                    <h3 className="font-bold text-neo-black dark:text-dark-text text-base md:text-lg">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neo-black/60 dark:text-dark-text/60">
                      {selectedCert.issuer} — {selectedCert.period}
                    </p>
                  </div>
                  <a
                    href={selectedCert.image}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold text-xs shadow-md hover:shadow-lg transition-all"
                  >
                    Buka Ukuran Penuh
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
