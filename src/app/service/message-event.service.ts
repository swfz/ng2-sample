import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()

export class MessageEventService {
  private subject = new Subject<any>();

  constructor() {}

  sendEvent(event: any){
    this.subject.next({ name: event.name})
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}


