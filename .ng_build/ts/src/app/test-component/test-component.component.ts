import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-test-component',
  template: `
    <p>
      test-component works!
      <ion-checkbox></ion-checkbox>
    </p>
  `,
  styles: [`
    :host {
      color: red; }
  `]
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
