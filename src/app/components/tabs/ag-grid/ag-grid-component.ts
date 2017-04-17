import {Component, Input, OnChanges, AfterViewInit, SimpleChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  // styleUrls: ['./ag-grid.component.scss']
})


export class AgGridComponent implements OnChanges, OnInit{
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
    ];
    this.gridOptions.rowData = [{name: 'default', data1: 3}];
  }

  ngOnInit(){
  }

  ngOnChanges(changes: any){
    // console.log(changes);
    // if(this.gridOptions.api){
    //   if(changes.rows){
    //     this.gridOptions.api.setRowData(this.rows);
    //   }
    // }
  }
}
