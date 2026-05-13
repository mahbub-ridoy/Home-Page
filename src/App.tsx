import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/**
 * ==========================================
 * 🟢 HOW TO ADD YOUR AI PROJECTS 1 BY 1:
 * 1. Copy an existing project block in this array.
 * 2. Paste it below and update the details.
 * 3. Change `bgColor` to any hex code you like!
 * ==========================================
 */
const PROJECTS = [
  {
    id: "01",
    title: "Latent Echoes",
    category: "Diffusion",
    year: "2026",
    bgColor: "#0044FF", 
    textColor: "#FFFFFF",
    desc: "Audio-reactive neural generation. Transforming structural frequencies into visible shapes."
  },
  {
    id: "02",
    title: "Synthetic Forms",
    category: "3D Tooling",
    year: "2026",
    bgColor: "#FF2A5F",
    textColor: "#FFFFFF",
    desc: "Exploring non-Euclidean geometry via custom-trained language models parsing mathematical proofs."
  },
  {
    id: "03",
    title: "Algorithmic Flora",
    category: "GAN Realism",
    year: "2025",
    bgColor: "#EEEEEE",
    textColor: "#000000",
    desc: "Fictional botanical illustrations brought to life. A dataset trained purely on 18th-century botany sketches."
  },
  {
    id: "04",
    title: "Neural Brutalism",
    category: "Architecture",
    year: "2025",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    desc: "Conceptual structures unbounded by physics. Concrete and light rendered through AI simulation."
  },
  {
    id: "05",
    title: "Chromatic Mind",
    category: "Color Theory",
    year: "2024",
    bgColor: "#CCFF00",
    textColor: "#000000",
    desc: "AI trained to elicit specific emotions through pure color field generation."
  }
];

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen p-2 md:p-3 lg:p-4 font-sans text-white selection:bg-[#CCFF00] selection:text-black">
      
      {/* Header Block */}
      <header className="bg-[#141414] p-8 md:p-12 lg:p-16 mb-2 md:mb-3 lg:mb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="inline-block bg-[#CCFF00] text-black font-mono font-bold text-xs px-3 py-1 mb-8 uppercase tracking-widest">
            Ridoy's AI Archive
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] mb-6">
            RIDOY.AI
          </h1>
          <p className="text-base md:text-xl font-medium max-w-xl text-white/70">
            A minimal block-feed for my generated experiments.
          </p>
        </div>
        
        <div className="flex flex-row md:flex-col gap-6 font-mono text-sm uppercase tracking-widest text-[#CCFF00]">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="mailto:contact@ridoy.ai" className="hover:text-white transition-colors">Contact</a>
        </div>
      </header>

      {/* Uniform Grid - Effortless to add items 1 by 1 */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 0.98 }}
            className="block relative p-6 md:p-8 flex flex-col justify-between h-[350px] md:h-[400px] overflow-hidden group"
            style={{ backgroundColor: project.bgColor, color: project.textColor }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start font-mono text-sm md:text-base font-bold">
              <span>{project.id}</span>
              <ArrowUpRight 
                className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" 
                size={28} 
              />
            </div>
            
            {/* Bottom Info */}
            <div className="mt-auto relative z-10 transition-transform duration-300 group-hover:-translate-y-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-4">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 font-mono text-xs uppercase font-bold opacity-80">
                <span>{project.category}</span>
                <span>/</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* Hover Details Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/95 text-white border-t border-white/10">
              <p className="text-sm font-medium leading-relaxed">{project.desc}</p>
            </div>
          </motion.a>
        ))}
        
        {/* Helper Block: Shows where your next project will go */}
        <div className="border border-dashed border-white/10 h-[350px] md:h-[400px] flex flex-col items-center justify-center text-white/20 hover:text-white/50 transition-colors p-8 text-center bg-[#141414]">
          <span className="text-5xl mb-4 font-light">+</span>
          <span className="font-mono text-xs uppercase tracking-widest font-bold">Add projects in<br/>App.tsx</span>
        </div>

      </main>
    </div>
  );
}
