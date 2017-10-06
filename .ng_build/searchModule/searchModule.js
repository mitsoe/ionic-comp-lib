import { Component } from '@angular/core';

class TestComponentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestComponentComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/**
 * @nocollapse
 */
TestComponentComponent.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { TestComponentComponent };
//# sourceMappingURL=searchModule.js.map
