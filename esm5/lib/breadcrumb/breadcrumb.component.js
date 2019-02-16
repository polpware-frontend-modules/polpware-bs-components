/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {number} */
var ActionKind = {
    NO_ACTION: 0,
    URL_LINK: 1,
    ROUTER_LINK: 2,
    CUSTOM_ACTION: 3,
};
export { ActionKind };
ActionKind[ActionKind.NO_ACTION] = 'NO_ACTION';
ActionKind[ActionKind.URL_LINK] = 'URL_LINK';
ActionKind[ActionKind.ROUTER_LINK] = 'ROUTER_LINK';
ActionKind[ActionKind.CUSTOM_ACTION] = 'CUSTOM_ACTION';
/**
 * @record
 */
export function IBreadcrumbItem() { }
if (false) {
    /** @type {?} */
    IBreadcrumbItem.prototype.title;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.routerLink;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.url;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.action;
    /** @type {?|undefined} */
    IBreadcrumbItem.prototype.kind;
}
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
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.interItems;
    /** @type {?} */
    BreadcrumbComponent.prototype.activeItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBR3JELFlBQWE7SUFDYixXQUFZO0lBQ1osY0FBZTtJQUNmLGdCQUFpQjs7Ozs7Ozs7OztBQUdyQixxQ0FNQzs7O0lBTEcsZ0NBQWM7O0lBQ2QscUNBQW9COztJQUNwQiw4QkFBYTs7SUFDYixpQ0FBb0I7O0lBQ3BCLCtCQUFrQjs7Ozs7O0FBUXRCO0lBWUk7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBRUksbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQztZQUNoQixJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQ25DO2lCQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNqQixDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxrREFBa0Q7UUFDbEQsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLGtCQUFrQjtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDOztnQkExQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDZsQ0FBMEM7O2lCQUU3Qzs7Ozs7d0JBR0ksS0FBSyxTQUFDLE9BQU87O0lBcUNsQiwwQkFBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLG1CQUFtQjs7O0lBRTVCLG9DQUF5Qzs7SUFFekMseUNBQThCOztJQUM5Qix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gQWN0aW9uS2luZCB7XG4gICAgTk9fQUNUSU9OID0gMCxcbiAgICBVUkxfTElOSyA9IDEsXG4gICAgUk9VVEVSX0xJTksgPSAyLFxuICAgIENVU1RPTV9BQ1RJT04gPSAzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkY3J1bWJJdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHJvdXRlckxpbms/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGFjdGlvbj86ICgpID0+IHZvaWQ7XG4gICAga2luZD86IEFjdGlvbktpbmQ7XG59XG5cbi8qXG4gUHJlc3VtcHRpb25zOiBcbiAxLiBpdGVtcyBhcmUgZml4ZWQgYXQgdGhlIG1vbWVudCBvZiBwYWdlIGluaXRcbiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1icmVhZGNydW1iJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCdpdGVtcycpIGl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXTtcblxuICAgIGludGVySXRlbXM6IElCcmVhZGNydW1iSXRlbVtdO1xuICAgIGFjdGl2ZUl0ZW06IElCcmVhZGNydW1iSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmludGVySXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICAvLyBQcmUtcHJvY2VzcyBkYXRhXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnJvdXRlckxpbmspIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLlJPVVRFUl9MSU5LO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnVybCkge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuVVJMX0xJTks7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5DVVNUT01fQUNUSU9OO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLk5PX0FDVElPTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IHVwIGludGVySXRlbXMgYW5kIGFjdGl2ZUl0ZW0sIGFuZCBpdGVtcyBhcmVcbiAgICAgICAgLy8gZml4ZWQgdGhpcyBtb21lbnQgYW5kIHRodXMgaW50ZXJJdGVtcyBhbmQgYWN0aXZlSXRlbVxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTcGxpdCB0aGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVySXRlbXMucHVzaCh0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=