import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface ProjectProps {
  name: string;
  category: string;
  metrics: string[];
  image: string;
  strategy: string;
}

export default function ProjectCard({ name, category, metrics, image, strategy }: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden brutal-card overflow-hidden">
          <div className="h-[240px] bg-black flex items-center justify-center relative border-b-2 border-primary">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <span className="text-[10px] tracking-[4px] font-bold uppercase text-primary">Grid Preview</span>
            </div>
          </div>
          <div className="p-6 flex flex-col justify-center h-[160px] bg-black">
            <h3 className="text-xl font-heading font-black mb-1 uppercase tracking-tighter">{name}</h3>
            <div className="text-[0.7rem] font-bold text-primary uppercase tracking-[0.2em]">{category}</div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden brutal-card p-8 flex flex-col justify-center bg-black"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-heading font-black mb-4 text-primary uppercase tracking-tighter">{name} Results</h3>
          <div className="space-y-4 mb-6">
            {metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-sm font-bold text-white uppercase tracking-tight">{metric}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t-2 border-primary/20">
            <p className="text-[0.7rem] text-muted-foreground leading-relaxed uppercase tracking-wider mb-4">
              <span className="text-primary font-black block mb-1">Strategy:</span>
              {strategy}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(WHATSAPP_LINK, "_blank");
              }}
              className="w-full py-2 bg-primary text-black text-[0.7rem] font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Discuss Project
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
