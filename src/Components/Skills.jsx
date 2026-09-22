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
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3">
            {lang === "id" ? "Keahlian" : "Expertise"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neo-black dark:text-dark-text mb-4">
            {skillsData.title[lang]}
          </h2>
          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {skillsData.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillsData.list.map((skillGroup, index) => {
            const GroupIcon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white/70 dark:bg-dark-card/70 p-8 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md flex flex-col justify-between hover:border-dusty-rose/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-peach/30 dark:border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                      <GroupIcon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neo-black dark:text-dark-text">
                        {skillGroup.category}
                      </h3>
                      <span className="text-xs text-dusty-rose font-medium">
                        {skillGroup.items.length} Skills & Tools
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cream dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 text-neo-black dark:text-dark-text font-medium text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-dusty-rose hover:to-rose-accent hover:text-white hover:border-transparent hover:scale-105 cursor-default soft-shadow"
                        >
                          <Icon className="text-base text-dusty-rose group-hover:text-white transition-colors" />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
