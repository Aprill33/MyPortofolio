import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaLinkedin,
    FaGraduationCap,
    FaUserCheck,
    FaTools,
    FaCode,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiDotnet,
    SiMysql,
    SiPostman,
    SiXampp,
    SiVercel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaC } from "react-icons/fa6";

// Certificate Images
import certC from "../assets/Sertificate/C_sertificate_Aprilliyanti.png";
import certCSharp from "../assets/Sertificate/CSharp_Fundamental_sertificate_Aprilliyanti.png";
import certCSharpLanjutan from "../assets/Sertificate/CSharp_Lanjutan_sertificate_Aprilliyanti.png";
import certDS from "../assets/Sertificate/Data_Structure_sertificate_Aprilliyanti.png";
import certDb from "../assets/Sertificate/Database_sertificate_Aprilliyanti.png";
import certGithub from "../assets/Sertificate/GitHub_sertificate_Aprilliyanti.png";
import certWeb from "../assets/Sertificate/WEB_Sertificate_Aprilliyanti.png";
import certReact from "../assets/Sertificate/React_Sertificate_Aprilliyanti.png";

// Project Covers & Screenshots
// 1. Bloom & Bouquet (React)
import imgBloomCover from "../assets/React_Fundamental/Project_React_Fundamental.png";
import reactBeranda from "../assets/React_Fundamental/Pelanggan/HalamanBeranda_React.png";
import reactBunga from "../assets/React_Fundamental/Pelanggan/HalamanBunga_React.png";
import reactRangkai from "../assets/React_Fundamental/Pelanggan/HalamanRangkaiBunga_React.png";
import reactDetailProduk from "../assets/React_Fundamental/Pelanggan/HalamanDetailProduk_React.png";
import reactKeranjang from "../assets/React_Fundamental/Pelanggan/HalamanKeranjang_React.png";
import reactCheckout from "../assets/React_Fundamental/Pelanggan/HalamanCheckout_React.png";
import reactFavorite from "../assets/React_Fundamental/Pelanggan/HalamanFavorite_React.png";
import reactPesanan from "../assets/React_Fundamental/Pelanggan/HalamanPesanan_React.png";
import reactDetailPesanan from "../assets/React_Fundamental/Pelanggan/HalamanDetailPesanan_React.png";
import reactUlasan from "../assets/React_Fundamental/Pelanggan/HalamanUlasan_React.png";
import reactArtiBunga from "../assets/React_Fundamental/Pelanggan/HalamanArtiBunga_React.png";
import reactLogin from "../assets/React_Fundamental/Pelanggan/HalamanLogin_React.png";
import reactRegistrasi from "../assets/React_Fundamental/Pelanggan/HalamanRegistrasi_React.png";
import reactProfile from "../assets/React_Fundamental/Pelanggan/HalamanProfile_React.png";

import reactAdminBeranda from "../assets/React_Fundamental/Admin/berandaAdmin_React.png";
import reactAdminProduk from "../assets/React_Fundamental/Admin/MenuProdukAdmin_React.png";
import reactAdminTambahBunga from "../assets/React_Fundamental/Admin/MenuTambahBungaAdmin_React.png";
import reactAdminEditBunga from "../assets/React_Fundamental/Admin/MenuEditBungaAdmin_React.png";
import reactAdminRangkai from "../assets/React_Fundamental/Admin/MenuRangkaiBungaAdmin_React.png";
import reactAdminVoucher from "../assets/React_Fundamental/Admin/MenuVoucherAdmin_React.png";
import reactAdminTambahVoucher from "../assets/React_Fundamental/Admin/MenuTambahVoucherAdmin_React.png";
import reactAdminPesanan from "../assets/React_Fundamental/Admin/MenuPesananAdmin_React.png";
import reactAdminProfil from "../assets/React_Fundamental/Admin/MenuProfilAdmin_React.png";

