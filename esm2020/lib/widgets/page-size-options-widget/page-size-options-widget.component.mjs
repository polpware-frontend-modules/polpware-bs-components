import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
PageSizeOptionsWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PageSizeOptionsWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageSizeOptionsWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: PageSizeOptionsWidgetComponent, selector: "polp-bs-page-size-options-widget", inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, ngImport: i0, template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PageSizeOptionsWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-page-size-options-widget', template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initSize: [{
                type: Input
            }], options: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLDhCQUE4QjtJQVN2QztRQVBTLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFaEQsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDOzs0SEFsQlEsOEJBQThCO2dIQUE5Qiw4QkFBOEIsaUtDUDNDLGtWQVNBOzRGREZhLDhCQUE4QjtrQkFMMUMsU0FBUzsrQkFDSSxrQ0FBa0M7MEVBTW5DLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGluaXRTaXplID0gNDA7XG4gICAgQElucHV0KCkgb3B0aW9uczogbnVtYmVyW10gPSBbNDAsIDEwMCwgMjAwLCA0MDAsIDgwMF07XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIHNpemU6IG51bWJlciA9IDQwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmluaXRTaXplO1xuICAgIH1cblxuICAgIGNoYW5nZVNpemUoczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChzKTtcbiAgICB9XG5cbn1cbiIsIjxuYXYgYXJpYS1sYWJlbD1cInBhZ2Ugc2l6ZSBvcHRpb25zXCI+XG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogc2l6ZSA9PSBvfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgKGNsaWNrKT1cImNoYW5nZVNpemUobylcIj57e299fTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdWw+XG48L25hdj5cbiJdfQ==