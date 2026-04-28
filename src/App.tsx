import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsGrowthSection from "./components/BrandsGrowthSection";
import ReelsShowcase from "./components/ReelsShowcase";
import ExperienceSection from "./components/ExperienceSection";
import ProjectCard from "./components/ProjectCard";
import VideoGrid from "./components/VideoGrid";
import ContentEngine from "./components/ContentEngine";
import PerformanceFunnel from "./components/PerformanceFunnel";
import SystemsThinking from "./components/SystemsThinking";
import AdsPerformance from "./components/AdsPerformance";
import SocialMediaManagement from "./components/SocialMediaManagement";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const projects = [
  {
    name: "She&Me Academy",
    category: "Organic Growth",
    image: "https://picsum.photos/seed/sheme/800/600",
    metrics: ["120% Follower Growth", "50k+ Monthly Reach", "15% Engagement Rate"],
    strategy: "Focus on high-value educational reels and community building through interactive stories."
  },
  {
    name: "Aura National Academy",
    category: "Performance Marketing",
    image: "https://picsum.photos/seed/aura/800/600",
    metrics: ["500+ Qualified Leads", "₹12 Cost Per Lead", "3x Return on Ad Spend"],
    strategy: "Meta Ads funnel targeting aspiring beauty professionals with lead magnet webinars."
  },
  {
    name: "MSMG Foundation",
    category: "Organic Growth",
    image: "https://picsum.photos/seed/msmg/800/600",
    metrics: ["200% Organic Reach", "Viral Content System", "8k+ New Followers"],
    strategy: "Storytelling-based content highlighting social impact and real-world results."
  },
  {
    name: "Jawed Habib Tower",
    category: "Performance Marketing",
    image: "https://picsum.photos/seed/habib/800/600",
    metrics: ["300+ Bookings", "40% Increase in Walk-ins", "Local SEO Optimization"],
    strategy: "Hyper-local Meta & Google Ads targeting high-intent salon seekers in Gaya."
  },
  {
    name: "IIT Patna Hybrid",
    category: "Performance Marketing",
    image: "https://picsum.photos/seed/iit/800/600",
    metrics: ["1000+ Registrations", "High-Ticket Lead Gen", "Automated CRM Flow"],
    strategy: "Multi-channel funnel (LinkedIn + Meta) for professional certification programs."
  },
  {
    name: "Manav Herbals",
    category: "Organic Growth",
    image: "https://picsum.photos/seed/manav/800/600",
    metrics: ["Brand Identity Refresh", "45% Sales Increase", "Influencer Collabs"],
    strategy: "Product-focused aesthetic grid and influencer marketing for natural wellness products."
  }
];

export default function App() {
  const [mode, setMode] = useState<"Organic Growth" | "Performance Marketing">("Organic Growth");

  const filteredProjects = projects.filter(p => p.category === mode);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden">
      <div className="mesh-glow-1" />
      <div className="mesh-glow-2" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <BrandsGrowthSection />
        <AdsPerformance />
        <ReelsShowcase />
        <ExperienceSection />
        <SocialMediaManagement />

      {/* Interactive Mode Section */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-heading font-black mb-4 uppercase tracking-tighter">Selected <span className="text-primary italic font-serif">Work</span></h2>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Toggle between growth strategies to see specific results.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-black border-2 border-primary p-2 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] w-full sm:w-auto">
            <span className="text-[0.7rem] md:text-[0.8rem] font-black text-white uppercase tracking-widest px-4">Strategy Mode:</span>
            <div className="flex flex-col sm:flex-row bg-white/5 p-1 gap-1 w-full sm:w-auto">
              <button
                onClick={() => setMode("Organic Growth")}
                className={`px-4 md:px-6 py-2 text-[0.7rem] md:text-[0.8rem] font-black transition-all duration-300 border-2 w-full sm:w-auto ${
                  mode === "Organic Growth" ? "bg-primary text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "text-muted-foreground hover:text-white border-transparent"
                }`}
              >
                Organic Growth
              </button>
              <button
                onClick={() => setMode("Performance Marketing")}
                className={`px-4 md:px-6 py-2 text-[0.7rem] md:text-[0.8rem] font-black transition-all duration-300 border-2 w-full sm:w-auto ${
                  mode === "Performance Marketing" ? "bg-primary text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "text-muted-foreground hover:text-white border-transparent"
                }`}
              >
                Performance Marketing
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <VideoGrid />
      <ContentEngine />
      <PerformanceFunnel />
      <SystemsThinking />

      {/* Why Me Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative brutal-card overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dzv1tzjxa/image/upload/v1776343650/Raunak_photo_az9iqf.jpg" 
                alt="Raunak Kumar" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-7xl font-heading font-black mb-12 uppercase tracking-tighter">Why I’m <span className="text-primary italic font-serif">Different</span></h2>
            <div className="space-y-10">
              {[
                { title: "Hybrid Strategy", desc: "I combine organic branding with performance marketing for a holistic growth approach." },
                { title: "System Builder", desc: "I build complete lead generation systems, not just content. Everything is automated." },
                { title: "ROI Focused", desc: "I focus on conversion and revenue, not vanity metrics like likes or impressions." }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="brutal-card p-6 md:p-8 bg-black hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-black mb-3 text-primary uppercase tracking-tighter">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed uppercase tracking-wider text-xs md:text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      </div>
    </main>
  );
}
