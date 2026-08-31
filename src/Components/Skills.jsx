import { useContext } from "react";
import { skillsData } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Skills = () => {
  const { lang } = useContext(ThemeLangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-cream dark:bg-dark-bg border-t-4 border-neo-black dark:border-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block text-3xl md:text-4xl font-semibold text-neo-black dark:text-dark-text uppercase mb-6 relative">
            <span className="relative z-10 transition-colors duration-300 hover:text-dusty-rose cursor-default">
              {skillsData.title[lang]}
            </span>
            <div className="absolute bottom-1 left-0 w-full h-4 bg-peach -z-10" />
          </h2>
          <p className="mt-4 text-neo-black dark:text-dark-text font-medium text-base md:text-lg max-w-2xl mx-auto bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white p-4 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]">
            {skillsData.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.list.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, x: -5 }}
              className="bg-card-white dark:bg-dark-card p-8 rounded-2xl border-4 border-neo-black dark:border-white shadow-[6px_6px_0_#221C1B] dark:shadow-[6px_6px_0_#FBB5B1] transition-all duration-300 group"
            >
              <h3 className="text-lg md:text-xl font-semibold text-neo-black dark:text-dark-text mb-6 flex items-center gap-3 uppercase">
                <span className="w-10 h-10 border-2 border-neo-black dark:border-white bg-peach text-neo-black flex items-center justify-center text-lg font-semibold shadow-[2px_2px_0_#221C1B]">
                  {index + 1}
                </span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-cream dark:bg-dark-bg border-2 border-neo-black dark:border-white text-neo-black dark:text-dark-text font-medium text-sm md:text-base transition-all duration-300 hover:bg-dusty-rose dark:hover:bg-dusty-rose hover:text-neo-black cursor-default shadow-[2px_2px_0_#221C1B] dark:shadow-[2px_2px_0_#FFF6EE] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                      <Icon className="text-xl" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
