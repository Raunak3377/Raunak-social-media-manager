import { motion } from "motion/react";
import { Download, ExternalLink, BarChart, PieChart, Activity } from "lucide-react";

const adScreenshots = [
  {
    title: "Meta Ads Performance 1",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1777387251/Screenshot_2026-04-23_at_16.05.44_vvnnhv.png",
    platform: "Meta",
    metrics: "High Conversion lead gen"
  },
  {
    title: "Meta Ads Performance 2",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1777387100/Screenshot_2026-04-23_at_16.03.14_me1fa4.png",
    platform: "Meta",
    metrics: "Retargeting & Scaling"
  },
  {
    title: "Google Ads Metrics",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1777387092/Screenshot_2026-04-23_at_15.59.45_lbfn9m.png",
    platform: "Google",
    metrics: "Search & Display performance"
  }
];

export default function AdsPerformance() {
  return (
    <section id="ads-performance" className="py-24 bg-black relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] mb-4"
            >
              Performance Marketing
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none"
            >
              Real <span className="text-primary italic font-serif">Ads</span> Data
            </motion.h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-3"
            onClick={() => {
              // Simulating a download - in real app would link to actual PDF
              alert("Portfolio PDF is being generated. Link will be available soon!");
            }}
          >
            <Download className="w-5 h-5" />
            Download Portfolio PDF
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {adScreenshots.map((ad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group brutal-card bg-black border-2 border-primary/30 hover:border-primary transition-all overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-2"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-primary w-10 h-10" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary text-black text-[10px] font-black uppercase">
                    {ad.platform}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-black uppercase text-white mb-2">{ad.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                  <BarChart className="w-3 h-3 text-primary" />
                  {ad.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-8">
           {[
             { label: "Avg. ROAS", val: "4.5x", icon: <TrendingUp className="w-4 h-4" /> },
             { label: "Total Managed Spend", val: "₹50L+", icon: <PieChart className="w-4 h-4" /> },
             { label: "Lead Conversion Rate", val: "12%", icon: <Activity className="w-4 h-4" /> },
             { label: "Clicks Generated", val: "1M+", icon: <BarChart className="w-4 h-4" /> }
           ].map((stat, i) => (
             <div key={i} className="brutal-card p-4 bg-white/5 border-white/10 flex flex-col items-center justify-center text-center">
               <div className="text-primary mb-1">{stat.icon}</div>
               <div className="text-xl font-black text-white">{stat.val}</div>
               <div className="text-[8px] font-bold text-muted-foreground uppercase">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

// Fixed import for TrendingUp which was missing
import { TrendingUp } from "lucide-react";
