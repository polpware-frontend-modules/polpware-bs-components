import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';
import { makeValidations } from '../../utils/form-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/common";
function PromptFormComponent_ng_container_8_div_2_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "label", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 15);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_container_8_div_2_small_4_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(5, PromptFormComponent_ng_container_8_div_2_small_5_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_container_8_div_2_small_6_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_container_8_div_2_small_7_Template, 2, 1, "small", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = ctx.$implicit;
    const isFirst_r5 = ctx.first;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r4.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r4.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r4.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r4.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r4.category);
    i0.ɵɵproperty("autofocus", isFirst_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.form.controls[elem_r4.name].errors == null ? null : ctx_r3.form.controls[elem_r4.name].errors.required) && (ctx_r3.form.touched || ctx_r3.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.form.controls[elem_r4.name].errors == null ? null : ctx_r3.form.controls[elem_r4.name].errors.min) && (ctx_r3.form.touched || ctx_r3.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.form.controls[elem_r4.name].errors == null ? null : ctx_r3.form.controls[elem_r4.name].errors.max) && (ctx_r3.form.touched || ctx_r3.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.form.controls[elem_r4.name].errors == null ? null : ctx_r3.form.controls[elem_r4.name].errors.pattern) && (ctx_r3.form.touched || ctx_r3.form.dirty));
} }
function PromptFormComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 11);
    i0.ɵɵtemplate(2, PromptFormComponent_ng_container_8_div_2_Template, 8, 11, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.extFields);
} }
function PromptFormComponent_ng_template_9_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "label", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 19);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_template_9_div_1_small_4_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(5, PromptFormComponent_ng_template_9_div_1_small_5_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_template_9_div_1_small_6_Template, 2, 1, "small", 16);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_template_9_div_1_small_7_Template, 2, 1, "small", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = ctx.$implicit;
    const isFirst_r16 = ctx.first;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r15.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r15.name);
    i0.ɵɵpropertyInterpolate("id", elem_r15.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r15.category);
    i0.ɵɵproperty("autofocus", isFirst_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r14.form.controls[elem_r15.name].errors == null ? null : ctx_r14.form.controls[elem_r15.name].errors.required) && (ctx_r14.form.touched || ctx_r14.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r14.form.controls[elem_r15.name].errors == null ? null : ctx_r14.form.controls[elem_r15.name].errors.min) && (ctx_r14.form.touched || ctx_r14.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r14.form.controls[elem_r15.name].errors == null ? null : ctx_r14.form.controls[elem_r15.name].errors.max) && (ctx_r14.form.touched || ctx_r14.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r14.form.controls[elem_r15.name].errors == null ? null : ctx_r14.form.controls[elem_r15.name].errors.pattern) && (ctx_r14.form.touched || ctx_r14.form.dirty));
} }
function PromptFormComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 18);
    i0.ɵɵtemplate(1, PromptFormComponent_ng_template_9_div_1_Template, 8, 10, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.extFields);
} }
export class PromptFormComponent {
    constructor(_builder, _bsModalRef) {
        this._builder = _builder;
        this._bsModalRef = _bsModalRef;
        this.result = new Subject();
    }
    ngOnInit() {
        this.confirmBtnLabel = this.confirmBtnLabel || 'Confirm';
        this.closeBtnLabel = this.closeBtnLabel || 'Cancel';
        this.confirmBtnClasses = this.confirmBtnClasses || 'btn-primary';
        this.closeBtnClasses = this.closeBtnClasses || 'btn-secondary';
        if (this.autocomplete) {
            this.extFields = this.fields.map(a => {
                const k = `section-polp-bs-prompt-form-${this.autocomplete} ${a.name}`;
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4(), autocompleteKey: k });
            });
        }
        else {
            this.extFields = this.fields.map(a => {
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4() });
            });
        }
        const a = {};
        this.extFields.forEach(x => {
            a[x.name] = new FormControl(x.value, makeValidations(x.validators));
        });
        this.form = this._builder.group(a);
    }
    close() {
        this._bsModalRef.hide();
        this.result.next(null);
    }
    confirm() {
        this.result.next(this.form.value);
        this._bsModalRef.hide();
    }
}
PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BsModalRef)); };
PromptFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], inputs: { autocomplete: "autocomplete", closeBtnLabel: "closeBtnLabel", confirmBtnLabel: "confirmBtnLabel", closeBtnClasses: "closeBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 16, vars: 9, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHtml"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"], ["name", "promptForm", "autocomplete", "on", 3, "formGroup"], ["class", "from-group mb-4", 4, "ngFor", "ngForOf"], [1, "from-group", "mb-4"], [3, "for"], [1, "form-control", "form-control-lg", 3, "formControlName", "autocomplete", "id", "type", "autofocus"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["name", "promptForm", 3, "formGroup"], [1, "form-control", "form-control-lg", 3, "formControlName", "id", "type", "autofocus"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h4", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function PromptFormComponent_Template_button_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelement(7, "div", 5);
        i0.ɵɵtemplate(8, PromptFormComponent_ng_container_8_Template, 3, 2, "ng-container", 6);
        i0.ɵɵtemplate(9, PromptFormComponent_ng_template_9_Template, 2, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "button", 9);
        i0.ɵɵlistener("click", function PromptFormComponent_Template_button_click_12_listener() { return ctx.close(); });
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵlistener("click", function PromptFormComponent_Template_button_click_14_listener() { return ctx.confirm(); });
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(10);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.autocomplete)("ngIfElse", _r1);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", ctx.closeBtnClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.closeBtnLabel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.confirmBtnClasses)("disabled", !ctx.form.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.confirmBtnLabel, " ");
    } }, directives: [i3.NgIf, i3.NgClass, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgForOf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-form',
                templateUrl: './prompt-form.component.html',
                styleUrls: ['./prompt-form.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.BsModalRef }]; }, { autocomplete: [{
            type: Input
        }], closeBtnLabel: [{
            type: Input
        }], confirmBtnLabel: [{
            type: Input
        }], closeBtnClasses: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNnQjNELGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksb0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksK0RBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksK0RBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksbUVBQ0o7OztJQXRCSiwrQkFDSTtJQUFBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFRO0lBQ1IsNEJBT0E7SUFBQSw4RkFDSTtJQUVKLDhGQUNJO0lBRUosOEZBQ0k7SUFFSiw4RkFDSTtJQUdSLGlCQUFNOzs7OztJQXZCSyxlQUFzQjtJQUF0QixnREFB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QUF2Qiw0REFBdUI7UUFFZCxlQUFxQztRQUFyQyx1Q0FBcUMsaUJBQUE7UUEyRFosZUFBMkI7UUFBM0IsNkNBQTJCO1FBQzlELGVBQ0o7UUFESSxrREFDSjtRQUNrQyxlQUE2QjtRQUE3QiwrQ0FBNkIsNkJBQUE7UUFDM0QsZUFDSjtRQURJLG9EQUNKOztrRER0RFMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBR0ksS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJSW5wdXRGaWVsZFNwZWMsIG1ha2VWYWxpZGF0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0taGVscGVyJztcblxuXG5pbnRlcmZhY2UgSUlucHV0RmllbGRTcGVjRXh0IGV4dGVuZHMgSUlucHV0RmllbGRTcGVjIHtcbiAgICBmaWVsZElkOiBzdHJpbmc7XG4gICAgYXV0b2NvbXBsZXRlS2V5Pzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcHJvbXB0LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjbG9zZUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xvc2VCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkNsYXNzZXM6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgQE91dHB1dCgpIHJlc3VsdDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcblxuICAgIGV4dEZpZWxkczogSUlucHV0RmllbGRTcGVjRXh0W107XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkxhYmVsID0gdGhpcy5jb25maXJtQnRuTGFiZWwgfHwgJ0NvbmZpcm0nO1xuICAgICAgICB0aGlzLmNsb3NlQnRuTGFiZWwgPSB0aGlzLmNsb3NlQnRuTGFiZWwgfHwgJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3NlcyA9IHRoaXMuY29uZmlybUJ0bkNsYXNzZXMgfHwgJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsYXNzZXMgPSB0aGlzLmNsb3NlQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQobnVsbCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvY29tcGxldGU7ZWxzZSBkaXNhYmxlVG1wbFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBuYW1lPVwicHJvbXB0Rm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGlzYWJsZVRtcGw+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIG5hbWU9XCJwcm9tcHRGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBtci0yXCIgW25nQ2xhc3NdPVwiY2xvc2VCdG5DbGFzc2VzXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAge3tjbG9zZUJ0bkxhYmVsfX1cbiAgICA8L2J1dHRvbj4gICAgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiBbbmdDbGFzc109XCJjb25maXJtQnRuQ2xhc3Nlc1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAge3tjb25maXJtQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cblxuXG4iXX0=