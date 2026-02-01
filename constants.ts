
import { Project, WorkProcessStep } from './types';

export const ABOUT_DATA = {
  name: "叶运优 (Ye Yunyou)",
  birth: "2003.12",
  school: "广州美术学院 (GAFA)",
  major: "跨媒体艺术学院 - 2026届 (科技艺术)",
  type: "ENFP",
  avatarUrl: "https://raw.githubusercontent.com/yunyouye28-del/portfolio-video/main/Avatar.jpg",
  bio: "深耕于传统叙事电影与机械装置逻辑的交汇点。我擅长以导演思维主导创作，利用 AIGC 技术重塑视觉表达。从实拍短片的情感捕捉到数字媒介的理性构建，我致力于在技术演进中寻找最动人的叙事表达。",
  skills: ["Figma 界面设计", "剪映/PR 视频后期", "ComfyUI 工作流构建", "AIGC 图像/动态生成", "提示词工程 (Prompt Engineering)"]
};

export const COMFY_PROCESS: WorkProcessStep[] = [
  {
    title: "1. 结构与骨架",
    description: "利用 ControlNet 多模型协同（IP-Adapter, Canny, Depth）完成从生物骨架到肌理皮肤的视觉生成。",
    image: "https://picsum.photos/id/237/600/400",
    note: "调整高低阈值至 0.3 以捕捉微弱边缘。"
  },
  {
    title: "2. 风格注入",
    description: "分析参考图（如 analogMadness_v50）反向推导视觉元素，利用 LLM 生成精准提示词。",
    image: "https://picsum.photos/id/16/600/400"
  },
  {
    title: "3. 语义控制",
    description: "通过调整 IPAdapter 的 'end_at' 参数（0.7-0.8）解决风景生成中的“幽灵人像”问题。",
    note: "让风格注入提前停止，使模型自然回归风景逻辑。"
  }
];

export const GALLERY_ITEMS: Project[] = [
  {
    id: "p-river",
    title: "River",
    category: "短片 / Short Film",
    description: "关于水流与时间连续性的实验性捕捉。",
    imageUrl: "https://picsum.photos/id/1015/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/River1.mp4"
  },
  {
    id: "p-dragon-boat",
    title: "Dragon Boat",
    category: "短片 / Short Film",
    description: "传统龙舟叙事的影像化表达。",
    imageUrl: "https://picsum.photos/id/1015/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/Dragon.Boat1.mp4"
  },
  {
    id: "p-alice",
    title: "What happened to Alice",
    category: "实验影像 / Experimental",
    description: "超现实主义视觉叙事。",
    imageUrl: "https://picsum.photos/id/1049/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/What.Happened.To.Alice1.mp4"
  },
  {
    id: "p-museum",
    title: "Finding the Art Museum",
    category: "短片 / Short Film",
    description: "一场穿越艺术空间与建筑逻辑的旅程。",
    imageUrl: "https://picsum.photos/id/1018/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/looking.for.art.museum.mp4"
  },
  {
    id: "p-paya",
    title: "Paya Concerto",
    category: "数字短片 / Digital",
    description: "音频节奏与视觉形态的数字合成。",
    imageUrl: "https://picsum.photos/id/1019/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/Paya.Concerto1.mp4"
  },
  {
    id: "p-women",
    title: "Women's Day",
    category: "短片 / Short Film",
    description: "关于性别、身份与社会观察的主题探讨。",
    imageUrl: "https://picsum.photos/id/1011/800/450",
    videoUrl: "https://github.com/yunyouye28-del/portfolio-video/releases/download/v1.0/Women.s.Day1.mp4"
  }
];
