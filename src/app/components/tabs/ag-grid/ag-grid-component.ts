import {Component, Input, OnDestroy, AfterViewInit} from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
})


export class AgGridComponent implements OnDestroy, AfterViewInit{
  private gridOptions: GridOptions;
  @Input() rows: any;
  @Input() gridKey: string;

  constructor(
  ) {
    this.gridOptions = <GridOptions>{
      enableSorting :true,
      enableFilter :true,
      enableColResize :true,
      rowHeight :50,
      enableCellChangeFlash :true,
      //Enterprise
      enableStatusBar :true,
      enableRangeSelection :true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "name",
        field: "name",
        width: 100
      },
      {
        headerName: "data1",
        field: "data1",
        width: 100
      },
      {
        headerName: "time",
        field: "time",
        width: 150
      },
    ];
    this.gridOptions.rowData = [{name: 'default', data1: 3, time: Date.now}];
  }

  ngOnDestroy(){
    console.log("destroyed5");
    console.log("hmr");
  }
  ngAfterViewInit(){
    this.gridOptions.api.setRowData(this.rows);
  }
}
