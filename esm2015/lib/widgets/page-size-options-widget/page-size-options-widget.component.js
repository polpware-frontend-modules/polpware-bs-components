import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵelementStart(2, "a", 4);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r3); const o_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSize(o_r1); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.size == o_r1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r1);
} }
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
PageSizeOptionsWidgetComponent.ɵfac = function PageSizeOptionsWidgetComponent_Factory(t) { return new (t || PageSizeOptionsWidgetComponent)(); };
PageSizeOptionsWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgForOf, i1.NgClass], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRXZFLDZCQUNJO0lBQUEsNkJBQ0k7SUFBQSw0QkFBNkM7SUFBeEIsc09BQXVCO0lBQUMsWUFBSztJQUFBLGlCQUFJO0lBQzFELGlCQUFLO0lBQ1QsMEJBQWU7Ozs7SUFIVyxlQUFxQjtJQUFyQiw2Q0FBcUI7SUFDTSxlQUFLO0lBQUwsMEJBQUs7O0FER2xFLE1BQU0sT0FBTyw4QkFBOEI7SUFTdkM7UUFQUyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhELFNBQUksR0FBVyxFQUFFLENBQUM7SUFFRixDQUFDO0lBRWpCLFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7NEdBbEJRLDhCQUE4QjttRUFBOUIsOEJBQThCO1FDUDNDLDhCQUNJO1FBQUEsNkJBQ0k7UUFBQSxpR0FDSTtRQUlSLGlCQUFLO1FBQ1QsaUJBQU07O1FBTmdCLGVBQXlCO1FBQXpCLHFDQUF5Qjs7a0RES2xDLDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDMUQ7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGluaXRTaXplID0gNDA7XG4gICAgQElucHV0KCkgb3B0aW9uczogbnVtYmVyW10gPSBbNDAsIDEwMCwgMjAwLCA0MDAsIDgwMF07XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIHNpemU6IG51bWJlciA9IDQwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmluaXRTaXplO1xuICAgIH1cblxuICAgIGNoYW5nZVNpemUoczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChzKTtcbiAgICB9XG5cbn1cbiIsIjxuYXYgYXJpYS1sYWJlbD1cInBhZ2Ugc2l6ZSBvcHRpb25zXCI+XG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cInNpemUgPT0gb1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgKGNsaWNrKT1cImNoYW5nZVNpemUobylcIj57e299fTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdWw+XG48L25hdj5cbiJdfQ==