// 2. Web API Klinik Gigi (.NET Lanjutan)
import imgNetLanjutCover from "../assets/CSharp_Lanjutan/Project_.NET_Lanjutan.jpeg";
import apiDashboard from "../assets/CSharp_Lanjutan/HalamanDashboard_Admin.png";
import apiPasien from "../assets/CSharp_Lanjutan/HalamanPasien_Admin.png";
import apiTambahPasien from "../assets/CSharp_Lanjutan/HalamanTambahPasien_Admin.png";
import apiDokter from "../assets/CSharp_Lanjutan/HalamanDokter_Admin.png";
import apiTambahDokter from "../assets/CSharp_Lanjutan/HalamanTambahDokter_Admin.png";
import apiJadwalDokter from "../assets/CSharp_Lanjutan/HalamanJadwalDokter_Admin.png";
import apiJanjiTemu from "../assets/CSharp_Lanjutan/HalamanJanjiTemu_Admin.png";
import apiBuatJanji from "../assets/CSharp_Lanjutan/HalamanBuatJanjiTemu_Admin.png";
import apiAntrian from "../assets/CSharp_Lanjutan/HalamanAntrian_Admin.png";
import apiTreatment from "../assets/CSharp_Lanjutan/HalamanTreatment_Admin.png";
import apiRiwayatMedis from "../assets/CSharp_Lanjutan/HalamanRiwayatMedis_Admin.png";
import apiLaporan from "../assets/CSharp_Lanjutan/HalamanLaporan_Admin.png";
import apiUser from "../assets/CSharp_Lanjutan/HalamanUser_Admin.png";
import apiLoginAdmin from "../assets/CSharp_Lanjutan/HalamanLogin_Admin.png";
import apiLoginPasien from "../assets/CSharp_Lanjutan/HalamanLogin_Pasien.png";
import apiRegistrasiPasien from "../assets/CSharp_Lanjutan/HalamanRegistrasi_Pasien.png";

// 3. Sistem Informasi Laundry (.NET Fundamental)
import imgNetFundCover from "../assets/CSharp_Fundamental/Project_.NET_Fundamental.png";
import lndrAdminBeranda from "../assets/CSharp_Fundamental/Admin/HalamanBerandaAdmin_CSharp_Fundamental.png";
import lndrAdminTransaksi from "../assets/CSharp_Fundamental/Admin/HalamanTransaksiAdmin_CSharp_Fundamental.png";
import lndrAdminDetailTx from "../assets/CSharp_Fundamental/Admin/HalamanDetailTransaksiAdmin_CSharp_Fundamental.png";
import lndrAdminEditTx from "../assets/CSharp_Fundamental/Admin/HalamanEditTransaksiAdmin_CSharp_Fundamental.png";
import lndrAdminLayanan from "../assets/CSharp_Fundamental/Admin/HalamanLayananAdmin_CSharp_Fundamental.png";
import lndrAdminPelanggan from "../assets/CSharp_Fundamental/Admin/HalamanPelangganAdmin_CSharp_Fundamental.png";
import lndrAdminKelola from "../assets/CSharp_Fundamental/Admin/HalamanKelolaAdmin_CSharp_Fundamental.png";
import lndrAdminLogin from "../assets/CSharp_Fundamental/Admin/HalamanLoginAdmin_CSharp_Fundamental.png";

import lndrKasirBeranda from "../assets/CSharp_Fundamental/Kasir/HalamanBerandaKasir_CSharp_Fundamental.png";
import lndrKasirTambahTx from "../assets/CSharp_Fundamental/Kasir/HalamanTambahTransaksiKasir_CSharp_Fundamental.png";
import lndrKasirPembayaran from "../assets/CSharp_Fundamental/Kasir/HalamanPembayaranKasir_CSharpFundamental.png";
import lndrKasirTambahPlg from "../assets/CSharp_Fundamental/Kasir/HalamanTambahPelangganKasir_CSharp_Fundamental.png";
import lndrKasirDaftar from "../assets/CSharp_Fundamental/Kasir/HalamanDaftarKasir_CSharp_Fundamental.png";
import lndrKasirLogin from "../assets/CSharp_Fundamental/Kasir/HalamanLoginKasir_CSharp_Fundamental.png";

// 4. E-Commerce Make Up (HTML)
import imgHtmlCover from "../assets/HTML/ProjectHtml.jpeg";
import htmlProduk from "../assets/HTML/HalamanProduk_HTML.png";
import htmlDetailProduk from "../assets/HTML/HalamanDetailProduk_HTML.png";
import htmlKeranjang from "../assets/HTML/HalamanKeranjang_HTML.png";
import htmlAbout from "../assets/HTML/HalamanAbout_HTML.png";
import htmlProfil from "../assets/HTML/HalamanProfil_HTML.png";
import htmlLogin from "../assets/HTML/HalamanLogin_HTML.png";
import htmlDaftar from "../assets/HTML/HalamanDaftar_HTML.png";

