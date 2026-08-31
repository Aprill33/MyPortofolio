import { useContext } from "react";
import { personalInfo, socialIcons, contactIcons } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";

const Contact = () => {
  const { lang } = useContext(ThemeLangContext);

  const texts = {
    title: { id: "Hubungi Saya", en: "Contact Me" },
    desc: { 
      id: "Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya melalui form di bawah atau via email dan media sosial.", 
      en: "Have questions or want to collaborate? Don't hesitate to contact me via the form below or through email and social media." 
    },
    infoTitle: { id: "Informasi Kontak", en: "Contact Information" },
    socialTitle: { id: "Sosial Media", en: "Social Media" },
    formName: { id: "Nama Lengkap", en: "Full Name" },
    formEmail: { id: "Email", en: "Email" },
    formSubject: { id: "Subjek", en: "Subject" },
    formMsg: { id: "Pesan", en: "Message" },
    btnSubmit: { id: "Kirim Pesan", en: "Send Message" },
    placeholderName: { id: "Masukkan nama Anda", en: "Enter your name" },
    placeholderSubject: { id: "Hal yang ingin didiskusikan", en: "What you want to discuss" },
    placeholderMsg: { id: "Tulis pesan Anda di sini...", en: "Write your message here..." }
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-cream dark:bg-dark-bg min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-t-4 border-neo-black dark:border-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block text-3xl md:text-4xl font-semibold text-neo-black dark:text-dark-text uppercase mb-6 relative">
            <span className="relative z-10 transition-colors duration-300 hover:text-dusty-rose cursor-default">
              {texts.title[lang]}
            </span>
            <div className="absolute bottom-1 left-0 w-full h-4 bg-peach -z-10" />
          </h2>
          <p className="mt-4 text-neo-black dark:text-dark-text font-medium text-base md:text-lg max-w-2xl mx-auto bg-card-white dark:bg-dark-card border-2 border-neo-black dark:border-white p-4 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]">
            {texts.desc[lang]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          >
            <div className="bg-card-white dark:bg-dark-card p-8 rounded-2xl border-4 border-neo-black dark:border-white shadow-[8px_8px_0_#221C1B] dark:shadow-[8px_8px_0_#FBB5B1]">
              <h3 className="text-lg md:text-xl font-semibold text-neo-black dark:text-dark-text mb-6 border-b-4 border-neo-black dark:border-white pb-4 uppercase">
                {texts.infoTitle[lang]}
              </h3>
              
              <div className="flex flex-col gap-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl border-2 border-neo-black dark:border-white bg-peach text-neo-black flex items-center justify-center group-hover:bg-dusty-rose transition-all duration-300 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                    <contactIcons.email className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neo-black/60 dark:text-dark-text/60 mb-1 uppercase">Email</p>
                    <p className="text-sm md:text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl border-2 border-neo-black dark:border-white bg-peach text-neo-black flex items-center justify-center group-hover:bg-dusty-rose transition-all duration-300 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                    <contactIcons.location className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neo-black/60 dark:text-dark-text/60 mb-1 uppercase">
                      {lang === "id" ? "Lokasi" : "Location"}
                    </p>
                    <p className="text-sm md:text-base text-neo-black dark:text-dark-text font-semibold transition-colors group-hover:text-dusty-rose">
                      {personalInfo.location[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-white dark:bg-dark-card p-8 rounded-2xl border-4 border-neo-black dark:border-white shadow-[8px_8px_0_#221C1B] dark:shadow-[8px_8px_0_#FBB5B1]">
              <h3 className="text-lg md:text-xl font-semibold text-neo-black dark:text-dark-text mb-6 border-b-4 border-neo-black dark:border-white pb-4 uppercase">
                {texts.socialTitle[lang]}
              </h3>
              <div className="flex gap-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 rounded-xl bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-neo-black hover:text-white dark:hover:bg-white dark:hover:text-neo-black transition-all duration-300 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  aria-label="GitHub"
                >
                  <socialIcons.github className="text-3xl" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 rounded-xl bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  aria-label="LinkedIn"
                >
                  <socialIcons.linkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form using Formspree */}
          <motion.div 
            className="bg-card-white dark:bg-dark-card p-8 md:p-10 rounded-2xl border-4 border-neo-black dark:border-white shadow-[12px_12px_0_#221C1B] dark:shadow-[12px_12px_0_#FBB5B1]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50, delay: 0.2 }}
          >
            {/* Form action uses Formspree or can use mailto: */}
            {/* If using Formspree, replace "your_form_id" with the actual ID from formspree.io */}
            <form action="https://formspree.io/f/mrbeyvyo" method="POST" className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs md:text-sm font-semibold text-neo-black dark:text-dark-text uppercase">
                    {texts.formName[lang]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={texts.placeholderName[lang]}
                    className="px-5 py-3 md:py-4 bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white rounded-xl focus:outline-none focus:ring-0 focus:border-dusty-rose transition-all font-medium text-neo-black dark:text-dark-text shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs md:text-sm font-semibold text-neo-black dark:text-dark-text uppercase">
                    {texts.formEmail[lang]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    className="px-5 py-3 md:py-4 bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white rounded-xl focus:outline-none focus:ring-0 focus:border-dusty-rose transition-all font-medium text-neo-black dark:text-dark-text shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs md:text-sm font-semibold text-neo-black dark:text-dark-text uppercase">
                  {texts.formSubject[lang]}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder={texts.placeholderSubject[lang]}
                  className="px-5 py-3 md:py-4 bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white rounded-xl focus:outline-none focus:ring-0 focus:border-dusty-rose transition-all font-medium text-neo-black dark:text-dark-text shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs md:text-sm font-semibold text-neo-black dark:text-dark-text uppercase">
                  {texts.formMsg[lang]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={texts.placeholderMsg[lang]}
                  className="px-5 py-3 md:py-4 bg-cream dark:bg-dark-bg border-4 border-neo-black dark:border-white rounded-xl focus:outline-none focus:ring-0 focus:border-dusty-rose transition-all font-medium text-neo-black dark:text-dark-text shadow-[4px_4px_0_#221C1B] dark:shadow-[4px_4px_0_#FFF6EE] resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-4 w-full py-4 md:py-5 bg-dusty-rose text-neo-black font-semibold uppercase text-base md:text-lg border-4 border-neo-black shadow-[6px_6px_0_#221C1B] dark:shadow-[6px_6px_0_#FFF6EE] hover:bg-peach hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#221C1B] dark:hover:shadow-[4px_4px_0_#FFF6EE] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all"
              >
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