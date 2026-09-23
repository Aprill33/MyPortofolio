import { useContext } from "react";
import { personalInfo, socialIcons, contactIcons } from "../Data/Data";
import { motion } from "framer-motion";
import { ThemeLangContext } from "../Context/ThemeLangContext";
import { HiPaperAirplane, HiPhone } from "react-icons/hi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SplitText, SpotlightCard, MagnetButton, ShinyText } from "./ReactBits";

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

  const cleanPhone = personalInfo.phone ? personalInfo.phone.replace(/[^0-9+]/g, '') : "";

  return (
    <section className="py-16 px-6 lg:px-12 relative min-h-[calc(100vh-120px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Header Section with ReactBits */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peach/40 dark:bg-dusty-rose/20 text-dusty-rose text-xs font-bold uppercase tracking-wider border border-dusty-rose/30 shadow-sm">
            <ShinyText text={lang === "id" ? "KONTAK" : "GET IN TOUCH"} speed={3} />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neo-black dark:text-dark-text tracking-tight">
            <span className="text-rose-accent dark:text-dusty-rose text-pink-glow drop-shadow-sm">
              <SplitText text={texts.title[lang]} delay={0.03} />
            </span>
          </h1>

          <p className="text-neo-black/70 dark:text-dark-text/70 text-base md:text-lg leading-relaxed">
            {texts.desc[lang]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-stretch">
          {/* Contact Info & Social Sidebar */}
          <motion.div 
            className="flex flex-col gap-6 h-full justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information Card */}
            <SpotlightCard
              className="p-8 rounded-3xl border border-peach/40 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#251822]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_10px_35px_rgba(232,122,138,0.18)] backdrop-blur-md"
              spotlightColor="rgba(232, 122, 138, 0.35)"
            >
              <h3 className="text-xl font-bold text-neo-black dark:text-dark-text mb-6 pb-4 border-b border-peach/30 dark:border-dusty-rose/20 flex items-center justify-between">
                <span>{texts.infoTitle[lang]}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-dusty-rose animate-pulse" />
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* Email Item */}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-rose-accent text-white flex items-center justify-center text-xl shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] group-hover:scale-110 transition-transform shrink-0">
                    <contactIcons.email />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neo-black/50 dark:text-dark-text/50 uppercase tracking-wider">Email</p>
                    <p className="text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone / WhatsApp Item (Editable in Data.js) */}
                <a 
                  href={`https://wa.me/${cleanPhone.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-rose-accent text-white flex items-center justify-center text-xl shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] group-hover:scale-110 transition-transform shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neo-black/50 dark:text-dark-text/50 uppercase tracking-wider">
                      {lang === "id" ? "Telepon / WhatsApp" : "Phone / WhatsApp"}
                    </p>
                    <p className="text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dusty-rose to-rose-accent text-white flex items-center justify-center text-xl shadow-md dark:shadow-[0_0_15px_rgba(232,122,138,0.4)] group-hover:scale-110 transition-transform shrink-0">
                    <contactIcons.location />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neo-black/50 dark:text-dark-text/50 uppercase tracking-wider">
                      {lang === "id" ? "Lokasi" : "Location"}
                    </p>
                    <p className="text-base text-neo-black dark:text-dark-text font-semibold group-hover:text-dusty-rose transition-colors">
                      {personalInfo.location[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Social Media Card with Magnet Buttons */}
            <SpotlightCard
              className="p-8 rounded-3xl border border-peach/40 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#251822]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_10px_35px_rgba(232,122,138,0.18)] backdrop-blur-md"
              spotlightColor="rgba(232, 122, 138, 0.35)"
            >
              <h3 className="text-xl font-bold text-neo-black dark:text-dark-text mb-6 pb-4 border-b border-peach/30 dark:border-dusty-rose/20">
                {texts.socialTitle[lang]}
              </h3>
              <div className="flex gap-4">
                <MagnetButton
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-cream/80 dark:bg-[#231720]/90 border border-peach/50 dark:border-dusty-rose/30 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-dusty-rose hover:text-white dark:hover:bg-dusty-rose dark:hover:text-white transition-all duration-300 soft-shadow cursor-pointer"
                  ariaLabel="GitHub Profile"
                >
                  <socialIcons.github className="text-2xl" />
                </MagnetButton>

                <MagnetButton
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-cream/80 dark:bg-[#231720]/90 border border-peach/50 dark:border-dusty-rose/30 flex items-center justify-center text-neo-black dark:text-dark-text hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white transition-all duration-300 soft-shadow cursor-pointer"
                  ariaLabel="LinkedIn Profile"
                >
                  <socialIcons.linkedin className="text-2xl" />
                </MagnetButton>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Contact Form with Spotlight Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <SpotlightCard
              className="p-8 md:p-10 rounded-3xl border border-peach/40 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#251822]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_10px_35px_rgba(232,122,138,0.18)] backdrop-blur-md h-full"
              spotlightColor="rgba(232, 122, 138, 0.35)"
            >
              <form action="https://formspree.io/f/mrbeyvyo" method="POST" className="flex flex-col gap-5 h-full justify-between">
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 uppercase tracking-wider">
                        {texts.formName[lang]}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={texts.placeholderName[lang]}
                        className="px-4 py-3 bg-cream/70 dark:bg-[#1E141C] border border-peach/40 dark:border-dusty-rose/30 rounded-2xl focus:outline-none focus:border-dusty-rose dark:focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-semibold text-neo-black dark:text-dark-text text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 uppercase tracking-wider">
                        {texts.formEmail[lang]}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="email@example.com"
                        className="px-4 py-3 bg-cream/70 dark:bg-[#1E141C] border border-peach/40 dark:border-dusty-rose/30 rounded-2xl focus:outline-none focus:border-dusty-rose dark:focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-semibold text-neo-black dark:text-dark-text text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 uppercase tracking-wider">
                      {texts.formSubject[lang]}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder={texts.placeholderSubject[lang]}
                      className="px-4 py-3 bg-cream/70 dark:bg-[#1E141C] border border-peach/40 dark:border-dusty-rose/30 rounded-2xl focus:outline-none focus:border-dusty-rose dark:focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-semibold text-neo-black dark:text-dark-text text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-neo-black/80 dark:text-dark-text/80 uppercase tracking-wider">
                      {texts.formMsg[lang]}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={texts.placeholderMsg[lang]}
                      className="px-4 py-3 bg-cream/70 dark:bg-[#1E141C] border border-peach/40 dark:border-dusty-rose/30 rounded-2xl focus:outline-none focus:border-dusty-rose dark:focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20 transition-all font-semibold text-neo-black dark:text-dark-text text-sm resize-none"
                    ></textarea>
                  </div>
                </div>

                <MagnetButton
                  type="submit"
                  className="mt-4 w-full py-4 bg-gradient-to-r from-dusty-rose to-rose-accent text-white font-bold rounded-2xl text-base shadow-md dark:shadow-[0_0_20px_rgba(232,122,138,0.4)] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <HiPaperAirplane className="text-lg rotate-45" />
                  {texts.btnSubmit[lang]}
                </MagnetButton>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;