// 5. Console App Klinik Gigi (Bahasa C)
import imgProjectC from "../assets/Bahasa_C/Project_Bahasa_C.jpeg";

export const personalInfo = {
    name: "Aprilliyanti",
    role: "Junior Backend / Fullstack Developer",
    github: "https://github.com/Aprill33",
    linkedin: "https://www.linkedin.com/in/aprilliyanti-9912bb426",
    email: "aprillee344@gmail.com",
    location: {
      id: "Bandung, Indonesia",
      en: "Bandung, Indonesia"
    },
    about: {
      heroTitle: {
        id: "Halo, Saya Aprilliyanti",
        en: "Hello, I'm Aprilliyanti"
      },
      heroDesc: {
        id: "Mahasiswa D3 Manajemen Informatika Universitas Nasional PASIM Bandung, penerima Beasiswa Pemberdayaan Umat Berkelanjutan (PUB), fokus pada .NET dan Full-Stack Web Development. Berpengalaman membangun aplikasi desktop dan web dengan C#, ASP.NET Web API, React.js, serta SQL Server/MySQL. Memahami OOP, RESTful API, Git/GitHub, dan pengembangan antarmuka responsif. Siap berkontribusi di posisi Junior Backend/Fullstack Developer.",
        en: "D3 Informatics Management student at PASIM National University Bandung, recipient of the Continuous Ummah Empowerment (PUB) Scholarship, focusing on .NET and Full-Stack Web Development. Experienced in building desktop and web applications with C#, ASP.NET Web API, React.js, and SQL Server/MySQL. Solid understanding of OOP, RESTful APIs, Git/GitHub, and responsive interface design. Ready to contribute as a Junior Backend/Fullstack Developer."
      },
      aboutDesc1: {
        id: "Saya Aprilliyanti, mahasiswa aktif D3 Manajemen Informatika di Universitas Nasional PASIM Bandung sekaligus penerima Beasiswa Pemberdayaan Umat Berkelanjutan (PUB). Melalui program beasiswa ini, saya telah menjalani pelatihan pemrograman secara intensif dan disiplin dari tingkat dasar hingga lanjutan.",
        en: "I am Aprilliyanti, an active D3 Informatics Management student at PASIM National University Bandung and recipient of the Continuous Ummah Empowerment (PUB) Scholarship. Through this scholarship, I have undergone intensive programming training from fundamentals to advanced concepts."
      },
      aboutDesc2: {
        id: "Fokus keahlian utama saya meliputi <span class='text-dusty-rose font-semibold'>C#, ASP.NET Web API, .NET Framework, React.js, JavaScript, HTML5, CSS3, dan Tailwind CSS</span>, serta manajemen basis data menggunakan <span class='text-dusty-rose font-semibold'>Microsoft SQL Server & MySQL</span>. Memiliki semangat pembelajar yang kuat, kemampuan pemecahan masalah (problem solving), kerja sama tim yang solid, dan siap memberikan kontribusi terbaik di lingkungan profesional.",
        en: "My primary tech stack includes <span class='text-dusty-rose font-semibold'>C#, ASP.NET Web API, .NET Framework, React.js, JavaScript, HTML5, CSS3, and Tailwind CSS</span>, alongside database management using <span class='text-dusty-rose font-semibold'>Microsoft SQL Server & MySQL</span>. Driven by strong learning enthusiasm, problem-solving mindset, and teamwork skills to deliver high-quality software solutions."
      }
    }
};

