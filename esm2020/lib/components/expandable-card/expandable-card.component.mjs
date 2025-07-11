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
}
ExpandableCardComponent.ɵfac = function ExpandableCardComponent_Factory(t) { return new (t || ExpandableCardComponent)(); };
ExpandableCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "card"], [1, "card-header", 3, "click"], [3, "icon"], [1, "card-body", 3, "id", "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed)("aria-controls", ctx.elementId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("id", ctx.elementId);
        i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
    } }, dependencies: [i1.CollapseDirective, i2.FaIconComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], function () { return []; }, { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtY2FyZC9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBRS9GLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQU94QixNQUFNLE9BQU8sdUJBQXVCO0lBV2hDO1FBVFMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV6QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUs1QixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OEZBaEJRLHVCQUF1QjswRUFBdkIsdUJBQXVCOztRQ1ZwQyw4QkFBa0IsV0FBQTtRQUNTLHFJQUFvQztRQUV2RCxrQkFBMEM7UUFDMUMsNkJBQXlFO1FBQzdFLGlCQUFJO1FBQ0osOEJBQXVGO1FBQ25GLHFCQUF5QztRQUM3QyxpQkFBTSxFQUFBOztRQU5ILGVBQW1DO1FBQW5DLGlEQUFtQyxnQ0FBQTtRQUV6QixlQUFxRDtRQUFyRCwrRUFBcUQ7UUFFM0MsZUFBa0I7UUFBbEIsNkNBQWtCO1FBQUMsMENBQXdCLG9CQUFBOzt1RkRJekQsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0kseUJBQXlCO3NDQU0xQixXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxubGV0IEdsb2JhbEVsZW1lbnRJZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1leHBhbmRhYmxlLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aXRsZUNsYXNzID0gJyc7XG5cbiAgICBmYUNoZXZyb25VcCA9IGZhQ2hldnJvblVwO1xuICAgIGZhQ2hldnJvbkRvd24gPSBmYUNoZXZyb25Eb3duO1xuICAgIGZhQ2hldnJvblJpZ2h0ID0gZmFDaGV2cm9uUmlnaHQ7XG5cbiAgICBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9ICdleHBhbmRhYmxlQ2FyZEJvZHknICsgR2xvYmFsRWxlbWVudElkKys7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXJcIiAoY2xpY2spPVwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcIlxuICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIWlzQ29sbGFwc2VkXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJlbGVtZW50SWRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiPjwvbmctY29udGVudD4gICAgICAgIFxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJpc0NvbGxhcHNlZCA/IGZhQ2hldnJvblJpZ2h0IDogZmFDaGV2cm9uRG93blwiPjwvZmEtaWNvbj5cbiAgICA8L2E+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIGlkPVwie3tlbGVtZW50SWR9fVwiIFtjb2xsYXBzZV09XCJpc0NvbGxhcHNlZFwiIFtpc0FuaW1hdGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=