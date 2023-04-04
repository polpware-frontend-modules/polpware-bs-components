import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
let GlobalElementId = 1;
let ExpandableCardComponent = class ExpandableCardComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ExpandableCardComponent.prototype, "isCollapsed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ExpandableCardComponent.prototype, "titleClass", void 0);
ExpandableCardComponent = __decorate([
    Component({
        selector: 'polp-bs-expandable-card',
        template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], ExpandableCardComponent);
export { ExpandableCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9GLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQU94QixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVdoQztRQVRTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFekIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFLNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7Q0FFSixDQUFBO0FBaEJZO0lBQVIsS0FBSyxFQUFFOzs0REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OzJEQUFpQjtBQUhoQix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxvZ0JBQStDOztLQUVsRCxDQUFDOztHQUNXLHVCQUF1QixDQWtCbkM7U0FsQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duLCBmYUNoZXZyb25SaWdodCwgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5sZXQgR2xvYmFsRWxlbWVudElkID0gMTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWV4cGFuZGFibGUtY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlQ2xhc3MgPSAnJztcblxuICAgIGZhQ2hldnJvblVwID0gZmFDaGV2cm9uVXA7XG4gICAgZmFDaGV2cm9uRG93biA9IGZhQ2hldnJvbkRvd247XG4gICAgZmFDaGV2cm9uUmlnaHQgPSBmYUNoZXZyb25SaWdodDtcblxuICAgIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gJ2V4cGFuZGFibGVDYXJkQm9keScgKyBHbG9iYWxFbGVtZW50SWQrKztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==