import { Component } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-chips";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-autosize";
function EmailComposerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r8 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r8.display, " ");
} }
function EmailComposerComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1, " Body message is required. ");
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return [32, 44, 58, 59]; };
export class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
        this.messageTitle = '';
        this.messageBody = '';
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
}
EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 27, vars: 23, consts: [["class", "alert alert-danger show", "role", "alert", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "show"], [1, "d-block", "small", "text-danger"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmailComposerComponent_div_0_Template, 3, 1, "div", 0);
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
        i0.ɵɵelementStart(25, "button", 13);
        i0.ɵɵlistener("click", function EmailComposerComponent_Template_button_click_25_listener() { return ctx.submit(); });
        i0.ɵɵtext(26, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(14);
        const _r6 = i0.ɵɵreference(21);
        i0.ɵɵproperty("ngIf", ctx.alertType > 0);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(22, _c0))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 20, ctx.autocompleteItemsAsync));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.messageTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !_r3.valid && _r3.touched);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("minRows", 5)("maxRows", 10)("ngModel", ctx.messageBody);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !_r6.valid && _r6.touched);
    } }, directives: [i1.NgIf, i2.TagInputComponent, i3.NgControlStatus, i3.NgModel, i2.TagInputDropdown, i3.DefaultValueAccessor, i3.RequiredValidator, i4.AutosizeDirective], pipes: [i1.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-email-composer',
                templateUrl: './email-composer.component.html',
                styleUrls: ['./email-composer.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7SUNEekYsK0JBQ0k7SUFBQSx5QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSTtJQUNSLGlCQUFNOzs7SUFGRSxlQUNKO0lBREksb0RBQ0o7OztJQXVCZ0IsWUFDSjs7O0lBREksZ0RBQ0o7OztJQVVSLGdDQUNJO0lBQUEsc0NBQ0o7SUFBQSxpQkFBTzs7O0lBV1AsZ0NBQ0k7SUFBQSwyQ0FDSjtJQUFBLGlCQUFPOzs7QUQ1Q2YsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDBCQUEwQjtJQUVsRTtRQUVJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGVBQWU7UUFDWCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFdBQVc7SUFDWCxNQUFNO1FBRUYsZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNsQixDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0NBQStDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPO1NBQ1Y7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7OzRGQXBDUSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1JuQyx1RUFDSTtRQUtKLDJCQUNJO1FBQUEsOEJBQ0k7UUFBQSw2QkFBTztRQUFBLDBCQUFVO1FBQUEsaUJBQVE7UUFDekIsdUNBZUk7UUFmTyxtSkFBb0IscUdBRVIsMkJBQXVCLElBRmYsNkdBR0osdUJBQW1CLElBSGY7UUFlM0IsNkNBQ0k7O1FBQUEsb0ZBQ0k7UUFFUixpQkFBcUI7UUFDekIsaUJBQVk7UUFDaEIsaUJBQU07UUFFTiwrQkFDSTtRQUFBLGlDQUErQjtRQUFBLHdCQUFPO1FBQUEsaUJBQVE7UUFDOUMsb0NBR0E7UUFETyxzSkFBMEI7UUFGakMsaUJBR0E7UUFBQSwyRUFDSTtRQUVSLGlCQUFNO1FBRU4sK0JBQ0k7UUFBQSxpQ0FBOEI7UUFBQSx3QkFBTztRQUFBLGlCQUFRO1FBQzdDLHlDQUtBO1FBRFUsd0pBQXlCO1FBQ25DLHlCQUFBO1FBQUEsaUJBQVc7UUFDWCwyRUFDSTtRQUVSLGlCQUFNO1FBRU4sZ0NBQ0k7UUFBQSxtQ0FBaUU7UUFBbkIsb0dBQVMsWUFBUSxJQUFDO1FBQUMsdUJBQU07UUFBQSxpQkFBUztRQUNwRixpQkFBTTtRQUNWLGlCQUFNOzs7O1FBMUQ0Qyx3Q0FBcUI7UUFTcEQsZUFBb0I7UUFBcEIsb0NBQW9CLG9CQUFBLHdCQUFBLGtCQUFBLGtCQUFBLG9DQUFBLDhCQUFBLGtDQUFBLGtEQUFBLHdCQUFBLHVCQUFBLDBCQUFBO1FBZVAsZUFBb0Q7UUFBcEQscUZBQW9EO1FBWXJFLGVBQTBCO1FBQTFCLDBDQUEwQjtRQUNPLGVBQTJEO1FBQTNELGdEQUEyRDtRQVVoRixlQUFhO1FBQWIsMkJBQWEsZUFBQSw0QkFBQTtRQUdRLGVBQXlEO1FBQXpELGdEQUF5RDs7a0REMUM1RixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCwgQWxlcnRUeXBlRW51bSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZW1haWwtY29tcG9zZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZW1haWwtY29tcG9zZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXJDb21wb25lbnQgZXh0ZW5kcyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VUaXRsZSA9ICcnO1xuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gJyc7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxJbnB1dEJveC5mb2N1cyh0cnVlKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHN1Ym1pdCgpIHtcblxuICAgICAgICAvLyBTYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VUaXRsZSB8fFxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZUJvZHkgfHxcbiAgICAgICAgICAgICF0aGlzLmVtYWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5lcnJvcjtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ1BsZWFzZSBwcm92aWRlIHJlcXVpcmVkIHZhbHVlcyBhbmQgdHJ5IGFnYWluISc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5ub25lO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc3VibWl0KCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIHNob3dcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cImFsZXJ0VHlwZSA+IDBcIj5cbiAgICA8cD5cbiAgICAgICAge3thbGVydE1lc3NhZ2V9fVxuICAgIDwvcD5cbjwvZGl2PlxuXG48ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsPlJlY2lwaWVudHM8L2xhYmVsPlxuICAgICAgICA8dGFnLWlucHV0IFsobmdNb2RlbCldPVwiZW1haWxzXCIgI2VtYWlsSW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxJbnB1dHNcIlxuICAgICAgICAgICAgICAgICAgIChmb2N1c291dCk9XCJvbk91dE9mVGFnSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgKG9uVGV4dENoYW5nZSk9XCJ0ZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbYWRkT25QYXN0ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbbW9kZWxBc1N0cmluZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW3RyaW1UYWdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICBbdmFsaWRhdG9yc109XCJ2YWxpZGF0b3JzXCJcbiAgICAgICAgICAgICAgICAgICBbc2Vjb25kYXJ5UGxhY2Vob2xkZXJdPVwiJ0VtYWlscydcIlxuICAgICAgICAgICAgICAgICAgIFtzZXBhcmF0b3JLZXlDb2Rlc109XCJbMzIsNDQsNTgsNTldXCJcbiAgICAgICAgICAgICAgICAgICBbZGlzcGxheUJ5XT1cIidkaXNwbGF5J1wiXG4gICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJysgRW1haWwnXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0LWRyb3Bkb3duIFthdXRvY29tcGxldGVJdGVtc109XCJhdXRvY29tcGxldGVJdGVtc0FzeW5jIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kaXNwbGF5IH19XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuICAgICAgICA8L3RhZy1pbnB1dD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VUaXRsZUlucHV0XCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBpZD1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VUaXRsZVwiICNtZXNzYWdlVGl0bGVDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImQtYmxvY2sgc21hbGwgdGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFtZXNzYWdlVGl0bGVDdHJsLnZhbGlkICYmIG1lc3NhZ2VUaXRsZUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgU3ViamVjdCBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZUJvZHlJbnB1dFwiPk1lc3NhZ2U8L2xhYmVsPiAgICAgICAgXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZUJvZHlJbnB1dFwiIGlkPVwibWVzc2FnZUJvZHlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAjZW1haWxCb2R5XG4gICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBbbWluUm93c109XCI1XCIgW21heFJvd3NdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlQm9keVwiICNtZXNzYWdlQm9keUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ibG9jayBzbWFsbCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VCb2R5Q3RybC52YWxpZCAmJiBtZXNzYWdlQm9keUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgQm9keSBtZXNzYWdlIGlzIHJlcXVpcmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbWItNFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJzdWJtaXQoKVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=