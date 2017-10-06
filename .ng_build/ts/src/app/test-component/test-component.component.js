import { Component } from '@angular/core';
export class TestComponentComponent {
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
function TestComponentComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TestComponentComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TestComponentComponent.ctorParameters;
}
//# sourceMappingURL=test-component.component.js.map