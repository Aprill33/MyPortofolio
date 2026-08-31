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
        <div className="flex flex-col min-h-screen bg-cream text-neo-black dark:bg-dark-bg dark:text-dark-text font-sans selection:bg-dusty-rose/40 selection:text-neo-black dark:selection:text-dark-text transition-colors duration-300">
          <Header />
          <main className="flex-grow pt-20">
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
