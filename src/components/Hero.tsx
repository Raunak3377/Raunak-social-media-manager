import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const stats = [
  { label: "Managed Pages", value: "8+" },
  { label: "Organic Growth", value: "160%+" },
  { label: "Leads Generated", value: "1,900+" },
  { label: "Conversion Increase", value: "48%" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] md:text-xs font-black text-primary mb-6 uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            I Build <span className="font-serif italic text-primary">Brands</span> That Attract — And <span className="font-serif italic text-primary">Funnels</span> That Convert
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-xl uppercase tracking-wider leading-relaxed">
            Scaling brands through organic content systems and high-performance lead generation models.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-btn flex items-center justify-center gap-2"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              Connect me on WhatsApp <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-btn-secondary flex items-center justify-center gap-2"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch Case Studies <Play className="w-5 h-5 fill-current" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="brutal-card p-6 md:p-8 group"
            >
              <div className="text-3xl md:text-5xl font-heading font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left uppercase tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
