import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "ngx-bootstrap/collapse";
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
ExpandableCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [[1, "card"], ["aria-controls", "expandableCardBody", 1, "card-header", 3, "click"], [3, "icon"], ["id", "expandableCardBody", 1, "card-body", 3, "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        i0.ɵɵprojection(2);
        i0.ɵɵelement(3, "fa-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
    } }, directives: [i1.FaIconComponent, i2.CollapseDirective], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-expandable-card',
                templateUrl: './expandable-card.component.html',
                styleUrls: ['./expandable-card.component.css']
            }]
    }], function () { return []; }, { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9leHBhbmRhYmxlLWNhcmQvZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7QUFFL0YsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBT3hCLE1BQU0sT0FBTyx1QkFBdUI7SUFXaEM7UUFUUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXpCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBSzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs4RkFoQlEsdUJBQXVCOzREQUF2Qix1QkFBdUI7O1FDVnBDLDhCQUNJO1FBQUEsNEJBRUk7UUFGbUIscUlBQW9DO1FBRXZELGtCQUE2QjtRQUM3Qiw2QkFBeUU7UUFDN0UsaUJBQUk7UUFDSiw4QkFDSTtRQUFBLHFCQUE0QjtRQUNoQyxpQkFBTTtRQUNWLGlCQUFNOztRQVBDLGVBQW1DO1FBQW5DLGlEQUFtQztRQUV6QixlQUFxRDtRQUFyRCwrRUFBcUQ7UUFFbkIsZUFBd0I7UUFBeEIsMENBQXdCLG9CQUFBOztrRERJOUQsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUNqRDs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxubGV0IEdsb2JhbEVsZW1lbnRJZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1leHBhbmRhYmxlLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aXRsZUNsYXNzID0gJyc7XG5cbiAgICBmYUNoZXZyb25VcCA9IGZhQ2hldnJvblVwO1xuICAgIGZhQ2hldnJvbkRvd24gPSBmYUNoZXZyb25Eb3duO1xuICAgIGZhQ2hldnJvblJpZ2h0ID0gZmFDaGV2cm9uUmlnaHQ7XG5cbiAgICBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9ICdleHBhbmRhYmxlQ2FyZEJvZHknICsgR2xvYmFsRWxlbWVudElkKys7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXJcIiAoY2xpY2spPVwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcIlxuICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIWlzQ29sbGFwc2VkXCIgYXJpYS1jb250cm9scz1cImV4cGFuZGFibGVDYXJkQm9keVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCI+PC9uZy1jb250ZW50PiAgICAgICAgXG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImlzQ29sbGFwc2VkID8gZmFDaGV2cm9uUmlnaHQgOiBmYUNoZXZyb25Eb3duXCI+PC9mYS1pY29uPlxuICAgIDwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgaWQ9XCJleHBhbmRhYmxlQ2FyZEJvZHlcIiBbY29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIiBbaXNBbmltYXRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltib2R5XVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19