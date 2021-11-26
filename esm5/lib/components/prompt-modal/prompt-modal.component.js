import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "../prompt-form/prompt-form.component";
function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.close(); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var PromptModalComponent = /** @class */ (function () {
    function PromptModalComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    PromptModalComponent.prototype.ngOnInit = function () {
    };
    PromptModalComponent.prototype.close = function () {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.prototype.confirm = function (value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.ɵfac = function PromptModalComponent_Factory(t) { return new (t || PromptModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
    PromptModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter", "onCancel", "onSave"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PromptModalComponent_button_3_Template, 3, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementStart(6, "polp-bs-prompt-form", 5);
            i0.ɵɵlistener("onCancel", function PromptModalComponent_Template_polp_bs_prompt_form_onCancel_6_listener() { return ctx.close(); })("onSave", function PromptModalComponent_Template_polp_bs_prompt_form_onSave_6_listener($event) { return ctx.confirm($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        } }, directives: [i2.NgIf, i3.PromptFormComponent], styles: [""] });
    return PromptModalComponent;
}());
export { PromptModalComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PromptModalComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-modal',
                templateUrl: './prompt-modal.component.html',
                styleUrls: ['./prompt-modal.component.css']
            }]
    }], function () { return [{ type: i1.BsModalRef }]; }, { autocomplete: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtbW9kYWwvcHJvbXB0LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ0EzQixpQ0FDSTtJQUQ4RCxvTEFBaUI7SUFDL0UsK0JBQXlCO0lBQUEsc0JBQU87SUFBQSxpQkFBTztJQUMzQyxpQkFBUzs7QURtQmI7SUEwQkksOEJBQ3FCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBbkJuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzRGQXZDUSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQzVCakMsOEJBQ0k7WUFBQSw2QkFBa0M7WUFBQSxZQUFTO1lBQUEsaUJBQUs7WUFDaEQsMkVBQ0k7WUFFUixpQkFBTTtZQUNOLDhCQUNJO1lBQUEseUJBQ007WUFDTiw4Q0FXc0I7WUFGRCxvSEFBWSxXQUFPLElBQUMseUdBQ1YsbUJBQWUsSUFETDtZQUV6QyxpQkFBc0I7WUFDMUIsaUJBQU07O1lBcEJnQyxlQUFTO1lBQVQsK0JBQVM7WUFDeUMsZUFBcUI7WUFBckIsd0NBQXFCO1lBS3BHLGVBQXVCO1lBQXZCLDREQUF1QjtZQUVQLGVBQWlCO1lBQWpCLG1DQUFpQixvQ0FBQSxxQ0FBQSxvQ0FBQSxxQ0FBQSwwQ0FBQSwyQ0FBQSxrQ0FBQSxnQ0FBQTs7K0JEVDFDO0NBb0VDLEFBN0NELElBNkNDO1NBeENZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM5Qzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJSW5wdXRGaWVsZFNwZWMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdEZvcm1JbnB1dHMge1xuICAgIGF1dG9jb21wbGV0ZT86IHN0cmluZztcbiAgICBlbmFibGVFbnRlcj86IGJvb2xlYW47XG5cbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2xvc2VCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDb25maXJtQnRuPzogYm9vbGVhbjtcblxuICAgIGNhbmNlbEJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5MYWJlbD86IHN0cmluZztcbiAgICBjYW5jZWxCdG5DbGFzc2VzPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5DbGFzc2VzPzogc3RyaW5nO1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbiAgICBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGhpZGVDYW5jZWxCdG46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaWRlQ29uZmlybUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaGlkZUNsb3NlQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICBAT3V0cHV0KCkgcmVzdWx0OiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2JzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBuZXcgU3ViamVjdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KG51bGwpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGUgcHVsbC1sZWZ0XCI+e3t0aXRsZX19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVDbG9zZUJ0blwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxkaXYgW2lubmVySHRtbF09XCJpbm5lckJvZHlcIj5cbiAgICA8L2Rpdj5cbiAgICA8cG9scC1icy1wcm9tcHQtZm9ybSBbZmllbGRzXT1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVDYW5jZWxCdG5dPVwiaGlkZUNhbmNlbEJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTdWJtaXRCdG5dPVwiaGlkZUNvbmZpcm1CdG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxCdG5UeHRdPVwiY2FuY2VsQnRuTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJtaXRCdG5UeHRdPVwiY29uZmlybUJ0bkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsQnRuQ2xhc3Nlc109XCJjYW5jZWxCdG5DbGFzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3VibWl0QnRuQ2xhc3Nlc109XCJjb25maXJtQnRuQ2xhc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtlbmFibGVFbnRlcl09XCJlbmFibGVFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2FuY2VsKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChvblNhdmUpPVwiY29uZmlybSgkZXZlbnQpXCI+XG4gICAgPC9wb2xwLWJzLXByb21wdC1mb3JtPlxuPC9kaXY+XG4iXX0=