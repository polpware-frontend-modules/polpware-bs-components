import { __extends, __read, __spread } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r0.bsAlertType)("dismissible", ctx_r0.alertDismissible);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var item_r11 = ctx.item;
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
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r13.faSpinner)("spin", true);
} }
function EmailComposerComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function EmailComposerComponent_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.submit(); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵtemplate(2, EmailComposerComponent_button_25_fa_icon_2_Template, 1, 2, "fa-icon", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r8.alertType == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.alertType == 3);
} }
function EmailComposerComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function EmailComposerComponent_ng_template_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.close(); });
    i0.ɵɵtext(1, " Close ");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return [32, 44, 58, 59]; };
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        var _this = _super.call(this) || this;
        _this.faSpinner = faSpinner;
        _this.initEmails = [];
        _this.onClose = new EventEmitter();
        return _this;
    }
    Object.defineProperty(EmailComposerComponent.prototype, "bsAlertType", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    EmailComposerComponent.prototype.ngOnInit = function () {
        if (this.initEmails && Array.isArray(this.initEmails)) {
            this.emails = __spread(this.initEmails);
        }
    };
    EmailComposerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.emailInputBox.focus(true);
        }, 200);
    };
    // Override
    EmailComposerComponent.prototype.submit = function () {
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
        _super.prototype.submit.call(this);
    };
    EmailComposerComponent.prototype.close = function () {
        this.onClose.emit();
    };
    EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
    EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 28, vars: 25, consts: [[3, "type", "dismissible", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["closeBtnTmpl", ""], [3, "type", "dismissible"], [1, "d-block", "small", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ml-2", 3, "icon", "spin", 4, "ngIf"], [1, "ml-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
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
            var _r3 = i0.ɵɵreference(14);
            var _r6 = i0.ɵɵreference(21);
            var _r9 = i0.ɵɵreference(27);
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
    return EmailComposerComponent;
}(EmailFormAbstractComponent));
export { EmailComposerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-email-composer',
                templateUrl: './email-composer.component.html',
                styleUrls: ['./email-composer.component.css']
            }]
    }], function () { return []; }, { initEmails: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0lDSDlELGlDQUNJO0lBQUEseUJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQUk7SUFDUixpQkFBUTs7O0lBSkQseUNBQW9CLHdDQUFBO0lBRW5CLGVBQ0o7SUFESSxvREFDSjs7O0lBdUJnQixZQUNKOzs7SUFESSxpREFDSjs7O0lBVVIsZ0NBQ0k7SUFBQSxzQ0FDSjtJQUFBLGlCQUFPOzs7SUFXUCxnQ0FDSTtJQUFBLDJDQUNKO0lBQUEsaUJBQU87OztJQU9ILDhCQUF3Rjs7O0lBQWxFLHdDQUFrQixjQUFBOzs7O0lBSDVDLGtDQUVJO0lBRjBDLDJMQUFrQjtJQUU1RCx3QkFDQTtJQUFBLDBGQUE4RTtJQUNsRixpQkFBUzs7O0lBSndELGdEQUEyQjtJQUdqQyxlQUFzQjtJQUF0Qiw0Q0FBc0I7Ozs7SUFHN0Usa0NBQ0k7SUFENEMsK0xBQWlCO0lBQzdELHVCQUNKO0lBQUEsaUJBQVM7OztBRDNEckI7SUFLNEMsMENBQTBCO0lBVWxFO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBVEQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLGdCQUFVLEdB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a0RBQUEsd0JBQUEsdUJBQUEsMEJBQUE7WUFlUCxlQUFvRDtZQUFwRCxxRkFBb0Q7WUFZckUsZUFBMEI7WUFBMUIsMENBQTBCO1lBQ08sZUFBMkQ7WUFBM0QsZ0RBQTJEO1lBVWhGLGVBQWE7WUFBYiwyQkFBYSxlQUFBLDRCQUFBO1lBR1EsZUFBeUQ7WUFBekQsZ0RBQXlEO1lBT3pGLGVBQXdDO1lBQXhDLHdDQUF3QyxpQkFBQTs7aUNEekR4RDtDQTZFQyxBQXhFRCxDQUs0QywwQkFBMEIsR0FtRXJFO1NBbkVZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNoRDs7a0JBTUksS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50LCBBbGVydFR5cGVFbnVtIH0gZnJvbSAnQHBvbHB3YXJlL25neC1lbWFpbC1jb21wb3Nlcic7XG5cbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1lbWFpbC1jb21wb3NlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlckNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgaW5pdEVtYWlsczogc3RyaW5nW10gPSBbXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYnNBbGVydFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGVydFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5pbmZvOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uZXJyb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLnN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS53YXJuaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdEVtYWlscyAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW5pdEVtYWlscykpIHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxzID0gWy4uLnRoaXMuaW5pdEVtYWlsc107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWFpbElucHV0Qm94LmZvY3VzKHRydWUpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgc3VibWl0KCkge1xuXG4gICAgICAgIC8vIFNhbml0eSBjaGVja1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVRpdGxlIHx8XG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlQm9keSB8fFxuICAgICAgICAgICAgIXRoaXMuZW1haWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLmVycm9yO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnUGxlYXNlIHByb3ZpZGUgcmVxdWlyZWQgdmFsdWVzIGFuZCB0cnkgYWdhaW4hJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLm5vbmU7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxhbGVydCBbdHlwZV09XCJic0FsZXJ0VHlwZVwiIFtkaXNtaXNzaWJsZV09XCJhbGVydERpc21pc3NpYmxlXCIgKm5nSWY9XCJhbGVydFR5cGUgPiAwXCI+XG4gICAgPHA+XG4gICAgICAgIHt7YWxlcnRNZXNzYWdlfX1cbiAgICA8L3A+XG48L2FsZXJ0PlxuXG48ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsPlJlY2lwaWVudHM8L2xhYmVsPlxuICAgICAgICA8dGFnLWlucHV0IFsobmdNb2RlbCldPVwiZW1haWxzXCIgI2VtYWlsSW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxJbnB1dHNcIlxuICAgICAgICAgICAgICAgICAgIChmb2N1c291dCk9XCJvbk91dE9mVGFnSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgKG9uVGV4dENoYW5nZSk9XCJ0ZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbYWRkT25QYXN0ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbbW9kZWxBc1N0cmluZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW3RyaW1UYWdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICBbdmFsaWRhdG9yc109XCJ2YWxpZGF0b3JzXCJcbiAgICAgICAgICAgICAgICAgICBbc2Vjb25kYXJ5UGxhY2Vob2xkZXJdPVwiJ0VtYWlscydcIlxuICAgICAgICAgICAgICAgICAgIFtzZXBhcmF0b3JLZXlDb2Rlc109XCJbMzIsNDQsNTgsNTldXCJcbiAgICAgICAgICAgICAgICAgICBbZGlzcGxheUJ5XT1cIidkaXNwbGF5J1wiXG4gICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJysgRW1haWwnXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0LWRyb3Bkb3duIFthdXRvY29tcGxldGVJdGVtc109XCJhdXRvY29tcGxldGVJdGVtc0FzeW5jIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kaXNwbGF5IH19XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuICAgICAgICA8L3RhZy1pbnB1dD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VUaXRsZUlucHV0XCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBpZD1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VUaXRsZVwiICNtZXNzYWdlVGl0bGVDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImQtYmxvY2sgc21hbGwgdGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFtZXNzYWdlVGl0bGVDdHJsLnZhbGlkICYmIG1lc3NhZ2VUaXRsZUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgU3ViamVjdCBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZUJvZHlJbnB1dFwiPk1lc3NhZ2U8L2xhYmVsPiAgICAgICAgXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZUJvZHlJbnB1dFwiIGlkPVwibWVzc2FnZUJvZHlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAjZW1haWxCb2R5XG4gICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBbbWluUm93c109XCI1XCIgW21heFJvd3NdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlQm9keVwiICNtZXNzYWdlQm9keUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ibG9jayBzbWFsbCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VCb2R5Q3RybC52YWxpZCAmJiBtZXNzYWdlQm9keUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgQm9keSBtZXNzYWdlIGlzIHJlcXVpcmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbWItNFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJzdWJtaXQoKVwiIFtkaXNhYmxlZF09XCJhbGVydFR5cGUgPT0gM1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhc2hvd0Nsb3NlQnRuOyBlbHNlIGNsb3NlQnRuVG1wbFwiPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8ZmEtaWNvbiBjbGFzcz1cIm1sLTJcIiBbaWNvbl09XCJmYVNwaW5uZXJcIiBbc3Bpbl09XCJ0cnVlXCIgKm5nSWY9XCJhbGVydFR5cGUgPT0gM1wiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2xvc2VCdG5UbXBsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=