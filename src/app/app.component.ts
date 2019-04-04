import { Component } from '@angular/core';
import { Service } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  x: number;
  y: number;
  itemId: string;

  constructor(private service: Service) { }

  getItemId() {
    if (null != this.x && null != this.y && this.x > 0 && this.y > 0) {
      this.service.getItemId({ x: this.x, y: this.y }).subscribe(retVal => {
        this.itemId = retVal;
      });
    } else {
      this.itemId = null;
    }

  }





}
