export interface Lod {
  wikipedia: string;
  dbpedia: string;
}

export interface Image {
  full: string;
  thumbnail: string;  
}

export interface Annotation {
  id: string;
  title: string;
  uri: string;
  label: string;
  confidence: number;
  spot: string;
  start: number;
  end: number;
  types: string[];
  categories?: string[];
  abstract: string;
  lod: Lod;
  alternateLabels: string[];
  image: Image
}

export interface TopEntity {
  id: string;
  uri: string;
  score: number;
}

export interface ExtractedEntity {
  timestamp: string;
  time: string;
  lang: string;
  langConfidence: number;
  text: string;
  annotations: Annotation[];
  topEntities: TopEntity[];
}