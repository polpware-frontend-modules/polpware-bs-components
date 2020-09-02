import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { v4 as uuidv4 } from 'uuid';
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
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.required, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.min, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.max, " ");
} }
function PromptFormComponent_ng_container_8_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.validators.pattern, " ");
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
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.required, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.min, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.max, " ");
} }
function PromptFormComponent_ng_template_9_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r15.validators.pattern, " ");
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
        this.result = new EventEmitter();
    }
    ngOnInit() {
        this.confirmBtnLabel = this.confirmBtnLabel || 'Confirm';
        this.closeBtnLabel = this.closeBtnLabel || 'Cancel';
        this.confirmBtnClasses = this.confirmBtnClasses || 'btn-primary btn-lg';
        this.closeBtnClasses = this.closeBtnClasses || 'btn-secondary btn-lg';
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
            a[x.name] = new FormControl(x.value, makeValidations(x.validations));
        });
        this.form = this._builder.group(a);
    }
    close() {
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.emit(this.form.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ2lCM0QsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSw0REFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSx1REFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSx1REFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSwyREFDSjs7O0lBdEJKLCtCQUNJO0lBQUEsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7SUFDUiw0QkFPQTtJQUFBLDhGQUNJO0lBRUosOEZBQ0k7SUFFSiw4RkFDSTtJQUVKLDhGQUNJO0lBR1IsaUJBQU07Ozs7O0lBdkJLLGVBQXNCO0lBQXRCLGdEQUFzQjtJQUN6QixlQUNKO0lBREksOENBQ0o7SUFDTyxl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UUFESSxrREFDSjtRQUNrQyxlQUE2QjtRQUE3QiwrQ0FBNkIsNkJBQUE7UUFDM0QsZUFDSjtRQURJLG9EQUNKOztrRER4RFMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBR0ksS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgbWFrZVZhbGlkYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5pbnRlcmZhY2UgSUlucHV0RmllbGRTcGVjRXh0IGV4dGVuZHMgSUlucHV0RmllbGRTcGVjIHtcbiAgICBmaWVsZElkOiBzdHJpbmc7XG4gICAgYXV0b2NvbXBsZXRlS2V5Pzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcHJvbXB0LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjbG9zZUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xvc2VCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkNsYXNzZXM6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgQE91dHB1dCgpIHJlc3VsdDogRXZlbnRFbWl0dGVyPHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2J1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5MYWJlbCA9IHRoaXMuY29uZmlybUJ0bkxhYmVsIHx8ICdDb25maXJtJztcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkxhYmVsID0gdGhpcy5jbG9zZUJ0bkxhYmVsIHx8ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzZXMgPSB0aGlzLmNvbmZpcm1CdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSBidG4tbGcnO1xuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xhc3NlcyA9IHRoaXMuY2xvc2VCdG5DbGFzc2VzIHx8ICdidG4tc2Vjb25kYXJ5IGJ0bi1sZyc7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRpb25zKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoYSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMucmVzdWx0LmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGUgcHVsbC1sZWZ0XCI+e3t0aXRsZX19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxkaXYgW2lubmVySHRtbF09XCJpbm5lckJvZHlcIj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXV0b2NvbXBsZXRlO2Vsc2UgZGlzYWJsZVRtcGxcIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInByb21wdEZvcm1cIiBhdXRvY29tcGxldGU9XCJvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb20tZ3JvdXAgbWItNFwiICpuZ0Zvcj1cImxldCBlbGVtIG9mIGV4dEZpZWxkczsgZmlyc3QgYXMgaXNGaXJzdDtcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIiAvPlxuXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucmVxdWlyZWR9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbn19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4fX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucGF0dGVybn19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkaXNhYmxlVG1wbD5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInByb21wdEZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9tLWdyb3VwIG1iLTRcIiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBleHRGaWVsZHM7IGZpcnN0IGFzIGlzRmlyc3Q7XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgLz5cblxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5yZXF1aXJlZCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW59fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heH19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucGF0dGVybiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm59fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBtci0yXCIgW25nQ2xhc3NdPVwiY2xvc2VCdG5DbGFzc2VzXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAge3tjbG9zZUJ0bkxhYmVsfX1cbiAgICA8L2J1dHRvbj4gICAgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiBbbmdDbGFzc109XCJjb25maXJtQnRuQ2xhc3Nlc1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAge3tjb25maXJtQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cblxuXG4iXX0=