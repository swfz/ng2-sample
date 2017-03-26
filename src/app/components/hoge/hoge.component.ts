import { Component, OnInit } from '@angular/core';
import {Units,Unit} from "../../models/unit";

@Component({
  selector: 'app-hoge',
  templateUrl: 'hoge.component.html',
  styleUrls: ['hoge.component.scss']
})
export class HogeComponent implements OnInit {
  private units: Units<Unit>;

  constructor() { }

  ngOnInit() {

    let units = [
      {value: 'a', display: '項目1', selected: false},
      {value: 'b', display: '項目2', selected: true},
      {value: 'c', display: '項目3', selected: false},
      {value: 'd', display: '項目4', selected: false},
      {value: 'e', display: '項目5', selected: false},
    ];
    // ].map(r => new Unit(r));

    this.units = new Units<Unit>(...units);

    console.log(this.units.filter(u => u.selected));

    // let a = [1,2,3];
    // let b = new Units<number>(...a);
    //
    // b.forEach(n => {
    //   console.log(n);
    // });
    //
  }

  private onUnitChange(selectedUnit: string){
    console.log("unit changed");
  }
}
