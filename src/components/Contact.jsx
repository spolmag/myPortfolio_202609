import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Globe, Code } from "lucide-react";

export default function Contact({ lang = "EN" }) {
  const content = {
    EN: {
      title: "Get In Touch",
      subtitle: "Feel free to reach out for opportunities or collaborations.",
      email: "spolmag@gmail.com",
      phone: "(+66) 0895181958",
      location: "Bangkok, Thailand",
    },
    TH: {
      title: "ติดต่อฉัน",
      subtitle:
        "สามารถติดต่อเพื่อพูดคุยเรื่องโอกาสในการทำงานหรือความร่วมมือต่างๆ ได้ครับ",
      email: "spolmag@gmail.com",
      phone: "(+66) 0895181958",
      location: "กรุงเทพมหานคร, ประเทศไทย",
    },
  };

  const t = content[lang] || content.EN;

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-gray-400 text-center mb-12">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-xl flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href={`mailto:${t.email}`}
              className="text-gray-300 hover:text-blue-400 text-sm"
            >
              {t.email}
            </a>
          </div>

          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-xl flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <span className="text-gray-300 text-sm">{t.phone}</span>
          </div>

          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-xl flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <span className="text-gray-300 text-sm">{t.location}</span>
          </div>
        </div>

        {/* Social & Messaging Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://line.me/ti/p/eyqs6bLYec"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/80 border border-gray-700/60 p-5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-750 hover:border-blue-500 transition-all text-sm font-medium"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>Line Contact</span>
          </a>

          <a
            href="https://www.linkedin.com/in/suttipong-polmag-7898ba2a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/80 border border-gray-700/60 p-5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-750 hover:border-blue-500 transition-all text-sm font-medium"
          >
            <Globe className="w-5 h-5 text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/spolmag"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/80 border border-gray-700/60 p-5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-750 hover:border-blue-500 transition-all text-sm font-medium"
          >
            <Code className="w-5 h-5 text-gray-200" />
            <span>GitHub Repos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
