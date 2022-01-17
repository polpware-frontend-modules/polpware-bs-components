import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "../prompt-form/prompt-form.component";
function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.close(); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtbW9kYWwvcHJvbXB0LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ0EzQixpQ0FDSTtJQUQ4RCxzTEFBaUI7SUFDL0UsK0JBQXlCO0lBQUEsc0JBQU87SUFBQSxpQkFBTztJQUMzQyxpQkFBUzs7QUR3QmIsTUFBTSxPQUFPLG9CQUFvQjtJQXFCN0IsWUFDcUIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFuQm5DLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBZW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBNkI7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O3dGQXZDUSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQzVCakMsOEJBQ0k7UUFBQSw2QkFBa0M7UUFBQSxZQUFTO1FBQUEsaUJBQUs7UUFDaEQsMkVBQ0k7UUFFUixpQkFBTTtRQUNOLDhCQUNJO1FBQUEseUJBQ007UUFDTiw4Q0FXc0I7UUFGRCxvSEFBWSxXQUFPLElBQUMseUdBQ1YsbUJBQWUsSUFETDtRQUV6QyxpQkFBc0I7UUFDMUIsaUJBQU07O1FBcEJnQyxlQUFTO1FBQVQsK0JBQVM7UUFDeUMsZUFBcUI7UUFBckIsd0NBQXFCO1FBS3BHLGVBQXVCO1FBQXZCLDREQUF1QjtRQUVQLGVBQWlCO1FBQWpCLG1DQUFpQixvQ0FBQSxxQ0FBQSxvQ0FBQSxxQ0FBQSwwQ0FBQSwyQ0FBQSxrQ0FBQSxnQ0FBQTs7a0REbUI3QixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzlDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0taGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXB0Rm9ybUlucHV0cyB7XG4gICAgYXV0b2NvbXBsZXRlPzogc3RyaW5nO1xuICAgIGVuYWJsZUVudGVyPzogYm9vbGVhbjtcblxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDbG9zZUJ0bj86IGJvb2xlYW47XG4gICAgaGlkZUNvbmZpcm1CdG4/OiBib29sZWFuO1xuXG4gICAgY2FuY2VsQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNhbmNlbEJ0bkNsYXNzZXM/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkNsYXNzZXM/OiBzdHJpbmc7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlubmVyQm9keTogc3RyaW5nO1xuICAgIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9tcHRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVFbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhpZGVDb25maXJtQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBoaWRlQ2xvc2VCdG46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FuY2VsQnRuQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlubmVyQm9keTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcblxuICAgIEBPdXRwdXQoKSByZXN1bHQ6IFN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQobnVsbCk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0odmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZUNsb3NlQnRuXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuICAgIDxwb2xwLWJzLXByb21wdC1mb3JtIFtmaWVsZHNdPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZUNhbmNlbEJ0bl09XCJoaWRlQ2FuY2VsQnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVN1Ym1pdEJ0bl09XCJoaWRlQ29uZmlybUJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbEJ0blR4dF09XCJjYW5jZWxCdG5MYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3N1Ym1pdEJ0blR4dF09XCJjb25maXJtQnRuTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxCdG5DbGFzc2VzXT1cImNhbmNlbEJ0bkNsYXNzZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJtaXRCdG5DbGFzc2VzXT1cImNvbmZpcm1CdG5DbGFzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2VuYWJsZUVudGVyXT1cImVuYWJsZUVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAob25DYW5jZWwpPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG9uU2F2ZSk9XCJjb25maXJtKCRldmVudClcIj5cbiAgICA8L3BvbHAtYnMtcHJvbXB0LWZvcm0+XG48L2Rpdj5cbiJdfQ==