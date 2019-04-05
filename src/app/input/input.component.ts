import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() properties: any;
  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onUpdateValue(val: number) {
    this.updateValue.emit({ type: this.properties.name, value: val });
  }

}
