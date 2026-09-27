import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar({ lang, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navContent = {
    EN: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    TH: {
      home: "หน้าแรก",
      experience: "ประสบการณ์",
      projects: "ผลงาน",
      contact: "ติดต่อ",
    },
  };

  const t = navContent[lang] || navContent.EN;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-wider text-white">
          SUTTIPONG<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-blue-400 transition-colors">
            {t.home}
          </a>
          <a
            href="#experience"
            className="hover:text-blue-400 transition-colors"
          >
            {t.experience}
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            {t.projects}
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            {t.contact}
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <Globe size={14} className="text-blue-400" />
            {lang}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300"
          >
            <Globe size={13} className="text-blue-400" />
            {lang}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            {t.home}
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            {t.experience}
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            {t.projects}
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            {t.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
