import { motion } from "motion/react";
import { Play } from "lucide-react";

const videos = [
  { title: "Reel Breakdown", category: "Content Strategy", thumbnail: "https://picsum.photos/seed/reel1/800/600" },
  { title: "Instagram Growth Case Study", category: "Organic", thumbnail: "https://picsum.photos/seed/growth/800/600" },
  { title: "Ads Funnel Explanation", category: "Performance", thumbnail: "https://picsum.photos/seed/ads/800/600" },
  { title: "Before-After Analysis", category: "Branding", thumbnail: "https://picsum.photos/seed/analysis/800/600" },
];

export default function VideoGrid() {
  return (
    <section id="videos" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-4 uppercase tracking-tighter">My Work in <span className="text-primary italic font-serif">Action</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-wider text-sm">
            Deep dives into strategies, growth systems, and performance breakdowns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative brutal-card overflow-hidden cursor-pointer"
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 bg-primary flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-6 h-6 fill-current text-black" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black border-t-2 border-primary">
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{video.category}</div>
                <div className="text-sm font-black uppercase tracking-tighter">{video.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
