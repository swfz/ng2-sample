import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  private fooParams: any = [
    {name: "bob", age: 20},
    {name: "joe", age: 30},
    {name: "mike", age: 25},
  ];

  private barParams: any = [
    {name: "ryan", age: 40, bloodType: "A"},
    {name: "john", age: 36, bloodType: "B"},
  ];

  ngOnInit() {
  }

}
