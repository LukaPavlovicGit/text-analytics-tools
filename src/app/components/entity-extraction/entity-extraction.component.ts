import { Component } from '@angular/core';
import { EntityExtractionService } from "../../servieces/entity-extraction.service";
import { ExtractedEntity } from 'src/app/models/entity-extraction';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent {

  text: string = '';
  minConfidence: number = 1;
  image: boolean = false;
  abstract: boolean = false;
  categories: boolean = false;

  entity: ExtractedEntity;

  constructor(private entityExtractionService: EntityExtractionService) { }

  ngOnInit(): void {

  }

  hasText(): boolean {
    return this.text.length == 0;
  }

  fetchEntities() {
    let args: string[] = []

    if(this.image)
      args.push("image")
    if(this.abstract)
      args.push("abstract")
    if(this.categories)
      args.push("categories")

    this.entityExtractionService.getEntityExtractions(this.text, this.minConfidence, args).subscribe((entity) => {
        this.entity = entity;
    })
  }

} 