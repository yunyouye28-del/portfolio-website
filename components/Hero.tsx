
import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, VolumeX } from 'lucide-react';
import { SectionType } from '../types';

interface HeroProps {
  onExplore: () => void;
}

const VIDEO_SOURCES = [
  "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/video.mp4",
  "video.mp4"
];

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<{code: number, message: string} | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoError(null);
    setIsLoaded(false);

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.muted = isMuted;
      video.play().catch(err => {
        console.warn("Autoplay needs interaction:", err);
      });
    };

    const handleError = () => {
      if (sourceIndex < VIDEO_SOURCES.length - 1) {
        setSourceIndex(prev => prev + 1);
      } else {
        setVideoError({
          code: video.error?.code || 4,
          message: video.error?.message || "Source error"
        });
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [sourceIndex, retryCount]);

  const handleUnlockAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <section 
      id={SectionType.HERO} 
      className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={handleUnlockAudio}
    >
      
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          src={VIDEO_SOURCES[sourceIndex]}
          className="w-full h-full object-cover"
        />
      </div>

      {videoError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white">
          <div className="text-center">
            <AlertCircle size={40} className="text-black/20 mx-auto mb-4" />
            <button onClick={() => { setRetryCount(c => c+1); setSourceIndex(0); }} className="text-xs font-bold uppercase tracking-widest border-b border-black">Reload</button>
          </div>
        </div>
      )}

      {(isLoaded || videoError) && (
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

      {isLoaded && isMuted && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-30 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 px-6 py-3 border border-black rounded-full backdrop-blur-sm">
                <VolumeX size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">点击开启声音 / Tap to Unmute</span>
            </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
        .font-serif {
          font-family: 'Playfair Display', 'Times New Roman', serif;
        }
      `}</style>

    </section>
  );
};
