import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const funnelSteps = [
  { title: "Traffic", desc: "Meta & Google Ads", width: "w-full" },
  { title: "Capture", desc: "Landing Page / WhatsApp", width: "w-[85%]" },
  { title: "Nurture", desc: "Automation + Follow-ups", width: "w-[70%]" },
  { title: "Convert", desc: "CRM Pipeline", width: "w-[55%]" },
  { title: "Scale", desc: "Retargeting + Lookalikes", width: "w-[40%]" },
];

const stats = [
  "30,000+ leads @ low CPL",
  "200+ bookings via search ads",
  "50% increase in conversions",
];

export default function PerformanceFunnel() {
  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-8 uppercase tracking-tighter leading-none">From Attention to <span className="text-primary italic font-serif">Conversion</span></h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 uppercase tracking-wider leading-relaxed">
            I build complete lead generation systems, not just content. My funnels are designed to capture, nurture, and convert high-intent prospects.
          </p>
          
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 brutal-card bg-black"
              >
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="font-black text-lg uppercase tracking-tighter">{stat}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          {funnelSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${step.width} brutal-card p-4 md:p-6 bg-black relative overflow-hidden group`}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">{step.title}</h4>
                  <p className="font-black uppercase tracking-tighter">{step.desc}</p>
                </div>
                <div className="text-3xl font-heading font-black opacity-10 group-hover:opacity-100 group-hover:text-primary transition-all">0{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
