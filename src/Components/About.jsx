import { useContext } from "react";
import { HiOutlineMail, HiOutlineDownload, HiAcademicCap, HiBadgeCheck, HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { personalInfo, educationData, nonFormalEducationData } from "../Data/Data";
import heroImg from "../assets/Profil/aprill.jpeg";

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
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-120px)] flex flex-col justify-center py-12 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center z-10">
          
          {/* Avatar / Photo */}
          <motion.div 
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="relative group">
              {/* Soft Ambient Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-dusty-rose via-peach to-rose-accent rounded-3xl opacity-40 blur-2xl group-hover:opacity-70 transition duration-700" />
              
              <div className="relative p-2 bg-white/60 dark:bg-dark-card/60 backdrop-blur-md rounded-3xl border border-peach/50 dark:border-white/10 soft-shadow">
                <img
                  src={heroImg}
                  alt={personalInfo.name}
                  className="w-72 h-72 sm:w-88 sm:h-88 object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Floating Status Badge */}
                <div className="absolute -bottom-3 -left-3 bg-white/90 dark:bg-dark-card/90 border border-peach/50 dark:border-white/10 backdrop-blur-md px-4 py-2 rounded-2xl soft-shadow flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-neo-black dark:text-dark-text">
                    Open for Developer Roles
                  </span>
                </div>
              </div>
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

            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neo-black dark:text-dark-text mb-6 tracking-tight leading-tight"
            >
              {personalInfo.about.heroTitle[lang]}
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-neo-black/80 dark:text-dark-text/80 font-normal leading-relaxed text-base md:text-lg bg-white/60 dark:bg-dark-card/60 border border-peach/40 dark:border-white/10 p-6 rounded-2xl soft-shadow backdrop-blur-sm">
                {personalInfo.about.heroDesc[lang]}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <HiOutlineMail className="text-xl" />
                {lang === "id" ? "Hubungi Saya" : "Contact Me"}
              </Link>
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 dark:bg-dark-card/80 text-neo-black dark:text-dark-text font-semibold border border-peach/50 dark:border-white/10 rounded-2xl soft-shadow hover:bg-peach/30 hover:border-dusty-rose hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <HiOutlineDownload className="text-xl text-dusty-rose" />
                {lang === "id" ? "Unduh CV" : "Download CV"}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT ME DETAILED */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 dark:bg-dark-card/60 p-8 md:p-12 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose flex items-center justify-center font-bold">
                01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neo-black dark:text-dark-text">
                {lang === "id" ? "Profil & Latar Belakang" : "Profile & Background"}
              </h2>
            </div>
            
            <div className="space-y-6 text-neo-black/80 dark:text-dark-text/80 leading-relaxed text-base md:text-lg">
              <p>{personalInfo.about.aboutDesc1[lang]}</p>
              <p dangerouslySetInnerHTML={{ __html: personalInfo.about.aboutDesc2[lang] }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PENDIDIKAN FORMAL (EDUCATION) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/70 dark:bg-dark-card/70 p-7 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow flex flex-col justify-between hover:border-dusty-rose/50 transition-all duration-300 group"
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
                  <span className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 bg-cream dark:bg-dark-bg px-3 py-1.5 rounded-xl border border-peach/30">
                    {edu.gpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PENDIDIKAN NONFORMAL & PELATIHAN (PUB COURSES) */}
      <section className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center md:text-left"
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
            {nonFormalEducationData.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white/70 dark:bg-dark-card/70 p-6 rounded-2xl border border-peach/40 dark:border-white/10 soft-shadow flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:border-dusty-rose/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0 mt-1 md:mt-0">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-neo-black dark:text-dark-text">
                        {item.title}
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

                {/* Certificate Preview Button / Thumbnail */}
                {item.cert && (
                  <div className="shrink-0 w-full md:w-auto flex justify-end">
                    <Link
                      to="/certificates"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-cream dark:bg-dark-bg text-dusty-rose border border-peach/40 hover:bg-dusty-rose hover:text-white transition-colors"
                    >
                      <HiBadgeCheck size={16} />
                      Lihat Sertifikat
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;