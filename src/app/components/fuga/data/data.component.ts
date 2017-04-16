import { Component } from '@angular/core';
import {MessageEventService} from "../../../service/message-event.service";

@Component({
  selector: 'app-data',
  template: `
<div>DataComponent</div>
<button class="btn btn-primary" (click)="sendService('hoge!!!')">
  Send Hoge Message!
</button>
<button class="btn btn-primary" (click)="sendService('fuga!!!')">
  Send Fuga Message!
</button>
`,
})
export class FugaDataComponent {

  constructor(
    private messageEventService: MessageEventService
  ) {
  }

  sendService(name: string) {
    this.messageEventService.sendEvent({name: name})
  }
}

