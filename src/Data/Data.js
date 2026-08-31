import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaLinkedin,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiDotnet,
    SiMysql,
    SiPostman,
    SiXampp
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { HiCode } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaC } from "react-icons/fa6";

// Certificates
import certC from "../assets/C_sertificate_Aprilliyanti.png";
import certCSharp from "../assets/CSharp_Fundamental_sertificate_Aprilliyanti.png";
import certDS from "../assets/Data_Structure_sertificate_Aprilliyanti.png";
import certDb from "../assets/Database_sertificate_Aprilliyanti.png";
import certGithub from "../assets/GitHub_sertificate_Aprilliyanti.png";
import certWeb from "../assets/WEB_sertificate_Aprilliyanti.png";

// Project Images
import imgProjectC from "../assets/Project_Bahasa_C.jpeg";
import imgProjectHtml from "../assets/ProjectHtml.jpeg";
import imgProjectNetFund from "../assets/Project_.NET_Fundamental.jpeg";
import imgProjectNetLanjut from "../assets/Project_.NET_Lanjutan.jpeg";

export const personalInfo = {
    name: "Aprilliyanti",
    role: "Full-Stack Web Developer",
    github: "https://github.com/Aprill33",
    linkedin: "https://www.linkedin.com/in/aprilliyanti-9912bb426",
    email: "aprillee344@gmail.com",
    location: {
      id: "Bandung, Indonesia",
      en: "Bandung, Indonesia"
    },
    about: {
      heroTitle: {
        id: "Hallo, I'm Aprilliyanti",
        en: "Hello, I'm Aprilliyanti"
      },
      heroDesc: {
        id: "Mahasiswa D3 Manajemen Informatika di Universitas Nasional PASIM Bandung dan penerima Beasiswa Pemberdayaan Umat Berkelanjutan (PUB). Saya memiliki ketertarikan di dunia pemrograman dan senang mengubah ide menjadi solusi melalui teknologi. Dengan semangat belajar dan kemauan untuk terus berkembang, saya siap mengasah kemampuan, berkolaborasi dalam tim, dan berkontribusi dalam menciptakan solusi digital yang bermanfaat.",
        en: "D3 Informatics Management student at PASIM National University Bandung and recipient of the Continuous Ummah Empowerment (PUB) Scholarship. I have a strong interest in programming and enjoy turning ideas into solutions through technology. With an eagerness to learn and a will to keep growing, I am ready to hone my skills, collaborate in teams, and contribute to creating meaningful digital solutions."
      },
      aboutDesc1: {
        id: "Hi! Saya Aprilliyanti, seorang mahasiswa D3 Manajemen Informatika di Universitas Nasional PASIM Bandung, Jurusan Ilmu Komputer, serta penerima Beasiswa Pemberdayaan Umat Berkelanjutan (PUB). Melalui program beasiswa ini, saya mendapatkan kesempatan untuk mengikuti berbagai pelatihan intensif di bidang pemrograman yang membantu saya mengembangkan keterampilan dan mempersiapkan diri untuk terjun ke dunia industri IT.",
        en: "Hi! I am Aprilliyanti, a D3 Informatics Management student majoring in Computer Science at PASIM National University Bandung, and a recipient of the Continuous Ummah Empowerment (PUB) Scholarship. Through this scholarship program, I had the opportunity to participate in various intensive programming pieces of training that helped me develop my skills and prepare for the IT industry."
      },
      aboutDesc2: {
        id: "Memiliki kemampuan dalam <span class='text-dusty-rose'>C#, ASP.NET Web Application (.NET Framework), JavaScript, C, SQL, React, HTML, CSS, dan Tailwind CSS</span>, serta terbiasa menggunakan <span class='text-dusty-rose'>MySQL dan SQL Server</span> dalam pengelolaan database. Saya memiliki ketertarikan untuk terus mengeksplorasi teknologi baru, cepat mempelajari hal baru, mampu bekerja sama dalam tim, serta memiliki semangat untuk terus mengembangkan kemampuan melalui berbagai project dan pengalaman.",
        en: "Skilled in <span class='text-dusty-rose'>C#, ASP.NET Web Application (.NET Framework), JavaScript, C, SQL, React, HTML, CSS, and Tailwind CSS</span>, and accustomed to using <span class='text-dusty-rose'>MySQL and SQL Server</span> for database management. I am passionate about exploring new technologies, a fast learner, a great team player, and highly motivated to continuously improve my abilities through various projects and experiences."
      }
    }
};

