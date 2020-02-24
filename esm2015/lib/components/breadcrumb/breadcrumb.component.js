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
export class BreadcrumbComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFZM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9hLFVBQUssR0FBc0IsRUFBRSxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ25DLHdCQUFtQixHQUFXLGlCQUFpQixDQUFDO1FBQ2hELHNCQUFpQixHQUFXLHdCQUF3QixDQUFDO1FBRTlELGVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBb0IsSUFBSSxDQUFDO0lBc0N2QyxDQUFDOzs7O0lBcENHLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBRVYsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDZCxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNkLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUNoQztpQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7YUFDakM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtEQUFrRDtRQUNsRCx1REFBdUQ7UUFDdkQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsa0JBQWtCO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7OztZQWxESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsa3BDQUEwQzs7YUFFN0M7OztvQkFHSSxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzs7O0lBSE4sb0NBQXVDOztJQUN2QywwQ0FBNEM7O0lBQzVDLGtEQUF5RDs7SUFDekQsZ0RBQThEOztJQUU5RCx5Q0FBbUM7O0lBQ25DLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQWN0aW9uS2luZCxcbiAgICBJQnJlYWRjcnVtYkl0ZW1cbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2JyZWFkY3J1bWIuaW50ZXJmYWNlJztcblxuLypcbiBQcmVzdW1wdGlvbnM6IFxuIDEuIGl0ZW1zIGFyZSBmaXhlZCBhdCB0aGUgbW9tZW50IG9mIHBhZ2UgaW5pdFxuKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWJyZWFkY3J1bWInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXSA9IFtdO1xuICAgIEBJbnB1dCgpIGxpc3RDbGFzc2VzOiBzdHJpbmcgPSAnYnJlYWRjcnVtYic7XG4gICAgQElucHV0KCkgaW5hY3RpdmVJdGVtQ2xhc3Nlczogc3RyaW5nID0gJ2JyZWFkY3J1bWItaXRlbSc7XG4gICAgQElucHV0KCkgYWN0aXZlSXRlbUNsYXNzZXM6IHN0cmluZyA9ICdicmVhZGNydW1iLWl0ZW0gYWN0aXZlJztcblxuICAgIGludGVySXRlbXM6IElCcmVhZGNydW1iSXRlbVtdID0gW107XG4gICAgYWN0aXZlSXRlbTogSUJyZWFkY3J1bWJJdGVtID0gbnVsbDtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKCkge1xuXG4gICAgICAgIC8vIFByZS1wcm9jZXNzIGRhdGFcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUucm91dGVyTGluaykge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuUk9VVEVSX0xJTks7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudXJsKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5VUkxfTElOSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLkNVU1RPTV9BQ1RJT047XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuTk9fQUNUSU9OO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmludGVySXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gbnVsbDtcbiAgICAgICAgLy8gU2V0IHVwIGludGVySXRlbXMgYW5kIGFjdGl2ZUl0ZW0sIGFuZCBpdGVtcyBhcmVcbiAgICAgICAgLy8gZml4ZWQgdGhpcyBtb21lbnQgYW5kIHRodXMgaW50ZXJJdGVtcyBhbmQgYWN0aXZlSXRlbVxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTcGxpdCB0aGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVySXRlbXMucHVzaCh0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19