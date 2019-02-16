import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ActionKind = {
    NO_ACTION: 0,
    URL_LINK: 1,
    ROUTER_LINK: 2,
    CUSTOM_ACTION: 3,
};
ActionKind[ActionKind.NO_ACTION] = 'NO_ACTION';
ActionKind[ActionKind.URL_LINK] = 'URL_LINK';
ActionKind[ActionKind.ROUTER_LINK] = 'ROUTER_LINK';
ActionKind[ActionKind.CUSTOM_ACTION] = 'CUSTOM_ACTION';
/*
 Presumptions:
 1. items are fixed at the moment of page init
*/
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.interItems = [];
        this.activeItem = null;
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Pre-process data
        this.items.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.routerLink) {
                e.kind = ActionKind.ROUTER_LINK;
            }
            else if (e.url) {
                e.kind = ActionKind.URL_LINK;
            }
            else if (e.action) {
                e.kind = ActionKind.CUSTOM_ACTION;
            }
            else {
                e.kind = ActionKind.NO_ACTION;
            }
        }));
        // Set up interItems and activeItem, and items are
        // fixed this moment and thus interItems and activeItem
        if (this.items.length > 0) {
            // Split the array
            for (var i = 0; i < this.items.length - 1; i++) {
                this.interItems.push(this.items[i]);
            }
            this.activeItem = this.items[this.items.length - 1];
        }
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'polp-bs-breadcrumb',
                    template: "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n</nav>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        items: [{ type: Input, args: ['items',] }]
    };
    return BreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BreadcrumbComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [
                        BreadcrumbComponent
                    ]
                },] }
    ];
    return PolpBsComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActionKind, BreadcrumbComponent, PolpBsComponentsModule };

//# sourceMappingURL=polpware-bs-components.js.map