import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "TH" : "EN"));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />

      <main>
        <Home lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="py-6 text-center text-xs text-gray-500 bg-gray-950 border-t border-gray-900">
        <p>
          © {new Date().getFullYear()} Suttipong Polmag. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
