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
    const item_r4 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r4.display, " ");
} }
function EmailComposerComponent_tag_input_dropdown_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tag-input-dropdown", 7);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, EmailComposerComponent_tag_input_dropdown_4_ng_template_2_Template, 1, 1, "ng-template");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(1, 1, ctx_r1.autocompleteItemsAsync));
} }
const _c0 = function () { return [32, 44, 58, 59]; };
export class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
    }
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-email-composer',
                templateUrl: './email-composer.component.html',
                styleUrls: ['./email-composer.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0lDa0J0RCxZQUNKOzs7SUFESSxnREFDSjs7O0lBSEosNkNBQ0k7O0lBQUEseUdBQ0k7SUFFUixpQkFBcUI7OztJQUpELHVGQUFvRDs7O0FEVHBGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSwwQkFBMEI7SUFFbEU7UUFFSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7OzRGQUxRLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDUm5DLCtCQUNJO1FBQUEsOEJBQ0k7UUFBQSx1Q0FlSTtRQWZPLG1KQUFvQixxR0FFUiwyQkFBdUIsSUFGZiw2R0FHSix1QkFBbUIsSUFIZjtRQWUzQixxR0FDSTtRQUlSLGlCQUFZO1FBQ2hCLGlCQUFNO1FBRU4sOEJBQ0k7UUFBQSxzQ0FNQTtRQURVLHVKQUF5QjtRQUNuQyx3QkFBQTtRQUFBLGlCQUFXO1FBQ2YsaUJBQU07UUFDVixpQkFBTzs7UUFoQ1ksZUFBb0I7UUFBcEIsb0NBQW9CLG9CQUFBLHdCQUFBLGtCQUFBLGtCQUFBLG9DQUFBLDhCQUFBLGtDQUFBLGtEQUFBLHdCQUFBLHVCQUFBLHlCQUFBO1FBZThDLGVBQThCO1FBQTlCLGlEQUE4QjtRQVl4RixlQUFhO1FBQWIsMkJBQWEsZUFBQSw0QkFBQTs7a0REckIzQixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZW1haWwtY29tcG9zZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZW1haWwtY29tcG9zZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXJDb21wb25lbnQgZXh0ZW5kcyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxufVxuIiwiPGZvcm0gbmFtZT1cImVtYWlsRm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDx0YWctaW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbHNcIiAjZW1haWxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgKGZvY3Vzb3V0KT1cIm9uT3V0T2ZUYWdJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRleHRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFthZGRPblBhc3RlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFttb2RlbEFzU3RyaW5nc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbdHJpbVRhZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2VkaXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0b3JzXT1cInZhbGlkYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtzZWNvbmRhcnlQbGFjZWhvbGRlcl09XCInRW1haWxzJ1wiXG4gICAgICAgICAgICAgICAgICAgW3NlcGFyYXRvcktleUNvZGVzXT1cIlszMiw0NCw1OCw1OV1cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2Rpc3BsYXknXCJcbiAgICAgICAgICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCIgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInRW1haWxzJ1wiPlxuICAgICAgICAgICAgPHRhZy1pbnB1dC1kcm9wZG93biBbYXV0b2NvbXBsZXRlSXRlbXNdPVwiYXV0b2NvbXBsZXRlSXRlbXNBc3luYyB8IGFzeW5jXCIgKm5nSWY9XCJhdXRvY29tcGxldGVJdGVtc0FzeW5jXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheSB9fVxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RhZy1pbnB1dC1kcm9wZG93bj5cbiAgICAgICAgPC90YWctaW5wdXQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VCb2R5SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgI2VtYWlsQm9keVxuICAgICAgICAgICAgICAgICAgYXV0b3NpemUgW21pblJvd3NdPVwiNVwiIFttYXhSb3dzXT1cIjEwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBlcnNvbmFsIG1lc3NhZ2UgaGVyZVwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VCb2R5XCI+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=