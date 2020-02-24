import { BehaviorSubject } from 'rxjs';
import { Component, Input, Injectable, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ActionKind = {
    NO_ACTION: 0,
    URL_LINK: 1,
    ROUTER_LINK: 2,
    CUSTOM_ACTION: 3,
};
ActionKind[ActionKind.NO_ACTION] = 'NO_ACTION';
ActionKind[ActionKind.URL_LINK] = 'URL_LINK';
ActionKind[ActionKind.ROUTER_LINK] = 'ROUTER_LINK';
ActionKind[ActionKind.CUSTOM_ACTION] = 'CUSTOM_ACTION';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 Presumptions:
 1. items are fixed at the moment of page init
*/
class BreadcrumbComponent {
    constructor() {
        this.items = [];
        this.listClasses = 'breadcrumb';
        this.inactiveItemClasses = 'breadcrumb-item';
        this.activeItemClasses = 'breadcrumb-item active';
        this.interItems = [];
        this.activeItem = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.update();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        // Pre-process data
        this.items.forEach(e => {
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
        });
        this.interItems = [];
        this.activeItem = null;
        // Set up interItems and activeItem, and items are
        // fixed this moment and thus interItems and activeItem
        if (this.items.length > 0) {
            // Split the array
            for (let i = 0; i < this.items.length - 1; i++) {
                this.interItems.push(this.items[i]);
            }
            this.activeItem = this.items[this.items.length - 1];
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'polp-bs-breadcrumb',
                template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n",
                styles: [""]
            }] }
];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }],
    listClasses: [{ type: Input }],
    inactiveItemClasses: [{ type: Input }],
    activeItemClasses: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbClipboardService {
    constructor() {
        this.clipboard = new BehaviorSubject([]);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    paste(items) {
        this.clipboard.next(items);
    }
}
BreadcrumbClipboardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BreadcrumbClipboardService.ctorParameters = () => [];
/** @nocollapse */ BreadcrumbClipboardService.ngInjectableDef = defineInjectable({ factory: function BreadcrumbClipboardService_Factory() { return new BreadcrumbClipboardService(); }, token: BreadcrumbClipboardService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PolpBsComponentsModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActionKind, BreadcrumbComponent, BreadcrumbClipboardService, PolpBsComponentsModule };

//# sourceMappingURL=polpware-bs-components.js.map