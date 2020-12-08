import { __extends } from "tslib";
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
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
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
        } }, directives: [i1.NgIf, i2.TagInputComponent, i3.NgControlStatus, i3.NgModel, i2.TagInputDropdown, i3.DefaultValueAccessor, i3.RequiredValidator, i4.AutosizeDirective], pipes: [i1.AsyncPipe], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0lDRHpGLCtCQUNJO0lBQUEseUJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQUk7SUFDUixpQkFBTTs7O0lBRkUsZUFDSjtJQURJLG9EQUNKOzs7SUF1QmdCLFlBQ0o7OztJQURJLGdEQUNKOzs7SUFVUixnQ0FDSTtJQUFBLHNDQUNKO0lBQUEsaUJBQU87OztJQVdQLGdDQUNJO0lBQUEsMkNBQ0o7SUFBQSxpQkFBTzs7O0FEakRmO0lBSzRDLDBDQUEwQjtJQUVsRTtRQUFBLFlBRUksaUJBQU8sU0FJVjtRQUZHLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFdBQVc7SUFDWCx1Q0FBTSxHQUFOO1FBRUksZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNsQixDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0NBQStDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPO1NBQ1Y7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztnR0FwQ1Esc0JBQXNCOytEQUF0QixzQkFBc0I7WUNSbkMsdUVBQ0k7WUFLSiwyQkFDSTtZQUFBLDhCQUNJO1lBQUEsNkJBQU87WUFBQSwwQkFBVTtZQUFBLGlCQUFRO1lBQ3pCLHVDQWVJO1lBZk8sbUpBQW9CLHFHQUVSLDJCQUF1QixJQUZmLDZHQUdKLHVCQUFtQixJQUhmO1lBZTNCLDZDQUNJOztZQUFBLG9GQUNJO1lBRVIsaUJBQXFCO1lBQ3pCLGlCQUFZO1lBQ2hCLGlCQUFNO1lBRU4sK0JBQ0k7WUFBQSxpQ0FBK0I7WUFBQSx3QkFBTztZQUFBLGlCQUFRO1lBQzlDLG9DQUdBO1lBRE8sc0pBQTBCO1lBRmpDLGlCQUdBO1lBQUEsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLCtCQUNJO1lBQUEsaUNBQThCO1lBQUEsd0JBQU87WUFBQSxpQkFBUTtZQUM3Qyx5Q0FLQTtZQURVLHdKQUF5QjtZQUNuQyx5QkFBQTtZQUFBLGlCQUFXO1lBQ1gsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLGdDQUNJO1lBQUEsbUNBQWlFO1lBQW5CLG9HQUFTLFlBQVEsSUFBQztZQUFDLHVCQUFNO1lBQUEsaUJBQVM7WUFDcEYsaUJBQU07WUFDVixpQkFBTTs7OztZQTFENEMsd0NBQXFCO1lBU3BELGVBQW9CO1lBQXBCLG9DQUFvQixvQkFBQSx3QkFBQSxrQkFBQSxrQkFBQSxvQ0FBQSw4QkFBQSxrQ0FBQSxrREFBQSx3QkFBQSx1QkFBQSwwQkFBQTtZQWVQLGVBQW9EO1lBQXBELHFGQUFvRDtZQVlyRSxlQUEwQjtZQUExQiwwQ0FBMEI7WUFDTyxlQUEyRDtZQUEzRCxnREFBMkQ7WUFVaEYsZUFBYTtZQUFiLDJCQUFhLGVBQUEsNEJBQUE7WUFHUSxlQUF5RDtZQUF6RCxnREFBeUQ7O2lDRGxEekc7Q0E4Q0MsQUEzQ0QsQ0FLNEMsMEJBQTBCLEdBc0NyRTtTQXRDWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50LCBBbGVydFR5cGVFbnVtIH0gZnJvbSAnQHBvbHB3YXJlL25neC1lbWFpbC1jb21wb3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1lbWFpbC1jb21wb3NlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlckNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVRpdGxlID0gJyc7XG4gICAgICAgIHRoaXMubWVzc2FnZUJvZHkgPSAnJztcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWFpbElucHV0Qm94LmZvY3VzKHRydWUpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgc3VibWl0KCkge1xuXG4gICAgICAgIC8vIFNhbml0eSBjaGVja1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVRpdGxlIHx8XG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlQm9keSB8fFxuICAgICAgICAgICAgIXRoaXMuZW1haWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLmVycm9yO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnUGxlYXNlIHByb3ZpZGUgcmVxdWlyZWQgdmFsdWVzIGFuZCB0cnkgYWdhaW4hJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLm5vbmU7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zdWJtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgc2hvd1wiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiYWxlcnRUeXBlID4gMFwiPlxuICAgIDxwPlxuICAgICAgICB7e2FsZXJ0TWVzc2FnZX19XG4gICAgPC9wPlxuPC9kaXY+XG5cbjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiPlxuICAgICAgICA8bGFiZWw+UmVjaXBpZW50czwvbGFiZWw+XG4gICAgICAgIDx0YWctaW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbHNcIiAjZW1haWxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgKGZvY3Vzb3V0KT1cIm9uT3V0T2ZUYWdJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRleHRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFthZGRPblBhc3RlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFttb2RlbEFzU3RyaW5nc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbdHJpbVRhZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2VkaXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0b3JzXT1cInZhbGlkYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtzZWNvbmRhcnlQbGFjZWhvbGRlcl09XCInRW1haWxzJ1wiXG4gICAgICAgICAgICAgICAgICAgW3NlcGFyYXRvcktleUNvZGVzXT1cIlszMiw0NCw1OCw1OV1cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2Rpc3BsYXknXCJcbiAgICAgICAgICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCIgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInKyBFbWFpbCdcIj5cbiAgICAgICAgICAgIDx0YWctaW5wdXQtZHJvcGRvd24gW2F1dG9jb21wbGV0ZUl0ZW1zXT1cImF1dG9jb21wbGV0ZUl0ZW1zQXN5bmMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRpc3BsYXkgfX1cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWctaW5wdXQtZHJvcGRvd24+XG4gICAgICAgIDwvdGFnLWlucHV0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVRpdGxlSW5wdXRcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIGlkPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZVRpdGxlXCIgI21lc3NhZ2VUaXRsZUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ibG9jayBzbWFsbCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VUaXRsZUN0cmwudmFsaWQgJiYgbWVzc2FnZVRpdGxlQ3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICBTdWJqZWN0IGlzIHJlcXVpcmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlQm9keUlucHV0XCI+TWVzc2FnZTwvbGFiZWw+ICAgICAgICBcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlQm9keUlucHV0XCIgaWQ9XCJtZXNzYWdlQm9keUlucHV0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICNlbWFpbEJvZHlcbiAgICAgICAgICAgICAgICAgIGF1dG9zaXplIFttaW5Sb3dzXT1cIjVcIiBbbWF4Um93c109XCIxMFwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VCb2R5XCIgI21lc3NhZ2VCb2R5Q3RybD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkLWJsb2NrIHNtYWxsIHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZUJvZHlDdHJsLnZhbGlkICYmIG1lc3NhZ2VCb2R5Q3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICBCb2R5IG1lc3NhZ2UgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtYi00XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==