import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiX, HiSparkles } from "react-icons/hi";

export const StackGallery = ({
  project,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Reset index and category when project, initialIndex or isOpen changes
  useEffect(() => {
    setActiveIndex(initialIndex || 0);
    setActiveCategory("Semua");
  }, [project, initialIndex, isOpen]);

  if (!isOpen || !project || !project.screenshots || project.screenshots.length === 0) return null;

  const categories = ["Semua", ...new Set(project.screenshots.map((s) => s.category).filter(Boolean))];

  const filteredScreenshots = activeCategory === "Semua"
    ? project.screenshots
    : project.screenshots.filter((s) => s.category === activeCategory);

  const safeActiveIndex = activeIndex < filteredScreenshots.length ? activeIndex : 0;
  const currentItem = filteredScreenshots[safeActiveIndex] || filteredScreenshots[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredScreenshots.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredScreenshots.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center bg-neo-black/70 dark:bg-black/80 backdrop-blur-md pt-20 md:pt-24 pb-6 px-4 md:px-8 select-none overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative max-w-5xl w-full bg-white dark:bg-dark-card rounded-3xl border border-peach/50 dark:border-white/10 soft-shadow overflow-hidden flex flex-col my-auto z-10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-peach/30 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 bg-cream/80 dark:bg-dark-bg/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-dusty-rose animate-ping shrink-0" />
              <div>
                <h3 className="font-extrabold text-base md:text-lg text-neo-black dark:text-dark-text leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-dusty-rose font-semibold mt-0.5">
                  {currentItem?.title || `Antarmuka Halaman ${safeActiveIndex + 1}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Category Filter Tabs */}
              {categories.length > 1 && (
                <div className="flex items-center gap-1 bg-peach/30 dark:bg-dark-bg p-1 rounded-xl border border-peach/30 dark:border-white/10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveIndex(0);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-sm"
                          : "text-neo-black/70 dark:text-dark-text/70 hover:text-neo-black dark:hover:text-dark-text"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-peach/40 dark:bg-white/10 text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <HiX size={20} />
              </button>
            </div>
          </div>

          {/* Main 3D Deck Showcase Stage */}
          <div className="relative flex-1 bg-cream/40 dark:bg-dark-bg/90 min-h-[350px] md:min-h-[460px] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            
            {/* Ambient Background Soft Glow */}
            <div className="absolute inset-0 bg-radial from-dusty-rose/15 via-transparent to-transparent blur-3xl pointer-events-none" />

            {/* 3D Stack Deck Container */}
            <div className="relative w-full max-w-3xl h-[300px] sm:h-[360px] md:h-[420px] flex items-center justify-center">
              {filteredScreenshots.map((item, idx) => {
                const offset = idx - safeActiveIndex;
                const isVisible = Math.abs(offset) <= 2;
                if (!isVisible) return null;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    initial={false}
                    animate={{
                      scale: 1 - Math.abs(offset) * 0.07,
                      rotateZ: offset * 2.5,
                      x: offset * 32,
                      y: Math.abs(offset) * 10,
                      zIndex: 30 - Math.abs(offset) * 5,
                      opacity: offset === 0 ? 1 : 0.65 - Math.abs(offset) * 0.2,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className={`absolute max-w-[90%] md:max-w-full max-h-full rounded-2xl overflow-hidden border-2 cursor-pointer soft-shadow ${
                      offset === 0
                        ? "border-dusty-rose shadow-2xl ring-4 ring-dusty-rose/20"
                        : "border-peach/40 dark:border-white/10 hover:border-dusty-rose/60"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain rounded-xl bg-white dark:bg-dark-card"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons Positioned Outside Image Frame to avoid covering content */}
            {filteredScreenshots.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 md:left-6 z-40 p-3 rounded-full bg-white/90 dark:bg-dark-card/90 hover:bg-dusty-rose hover:text-white text-neo-black dark:text-dark-text backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-110 border border-peach/50 dark:border-white/15"
                  aria-label="Previous image"
                >
                  <HiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 md:right-6 z-40 p-3 rounded-full bg-white/90 dark:bg-dark-card/90 hover:bg-dusty-rose hover:text-white text-neo-black dark:text-dark-text backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-110 border border-peach/50 dark:border-white/15"
                  aria-label="Next image"
                >
                  <HiChevronRight size={24} />
                </button>
              </>
            )}

            {/* Bottom Counter Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-md text-neo-black dark:text-dark-text text-xs font-bold border border-peach/50 dark:border-white/15 shadow-md flex items-center gap-2 z-40">
              <HiSparkles className="text-dusty-rose animate-spin" style={{ animationDuration: '6s' }} />
              <span className="truncate max-w-[200px] sm:max-w-none">{currentItem?.title || `Antarmuka ${safeActiveIndex + 1}`}</span>
              <span className="text-dusty-rose font-extrabold ml-1">
                ({safeActiveIndex + 1} / {filteredScreenshots.length})
              </span>
            </div>
          </div>

          {/* Bottom Interactive Thumbnail Strip */}
          <div className="p-3 bg-cream/70 dark:bg-dark-bg/70 border-t border-peach/30 dark:border-white/10 overflow-x-auto scrollbar-none flex items-center justify-center gap-2.5">
            {filteredScreenshots.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 w-16 h-11 rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative ${
                  safeActiveIndex === idx
                    ? "border-dusty-rose scale-105 shadow-md ring-2 ring-dusty-rose/30"
                    : "border-peach/30 dark:border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StackGallery;


