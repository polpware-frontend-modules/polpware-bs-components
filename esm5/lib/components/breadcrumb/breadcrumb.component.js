import { Component, Input } from '@angular/core';
import { ActionKind } from '../../models/breadcrumb.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function BreadcrumbComponent_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r2.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
var _c0 = function () { return {}; };
function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams || i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); var item_r2 = i0.ɵɵnextContext().$implicit; return item_r2.action(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 0);
    i0.ɵɵelementContainerStart(1, 3);
    i0.ɵɵtemplate(2, BreadcrumbComponent_li_1_a_2_Template, 2, 2, "a", 4);
    i0.ɵɵtemplate(3, BreadcrumbComponent_li_1_a_3_Template, 2, 4, "a", 5);
    i0.ɵɵtemplate(4, BreadcrumbComponent_li_1_a_4_Template, 2, 1, "a", 6);
    i0.ɵɵtemplate(5, BreadcrumbComponent_li_1_a_5_Template, 2, 1, "a", 7);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.inactiveItemClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", item_r2.kind);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 3);
} }
function BreadcrumbComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("href", item_r14.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("routerLink", item_r14.routerLink)("queryParams", item_r14.queryParams || i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); var item_r14 = i0.ɵɵnextContext().ngIf; return item_r14.action(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵelementContainerStart(1, 3);
    i0.ɵɵtemplate(2, BreadcrumbComponent_li_2_a_2_Template, 2, 2, "a", 4);
    i0.ɵɵtemplate(3, BreadcrumbComponent_li_2_a_3_Template, 2, 4, "a", 5);
    i0.ɵɵtemplate(4, BreadcrumbComponent_li_2_a_4_Template, 2, 1, "a", 6);
    i0.ɵɵtemplate(5, BreadcrumbComponent_li_2_a_5_Template, 2, 1, "a", 7);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ctx.ngIf;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.activeItemClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", item_r14.kind);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", 3);
} }
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
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.update();
    };
    BreadcrumbComponent.prototype.ngOnChanges = function () {
        this.update();
    };
    BreadcrumbComponent.prototype.update = function () {
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
        this.interItems = [];
        this.activeItem = null;
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
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-current", "page", 3, "ngClass", 4, "ngIf"], [3, "ngSwitch"], [3, "href", 4, "ngSwitchCase"], [3, "routerLink", "queryParams", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"], ["aria-current", "page", 3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 0);
            i0.ɵɵtemplate(1, BreadcrumbComponent_li_1_Template, 6, 5, "li", 1);
            i0.ɵɵtemplate(2, BreadcrumbComponent_li_2_Template, 6, 5, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.listClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.interItems);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.activeItem);
        } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.RouterLinkWithHref], styles: [""] });
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss']
            }]
    }], null, { items: [{
            type: Input
        }], listClasses: [{
            type: Input
        }], inactiveItemClasses: [{
            type: Input
        }], activeItemClasses: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNILFVBQVUsRUFFYixNQUFNLG1DQUFtQyxDQUFDOzs7OztJQ0YzQiw0QkFBdUM7SUFBQSxZQUFjO0lBQUEsaUJBQUk7OztJQUF0RCxvREFBaUI7SUFBbUIsZUFBYztJQUFkLG1DQUFjOzs7O0lBQ3JELDRCQUEyRjtJQUFBLFlBQWM7SUFBQSxpQkFBSTs7O0lBQTFHLCtDQUE4QixrRUFBQTtJQUEwRCxlQUFjO0lBQWQsbUNBQWM7Ozs7SUFDekcsNkJBQTZDO0lBQTFDLHdLQUFTLGdCQUFhLElBQUM7SUFBbUIsWUFBYztJQUFBLGlCQUFJOzs7SUFBbEIsZUFBYztJQUFkLG1DQUFjOzs7SUFDM0QseUJBQW9CO0lBQUEsWUFBYztJQUFBLGlCQUFJOzs7SUFBbEIsZUFBYztJQUFkLG1DQUFjOzs7SUFMMUMsNkJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHFFQUF1QztJQUN2QyxxRUFBMkY7SUFDM0YscUVBQTZDO0lBQzdDLHFFQUFvQjtJQUN4QiwwQkFBZTtJQUNuQixpQkFBSzs7OztJQVBELG9EQUErQjtJQUNqQixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDWCxlQUFpQjtJQUFqQixnQ0FBaUI7SUFDbUMsZUFBaUI7SUFBakIsZ0NBQWlCO0lBQy9ELGVBQWlCO0lBQWpCLGdDQUFpQjs7O0lBTTVDLDRCQUF1QztJQUFBLFlBQWM7SUFBQSxpQkFBSTs7O0lBQXRELHFEQUFpQjtJQUFtQixlQUFj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QW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQWN0aW9uS2luZCxcbiAgICBJQnJlYWRjcnVtYkl0ZW1cbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2JyZWFkY3J1bWIuaW50ZXJmYWNlJztcblxuLypcbiBQcmVzdW1wdGlvbnM6IFxuIDEuIGl0ZW1zIGFyZSBmaXhlZCBhdCB0aGUgbW9tZW50IG9mIHBhZ2UgaW5pdFxuKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWJyZWFkY3J1bWInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXSA9IFtdO1xuICAgIEBJbnB1dCgpIGxpc3RDbGFzc2VzOiBzdHJpbmcgPSAnYnJlYWRjcnVtYic7XG4gICAgQElucHV0KCkgaW5hY3RpdmVJdGVtQ2xhc3Nlczogc3RyaW5nID0gJ2JyZWFkY3J1bWItaXRlbSc7XG4gICAgQElucHV0KCkgYWN0aXZlSXRlbUNsYXNzZXM6IHN0cmluZyA9ICdicmVhZGNydW1iLWl0ZW0gYWN0aXZlJztcblxuICAgIGludGVySXRlbXM6IElCcmVhZGNydW1iSXRlbVtdID0gW107XG4gICAgYWN0aXZlSXRlbTogSUJyZWFkY3J1bWJJdGVtID0gbnVsbDtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKCkge1xuXG4gICAgICAgIC8vIFByZS1wcm9jZXNzIGRhdGFcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUucm91dGVyTGluaykge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuUk9VVEVSX0xJTks7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudXJsKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5VUkxfTElOSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLkNVU1RPTV9BQ1RJT047XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuTk9fQUNUSU9OO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmludGVySXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gbnVsbDtcbiAgICAgICAgLy8gU2V0IHVwIGludGVySXRlbXMgYW5kIGFjdGl2ZUl0ZW0sIGFuZCBpdGVtcyBhcmVcbiAgICAgICAgLy8gZml4ZWQgdGhpcyBtb21lbnQgYW5kIHRodXMgaW50ZXJJdGVtcyBhbmQgYWN0aXZlSXRlbVxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTcGxpdCB0aGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVySXRlbXMucHVzaCh0aGlzLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiICAgIDxvbCBbbmdDbGFzc109XCJsaXN0Q2xhc3Nlc1wiPlxuICAgICAgICA8bGkgW25nQ2xhc3NdPVwiaW5hY3RpdmVJdGVtQ2xhc3Nlc1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGludGVySXRlbXNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0ua2luZFwiPlxuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cIml0ZW0udXJsXCIgKm5nU3dpdGNoQ2FzZT1cIjFcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaXRlbS5xdWVyeVBhcmFtcyB8fCB7fVwiICpuZ1N3aXRjaENhc2U9XCIyXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIml0ZW0uYWN0aW9uKClcIiAqbmdTd2l0Y2hDYXNlPVwiM1wiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhICpuZ1N3aXRjaERlZmF1bHQ+e3tpdGVtLnRpdGxlfX08L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbbmdDbGFzc109XCJhY3RpdmVJdGVtQ2xhc3Nlc1wiIGFyaWEtY3VycmVudD1cInBhZ2VcIiAqbmdJZj1cImFjdGl2ZUl0ZW0gYXMgaXRlbVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaXRlbS5raW5kXCI+XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwiaXRlbS51cmxcIiAqbmdTd2l0Y2hDYXNlPVwiMVwiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiIFtxdWVyeVBhcmFtc109XCJpdGVtLnF1ZXJ5UGFyYW1zIHx8IHt9XCIgKm5nU3dpdGNoQ2FzZT1cIjJcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwiaXRlbS5hY3Rpb24oKVwiICpuZ1N3aXRjaENhc2U9XCIzXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoRGVmYXVsdD57e2l0ZW0udGl0bGV9fTwvYT4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9saT5cbiAgICA8L29sPlxuIl19