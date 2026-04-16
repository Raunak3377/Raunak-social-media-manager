import { motion } from "motion/react";
import { ArrowRight, Zap, Heart, Target, TrendingUp } from "lucide-react";

const steps = [
  { title: "Hook", desc: "Scroll Stop", icon: Zap, color: "text-primary" },
  { title: "Value", desc: "Retention", icon: Heart, color: "text-secondary" },
  { title: "CTA", desc: "Action", icon: Target, color: "text-primary" },
  { title: "Consistency", desc: "Growth", icon: TrendingUp, color: "text-secondary" },
];

export default function ContentEngine() {
  return (
    <section id="system" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-4 uppercase tracking-tighter">My Content <span className="text-primary italic font-serif">Engine</span></h2>
          <p className="text-muted-foreground uppercase tracking-wider text-sm">A systematic approach to organic dominance.</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center group">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-24 brutal-card flex items-center justify-center mb-6 relative"
              >
                <step.icon className={`w-10 h-10 ${step.color}`} />
                {index < steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-heading font-black mb-1 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
