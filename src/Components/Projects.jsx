import { useState, useEffect, useContext } from "react";
import { projectsData } from "../Data/Data";
import { HiOutlineExternalLink, HiOutlineCode, HiX, HiChevronLeft, HiChevronRight, HiViewGrid, HiPhotograph } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Projects = () => {
  const { lang } = useContext(ThemeLangContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("Semua");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Keyboard navigation for screenshot modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, activeImageIndex, activeCategoryFilter]);

  const openGalleryModal = (project, startIndex = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(startIndex);
    setActiveCategoryFilter("Semua");
  };

  const getFilteredScreenshots = () => {
    if (!selectedProject || !selectedProject.screenshots) return [];
    if (activeCategoryFilter === "Semua") {
      return selectedProject.screenshots;
    }
    return selectedProject.screenshots.filter(
      (item) => item.category === activeCategoryFilter
    );
  };

  const currentScreenshots = getFilteredScreenshots();
  const currentImage = currentScreenshots[activeImageIndex] || currentScreenshots[0];

  const handleNextImage = () => {
    if (currentScreenshots.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % currentScreenshots.length);
  };

  const handlePrevImage = () => {
    if (currentScreenshots.length === 0) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? currentScreenshots.length - 1 : prev - 1
    );
  };

  // Extract unique categories for selected project
  const projectCategories = selectedProject
    ? ["Semua", ...new Set(selectedProject.screenshots.map((s) => s.category).filter(Boolean))]
    : ["Semua"];

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3">
            {lang === "id" ? "Karya & Proyek" : "Featured Projects"}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neo-black dark:text-dark-text mb-4">
            {projectsData.title[lang]}
          </h1>
          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {projectsData.subtitle[lang]}
          </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-12">
          {projectsData.list.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-dark-card/70 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] hover:border-dusty-rose/40 transition-all duration-300 group"
            >
              {/* Cover Image & Quick Screenshots Preview */}
              <div className="relative overflow-hidden bg-cream dark:bg-dark-bg p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-peach/30 dark:border-white/10">
                <div 
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group/img soft-shadow border border-peach/30 dark:border-white/10"
                  onClick={() => openGalleryModal(project, 0)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover/img:opacity-90 transition-opacity flex items-end p-6">
                    <div className="text-white flex items-center justify-between w-full">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                        <HiPhotograph className="text-peach text-sm" />
                        {project.screenshots.length} Screenshot Halaman
                      </span>
                      <span className="text-xs font-medium underline text-peach group-hover/img:text-white transition-colors">
                        Buka Galeri &rarr;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screenshot Thumbnails Strip */}
                {project.screenshots && project.screenshots.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-peach/20 dark:border-white/5">
                    <p className="text-xs font-medium text-neo-black/60 dark:text-dark-text/60 mb-2.5 flex items-center gap-1.5">
                      <HiViewGrid className="text-dusty-rose" />
                      Pratinjau Halaman Proyek:
                    </p>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {project.screenshots.slice(0, 5).map((shot, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => openGalleryModal(project, sIdx)}
                          className="shrink-0 w-16 h-12 rounded-lg overflow-hidden border border-peach/40 dark:border-white/10 hover:border-dusty-rose transition-all relative group/thumb cursor-pointer"
                        >
                          <img src={shot.src} alt={shot.title} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" />
                        </button>
                      ))}
                      {project.screenshots.length > 5 && (
                        <button
                          onClick={() => openGalleryModal(project, 5)}
                          className="shrink-0 w-16 h-12 rounded-lg bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose font-bold text-xs flex items-center justify-center border border-dusty-rose/30 hover:bg-dusty-rose hover:text-white transition-colors cursor-pointer"
                        >
                          +{project.screenshots.length - 5}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/20">
                      {project.period}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-neo-black dark:text-dark-text mb-4 leading-tight group-hover:text-dusty-rose transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-neo-black/75 dark:text-dark-text/75 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                    {project.description[lang]}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <div className="mb-6 space-y-1.5">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs md:text-sm text-neo-black/80 dark:text-dark-text/80">
                          <span className="text-dusty-rose font-bold">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => {
                      const Icon = t.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-cream dark:bg-dark-bg text-neo-black dark:text-dark-text font-medium text-xs rounded-xl border border-peach/40 dark:border-white/10"
                        >
                          <Icon className="text-dusty-rose" />
                          {t.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-6 border-t border-peach/30 dark:border-white/10">
                  <button
                    onClick={() => openGalleryModal(project, 0)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold rounded-2xl text-sm shadow-md hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <HiPhotograph className="text-lg" />
                    Lihat Screenshots ({project.screenshots.length})
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-white/10 rounded-2xl soft-shadow hover:bg-peach/30 hover:border-dusty-rose transition-all"
                    title="View GitHub Repository"
                  >
                    <HiOutlineCode className="text-xl text-dusty-rose" />
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text border border-peach/50 dark:border-white/10 rounded-2xl soft-shadow hover:bg-peach/30 hover:border-dusty-rose transition-all"
                      title="Live Demo"
                    >
                      <HiOutlineExternalLink className="text-xl text-dusty-rose" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE MULTI-IMAGE SCREENSHOT GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-6xl w-full bg-white dark:bg-dark-card rounded-3xl border border-peach/50 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Navigation Header */}
              <div className="px-6 py-4 border-b border-peach/30 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 bg-cream/50 dark:bg-dark-bg/50">
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-neo-black dark:text-dark-text flex items-center gap-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-neo-black/60 dark:text-dark-text/60">
                    {currentImage.title || `Halaman ${activeImageIndex + 1}`}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Category Filter Tabs inside Modal */}
                  {projectCategories.length > 1 && (
                    <div className="flex items-center gap-1 bg-peach/30 dark:bg-dark-bg p-1 rounded-xl">
                      {projectCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategoryFilter(cat);
                            setActiveImageIndex(0);
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            activeCategoryFilter === cat
                              ? "bg-dusty-rose text-white shadow-sm"
                              : "text-neo-black/70 dark:text-dark-text/70 hover:text-neo-black"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-peach/40 dark:bg-white/10 text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-colors cursor-pointer"
                    aria-label="Close Modal"
                  >
                    <HiX size={20} />
                  </button>
                </div>
              </div>

              {/* Main Image Showcase with Navigation Arrows */}
              <div className="relative flex-1 bg-black/90 min-h-[350px] md:min-h-[500px] flex items-center justify-center p-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl"
                  />
                </AnimatePresence>

                {/* Left Arrow */}
                {currentScreenshots.length > 1 && (
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-dusty-rose text-white backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-110"
                    aria-label="Previous Image"
                  >
                    <HiChevronLeft size={24} />
                  </button>
                )}

                {/* Right Arrow */}
                {currentScreenshots.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-dusty-rose text-white backdrop-blur-md transition-all cursor-pointer shadow-lg hover:scale-110"
                    aria-label="Next Image"
                  >
                    <HiChevronRight size={24} />
                  </button>
                )}

                {/* Image Counter & Title Badge Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-md">
                  {currentImage.title} ({activeImageIndex + 1} / {currentScreenshots.length})
                </div>
              </div>

              {/* Bottom Thumbnail Selector Carousel Strip */}
              {currentScreenshots.length > 1 && (
                <div className="p-4 bg-cream/70 dark:bg-dark-bg/70 border-t border-peach/30 dark:border-white/10 overflow-x-auto scrollbar-none flex gap-3">
                  {currentScreenshots.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative group ${
                        activeImageIndex === idx
                          ? "border-dusty-rose scale-105 shadow-md"
                          : "border-peach/40 dark:border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
