import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor() { }
  @Input() params: any;

  ngOnInit() {
  }

}
