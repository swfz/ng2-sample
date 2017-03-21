import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HogeComponent} from "./hoge/hoge.component";
import {FugaComponent} from "./fuga/fuga.component";

const appRoutes: Routes = [
  { path: 'hoge', component: HogeComponent },
  { path: 'fuga', component: FugaComponent },
  { path: '', redirectTo: '/hoge', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
