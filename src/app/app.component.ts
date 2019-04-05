import { Component } from '@angular/core';
import { Service } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemId = '-';
  xProperties = {
    label: 'X',
    name: 'x',
    value: null
  };
  yProperties = {
    label: 'Y',
    name: 'y',
    value: null
  }

  constructor(private service: Service) { }



  getItemId() {
    if (null != this.xProperties.value && null != this.yProperties.value && this.xProperties.value > 0 && this.yProperties.value > 0) {
      this.service.getItemId({ x: this.xProperties.value, y: this.yProperties.value }).subscribe(retVal => {
        this.itemId = retVal;
      });
    } else {
      this.itemId = '-';
    }

  }

  updateValue(data) {
    this[`${data.type}Properties`].value = data.value;
    this.getItemId();
  }





}
