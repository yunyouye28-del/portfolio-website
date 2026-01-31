
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableSectionProps {
  index: string;
  partId: string;
  subtitle: string;
  descriptionText: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.FC;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  index,
  partId,
  subtitle,
  descriptionText,
  isOpen,
  onToggle,
  children: ChildrenComponent
}) => {
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  const imageUrl = `${baseUrl}part.png`;

  return (
    <div 
      className={`group border-t border-black/[0.05] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen 
          ? 'bg-white/20 backdrop-blur-[2px] py-0 z-20 relative' // 降低遮罩浓度，增加背景字母可见性
          : 'bg-transparent py-12 md:py-24 hover:bg-gray-50/5 z-10 relative'
      }`}
    >
      {/* 标题控制区 */}
      <div 
        onClick={onToggle}
        className="max-w-7xl mx-auto px-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between group/header gap-8 md:gap-20"
      >
        <div className="flex items-center gap-6 md:gap-12 overflow-visible shrink-0">
          <div className="shrink-0">
            <span className={`text-7xl md:text-[11rem] font-sans font-black transition-all duration-700 leading-none tracking-tighter ${
              isOpen 
                ? 'text-black opacity-100' 
                : 'text-black/10 opacity-80 group-hover/header:text-black group-hover/header:opacity-100'
            }`}>
              {index}
            </span>
          </div>

          <div className="flex items-center h-20 md:h-48 overflow-visible">
            <img 
              src={imageUrl}
              alt="PART"
              className={`h-full w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen 
                  ? 'grayscale-0 opacity-100 scale-110 translate-x-4' 
                  : 'grayscale-[40%] opacity-40 scale-100 group-hover/header:opacity-100 group-hover/header:grayscale-0 group-hover/header:scale-105 group-hover/header:translate-x-2'
              }`}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex items-center">
            <h3 className={`text-xl md:text-3xl font-sans font-bold leading-tight transition-all duration-700 ${
                isOpen ? 'text-black translate-x-0' : 'text-black/30 translate-x-4 group-hover/header:text-black group-hover/header:translate-x-0'
            }`}>
                {descriptionText}
            </h3>
        </div>
        
        <div className="shrink-0 flex items-center gap-12 mt-6 md:mt-0">
            <div className={`transition-transform duration-700 ${isOpen ? 'rotate-180' : ''}`}>
               <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                 isOpen ? 'border-black bg-black text-white' : 'border-black/10 text-black group-hover/header:border-black'
               }`}>
                  <ChevronDown size={24} strokeWidth={1} />
               </div>
            </div>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'max-h-[15000px] opacity-100 mt-20 md:mt-32' : 'max-h-0 opacity-0'
      }`}>
        <div className="pb-32 bg-transparent">
          <ChildrenComponent />
        </div>
        
        <div 
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className="w-full h-28 flex items-center justify-center cursor-pointer hover:bg-gray-100/50 transition-all group/footer border-t border-black/[0.05] bg-white/20"
        >
            <div className="flex items-center gap-8">
                <div className="w-16 h-[1px] bg-black/10 group-hover/footer:w-32 group-hover/footer:bg-black transition-all duration-700"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-black/30 group-hover/footer:text-black transition-colors font-bold">Close Section</span>
                <div className="w-16 h-[1px] bg-black/10 group-hover/footer:w-32 group-hover/footer:bg-black transition-all duration-700"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
