import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { projectsData } from "../Data/Data";
import { HiOutlineExternalLink, HiOutlineCode, HiViewGrid, HiPhotograph, HiSparkles, HiDesktopComputer } from "react-icons/hi";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { SplitText, SpotlightCard, MagnetButton, ShinyText, StackGallery } from "./ReactBits";

const Projects = () => {
  const { lang } = useContext(ThemeLangContext);
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeMainFilter, setActiveMainFilter] = useState("Semua");

  // Scroll to top or scroll to target project on page navigation
  useEffect(() => {
    const hash = location.hash || (location.state && location.state.targetId ? `#${location.state.targetId}` : "");
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const openGalleryModal = (project, startIndex = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(startIndex);
  };

  // Filter projects by category tab
  const mainFilterTabs = [
    { label: lang === "id" ? "Semua Proyek" : "All Projects", key: "Semua" },
    { label: "React & Web SPA", key: "React" },
    { label: ".NET & REST API", key: ".NET" },
    { label: "C & Desktop", key: "C" },
  ];

  const filteredProjects = projectsData.list.filter((project) => {
    if (activeMainFilter === "Semua") return true;
    if (activeMainFilter === "React") return project.tech.some(t => t.name.includes("React") || t.name.includes("HTML"));
    if (activeMainFilter === ".NET") return project.tech.some(t => t.name.includes(".NET") || t.name.includes("C#") || t.name.includes("Web API"));
    if (activeMainFilter === "C") return project.tech.some(t => t.name.includes("Bahasa C") || t.name.includes("Desktop") || t.name.includes("Framework"));
    return true;
  });

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ReactBits Enhanced Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-bold uppercase tracking-wider border border-dusty-rose/30 shadow-sm">
            <HiSparkles className="text-rose-accent animate-spin" style={{ animationDuration: '4s' }} />
            <ShinyText text={lang === "id" ? "KARYA & PROYEK" : "PORTFOLIO SHOWCASE"} speed={3} />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neo-black dark:text-dark-text tracking-tight">
            <span className="text-rose-accent dark:text-dusty-rose text-pink-glow drop-shadow-sm">
              <SplitText text={projectsData.title[lang]} delay={0.03} />
            </span>
          </h1>

          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg leading-relaxed">
            {projectsData.subtitle[lang]}
          </p>

          {/* Interactive Project Category Filter Tabs */}
          <div className="pt-4 flex justify-center flex-wrap gap-2.5">
            {mainFilterTabs.map((tab) => {
              const isActive = activeMainFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveMainFilter(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-md dark:shadow-[0_0_20px_rgba(232,122,138,0.5)] scale-105"
                      : "bg-white/80 dark:bg-[#251922]/90 text-neo-black/70 dark:text-dark-text/80 border border-peach/40 dark:border-dusty-rose/25 hover:border-dusty-rose dark:hover:border-dusty-rose hover:text-neo-black dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Sleek, Perfectly-Proportioned Project Cards List */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              id={project.id}
              key={project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="scroll-mt-28"
            >
              <SpotlightCard
                className="p-6 md:p-8 rounded-3xl border border-peach/40 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#251822]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_10px_35px_rgba(232,122,138,0.18)] backdrop-blur-md hover:border-dusty-rose dark:hover:border-dusty-rose transition-all duration-300 group"
                spotlightColor="rgba(232, 122, 138, 0.35)"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full">
                  
                  {/* Left Column: Cover Image & Thumbnails Showcase */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-4">
                    <div 
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group/img soft-shadow border border-peach/40 dark:border-dusty-rose/30"
                      onClick={() => openGalleryModal(project, 0)}
                    >
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover/img:opacity-95 transition-opacity flex items-end p-5">
                        <div className="text-white flex items-center justify-between w-full">
                          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                            <HiDesktopComputer className="text-peach text-sm" />
                            {project.screenshots.length} Galeri Antarmuka
                          </span>
                          <span className="text-xs font-bold underline text-peach group-hover/img:text-white transition-colors">
                            Buka Galeri 3D &rarr;
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Micro-Thumbnails */}
                    {project.screenshots && project.screenshots.length > 1 && (
                      <div>
                        <p className="text-xs font-semibold text-neo-black/60 dark:text-dark-text/60 mb-2 flex items-center gap-1.5">
                          <HiViewGrid className="text-dusty-rose" />
                          Pratinjau Antarmuka Program:
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                          {project.screenshots.slice(0, 5).map((shot, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => openGalleryModal(project, sIdx)}
                              className="shrink-0 w-16 h-11 rounded-xl overflow-hidden border border-peach/40 dark:border-dusty-rose/30 hover:border-dusty-rose transition-all relative group/thumb cursor-pointer soft-shadow"
                            >
                              <img src={shot.src} alt={shot.title} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" />
                            </button>
                          ))}
                          {project.screenshots.length > 5 && (
                            <button
                              onClick={() => openGalleryModal(project, 5)}
                              className="shrink-0 w-16 h-11 rounded-xl bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose font-bold text-xs flex items-center justify-center border border-dusty-rose/30 hover:bg-dusty-rose hover:text-white transition-colors cursor-pointer"
                            >
                              +{project.screenshots.length - 5}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Balanced Project Details & ReactBits Buttons */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/30 dark:border-dusty-rose/40">
                          {project.period}
                        </span>
                        {project.featured && (
                          <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-sm dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] flex items-center gap-1">
                            <HiSparkles className="text-yellow-200" />
                            Featured Project
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-neo-black dark:text-dark-text leading-snug group-hover:text-dusty-rose transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-neo-black/80 dark:text-dark-text/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {project.description[lang]}
                      </p>

                      {/* Highlights Bullet List with Language Support */}
                      {project.highlights && (
                        <div className="space-y-1.5 pt-1">
                          {(Array.isArray(project.highlights) 
                            ? project.highlights 
                            : (project.highlights[lang] || project.highlights.id)
                          ).map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs md:text-sm text-neo-black/80 dark:text-dark-text/80">
                              <span className="text-dusty-rose font-bold">•</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Badges with High Contrast & Dark Mode Glow */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, idx) => {
                          const Icon = t.icon;
                          return (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-peach/30 dark:bg-[#2C1C28] text-neo-black dark:text-peach font-semibold text-xs rounded-xl border border-peach/50 dark:border-dusty-rose/30 hover:bg-dusty-rose hover:text-white dark:hover:bg-dusty-rose dark:hover:text-white transition-all duration-300 soft-shadow"
                            >
                              <Icon className="text-dusty-rose group-hover:text-white" />
                              {t.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                      {/* Actions with ReactBits MagnetButton */}
                      <div className="flex items-center gap-3 pt-5 border-t border-peach/30 dark:border-dusty-rose/20">
                        <MagnetButton
                          onClick={() => openGalleryModal(project, 0)}
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold rounded-2xl text-sm shadow-md dark:shadow-[0_0_20px_rgba(232,122,138,0.35)] hover:shadow-lg transition-all"
                        >
                          <HiDesktopComputer className="text-lg" />
                          Jelajahi Tampilan Program ({project.screenshots.length})
                        </MagnetButton>

                        <MagnetButton
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 bg-white/80 dark:bg-[#251922]/90 text-neo-black dark:text-dark-text border border-peach/50 dark:border-dusty-rose/30 rounded-2xl soft-shadow hover:bg-peach/30 dark:hover:bg-dusty-rose/30 hover:border-dusty-rose transition-all"
                          ariaLabel="View GitHub Repository"
                        >
                          <HiOutlineCode className="text-xl text-dusty-rose" />
                        </MagnetButton>
                      </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REACTBITS 3D STACK & ACCORDION SHOWCASE GALLERY MODAL */}
      <StackGallery
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        initialIndex={activeImageIndex}
      />
    </section>
  );
};

export default Projects;
