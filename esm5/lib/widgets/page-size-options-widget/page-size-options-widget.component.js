import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PageSizeOptionsWidgetComponent = /** @class */ (function () {
    function PageSizeOptionsWidgetComponent() {
        this.initSize = 40;
        this.options = [40, 100, 200, 400, 800];
        this.onChange = new EventEmitter();
        this.size = 40;
    }
    PageSizeOptionsWidgetComponent.prototype.ngOnInit = function () {
        this.size = this.initSize;
    };
    PageSizeOptionsWidgetComponent.prototype.changeSize = function (s) {
        this.size = s;
        this.onChange.emit(s);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PageSizeOptionsWidgetComponent.prototype, "initSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PageSizeOptionsWidgetComponent.prototype, "options", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PageSizeOptionsWidgetComponent.prototype, "onChange", void 0);
    PageSizeOptionsWidgetComponent = __decorate([
        Component({
            selector: 'polp-bs-page-size-options-widget',
            template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n",
            styles: [".page-link{cursor:pointer}"]
        }),
        __metadata("design:paramtypes", [])
    ], PageSizeOptionsWidgetComponent);
    return PageSizeOptionsWidgetComponent;
}());
export { PageSizeOptionsWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0U7SUFTSTtRQVBTLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFaEQsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFakIsaURBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsbURBQVUsR0FBVixVQUFXLENBQVM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFOztvRUFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzttRUFBOEM7SUFFNUM7UUFBVCxNQUFNLEVBQUU7O29FQUF1QztJQUx2Qyw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtDQUFrQztZQUM1Qyw0VkFBd0Q7O1NBRTNELENBQUM7O09BQ1csOEJBQThCLENBb0IxQztJQUFELHFDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpbml0U2l6ZSA9IDQwO1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IG51bWJlcltdID0gWzQwLCAxMDAsIDIwMCwgNDAwLCA4MDBdO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBzaXplOiBudW1iZXIgPSA0MDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5pbml0U2l6ZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTaXplKHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNpemUgPSBzO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQocyk7XG4gICAgfVxuXG59XG4iXX0=