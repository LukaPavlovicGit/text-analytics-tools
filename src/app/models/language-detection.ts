export interface LanguageDetection {
  timestamp: string,
  time: number,
  detectedLangs: Language[]
}

export interface Language {
  lang: string,
  confidence: number
}