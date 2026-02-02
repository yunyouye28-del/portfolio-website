
import React, { useState, useEffect, useMemo } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ComfyUISection } from './components/ComfyUISection';
import { LoraSection } from './components/LoraSection';
import { SnakeConceptSection } from './components/SnakeConceptSection';
import { Gallery } from './components/Gallery';
import { ExpandableSection } from './components/ExpandableSection';
import { SectionType } from './types';

const FloatingBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  
  // 仅使用 20-23 号资产，确保视觉统一
  const assets = [
    { src: `${baseUrl}part1-20.png` }, 
    { src: `${baseUrl}part1-21.png` }, 
    { src: `${baseUrl}part1-22.png` }, 
    { src: `${baseUrl}part1-23.png` }
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const elements = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const startX = (i * 25) % 100;
      const startY = (i * 50) % 500;
      const speed = 0.3 + Math.random() * 0.4; 
      const driftX = i % 2 === 0 ? 50 : -50; 
      const driftY = 70; 
      
      return {
        id: i,
        src: assets[i % assets.length].src,
        startX,
        startY,
        speed,
        driftX,
        driftY,
        size: 350 + Math.random() * 200, 
        opacity: 0.25 + Math.random() * 0.15,
        rotation: Math.random() * 360,
        blur: i % 4 === 0 ? 'blur(12px)' : 'none'
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => {
        const moveX = (scrollY * el.speed * (el.driftX / 100));
        const moveY = (scrollY * el.speed * (el.driftY / 100));
        const rotate = el.rotation + (scrollY * 0.04);

        return (
          <img 
            key={el.id}
            src={el.src}
            style={{
              position: 'absolute',
              top: `${el.startY}vh`,
              left: `${el.startX}%`,
              width: `${el.size}px`,
              opacity: el.opacity,
              filter: el.blur,
              transform: `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg)`,
              transition: 'transform 0.1s linear', 
              willChange: 'transform'
            }}
            alt="liquid-metal-element"
          />
        );
      })}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HERO);
  const [expandedPart, setExpandedPart] = useState<string | null>(null);

  const handleNavigate = (section: SectionType) => {
    setActiveSection(section);
    if (section === SectionType.COMFYUI) setExpandedPart('01');
    if (section === SectionType.LORA) setExpandedPart('02');
    if (section === SectionType.SNAKE) setExpandedPart('03');
    if (section === SectionType.GALLERY) setExpandedPart('04');

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const togglePart = (id: string) => {
    setExpandedPart(expandedPart === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-black selection:text-white relative min-h-screen overflow-x-hidden">
      <FloatingBackground />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="relative z-10 bg-transparent">
        <Hero onExplore={() => handleNavigate(SectionType.ABOUT)} />
        
        <div id={SectionType.ABOUT} className="bg-white/40 backdrop-blur-[2px]">
            <About />
        </div>

        <div className="bg-transparent">
          <div id={SectionType.COMFYUI}>
            <ExpandableSection 
                index="01" 
                partId="1"
                subtitle="ComfyUI & Logic"
                descriptionText="ComfyUI 风景氛围迁移工作流 —— 打造创意滤镜"
                isOpen={expandedPart === '01'}
                onToggle={() => togglePart('01')}
            >
                {ComfyUISection}
            </ExpandableSection>
          </div>

          <div id={SectionType.LORA}>
            <ExpandableSection 
                index="02" 
                partId="2"
                subtitle="Lora & Aesthetics"
                descriptionText="无机质形态美学：FLUX Lora 模型训练实验"
                isOpen={expandedPart === '02'}
                onToggle={() => togglePart('02')}
            >
                {LoraSection}
            </ExpandableSection>
          </div>

          <div id={SectionType.SNAKE}>
            <ExpandableSection 
                index="03" 
                partId="3"
                subtitle="ControlNet & Character"
                descriptionText="灵蛇化形：玄幻电影角色概念控制流设计"
                isOpen={expandedPart === '03'}
                onToggle={() => togglePart('03')}
            >
                {SnakeConceptSection}
            </ExpandableSection>
          </div>

          <div id={SectionType.GALLERY}>
            <ExpandableSection 
                index="04" 
                partId="4"
                subtitle="Intermedia Archive"
                descriptionText="过往影像与装置作品回顾 (跨媒体艺术实践)"
                isOpen={expandedPart === '04'}
                onToggle={() => togglePart('04')}
            >
                {Gallery}
            </ExpandableSection>
          </div>
        </div>

        {/* --- Ending Video Section: Optimized with Poster --- */}
        <section className="relative w-full overflow-hidden border-t border-black/[0.03] bg-black">
            <div className="w-full aspect-video md:aspect-[21/9] relative">
                <video 
                    src="https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/Thank.You1.mp4"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    poster="https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/part1-04.png"
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.05] saturate-[1.1]"
                    style={{ 
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translate3d(0, 0, 0)'
                    }}
                />
            </div>
        </section>
      </main>

      <footer className="bg-white/60 backdrop-blur-md text-black py-40 text-center relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-6xl font-serif italic mb-16 tracking-tighter">A / I / G / C</h2>
            <div className="h-[1px] w-32 bg-black/10 mb-16"></div>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.8em] mb-20">Ye Yunyou &copy; {new Date().getFullYear()} Creative Archive</p>
            <div className="flex flex-col md:flex-row gap-16 text-[11px] font-mono tracking-[0.2em] text-black/40 uppercase">
                <span className="hover:text-black transition-colors cursor-pointer">+86 19002071207</span>
                <span className="hover:text-black transition-colors cursor-pointer">GAFA 广州美术学院 科技艺术</span>
            </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
