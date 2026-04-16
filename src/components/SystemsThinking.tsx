import { motion } from "motion/react";
import { Zap, Target, BarChart3, TrendingUp, Cpu, Brain, LineChart, ShieldCheck, Users, Search } from "lucide-react";

const growthSystems = [
  {
    title: "Lead Generation Engine",
    content: "Meta Ads + Google Ads focused on high-intent leads and low CPL",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Conversion Funnel System",
    content: "Landing Page / WhatsApp → CRM → Follow-ups → Closing",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Retargeting & Optimization",
    content: "Pixel tracking, GA4, GTM, audience segmentation",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Content Growth Engine",
    content: "Reels strategy, hooks, and content calendar for organic reach",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Automation & CRM",
    content: "Lead nurturing via WhatsApp, email, and pipeline tracking",
    icon: <Cpu className="w-6 h-6" />
  }
];

const studyExplore = [
  { text: "Financial markets & investment strategies", icon: <LineChart className="w-5 h-5" /> },
  { text: "Risk vs reward decision-making frameworks", icon: <ShieldCheck className="w-5 h-5" /> },
  { text: "Consumer behavior & buying psychology", icon: <Users className="w-5 h-5" /> },
  { text: "High-performing ads and funnel breakdowns", icon: <Search className="w-5 h-5" /> },
  { text: "AI systems for marketing automation", icon: <Brain className="w-5 h-5" /> }
];

export default function SystemsThinking() {
  return (
    <section id="systems" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none mb-4"
          >
            How I Build <span className="text-primary italic font-serif">Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-widest text-sm md:text-base"
          >
            Systems for execution. Thinking for scale.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Section: Growth Systems */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary" />
              <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter">Growth Systems I Build</h3>
            </div>
            
            <div className="grid sm:grid-cols-1 gap-6">
              {growthSystems.map((system, index) => (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative brutal-card p-6 bg-white/5 backdrop-blur-xl border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-primary text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                      {system.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-black text-white uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">
                        {system.title}
                      </h4>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider leading-relaxed">
                        {system.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section: Study & Explore */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary" />
              <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter">What I Study & Explore</h3>
            </div>

            <div className="space-y-8">
              {studyExplore.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-lg md:text-xl font-bold text-white/80 group-hover:text-primary uppercase tracking-tight transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 border-2 border-primary bg-primary/5 shadow-[0_0_40px_rgba(250,204,21,0.1)] animate-pulse-glow"
            >
              <div className="absolute -top-4 -left-4 bg-primary text-black px-4 py-1 font-black uppercase text-xs tracking-widest">
                Philosophy
              </div>
              <p className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter leading-tight">
                "I approach marketing like <span className="text-primary italic font-serif">investing</span>: Test → Analyze → Scale what works"
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 h-px w-full bg-primary opacity-30" />
      </div>
    </section>
  );
}
