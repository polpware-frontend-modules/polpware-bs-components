import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/collapse";
import * as i2 from "@fortawesome/angular-fontawesome";
const _c0 = [[["", "title", ""]], [["", "body", ""]]];
const _c1 = ["[title]", "[body]"];
let GlobalElementId = 1;
export class ExpandableCardComponent {
    constructor() {
        this.isCollapsed = false;
        this.titleClass = '';
        this.faChevronUp = faChevronUp;
        this.faChevronDown = faChevronDown;
        this.faChevronRight = faChevronRight;
        this.elementId = 'expandableCardBody' + GlobalElementId++;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function ExpandableCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExpandableCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "card"], [1, "card-header", 3, "click"], [3, "icon"], [1, "card-body", 3, "id", "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵprojection(2);
            i0.ɵɵelement(3, "fa-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed)("aria-controls", ctx.elementId);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("id", ctx.elementId);
            i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
        } }, dependencies: [i1.CollapseDirective, i2.FaIconComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], () => [], { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExpandableCardComponent, { className: "ExpandableCardComponent", filePath: "lib\\components\\expandable-card\\expandable-card.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtY2FyZC9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBRS9GLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQU94QixNQUFNLE9BQU8sdUJBQXVCO0lBV2hDO1FBVFMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV6QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUs1QixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzt3SEFoQlEsdUJBQXVCO29FQUF2Qix1QkFBdUI7O1lDVGhDLEFBREosOEJBQWtCLFdBRTBEO1lBRGpELHFJQUFvQztZQUV2RCxrQkFBMEM7WUFDMUMsNkJBQXlFO1lBQzdFLGlCQUFJO1lBQ0osOEJBQXVGO1lBQ25GLHFCQUF5QztZQUVqRCxBQURJLGlCQUFNLEVBQ0o7O1lBUEMsY0FBbUM7O1lBRXpCLGVBQXFEO1lBQXJELCtFQUFxRDtZQUUzQyxjQUFrQjtZQUFsQiw2Q0FBa0I7WUFBMEIsQUFBekIsMENBQXdCLG9CQUFvQjs7O2lGREk3RSx1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDSSx5QkFBeUI7b0JBTTFCLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLOztrRkFIRyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24sIGZhQ2hldnJvblJpZ2h0LCBmYUNoZXZyb25VcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmxldCBHbG9iYWxFbGVtZW50SWQgPSAxO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtZXhwYW5kYWJsZS1jYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgQElucHV0KCkgdGl0bGVDbGFzcyA9ICcnO1xuXG4gICAgZmFDaGV2cm9uVXAgPSBmYUNoZXZyb25VcDtcbiAgICBmYUNoZXZyb25Eb3duID0gZmFDaGV2cm9uRG93bjtcbiAgICBmYUNoZXZyb25SaWdodCA9IGZhQ2hldnJvblJpZ2h0O1xuXG4gICAgZWxlbWVudElkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSAnZXhwYW5kYWJsZUNhcmRCb2R5JyArIEdsb2JhbEVsZW1lbnRJZCsrO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyXCIgKGNsaWNrKT1cImlzQ29sbGFwc2VkID0gIWlzQ29sbGFwc2VkXCJcbiAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIiFpc0NvbGxhcHNlZFwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZWxlbWVudElkXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIj48L25nLWNvbnRlbnQ+ICAgICAgICBcbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiaXNDb2xsYXBzZWQgPyBmYUNoZXZyb25SaWdodCA6IGZhQ2hldnJvbkRvd25cIj48L2ZhLWljb24+XG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBpZD1cInt7ZWxlbWVudElkfX1cIiBbY29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIiBbaXNBbmltYXRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltib2R5XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19