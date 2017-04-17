import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HogeComponent} from "./components/hoge/hoge.component";
import {FugaComponent} from "./components/fuga/fuga.component";
import {TopComponent} from "./components/top/top.component";
import {TabsComponent} from "./components/tabs/tabs.component";

const appRoutes: Routes = [
  { path: 'hoge', component: HogeComponent },
  { path: 'fuga', component: FugaComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'top', component: TopComponent },
  { path: '', redirectTo: '/top', pathMatch: 'full'},
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
