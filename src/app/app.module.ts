import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HogeComponent } from './components/hoge/hoge.component';
import { FugaComponent } from './components/fuga/fuga.component';
import { TopComponent } from './components/top/top.component';
import {FugaDataComponent} from "./components/fuga/data/data.component";
import {FugaFormComponent} from "./components/fuga/form/form.component";
import {TabsComponent} from "./components/tabs/tabs.component";

import {MessageEventService} from "./service/message-event.service";

import {AppRoutingModule} from "./app.routing.module";

import * as bootstrap from 'ng2-bootstrap';
import {AgGridModule} from 'ag-grid-angular/main';
import {AgGridComponent} from "./components/tabs/ag-grid/ag-grid-component";

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FugaComponent,
    FugaDataComponent,
    FugaFormComponent,
    TabsComponent,
    AgGridComponent,
    TopComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([]),
    bootstrap.AlertModule.forRoot(),
    bootstrap.TabsModule.forRoot()
  ],
  providers: [
    MessageEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
