import { motion } from "motion/react";
import { Play, Scissors, Zap, Target } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const reels = [
  {
    title: "Performance Ads Shoot",
    desc: "Creative ad shoot focused on high conversion and brand visibility.",
    type: "Ads Reel",
    videoId: "ozAhgTj2afk",
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: "Showroom Display Ad",
    desc: "Visual storytelling.",
    type: "Tips reel",
    videoId: "a1qqZhfFblU",
    icon: <Play className="w-5 h-5" />,
  },
    {
    title: "Transition Makeup",
    desc: "Makeup ShowOff.",
    type: "Show Off Edits",
    videoId: "6of3PMrthVo",
    icon: <Play className="w-5 h-5" />,
  },
  {
    title: "Course Launch Creative",
    desc: "High-impact editing for educational course promotion.",
    type: "Course Ads",
    videoId: "BEEIhGPPKl0",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Workshop Promo",
    desc: "Dynamic cuts and engaging hooks for event registrations.",
    type: "Workshop",
    videoId: "Kyp3EyCvJqE",
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    title: "Educational Short",
    desc: "Fast-paced learning content designed for high retention.",
    type: "Course Short",
    videoId: "lsbYyv2BrQc",
    icon: <Play className="w-5 h-5" />,
  },
  {
    title: "Limited Time Offer Ad",
    desc: "Urgency-driven ad creative for rapid sales growth.",
    type: "Offer Ads",
    videoId: "FkljwU23a1Y",
    icon: <Target className="w-5 h-5" />,
  },
];

export default function ReelsShowcase() {
  return (
    <section id="reels" className="py-32 bg-black relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] mb-4"
            >
              Creative Studio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none"
            >
              Ads, <span className="text-primary italic font-serif">Editing</span> & Shoots
            </motion.h2>
          </div>
          <p className="text-muted-foreground max-w-sm uppercase tracking-wider text-sm">
            My creative editing and ad shoot work designed to stop the scroll and drive conversion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col brutal-card overflow-hidden bg-white/5"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${reel.videoId}?rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  title={reel.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-8 bg-black border-t-2 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-black p-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    {reel.icon}
                  </div>
                  <div className="text-primary font-black uppercase tracking-widest text-xs">{reel.type}</div>
                </div>
                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter mb-3">{reel.title}</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
                  {reel.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="w-full py-3 bg-white text-black font-black uppercase tracking-widest text-[0.7rem] shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  Discuss Strategy
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
