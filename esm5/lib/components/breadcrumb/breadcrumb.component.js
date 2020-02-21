/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ActionKind } from '../../models/breadcrumb.interface';
/*
 Presumptions:
 1. items are fixed at the moment of page init
*/
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
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
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.update();
    };
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.update();
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        // Pre-process data
        this.items.forEach(function (e) {
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
                    template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n",
                    styles: [""]
                }] }
    ];
    BreadcrumbComponent.propDecorators = {
        items: [{ type: Input }],
        listClasses: [{ type: Input }],
        inactiveItemClasses: [{ type: Input }],
        activeItemClasses: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.listClasses;
    /** @type {?} */
    BreadcrumbComponent.prototype.inactiveItemClasses;
    /** @type {?} */
    BreadcrumbComponent.prototype.activeItemClasses;
    /** @type {?} */
    BreadcrumbComponent.prototype.interItems;
    /** @type {?} */
    BreadcrumbComponent.prototype.activeItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFPM0M7SUFBQTtRQU9hLFVBQUssR0FBc0IsRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ25DLHdCQUFtQixHQUFXLGlCQUFpQixDQUFDO1FBQ2hELHNCQUFpQixHQUFXLHdCQUF3QixDQUFDO1FBRTlELGVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBb0IsSUFBSSxDQUFDO0lBb0N2QyxDQUFDOzs7O0lBbENHLHNDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sb0NBQU07Ozs7SUFBZDtRQUVJLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNkLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUNuQztpQkFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ2hDO2lCQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsa0RBQWtEO1FBQ2xELHVEQUF1RDtRQUN2RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixrQkFBa0I7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQzs7Z0JBaERKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qixna0NBQTBDOztpQkFFN0M7Ozt3QkFHSSxLQUFLOzhCQUNMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLOztJQXVDViwwQkFBQztDQUFBLEFBakRELElBaURDO1NBNUNZLG1CQUFtQjs7O0lBRTVCLG9DQUF1Qzs7SUFDdkMsMENBQTRDOztJQUM1QyxrREFBeUQ7O0lBQ3pELGdEQUE4RDs7SUFFOUQseUNBQW1DOztJQUNuQyx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEFjdGlvbktpbmQsXG4gICAgSUJyZWFkY3J1bWJJdGVtXG59IGZyb20gJy4uLy4uL21vZGVscy9icmVhZGNydW1iLmludGVyZmFjZSc7XG5cbi8qXG4gUHJlc3VtcHRpb25zOiBcbiAxLiBpdGVtcyBhcmUgZml4ZWQgYXQgdGhlIG1vbWVudCBvZiBwYWdlIGluaXRcbiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1icmVhZGNydW1iJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBpdGVtczogSUJyZWFkY3J1bWJJdGVtW10gPSBbXTtcbiAgICBASW5wdXQoKSBsaXN0Q2xhc3Nlczogc3RyaW5nID0gJ2JyZWFkY3J1bWInO1xuICAgIEBJbnB1dCgpIGluYWN0aXZlSXRlbUNsYXNzZXM6IHN0cmluZyA9ICdicmVhZGNydW1iLWl0ZW0nO1xuICAgIEBJbnB1dCgpIGFjdGl2ZUl0ZW1DbGFzc2VzOiBzdHJpbmcgPSAnYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZSc7XG5cbiAgICBpbnRlckl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXSA9IFtdO1xuICAgIGFjdGl2ZUl0ZW06IElCcmVhZGNydW1iSXRlbSA9IG51bGw7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZSgpIHtcblxuICAgICAgICAvLyBQcmUtcHJvY2VzcyBkYXRhXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnJvdXRlckxpbmspIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLlJPVVRFUl9MSU5LO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnVybCkge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuVVJMX0xJTks7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5DVVNUT01fQUNUSU9OO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLk5PX0FDVElPTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IHVwIGludGVySXRlbXMgYW5kIGFjdGl2ZUl0ZW0sIGFuZCBpdGVtcyBhcmVcbiAgICAgICAgLy8gZml4ZWQgdGhpcyBtb21lbnQgYW5kIHRodXMgaW50ZXJJdGVtcyBhbmQgYWN0aXZlSXRlbVxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTcGxpdCB0aGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVySXRlbXMucHVzaCh0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19