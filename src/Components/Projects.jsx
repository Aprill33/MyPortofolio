import { useContext } from "react";
import { projectsData } from "../Data/Data";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Projects = () => {
  const { lang } = useContext(ThemeLangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-cream dark:bg-dark-bg min-h-[calc(100vh-80px)] overflow-hidden transition-colors duration-300 border-t-4 border-neo-black dark:border-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block text-3xl md:text-4xl font-semibold text-neo-black dark:text-dark-text uppercase mb-6 relative">
            <span className="relative z-10 transition-colors duration-300 hover:text-dusty-rose cursor-default">
              {projectsData.title[lang]}
            </span>
            <div className="absolute bottom-1 left-0 w-full h-4 bg-peach -z-10" />
          </h2>
          <p className="mt-4 text-neo-black dark:text-dark-text font-medium text-base md:text-lg max-w-2xl mx-auto bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white p-4 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]">
            {projectsData.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsData.list.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -8, x: -8 }}
              className="bg-card-white dark:bg-dark-card rounded-2xl border-4 border-neo-black dark:border-white shadow-[8px_8px_0_#221C1B] dark:shadow-[8px_8px_0_#FBB5B1] transition-all duration-300 group flex flex-col h-full overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-cream dark:bg-dark-bg border-b-4 border-neo-black dark:border-white">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold text-neo-black dark:text-dark-text mb-4 uppercase group-hover:text-dusty-rose transition-colors">
                  {project.title}
                </h3>
                <p className="text-neo-black dark:text-dark-text font-medium mb-6 flex-grow leading-relaxed text-sm md:text-base">
                  {project.description[lang]}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-peach text-neo-black font-semibold border-2 border-neo-black shadow-[2px_2px_0_#221C1B] text-xs md:text-sm"
                      >
                        <Icon className="text-base md:text-lg" />
                        {t.name}
                      </span>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-6 border-t-4 border-neo-black dark:border-white border-dashed">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white text-neo-black dark:text-dark-text font-semibold hover:bg-neo-black hover:text-white dark:hover:bg-white dark:hover:text-neo-black transition-colors shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FBB5B1] hover:translate-y-1 hover:translate-x-1 hover:shadow-none text-sm md:text-base"
                  >
                    <HiOutlineCode className="text-xl" />
                    Code
                  </a>
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dusty-rose border-2 border-neo-black dark:border-white text-neo-black font-semibold hover:bg-peach transition-colors shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] hover:translate-y-1 hover:translate-x-1 hover:shadow-none text-sm md:text-base"
                    >
                      <HiOutlineExternalLink className="text-xl" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cream dark:bg-dark-bg border-2 border-neo-black dark:border-white text-neo-black/40 dark:text-dark-text/40 font-semibold cursor-not-allowed text-sm md:text-base"
                    >
                      <HiOutlineExternalLink className="text-xl" />
                      Offline
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
