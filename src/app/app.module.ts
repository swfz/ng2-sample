import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
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

import * as bootstrap from 'ngx-bootstrap';
import {AgGridModule} from 'ag-grid-angular/main';
import {AgGridComponent} from "./components/tabs/ag-grid/ag-grid-component";

import * as Raven from 'raven-js';
import { SwitchComponent } from './components/switch/switch.component';
import { FooComponent } from './components/switch/foo/foo.component';
import { BarComponent } from './components/switch/bar/bar.component';
import { DifferComponent } from './components/differ/differ.component';
// Raven
//   .config('http://a2d8c478d3ea4bf9ba47f197bc548007@192.168.30.14:8080/2')
//   .install();

// export class RavenErrorHandler implements ErrorHandler {
//   handleError(err:any) : void {
//     Raven.captureException(err.originalError);
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FugaComponent,
    FugaDataComponent,
    FugaFormComponent,
    TabsComponent,
    AgGridComponent,
    TopComponent,
    SwitchComponent,
    FooComponent,
    BarComponent,
    DifferComponent
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
    // {provide: ErrorHandler, useClass: RavenErrorHandler},
    MessageEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
