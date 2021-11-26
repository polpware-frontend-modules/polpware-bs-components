import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "ngx-bootstrap/collapse";
var _c0 = [[["", "title", ""]], [["", "body", ""]]];
var _c1 = ["[title]", "[body]"];
var GlobalElementId = 1;
var ExpandableCardComponent = /** @class */ (function () {
    function ExpandableCardComponent() {
        this.isCollapsed = false;
        this.titleClass = '';
        this.faChevronUp = faChevronUp;
        this.faChevronDown = faChevronDown;
        this.faChevronRight = faChevronRight;
        this.elementId = 'expandableCardBody' + GlobalElementId++;
    }
    ExpandableCardComponent.prototype.ngOnInit = function () {
    };
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
    return ExpandableCardComponent;
}());
export { ExpandableCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9leHBhbmRhYmxlLWNhcmQvZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7QUFFL0YsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBRXhCO0lBZ0JJO1FBVFMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV6QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUs1QixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztrR0FoQlEsdUJBQXVCO2dFQUF2Qix1QkFBdUI7O1lDVnBDLDhCQUNJO1lBQUEsNEJBRUk7WUFGbUIscUlBQW9DO1lBRXZELGtCQUE2QjtZQUM3Qiw2QkFBeUU7WUFDN0UsaUJBQUk7WUFDSiw4QkFDSTtZQUFBLHFCQUE0QjtZQUNoQyxpQkFBTTtZQUNWLGlCQUFNOztZQVBDLGVBQW1DO1lBQW5DLGlEQUFtQztZQUV6QixlQUFxRDtZQUFyRCwrRUFBcUQ7WUFFbkIsZUFBd0I7WUFBeEIsMENBQXdCLG9CQUFBOztrQ0ROM0U7Q0E0QkMsQUF2QkQsSUF1QkM7U0FsQlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQ2pEOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5sZXQgR2xvYmFsRWxlbWVudElkID0gMTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWV4cGFuZGFibGUtY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlQ2xhc3MgPSAnJztcblxuICAgIGZhQ2hldnJvblVwID0gZmFDaGV2cm9uVXA7XG4gICAgZmFDaGV2cm9uRG93biA9IGZhQ2hldnJvbkRvd247XG4gICAgZmFDaGV2cm9uUmlnaHQgPSBmYUNoZXZyb25SaWdodDtcblxuICAgIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gJ2V4cGFuZGFibGVDYXJkQm9keScgKyBHbG9iYWxFbGVtZW50SWQrKztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGEgY2xhc3M9XCJjYXJkLWhlYWRlclwiIChjbGljayk9XCJpc0NvbGxhcHNlZCA9ICFpc0NvbGxhcHNlZFwiXG4gICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCIhaXNDb2xsYXBzZWRcIiBhcmlhLWNvbnRyb2xzPVwiZXhwYW5kYWJsZUNhcmRCb2R5XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIj48L25nLWNvbnRlbnQ+ICAgICAgICBcbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiaXNDb2xsYXBzZWQgPyBmYUNoZXZyb25SaWdodCA6IGZhQ2hldnJvbkRvd25cIj48L2ZhLWljb24+XG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiBpZD1cImV4cGFuZGFibGVDYXJkQm9keVwiIFtjb2xsYXBzZV09XCJpc0NvbGxhcHNlZFwiIFtpc0FuaW1hdGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=