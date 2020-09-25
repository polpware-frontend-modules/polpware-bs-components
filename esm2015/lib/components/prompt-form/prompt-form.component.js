import { Component, Input, Output, HostListener } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';
import { makeValidations } from '../../utils/form-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/common";
import * as i4 from "@40three/ngx-autofocus-directive";
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close(); });
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_ng_container_6_div_2_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 16);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_container_6_div_2_small_4_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(5, PromptFormComponent_ng_container_6_div_2_small_5_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_container_6_div_2_small_6_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_container_6_div_2_small_7_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(8, PromptFormComponent_ng_container_6_div_2_small_8_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(9, PromptFormComponent_ng_container_6_div_2_small_9_Template, 2, 1, "small", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = ctx.$implicit;
    const isFirst_r9 = ctx.first;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r8.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r8.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r8.category);
    i0.ɵɵproperty("autofocus", isFirst_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.required) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.min) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.max) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.pattern) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.minlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.maxlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
} }
function PromptFormComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 12);
    i0.ɵɵtemplate(2, PromptFormComponent_ng_container_6_div_2_Template, 10, 13, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.extFields);
} }
function PromptFormComponent_ng_template_7_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 20);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_template_7_div_1_small_4_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(5, PromptFormComponent_ng_template_7_div_1_small_5_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_template_7_div_1_small_6_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_template_7_div_1_small_7_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(8, PromptFormComponent_ng_template_7_div_1_small_8_Template, 2, 1, "small", 17);
    i0.ɵɵtemplate(9, PromptFormComponent_ng_template_7_div_1_small_9_Template, 2, 1, "small", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r23 = ctx.$implicit;
    const isFirst_r24 = ctx.first;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r23.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r23.name);
    i0.ɵɵpropertyInterpolate("id", elem_r23.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r23.category);
    i0.ɵɵproperty("autofocus", isFirst_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.required) && (ctx_r22.form.touched || ctx_r22.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.min) && (ctx_r22.form.touched || ctx_r22.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.max) && (ctx_r22.form.touched || ctx_r22.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.pattern) && (ctx_r22.form.touched || ctx_r22.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.minlength) && (ctx_r22.form.touched || ctx_r22.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r22.form.controls[elem_r23.name].errors == null ? null : ctx_r22.form.controls[elem_r23.name].errors.maxlength) && (ctx_r22.form.touched || ctx_r22.form.dirty));
} }
function PromptFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 19);
    i0.ɵɵtemplate(1, PromptFormComponent_ng_template_7_div_1_Template, 10, 12, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.extFields);
} }
function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.close(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r4.cancelBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.cancelBtnLabel, " ");
} }
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
function uuidv4() {
    return 'alpha-' + v4();
}
export class PromptFormComponent {
    constructor(_builder, _bsModalRef) {
        this._builder = _builder;
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    ngOnInit() {
        this.confirmBtnLabel = this.confirmBtnLabel || 'Confirm';
        this.cancelBtnLabel = this.cancelBtnLabel || 'Cancel';
        this.confirmBtnClasses = this.confirmBtnClasses || 'btn-primary';
        this.cancelBtnClasses = this.cancelBtnClasses || 'btn-secondary';
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
    keyEvent(event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            if (this.form.valid) {
                this.confirm();
            }
        }
    }
    close() {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.next(this.form.value);
        this.result.complete();
        this._bsModalRef.hide();
    }
}
PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BsModalRef)); };
PromptFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 13, vars: 9, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["name", "promptForm", "autocomplete", "on", 3, "formGroup"], ["class", "from-group mb-4", 4, "ngFor", "ngForOf"], [1, "from-group", "mb-4"], [3, "for"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "type", "autofocus"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["name", "promptForm", 3, "formGroup"], [1, "form-control", 3, "formControlName", "id", "type", "autofocus"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h4", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 3, 0, "button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵtemplate(6, PromptFormComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
        i0.ɵɵtemplate(7, PromptFormComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵtemplate(10, PromptFormComponent_button_10_Template, 2, 2, "button", 8);
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function PromptFormComponent_Template_button_click_11_listener() { return ctx.confirm(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(8);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.autocomplete)("ngIfElse", _r2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.confirmBtnClasses)("disabled", !ctx.form.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.confirmBtnLabel, " ");
    } }, directives: [i3.NgIf, i3.NgClass, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgForOf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i4.AutofocusDirective], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-form',
                templateUrl: './prompt-form.component.html',
                styleUrls: ['./prompt-form.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.BsModalRef }]; }, { autocomplete: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], hideCancelBtn: [{
            type: Input
        }], hideCloseBtn: [{
            type: Input
        }], cancelBtnLabel: [{
            type: Input
        }], confirmBtnLabel: [{
            type: Input
        }], cancelBtnClasses: [{
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
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ0p2RSxrQ0FDSTtJQUQ4RCxxTEFBaUI7SUFDL0UsZ0NBQXlCO0lBQUEsc0JBQU87SUFBQSxpQkFBTztJQUMzQyxpQkFBUzs7O0lBa0JHLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksb0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksK0RBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksK0RBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksbUVBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREkscUVBQ0o7OztJQUNB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ckZnQyxlQUFTO1FBQVQsK0JBQVM7UUFDeUMsZUFBcUI7UUFBckIsd0NBQXFCO1FBS3BHLGVBQXVCO1FBQXZCLDREQUF1QjtRQUVkLGVBQXFDO1FBQXJDLHVDQUFxQyxpQkFBQTtRQXVFbUMsZUFBc0I7UUFBdEIseUNBQXNCO1FBRzFFLGVBQTZCO1FBQTdCLCtDQUE2Qiw2QkFBQTtRQUMzRCxlQUNKO1FBREksb0RBQ0o7O2tERDFDUyxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFxQ04sWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgbWFrZVZhbGlkYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5lbnVtIEtFWV9DT0RFIHtcbiAgICBFTlRFUiA9IDEzXG59XG5cbmludGVyZmFjZSBJSW5wdXRGaWVsZFNwZWNFeHQgZXh0ZW5kcyBJSW5wdXRGaWVsZFNwZWMge1xuICAgIGZpZWxkSWQ6IHN0cmluZztcbiAgICBhdXRvY29tcGxldGVLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wRm9ybUlucHV0cyB7XG4gICAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnO1xuICAgIGVuYWJsZUVudGVyPzogYm9vbGVhbjtcblxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDbG9zZUJ0bj86IGJvb2xlYW47XG5cbiAgICBjYW5jZWxCdG5MYWJlbD86IHN0cmluZztcbiAgICBjb25maXJtQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY2FuY2VsQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICBjb25maXJtQnRuQ2xhc3Nlcz86IHN0cmluZztcblxuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xufVxuXG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuICdhbHBoYS0nICsgdjQoKTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9tcHRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZUVudGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGlkZUNsb3NlQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICBAT3V0cHV0KCkgcmVzdWx0OiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2J1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuTGFiZWwgPSB0aGlzLmNvbmZpcm1CdG5MYWJlbCB8fCAnQ29uZmlybSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuTGFiZWwgPSB0aGlzLmNhbmNlbEJ0bkxhYmVsIHx8ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzZXMgPSB0aGlzLmNvbmZpcm1CdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyA9IHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAnLCBbJyRldmVudCddKVxuICAgIGtleUV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUVudGVyICYmIGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFLkVOVEVSKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dChudWxsKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZUNsb3NlQnRuXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvY29tcGxldGU7ZWxzZSBkaXNhYmxlVG1wbFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBuYW1lPVwicHJvbXB0Rm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cblxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5yZXF1aXJlZCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucGF0dGVybiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWlubGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heGxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2Rpc2FibGVUbXBsPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBuYW1lPVwicHJvbXB0Rm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb20tZ3JvdXAgbWItNFwiICpuZ0Zvcj1cImxldCBlbGVtIG9mIGV4dEZpZWxkczsgZmlyc3QgYXMgaXNGaXJzdDtcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbmxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbkxlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXhsZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXhMZW5ndGgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG1yLTJcIiBbbmdDbGFzc109XCJjYW5jZWxCdG5DbGFzc2VzXCIgKGNsaWNrKT1cImNsb3NlKClcIiAqbmdJZj1cIiFoaWRlQ2FuY2VsQnRuXCI+XG4gICAgICAgIHt7Y2FuY2VsQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPiAgICBcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cImNvbmZpcm1CdG5DbGFzc2VzXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPlxuICAgICAgICB7e2NvbmZpcm1CdG5MYWJlbH19XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuXG5cbiJdfQ==