import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
    return ExpandableCardComponent;
}());
export { ExpandableCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9GLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQU94QjtJQVdJO1FBVFMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV6QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUs1QixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQWRRO1FBQVIsS0FBSyxFQUFFOztnRUFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7OytEQUFpQjtJQUhoQix1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxvZ0JBQStDOztTQUVsRCxDQUFDOztPQUNXLHVCQUF1QixDQWtCbkM7SUFBRCw4QkFBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uUmlnaHQsIGZhQ2hldnJvblVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxubGV0IEdsb2JhbEVsZW1lbnRJZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1leHBhbmRhYmxlLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0aXRsZUNsYXNzID0gJyc7XG5cbiAgICBmYUNoZXZyb25VcCA9IGZhQ2hldnJvblVwO1xuICAgIGZhQ2hldnJvbkRvd24gPSBmYUNoZXZyb25Eb3duO1xuICAgIGZhQ2hldnJvblJpZ2h0ID0gZmFDaGV2cm9uUmlnaHQ7XG5cbiAgICBlbGVtZW50SWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9ICdleHBhbmRhYmxlQ2FyZEJvZHknICsgR2xvYmFsRWxlbWVudElkKys7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iXX0=