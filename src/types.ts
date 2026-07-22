export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  color: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  phoneScreenMockup: string; // Dynamic simulated UI screen details
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface Alliance {
  id: string;
  name: string;
  type: 'Municipio' | 'Agencia' | 'Museo' | 'Guia';
  location: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
