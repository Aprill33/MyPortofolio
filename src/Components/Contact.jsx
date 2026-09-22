import { useContext } from "react";
import { personalInfo, socialIcons, contactIcons } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { HiPaperAirplane } from "react-icons/hi";

const Contact = () => {
  const { lang } = useContext(ThemeLangContext);

  const texts = {
    title: { id: "Hubungi Saya", en: "Contact Me" },
    desc: { 
      id: "Ingin mendiskusikan peluang kerja, proyek, atau kolaborasi? Silakan kirim pesan melalui form di bawah atau via media sosial.", 
      en: "Interested in discussing job opportunities, projects, or collaboration? Send me a message via the form below or social media." 
    },
    infoTitle: { id: "Informasi Kontak", en: "Contact Information" },
    socialTitle: { id: "Sosial Media", en: "Social Media" },
    formName: { id: "Nama Lengkap", en: "Full Name" },
    formEmail: { id: "Email", en: "Email" },
    formSubject: { id: "Subjek", en: "Subject" },
    formMsg: { id: "Pesan", en: "Message" },
    btnSubmit: { id: "Kirim Pesan", en: "Send Message" },
    placeholderName: { id: "Masukkan nama Anda", en: "Enter your name" },
    placeholderSubject: { id: "Tuliskan subjek pesan", en: "Enter subject" },
    placeholderMsg: { id: "Tuliskan pesan Anda di sini...", en: "Write your message here..." }
  };

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-semibold uppercase tracking-wider mb-3">
            {lang === "id" ? "Kontak" : "Get In Touch"}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neo-black dark:text-dark-text mb-4">
            {texts.title[lang]}
          </h1>
          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {texts.desc[lang]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Contact Info Sidebar */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/70 dark:bg-dark-card/70 p-8 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md">
              <h3 className="text-xl font-bold text-neo-black dark:text-dark-text mb-6 pb-4 border-b border-peach/30 dark:border-white/10">
                {texts.infoTitle[lang]}
              </h3>
              
              <div className="flex flex-col gap-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <contactIcons.email />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neo-black/50 dark:text-dark-text/50 uppercase">Email</p>
                    <p className="text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-peach text-white flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <contactIcons.location />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neo-black/50 dark:text-dark-text/50 uppercase">
                      {lang === "id" ? "Lokasi" : "Location"}
                    </p>
                    <p className="text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.location[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-dark-card/70 p-8 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md">
              <h3 className="text-xl font-bold text-neo-black dark:text-dark-text mb-6 pb-4 border-b border-peach/30 dark:border-white/10">
                {texts.socialTitle[lang]}
              </h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-cream dark:bg-dark-bg border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white transition-all duration-300 soft-shadow hover:scale-105"
                  aria-label="GitHub"
                >
                  <socialIcons.github className="text-2xl" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-cream dark:bg-dark-bg border border-peach/40 dark:border-white/10 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-[#0077B5] hover:text-white transition-all duration-300 soft-shadow hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <socialIcons.linkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/70 dark:bg-dark-card/70 p-8 md:p-10 rounded-3xl border border-peach/40 dark:border-white/10 soft-shadow backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form action="https://formspree.io/f/mrbeyvyo" method="POST" className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-neo-black/80 dark:text-dark-text/80 uppercase">
                    {texts.formName[lang]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={texts.placeholderName[lang]}
                    className="px-4 py-3 bg-cream/70 dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 rounded-2xl focus:outline-none focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-medium text-neo-black dark:text-dark-text text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-neo-black/80 dark:text-dark-text/80 uppercase">
                    {texts.formEmail[lang]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    className="px-4 py-3 bg-cream/70 dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 rounded-2xl focus:outline-none focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-medium text-neo-black dark:text-dark-text text-sm"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-neo-black/80 dark:text-dark-text/80 uppercase">
                  {texts.formSubject[lang]}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder={texts.placeholderSubject[lang]}
                  className="px-4 py-3 bg-cream/70 dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 rounded-2xl focus:outline-none focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-medium text-neo-black dark:text-dark-text text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-neo-black/80 dark:text-dark-text/80 uppercase">
                  {texts.formMsg[lang]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={texts.placeholderMsg[lang]}
                  className="px-4 py-3 bg-cream/70 dark:bg-dark-bg/80 border border-peach/40 dark:border-white/10 rounded-2xl focus:outline-none focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-medium text-neo-black dark:text-dark-text text-sm resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="mt-2 w-full py-4 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-semibold rounded-2xl text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <HiPaperAirplane className="text-lg rotate-45" />
                {texts.btnSubmit[lang]}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;