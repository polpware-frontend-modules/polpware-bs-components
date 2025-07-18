import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ "active": a0 });
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3)(2, "a", 4);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { const o_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSize(o_r2)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r2.size == o_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r2);
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
    static { this.ɵfac = function PageSizeOptionsWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageSizeOptionsWidgetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul", 1);
            i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, dependencies: [i1.NgClass, i1.NgForOf], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-page-size-options-widget', template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
    }], () => [], { initSize: [{
            type: Input
        }], options: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageSizeOptionsWidgetComponent, { className: "PageSizeOptionsWidgetComponent", filePath: "lib\\widgets\\page-size-options-widget\\page-size-options-widget.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi93aWRnZXRzL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNFdkUsNkJBQXdDO0lBRWhDLEFBREosNkJBQXdELFdBQ1A7SUFBeEIscU5BQVMsdUJBQWEsS0FBQztJQUFDLFlBQUs7SUFDdEQsQUFEc0QsaUJBQUksRUFDckQ7Ozs7O0lBRmlCLGNBQWlDO0lBQWpDLHlFQUFpQztJQUNOLGVBQUs7SUFBTCwwQkFBSzs7QURHbEUsTUFBTSxPQUFPLDhCQUE4QjtJQVN2QztRQVBTLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFaEQsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDOytIQWxCUSw4QkFBOEI7b0VBQTlCLDhCQUE4QjtZQ052QyxBQURKLDhCQUFvQyxZQUNUO1lBQ25CLGlHQUF3QztZQU1oRCxBQURJLGlCQUFLLEVBQ0g7O1lBTjhCLGVBQVU7WUFBVixxQ0FBVTs7O2lGREtqQyw4QkFBOEI7Y0FMMUMsU0FBUzsyQkFDSSxrQ0FBa0M7b0JBTW5DLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNOztrRkFMRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGluaXRTaXplID0gNDA7XG4gICAgQElucHV0KCkgb3B0aW9uczogbnVtYmVyW10gPSBbNDAsIDEwMCwgMjAwLCA0MDAsIDgwMF07XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIHNpemU6IG51bWJlciA9IDQwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmluaXRTaXplO1xuICAgIH1cblxuICAgIGNoYW5nZVNpemUoczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHM7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChzKTtcbiAgICB9XG5cbn1cbiIsIjxuYXYgYXJpYS1sYWJlbD1cInBhZ2Ugc2l6ZSBvcHRpb25zXCI+XG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogc2l6ZSA9PSBvfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgKGNsaWNrKT1cImNoYW5nZVNpemUobylcIj57e299fTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdWw+XG48L25hdj5cbiJdfQ==