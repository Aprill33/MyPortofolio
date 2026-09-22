import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import { ThemeLangProvider } from "./Context/ThemeLangContext";

function App() {
  return (
    <ThemeLangProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-cream text-neo-black dark:bg-dark-bg dark:text-dark-text font-sans selection:bg-dusty-rose/30 selection:text-neo-black dark:selection:text-dark-text transition-colors duration-300 relative overflow-hidden">
          
          {/* Subtle Ambient Soft Glow Orbs */}
          <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-peach/30 dark:bg-dusty-rose/10 blur-[120px] pointer-events-none z-0" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-dusty-rose/20 dark:bg-rose-accent/10 blur-[140px] pointer-events-none z-0" />

          <Header />
          <main className="flex-grow pt-24 z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <About />
                    <Skills />
                  </>
                }
              />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeLangProvider>
  );
}

export default App;
