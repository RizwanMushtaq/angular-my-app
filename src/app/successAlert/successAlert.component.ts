import { Component } from '@angular/core';

@Component({
  selector: 'successAlert',
  template: `<div>Success Alert</div>`,
  styles: [
    `
      div {
        color: green;
        font-size: 28px;
      }
    `,
  ],
})
export class successAlertComponent {}
