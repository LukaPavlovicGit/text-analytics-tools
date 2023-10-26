import { Component } from '@angular/core';
import { History } from 'src/app/models/history';
import { HistoryService } from 'src/app/servieces/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    
  }

  getHistory(): History[] {
    return this.historyService.getHistory();
  }
}
