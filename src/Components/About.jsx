import { useContext } from "react";
import { HiOutlineMail, HiOutlineDownload, HiAcademicCap, HiBadgeCheck, HiCalendar, HiArrowRight, HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { personalInfo, educationData, nonFormalEducationData, projectsData } from "../Data/Data";
import heroImg from "../assets/Profil/april3.jpeg";
import Skills from "./Skills";
import { SplitText, SpotlightCard, MagnetButton } from "./ReactBits";

const About = () => {
  const { lang } = useContext(ThemeLangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[calc(100vh-120px)] flex flex-col justify-center py-12 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center z-10">
          
          {/* Avatar / Photo using april3.jpeg */}
          <motion.div 
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="relative group">
              {/* Soft Ambient Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-dusty-rose via-peach to-rose-accent rounded-3xl opacity-50 blur-2xl group-hover:opacity-80 transition duration-700 animate-pulse" />
              
              <SpotlightCard 
                className="p-3 bg-white/70 dark:bg-dark-card/80 backdrop-blur-md rounded-3xl border border-peach/50 dark:border-white/10 soft-shadow"
                spotlightColor="rgba(232, 122, 138, 0.35)"
              >
                <img
                  src={heroImg}
                  alt={personalInfo.name}
                  className="w-72 h-72 sm:w-88 sm:h-88 object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Floating Status Badge (Pink Dot & Multi-language) */}
                <div className="absolute -bottom-3 -left-3 bg-white/95 dark:bg-dark-card/95 border border-peach/50 dark:border-white/15 backdrop-blur-md px-4 py-2 rounded-2xl soft-shadow flex items-center gap-2.5 z-30">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-dusty-rose"></span>
                  </span>
                  <span className="text-xs font-semibold text-neo-black dark:text-dark-text">
                    {lang === "id" ? "Terbuka untuk Peran Developer" : "Open for Developer Roles"}
                  </span>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="text-center md:text-left order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose dark:text-peach text-xs font-semibold uppercase tracking-wider mb-6 border border-dusty-rose/30">
              <HiBadgeCheck className="text-base text-dusty-rose" />
              {personalInfo.role}
            </motion.div>

            {/* Title with ReactBits SplitText, Vibrant Pink & Hover Color Change */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neo-black dark:text-dark-text mb-6 tracking-tight leading-tight"
            >
              <span className="text-rose-accent dark:text-dusty-rose text-pink-glow drop-shadow-sm">
                <SplitText text={personalInfo.about.heroTitle[lang]} delay={0.03} />
              </span>
            </motion.h1>
            
            {/* Description Paragraph Card wrapped in ReactBits SpotlightCard & Border Glow */}
            <motion.div variants={itemVariants} className="mb-8">
              <SpotlightCard 
                className="p-6 md:p-7 bg-white/70 dark:bg-dark-card/80 border border-peach/50 dark:border-white/10 soft-shadow backdrop-blur-md"
                spotlightColor="rgba(232, 122, 138, 0.28)"
              >
                <p className="text-neo-black/80 dark:text-dark-text/80 font-normal leading-relaxed text-base md:text-lg">
                  {personalInfo.about.heroDesc[lang]}
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Hero Buttons with MagnetButton ReactBits */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <MagnetButton
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <HiOutlineMail className="text-xl" />
                {lang === "id" ? "Hubungi Saya" : "Contact Me"}
              </MagnetButton>

              {/* Activated CV Download Button */}
              <MagnetButton
                href="/CV_Aprilliyanti.pdf"
                download="CV_Aprilliyanti.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text font-semibold border border-peach/50 dark:border-white/10 rounded-2xl soft-shadow hover:bg-peach/30 hover:border-dusty-rose transition-all"
              >
                <HiOutlineDownload className="text-xl text-dusty-rose" />
                {lang === "id" ? "Unduh CV (PDF)" : "Download CV (PDF)"}
              </MagnetButton>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 2. PROFIL SAYA (Non-basic interactive Spotlight Card with ReactBits) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard 
              className="p-8 md:p-12"
              spotlightColor="rgba(232, 122, 138, 0.28)"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-peach/30 dark:border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-neo-black dark:text-dark-text flex items-center gap-3">
                  <span className="w-3 h-8 rounded-full bg-gradient-to-b from-dusty-rose to-rose-accent inline-block" />
                  {lang === "id" ? "Profil Saya" : "My Profile"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/20">
                    Beasiswa PUB PASIM
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose border border-dusty-rose/20">
                    IPK 3.86
                  </span>
                </div>
              </div>
              
              <div className="space-y-6 text-neo-black/80 dark:text-dark-text/80 leading-relaxed text-base md:text-lg">
                <p>{personalInfo.about.aboutDesc1[lang]}</p>
                <p dangerouslySetInnerHTML={{ __html: personalInfo.about.aboutDesc2[lang] }} />
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

      {/* 3. KEAHLIAN & SPESIALISASI (Horizontal Layout with ReactBits) */}
      <Skills />

      {/* 4. PENDIDIKAN FORMAL (EDUCATION) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <HiAcademicCap className="text-3xl text-dusty-rose" />
              <h2 className="text-2xl md:text-3xl font-bold text-neo-black dark:text-dark-text">
                {educationData.title[lang]}
              </h2>
            </div>
            <p className="text-neo-black/60 dark:text-dark-text/60 text-sm md:text-base">
              {lang === "id" ? "Riwayat pendidikan formal akademis" : "Formal academic education history"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.list.map((edu, idx) => (
              <SpotlightCard
                key={idx}
                className="p-7 flex flex-col justify-between group"
                spotlightColor="rgba(232, 122, 138, 0.25)"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="px-3.5 py-1 bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold rounded-full border border-dusty-rose/20">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-medium text-neo-black/50 dark:text-dark-text/50 flex items-center gap-1">
                      <HiCalendar className="text-dusty-rose" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neo-black dark:text-dark-text mb-1 group-hover:text-dusty-rose transition-colors">
                    {edu.degree[lang]}
                  </h3>
                  <p className="text-sm font-semibold text-dusty-rose mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-neo-black/70 dark:text-dark-text/70 leading-relaxed mb-4">
                    {edu.details[lang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-peach/30 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 bg-cream dark:bg-dark-bg/80 px-3 py-1.5 rounded-xl border border-peach/30">
                    {edu.gpa}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PENDIDIKAN NONFORMAL & PELATIHAN (Using Tech Icons instead of numbers) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3">
              PUB PASIM Bandung
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neo-black dark:text-dark-text mb-2">
              {nonFormalEducationData.title[lang]}
            </h2>
            <p className="text-neo-black/60 dark:text-dark-text/60 text-sm md:text-base">
              {nonFormalEducationData.subtitle[lang]}
            </p>
          </motion.div>

          <div className="space-y-4">
            {nonFormalEducationData.list.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <SpotlightCard
                  key={index}
                  className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
                  spotlightColor="rgba(232, 122, 138, 0.25)"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Technology Icon instead of sequential numbers */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center text-xl shadow-md shrink-0 mt-1 md:mt-0 group-hover:scale-110 transition-transform">
                      {ItemIcon && <ItemIcon />}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-neo-black dark:text-dark-text group-hover:text-dusty-rose transition-colors">
                          {typeof item.title === "object" ? item.title[lang] : item.title}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose font-medium">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-neo-black/70 dark:text-dark-text/70 leading-relaxed">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </div>

                  {item.cert && (
                    <div className="shrink-0 w-full md:w-auto flex justify-end">
                      <Link
                        to="/certificates"
                        state={{ certTitle: typeof item.title === "object" ? item.title.id : item.title }}
                        className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-cream dark:bg-dark-bg text-dusty-rose border border-peach/40 hover:bg-dusty-rose hover:text-white transition-colors"
                      >
                        <HiBadgeCheck size={16} />
                        {lang === "id" ? "Lihat Sertifikat" : "View Certificate"}
                      </Link>
                    </div>
                  )}
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. RINGKASAN PROYEK UNGGULAN (Compact & Eye-Catching Featured Projects Summary) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-2 border border-dusty-rose/20">
                Portfolio Showcase
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neo-black dark:text-dark-text">
                {lang === "id" ? "Proyek Unggulan" : "Featured Projects"}
              </h2>
            </div>
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>{lang === "id" ? "Lihat Semua Proyek" : "View All Projects"}</span>
              <HiArrowRight />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.list.slice(0, 2).map((project) => (
              <SpotlightCard
                key={project.id}
                className="overflow-hidden group flex flex-col justify-between"
                spotlightColor="rgba(232, 122, 138, 0.3)"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />
                  <span className="absolute top-3 right-3 px-3 py-1 bg-dusty-rose text-white text-xs font-bold rounded-full shadow-md">
                    {project.period}
                  </span>
                  <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-lg drop-shadow-md line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-neo-black/75 dark:text-dark-text/75 line-clamp-2 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-xl bg-peach/40 dark:bg-dark-card-lighter text-neo-black dark:text-dark-text font-semibold hover:bg-dusty-rose hover:text-white transition-all duration-300 border border-peach/50 dark:border-white/10 shadow-sm"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex justify-end">
                    <Link
                      to={`/projects#${project.id}`}
                      state={{ targetId: project.id }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-dusty-rose hover:text-rose-accent hover:underline transition-colors"
                    >
                      <span>{lang === "id" ? "Rincian Proyek" : "Project Details"}</span>
                      <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;