export const educationData = {
  title: { id: "Pendidikan Formal", en: "Formal Education" },
  list: [
    {
      degree: {
        id: "D3 Manajemen Informatika",
        en: "Associate Degree (D3) in Informatics Management"
      },
      institution: "Universitas Nasional PASIM Bandung",
      period: "Sep 2024 - Sekarang",
      gpa: "IPK 3.86 / 4.00",
      badge: "Penerima Beasiswa PUB",
      details: {
        id: "Fokus studi pada Pengembangan Web Full-Stack, Pemrograman .NET, Manajemen Basis Data, dan Rekayasa Perangkat Lunak.",
        en: "Focused on Full-Stack Web Development, .NET Programming, Database Management, and Software Engineering."
      },
      icon: FaGraduationCap
    },
    {
      degree: {
        id: "SMA Negeri 1 Kedokanbunder",
        en: "Senior High School 1 Kedokanbunder"
      },
      institution: "Jurusan MIPA (IPA)",
      period: "Jul 2020 - Mei 2023",
      gpa: "Nilai Akhir Rata-rata 88.95",
      badge: "Lulusan IPA",
      details: {
        id: "Memiliki pemahaman mendalam dalam logika matematika, komputasi sains, dan analitis.",
        en: "Strong background in mathematical logic, computer science fundamentals, and analytics."
      },
      icon: FaGraduationCap
    }
  ]
};

export const nonFormalEducationData = {
  title: { id: "Pendidikan Nonformal & Pelatihan", en: "Non-Formal Education & Training" },
  subtitle: {
    id: "Program pelatihan intensif oleh Beasiswa Pemberdayaan Umat Berkelanjutan (PUB) — Universitas Nasional PASIM Bandung (2024-2026)",
    en: "Intensive training program by Continuous Ummah Empowerment (PUB) Scholarship — PASIM National University Bandung (2024-2026)"
  },
  list: [
    {
      title: "Pelatihan Dasar React (React Fundamental)",
      period: "Jul - Sep 2026",
      cert: certReact,
      desc: {
        id: "Menguasai React v19, Functional Components, Hooks, Context API, Router DOM, State Management, dan SPA Deployment.",
        en: "Mastered React v19, Functional Components, Hooks, Context API, Router DOM, State Management, and SPA Deployment."
      }
    },
    {
      title: "Pelatihan Pemrograman C# Lanjutan (.NET Web API)",
      period: "Feb - Jun 2026",
      cert: certCSharpLanjutan,
      desc: {
        id: "Merancang RESTful Web API dengan ASP.NET, C#, Entity/Relational Database Architecture, dan Postman Testing.",
        en: "Designing RESTful Web APIs using ASP.NET, C#, Relational Database Architecture, and Postman testing."
      }
    },
    {
      title: "Pelatihan Git & GitHub",
      period: "Jan - Feb 2026",
      cert: certGithub,
      desc: {
        id: "Manajemen versi kode (Version Control), branching strategy, pull requests, kolaborasi tim, dan CI/CD dasar.",
        en: "Version control management, branching strategies, pull requests, team collaboration, and basic CI/CD."
      }
    },
    {
      title: "Pelatihan Dasar Pemrograman C# (.NET Framework)",
      period: "Agu 2025 - Jan 2026",
      cert: certCSharp,
      desc: {
        id: "Penerapan konsep OOP (Object Oriented Programming), GUI Desktop App, WinForms, dan CRUD Database.",
        en: "Applied OOP concepts, Desktop GUI development, WinForms, and database CRUD operations."
      }
    },
    {
      title: "Pelatihan Pengembangan Web (HTML, CSS & JavaScript)",
      period: "Jun - Agu 2025",
      cert: certWeb,
      desc: {
        id: "Pengembangan antarmuka web responsif, manipulasi DOM, layouting modern CSS flexbox/grid, dan logika JavaScript.",
        en: "Responsive web interface development, DOM manipulation, modern CSS flexbox/grid layouting, and JavaScript logic."
      }
    },
    {
      title: "Pelatihan Struktur Data & Sistem Basis Data",
      period: "Jan - Jun 2025",
      cert: certDS,
      cert2: certDb,
      desc: {
        id: "Struktur data efisien (Array, Linked List, Queue, Stack) serta perancangan database relasional SQL Server & MySQL.",
        en: "Efficient data structures (Arrays, Linked Lists, Queues, Stacks) and relational database design for SQL Server & MySQL."
      }
    },
    {
      title: "Pelatihan Logika & Algoritma Pemrograman C",
      period: "Sep 2024 - Jan 2025",
      cert: certC,
      desc: {
        id: "Dasar pemikiran komputasional, pointer, alokasi memori, struktur kontrol, dan pemecahan masalah berbasis C.",
        en: "Fundamentals of computational thinking, pointers, memory allocation, control structures, and C programming."
      }
    }
  ]
};

