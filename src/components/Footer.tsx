import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-heading font-bold mb-2">RAUNAK<span className="text-primary">.</span></div>
          <p className="text-sm text-muted-foreground">Building Brands That Attract & Funnels That Convert.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/skill_swaraj/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/raunak-kumar77/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://www.youtube.com/channel/UCM8BMrkWT8Xcq4CTdRkd_5A" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Raunak Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
