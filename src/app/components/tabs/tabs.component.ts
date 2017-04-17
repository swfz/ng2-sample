import {Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import {AgGridComponent} from "./ag-grid/ag-grid-component";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  // styleUrls: ['hoge.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {

  private tabs: any;
  private gridElements: any;
  private currentGrid: AgGridComponent;
  private grids: any;

  @ViewChildren(AgGridComponent) viewChildren: QueryList<AgGridComponent>;

  ngAfterViewInit(){
    console.log(this.viewChildren);
    this.grids = this.viewChildren;


    console.log("grids");
    console.log(this.grids);
    this.grids.forEach(grid => {
      grid.gridOptions.api.setRowData(grid.rows);
    });
  }

  constructor() { }

  ngOnInit() {

    //　動的にタブが変わるサンプル
    this.tabs = [
      {title: 'Name1'},
      {title: 'Name2'},
      {title: 'Name3'},
    ];
  }

  dynamicTabChange(agGridTabs){
    agGridTabs.tabs = [];

    this.tabs = this.generateSampleTabs();

    console.log(this.tabs);
    console.log(agGridTabs);
  }

  private generateSampleTabs() {
    const titles = ['Title','Hoge','Fuga','Piyo','FOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!'];
    let sample = [];
    titles.forEach(title => {
      sample.push({
        title: title,
        active: false,
        rows: this.generateSampleRows()
      });
    });

    sample.push({title: 'Dynamic2', active: false, rows: this.generateSampleRows()});

    return sample;
  }

  private generateSampleRows() {
    const persons = ['Bob','Jhon','Mike'];
    let sample = [];
    Array(30).fill(100).forEach(n => {
      sample.push({name: persons[Math.floor(Math.random() * persons.length)], data1: Math.random() * n})
    });

    return sample;
  }

  dynamicTabTarget(key){
    let target = this.grids.find(g => g.gridKey == key);
    if(target){
      target.gridOptions.api.setRowData(target.rows);
      target.gridOptions.api.refreshView();
    }
  }

  removeTabHandler(tabz){
    console.log(tabz);
  }
}
