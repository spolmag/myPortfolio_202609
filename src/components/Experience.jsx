import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience({ lang = "EN" }) {
  const content = {
    EN: {
      expTitle: "Working Experience",
      eduTitle: "Educations",
      skillsTitle: "Other Skills",
      independentRole: "FREELANCE PROFESSIONAL",
      yamahaRole: "CAREER TENURE PROGRESSION",
      experiences: [
        {
          period: "2024 - Now",
          company: "Independent Practice",
          role: "FREELANCE PROFESSIONAL",
          details: [
            "Freelance DEV",
            "Freelance technician",
            "Audio-Visual System",
            "Organization Management",
          ],
        },
        {
          period: "1992 - 2023",
          company: "Siam Music Yamaha Co., Ltd.",
          role: "CAREER TENURE PROGRESSION",
          details: [
            "2018 - 2023: After Sales & Services Manager",
            "2000 - 2017: Sales & Marketing Manager",
            "1995 - 2000: Sales Manager",
            "1992 - 1995: Sales Representative",
          ],
        },
      ],
      education: [
        {
          degree: "Bachelor Degree: Political Science",
          institution: "Ramkhamhaeng University",
        },
        {
          degree: "Secondary School",
          institution: "Yupparaj College, Chiangmai",
        },
      ],
      otherSkills: ["English Speak-Read-Write", "Driving Licence"],
    },
    TH: {
      expTitle: "ประสบการณ์การทำงาน",
      eduTitle: "การศึกษา",
      skillsTitle: "ทักษะอื่นๆ",
      experiences: [
        {
          period: "2024 - ปัจจุบัน",
          company: "อิสระ / ฟรีแลนซ์",
          role: "FREELANCE PROFESSIONAL",
          details: [
            "นักพัฒนาซอฟต์แวร์",
            "ช่างเทคนิคอิสระ",
            "ระบบภาพและเสียง",
            "บริหารและจัดการองค์กร",
          ],
        },
        {
          period: "1992 - 2023",
          company: "บริษัท สยามดนตรียามาฮ่า จำกัด",
          role: "CAREER TENURE PROGRESSION",
          details: [
            "2018 - 2023: ผู้จัดการฝ่ายบริการหลังการขาย",
            "2000 - 2017: ผู้จัดการฝ่ายขายและการตลาด",
            "1995 - 2000: ผู้จัดการฝ่ายขาย",
            "1992 - 1995: พนักงานขาย",
          ],
        },
      ],
      education: [
        {
          degree: "ปริญญาตรี: รัฐศาสตรบัณฑิต",
          institution: "มหาวิทยาลัยรามคำแหง",
        },
        {
          degree: "มัธยมศึกษา",
          institution: "โรงเรียนยุพราชวิทยาลัย จังหวัดเชียงใหม่",
        },
      ],
      otherSkills: ["ภาษาอังกฤษ (พูด อ่าน เขียน)", "ใบขับขี่"],
    },
  };

  const t = content[lang] || content.EN;

  return (
    <section id="experience" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Working Experience (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-gray-900/60 border border-gray-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold">{t.expTitle}</h2>
            </div>

            <div className="space-y-10 relative border-l border-gray-800 ml-3 pl-6">
              {t.experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-blue-500"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-950 text-blue-300 w-fit mb-2 sm:mb-0">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-gray-100">
                      {exp.company}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 tracking-wider font-semibold mb-4">
                    {exp.role}
                  </p>

                  <div className="bg-gray-950/60 border border-gray-800/60 rounded-xl p-4 space-y-2">
                    {exp.details.map((item, i) => (
                      <div
                        key={i}
                        className="text-sm text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Other Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-400" size={24} />
                <h2 className="text-xl font-bold">{t.eduTitle}</h2>
              </div>

              <div className="space-y-6">
                {t.education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-500/40 pl-4 py-1"
                  >
                    <h3 className="font-semibold text-gray-200 text-sm mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-gray-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-400" size={24} />
                <h2 className="text-xl font-bold">{t.skillsTitle}</h2>
              </div>

              <div className="space-y-3">
                {t.otherSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-950/60 border border-gray-800/60 rounded-xl p-3 text-sm text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