export const skillsData = {
  title: { id: "Keahlian & Spesialisasi", en: "Skills & Specialization" },
  subtitle: { 
    id: "Kombinasi Hard Skills teknis, Software Tools pengembang, dan Soft Skills profesional.",
    en: "A comprehensive blend of technical Hard Skills, Software Tools, and professional Soft Skills."
  },
  list: [
    {
      category: "Hard Skills",
      icon: FaCode,
      items: [
        { name: "C#", icon: TbBrandCSharp },
        { name: ".NET Framework", icon: SiDotnet },
        { name: "ASP.NET Web API", icon: SiDotnet },
        { name: "RESTful API", icon: SiDotnet },
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "SQL Server", icon: FaDatabase },
        { name: "MySQL", icon: SiMysql },
        { name: "OOP", icon: FaCode },
        { name: "Struktur Data", icon: FaDatabase },
      ],
    },
    {
      category: "Software & Tools",
      icon: FaTools,
      items: [
        { name: "Visual Studio", icon: DiVisualstudio },
        { name: "VS Code", icon: VscVscode },
        { name: "SSMS", icon: FaDatabase },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "XAMPP", icon: SiXampp },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      category: "Soft Skills",
      icon: FaUserCheck,
      items: [
        { name: "Komunikasi", icon: FaUserCheck },
        { name: "Kerja Sama Tim", icon: FaUserCheck },
        { name: "Problem Solving", icon: FaUserCheck },
        { name: "Adaptif", icon: FaUserCheck },
        { name: "Manajemen Waktu", icon: FaUserCheck },
        { name: "Motivasi Diri", icon: FaUserCheck },
      ],
    },
  ]
};

export const certificatesData = {
  title: { id: "Sertifikasi & Lisensi", en: "Certifications & Licenses" },
  subtitle: {
    id: "Sertifikat resmi hasil pelatihan intensif PUB Universitas Nasional PASIM Bandung (2024 - 2026).",
    en: "Official certificates from intensive training programs at PUB PASIM National University (2024 - 2026)."
  },
  list: [
    { 
      title: "Pelatihan Dasar React (React Fundamental)", 
      category: "Web & React", 
      period: "Jul - Sep 2026",
      issuer: "PUB PASIM Bandung",
      image: certReact 
    },
    { 
      title: "Pelatihan Pemrograman C# Lanjutan (.NET Web API)", 
      category: "Backend & .NET", 
      period: "Feb - Jun 2026",
      issuer: "PUB PASIM Bandung",
      image: certCSharpLanjutan 
    },
    { 
      title: "Pelatihan Git & GitHub", 
      category: "Tools & Git", 
      period: "Jan - Feb 2026",
      issuer: "PUB PASIM Bandung",
      image: certGithub 
    },
    { 
      title: "Pelatihan Dasar Pemrograman C# (.NET Framework)", 
      category: "Backend & .NET", 
      period: "Agu 2025 - Jan 2026",
      issuer: "PUB PASIM Bandung",
      image: certCSharp 
    },
    { 
      title: "Pelatihan Pengembangan Web (HTML, CSS & JS)", 
      category: "Web & React", 
      period: "Jun - Agu 2025",
      issuer: "PUB PASIM Bandung",
      image: certWeb 
    },
    { 
      title: "Pelatihan Sistem Basis Data (Database SQL)", 
      category: "Database", 
      period: "Jan - Jun 2025",
      issuer: "PUB PASIM Bandung",
      image: certDb 
    },
    { 
      title: "Pelatihan Struktur Data", 
      category: "Database", 
      period: "Jan - Jun 2025",
      issuer: "PUB PASIM Bandung",
      image: certDS 
    },
    { 
      title: "Pelatihan Logika & Algoritma Pemrograman C", 
      category: "Fundamental", 
      period: "Sep 2024 - Jan 2025",
      issuer: "PUB PASIM Bandung",
      image: certC 
    },
  ]
};

