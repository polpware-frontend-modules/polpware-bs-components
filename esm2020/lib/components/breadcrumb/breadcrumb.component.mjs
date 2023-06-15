import { Component, Input } from '@angular/core';
import { ActionKind } from '../../models/breadcrumb.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
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
    ngOnInit() {
        this.update();
    }
    ngOnChanges() {
        this.update();
    }
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
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: BreadcrumbComponent, selector: "polp-bs-breadcrumb", inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, usesOnChanges: true, ngImport: i0, template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-breadcrumb', template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n", styles: [""] }]
        }], propDecorators: { items: [{
                type: Input
            }], listClasses: [{
                type: Input
            }], inactiveItemClasses: [{
                type: Input
            }], activeItemClasses: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUUzQzs7O0VBR0U7QUFPRixNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBT2EsVUFBSyxHQUFzQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBVyxZQUFZLENBQUM7UUFDbkMsd0JBQW1CLEdBQVcsaUJBQWlCLENBQUM7UUFDaEQsc0JBQWlCLEdBQVcsd0JBQXdCLENBQUM7UUFFOUQsZUFBVSxHQUFzQixFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFvQixJQUFJLENBQUM7S0FzQ3RDO0lBcENHLFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLE1BQU07UUFFVixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNkLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUNuQztpQkFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2FBQ2hDO2lCQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0RBQWtEO1FBQ2xELHVEQUF1RDtRQUN2RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixrQkFBa0I7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQzs7aUhBN0NRLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDJOQ2pCaEMsd29DQWtCQTs0RkREYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0ksb0JBQW9COzhCQU1yQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBBY3Rpb25LaW5kLFxuICAgIElCcmVhZGNydW1iSXRlbVxufSBmcm9tICcuLi8uLi9tb2RlbHMvYnJlYWRjcnVtYi5pbnRlcmZhY2UnO1xuXG4vKlxuIFByZXN1bXB0aW9uczogXG4gMS4gaXRlbXMgYXJlIGZpeGVkIGF0IHRoZSBtb21lbnQgb2YgcGFnZSBpbml0XG4qL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtYnJlYWRjcnVtYicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgaXRlbXM6IElCcmVhZGNydW1iSXRlbVtdID0gW107XG4gICAgQElucHV0KCkgbGlzdENsYXNzZXM6IHN0cmluZyA9ICdicmVhZGNydW1iJztcbiAgICBASW5wdXQoKSBpbmFjdGl2ZUl0ZW1DbGFzc2VzOiBzdHJpbmcgPSAnYnJlYWRjcnVtYi1pdGVtJztcbiAgICBASW5wdXQoKSBhY3RpdmVJdGVtQ2xhc3Nlczogc3RyaW5nID0gJ2JyZWFkY3J1bWItaXRlbSBhY3RpdmUnO1xuXG4gICAgaW50ZXJJdGVtczogSUJyZWFkY3J1bWJJdGVtW10gPSBbXTtcbiAgICBhY3RpdmVJdGVtOiBJQnJlYWRjcnVtYkl0ZW0gPSBudWxsO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKSB7XG5cbiAgICAgICAgLy8gUHJlLXByb2Nlc3MgZGF0YVxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5yb3V0ZXJMaW5rKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5ST1VURVJfTElOSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS51cmwpIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLlVSTF9MSU5LO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuQ1VTVE9NX0FDVElPTjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5OT19BQ1RJT047XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW50ZXJJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICAvLyBTZXQgdXAgaW50ZXJJdGVtcyBhbmQgYWN0aXZlSXRlbSwgYW5kIGl0ZW1zIGFyZVxuICAgICAgICAvLyBmaXhlZCB0aGlzIG1vbWVudCBhbmQgdGh1cyBpbnRlckl0ZW1zIGFuZCBhY3RpdmVJdGVtXG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBhcnJheVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJJdGVtcy5wdXNoKHRoaXMuaXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIgICAgPG9sIFtuZ0NsYXNzXT1cImxpc3RDbGFzc2VzXCI+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJpbmFjdGl2ZUl0ZW1DbGFzc2VzXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaW50ZXJJdGVtc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaXRlbS5raW5kXCI+XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwiaXRlbS51cmxcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiIFtxdWVyeVBhcmFtc109XCJpdGVtLnF1ZXJ5UGFyYW1zIHx8IHt9XCIgKm5nU3dpdGNoQ2FzZT1cIjJcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiaXRlbS5hY3Rpb24oKVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoRGVmYXVsdD57e2l0ZW0udGl0bGV9fTwvYT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIFtuZ0NsYXNzXT1cImFjdGl2ZUl0ZW1DbGFzc2VzXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiICpuZ0lmPVwiYWN0aXZlSXRlbSBhcyBpdGVtXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLmtpbmRcIj5cbiAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnVybFwiICpuZ1N3aXRjaENhc2U9XCIxXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3F1ZXJ5UGFyYW1zXT1cIml0ZW0ucXVlcnlQYXJhbXMgfHwge31cIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJpdGVtLmFjdGlvbigpXCIgKm5nU3dpdGNoQ2FzZT1cIjNcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hEZWZhdWx0Pnt7aXRlbS50aXRsZX19PC9hPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgIDwvb2w+XG4iXX0=