export const skillsData = {
  title: { id: "Keahlian & Teknologi", en: "Skills & Technologies" },
  subtitle: { 
    id: "Teknologi yang saya gunakan untuk membangun solusi digital dari antarmuka interaktif hingga arsitektur backend yang kokoh.",
    en: "Technologies I use to build digital solutions, from interactive interfaces to robust backend architectures."
  },
  list: [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: FaReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "C#", icon: TbBrandCSharp },
            { name: ".NET", icon: SiDotnet },
            { name: "C Language", icon: FaC },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "SQL Server", icon: FaDatabase },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Visual Studio", icon: DiVisualstudio },
            { name: "Visual Studio Code", icon: VscVscode },
            { name: "SSMS", icon: FaDatabase },
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Postman", icon: SiPostman },
            { name: "XAMPP", icon: SiXampp },
        ],
    },
  ]
};

export const certificatesData = {
  title: { id: "Sertifikasi & Lisensi", en: "Certifications & Licenses" },
  subtitle: {
    id: "Kumpulan sertifikat dari pelatihan dan kursus yang telah saya selesaikan untuk meningkatkan keterampilan dan pemahaman teknis.",
    en: "A collection of certificates from training and courses I have completed to improve my technical skills and understanding."
  },
  list: [
    { title: "C Programming Certificate", image: certC },
    { title: "C# Fundamental Certificate", image: certCSharp },
    { title: "Data Structure Certificate", image: certDS },
    { title: "Database Certificate", image: certDb },
    { title: "GitHub Certificate", image: certGithub },
    { title: "Web (HTML) Training Certificate", image: certWeb },
  ]
};

export const projectsData = {
  title: { id: "Portofolio Proyek", en: "Projects Portfolio" },
  subtitle: {
    id: "Beberapa karya dan proyek pengembangan yang pernah saya kerjakan, mencakup aplikasi desktop, web, hingga integrasi API.",
    en: "Several development works and projects I have worked on, including desktop applications, web, and API integration."
  },
  list: [
    {
        title: "Sistem Informasi Klinik Gigi (Console App)",
        description: {
          id: "Aplikasi manajemen data pasien dan layanan klinik gigi berbasis logika pemrograman C.",
          en: "Dental clinic patient and service management application based on C programming logic."
        },
        tech: [
            { name: "C Language", icon: FaC },
            { name: "Data Structure", icon: FaDatabase },
        ],
        image: imgProjectC,
        github: "https://github.com/Aprill33/Project-BahasaC-KlinikGigi.git",
        demo: "#",
    },
    {
        title: "E-Commerce Penjualan Make Up",
        description: {
          id: "Website e-commerce katalog dan belanja produk kecantikan/make-up dengan antarmuka responsif dan interaktif.",
          en: "E-commerce catalog and shopping website for beauty/make-up products with a responsive and interactive interface."
        },
        tech: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: SiJavascript },
        ],
        image: imgProjectHtml,
        github: "https://github.com/Aprill33/ProjectHtml-ECommerce.git",
        demo: "https://ecommerce-dashboard-demo.vercel.app",
    },
    {
        title: "Sistem Informasi Laundry",
        description: {
          id: "Aplikasi desktop manajemen operasional laundry, pencatatan transaksi, dan status cucian secara terstruktur.",
          en: "Desktop application for structured laundry operational management, transaction recording, and laundry status."
        },
        tech: [
            { name: "C#", icon: TbBrandCSharp },
            { name: ".NET Framework", icon: SiDotnet },
        ],
        image: imgProjectNetFund,
        github: "https://github.com/Aprill33/SistemLaundry.git",
        demo: "#",
    },
    {
        title: "Web API Klinik Gigi (ASP.NET Web API)",
        description: {
          id: "Layanan back-end Web API terintegrasi untuk sistem manajemen klinik gigi dengan pengolahan database relasional.",
          en: "Integrated backend Web API service for dental clinic management system with relational database processing."
        },
        tech: [
            { name: "C#", icon: TbBrandCSharp },
            { name: "ASP.NET Web API", icon: SiDotnet },
            { name: "Database", icon: FaDatabase },
        ],
        image: imgProjectNetLanjut,
        github: "https://github.com/Aprill33/Project_.NET_Lanjutan_KlinikGigi.git",
        demo: "#",
    },
  ]
};

export const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: MdEmail,
};

export const contactIcons = {
    email: MdEmail,
    location: MdLocationOn,
};

export { FaDatabase };