export const projectsData = {
  title: { id: "Portofolio Proyek", en: "Projects Portfolio" },
  subtitle: {
    id: "Proyek pengembangan aplikasi desktop, REST API, dan Full-Stack Web yang pernah saya bangun.",
    en: "Desktop applications, REST API backend services, and Full-Stack web projects I have engineered."
  },
  list: [
    {
      id: "bloom-bouquet",
      title: "Bloom & Bouquet — Web E-Commerce Toko Bunga & Buket Kustom",
      period: "1 Sep – 10 Sep 2026",
      featured: true,
      description: {
        id: "Aplikasi e-commerce florist komprehensif dengan katalog bunga interaktif, keranjang belanja, checkout, sistem voucher discount, wishlist, riwayat pesanan, serta Dashboard Admin pengelola stok & pesanan.\n\nMemiliki fitur andalan Custom Bouquet Builder dengan kalkulasi harga otomatis secara real-time, autentikasi user, ProtectedRoute, dan deployment SPA di Vercel.",
        en: "Comprehensive florist e-commerce application featuring interactive flower catalog, cart, checkout, voucher system, wishlist, order history, and Admin Management Dashboard.\n\nHighlights include Custom Bouquet Builder with real-time price calculation, user authentication, ProtectedRoute, and SPA deployment on Vercel."
      },
      highlights: [
        "Fitur Custom Bouquet Builder dengan harga terhitung otomatis",
        "Autentikasi User & Multi-role Access Control (Admin & Pelanggan)",
        "Katalog, Keranjang, Checkout, Voucher, Wishlist, dan History Pesanan",
        "Dashboard Admin lengkap: CRUD Bunga, Voucher, Pesanan, dan Profil"
      ],
      tech: [
        { name: "React v19", icon: FaReact },
        { name: "Vite", icon: FaCode },
        { name: "React Router DOM", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Context API", icon: FaReact },
        { name: "Vercel", icon: SiVercel },
      ],
      coverImage: imgBloomCover,
      screenshots: [
        { title: "Halaman Beranda Pelanggan", src: reactBeranda, category: "Pelanggan" },
        { title: "Katalog Bunga", src: reactBunga, category: "Pelanggan" },
        { title: "Custom Bouquet Builder", src: reactRangkai, category: "Pelanggan" },
        { title: "Detail Produk Bunga", src: reactDetailProduk, category: "Pelanggan" },
        { title: "Keranjang Belanja", src: reactKeranjang, category: "Pelanggan" },
        { title: "Proses Checkout", src: reactCheckout, category: "Pelanggan" },
        { title: "Produk Favorit", src: reactFavorite, category: "Pelanggan" },
        { title: "Riwayat Pesanan", src: reactPesanan, category: "Pelanggan" },
        { title: "Detail Pesanan", src: reactDetailPesanan, category: "Pelanggan" },
        { title: "Ulasan Produk", src: reactUlasan, category: "Pelanggan" },
        { title: "Kamus Arti Bunga", src: reactArtiBunga, category: "Pelanggan" },
        { title: "Halaman Login", src: reactLogin, category: "Pelanggan" },
        { title: "Halaman Registrasi", src: reactRegistrasi, category: "Pelanggan" },
        { title: "Profil Pengguna", src: reactProfile, category: "Pelanggan" },
        { title: "Dashboard Admin", src: reactAdminBeranda, category: "Admin" },
        { title: "Kelola Produk Bunga (Admin)", src: reactAdminProduk, category: "Admin" },
        { title: "Form Tambah Bunga", src: reactAdminTambahBunga, category: "Admin" },
        { title: "Form Edit Bunga", src: reactAdminEditBunga, category: "Admin" },
        { title: "Kelola Rangkaian Bunga", src: reactAdminRangkai, category: "Admin" },
        { title: "Kelola Voucher Diskon", src: reactAdminVoucher, category: "Admin" },
        { title: "Form Tambah Voucher", src: reactAdminTambahVoucher, category: "Admin" },
        { title: "Kelola Pesanan (Admin)", src: reactAdminPesanan, category: "Admin" },
        { title: "Profil Admin", src: reactAdminProfil, category: "Admin" },
      ],
      github: "https://github.com/Aprill33",
      demo: "https://bloom-bouquet.vercel.app",
    },
    {
      id: "web-api-klinik-gigi",
      title: "Web API Klinik Gigi (ASP.NET Web API)",
      period: "17 Jun – 26 Jun 2026",
      featured: true,
      description: {
        id: "Merancang dan membangun RESTful Web API terintegrasi untuk pengelolaan operasional klinik gigi, mencakup data pasien, rekam medis, dokter, jadwal, antrean, transaksi treatment, serta laporan klinik.\n\nDilengkapi skema database Microsoft SQL Server yang dinormalisasi dan pengujian komprehensif seluruh endpoint dengan Postman.",
        en: "Engineered an integrated RESTful Web API for dental clinic operations, including patient management, medical records, doctors, schedules, queues, treatment transactions, and clinic reports.\n\nBuilt on normalized Microsoft SQL Server database schema with end-to-end endpoint testing via Postman."
      },
      highlights: [
        "Arsitektur RESTful Web API berbasis C# dan ASP.NET .NET Framework",
        "Pengelolaan Rekam Medis, Pasien, Dokter, Antrean, dan Treatment",
        "Integrasi Relasional Database MS SQL Server & Stored Procedures",
        "Pengujian komprehensif seluruh endpoint & respon JSON dengan Postman"
      ],
      tech: [
        { name: "C#", icon: TbBrandCSharp },
        { name: "ASP.NET Web API", icon: SiDotnet },
        { name: ".NET Framework", icon: SiDotnet },
        { name: "SQL Server", icon: FaDatabase },
        { name: "Postman", icon: SiPostman },
      ],
      coverImage: imgNetLanjutCover,
      screenshots: [
        { title: "Dashboard Overview Admin", src: apiDashboard },
        { title: "Kelola Data Pasien", src: apiPasien },
        { title: "Form Tambah Pasien Baru", src: apiTambahPasien },
        { title: "Kelola Data Dokter", src: apiDokter },
        { title: "Form Tambah Dokter", src: apiTambahDokter },
        { title: "Jadwal Praktik Dokter", src: apiJadwalDokter },
        { title: "Kelola Janji Temu", src: apiJanjiTemu },
        { title: "Form Buat Janji Temu Pasien", src: apiBuatJanji },
        { title: "Pemantauan Antrean Pasien", src: apiAntrian },
        { title: "Katalog Treatment & Tindakan", src: apiTreatment },
        { title: "Rekam Medis Pasien", src: apiRiwayatMedis },
        { title: "Laporan Pendapatan & Transaksi", src: apiLaporan },
        { title: "Manajemen User & Hak Akses", src: apiUser },
        { title: "Halaman Login Admin", src: apiLoginAdmin },
        { title: "Halaman Login Pasien", src: apiLoginPasien },
        { title: "Registrasi Pasien Baru", src: apiRegistrasiPasien },
      ],
      github: "https://github.com/Aprill33/Project_.NET_Lanjutan_KlinikGigi.git",
      demo: "#",
    },
    {
      id: "sistem-laundry",
      title: "Sistem Informasi Laundry",
      period: "15 Des – 24 Des 2025",
      featured: false,
      description: {
        id: "Aplikasi desktop otomasi operasional jasa laundry untuk mempercepat pencatatan transaksi harian, kalkulasi biaya cuci/setrika otomatis berdasarkan bobot dan paket layanan, serta pemantauan status proses cucian real-time.\n\nDilengkapi dua peran pengguna utama yaitu Admin (Manajemen master data) dan Kasir (Penerimaan cucian & pembayaran).",
        en: "Desktop application automating laundry business operations to accelerate daily transaction recording, automatic cost calculation based on weight/package, and real-time status monitoring.\n\nFeatures dual roles: Admin (Master Data Management) and Cashier (Laundry Order Acceptance & Payment)."
      },
      highlights: [
        "Aplikasi Desktop berbasis C# .NET Framework WinForms",
        "Kalkulasi harga otomatis berdasarkan tipe paket & berat laundry",
        "Multi-role user: Dashboard Admin & Interface Kasir",
        "Pengelolaan Database MySQL / SQL Server terstruktur"
      ],
      tech: [
        { name: "C#", icon: TbBrandCSharp },
        { name: ".NET Framework", icon: SiDotnet },
        { name: "SQL Server / MySQL", icon: FaDatabase },
        { name: "Visual Studio", icon: DiVisualstudio },
      ],
      coverImage: imgNetFundCover,
      screenshots: [
        { title: "Dashboard Admin Laundry", src: lndrAdminBeranda, category: "Admin" },
        { title: "Kelola Transaksi Cucian (Admin)", src: lndrAdminTransaksi, category: "Admin" },
        { title: "Rincian Transaksi Laundry", src: lndrAdminDetailTx, category: "Admin" },
        { title: "Edit Status Transaksi", src: lndrAdminEditTx, category: "Admin" },
        { title: "Master Paket Layanan Laundry", src: lndrAdminLayanan, category: "Admin" },
        { title: "Data Pelanggan (Admin)", src: lndrAdminPelanggan, category: "Admin" },
        { title: "Manajemen Akun User", src: lndrAdminKelola, category: "Admin" },
        { title: "Login Admin", src: lndrAdminLogin, category: "Admin" },
        { title: "Beranda Utama Kasir", src: lndrKasirBeranda, category: "Kasir" },
        { title: "Form Entry Transaksi Kasir", src: lndrKasirTambahTx, category: "Kasir" },
        { title: "Proses Pembayaran Kasir", src: lndrKasirPembayaran, category: "Kasir" },
        { title: "Form Registrasi Pelanggan", src: lndrKasirTambahPlg, category: "Kasir" },
        { title: "Daftar Riwayat Kasir", src: lndrKasirDaftar, category: "Kasir" },
        { title: "Login Kasir", src: lndrKasirLogin, category: "Kasir" },
      ],
      github: "https://github.com/Aprill33/SistemLaundry.git",
      demo: "#",
    },
    {
      id: "ecommerce-makeup",
      title: "E-Commerce Penjualan Make Up",
      period: "27 Jul – 5 Agt 2025",
      featured: false,
      description: {
        id: "Website e-commerce katalog dan penjualan produk kecantikan/make-up berbasis HTML5, CSS3, dan Vanila JavaScript. Dirancang dengan antarmuka yang responsif, estetis, serta memiliki tata letak yang ramah pengguna.\n\nDilengkapi fitur logika keranjang belanja lokal, detail produk, tentang toko, serta halaman autentikasi user.",
        en: "Responsive E-commerce website for cosmetics and make-up products built with HTML5, CSS3, and Vanilla JavaScript. Features dynamic shopping cart logic, product detail views, shop info, and authentication pages."
      },
      highlights: [
        "Antarmuka web interaktif & responsif (Mobile & Desktop)",
        "Logika keranjang belanja (Add to Cart & Total calculation)",
        "Tampilan produk beauty & cosmetics berestetika tinggi",
        "Form Login, Register, dan Informasi Toko"
      ],
      tech: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
      ],
      coverImage: imgHtmlCover,
      screenshots: [
        { title: "Katalog Produk Make Up", src: htmlProduk },
        { title: "Halaman Detail Produk", src: htmlDetailProduk },
        { title: "Keranjang Belanja Produk", src: htmlKeranjang },
        { title: "Halaman Tentan Toko", src: htmlAbout },
        { title: "Profil Pengguna", src: htmlProfil },
        { title: "Form Login User", src: htmlLogin },
        { title: "Form Pendaftaran Akun", src: htmlDaftar },
      ],
      github: "https://github.com/Aprill33/ProjectHtml-ECommerce.git",
      demo: "https://ecommerce-dashboard-demo.vercel.app",
    },
    {
      id: "console-klinik-gigi",
      title: "Sistem Informasi Klinik Gigi (Console App)",
      period: "31 Des 2024 – 9 Jan 2025",
      featured: false,
      description: {
        id: "Proyek akhir Pelatihan Logika & Algoritma Pemrograman C untuk mengelola antrean pasien dan data layanan klinik gigi.\n\nMenerapkan struktur data C seperti Struct, Array of Struct, Pointer, dan Modular Functions untuk simulasi operasional antrean klinik yang efisien.",
        en: "Final capstone project for C Logic & Algorithms Training. Manages patient queue systems and dental service records using C Structs, Array of Structs, Pointers, and Modular Functions."
      },
      highlights: [
        "Algoritma Pemrograman Bahasa C murni & Manajemen Memori",
        "Struktur Data Struct, Array, Pointer, dan Operasi I/O File",
        "Simulasi Antrean Pasien & Rekapitulasi Biaya Layanan Klinik",
        "Proyek Akhir Sertifikasi Logika & Algoritma PUB"
      ],
      tech: [
        { name: "Bahasa C", icon: FaC },
        { name: "Algoritma & Struktur Data", icon: FaDatabase },
      ],
      coverImage: imgProjectC,
      screenshots: [
        { title: "Tampilan Console Application Klinik Gigi C", src: imgProjectC }
      ],
      github: "https://github.com/Aprill33/Project-BahasaC-KlinikGigi.git",
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