import { __assign, __extends } from "tslib";
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
    var ctx_r18 = i0.ɵɵnextContext(2);
    var elem_r3 = ctx_r18.$implicit;
    var isFirst_r4 = ctx_r18.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_3_div_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); var elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(4, "fa-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext(2);
    var elem_r3 = ctx_r22.$implicit;
    var isFirst_r4 = ctx_r22.first;
    var ctx_r16 = i0.ɵɵnextContext();
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
    var ctx_r26 = i0.ɵɵnextContext(3);
    var elem_r3 = ctx_r26.$implicit;
    var isFirst_r4 = ctx_r26.first;
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
    var ctx_r28 = i0.ɵɵnextContext(4);
    var elem_r3 = ctx_r28.$implicit;
    var isFirst_r4 = ctx_r28.first;
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
    var elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", elem_r3.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_3_ng_container_4_input_1_Template, 1, 6, "input", 20);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_3_ng_container_4_ng_template_2_Template, 1, 1, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r24 = i0.ɵɵreference(3);
    var elem_r3 = i0.ɵɵnextContext(2).$implicit;
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
    var elem_r3 = i0.ɵɵnextContext().$implicit;
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
    var ctx_r35 = i0.ɵɵnextContext(2);
    var elem_r3 = ctx_r35.$implicit;
    var isFirst_r4 = ctx_r35.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "div", 17);
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_4_div_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r38); var elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(4, "fa-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r39 = i0.ɵɵnextContext(2);
    var elem_r3 = ctx_r39.$implicit;
    var isFirst_r4 = ctx_r39.first;
    var ctx_r33 = i0.ɵɵnextContext();
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
    var ctx_r43 = i0.ɵɵnextContext(3);
    var elem_r3 = ctx_r43.$implicit;
    var isFirst_r4 = ctx_r43.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_4_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 27);
} if (rf & 2) {
    var ctx_r44 = i0.ɵɵnextContext(3);
    var elem_r3 = ctx_r44.$implicit;
    var isFirst_r4 = ctx_r44.first;
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
    var _r41 = i0.ɵɵreference(3);
    var elem_r3 = i0.ɵɵnextContext(2).$implicit;
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
    var elem_r3 = i0.ɵɵnextContext().$implicit;
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
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
} }
function PromptFormComponent_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
} }
function PromptFormComponent_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
} }
function PromptFormComponent_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = i0.ɵɵnextContext().$implicit;
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
    var elem_r3 = ctx.$implicit;
    var _r6 = i0.ɵɵreference(5);
    var ctx_r0 = i0.ɵɵnextContext();
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
    var _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r55); var ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r57); var ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.submit(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
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
var PromptFormComponent = /** @class */ (function (_super) {
    __extends(PromptFormComponent, _super);
    function PromptFormComponent(_builder) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this.enableEnter = false;
        _this.faEyeSlash = faEyeSlash;
        _this.faEye = faEye;
        return _this;
    }
    PromptFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitBtnTxt = this.submitBtnTxt || 'Confirm';
        this.cancelBtnTxt = this.cancelBtnTxt || 'Cancel';
        this.submitBtnClasses = this.submitBtnClasses || 'btn-primary';
        this.cancelBtnClasses = this.cancelBtnClasses || 'btn-secondary';
        if (this.autocomplete) {
            this.extFields = this.fields.map(function (a) {
                var k = "section-polp-bs-prompt-form-" + _this.autocomplete + " " + a.name;
                return __assign(__assign({}, a), { fieldId: uuidv4(), autocompleteKey: k, visible: false });
            });
        }
        else {
            this.extFields = this.fields.map(function (a) {
                return __assign(__assign({}, a), { fieldId: uuidv4(), visible: false });
            });
        }
        var a = {};
        this.extFields.forEach(function (x) {
            a[x.name] = new FormControl(x.value, makeValidations(x.validators));
        });
        this.form = this._builder.group(a);
        this._subr = this.form.valueChanges.subscribe(function (a) {
            _this.notifyValidation();
            _this.notifyValueChanges(a);
        });
    };
    PromptFormComponent.prototype.ngOnDestroy = function () {
        this._subr.unsubscribe();
    };
    PromptFormComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    PromptFormComponent.prototype.submit = function () {
        this.onSave.emit(this.form.value);
    };
    PromptFormComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            if (this.form.valid) {
                this.submit();
            }
        }
    };
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
    return PromptFormComponent;
}(DefaultFormBaseComponent));
export { PromptFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7SUNFM0Qsb0NBT0E7SUFBQSxnQ0FBQTtJQUFBLGlCQUFXOzs7OztJQU5ELHlEQUErQjtJQUMvQiwrQ0FBcUI7SUFDckIsaURBQXVCO0lBRXZCLHNDQUFxQjs7OztJQUkvQiwrQkFDSTtJQUFBLDRCQU1BO0lBQUEsK0JBQ0k7SUFBQSxrQ0FFSTtJQURJLHNPQUFzQztJQUMxQyw4QkFDVTtJQUNkLGlCQUFTO0lBQ2IsaUJBQU07SUFDVixpQkFBTTs7Ozs7O0lBYkssZUFBK0I7SUFBL0IseURBQStCO0lBQy9CLCtDQUFxQjtJQUNyQixpREFBdUI7SUFDdkIsdUVBQTZDO0lBQzdDLHNDQUFxQjtJQUtYLGVBQTBDO0lBQTFDLDJFQUEwQzs7O0lBTzNELDRCQVFBOzs7OztJQVBPLHlEQUErQjtJQUMvQixpRUFBdUM7SUFDdkMsK0NBQXFCO0lB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgbWFrZVZhbGlkYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5lbnVtIEtFWV9DT0RFIHtcbiAgICBFTlRFUiA9IDEzXG59XG5cbmludGVyZmFjZSBJSW5wdXRGaWVsZFNwZWNFeHQgZXh0ZW5kcyBJSW5wdXRGaWVsZFNwZWMge1xuICAgIGZpZWxkSWQ6IHN0cmluZztcbiAgICBhdXRvY29tcGxldGVLZXk/OiBzdHJpbmc7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIHJldHVybiAnYWxwaGEtJyArIHY0KCk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0Rm9ybUNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZUVudGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3VibWl0QnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIGZhRXllU2xhc2ggPSBmYUV5ZVNsYXNoO1xuICAgIGZhRXllID0gZmFFeWU7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnRuVHh0ID0gdGhpcy5zdWJtaXRCdG5UeHQgfHwgJ0NvbmZpcm0nO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0blR4dCA9IHRoaXMuY2FuY2VsQnRuVHh0IHx8ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnRuQ2xhc3NlcyA9IHRoaXMuc3VibWl0QnRuQ2xhc3NlcyB8fCAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgPSB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IGBzZWN0aW9uLXBvbHAtYnMtcHJvbXB0LWZvcm0tJHt0aGlzLmF1dG9jb21wbGV0ZX0gJHthLm5hbWV9YDtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSwgYXV0b2NvbXBsZXRlS2V5OiBrLCB2aXNpYmxlOiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSwgdmlzaWJsZTogZmFsc2UgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5vblNhdmUuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInByb21wdEZvcm1cIiBhdXRvY29tcGxldGU9XCJhdXRvY29tcGxldGUgPyAnb24nIDogJ29mZidcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9jb21wbGV0ZTtlbHNlIGRpc2FibGVUbXBsXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJlbGVtLmNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgPCEtLSB0ZXh0YXJlYSAtLT5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwhLS0gcGFzc3dvcmQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgKm5nU3dpdGNoQ2FzZT1cIidwYXNzd29yZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0udmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW0udmlzaWJsZSA9ICFlbGVtLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJlbGVtLnZpc2libGUgPyBmYUV5ZVNsYXNoIDogZmFFeWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBPdGhlcndpc2UgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZWxlbS5tYXNrU2V0dGluZ3M7IGVsc2UgbWFza1RtcGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZUtleX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNtYXNrVG1wbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImVsZW0ubWFza1NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwie3tlbGVtLm1hc2tTZXR0aW5ncy5tYXNrfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNhYmxlVG1wbD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImVsZW0uY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHRleHRhcmVhIC0tPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8IS0tIHBhc3N3b3JkIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiICpuZ1N3aXRjaENhc2U9XCIncGFzc3dvcmQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLnZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgaWNvbi1vbmx5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbGVtLnZpc2libGUgPSAhZWxlbS52aXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZWxlbS52aXNpYmxlID8gZmFFeWVTbGFzaCA6IGZhRXllXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gT3RoZXJzIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWVsZW0ubWFza1NldHRpbmdzOyBlbHNlIGFub3RoZXJNYXNrVG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhbm90aGVyTWFza1RtcGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5yZXF1aXJlZCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucGF0dGVybiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWlubGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbkxlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heGxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXhMZW5ndGgubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy51cmwgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMudXJsLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG1yLTJcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbmNlbEJ0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2FuY2VsKClcIiA+XG4gICAgICAgICAgICB7e2NhbmNlbEJ0blR4dH19XG4gICAgICAgIDwvYnV0dG9uPiAgICBcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoaWRlU3VibWl0QnRuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInN1Ym1pdEJ0bkNsYXNzZXNcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiAoY2xpY2spPVwic3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7c3VibWl0QnRuVHh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgXG48L2Zvcm0+XG5cblxuIl19