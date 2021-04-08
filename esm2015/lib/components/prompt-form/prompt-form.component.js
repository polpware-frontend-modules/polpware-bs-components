import { Component, HostListener, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { makeValidations } from '../../utils/form-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ngx-autosize";
import * as i4 from "@40three/ngx-autofocus-directive";
import * as i5 from "@fortawesome/angular-fontawesome";
import * as i6 from "ngx-mask";
function PromptFormComponent_div_1_ng_container_3_textarea_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 14);
    i0.ɵɵtext(1, "                ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r18.$implicit;
    const isFirst_r4 = ctx_r18.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_3_div_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(4, "fa-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r22.$implicit;
    const isFirst_r4 = ctx_r22.first;
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r16.faEyeSlash : ctx_r16.faEye);
} }
function PromptFormComponent_div_1_ng_container_3_ng_container_4_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 22);
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r26.$implicit;
    const isFirst_r4 = ctx_r26.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_3_ng_container_4_ng_template_2_input_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 24);
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(4);
    const elem_r3 = ctx_r28.$implicit;
    const isFirst_r4 = ctx_r28.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_3_ng_container_4_ng_template_2_input_0_Template, 1, 7, "input", 23);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", elem_r3.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_3_ng_container_4_input_1_Template, 1, 6, "input", 20);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_3_ng_container_4_ng_template_2_Template, 1, 1, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r24 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r24);
} }
function PromptFormComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 10);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_3_textarea_2_Template, 2, 4, "textarea", 11);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_3_div_3_Template, 5, 6, "div", 12);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_3_ng_container_4_Template, 4, 2, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", elem_r3.category);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_ng_template_4_textarea_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 14);
    i0.ɵɵtext(1, "                ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r35.$implicit;
    const isFirst_r4 = ctx_r35.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_4_div_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r38); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(4, "fa-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r39.$implicit;
    const isFirst_r4 = ctx_r39.first;
    const ctx_r33 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r33.faEyeSlash : ctx_r33.faEye);
} }
function PromptFormComponent_div_1_ng_template_4_ng_container_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 16);
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r43.$implicit;
    const isFirst_r4 = ctx_r43.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_4_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 27);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r44.$implicit;
    const isFirst_r4 = ctx_r44.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_4_ng_container_3_input_1_Template, 1, 5, "input", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_4_ng_container_3_ng_template_2_Template, 1, 6, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r41 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r41);
} }
function PromptFormComponent_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 10);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_4_textarea_1_Template, 2, 4, "textarea", 11);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_4_div_2_Template, 5, 6, "div", 12);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_4_ng_container_3_Template, 4, 2, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngSwitch", elem_r3.category);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
} }
function PromptFormComponent_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
} }
function PromptFormComponent_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
} }
function PromptFormComponent_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
} }
function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "label", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_3_Template, 5, 3, "ng-container", 7);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_4_Template, 4, 3, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_small_6_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_small_7_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_small_8_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(9, PromptFormComponent_div_1_small_9_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(10, PromptFormComponent_div_1_small_10_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(11, PromptFormComponent_div_1_small_11_Template, 2, 1, "small", 9);
    i0.ɵɵtemplate(12, PromptFormComponent_div_1_small_12_Template, 2, 1, "small", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.autocomplete)("ngIfElse", _r6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.required) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.min) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.max) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.pattern) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.minlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.maxlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.url) && (ctx_r0.form.touched || ctx_r0.form.dirty));
} }
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.submit(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.submitBtnTxt, " ");
} }
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
function uuidv4() {
    return 'alpha-' + v4();
}
export class PromptFormComponent extends DefaultFormBaseComponent {
    constructor(_builder) {
        super();
        this._builder = _builder;
        this.enableEnter = false;
        this.faEyeSlash = faEyeSlash;
        this.faEye = faEye;
    }
    ngOnInit() {
        this.submitBtnTxt = this.submitBtnTxt || 'Confirm';
        this.cancelBtnTxt = this.cancelBtnTxt || 'Cancel';
        this.submitBtnClasses = this.submitBtnClasses || 'btn-primary';
        this.cancelBtnClasses = this.cancelBtnClasses || 'btn-secondary';
        if (this.autocomplete) {
            this.extFields = this.fields.map(a => {
                const k = `section-polp-bs-prompt-form-${this.autocomplete} ${a.name}`;
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4(), autocompleteKey: k, visible: false });
            });
        }
        else {
            this.extFields = this.fields.map(a => {
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4(), visible: false });
            });
        }
        const a = {};
        this.extFields.forEach(x => {
            a[x.name] = new FormControl(x.value, makeValidations(x.validators));
        });
        this.form = this._builder.group(a);
        this._subr = this.form.valueChanges.subscribe(a => {
            this.notifyValidation();
            this.notifyValueChanges(a);
        });
    }
    ngOnDestroy() {
        this._subr.unsubscribe();
    }
    cancel() {
        this.onCancel.emit(null);
    }
    submit() {
        this.onSave.emit(this.form.value);
    }
    keyEvent(event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            if (this.form.valid) {
                this.submit();
            }
        }
    }
}
PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
PromptFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [["name", "promptForm", "autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup"], ["class", "form-group mb-4", 4, "ngFor", "ngForOf"], [1, "form-group", "d-flex", "justify-content-end"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "form-group", "mb-4"], [3, "for"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "text-danger", 4, "ngIf"], [3, "ngSwitch"], ["autosize", "", "class", "form-control", 3, "formControlName", "id", "name", "autofocus", 4, "ngSwitchCase"], ["class", "input-group", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autofocus"], [1, "input-group"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask"], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "mask"], [1, "text-danger"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 13, 11, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
        i0.ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.extFields);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i1.DefaultValueAccessor, i3.AutosizeDirective, i1.NgControlStatus, i1.FormControlName, i4.AutofocusDirective, i5.FaIconComponent, i6.MaskDirective, i2.NgClass], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-form',
                templateUrl: './prompt-form.component.html',
                styleUrls: ['./prompt-form.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { autocomplete: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], cancelBtnClasses: [{
            type: Input
        }], submitBtnClasses: [{
            type: Input
        }], fields: [{
            type: Input
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ0UzRCxvQ0FPQTtJQUFBLGdDQUFBO0lBQUEsaUJBQVc7Ozs7O0lBTkQseURBQStCO0lBQy9CLCtDQUFxQjtJQUNyQixpREFBdUI7SUFFdkIsc0NBQXFCOzs7O0lBSS9CLCtCQUNJO0lBQUEsNEJBTUE7SUFBQSwrQkFDSTtJQUFBLGtDQUVJO0lBREksd09BQXNDO0lBQzFDLDhCQUNVO0lBQ2QsaUJBQVM7SUFDYixpQkFBTTtJQUNWLGlCQUFNOzs7Ozs7SUFiSyxlQUErQjtJQUEvQix5REFBK0I7SUFDL0IsK0NBQXFCO0lBQ3JCLGlEQUF1QjtJQUN2Qix1RUFBNkM7SUFDN0Msc0NBQXFCO0lBS1gsZUFBMEM7SUFBMUMsMkVBQTBDOzs7SUFPM0QsNEJBUUE7Ozs7O0lBUE8seURBQStCO0lBQy9CLGlFQUF1QztJQUN2QywrQ0FBcUI7SUFD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dXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjLCBtYWtlVmFsaWRhdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuaW50ZXJmYWNlIElJbnB1dEZpZWxkU3BlY0V4dCBleHRlbmRzIElJbnB1dEZpZWxkU3BlYyB7XG4gICAgZmllbGRJZDogc3RyaW5nO1xuICAgIGF1dG9jb21wbGV0ZUtleT86IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuICdhbHBoYS0nICsgdjQoKTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9tcHRGb3JtQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdWJtaXRCdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICBleHRGaWVsZHM6IElJbnB1dEZpZWxkU3BlY0V4dFtdO1xuXG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgZmFFeWVTbGFzaCA9IGZhRXllU2xhc2g7XG4gICAgZmFFeWUgPSBmYUV5ZTtcblxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2J1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdG5UeHQgPSB0aGlzLnN1Ym1pdEJ0blR4dCB8fCAnQ29uZmlybSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuVHh0ID0gdGhpcy5jYW5jZWxCdG5UeHQgfHwgJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdG5DbGFzc2VzID0gdGhpcy5zdWJtaXRCdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyA9IHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGssIHZpc2libGU6IGZhbHNlIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0RmllbGRzID0gdGhpcy5maWVsZHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCB2aXNpYmxlOiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0ge307XG4gICAgICAgIHRoaXMuZXh0RmllbGRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBhW3gubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgbWFrZVZhbGlkYXRpb25zKHgudmFsaWRhdG9ycykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKGEpO1xuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXMoYSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVFbnRlciAmJiBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBuYW1lPVwicHJvbXB0Rm9ybVwiIGF1dG9jb21wbGV0ZT1cImF1dG9jb21wbGV0ZSA/ICdvbicgOiAnb2ZmJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTRcIiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBleHRGaWVsZHM7IGZpcnN0IGFzIGlzRmlyc3Q7XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXV0b2NvbXBsZXRlO2Vsc2UgZGlzYWJsZVRtcGxcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImVsZW0uY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHRleHRhcmVhIC0tPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPCEtLSBwYXNzd29yZCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiAqbmdTd2l0Y2hDYXNlPVwiJ3Bhc3N3b3JkJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS52aXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGljb24tb25seVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbS52aXNpYmxlID0gIWVsZW0udmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImVsZW0udmlzaWJsZSA/IGZhRXllU2xhc2ggOiBmYUV5ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIE90aGVyd2lzZSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIiFlbGVtLm1hc2tTZXR0aW5nczsgZWxzZSBtYXNrVG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI21hc2tUbXBsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiZWxlbS5tYXNrU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Rpc2FibGVUbXBsPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZWxlbS5jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gdGV4dGFyZWEgLS0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwhLS0gcGFzc3dvcmQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgKm5nU3dpdGNoQ2FzZT1cIidwYXNzd29yZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0udmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW0udmlzaWJsZSA9ICFlbGVtLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJlbGVtLnZpc2libGUgPyBmYUV5ZVNsYXNoIDogZmFFeWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBPdGhlcnMgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZWxlbS5tYXNrU2V0dGluZ3M7IGVsc2UgYW5vdGhlck1hc2tUbXBsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Fub3RoZXJNYXNrVG1wbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz1cInt7ZWxlbS5tYXNrU2V0dGluZ3MubWFza319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWluICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW5sZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4bGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnVybCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy51cmwubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoaWRlQ2FuY2VsQnRuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY2FuY2VsQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjYW5jZWwoKVwiID5cbiAgICAgICAgICAgIHt7Y2FuY2VsQnRuVHh0fX1cbiAgICAgICAgPC9idXR0b24+ICAgIFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWhpZGVTdWJtaXRCdG5cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwic3VibWl0QnRuQ2xhc3Nlc1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIChjbGljayk9XCJzdWJtaXQoKVwiPlxuICAgICAgICAgICAge3tzdWJtaXRCdG5UeHR9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbjwvZm9ybT5cblxuXG4iXX0=