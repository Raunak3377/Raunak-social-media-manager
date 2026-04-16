import { motion } from "motion/react";
import { Calendar, Mail } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-heading font-black mb-8 uppercase tracking-tighter"
        >
          Want Similar <span className="text-primary italic font-serif">Results</span> for Your Brand?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-muted-foreground mb-12 uppercase tracking-wider"
        >
          Let's audit your current strategy and build a system that actually converts.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="brutal-btn w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <Calendar className="w-6 h-6" /> WhatsApp Me
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("mailto:raunakraj1164@gmail.com", "_blank")}
            className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
          >
            <Mail className="w-6 h-6" /> Get Free Audit
          </motion.button>
        </div>
      </div>
    </section>
  );
}
