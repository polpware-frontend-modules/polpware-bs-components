import { Component, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
function AlertBoxComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function AlertBoxComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.noBtnClasses);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noBtnLabel, " ");
} }
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
export class AlertBoxComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    ngOnInit() {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    }
    keyEvent(event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            this.confirm();
        }
    }
    close() {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    }
    static { this.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 10, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click", "ngClass"], ["type", "button", 1, "btn", "me-2", 3, "click", "ngClass"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, AlertBoxComponent_button_7_Template, 2, 2, "button", 6);
            i0.ɵɵelementStart(8, "button", 7);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_8_listener() { return ctx.confirm(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideNoBtn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.yesBtnClasses);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        } }, dependencies: [i2.NgClass, i2.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBoxComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-alert-box', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn me-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n" }]
    }], () => [{ type: i1.BsModalRef }], { hideNoBtn: [{
            type: Input
        }], yesBtnLabel: [{
            type: Input
        }], noBtnLabel: [{
            type: Input
        }], noBtnClasses: [{
            type: Input
        }], yesBtnClasses: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], title: [{
            type: Input
        }], innerBody: [{
            type: Input
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertBoxComponent, { className: "AlertBoxComponent", filePath: "lib\\components\\alert-box\\alert-box.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lDUzNCLGlDQUFxRztJQUFyQyxnTEFBUyxjQUFPLEtBQUM7SUFDN0UsWUFDSjtJQUFBLGlCQUFTOzs7SUFGOEIsNkNBQXdCO0lBQzNELGNBQ0o7SUFESSxrREFDSjs7QURSSixJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCwwQ0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUFrQkQsTUFBTSxPQUFPLGlCQUFpQjtJQWUxQixZQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVAzQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUt0QyxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFHekMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxlQUFlLENBQUM7SUFDN0QsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO2tGQTVDUSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtZQUFqQiw0RkFBQSxvQkFBZ0IsK0JBQUM7O1lDdkIxQixBQURKLDhCQUEwQixZQUNFO1lBQUEsWUFBUztZQUFBLGlCQUFLO1lBQ3RDLGlDQUE2RTtZQUFsQiw4RkFBUyxXQUFPLElBQUM7WUFFaEYsQUFESSxpQkFBUyxFQUNQO1lBQ04sOEJBQXdCO1lBQ3BCLHlCQUNNO1lBQ1YsaUJBQU07WUFDTiw4QkFBMEI7WUFDdEIsd0VBQXFHO1lBR3JHLGlDQUFnRjtZQUFwQiw4RkFBUyxhQUFTLElBQUM7WUFDM0UsWUFDSjtZQUNKLEFBREksaUJBQVMsRUFDUDs7WUFmc0IsZUFBUztZQUFULCtCQUFTO1lBSzVCLGVBQXVCO1lBQXZCLDREQUF1QjtZQUl1RCxlQUFnQjtZQUFoQixxQ0FBZ0I7WUFHakUsY0FBeUI7WUFBekIsMkNBQXlCO1lBQ3ZELGNBQ0o7WUFESSxnREFDSjs7O2lGRFNTLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNJLG1CQUFtQjsyQ0FNcEIsU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQWlCTixRQUFRO2tCQURQLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkEzQi9CLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRCb3hJbnB1dHMge1xuICAgIGhpZGVOb0J0bj86IGJvb2xlYW47XG4gICAgeWVzQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgbm9CdG5MYWJlbD86IHN0cmluZztcbiAgICBub0J0bkNsYXNzZXM/OiBzdHJpbmc7XG4gICAgeWVzQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICBlbmFibGVFbnRlcj86IGJvb2xlYW47XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWFsZXJ0LWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBoaWRlTm9CdG46IGJvb2xlYW47XG4gICAgQElucHV0KCkgeWVzQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm9CdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgeWVzQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG5cbiAgICByZXN1bHQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVOb0J0biA9IHRoaXMuaGlkZU5vQnRuIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnllc0J0bkxhYmVsID0gdGhpcy55ZXNCdG5MYWJlbCB8fCAnWWVzJztcbiAgICAgICAgdGhpcy5ub0J0bkxhYmVsID0gdGhpcy5ub0J0bkxhYmVsIHx8ICdObyc7XG5cbiAgICAgICAgdGhpcy55ZXNCdG5DbGFzc2VzID0gdGhpcy55ZXNCdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMubm9CdG5DbGFzc2VzID0gdGhpcy5ub0J0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxkaXYgW2lubmVySHRtbF09XCJpbm5lckJvZHlcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG1lLTJcIiBbbmdDbGFzc109XCJub0J0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVOb0J0blwiPlxuICAgICAgICB7e25vQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPiAgICBcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cInllc0J0bkNsYXNzZXNcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgIHt7eWVzQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cblxuIl19