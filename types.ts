
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface WorkProcessStep {
  title: string;
  description: string;
  image?: string;
  note?: string;
}

export interface Comparison {
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export enum SectionType {
  HERO = 'hero',
  ABOUT = 'about',
  COMFYUI = 'comfyui',
  LORA = 'lora',
  SNAKE = 'snake',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}
