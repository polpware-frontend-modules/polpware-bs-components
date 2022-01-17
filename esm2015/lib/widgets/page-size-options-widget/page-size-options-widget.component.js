import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "active": a0 }; };
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r3); const o_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSize(o_r1); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.size == o_r1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r1);
} }
export class PageSizeOptionsWidgetComponent {
    constructor() {
        this.initSize = 40;
        this.options = [40, 100, 200, 400, 800];
        this.onChange = new EventEmitter();
        this.size = 40;
    }
    ngOnInit() {
        this.size = this.initSize;
    }
    changeSize(s) {
        this.size = s;
        this.onChange.emit(s);
    }
}
PageSizeOptionsWidgetComponent.ɵfac = function PageSizeOptionsWidgetComponent_Factory(t) { return new (t || PageSizeOptionsWidgetComponent)(); };
PageSizeOptionsWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgForOf, i1.NgClass], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-page-size-options-widget',
                templateUrl: './page-size-options-widget.component.html',
                styleUrls: ['./page-size-options-widget.component.css']
            }]
    }], function () { return []; }, { initSize: [{
            type: Input
        }], options: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0V2RSw2QkFDSTtJQUFBLDZCQUNJO0lBQUEsNEJBQTZDO0lBQXhCLHNPQUF1QjtJQUFDLFlBQUs7SUFBQSxpQkFBSTtJQUMxRCxpQkFBSztJQUNULDBCQUFlOzs7O0lBSFcsZUFBaUM7SUFBakMseUVBQWlDO0lBQ04sZUFBSztJQUFMLDBCQUFLOztBREdsRSxNQUFNLE9BQU8sOEJBQThCO0lBU3ZDO1FBUFMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUVqQixRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzRHQWxCUSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQ1AzQyw4QkFDSTtRQUFBLDZCQUNJO1FBQUEsaUdBQ0k7UUFJUixpQkFBSztRQUNULGlCQUFNOztRQU5nQixlQUF5QjtRQUF6QixxQ0FBeUI7O2tEREtsQyw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2FBQzFEOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpbml0U2l6ZSA9IDQwO1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IG51bWJlcltdID0gWzQwLCAxMDAsIDIwMCwgNDAwLCA4MDBdO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBzaXplOiBudW1iZXIgPSA0MDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5pbml0U2l6ZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTaXplKHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNpemUgPSBzO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQocyk7XG4gICAgfVxuXG59XG4iLCI8bmF2IGFyaWEtbGFiZWw9XCJwYWdlIHNpemUgb3B0aW9uc1wiPlxuICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbyBvZiBvcHRpb25zXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHNpemUgPT0gb31cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIChjbGljayk9XCJjaGFuZ2VTaXplKG8pXCI+e3tvfX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3VsPlxuPC9uYXY+XG4iXX0=