import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const infoItems = [
  { number: "01", title: "Content Strategy", desc: "Reels + hooks + content calendar for consistent growth" },
  { number: "02", title: "Organic Growth", desc: "Audience building with high-retention content" },
  { number: "03", title: "Conversion Systems", desc: "Funnels, retargeting & lead nurturing" },
];

interface BrandCardData {
  brand: string;
  image: string;
  link: string;
  front_content: string[];
  back_content: string[];
}

const brandCards: BrandCardData[] = [
  {
    brand: "Aura National Academy",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776335439/Screenshot_2026-04-16_at_16.00.17_wcwk7r.png",
    link: "https://www.instagram.com/auranational_/",
    front_content: ["Instagram Growth", "Content System", "Visual Branding"],
    back_content: ["I started and growing this from zero", "Visit now"],
  },
  {
    brand: "She&me Academy",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336098/Screenshot_2026-04-16_at_16.02.46_uviwhf.png",
    link: "https://www.instagram.com/shenmebeautyacademy/",
    front_content: ["Reel Editing", "Social Media Management", "Quality Boost"],
    back_content: ["Worked here as social media and reel editor", "Increased reel quality"],
  },
  {
    brand: "Manav Herbal",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336096/Screenshot_2026-04-16_at_16.09.22_yymewx.png",
    link: "https://www.instagram.com/manav_herbals/",
    front_content: ["Organic Growth", "Product Showcase", "Engagement"],
    back_content: ["Organic growth strategy", "Product showcase mastery"],
  },
  {
    brand: "Realtor Shital Balar",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336098/Screenshot_2026-04-16_at_16.05.16_qunsha.png",
    link: "https://www.instagram.com/realtor_shitalbalar/",
    front_content: ["Real Estate Branding", "Property Reels", "Lead Gen"],
    back_content: ["Personal branding for real estate", "High-retention property reels"],
  },
  {
    brand: "Jawed Habib Gaya",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336097/Screenshot_2026-04-16_at_16.01.32_wx3b1v.png",
    link: "https://www.instagram.com/jawed_habib_towerchowk_gaya/",
    front_content: ["Local SEO", "Ads Strategy", "Conversion Boost"],
    back_content: ["Local SEO & Ads", "48% conversion increase"],
  },
  {
    brand: "MastermindGurukul",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336097/Screenshot_2026-04-16_at_16.03.45_mh0uuu.png",
    link: "https://www.instagram.com/mastermindgurukul",
    front_content: ["Education Content", "Student Engagement", "Growth"],
    back_content: ["Educational content system", "Student engagement growth"],
  },
  {
    brand: "Preety Beauty Studio",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776337589/Screenshot_2026-04-16_at_16.14.53_esztkc.png",
    link: "https://www.instagram.com/thepreetyamisha/",
    front_content: ["Visual Refresh", "Academy Branding", "Lead Funnels"],
    back_content: ["Visual branding refresh", "Lead generation funnels"],
  },
  {
    brand: "MSMG Foundation",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336604/Screenshot_2026-04-16_at_16.19.49_dnf00z.png",
    link: "https://www.youtube.com/@msmgfoundationindia",
    front_content: ["YouTube Growth", "Storytelling", "Social Impact"],
    back_content: ["YouTube channel growth", "Social impact storytelling"],
  },
  {
    brand: "Wellness & Wisdom",
    image: "https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776336602/Screenshot_2026-04-16_at_16.17.51_kbed19.png",
    link: "https://www.youtube.com/dipaali",
    front_content: ["Channel Optimization", "Wellness Content", "Strategy"],
    back_content: ["Channel optimization", "Content strategy for wellness"],
  },
];

const BrandCard: React.FC<{ card: BrandCardData }> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsFlipped(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-[380px] md:h-[450px] w-[280px] md:w-[350px] flex-shrink-0 cursor-pointer group perspective-1000 mx-3 md:mx-4"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d duration-500"
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden brutal-card overflow-hidden bg-black">
          <div className="h-full w-full relative flex items-center justify-center">
            <img 
              src={card.image} 
              alt={card.brand} 
              className="w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Direct Link Icon */}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(card.link, "_blank");
              }}
              className="absolute top-4 right-4 z-20 p-3 bg-primary text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>

            {/* Sparkles */}
            <div className="sparkle top-10 left-10" />
            <div className="sparkle top-20 right-20 delay-700" />
            <div className="sparkle bottom-20 left-1/2 delay-1000" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-black/90 border-t-2 border-primary">
              <h3 className="text-xl md:text-2xl font-heading font-black mb-3 md:mb-4 uppercase tracking-tighter">{card.brand}</h3>
              <div className="flex flex-wrap gap-2">
                {card.front_content.map((item, i) => (
                  <span key={i} className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold px-2 md:px-3 py-1 bg-primary text-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden brutal-card p-6 md:p-10 flex flex-col justify-center items-center text-center bg-black"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg md:text-xl font-heading font-black mb-4 md:mb-6 text-primary uppercase tracking-[0.2em]">{card.brand} Impact</h3>
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            {card.back_content.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 md:gap-3 justify-center"
              >
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary" />
                <span className="text-base md:text-lg font-bold text-white uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(card.link, "_blank");
            }}
            className="w-full py-2 bg-primary text-black text-[0.7rem] font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all mb-4"
          >
            Visit Now
          </motion.button>
          
          <div className="text-[8px] md:text-[10px] text-primary font-black uppercase tracking-[0.3em]">Click to flip back</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BrandsGrowthSection() {
  return (
    <section id="brands" className="relative py-32 overflow-hidden mesh-gradient-brands">
      <div className="grid-overlay absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -top-12 left-0 text-[8vw] font-heading font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none"
          >
            GROWTH WORK RESULTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black relative z-10 uppercase tracking-tighter"
          >
            Brands I’ve <span className="font-serif italic text-primary">Scaled</span>
          </motion.h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {[...brandCards, ...brandCards].map((card, i) => (
            <BrandCard key={`${card.brand}-${i}`} card={card} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-12">
        {infoItems.map((item, i) => (
          <div key={i} className="group brutal-card p-8 bg-black">
            <div className="text-4xl font-heading font-black text-primary/20 mb-2 group-hover:text-primary transition-colors">
              {item.number}
            </div>
            <h4 className="text-xl font-heading font-black mb-2 text-white uppercase tracking-tighter">{item.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed uppercase tracking-wider">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          className="brutal-btn flex items-center gap-3 group"
        >
          Get Similar Results
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
