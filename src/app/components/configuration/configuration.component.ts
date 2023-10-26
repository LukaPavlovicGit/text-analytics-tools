import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  token: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  setToken() {
    if(this.token.length != 0) {
      localStorage.setItem("token", this.token);
      this.token = '';
    }
  }

  isTokenEmpty(): boolean {
    const saved = localStorage.getItem("get");
    return saved !== null && saved !== undefined && saved !== '';
  }
}
