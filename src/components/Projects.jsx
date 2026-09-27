import React from "react";
import { ExternalLink, Code, Video, Image as ImageIcon } from "lucide-react";

export default function Projects({ lang = "EN" }) {
  const content = {
    EN: {
      title: "FEATURED PROJECTS",
      subtitle: "// SOFTWARE DEVELOPMENT & AUDIO-VISUAL SOLUTIONS",
      webTitle: "WEB APPLICATION PROJECTS",
      avTitle: "AUDIO-VISUAL & SYSTEMS ENGINEERING",
      webProjects: [
        {
          title: "Thais Help Thais Plus Calculate Helper",
          description:
            "Web application for help user to make calculate of Thai Government project-Thais Help Thai Plus 60/40",
          tags: ["React", "Tailwind CSS", "Vercel", "State Management"],
          liveUrl: "https://thtpfrontend.vercel.app/",
        },
        {
          title: "Full-Stack E-Commerce Platform",
          description:
            "A responsive web application project featuring product browsing, state management, and modern UI flows.",
          tags: ["React", "Tailwind CSS", "Vercel", "State Management"],
          liveUrl: "https://group5-ecommerce-frontend-sprint2.vercel.app/",
        },
        {
          title: "SPX Transport Logistics Hub",
          description:
            "Internal portal and operational workspace interface tracking logistics pipelines and transportation data workflows.",
          tags: [
            "System Workspace",
            "Operations",
            "Data Hub",
            "Logistics Tool",
          ],
          liveUrl: "https://sites.google.com/view/spxtransport/home",
        },
      ],
      avProjects: [
        {
          title: "Touring / Concert Production",
          type: "video",
          url: "https://res.cloudinary.com/de0vx5pt4/video/upload/v1782277956/penquinVilla_k8m6kn.mov",
          tags: ["Live Sound", "FOH", "Stage Monitor", "Lighting & Visuals"],
        },
        {
          title: "System Integration & Permanent Installation",
          type: "image",
          url: "https://res.cloudinary.com/de0vx5pt4/image/upload/v1782277743/meetingRoomIO_hkwc9c.jpg",
          tags: ["Analog / Digital", "Dante AV Network", "Staff Training"],
        },
      ],
    },
    TH: {
      title: "ตัวอย่างผลงาน",
      subtitle: "// การพัฒนาซอฟต์แวร์และโซลูชันระบบภาพและเสียง",
      webTitle: "โปรเจกต์เว็บแอปพลิเคชัน",
      avTitle: "โซลูชั่นระบบภาพและเสียง",
      webProjects: [
        {
          title: "Thais Help Thais Plus Calculate Helper",
          description:
            "เว็บแอปพลิเคชันช่วยคำนวณสิทธิและการใช้จ่าย โครงการไทยช่วยไทย พลัส 60/40",
          tags: ["React", "Tailwind CSS", "Vercel", "State Management"],
          liveUrl: "#",
        },
        {
          title: "Full-Stack E-Commerce Platform",
          description:
            "เว็บแอปพลิเคชันระบบร้านค้าออนไลน์ รองรับการจัดการสินค้าและส่วนติดต่อผู้ใช้งานที่ทันสมัย",
          tags: ["React", "Tailwind CSS", "Vercel", "State Management"],
          liveUrl: "#",
        },
        {
          title: "SPX Transport Logistics Hub",
          description:
            "ระบบพอร์ทัลภายในและพื้นที่ทำงานสำหรับติดตามกระบวนการโลจิสติกส์และการขนส่ง",
          tags: [
            "G Apps script",
            "System Workspace",
            "Operations",
            "Data Hub",
            "Logistics Tool",
          ],
          liveUrl: "#",
        },
      ],
      avProjects: [
        {
          title: "Touring / Concert Production",
          type: "video",
          url: "https://res.cloudinary.com/de0vx5pt4/video/upload/v1782277956/penquinVilla_k8m6kn.mov",
          tags: ["Live Sound", "FOH", "Stage Monitor", "Lighting & Visuals"],
        },
        {
          title: "System Integration & Permanent Installation",
          type: "image",
          url: "https://res.cloudinary.com/de0vx5pt4/image/upload/v1782277743/meetingRoomIO_hkwc9c.jpg",
          tags: ["Analog / Digital", "Dante AV Network", "Staff Training"],
        },
      ],
    },
  };

  const t = content[lang] || content.EN;

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-wider mb-2">{t.title}</h2>
          <p className="text-xs text-gray-400 tracking-widest">{t.subtitle}</p>
        </div>

        {/* Web Applications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-wider text-gray-400">
            <Code size={18} className="text-blue-400" />
            <span>{t.webTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.webProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-950 text-blue-300 border border-gray-800 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm font-medium text-gray-200 transition-colors"
                  >
                    <ExternalLink size={16} className="text-blue-400" /> View
                    Live App
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audio-Visual & Systems Engineering */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-wider text-gray-400">
            <Video size={18} className="text-blue-400" />
            <span>{t.avTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.avProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/60 border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="w-full bg-gray-950 aspect-video relative flex items-center justify-center overflow-hidden border-b border-gray-800/80">
                  {project.type === "video" ? (
                    <video
                      src={project.url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-100">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-950 text-blue-300 border border-gray-800 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
