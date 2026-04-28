import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Music2, Share2, Globe, Heart, MessageCircle, Send } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const socialIcons = [
  { icon: <Facebook className="w-6 h-6" />, color: "#1877F2", name: "Facebook" },
  { icon: <Instagram className="w-6 h-6" />, color: "#E4405F", name: "Instagram" },
  { icon: <Youtube className="w-6 h-6" />, color: "#FF0000", name: "YouTube" },
  { icon: <Linkedin className="w-6 h-6" />, color: "#0077B5", name: "LinkedIn" },
  { icon: <Twitter className="w-6 h-6" />, color: "#1DA1F2", name: "Twitter" },
  { icon: <Music2 className="w-6 h-6" />, color: "#000000", name: "TikTok" }, // TikTok doesn't have an icon in Lucide, using Music2
];

const ballIcons = [
  ...socialIcons,
  { icon: <Globe className="w-6 h-6" />, color: "#FFD600", name: "Web" },
  { icon: <Heart className="w-6 h-6" />, color: "#FF0000", name: "Engagement" },
  { icon: <MessageCircle className="w-6 h-6" />, color: "#25D366", name: "WhatsApp" },
  { icon: <Send className="w-6 h-6" />, color: "#0088CC", name: "Telegram" },
];

export default function SocialMediaManagement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="social-management" className="py-24 bg-black relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] mb-4"
            >
              Strategic Management
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none mb-8"
            >
              Omnichannel <span className="text-primary italic font-serif">Growth</span>
            </motion.h2>
            
            <div className="space-y-6">
               <p className="text-muted-foreground uppercase tracking-widest text-sm leading-relaxed max-w-lg">
                 I don't just post content; I manage identities. From building cross-platform communities to multi-channel customer acquisition.
               </p>
               
               <ul className="space-y-4">
                  {[
                    "Content Calendar & Distribution",
                    "Community Management & Response",
                    "Platform-Specific Optimization",
                    "Influencer & UGC Coordination"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary" />
                      <span className="text-base font-bold text-white uppercase tracking-tight">{item}</span>
                    </motion.li>
                  ))}
               </ul>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="relative h-[400px] md:h-[500px] bg-white/5 brutal-card border-white/10 overflow-hidden flex items-center justify-center"
          >
             {/* Central Hub */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 rotate: [0, 180, 360]
               }}
               transition={{ 
                 duration: 10,
                 repeat: Infinity,
                 ease: "linear"
               }}
               className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary flex items-center justify-center relative z-20 bg-black"
             >
                <Share2 className="text-primary w-10 h-10 md:w-12 md:h-12" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
             </motion.div>

             {/* Orbiting Icons */}
             {ballIcons.map((ball, i) => {
               const angle = (i * (360 / ballIcons.length));
               const radius = 120 + (i % 2 === 0 ? 20 : -20); // Alternate radius for depth
               
               return (
                 <motion.div
                   key={i}
                   animate={{
                     rotate: [0, 360],
                   }}
                   transition={{
                     duration: 15 + (i * 2),
                     repeat: Infinity,
                     ease: "linear",
                   }}
                   className="absolute z-10"
                   style={{
                     width: radius * 2,
                     height: radius * 2,
                   }}
                 >
                   <motion.div
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="absolute"
                     style={{
                       left: "50%",
                       top: "0",
                       transform: "translate(-50%, -50%)",
                     }}
                   >
                     <motion.div
                       whileHover={{ scale: 1.5, rotate: -20 }}
                       className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 border-primary shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center justify-center cursor-pointer group hover:bg-primary transition-colors"
                       style={{ 
                         // To counteract the parent rotation so the icon stays upright
                       }}
                     >
                        <div className="group-hover:text-black transition-colors" style={{ color: ball.color }}>
                          {ball.icon}
                        </div>
                        <div className="absolute top-full mt-2 hidden group-hover:block bg-black text-[8px] font-black uppercase text-primary px-2 py-1 border border-primary">
                          {ball.name}
                        </div>
                     </motion.div>
                   </motion.div>
                 </motion.div>
               );
             })}

             {/* Background Particles/Balls moving randomly */}
             {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`bg-${i}`}
                  animate={{
                    x: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                    y: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute w-2 h-2 md:w-4 md:h-4 rounded-full bg-primary/20 blur-sm pointer-events-none"
                />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
