import { Component, Output, EventEmitter } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-chips";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-autosize";
import * as i5 from "ngx-bootstrap/alert";
import * as i6 from "@fortawesome/angular-fontawesome";
function EmailComposerComponent_alert_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "alert", 15);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r0.bsAlertType)("dismissible", ctx_r0.alertDismissible);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r11 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r11.display, " ");
} }
function EmailComposerComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1, " Body message is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_button_25_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 19);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r13.faSpinner)("spin", true);
} }
function EmailComposerComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function EmailComposerComponent_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.submit(); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵtemplate(2, EmailComposerComponent_button_25_fa_icon_2_Template, 1, 2, "fa-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r8.alertType == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.alertType == 3);
} }
function EmailComposerComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function EmailComposerComponent_ng_template_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.close(); });
    i0.ɵɵtext(1, " Close ");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return [32, 44, 58, 59]; };
export class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
        this.faSpinner = faSpinner;
        this.onClose = new EventEmitter();
    }
    get bsAlertType() {
        switch (this.alertType) {
            case AlertTypeEnum.info:
                return 'info';
            case AlertTypeEnum.error:
                return 'danger';
            case AlertTypeEnum.success:
                return 'success';
            case AlertTypeEnum.warning:
                return 'warning';
            default:
                return 'info';
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.emailInputBox.focus(true);
        }, 200);
    }
    // Override
    submit() {
        // Sanity check
        if (!this.messageTitle ||
            !this.messageBody ||
            !this.emails.length) {
            this.alertType = AlertTypeEnum.error;
            this.alertMessage = 'Please provide required values and try again!';
            this.alertSubMessage = '';
            this.alertDismissible = true;
            return;
        }
        else {
            this.alertType = AlertTypeEnum.none;
            this.alertMessage = '';
            this.alertSubMessage = '';
            this.alertDismissible = true;
        }
        super.submit();
    }
    close() {
        this.onClose.emit();
    }
}
EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 28, vars: 25, consts: [[3, "type", "dismissible", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["closeBtnTmpl", ""], [3, "type", "dismissible"], [1, "d-block", "small", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ml-2", 3, "icon", "spin", 4, "ngIf"], [1, "ml-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "label");
        i0.ɵɵtext(4, "Recipients");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tag-input", 2, 3);
        i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
        i0.ɵɵelementStart(7, "tag-input-dropdown", 4);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 1);
        i0.ɵɵelementStart(11, "label", 5);
        i0.ɵɵtext(12, "Subject");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 6, 7);
        i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.messageTitle = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, EmailComposerComponent_span_15_Template, 2, 0, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 1);
        i0.ɵɵelementStart(17, "label", 9);
        i0.ɵɵtext(18, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "textarea", 10, 11);
        i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.messageBody = $event; });
        i0.ɵɵtext(22, "        ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, EmailComposerComponent_span_23_Template, 2, 0, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 12);
        i0.ɵɵtemplate(25, EmailComposerComponent_button_25_Template, 3, 2, "button", 13);
        i0.ɵɵtemplate(26, EmailComposerComponent_ng_template_26_Template, 2, 0, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(14);
        const _r6 = i0.ɵɵreference(21);
        const _r9 = i0.ɵɵreference(27);
        i0.ɵɵproperty("ngIf", ctx.alertType > 0);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(24, _c0))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 22, ctx.autocompleteItemsAsync));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.messageTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !_r3.valid && _r3.touched);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("minRows", 5)("maxRows", 10)("ngModel", ctx.messageBody);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !_r6.valid && _r6.touched);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", _r9);
    } }, directives: [i1.NgIf, i2.TagInputComponent, i3.NgControlStatus, i3.NgModel, i2.TagInputDropdown, i3.DefaultValueAccessor, i3.RequiredValidator, i4.AutosizeDirective, i5.AlertComponent, i6.FaIconComponent], pipes: [i1.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-email-composer',
                templateUrl: './email-composer.component.html',
                styleUrls: ['./email-composer.component.css']
            }]
    }], function () { return []; }, { onClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7OztJQ0g5RCxpQ0FDSTtJQUFBLHlCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFJO0lBQ1IsaUJBQVE7OztJQUpELHlDQUFvQix3Q0FBQTtJQUVuQixlQUNKO0lBREksb0RBQ0o7OztJQXVCZ0IsWUFDSjs7O0lBREksaURBQ0o7OztJQVVSLGdDQUNJO0lBQUEsc0NBQ0o7SUFBQSxpQkFBTzs7O0lBV1AsZ0NBQ0k7SUFBQSwyQ0FDSjtJQUFBLGlCQUFPOzs7SUFPSCw4QkFBd0Y7OztJQUFsRSx3Q0FBa0IsY0FBQTs7OztJQUg1QyxrQ0FFSTtJQUYwQyw2TEFBa0I7SUFFNUQsd0JBQ0E7SUFBQSwwRkFBOEU7SUFDbEYsaUJBQVM7OztJQUp3RCxnREFBMkI7SUFHakMsZUFBc0I7SUFBdEIsNENBQXNCOzs7O0lBRzdFLGtDQUNJO0lBRDRDLGlNQUFpQjtJQUM3RCx1QkFDSjtJQUFBLGlCQUFTOzs7QUR0RHJCLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSwwQkFBMEI7SUFPbEU7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQVBaLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFHdEIsWUFB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QUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDaEQ7O2tCQUtJLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCwgQWxlcnRUeXBlRW51bSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZW1haWwtY29tcG9zZXInO1xuXG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZW1haWwtY29tcG9zZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXJDb21wb25lbnQgZXh0ZW5kcyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGJzQWxlcnRUeXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxlcnRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uaW5mbzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZm8nO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLmVycm9yOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5zdWNjZXNzOlxuICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0ud2FybmluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZm8nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxJbnB1dEJveC5mb2N1cyh0cnVlKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHN1Ym1pdCgpIHtcblxuICAgICAgICAvLyBTYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VUaXRsZSB8fFxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZUJvZHkgfHxcbiAgICAgICAgICAgICF0aGlzLmVtYWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5lcnJvcjtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ1BsZWFzZSBwcm92aWRlIHJlcXVpcmVkIHZhbHVlcyBhbmQgdHJ5IGFnYWluISc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5ub25lO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG59XG4iLCI8YWxlcnQgW3R5cGVdPVwiYnNBbGVydFR5cGVcIiBbZGlzbWlzc2libGVdPVwiYWxlcnREaXNtaXNzaWJsZVwiICpuZ0lmPVwiYWxlcnRUeXBlID4gMFwiPlxuICAgIDxwPlxuICAgICAgICB7e2FsZXJ0TWVzc2FnZX19XG4gICAgPC9wPlxuPC9hbGVydD5cblxuPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbD5SZWNpcGllbnRzPC9sYWJlbD5cbiAgICAgICAgPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cImVtYWlsc1wiICNlbWFpbElucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAoZm9jdXNvdXQpPVwib25PdXRPZlRhZ0lucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidGV4dENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgW2FkZE9uUGFzdGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW21vZGVsQXNTdHJpbmdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFt0cmltVGFnc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwidmFsaWRhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cIidFbWFpbHMnXCJcbiAgICAgICAgICAgICAgICAgICBbc2VwYXJhdG9yS2V5Q29kZXNdPVwiWzMyLDQ0LDU4LDU5XVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCInZGlzcGxheSdcIlxuICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIicrIEVtYWlsJ1wiPlxuICAgICAgICAgICAgPHRhZy1pbnB1dC1kcm9wZG93biBbYXV0b2NvbXBsZXRlSXRlbXNdPVwiYXV0b2NvbXBsZXRlSXRlbXNBc3luYyB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheSB9fVxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RhZy1pbnB1dC1kcm9wZG93bj5cbiAgICAgICAgPC90YWctaW5wdXQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlVGl0bGVJbnB1dFwiPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgaWQ9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIFxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlVGl0bGVcIiAjbWVzc2FnZVRpdGxlQ3RybD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkLWJsb2NrIHNtYWxsIHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZVRpdGxlQ3RybC52YWxpZCAmJiBtZXNzYWdlVGl0bGVDdHJsLnRvdWNoZWRcIj5cbiAgICAgICAgICAgIFN1YmplY3QgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VCb2R5SW5wdXRcIj5NZXNzYWdlPC9sYWJlbD4gICAgICAgIFxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VCb2R5SW5wdXRcIiBpZD1cIm1lc3NhZ2VCb2R5SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgI2VtYWlsQm9keVxuICAgICAgICAgICAgICAgICAgYXV0b3NpemUgW21pblJvd3NdPVwiNVwiIFttYXhSb3dzXT1cIjEwXCJcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIiAjbWVzc2FnZUJvZHlDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImQtYmxvY2sgc21hbGwgdGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFtZXNzYWdlQm9keUN0cmwudmFsaWQgJiYgbWVzc2FnZUJvZHlDdHJsLnRvdWNoZWRcIj5cbiAgICAgICAgICAgIEJvZHkgbWVzc2FnZSBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiYWxlcnRUeXBlID09IDNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIXNob3dDbG9zZUJ0bjsgZWxzZSBjbG9zZUJ0blRtcGxcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJtbC0yXCIgW2ljb25dPVwiZmFTcGlubmVyXCIgW3NwaW5dPVwidHJ1ZVwiICpuZ0lmPVwiYWxlcnRUeXBlID09IDNcIj48L2ZhLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Nsb3NlQnRuVG1wbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19