import { Component, OnInit } from '@angular/core';
import { LanguageDetectionService } from "../../servieces/language-detection.service";
import { LanguageDetection } from "../../models/language-detection";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = "";
  clean: boolean = false;

  languageDetection: LanguageDetection;

  constructor(private languageDetectionService: LanguageDetectionService) { }

  ngOnInit(): void {
  }

  detectText() {
    this.languageDetectionService.getDetectedLanguage(this.text, this.clean).subscribe((languageDetection) => {
      this.languageDetection = languageDetection;
    })
  }

  hasText(): boolean {
    return this.text.length == 0;
  }

}