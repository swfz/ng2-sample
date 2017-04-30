import { Component, OnInit, KeyValueDiffers,KeyValueDiffer,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-differ',
  templateUrl: './differ.component.html',
  styleUrls: ['./differ.component.scss']
})
export class DifferComponent implements OnInit {

  private differ: KeyValueDiffer;

  private diffResult: any = {};

  constructor(
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {

    const simpleHashBefore = {a: "AAAA", c: "d"};
    const simpleHashAfter  = {a: "AAAA", c: "d", e: "f"};

    this.differ = this.keyValueDiffers.find(simpleHashBefore).create(this.changeDetector);
    const simpleHashDiff = this.differ.diff(simpleHashAfter);
    console.log(simpleHashDiff);
    console.log(simpleHashDiff.isDirty);
    console.log('json',JSON.stringify(simpleHashBefore) !== JSON.stringify(simpleHashAfter));
    this.diffResult['simpleHash'] = simpleHashDiff;

    const nestHashBefore = {
      a: {
        bb: "bbb",
        dd: "eee"
      },
      b: {
        tt: "jjj",
        uu: "ppp"
      }
    };
    const nestHashAfter = {
      a: {
        bb: "bbb",
        dd: "eee"
      },
      b: {
        tt: "jjj",
        uu: "ppp"
      }
    };

    this.differ = this.keyValueDiffers.find(nestHashBefore).create(this.changeDetector);
    const nestHashDiff = this.differ.diff(nestHashAfter);
    console.log(nestHashDiff);
    console.log(nestHashDiff.isDirty);
    console.log('json', JSON.stringify(nestHashBefore) !== JSON.stringify(nestHashAfter));
    this.diffResult['nestHash'] = nestHashDiff;
  }
}
