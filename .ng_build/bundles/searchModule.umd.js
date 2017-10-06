(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.searchModule = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var TestComponentComponent = (function () {
    function TestComponentComponent() {
    }
    /**
     * @return {?}
     */
    TestComponentComponent.prototype.ngOnInit = function () {
    };
    return TestComponentComponent;
}());
TestComponentComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'bc-test-component',
                template: "\n    <p>\n      test-component works!\n      <ion-checkbox></ion-checkbox>\n    </p>\n  ",
                styles: ["\n    :host {\n      color: red; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
TestComponentComponent.ctorParameters = function () { return []; };

exports.TestComponentComponent = TestComponentComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=searchModule.umd.js.map
