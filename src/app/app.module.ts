import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HogeComponent } from './hoge/hoge.component';
import { FugaComponent } from './fuga/fuga.component';
import {AppRoutingModule} from "./app.routing.module";

import * as bootstrap from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FugaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    bootstrap.AlertModule.forRoot(),
    bootstrap.TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
