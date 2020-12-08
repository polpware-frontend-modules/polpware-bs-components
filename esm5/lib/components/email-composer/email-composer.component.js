import { __extends } from "tslib";
import { Component } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-chips";
import * as i4 from "ngx-autosize";
function EmailComposerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var item_r8 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r8.display, " ");
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
var _c0 = function () { return [32, 44, 58, 59]; };
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        var _this = _super.call(this) || this;
        _this.messageTitle = '';
        _this.messageBody = '';
        return _this;
    }
    // Override
    EmailComposerComponent.prototype.submit = function () {
        // Sanity check
        if (!this.messageTitle ||
            !this.messageBody ||
            !this.emails.length) {
            this.alertType = AlertTypeEnum.error;
            this.alertMessage = 'Please provide necessary values and try again!';
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
    EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
    EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 27, vars: 23, consts: [["class", "alert alert-danger show", "role", "alert", 4, "ngIf"], ["name", "emailForm", "autocomplete", "off", 3, "ngSubmit"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-danger", "show"], [1, "d-block", "small", "text-danger"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, EmailComposerComponent_div_0_Template, 3, 1, "div", 0);
            i0.ɵɵelementStart(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function EmailComposerComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4, "Receiver(s)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tag-input", 3, 4);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
            i0.ɵɵelementStart(7, "tag-input-dropdown", 5);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 2);
            i0.ɵɵelementStart(11, "label", 6);
            i0.ɵɵtext(12, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 7, 8);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.messageTitle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, EmailComposerComponent_span_15_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 2);
            i0.ɵɵelementStart(17, "label", 10);
            i0.ɵɵtext(18, "Message");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "textarea", 11, 12);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.messageBody = $event; });
            i0.ɵɵtext(22, "        ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, EmailComposerComponent_span_23_Template, 2, 0, "span", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 13);
            i0.ɵɵelementStart(25, "button", 14);
            i0.ɵɵtext(26, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = i0.ɵɵreference(14);
            var _r6 = i0.ɵɵreference(21);
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
        } }, directives: [i1.NgIf, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.NgForm, i3.TagInputComponent, i2.NgControlStatus, i2.NgModel, i3.TagInputDropdown, i2.DefaultValueAccessor, i2.RequiredValidator, i4.AutosizeDirective], pipes: [i1.AsyncPipe], styles: [""] });
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
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7SUNEekYsK0JBQ0k7SUFBQSx5QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSTtJQUNSLGlCQUFNOzs7SUFGRSxlQUNKO0lBREksb0RBQ0o7OztJQXVCZ0IsWUFDSjs7O0lBREksZ0RBQ0o7OztJQVVSLGdDQUNJO0lBQUEsc0NBQ0o7SUFBQSxpQkFBTzs7O0lBV1AsZ0NBQ0k7SUFBQSwyQ0FDSjtJQUFBLGlCQUFPOzs7QURqRGY7SUFLNEMsMENBQTBCO0lBRWxFO1FBQUEsWUFFSSxpQkFBTyxTQUlWO1FBRkcsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O0lBQzFCLENBQUM7SUFFRCxXQUFXO0lBQ1gsdUNBQU0sR0FBTjtRQUVJLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDbEIsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNqQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdEQUFnRCxDQUFDO1lBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsT0FBTztTQUNWO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7Z0dBOUJRLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDUm5DLHVFQUNJO1lBS0osK0JBQ0k7WUFEc0MsdUdBQVksWUFBUSxJQUFDO1lBQzNELDhCQUNJO1lBQUEsNkJBQU87WUFBQSwyQkFBVztZQUFBLGlCQUFRO1lBQzFCLHVDQWVJO1lBZk8sbUpBQW9CLHFHQUVSLDJCQUF1QixJQUZmLDZHQUdKLHVCQUFtQixJQUhmO1lBZTNCLDZDQUNJOztZQUFBLG9GQUNJO1lBRVIsaUJBQXFCO1lBQ3pCLGlCQUFZO1lBQ2hCLGlCQUFNO1lBRU4sK0JBQ0k7WUFBQSxpQ0FBK0I7WUFBQSx3QkFBTztZQUFBLGlCQUFRO1lBQzlDLG9DQUdBO1lBRE8sc0pBQTBCO1lBRmpDLGlCQUdBO1lBQUEsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLCtCQUNJO1lBQUEsa0NBQThCO1lBQUEsd0JBQU87WUFBQSxpQkFBUTtZQUM3Qyx5Q0FLQTtZQURVLHdKQUF5QjtZQUNuQyx5QkFBQTtZQUFBLGlCQUFXO1lBQ1gsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLGdDQUNJO1lBQUEsbUNBQThDO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUNqRSxpQkFBTTtZQUNWLGlCQUFPOzs7O1lBMUQyQyx3Q0FBcUI7WUFTcEQsZUFBb0I7WUFBcEIsb0NBQW9CLG9CQUFBLHdCQUFBLGtCQUFBLGtCQUFBLG9DQUFBLDhCQUFBLGtDQUFBLGtEQUFBLHdCQUFBLHVCQUFBLDBCQUFBO1lBZVAsZUFBb0Q7WUFBcEQscUZBQW9EO1lBWXJFLGVBQTBCO1lBQTFCLDBDQUEwQjtZQUNPLGVBQTJEO1lBQTNELGdEQUEyRDtZQVVoRixlQUFhO1lBQWIsMkJBQWEsZUFBQSw0QkFBQTtZQUdRLGVBQXlEO1lBQXpELGdEQUF5RDs7aUNEbER6RztDQXdDQyxBQXJDRCxDQUs0QywwQkFBMEIsR0FnQ3JFO1NBaENZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQsIEFsZXJ0VHlwZUVudW0gfSBmcm9tICdAcG9scHdhcmUvbmd4LWVtYWlsLWNvbXBvc2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWVtYWlsLWNvbXBvc2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IGV4dGVuZHMgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VUaXRsZSA9ICcnO1xuICAgICAgICB0aGlzLm1lc3NhZ2VCb2R5ID0gJyc7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlVGl0bGUgfHxcbiAgICAgICAgICAgICF0aGlzLm1lc3NhZ2VCb2R5IHx8XG4gICAgICAgICAgICAhdGhpcy5lbWFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0uZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdQbGVhc2UgcHJvdmlkZSBuZWNlc3NhcnkgdmFsdWVzIGFuZCB0cnkgYWdhaW4hJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLm5vbmU7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zdWJtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgc2hvd1wiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiYWxlcnRUeXBlID4gMFwiPlxuICAgIDxwPlxuICAgICAgICB7e2FsZXJ0TWVzc2FnZX19XG4gICAgPC9wPlxuPC9kaXY+XG5cbjxmb3JtIG5hbWU9XCJlbWFpbEZvcm1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbD5SZWNlaXZlcihzKTwvbGFiZWw+XG4gICAgICAgIDx0YWctaW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbHNcIiAjZW1haWxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgKGZvY3Vzb3V0KT1cIm9uT3V0T2ZUYWdJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRleHRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFthZGRPblBhc3RlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFttb2RlbEFzU3RyaW5nc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbdHJpbVRhZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2VkaXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0b3JzXT1cInZhbGlkYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtzZWNvbmRhcnlQbGFjZWhvbGRlcl09XCInRW1haWxzJ1wiXG4gICAgICAgICAgICAgICAgICAgW3NlcGFyYXRvcktleUNvZGVzXT1cIlszMiw0NCw1OCw1OV1cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2Rpc3BsYXknXCJcbiAgICAgICAgICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCIgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInKyBFbWFpbCdcIj5cbiAgICAgICAgICAgIDx0YWctaW5wdXQtZHJvcGRvd24gW2F1dG9jb21wbGV0ZUl0ZW1zXT1cImF1dG9jb21wbGV0ZUl0ZW1zQXN5bmMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRpc3BsYXkgfX1cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWctaW5wdXQtZHJvcGRvd24+XG4gICAgICAgIDwvdGFnLWlucHV0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVRpdGxlSW5wdXRcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIGlkPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZVRpdGxlXCIgI21lc3NhZ2VUaXRsZUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ibG9jayBzbWFsbCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VUaXRsZUN0cmwudmFsaWQgJiYgbWVzc2FnZVRpdGxlQ3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICBTdWJqZWN0IGlzIHJlcXVpcmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlQm9keUlucHV0XCI+TWVzc2FnZTwvbGFiZWw+ICAgICAgICBcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlQm9keUlucHV0XCIgaWQ9XCJtZXNzYWdlQm9keUlucHV0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICNlbWFpbEJvZHlcbiAgICAgICAgICAgICAgICAgIGF1dG9zaXplIFttaW5Sb3dzXT1cIjVcIiBbbWF4Um93c109XCIxMFwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VCb2R5XCIgI21lc3NhZ2VCb2R5Q3RybD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkLWJsb2NrIHNtYWxsIHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZUJvZHlDdHJsLnZhbGlkICYmIG1lc3NhZ2VCb2R5Q3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICBCb2R5IG1lc3NhZ2UgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtYi00XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=