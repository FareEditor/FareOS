export type Difficulty = 'easy' | 'medium' | 'hard';

export interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
  difficulty?: Difficulty;
  text: string;
  url: string;
}

export interface VideoData {
  fullLength: VideoItem[];
  vertical: VideoItem[];
  motionGraphics: VideoItem[];
}

export type SectionType = 'About Me' | 'Full-Length Videos' | 'Vertical Videos' | 'Motion Graphics' | 'Contact Me' | 'Terminal';