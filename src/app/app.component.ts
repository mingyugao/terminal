import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getLineNumbers = range => {
    const numbers = [];
    for (let i = 1; i <= range; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  titleText = '1. vim';
  lineNumbers = this.getLineNumbers(30);
}
