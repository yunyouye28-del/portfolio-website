
import React, { useRef, useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Project } from '../types';

const GalleryItem: React.FC<{ item: Project }> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div 
      className="group relative cursor-pointer"
      onMouseLeave={handleMouseLeave}
      onClick={toggleSound}
    >
      <div className="aspect-video overflow-hidden bg-black relative shadow-sm hover:shadow-2xl transition-all duration-700">
        {item.videoUrl ? (
          <div className="relative w-full h-full">
            <video 
              key={item.videoUrl}
              ref={videoRef}
              src={item.videoUrl}
              muted={isMuted}
              loop
              autoPlay
              playsInline
              preload="metadata"
              poster={item.imageUrl}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        ) : (
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        )}
        
        <div className={`absolute bottom-4 right-4 z-10 p-2 rounded-full backdrop-blur-md border border-white/20 transition-opacity duration-300 ${isMuted ? 'opacity-40 group-hover:opacity-100' : 'opacity-100 bg-white/10'}`}>
            {isMuted ? <VolumeX size={14} className="text-white"/> : <Volume2 size={14} className="text-white animate-pulse" />}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-14 h-14 border border-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
            {isMuted ? <Play size={20} fill="white" className="ml-1 text-white"/> : <span className="text-[10px] text-white font-bold uppercase tracking-widest">Unmuted</span>}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-serif italic text-black/80 group-hover:text-black transition-colors">{item.title}</h3>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em]">{item.category}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono text-gray-300">2024_REEL</span>
            <div className="w-8 h-[1px] bg-black/5 group-hover:w-12 group-hover:bg-black/20 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {GALLERY_ITEMS.map((item) => (
                <GalleryItem key={item.id} item={item} />
            ))}
        </div>

        <div className="mt-40 flex justify-center opacity-5">
             <div className="w-1 h-20 bg-black"></div>
        </div>
    </div>
  );
};
