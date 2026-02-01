
import React from 'react';

export const ComfyUISection: React.FC = () => {
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  const releaseUrl = "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/";
  
  const images = {
    // 顶部展示区图片
    originalTop: `${baseUrl}part1-01.png`, // 晴天海滩图 (作为原图/结构参考)
    lineTop: `${baseUrl}part1-02.png`,     // 线稿图
    refTop: `${baseUrl}part1-03.png`,      // 雪地参考图 (作为风格参考)
    resultTop: `${baseUrl}part1-04.png`,   // 生成结果
    
    // 其他资源保持不变
    ghostProblem: `${baseUrl}part1-05.png`, 
    styleCompare: `${baseUrl}part1-06.png`, 
    originalPart: `${baseUrl}part1-07.png`, 
    finalResult: `${baseUrl}part1-08.png`,  
    part3Original: `${baseUrl}part1-01.png`, 
    part3Ref: `${baseUrl}part1-09.png`,      
    part3Out1: `${baseUrl}part1-10.png`,     
    part3Out2: `${baseUrl}part1-11.png`,
    part4OutStyle: `${baseUrl}part1-12.png`, 
    part4OutLinear: `${baseUrl}part1-13.png`,
    part4Ref: `${baseUrl}part1-14.png`,      
    part4Original: `${baseUrl}part1-15.png`,
    fontProcess2: `${baseUrl}part1-28.png`,
    tiktokVideo1: `${releaseUrl}tiktok1.mp4`,
    tiktokVideo2: `${releaseUrl}tiktok2.mp4`,
    tiktokVideo3: `${releaseUrl}tiktok3.mp4`,
    tiktokPoster1: `${baseUrl}part1-29.png`,
    tiktokPoster2: `${baseUrl}part1-31.png`,
    tiktokPoster3: `${baseUrl}part1-33.png`
  };

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans text-gray-900">
        <div className="flex justify-end mb-6">
            <span className="text-sm md:text-lg font-serif italic text-gray-300">
                大模型：analogMadness_v50
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
                {img: images.originalTop, label: "原图"},
                {img: images.lineTop, label: "CONTROLNET捕捉线稿"},
                {img: images.refTop, label: "参考风格图"}
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className="w-full aspect-[4/3] overflow-hidden bg-white shadow-lg border border-gray-100 p-1">
                        <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                    </div>
                    <span className="mt-4 text-[10px] md:text-xs font-black text-gray-400 tracking-widest uppercase">{item.label}</span>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              {tech: "ControlNet (结构控制)", target: "对应左侧原图"},
              {tech: "提示词LLM辅助", target: "语义引导"},
              {tech: "IPAdapter (风格注入)", target: "对应右侧参考图"}
            ].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border border-black/[0.03] py-4 rounded-full flex flex-col justify-center items-center shadow-sm">
                    <span className="text-base md:text-lg font-bold text-black tracking-tight">{item.tech}</span>
                    <span className="text-[8px] text-gray-400 uppercase tracking-widest">{item.target}</span>
                </div>
            ))}
        </div>

        <div className="flex flex-col items-center mb-24">
            <div className="w-full max-w-5xl aspect-[16/10] overflow-hidden bg-white shadow-2xl border border-black/[0.02]">
                <img src={images.resultTop} alt="雪夜的海滩" className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 text-center">
                <h4 className="text-lg md:text-xl font-normal text-black/50 tracking-tight mb-1 italic">雪夜的海滩</h4>
                <p className="text-gray-300 text-[8px] uppercase tracking-[0.4em]">Result Showcase / Semantic Logic Correct</p>
            </div>
        </div>

        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>

        {/* --- SECTION 2: 语义控制 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-10">
                <div className="flex items-center gap-6 opacity-20">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 bg-black"></div>
                </div>
                <div className="relative flex items-end gap-4">
                    <div className="w-[35%] shadow-xl border border-white z-10 translate-y-4">
                        <img src={images.styleCompare} className="w-full h-auto" alt="对比" />
                    </div>
                    <div className="w-[65%] shadow-2xl border-4 border-white transform translate-x-[-10%]">
                        <img src={images.ghostProblem} className="w-full h-auto" alt="幽灵效果" />
                    </div>
                </div>
                <div className="max-w-md pt-4">
                    <p className="text-base md:text-lg text-gray-800 leading-snug font-normal">
                        当参考的风格图包含人物时，生成的风景图中容易出现“幽灵人像”或不该出现的肢体结构，造成画面语义混乱。
                    </p>
                </div>
            </div>
            <div className="space-y-10">
                <div className="h-10 lg:h-[48px]"></div>
                <div className="flex flex-col xl:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-8">
                        <h3 className="text-2xl font-serif italic text-black/80 font-bold tracking-tight">解决方案：</h3>
                        <div className="bg-[#1a1a1a] p-5 rounded-md shadow-2xl border border-white/5 max-w-[260px] font-mono">
                             <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em]">Style Transfer (Strong)</span>
                             </div>
                             <div className="space-y-3">
                                <div className="flex justify-between items-center text-[11px] text-white/50">
                                    <span className="opacity-60">weight</span>
                                    <span className="text-blue-400 font-bold">0.80</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px] text-white/50">
                                    <span className="opacity-60">end_at</span>
                                    <span className="text-blue-400 font-bold border-b border-blue-400/30">0.700</span>
                                </div>
                             </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed italic">
                            经过多轮测试，我发现调整 IPAdapter 的 <span className="text-black font-bold not-italic underline decoration-black/10">end_at</span> 参数最为有效。通过让风格控制在生成的后半段（如 0.7-0.8 阶段）停止介入，既保留了风格基调，又避免了过度的语义污染，让画面回归风景本身的逻辑。
                        </p>
                    </div>
                    <div className="flex-[1.4] lg:min-w-[320px]">
                        <div className="shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-4 border-white relative">
                            <img src={images.finalResult} className="w-full h-auto" alt="最终结果" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- TikTok 2026 马年 Ident --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48">
            <div className="flex flex-col gap-12 mb-20">
                <div className="flex items-center gap-6 opacity-20">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 bg-black"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#c41e3a] font-bold tracking-tight">
                    TikTok 2026马年新春限定 Ident
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-center px-4 md:px-12">
                {[
                  {src: images.tiktokVideo1, poster: images.tiktokPoster1}, 
                  {src: images.tiktokVideo2, poster: images.tiktokPoster2}, 
                  {src: images.tiktokVideo3, poster: images.tiktokPoster3}
                ].map((item, i) => (
                    <div key={i} className="relative aspect-[9/16] bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[4px] border-black overflow-hidden group">
                         <video 
                            src={item.src} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            preload="metadata"
                            poster={item.poster}
                            className="w-full h-full object-cover"
                         />
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-gray-50/30 p-16 rounded-[48px] border border-black/[0.02] mb-48">
            <div className="md:col-span-5 flex justify-center">
                <img src={images.fontProcess2} className="max-w-[80%]" alt="Final Process Diagram" />
            </div>
            <div className="md:col-span-7 space-y-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-black/10"></div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">AIGC Material Synthesis</span>
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-black/80 leading-snug">
                    "技术的演进让创作更纯粹：瞬间改变物质形态，而不丢失内在语义。"
                </p>
            </div>
        </div>
    </div>
  );
};
