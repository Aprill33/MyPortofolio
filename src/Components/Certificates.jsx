import { useState, useEffect, useContext } from "react";
import { certificatesData } from "../Data/Data";
import { HiX, HiZoomIn } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Certificates = () => {
  const { lang } = useContext(ThemeLangContext);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-card-white dark:bg-dark-card min-h-[calc(100vh-80px)] border-t-4 border-neo-black dark:border-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block text-3xl md:text-4xl font-semibold text-neo-black dark:text-dark-text uppercase mb-6 relative">
            <span className="relative z-10 transition-colors duration-300 hover:text-dusty-rose cursor-default">
              {certificatesData.title[lang]}
            </span>
            <div className="absolute bottom-1 left-0 w-full h-4 bg-peach -z-10" />
          </h2>
          <p className="mt-4 text-neo-black dark:text-dark-text font-medium text-base md:text-lg max-w-2xl mx-auto bg-cream dark:bg-dark-bg border-2 border-neo-black dark:border-white p-4 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FBB5B1]">
            {certificatesData.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificatesData.list.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, x: -8 }}
              className="group cursor-pointer bg-cream dark:bg-dark-bg rounded-2xl overflow-hidden border-4 border-neo-black dark:border-white shadow-[6px_6px_0_#221C1B] dark:shadow-[6px_6px_0_#FBB5B1] transition-all duration-300"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-card-white/50 border-b-4 border-neo-black dark:border-white p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-neo-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-peach text-neo-black p-4 rounded-full border-4 border-neo-black translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[4px_4px_0_#221C1B]">
                    <HiZoomIn className="text-3xl" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-cream dark:bg-dark-bg">
                <h3 className="font-semibold text-neo-black dark:text-dark-text text-base md:text-lg line-clamp-2 text-center group-hover:text-dusty-rose transition-colors uppercase">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neo-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 bg-dusty-rose text-neo-black border-4 border-neo-black hover:bg-peach transition-colors p-3 rounded-xl shadow-[4px_4px_0_#221C1B] focus:outline-none z-[110]"
              aria-label="Close Modal"
            >
              <HiX size={32} />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="bg-card-white border-8 border-neo-black p-2 shadow-[16px_16px_0_#FBB5B1] rounded-3xl">
                <img
                  src={selectedImage}
                  alt="Certificate Preview"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl border-4 border-neo-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
