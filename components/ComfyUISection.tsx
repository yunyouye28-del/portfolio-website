import React from 'react';

export const ComfyUISection: React.FC = () => {
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  const images = {
    // 顶部通用展示区
    originalTop: `${baseUrl}part1-03.png`,
    lineTop: `${baseUrl}part1-02.png`,
    refTop: `${baseUrl}part1-01.png`,
    resultTop: `${baseUrl}part1-04.png`,
    
    // 底部“语义控制”专题板块
    ghostProblem: `${baseUrl}part1-05.png`, 
    styleCompare: `${baseUrl}part1-06.png`, 
    originalPart: `${baseUrl}part1-07.png`, 
    finalResult: `${baseUrl}part1-08.png`,  

    // Lineart & Canny 案例
    part3Original: `${baseUrl}part1-01.png`, 
    part3Ref: `${baseUrl}part1-09.png`,      
    part3Out1: `${baseUrl}part1-10.png`,     
    part3Out2: `${baseUrl}part1-11.png`,

    // IPAdapter 权重类型案例
    part4OutStyle: `${baseUrl}part1-12.png`, 
    part4OutLinear: `${baseUrl}part1-13.png`,
    part4Ref: `${baseUrl}part1-14.png`,      
    part4Original: `${baseUrl}part1-15.png`,

    // 商业化应用扩展案例
    appOut1: `${baseUrl}part1-16.png`, 
    appOut2: `${baseUrl}part1-17.png`,
    appOut3: `${baseUrl}part1-18.png`,

    // 字体风格转换案例
    fontGlassA: `${baseUrl}part1-19.png`,
    fontGlassG: `${baseUrl}part1-20.png`,
    fontGlassC: `${baseUrl}part1-21.png`,
    fontGlassI: `${baseUrl}part1-22.png`,
    fontFiberA: `${baseUrl}part1-23.png`,
    fontFiberG: `${baseUrl}part1-24.png`,
    fontFiberC: `${baseUrl}part1-25.png`,
    fontFiberI: `${baseUrl}part1-26.png`,
    fontProcess1: `${baseUrl}part1-27.png`,
    fontProcess2: `${baseUrl}part1-28.png`,

    // 模板转换素材 (根据截图排序)
    tmpl29: `${baseUrl}part1-29.png`,
    tmpl30: `${baseUrl}part1-30.png`,
    tmpl31: `${baseUrl}part1-31.png`,
    tmpl32: `${baseUrl}part1-32.png`,
    tmpl33: `${baseUrl}part1-33.png`,
    tmpl34: `${baseUrl}part1-34.png`,

    // TikTok 马年 Ident 视频素材
    tiktokVideo1: `${baseUrl}part1-35.mp4`,
    tiktokVideo2: `${baseUrl}part1-36.mp4`,
    tiktokVideo3: `${baseUrl}part1-37.mp4`
  };

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans text-gray-900">
        
        {/* --- SECTION 1: 顶部技术流程 --- */}
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
            {["ControlNet (结构控制)", "提示词LLM辅助", "IPAdapter (风格注入)"].map((tech, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm border border-black/[0.03] py-4 rounded-full flex justify-center items-center shadow-sm">
                    <span className="text-base md:text-lg font-bold text-black tracking-tight">
                        {tech}
                    </span>
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

        {/* --- SECTION 3: Lineart & Canny Fusion --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48">
            <div className="flex flex-col gap-12 mb-16">
                <div className="flex items-center justify-between opacity-30">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 mx-8 bg-black"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-400 block">Technical Synthesis</span>
                        <h3 className="text-4xl md:text-5xl font-serif italic text-black/80 font-bold leading-tight">
                            Lineart & Canny 多模型融合控制
                        </h3>
                        <p className="text-gray-500 text-lg italic leading-relaxed max-w-xl">
                            采用 Canny 捕捉硬性边界与 Lineart 柔性线条互补，实现对复杂场景的高度写实控制。
                        </p>
                    </div>
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center lg:items-end justify-end">
                        <div className="w-full md:w-64 bg-[#fcfcfc] border border-black/[0.05] p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-black/40">Model Config</span>
                            </div>
                            <ul className="space-y-4 font-mono text-[10px] text-black/60">
                                <li className="flex justify-between border-b border-black/[0.03] pb-2">
                                    <span>ControlNet_1</span>
                                    <span className="text-black font-bold">Lineart</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>ControlNet_2</span>
                                    <span className="text-black font-bold">Canny</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-32 flex flex-col gap-2">
                                <div className="aspect-[3/4] overflow-hidden border border-black/[0.05] shadow-inner">
                                    <img src={images.part3Original} className="w-full h-full object-cover grayscale" alt="原图" />
                                </div>
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest text-center">Original</span>
                            </div>
                            <div className="w-32 flex flex-col gap-2">
                                <div className="aspect-[3/4] overflow-hidden border border-black/[0.05] shadow-inner">
                                    <img src={images.part3Ref} className="w-full h-full object-cover" alt="风格图" />
                                </div>
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest text-center">Style Ref</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="shadow-[0_40px_100px_rgba(0,0,0,0.18)] border-[16px] border-white transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_60px_120px_rgba(0,0,0,0.25)]">
                    <img src={images.part3Out1} className="w-full h-auto" alt="结果 1" />
                </div>
                <div className="shadow-[0_40px_100px_rgba(0,0,0,0.18)] border-[16px] border-white transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_60px_120px_rgba(0,0,0,0.25)]">
                    <img src={images.part3Out2} className="w-full h-auto" alt="结果 2" />
                </div>
            </div>
        </div>

        {/* --- SECTION 4: IPAdapter Weight Variations --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48">
            <div className="flex flex-col gap-12 mb-16">
                <div className="flex items-center justify-between opacity-30">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 mx-8 bg-black"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-400 block">Weight Analysis</span>
                        <h3 className="text-4xl md:text-5xl font-serif italic text-black/80 font-bold leading-tight">
                            IP adapter 不同权重类型
                        </h3>
                        <p className="text-gray-500 text-lg italic leading-relaxed max-w-xl">
                            通过对比 Style Transfer 与 Linear 不同权重模式，探讨在保持结构严谨性的前提下，色彩氛围注入的边界与可能性。
                        </p>
                    </div>

                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center lg:items-end justify-end">
                        <div className="w-full md:w-64 bg-[#fcfcfc] border border-black/[0.05] p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-black/40">IPAdapter Modes</span>
                            </div>
                            <ul className="space-y-4 font-mono text-[10px] text-black/60">
                                <li className="flex justify-between border-b border-black/[0.03] pb-2">
                                    <span>Mode A</span>
                                    <span className="text-black font-bold">Style Transfer</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Mode B</span>
                                    <span className="text-black font-bold">Linear</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-32 flex flex-col gap-2">
                                <div className="aspect-[3/4] overflow-hidden border border-black/[0.05] shadow-inner">
                                    <img src={images.part4Original} className="w-full h-full object-cover grayscale" alt="原图" />
                                </div>
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest text-center">Original</span>
                            </div>
                            <div className="w-32 flex flex-col gap-2">
                                <div className="aspect-[3/4] overflow-hidden border border-black/[0.05] shadow-inner">
                                    <img src={images.part4Ref} className="w-full h-full object-cover" alt="风格图" />
                                </div>
                                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest text-center">Style Ref</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="group relative">
                    <div className="shadow-[0_40px_100px_rgba(0,0,0,0.18)] border-[16px] border-white transition-all duration-700 hover:scale-[1.02]">
                        <img src={images.part4OutStyle} className="w-full h-auto" alt="Style Transfer" />
                    </div>
                    <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-4 py-2 text-[10px] font-mono uppercase tracking-widest">
                        Weight: Style Transfer
                    </div>
                </div>
                <div className="group relative">
                    <div className="shadow-[0_40px_100px_rgba(0,0,0,0.18)] border-[16px] border-white transition-all duration-700 hover:scale-[1.02]">
                        <img src={images.part4OutLinear} className="w-full h-auto" alt="Linear" />
                    </div>
                    <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-4 py-2 text-[10px] font-mono uppercase tracking-widest">
                        Weight: Linear
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECTION 5: Future Pathway (Inspiration) --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48 bg-gradient-to-b from-white via-blue-50/10 to-white py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* Visionary Narrative Side */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] block font-bold">Future Potential</span>
                                <div className="h-[1px] w-12 bg-blue-500/20"></div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif italic text-black font-bold leading-tight">
                                生活中的艺术：<br/>从创作流到日常滤镜
                            </h3>
                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg">
                                我们正在探索一种更具“温度”的技术表达。想象在不远的将来，复杂的 ComfyUI 后端能以极其轻量化的插件形式，无缝融入每个人的生活瞬间。
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-black/5 pt-12">
                            <div className="space-y-4">
                                <h4 className="text-black font-bold text-base tracking-tight flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.3)]"></div>
                                    情绪感知滤镜
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    探索一种能“读懂”拍摄者情绪的 AI 系统，根据环境色温与语义，自动匹配最优的风格平移方案。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-black font-bold text-base tracking-tight flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.3)]"></div>
                                    移动端即时渲染
                                </h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    研究基于云端算力的实时风格对齐技术，致力于在移动端实现零延迟的图像重构方案。
                                </p>
                            </div>
                        </div>

                        <div className="pt-12 flex flex-col gap-4">
                             <p className="text-gray-400 text-[10px] font-mono italic tracking-wide">
                                "Technical Note: Exploring semantic logic integration in portable generation systems."
                             </p>
                             <div className="flex items-center gap-6">
                                 <div className="w-12 h-[1px] bg-black opacity-10"></div>
                                 <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                                    技术的终点是生活的日常。
                                 </p>
                             </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-12 gap-6 relative z-10">
                            <div className="col-span-12 md:col-span-8 aspect-[9/16] bg-white rounded-[48px] shadow-2xl border-[12px] border-black/[0.03] overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-10 grayscale group-hover:opacity-20 transition-all duration-1000" alt="Context" />
                                <div className="absolute inset-4 rounded-[36px] overflow-hidden shadow-inner border border-black/5">
                                    <img src={images.appOut1} className="w-full h-full object-cover" alt="Output" />
                                </div>
                            </div>

                            <div className="hidden md:flex col-span-4 flex-col gap-6 pt-12">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-[6px] border-white">
                                    <img src={images.appOut2} className="w-full h-full object-cover" alt="Apply 2" />
                                </div>
                                <div className="flex-1 rounded-3xl overflow-hidden shadow-xl border-[6px] border-white">
                                    <img src={images.appOut3} className="w-full h-full object-cover" alt="Apply 3" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full -z-0"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECTION 6: Typography Reconstruction (Typography Application) --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48 relative overflow-visible">
            <div className="flex flex-col gap-12 mb-24">
                <div className="flex items-center gap-6 opacity-20">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 bg-black"></div>
                </div>
                
                <div className="max-w-4xl">
                    <h3 className="text-2xl md:text-3xl font-serif italic text-black font-bold mb-6 tracking-tight">实际应用：轻松风格字体转换</h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
                        除了风景重塑，该工作流在字体材质实验中同样表现优越。通过对字体基础结构的精准捕捉，我们能实现从高透液态玻璃到精密纤维结构的瞬间跨越。
                    </p>
                </div>
            </div>

            {/* Typography Structured Grid - All on White backgrounds, clearly visible */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                
                {/* Left Side: Glass Materials (All White/Clean) */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="grid grid-cols-2 gap-8 items-end">
                        <div className="aspect-square bg-white shadow-xl border-4 border-white flex items-center justify-center p-8 overflow-hidden">
                            <img src={images.fontGlassA} className="max-h-full max-w-full object-contain" alt="Glass A" />
                        </div>
                        <div className="space-y-8">
                             <div className="aspect-[4/5] bg-white border border-black/[0.03] p-8 shadow-sm">
                                <img src={images.fontProcess1} className="w-full h-full object-contain opacity-60" alt="Process" />
                                <span className="text-[8px] font-mono text-gray-400 tracking-widest uppercase block mt-4">Structural Logic Input</span>
                             </div>
                             <div className="h-44 bg-white shadow-xl border-4 border-white flex items-center justify-center p-6 overflow-hidden">
                                <img src={images.fontGlassG} className="max-h-full max-w-full object-contain" alt="Glass G" />
                             </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="aspect-square bg-white shadow-lg border border-black/[0.03] p-8 flex items-center justify-center overflow-hidden">
                            <img src={images.fontGlassC} className="max-h-full max-w-full object-contain" alt="Glass C" />
                        </div>
                        <div className="aspect-square bg-white shadow-lg border border-black/[0.03] p-8 flex items-center justify-center overflow-hidden">
                            <img src={images.fontGlassI} className="max-h-full max-w-full object-contain" alt="Glass I" />
                        </div>
                        <div className="aspect-square bg-white shadow-lg border border-black/[0.03] p-8 flex items-center justify-center overflow-hidden">
                             <div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest text-center">
                                Material Spec<br/>01_Liquid
                             </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Fiber Materials (Uniform White Backgrounds, Original Red Colors) */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="aspect-square bg-white shadow-2xl border-4 border-white flex items-center justify-center p-12 relative group overflow-hidden">
                        <div className="absolute top-8 left-10 text-[9px] font-mono text-black/20 tracking-widest uppercase">Fiber Reconstruction</div>
                        <img src={images.fontFiberA} className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105 duration-1000" alt="Fiber A" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-8">
                             <div className="aspect-square bg-white shadow-xl border-4 border-white flex items-center justify-center p-8 overflow-hidden">
                                <img src={images.fontFiberG} className="max-h-full max-w-full object-contain" alt="Fiber G" />
                             </div>
                             <div className="aspect-[2/3] bg-white shadow-xl border-4 border-white flex items-center justify-center p-8 overflow-hidden">
                                <img src={images.fontFiberI} className="max-h-full max-w-full object-contain" alt="Fiber I" />
                             </div>
                        </div>
                        <div className="space-y-8">
                             <div className="aspect-[3/4] bg-white shadow-xl border-4 border-white flex items-center justify-center p-8 overflow-hidden">
                                <img src={images.fontFiberC} className="max-h-full max-w-full object-contain" alt="Fiber C" />
                             </div>
                             <div className="bg-gray-50/50 p-8 rounded-2xl space-y-4 border border-black/[0.03]">
                                <div className="h-0.5 w-full bg-black/5 relative">
                                    <div className="absolute left-0 top-0 h-full bg-red-600 w-[72%]"></div>
                                </div>
                                <span className="text-[8px] font-mono text-gray-400 tracking-widest uppercase">Consistent Weight</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECTION 7: Template Transformation (Sync Grid with Screenshot) --- */}
        <div className="h-[1px] w-full bg-black/[0.05] mb-20"></div>
        <div className="mb-48">
            <div className="flex flex-col gap-12 mb-20">
                <div className="flex items-center gap-6 opacity-20">
                    <span className="text-4xl font-serif italic tracking-tighter">PORTfolio</span>
                    <div className="h-[1px] flex-1 bg-black"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-black/80 tracking-tight">实际应用：轻松风格模板转换</h3>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
                {/* Row 1: [29] [33] [31] */}
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl29} className="w-full h-full object-cover" alt="Tmpl 29" />
                </div>
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl33} className="w-full h-full object-cover" alt="Tmpl 33" />
                </div>
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl31} className="w-full h-full object-cover" alt="Tmpl 31" />
                </div>

                {/* Row 2: [32] [30] [34] */}
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl32} className="w-full h-full object-cover" alt="Tmpl 32" />
                </div>
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl30} className="w-full h-full object-cover" alt="Tmpl 30" />
                </div>
                <div className="aspect-[3/2] bg-white shadow-sm border border-gray-100 p-1">
                    <img src={images.tmpl34} className="w-full h-full object-cover" alt="Tmpl 34" />
                </div>
            </div>
        </div>

        {/* --- SECTION 8: TikTok 2026 马年 Ident (Updated Visuals) --- */}
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
                {[images.tiktokVideo1, images.tiktokVideo2, images.tiktokVideo3].map((vSrc, i) => (
                    <div key={i} className="relative aspect-[9/16] bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-[4px] border-black overflow-hidden group">
                         <video 
                            src={vSrc} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                         />
                         {/* Subtle UI Decorations for a cleaner phone look */}
                         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-1 bg-black/10 rounded-full z-10"></div>
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/10 rounded-full z-10"></div>
                         
                         {/* Optional Hover Effect */}
                         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom Insight Block */}
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
                <div className="flex gap-4 flex-wrap">
                    {["Glass", "Fiber", "Logic", "Material", "Commercial"].map(tag => (
                        <span key={tag} className="px-5 py-2 border border-black/5 rounded-full text-[9px] font-mono text-black/40 uppercase tracking-widest bg-white">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* --- Simplified Footer Space --- */}
        <div className="max-w-5xl border-t border-black/[0.05] pb-24">
        </div>

    </div>
  );
};