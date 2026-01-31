import React from 'react';

export const SnakeConceptSection: React.FC = () => {
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  
  const assets = {
    // 对应上传的 01-07 资源
    styleRef: `${baseUrl}part3-01.png`,
    skeleton: `${baseUrl}part3-02.png`,
    capture1: `${baseUrl}part3-03.png`,
    capture2: `${baseUrl}part3-04.png`,
    
    render1: `${baseUrl}part3-05.png`,
    render2: `${baseUrl}part3-06.png`,
    render3: `${baseUrl}part3-07.png`,
    
    // 装饰物
    decor: `${baseUrl}part1-21.png`
  };

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans text-gray-900">
      
      {/* --- 顶部导言 (Slide 22) --- */}
      <div className="mb-32 space-y-12">
        <div className="flex items-center gap-6 opacity-20">
          <span className="text-5xl md:text-8xl font-sans font-black tracking-tighter">PART 3</span>
          <div className="h-[1px] flex-1 bg-black"></div>
        </div>
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-black mb-8 leading-tight tracking-tighter">
            CONTROLNET + IP ADAPTER<br/>
            <span className="text-gray-400 font-light block mt-4">
              玄幻电影的角色概念设计 —— 灵蛇化形
            </span>
          </h2>
        </div>
      </div>

      {/* --- 流程展示 A (Slide 24) --- */}
      <div className="mb-48 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-black/5 pb-8">
           <h3 className="text-2xl font-bold flex items-center gap-4">
             <span className="w-8 h-[1px] bg-black"></span>
             视觉生成流：结构化协同
           </h3>
           <span className="text-[10px] font-mono text-gray-300 uppercase tracking-[0.4em]">Multi-Model Synergy</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { img: assets.styleRef, label: "风格", sub: "Style Reference" },
            { img: assets.skeleton, label: "骨架", sub: "Skeleton Basis" },
            { img: assets.capture1, label: "线稿捕捉", sub: "Edge Capture" },
            { img: assets.capture2, label: "细节处理", sub: "Refined Edge" }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative aspect-square w-full bg-white border border-black/[0.05] p-2 shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:border-black/10">
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.label} />
                {idx < 3 && (
                   <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-20">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                   </div>
                )}
              </div>
              <div className="mt-6 text-center space-y-1">
                <span className="text-sm font-bold block">{item.label}</span>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl pt-12">
            <p className="text-lg text-gray-400 font-light leading-relaxed italic border-l-2 border-black/10 pl-8">
              “通过 ControlNet 多模型协同（IP-Adapter, Canny, Depth），完成从生物骨架到质感肌理的完整视觉生成。改变高低阈值，调整捕捉线条降至 <span className="text-black font-bold">0.3</span> 以捕捉微弱边缘。”
            </p>
        </div>
      </div>

      {/* --- 展示区: 仙气与柔色 (Slide 25) --- */}
      <div className="mb-48 space-y-20 bg-gray-50/50 p-12 md:p-24 rounded-sm border border-black/[0.02]">
        <div className="max-w-4xl space-y-8">
          <h3 className="text-3xl font-bold tracking-tight">质感迁移：柔色氛围与轮廓平衡</h3>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            IP-Adapter 迁移观音像的柔色质感，结合 Canny 边缘控制，让蛇身在保持硬朗结构的同时，兼具脱俗的<span className="text-black italic font-medium">“仙气”</span>。使用 analogMadness_v50 强化真实影像质感。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[assets.render1, assets.render2, assets.render3].map((img, i) => (
            <div key={i} className="group relative overflow-hidden shadow-2xl transition-all duration-1000 hover:translate-y-[-10px]">
               <img src={img} className="w-full h-auto aspect-[3/4] object-cover" alt={`Render ${i+1}`} />
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end pt-12 opacity-10">
            <span className="text-[10px] font-mono tracking-[1em] uppercase">Visual Narrative Synthesis</span>
        </div>
      </div>

      {/* --- 流程展示 B (Slide 23/26) --- */}
      <div className="mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] block font-bold">Spatial Depth</span>
              <h3 className="text-4xl font-bold leading-tight tracking-tighter">
                空间层次与<br/>缠绕姿态强化
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                融合 <span className="text-black font-medium">Depth</span> 模型强化生物形态的体感，结合 <span className="text-black font-medium">Lineart</span> 优化线条细节，让生物的缠绕姿态在 AIGC 生成中更具空间纵深感。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 p-8 bg-white shadow-sm border border-black/[0.03]">
               <div className="space-y-4">
                  <img src={assets.styleRef} className="w-full aspect-square object-cover grayscale opacity-50" alt="Ref" />
                  <span className="text-[10px] font-mono text-center block text-gray-400">INPUT_REF</span>
               </div>
               <div className="space-y-4">
                  <img src={assets.skeleton} className="w-full aspect-square object-cover grayscale opacity-50" alt="Skeleton" />
                  <span className="text-[10px] font-mono text-center block text-gray-400">SKELETON_MAP</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative group">
             {/* 模拟 Slide 26 的主要结果展示 */}
             <div className="relative shadow-[0_60px_120px_rgba(0,0,0,0.2)] border-[16px] border-white transition-all duration-700 group-hover:shadow-[0_80px_150px_rgba(0,0,0,0.3)]">
                <img src={assets.render1} className="w-full h-auto" alt="Final Result" />
                <div className="absolute -bottom-8 -right-8 w-48 p-6 bg-black text-white text-[11px] font-mono leading-relaxed shadow-2xl">
                   <div className="w-8 h-[1px] bg-blue-400 mb-4"></div>
                   RESULT: <br/>
                   融合深度模型强化体感，线条更具层次。
                </div>
             </div>
             
             {/* 装饰性漂浮元素 */}
             <div className="absolute -top-12 -left-12 w-32 h-32 opacity-20 rotate-12 pointer-events-none group-hover:rotate-45 transition-transform duration-1000">
                <img src={assets.decor} className="w-full h-full object-contain" alt="decor" />
             </div>
          </div>
        </div>
      </div>

      {/* --- 极简分割 --- */}
      <div className="flex justify-center items-center gap-12 opacity-5 mb-24">
         <div className="h-[1px] flex-1 bg-black"></div>
         <div className="w-2 h-2 rounded-full bg-black"></div>
         <div className="h-[1px] flex-1 bg-black"></div>
      </div>
    </div>
  );
};