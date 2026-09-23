import { useContext, useState } from "react";
import { skillsData } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { SpotlightCard, InfiniteMarquee } from "./ReactBits";

const Skills = () => {
  const { lang } = useContext(ThemeLangContext);
  const [activeTab, setActiveTab] = useState(0);

  // Flatten all items for the continuous top horizontal marquee
  const allSkillItems = skillsData.list.flatMap((group) => group.items);

  return (
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3 border border-dusty-rose/20">
            {lang === "id" ? "Keahlian" : "Expertise"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neo-black dark:text-dark-text mb-4">
            {skillsData.title[lang]}
          </h2>
          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg leading-relaxed">
            {skillsData.subtitle[lang]}
          </p>
        </motion.div>

        {/* ReactBits Continuous Horizontal Marquee Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-dark-card/60 rounded-3xl p-2 border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md"
        >
          <InfiniteMarquee items={allSkillItems} speed={65} direction="left" />
        </motion.div>

        {/* Horizontal Category Switcher & Horizontal Grid Cards */}
        <div className="space-y-8">
          {/* Horizontal Category Tabs */}
          <div className="flex justify-center flex-wrap gap-3">
            {skillsData.list.map((group, index) => {
              const Icon = group.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-dusty-rose to-rose-accent text-white shadow-md scale-105"
                      : "bg-white/80 dark:bg-dark-card/80 text-neo-black/70 dark:text-dark-text/70 hover:text-neo-black dark:hover:text-dark-text border border-peach/40 dark:border-white/10 hover:border-dusty-rose/50"
                  }`}
                >
                  <Icon className={`text-base ${isActive ? "text-white" : "text-dusty-rose"}`} />
                  <span>{group.category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-peach/40 text-dusty-rose"}`}>
                    {group.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Horizontal Skills Layout (Interactive Cards Grid with ReactBits Spotlight) */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skillsData.list[activeTab].items.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  className="p-5 flex flex-col items-center justify-center text-center gap-3 hover:scale-105 transition-all group"
                  spotlightColor="rgba(232, 122, 138, 0.3)"
                >
                  <div className="w-12 h-12 rounded-2xl bg-peach/30 dark:bg-dusty-rose/20 text-dusty-rose dark:text-peach flex items-center justify-center text-2xl group-hover:bg-gradient-to-tr group-hover:from-dusty-rose group-hover:to-rose-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {ItemIcon && <ItemIcon />}
                  </div>
                  <span className="font-semibold text-neo-black dark:text-dark-text text-sm group-hover:text-dusty-rose transition-colors">
                    {item.name}
                  </span>
                </SpotlightCard>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
