import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "ngx-bootstrap/collapse";
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
ExpandableCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ExpandableCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpandableCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ExpandableCardComponent, selector: "polp-bs-expandable-card", inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngImport: i0, template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"expandableCardBody\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"expandableCardBody\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n", styles: [""], components: [{ type: i1.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i2.CollapseDirective, selector: "[collapse]", inputs: ["display", "isAnimated", "collapse"], outputs: ["collapsed", "collapses", "expanded", "expands"], exportAs: ["bs-collapse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ExpandableCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"expandableCardBody\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"expandableCardBody\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { isCollapsed: [{
                type: Input
            }], titleClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtY2FyZC9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUUvRixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFPeEIsTUFBTSxPQUFPLHVCQUF1QjtJQVdoQztRQVRTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFekIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFLNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O3FIQWhCUSx1QkFBdUI7eUdBQXZCLHVCQUF1QixpSUNWcEMsaWdCQVVBOzRGREFhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDSSx5QkFBeUI7MEVBTTFCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxubGV0IEdsb2JhbEVsZW1lbnRJZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1leHBhbmRhYmxlLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aXRsZUNsYXNzID0gJyc7XG5cbiAgICBmYUNoZXZyb25VcCA9IGZhQ2hldnJvblVwO1xuICAgIGZhQ2hldnJvbkRvd24gPSBmYUNoZXZyb25Eb3duO1xuICAgIGZhQ2hldnJvblJpZ2h0ID0gZmFDaGV2cm9uUmlnaHQ7XG5cbiAgICBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9ICdleHBhbmRhYmxlQ2FyZEJvZHknICsgR2xvYmFsRWxlbWVudElkKys7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXJcIiAoY2xpY2spPVwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcIlxuICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIWlzQ29sbGFwc2VkXCIgYXJpYS1jb250cm9scz1cImV4cGFuZGFibGVDYXJkQm9keVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PiAgICAgICAgXG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImlzQ29sbGFwc2VkID8gZmFDaGV2cm9uUmlnaHQgOiBmYUNoZXZyb25Eb3duXCI+PC9mYS1pY29uPlxuICAgIDwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgaWQ9XCJleHBhbmRhYmxlQ2FyZEJvZHlcIiBbY29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIiBbaXNBbmltYXRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltib2R5XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19