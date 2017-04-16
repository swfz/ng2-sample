import { Component } from '@angular/core';
import {MessageEventService} from "../../../service/message-event.service";

@Component({
  selector: 'app-form',
  template: `
<div>FormComponent</div>
<alert type="info">
  {{message}}
</alert>
`,
})
export class FugaFormComponent {

  private message: string;
  constructor(
    private messageEventService: MessageEventService
  ) {
    this.messageEventService.getEvent().subscribe(event => {
      this.message = event.name;
      console.log(event);
    });

  }
}
