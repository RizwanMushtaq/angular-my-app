import { Component } from '@angular/core';

@Component({
  selector: 'warningAlert',
  template: `<div>Warning Alert</div>`,
  styles: [
    `
      div {
        color: orange;
        font-size: 28px;
      }
    `,
  ],
})
export class warningAlertComponent {}
