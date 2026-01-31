import React from 'react';

export const LoraSection: React.FC = () => {
  const baseUrl = "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/";
  
  const assets = {
    showcaseVideo: `${baseUrl}lora%20video.mp4`,
    mainArt: `${baseUrl}part2-01.png`,
    datasetImg: `${baseUrl}part2-02.png`,
    liquidDrop: `${baseUrl}part1-21.png`,
    // 对照组资源
    img03: `${baseUrl}part2-03.png`,
    img04: `${baseUrl}part2-04.png`,
    img05: `${baseUrl}part2-05.png`,
    img06: `${baseUrl}part2-06.png`,
    img07: `${baseUrl}part2-07.png`,
    img08: `${baseUrl}part2-08.png`,
    // 物品材质实验资源
    img09: `${baseUrl}part2-09.png`,
    img10: `${baseUrl}part2-10.png`, 
    img11: `${baseUrl}part2-11.png`,
    img12: `${baseUrl}part2-12.png`,
    img13: `${baseUrl}part2-13.png`,
    img14: `${baseUrl}part2-14.png`,
  };

  const comparisons = [
    { base: assets.img03, lora: assets.img04, title: "形态重构 / Structural Reorganization", desc: "通过 Lora 对复杂廓形的收敛能力，使服装结构更符合高定秀场的剪裁逻辑。" },
    { base: assets.img05, lora: assets.img06, title: "材质增益 / Material Enhancement", desc: "强化了织物细节与光影表现，使生成结果具备高级时装的理性美感。" },
    { base: assets.img08, lora: assets.img07, title: "骨架模拟 / Biological Mimicry", desc: "在结构化生成上，Lora 提供了更具张力且理性的设计细节，还原真实秀场廓形。" }
  ];

  const objectTests = [
    { base: assets.img09, loras: [assets.img10, assets.img11], title: "非生物材质实验 A" },
    { base: assets.img12, loras: [assets.img13, assets.img14], title: "非生物材质实验 B" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* --- 顶部展示视频 --- */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-black rounded-[2px] overflow-hidden mb-32 shadow-2xl relative group">
            <video 
                key={assets.showcaseVideo}
                src={assets.showcaseVideo}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
                onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    if (!target.src.includes('lora_video')) {
                        target.src = `${baseUrl}lora_video.mp4`;
                    }
                }}
            />
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute bottom-8 left-8">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.5em] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
                    视觉展示 / Lora 动态提取测试
                </span>
            </div>
        </div>

        {/* --- 主视觉展示 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-48 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/[0.02]">
            <div className="lg:col-span-7 aspect-[3/4] lg:aspect-auto overflow-hidden bg-white">
                <img 
                    src={assets.mainArt} 
                    alt="秀场高定设计" 
                    className="w-full h-full object-cover object-top"
                />
            </div>

            <div className="lg:col-span-5 p-12 md:p-24 flex flex-col justify-between relative bg-[#f1f3f2]">
                <div className="space-y-32">
                    <h3 className="text-5xl md:text-7xl font-serif text-black/90 tracking-tight leading-none italic">
                        Couture Design
                    </h3>
                    
                    <div className="space-y-12 max-w-sm">
                        <p className="text-xl md:text-2xl text-black/80 leading-[1.8] font-light tracking-wide">
                            探索高定秀场（Haute Couture）中的无机质形态美学。通过对经典视觉符号的训练提取，构建了一套可控的 AIGC 视觉生成系统。
                        </p>
                        <div className="w-16 h-[0.5px] bg-black/20"></div>
                        <p className="text-[11px] font-mono text-black/40 uppercase tracking-[0.3em] leading-loose">
                            RESEARCH ON THE BOUNDARY BETWEEN ORGANIC BIOLOGY AND MECHANICAL TEXTURE.
                        </p>
                    </div>
                </div>

                {/* 动态液态装饰 */}
                <div className="absolute bottom-16 right-16 w-32 h-32 opacity-90 drop-shadow-2xl">
                    <img 
                        src={assets.liquidDrop} 
                        className="w-full h-full object-contain rotate-12 animate-float" 
                        alt="液态装饰"
                        style={{ animationDuration: '4s' }}
                    />
                </div>
            </div>
        </div>

        {/* --- Lora 对照组展示 --- */}
        <div className="mb-48 space-y-48">
            <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block">效果对比 / Comparative Analysis</span>
                <h4 className="text-3xl md:text-4xl font-serif italic font-bold">设计权重增强：FLUX 秀场测试</h4>
                <div className="h-[1px] w-full bg-black/5"></div>
            </div>

            {comparisons.map((item, idx) => (
                <div key={idx} className="space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-6">
                        <h5 className="text-xl font-medium tracking-tight border-l-4 border-black pl-6">{item.title}</h5>
                        <p className="text-gray-400 text-sm italic max-w-md">{item.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* 基础生成 */}
                        <div className="group relative">
                            <div className="aspect-[3/4] bg-gray-50 overflow-hidden shadow-sm border border-black/[0.03] transition-all duration-700 group-hover:shadow-xl">
                                <img 
                                    src={item.base} 
                                    className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                                    alt="基础模型生成" 
                                />
                            </div>
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-black/5 shadow-sm">
                                    <span className="text-[10px] font-sans font-bold tracking-widest text-gray-400 uppercase">基础模型生成</span>
                                </div>
                            </div>
                        </div>

                        {/* Lora 增强 */}
                        <div className="group relative">
                            <div className="aspect-[3/4] bg-gray-50 overflow-hidden shadow-2xl border border-black/[0.03] transition-all duration-700 group-hover:scale-[1.01]">
                                <img 
                                    src={item.lora} 
                                    className="w-full h-full object-cover object-top transition-all duration-700" 
                                    alt="设计 Lora 增强" 
                                />
                            </div>
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <div className="bg-black text-white px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-2 ring-4 ring-black/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                    <span className="text-[10px] font-sans font-bold tracking-widest uppercase">设计 LORA 增强</span>
                                </div>
                            </div>
                            {/* 悬浮装饰物 */}
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-1000 rotate-45">
                                <img src={assets.liquidDrop} className="w-full h-full object-contain" alt="decor" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- 物品材质实验 (09-14) --- */}
        <div className="mb-48 space-y-24">
            <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block">材质迁移实验 / Material Synthesis</span>
                <h4 className="text-3xl md:text-4xl font-serif italic font-bold">无机物质感与设计平衡</h4>
                <div className="h-[1px] w-full bg-black/5"></div>
            </div>

            <div className="space-y-32">
                {objectTests.map((group, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 基础图片 (09 / 12) */}
                        <div className="group relative">
                            <div className="aspect-square bg-white overflow-hidden border border-black/[0.05] shadow-sm">
                                <img src={group.base} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" alt="基础模型生成" />
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-white/80 backdrop-blur-sm px-3 py-1 text-[9px] font-bold tracking-widest text-gray-400 uppercase border border-black/5">基础模型生成</span>
                            </div>
                        </div>
                        {/* Lora 增强图片 (修复 10 号图) */}
                        {group.loras.map((loraImg, lIdx) => (
                            <div key={lIdx} className="group relative">
                                <div className="aspect-square bg-white overflow-hidden shadow-xl border border-black/[0.02] transition-transform duration-700 hover:scale-[1.03]">
                                    <img src={loraImg} className="w-full h-full object-cover" alt="设计 Lora 增强" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-black text-white px-3 py-1 text-[9px] font-bold tracking-widest uppercase shadow-2xl flex items-center gap-2">
                                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                                        设计 LORA 增强
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        {/* --- 数据介绍面板 --- */}
        <div className="mb-48">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 space-y-16 py-12 border-t border-black/5">
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block">基础模型 / Base Model</span>
                        <p className="text-2xl font-serif italic text-black font-bold">FLUX.1-dev</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block">触发词 / Trigger Key</span>
                        <div className="inline-block bg-[#1a1a1a] text-white px-5 py-2 rounded-sm text-xs font-mono shadow-xl uppercase tracking-widest">
                            couture_logic
                        </div>
                    </div>
                </div>

                <div className="md:col-span-8 bg-gray-50/50 p-12 border border-black/[0.03] rounded-sm group">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 block">数据介绍 / Dataset Spec</span>
                            <h4 className="text-2xl font-serif italic font-bold">高精度语料库构建</h4>
                            <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                                筛选 20+ 张来自高定设计档案的高清图像。
                                重点针对<span className="text-black font-medium italic underline decoration-black/10">服装结构化剪裁</span>与<span className="text-black font-medium italic underline decoration-black/10">材质细腻度</span>进行深度学习，确保生成结果具备极高的设计感与专业审美。
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="relative aspect-square overflow-hidden bg-white shadow-2xl border-8 border-white">
                                <img 
                                    src={assets.datasetImg} 
                                    alt="数据集展示" 
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- 极简底部装饰 --- */}
        <div className="flex justify-between items-center opacity-10 mb-12">
            <div className="h-[1px] flex-1 bg-black"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-black mx-12">AIGC Specialist Archive</span>
            <div className="h-[1px] flex-1 bg-black"></div>
        </div>
    </div>
  );
};