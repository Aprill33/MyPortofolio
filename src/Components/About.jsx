import { useContext } from "react";
import { HiOutlineMail, HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { personalInfo } from "../Data/Data";
import heroImg from "../assets/aprill.jpeg";

const About = () => {
  const { lang } = useContext(ThemeLangContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 px-6 lg:px-12 bg-cream dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center z-10">
          
          <motion.div 
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Neo-Brutalism Image Container */}
            <div className="relative group perspective-1000">
              <motion.div 
                className="absolute inset-0 bg-peach dark:bg-dusty-rose rounded-3xl border-4 border-neo-black dark:border-white translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" 
              />
              <img
                src={heroImg}
                alt={personalInfo.name}
                className="relative w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-3xl border-4 border-neo-black dark:border-white shadow-[0_0_0_#221C1B] z-10 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-center md:text-left order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-neo-black dark:text-dark-text mb-6 tracking-tighter uppercase leading-none transition-colors duration-300 hover:text-dusty-rose dark:hover:text-peach cursor-default"
            >
              {personalInfo.about.heroTitle[lang]}
            </motion.h1>
            
            <motion.div variants={itemVariants} className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-peach translate-x-2 translate-y-2 border-2 border-neo-black dark:border-white -z-10" />
              <div className="bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white p-6 rounded-xl">
                <p className="text-neo-black dark:text-dark-text font-medium leading-relaxed text-base md:text-lg">
                  {personalInfo.about.heroDesc[lang]}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dusty-rose text-neo-black font-semibold uppercase tracking-widest border-4 border-neo-black dark:border-white shadow-[6px_6px_0_#221C1B] dark:shadow-[6px_6px_0_#FFF6EE] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#221C1B] dark:hover:shadow-[4px_4px_0_#FFF6EE] hover:bg-peach active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all"
              >
                <HiOutlineMail className="text-2xl" />
                {lang === "id" ? "Hubungi" : "Contact"}
              </Link>
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-card-white dark:bg-dark-card text-neo-black dark:text-dark-text font-semibold uppercase tracking-widest border-4 border-neo-black dark:border-white shadow-[6px_6px_0_#221C1B] dark:shadow-[6px_6px_0_#FBB5B1] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#221C1B] dark:hover:shadow-[4px_4px_0_#FBB5B1] hover:bg-peach dark:hover:bg-neo-black active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all"
              >
                <HiOutlineDownload className="text-2xl" />
                {lang === "id" ? "Unduh CV" : "Download CV"}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-card-white dark:bg-dark-card border-t-4 border-neo-black dark:border-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="inline-block text-3xl md:text-4xl font-semibold text-neo-black dark:text-dark-text uppercase mb-8 relative">
              <span className="relative z-10 transition-colors duration-300 hover:text-peach cursor-default">
                {lang === "id" ? "Tentang Saya" : "About Me"}
              </span>
              <div className="absolute bottom-1 left-0 w-full h-4 bg-dusty-rose -z-10" />
            </h2>
            
            <div className="space-y-6 text-neo-black dark:text-dark-text font-medium text-base md:text-lg text-justify md:text-left leading-relaxed">
              <p className="bg-cream dark:bg-dark-bg p-6 border-2 border-neo-black dark:border-white shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FBB5B1]">
                {personalInfo.about.aboutDesc1[lang]}
              </p>
              <p 
                className="bg-cream dark:bg-dark-bg p-6 border-2 border-neo-black dark:border-white shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FBB5B1]"
                dangerouslySetInnerHTML={{ __html: personalInfo.about.aboutDesc2[lang] }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;