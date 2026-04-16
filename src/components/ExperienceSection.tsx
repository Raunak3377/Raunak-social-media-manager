import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Calendar, MapPin } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const experience = [
  {
    role: "Freelance Performance Marketer",
    company: "Self-Employed",
    duration: "2023 – Present",
    desc: "Scaling 10+ brands through organic content systems and high-performance Meta/Google ad funnels.",
    highlights: ["Managed ₹50L+ in ad spend", "Generated 19,000+ leads", "Achieved 160% organic reach growth"]
  },
  {
    role: "Social Media Strategist",
    company: "Skill Swaraj",
    duration: "2023 – 2024",
    desc: "Developed content frameworks for high-retention reels and viral hooks.",
    highlights: ["Viral hooks strategy", "Content calendar management", "Community building"]
  }
];

const certifications = [
  {
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta Blueprint",
    date: "2024",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "2024",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Advanced Data Analytics",
    issuer: "IIT Patna (Ongoing)",
    date: "2024",
    icon: <Award className="w-6 h-6" />
  }
];

const education = [
  {
    degree: "Diploma — Computer Science & Data Analytics",
    institution: "IIT Patna",
    duration: "2024 – 2026",
    highlight: "Focus on analytics, systems & data-driven decision making"
  },
  {
    degree: "Intermediate in Science",
    institution: "Gaya College",
    duration: "2024",
    highlight: "Strong foundation in analytical thinking"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm"
          >
            Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none"
          >
            Experience & <span className="text-primary italic font-serif">Growth</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 md:gap-20">
          {/* Experience Timeline */}
          <div className="space-y-10 md:space-y-12">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Briefcase className="text-primary w-6 h-6 md:w-8 md:h-8" />
              <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter">Work Experience</h3>
            </div>
            
            <div className="relative pl-6 md:pl-8 border-l-2 border-primary/20 space-y-12 md:space-y-16">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 bg-primary border-4 border-black" />
                  <div className="brutal-card p-6 md:p-8 bg-black">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter">{item.role}</h4>
                        <div className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">{item.company}</div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-[10px] md:text-xs font-black uppercase tracking-widest bg-white/5 px-3 py-1 md:px-4 md:py-2 w-fit">
                        <Calendar className="w-4 h-4" /> {item.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 uppercase tracking-wider text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-1 md:px-3 md:py-1 border border-primary/30 text-primary">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="space-y-16 md:space-y-20">
            {/* Certifications */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <Award className="text-primary w-6 h-6 md:w-8 md:h-8" />
                <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter">Certifications</h3>
              </div>
              <div className="grid gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group brutal-card p-5 md:p-6 bg-black flex items-center gap-4 md:gap-6 hover:bg-primary/5 transition-colors"
                  >
                    <div className="p-2 md:p-3 bg-primary text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-black uppercase tracking-tight text-white">{cert.title}</h4>
                      <div className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <GraduationCap className="text-primary w-6 h-6 md:w-8 md:h-8" />
                <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative brutal-card p-5 md:p-6 bg-black/40 backdrop-blur-xl border-primary/50">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <h4 className="text-base md:text-lg font-heading font-black text-white uppercase tracking-tighter">
                          {edu.degree}
                        </h4>
                        <span className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest shrink-0">
                          {edu.duration}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-2">{edu.institution}</div>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                        {edu.highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-32 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="brutal-btn w-full sm:w-auto flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10">Let’s Build Your Growth System</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
