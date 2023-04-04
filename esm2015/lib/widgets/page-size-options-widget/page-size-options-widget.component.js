import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let PageSizeOptionsWidgetComponent = class PageSizeOptionsWidgetComponent {
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
export { PageSizeOptionsWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFTdkM7UUFQUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFFRixDQUFDO0lBRWpCLFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUVKLENBQUE7QUFsQlk7SUFBUixLQUFLLEVBQUU7O2dFQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OytEQUE4QztBQUU1QztJQUFULE1BQU0sRUFBRTs7Z0VBQXVDO0FBTHZDLDhCQUE4QjtJQUwxQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0NBQWtDO1FBQzVDLDRWQUF3RDs7S0FFM0QsQ0FBQzs7R0FDVyw4QkFBOEIsQ0FvQjFDO1NBcEJZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXBhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaW5pdFNpemUgPSA0MDtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBudW1iZXJbXSA9IFs0MCwgMTAwLCAyMDAsIDQwMCwgODAwXTtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgc2l6ZTogbnVtYmVyID0gNDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuaW5pdFNpemU7XG4gICAgfVxuXG4gICAgY2hhbmdlU2l6ZShzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zaXplID0gcztcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHMpO1xuICAgIH1cblxufVxuIl19