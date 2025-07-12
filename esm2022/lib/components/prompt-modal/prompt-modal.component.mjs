import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "../prompt-form/prompt-form.component";
function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd();
} }
export class PromptModalComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    ngOnInit() {
    }
    close() {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm(value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    }
    static { this.ɵfac = function PromptModalComponent_Factory(t) { return new (t || PromptModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "btn-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "onCancel", "onSave", "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PromptModalComponent_button_3_Template, 1, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementStart(6, "polp-bs-prompt-form", 5);
            i0.ɵɵlistener("onCancel", function PromptModalComponent_Template_polp_bs_prompt_form_onCancel_6_listener() { return ctx.close(); })("onSave", function PromptModalComponent_Template_polp_bs_prompt_form_onSave_6_listener($event) { return ctx.confirm($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance();
            i0.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        } }, dependencies: [i2.NgIf, i3.PromptFormComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-modal', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }], { autocomplete: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], hideCancelBtn: [{
            type: Input
        }], hideConfirmBtn: [{
            type: Input
        }], hideCloseBtn: [{
            type: Input
        }], cancelBtnLabel: [{
            type: Input
        }], confirmBtnLabel: [{
            type: Input
        }], cancelBtnClasses: [{
            type: Input
        }], confirmBtnClasses: [{
            type: Input
        }], title: [{
            type: Input
        }], innerBody: [{
            type: Input
        }], fields: [{
            type: Input
        }], result: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PromptModalComponent, { className: "PromptModalComponent", filePath: "lib\\components\\prompt-modal\\prompt-modal.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb21wdC1tb2RhbC9wcm9tcHQtbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ0EzQixpQ0FBbUc7SUFBeEMsbUxBQVMsY0FBTyxLQUFDO0lBQzVFLGlCQUFTOztBRHlCYixNQUFNLE9BQU8sb0JBQW9CO0lBcUI3QixZQUNxQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQW5CbkMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFlbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztxRkF2Q1Esb0JBQW9CO29FQUFwQixvQkFBb0I7WUMzQjdCLEFBREosOEJBQTBCLFlBQ0U7WUFBQSxZQUFTO1lBQUEsaUJBQUs7WUFDdEMsMkVBQW1HO1lBRXZHLGlCQUFNO1lBQ04sOEJBQXdCO1lBQ3BCLHlCQUNNO1lBQ04sOENBVWdEO1lBQTNCLEFBREEsb0hBQVksV0FBTyxJQUFDLHlHQUNWLG1CQUFlLElBQUM7WUFFbkQsQUFESSxpQkFBc0IsRUFDcEI7O1lBbkJzQixlQUFTO1lBQVQsK0JBQVM7WUFDNkMsY0FBbUI7WUFBbkIsd0NBQW1CO1lBSTVGLGVBQXVCO1lBQXZCLDREQUF1QjtZQUVQLGNBQWlCO1lBUWpCLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxtQ0FBaUIsb0NBQ2MscUNBQ0Msb0NBQ0QscUNBQ0MsMENBQ0ssMkNBQ0Msa0NBQ1QsZ0NBQ0Y7OztpRkRZdkMsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0ksc0JBQXNCOzJDQU12QixZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSztZQUVHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTs7a0ZBbkJFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJSW5wdXRGaWVsZFNwZWMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdEZvcm1JbnB1dHMge1xuICAgIGF1dG9jb21wbGV0ZT86IHN0cmluZztcbiAgICBlbmFibGVFbnRlcj86IGJvb2xlYW47XG5cbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2xvc2VCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDb25maXJtQnRuPzogYm9vbGVhbjtcblxuICAgIGNhbmNlbEJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5MYWJlbD86IHN0cmluZztcbiAgICBjYW5jZWxCdG5DbGFzc2VzPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5DbGFzc2VzPzogc3RyaW5nO1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbiAgICBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGhpZGVDYW5jZWxCdG46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaWRlQ29uZmlybUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaGlkZUNsb3NlQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICBAT3V0cHV0KCkgcmVzdWx0OiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2JzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBuZXcgU3ViamVjdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KG51bGwpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIiAqbmdJZj1cIiFoaWRlQ2xvc2VCdG5cIj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8ZGl2IFtpbm5lckh0bWxdPVwiaW5uZXJCb2R5XCI+XG4gICAgPC9kaXY+XG4gICAgPHBvbHAtYnMtcHJvbXB0LWZvcm0gW2ZpZWxkc109XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlQ2FuY2VsQnRuXT1cImhpZGVDYW5jZWxCdG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU3VibWl0QnRuXT1cImhpZGVDb25maXJtQnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsQnRuVHh0XT1cImNhbmNlbEJ0bkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3VibWl0QnRuVHh0XT1cImNvbmZpcm1CdG5MYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbEJ0bkNsYXNzZXNdPVwiY2FuY2VsQnRuQ2xhc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3N1Ym1pdEJ0bkNsYXNzZXNdPVwiY29uZmlybUJ0bkNsYXNzZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZW5hYmxlRW50ZXJdPVwiZW5hYmxlRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNhbmNlbCk9XCJjbG9zZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAob25TYXZlKT1cImNvbmZpcm0oJGV2ZW50KVwiPlxuICAgIDwvcG9scC1icy1wcm9tcHQtZm9ybT5cbjwvZGl2PlxuIl19