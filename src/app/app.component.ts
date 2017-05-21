import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public path: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ){
    this._router.events.subscribe(event => {
      console.log(event);
      if(event instanceof NavigationEnd){
        this.path = event.url;
        console.log(event);
        console.log(this._activatedRoute);
        console.log("navigation Changed");
      }
    });
  }
}
