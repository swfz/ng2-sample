import {Component, OnInit, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import {AgGridComponent} from "./ag-grid/ag-grid-component";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
})
export class TabsComponent implements OnInit, AfterViewInit {

  private tabs: any;
  private currentGrid: AgGridComponent;
  private grids: any;

  @ViewChildren(AgGridComponent) viewChildren: QueryList<AgGridComponent>;

  ngAfterViewInit(){
    this.grids = this.viewChildren;
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

    this.grids.forEach(grid => {
      grid.gridOptions.api.setRowData(grid.rows);
    });
  }

  private generateSampleTabs() {
    const titles = [`Hoge${Math.random()}`,'Fuga','Piyo','FOO!!!'];
    let sample = [];
    titles.forEach(title => {
      sample.push({
        title: title,
        active: false,
        rows: this.generateSampleRows()
      });
    });

    sample.push({title: 'Dynamic2', active: true, rows: this.generateSampleRows()});

    return sample;
  }

  private generateSampleRows() {
    const persons = ['Bob','Jhon','Mike'];
    let sample = [];
    Array(30).fill(100).forEach(n => {
      sample.push({
        name: persons[Math.floor(Math.random() * persons.length)],
        data1: Math.random() * n,
        time: Date.now()
      })
    });

    return sample;
  }

  // dynamicTabTarget(key){
  //   let target = this.grids.find(g => g.gridKey == key);
  //   if(target){
  //     target.gridOptions.api.setRowData(target.rows);
  //     target.gridOptions.api.refreshView();
  //   }
  // }

  // refreshGrid(){
  //   let currentGrid = this.grids.find(g => g.gridKey == this.currentGrid.gridKey);
  //   currentGrid.gridOptions.api.setRowData(currentGrid.rows);
  // }

  removeTabHandler(tabz){
    console.log(tabz);
  }

  selectTab(tabz) {
    tabz.active = true;
    this.currentGrid = this.grids.find(g => g.gridKey == tabz.title);
  }
}
