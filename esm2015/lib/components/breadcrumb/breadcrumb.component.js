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
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r2.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
const _c0 = function () { return {}; };
function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams || i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r2 = i0.ɵɵnextContext().$implicit; return item_r2.action(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
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
    const item_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
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
    const item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("href", item_r14.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("routerLink", item_r14.routerLink)("queryParams", item_r14.queryParams || i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); const item_r14 = i0.ɵɵnextContext().ngIf; return item_r14.action(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().ngIf;
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
    const item_r14 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNILFVBQVUsRUFFYixNQUFNLG1DQUFtQyxDQUFDOzs7OztJQ0YzQiw0QkFBdUM7SUFBQSxZQUFjO0lBQUEsaUJBQUk7OztJQUF0RCxvREFBaUI7SUFBbUIsZUFBYztJQUFkLG1DQUFjOzs7O0lBQ3JELDRCQUEyRjtJQUFBLFlBQWM7SUFBQSxpQkFBSTs7O0lBQTFHLCtDQUE4QixrRUFBQTtJQUEwRCxlQUFjO0lBQWQsbUNBQWM7Ozs7SUFDekcsNkJBQTZDO0lBQTFDLDBLQUFTLGdCQUFhLElBQUM7SUFBbUIsWUFBYztJQUFBLGlCQUFJOzs7SUFBbEIsZUFBYztJQUFkLG1DQUFjOzs7SUFDM0QseUJBQW9CO0lBQUEsWUFBYztJQUFBLGlCQUFJOzs7SUFBbEIsZUFBYztJQUFkLG1DQUFjOzs7SUFMMUMsNkJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHFFQUF1QztJQUN2QyxxRUFBMkY7SUFDM0YscUVBQTZDO0lBQzdDLHFFQUFvQjtJQUN4QiwwQkFBZTtJQUNuQixpQkFBSzs7OztJQVBELG9EQUErQjtJQUNqQixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDWCxlQUFpQjtJQUFqQixnQ0FBaUI7SUFDbUMsZUFBaUI7SUFBakIsZ0NBQWlCO0lBQy9ELGVBQWlCO0lBQWpCLGdDQUFpQjs7O0lBTTVDLDRCQUF1QztJQUFBLFlBQWM7SUFBQSxpQkFBSTs7O0lBQXRELHFEQUFpQjtJQUFtQixlQUFj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QUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEFjdGlvbktpbmQsXG4gICAgSUJyZWFkY3J1bWJJdGVtXG59IGZyb20gJy4uLy4uL21vZGVscy9icmVhZGNydW1iLmludGVyZmFjZSc7XG5cbi8qXG4gUHJlc3VtcHRpb25zOiBcbiAxLiBpdGVtcyBhcmUgZml4ZWQgYXQgdGhlIG1vbWVudCBvZiBwYWdlIGluaXRcbiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1icmVhZGNydW1iJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBpdGVtczogSUJyZWFkY3J1bWJJdGVtW10gPSBbXTtcbiAgICBASW5wdXQoKSBsaXN0Q2xhc3Nlczogc3RyaW5nID0gJ2JyZWFkY3J1bWInO1xuICAgIEBJbnB1dCgpIGluYWN0aXZlSXRlbUNsYXNzZXM6IHN0cmluZyA9ICdicmVhZGNydW1iLWl0ZW0nO1xuICAgIEBJbnB1dCgpIGFjdGl2ZUl0ZW1DbGFzc2VzOiBzdHJpbmcgPSAnYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZSc7XG5cbiAgICBpbnRlckl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXSA9IFtdO1xuICAgIGFjdGl2ZUl0ZW06IElCcmVhZGNydW1iSXRlbSA9IG51bGw7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZSgpIHtcblxuICAgICAgICAvLyBQcmUtcHJvY2VzcyBkYXRhXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnJvdXRlckxpbmspIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLlJPVVRFUl9MSU5LO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnVybCkge1xuICAgICAgICAgICAgICAgIGUua2luZCA9IEFjdGlvbktpbmQuVVJMX0xJTks7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZS5raW5kID0gQWN0aW9uS2luZC5DVVNUT01fQUNUSU9OO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLmtpbmQgPSBBY3Rpb25LaW5kLk5PX0FDVElPTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnRlckl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgIC8vIFNldCB1cCBpbnRlckl0ZW1zIGFuZCBhY3RpdmVJdGVtLCBhbmQgaXRlbXMgYXJlXG4gICAgICAgIC8vIGZpeGVkIHRoaXMgbW9tZW50IGFuZCB0aHVzIGludGVySXRlbXMgYW5kIGFjdGl2ZUl0ZW1cbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gU3BsaXQgdGhlIGFycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlckl0ZW1zLnB1c2godGhpcy5pdGVtc1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiAgICA8b2wgW25nQ2xhc3NdPVwibGlzdENsYXNzZXNcIj5cbiAgICAgICAgPGxpIFtuZ0NsYXNzXT1cImluYWN0aXZlSXRlbUNsYXNzZXNcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbnRlckl0ZW1zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLmtpbmRcIj5cbiAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnVybFwiICpuZ1N3aXRjaENhc2U9XCIxXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3F1ZXJ5UGFyYW1zXT1cIml0ZW0ucXVlcnlQYXJhbXMgfHwge31cIiAqbmdTd2l0Y2hDYXNlPVwiMlwiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJpdGVtLmFjdGlvbigpXCIgKm5nU3dpdGNoQ2FzZT1cIjNcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hEZWZhdWx0Pnt7aXRlbS50aXRsZX19PC9hPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgW25nQ2xhc3NdPVwiYWN0aXZlSXRlbUNsYXNzZXNcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgKm5nSWY9XCJhY3RpdmVJdGVtIGFzIGl0ZW1cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0ua2luZFwiPlxuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cIml0ZW0udXJsXCIgKm5nU3dpdGNoQ2FzZT1cIjFcIj57e2l0ZW0udGl0bGV9fTwvYT5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJpdGVtLnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiaXRlbS5xdWVyeVBhcmFtcyB8fCB7fVwiICpuZ1N3aXRjaENhc2U9XCIyXCI+e3tpdGVtLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIml0ZW0uYWN0aW9uKClcIiAqbmdTd2l0Y2hDYXNlPVwiM1wiPnt7aXRlbS50aXRsZX19PC9hPlxuICAgICAgICAgICAgICAgIDxhICpuZ1N3aXRjaERlZmF1bHQ+e3tpdGVtLnRpdGxlfX08L2E+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiJdfQ==