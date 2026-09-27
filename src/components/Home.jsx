import React from "react";
import { Code, Globe, MessageCircle } from "lucide-react";

export default function Home({ lang = "EN" }) {
  const content = {
    EN: {
      name: "Suttipong Polmag",
      role: "Software Engineer/Audio-Visual Systems/Orginization Management/MEP",
      about:
        "Experienced in software development, system architecture, audio-visual technologies, organization management.",
    },
    TH: {
      name: "สุทธิพงษ์ ผลมาก",
      role: "จัดการระบบ-ซอฟต์แวร์-บริหารจัดการองค์กร",
      about:
        "พัฒนาซอฟต์แวร์ สถาปัตยกรรมระบบ ระบบภาพและเสียง และการบริหารจัดการองค์กร",
    },
  };

  const t = content[lang] || content.EN;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shrink-0 bg-gray-900">
          <img
            src="https://res.cloudinary.com/de0vx5pt4/image/upload/v1782277860/suttipong_polmag_vsdewj.jpg"
            alt="Suttipong Polmag"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.name}</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
            {t.role}
          </h2>
          <p className="text-gray-400 max-w-xl mb-6 text-base md:text-lg">
            {t.about}
          </p>

          {/* Social Icons Bar */}
          <div className="flex justify-center md:justify-start items-center gap-4 mb-8 text-gray-400">
            <a
              href="https://line.me/ti/p/eyqs6bLYec"
              target="_blank"
              rel="noopener noreferrer"
              title="Line"
              className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-green-400 hover:border-gray-700 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/suttipong-polmag-7898ba2a4/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-blue-400 hover:border-gray-700 transition-colors"
            >
              <Globe size={20} />
            </a>
            <a
              href="https://github.com/spolmag"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:text-white hover:border-gray-700 transition-colors"
            >
              <Code size={20} />
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              {lang === "TH" ? "ดูผลงาน" : "View Projects"}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gray-800 text-gray-200 font-medium hover:bg-gray-700 transition-colors"
            >
              {lang === "TH" ? "ติดต่อฉัน" : "Contact Me"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
