import { __extends } from "tslib";
import { Component } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-chips";
import * as i3 from "@angular/common";
import * as i4 from "ngx-autosize";
function EmailComposerComponent_tag_input_dropdown_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var item_r4 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r4.display, " ");
} }
function EmailComposerComponent_tag_input_dropdown_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tag-input-dropdown", 7);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, EmailComposerComponent_tag_input_dropdown_4_ng_template_2_Template, 1, 1, "ng-template");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(1, 1, ctx_r1.autocompleteItemsAsync));
} }
var _c0 = function () { return [32, 44, 58, 59]; };
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        return _super.call(this) || this;
    }
    EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
    EmailComposerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 17, consts: [["name", "emailForm", "autocomplete", "off"], [1, "form-group"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems", 4, "ngIf"], ["name", "messageBodyInput", "autosize", "", "placeholder", "Type your personal message here", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", ""], [3, "autocompleteItems"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "tag-input", 2, 3);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_2_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_2_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_2_listener($event) { return ctx.textChanged($event); });
            i0.ɵɵtemplate(4, EmailComposerComponent_tag_input_dropdown_4_Template, 3, 3, "tag-input-dropdown", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 1);
            i0.ɵɵelementStart(6, "textarea", 5, 6);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.messageBody = $event; });
            i0.ɵɵtext(8, "        ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(16, _c0))("displayBy", "display")("identifyBy", "value")("placeholder", "Emails");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.autocompleteItemsAsync);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("minRows", 5)("maxRows", 10)("ngModel", ctx.messageBody);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.TagInputComponent, i1.NgControlStatus, i1.NgModel, i3.NgIf, i1.DefaultValueAccessor, i4.AutosizeDirective, i2.TagInputDropdown], pipes: [i3.AsyncPipe], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztJQ2tCdEQsWUFDSjs7O0lBREksZ0RBQ0o7OztJQUhKLDZDQUNJOztJQUFBLHlHQUNJO0lBRVIsaUJBQXFCOzs7SUFKRCx1RkFBb0Q7OztBRGRwRjtJQUs0QywwQ0FBMEI7SUFFbEU7ZUFFSSxpQkFBTztJQUNYLENBQUM7Z0dBTFEsc0JBQXNCOytEQUF0QixzQkFBc0I7WUNSbkMsK0JBQ0k7WUFBQSw4QkFDSTtZQUFBLHVDQWVJO1lBZk8sbUpBQW9CLHFHQUVSLDJCQUF1QixJQUZmLDZHQUdKLHVCQUFtQixJQUhmO1lBZTNCLHFHQUNJO1lBSVIsaUJBQVk7WUFDaEIsaUJBQU07WUFFTiw4QkFDSTtZQUFBLHNDQU1BO1lBRFUsdUpBQXlCO1lBQ25DLHdCQUFBO1lBQUEsaUJBQVc7WUFDZixpQkFBTTtZQUNWLGlCQUFPOztZQWhDWSxlQUFvQjtZQUFwQixvQ0FBb0Isb0JBQUEsd0JBQUEsa0JBQUEsa0JBQUEsb0NBQUEsOEJBQUEsa0NBQUEsa0RBQUEsd0JBQUEsdUJBQUEseUJBQUE7WUFlOEMsZUFBOEI7WUFBOUIsaURBQThCO1lBWXhGLGVBQWE7WUFBYiwyQkFBYSxlQUFBLDRCQUFBOztpQ0Q3QnhDO0NBZUMsQUFaRCxDQUs0QywwQkFBMEIsR0FPckU7U0FQWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC1lbWFpbC1jb21wb3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1lbWFpbC1jb21wb3NlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlckNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG59XG4iLCI8Zm9ybSBuYW1lPVwiZW1haWxGb3JtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cImVtYWlsc1wiICNlbWFpbElucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAoZm9jdXNvdXQpPVwib25PdXRPZlRhZ0lucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidGV4dENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgW2FkZE9uUGFzdGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW21vZGVsQXNTdHJpbmdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFt0cmltVGFnc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwidmFsaWRhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cIidFbWFpbHMnXCJcbiAgICAgICAgICAgICAgICAgICBbc2VwYXJhdG9yS2V5Q29kZXNdPVwiWzMyLDQ0LDU4LDU5XVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCInZGlzcGxheSdcIlxuICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidFbWFpbHMnXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0LWRyb3Bkb3duIFthdXRvY29tcGxldGVJdGVtc109XCJhdXRvY29tcGxldGVJdGVtc0FzeW5jIHwgYXN5bmNcIiAqbmdJZj1cImF1dG9jb21wbGV0ZUl0ZW1zQXN5bmNcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kaXNwbGF5IH19XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuICAgICAgICA8L3RhZy1pbnB1dD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZUJvZHlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAjZW1haWxCb2R5XG4gICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBbbWluUm93c109XCI1XCIgW21heFJvd3NdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGVyc29uYWwgbWVzc2FnZSBoZXJlXCJcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIj5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==