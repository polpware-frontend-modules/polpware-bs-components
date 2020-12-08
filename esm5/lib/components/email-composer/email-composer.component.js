import { __extends } from "tslib";
import { Component } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-chips";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-autosize";
import * as i5 from "@fortawesome/angular-fontawesome";
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
    var item_r9 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r9.display, " ");
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
function EmailComposerComponent_fa_icon_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 17);
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r8.faSpinner)("spin", true);
} }
var _c0 = function () { return [32, 44, 58, 59]; };
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        var _this = _super.call(this) || this;
        _this.faSpinner = faSpinner;
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
    EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 28, vars: 25, consts: [["class", "alert alert-danger show", "role", "alert", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ml-2", 3, "icon", "spin", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "show"], [1, "d-block", "small", "text-danger"], [1, "ml-2", 3, "icon", "spin"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(26, " Submit ");
            i0.ɵɵtemplate(27, EmailComposerComponent_fa_icon_27_Template, 1, 2, "fa-icon", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = i0.ɵɵreference(14);
            var _r6 = i0.ɵɵreference(21);
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
            i0.ɵɵproperty("disabled", ctx.alertType == 3);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.alertType == 3);
        } }, directives: [i1.NgIf, i2.TagInputComponent, i3.NgControlStatus, i3.NgModel, i2.TagInputDropdown, i3.DefaultValueAccessor, i3.RequiredValidator, i4.AutosizeDirective, i5.FaIconComponent], pipes: [i1.AsyncPipe], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7SUNIOUQsK0JBQ0k7SUFBQSx5QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBSTtJQUNSLGlCQUFNOzs7SUFGRSxlQUNKO0lBREksb0RBQ0o7OztJQXVCZ0IsWUFDSjs7O0lBREksZ0RBQ0o7OztJQVVSLGdDQUNJO0lBQUEsc0NBQ0o7SUFBQSxpQkFBTzs7O0lBV1AsZ0NBQ0k7SUFBQSwyQ0FDSjtJQUFBLGlCQUFPOzs7SUFNSCw4QkFBd0Y7OztJQUFsRSx1Q0FBa0IsY0FBQTs7O0FEckRwRDtJQUs0QywwQ0FBMEI7SUFJbEU7UUFBQSxZQUVJLGlCQUFPLFNBSVY7UUFSRCxlQUFTLEdBQUcsU0FBUyxDQUFDO1FBTWxCLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFdBQVc7SUFDWCx1Q0FBTSxHQUFOO1FBRUksZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNsQixDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsK0NBQStDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPO1NBQ1Y7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztnR0F0Q1Esc0JBQXNCOytEQUF0QixzQkFBc0I7WUNWbkMsdUVBQ0k7WUFLSiwyQkFDSTtZQUFBLDhCQUNJO1lBQUEsNkJBQU87WUFBQSwwQkFBVTtZQUFBLGlCQUFRO1lBQ3pCLHVDQWVJO1lBZk8sbUpBQW9CLHFHQUVSLDJCQUF1QixJQUZmLDZHQUdKLHVCQUFtQixJQUhmO1lBZTNCLDZDQUNJOztZQUFBLG9GQUNJO1lBRVIsaUJBQXFCO1lBQ3pCLGlCQUFZO1lBQ2hCLGlCQUFNO1lBRU4sK0JBQ0k7WUFBQSxpQ0FBK0I7WUFBQSx3QkFBTztZQUFBLGlCQUFRO1lBQzlDLG9DQUdBO1lBRE8sc0pBQTBCO1lBRmpDLGlCQUdBO1lBQUEsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLCtCQUNJO1lBQUEsaUNBQThCO1lBQUEsd0JBQU87WUFBQSxpQkFBUTtZQUM3Qyx5Q0FLQTtZQURVLHdKQUF5QjtZQUNuQyx5QkFBQTtZQUFBLGlCQUFXO1lBQ1gsMkVBQ0k7WUFFUixpQkFBTTtZQUVOLGdDQUNJO1lBQUEsbUNBQ0k7WUFEMEMsb0dBQVMsWUFBUSxJQUFDO1lBQzVELHlCQUNBO1lBQUEsa0ZBQThFO1lBQ2xGLGlCQUFTO1lBQ2IsaUJBQU07WUFDVixpQkFBTTs7OztZQTdENEMsd0NBQXFCO1lBU3BELGVBQW9CO1lBQXBCLG9DQUFvQixvQkFBQSx3QkFBQSxrQkFBQSxrQkFBQSxvQ0FBQSw4QkFBQSxrQ0FBQSxrREFBQSx3QkFBQSx1QkFBQSwwQkFBQTtZQWVQLGVBQW9EO1lBQXBELHFGQUFvRDtZQVlyRSxlQUEwQjtZQUExQiwwQ0FBMEI7WUFDTyxlQUEyRDtZQUEzRCxnREFBMkQ7WUFVaEYsZUFBYTtZQUFiLDJCQUFhLGVBQUEsNEJBQUE7WUFHUSxlQUF5RDtZQUF6RCxnREFBeUQ7WUFNaEMsZUFBMkI7WUFBM0IsNkNBQTJCO1lBRWpDLGVBQXNCO1lBQXRCLHlDQUFzQjs7aUNEMUR6RjtDQWtEQyxBQTdDRCxDQUs0QywwQkFBMEIsR0F3Q3JFO1NBeENZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQsIEFsZXJ0VHlwZUVudW0gfSBmcm9tICdAcG9scHdhcmUvbmd4LWVtYWlsLWNvbXBvc2VyJztcblxuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWVtYWlsLWNvbXBvc2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IGV4dGVuZHMgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlVGl0bGUgPSAnJztcbiAgICAgICAgdGhpcy5tZXNzYWdlQm9keSA9ICcnO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsSW5wdXRCb3guZm9jdXModHJ1ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlVGl0bGUgfHxcbiAgICAgICAgICAgICF0aGlzLm1lc3NhZ2VCb2R5IHx8XG4gICAgICAgICAgICAhdGhpcy5lbWFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0uZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdQbGVhc2UgcHJvdmlkZSByZXF1aXJlZCB2YWx1ZXMgYW5kIHRyeSBhZ2FpbiEnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0ubm9uZTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnN1Ym1pdCgpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBzaG93XCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJhbGVydFR5cGUgPiAwXCI+XG4gICAgPHA+XG4gICAgICAgIHt7YWxlcnRNZXNzYWdlfX1cbiAgICA8L3A+XG48L2Rpdj5cblxuPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbD5SZWNpcGllbnRzPC9sYWJlbD5cbiAgICAgICAgPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cImVtYWlsc1wiICNlbWFpbElucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAoZm9jdXNvdXQpPVwib25PdXRPZlRhZ0lucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidGV4dENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgW2FkZE9uUGFzdGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW21vZGVsQXNTdHJpbmdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFt0cmltVGFnc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwidmFsaWRhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cIidFbWFpbHMnXCJcbiAgICAgICAgICAgICAgICAgICBbc2VwYXJhdG9yS2V5Q29kZXNdPVwiWzMyLDQ0LDU4LDU5XVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCInZGlzcGxheSdcIlxuICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIicrIEVtYWlsJ1wiPlxuICAgICAgICAgICAgPHRhZy1pbnB1dC1kcm9wZG93biBbYXV0b2NvbXBsZXRlSXRlbXNdPVwiYXV0b2NvbXBsZXRlSXRlbXNBc3luYyB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheSB9fVxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RhZy1pbnB1dC1kcm9wZG93bj5cbiAgICAgICAgPC90YWctaW5wdXQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlVGl0bGVJbnB1dFwiPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgaWQ9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIFxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlVGl0bGVcIiAjbWVzc2FnZVRpdGxlQ3RybD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkLWJsb2NrIHNtYWxsIHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZVRpdGxlQ3RybC52YWxpZCAmJiBtZXNzYWdlVGl0bGVDdHJsLnRvdWNoZWRcIj5cbiAgICAgICAgICAgIFN1YmplY3QgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VCb2R5SW5wdXRcIj5NZXNzYWdlPC9sYWJlbD4gICAgICAgIFxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VCb2R5SW5wdXRcIiBpZD1cIm1lc3NhZ2VCb2R5SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgI2VtYWlsQm9keVxuICAgICAgICAgICAgICAgICAgYXV0b3NpemUgW21pblJvd3NdPVwiNVwiIFttYXhSb3dzXT1cIjEwXCJcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIiAjbWVzc2FnZUJvZHlDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImQtYmxvY2sgc21hbGwgdGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFtZXNzYWdlQm9keUN0cmwudmFsaWQgJiYgbWVzc2FnZUJvZHlDdHJsLnRvdWNoZWRcIj5cbiAgICAgICAgICAgIEJvZHkgbWVzc2FnZSBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiYWxlcnRUeXBlID09IDNcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJtbC0yXCIgW2ljb25dPVwiZmFTcGlubmVyXCIgW3NwaW5dPVwidHJ1ZVwiICpuZ0lmPVwiYWxlcnRUeXBlID09IDNcIj48L2ZhLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=