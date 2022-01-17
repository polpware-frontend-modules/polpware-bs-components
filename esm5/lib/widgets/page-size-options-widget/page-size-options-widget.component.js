import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = function (a0) { return { "active": a0 }; };
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r3); var o_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSize(o_r1); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var o_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.size == o_r1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r1);
} }
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
    PageSizeOptionsWidgetComponent.ɵfac = function PageSizeOptionsWidgetComponent_Factory(t) { return new (t || PageSizeOptionsWidgetComponent)(); };
    PageSizeOptionsWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵelementStart(1, "ul", 1);
            i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, directives: [i1.NgForOf, i1.NgClass], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] });
    return PageSizeOptionsWidgetComponent;
}());
export { PageSizeOptionsWidgetComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-page-size-options-widget',
                templateUrl: './page-size-options-widget.component.html',
                styleUrls: ['./page-size-options-widget.component.css']
            }]
    }], function () { return []; }, { initSize: [{
            type: Input
        }], options: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0V2RSw2QkFDSTtJQUFBLDZCQUNJO0lBQUEsNEJBQTZDO0lBQXhCLGtPQUF1QjtJQUFDLFlBQUs7SUFBQSxpQkFBSTtJQUMxRCxpQkFBSztJQUNULDBCQUFlOzs7O0lBSFcsZUFBaUM7SUFBakMseUVBQWlDO0lBQ04sZUFBSztJQUFMLDBCQUFLOztBREZsRTtJQWNJO1FBUFMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRCxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUVqQixpREFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCxtREFBVSxHQUFWLFVBQVcsQ0FBUztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Z0hBbEJRLDhCQUE4Qjt1RUFBOUIsOEJBQThCO1lDUDNDLDhCQUNJO1lBQUEsNkJBQ0k7WUFBQSxpR0FDSTtZQUlSLGlCQUFLO1lBQ1QsaUJBQU07O1lBTmdCLGVBQXlCO1lBQXpCLHFDQUF5Qjs7eUNERi9DO0NBMkJDLEFBekJELElBeUJDO1NBcEJZLDhCQUE4QjtrREFBOUIsOEJBQThCO2NBTDFDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUMxRDs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXBhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaW5pdFNpemUgPSA0MDtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBudW1iZXJbXSA9IFs0MCwgMTAwLCAyMDAsIDQwMCwgODAwXTtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgc2l6ZTogbnVtYmVyID0gNDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuaW5pdFNpemU7XG4gICAgfVxuXG4gICAgY2hhbmdlU2l6ZShzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zaXplID0gcztcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHMpO1xuICAgIH1cblxufVxuIiwiPG5hdiBhcmlhLWxhYmVsPVwicGFnZSBzaXplIG9wdGlvbnNcIj5cbiAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG8gb2Ygb3B0aW9uc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBzaXplID09IG99XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiAoY2xpY2spPVwiY2hhbmdlU2l6ZShvKVwiPnt7b319PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC91bD5cbjwvbmF2PlxuIl19