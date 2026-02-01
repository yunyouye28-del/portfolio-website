
import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, VolumeX, ChevronDown } from 'lucide-react';
import { SectionType } from '../types';

interface HeroProps {
  onExplore: () => void;
}

const VIDEO_SOURCES = [
  "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/hero.mp4"
];

// 封面图链接
const HERO_POSTER = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/part1-04.png";

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<{code: number, message: string} | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // 全局交互监听，用于解锁音频
  useEffect(() => {
    const unlock = () => {
      setHasInteracted(true);
      window.removeEventListener('click', unlock);
    };
    window.addEventListener('click', unlock);
    return () => window.removeEventListener('click', unlock);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    const handleError = () => {
      if (sourceIndex < VIDEO_SOURCES.length - 1) {
        setSourceIndex(prev => prev + 1);
      } else {
        setVideoError({ code: 4, message: "Source error" });
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [sourceIndex]);

  // 核心逻辑：鼠标移入移出控制声音
  const handleMouseEnter = () => {
    if (videoRef.current && hasInteracted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section 
      id={SectionType.HERO} 
      className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          src={VIDEO_SOURCES[sourceIndex]}
          className="w-full h-full object-cover"
        />
      </div>

      {videoError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white">
          <div className="text-center">
            <AlertCircle size={40} className="text-black/20 mx-auto mb-4" />
            <button onClick={() => window.location.reload()} className="text-xs font-bold uppercase tracking-widest border-b border-black">Reload</button>
          </div>
        </div>
      )}

      {isLoaded && (
        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto pointer-events-none">
          <div className="absolute left-6 top-12 md:left-12">
             <span className="text-[10px] font-mono tracking-[0.5em] text-black/40 uppercase">AIGC Portfolio / v2.0</span>
          </div>

          <div className="absolute right-[10%] bottom-[32%] md:right-[15%] md:bottom-[35%]">
            <h1 className="text-[12vw] md:text-[14rem] font-serif font-normal text-[#1a1a1a] leading-none tracking-tight">
              Portfolio
            </h1>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12">
            <div className="rotate-90 origin-right whitespace-nowrap">
                <span className="text-lg md:text-2xl font-sans font-black tracking-tighter text-black">
                    +86 19002071207
                </span>
            </div>
          </div>
        </div>
      )}

      {/* 箭头提示 */}
      {isLoaded && (
        <div 
          onClick={onExplore}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-2 group pointer-events-auto"
        >
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/40 group-hover:text-black transition-colors">Scroll to Discover</span>
            <div className="animate-bounce-slow">
              <ChevronDown size={20} className="text-black/30 group-hover:text-black transition-colors" />
            </div>
        </div>
      )}

      {/* 声音交互提示 */}
      {isLoaded && !hasInteracted && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
            <div className="px-4 py-2 bg-black/5 backdrop-blur-md border border-black/10 rounded-full animate-pulse">
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Click anywhere to unlock audio</span>
            </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
};
