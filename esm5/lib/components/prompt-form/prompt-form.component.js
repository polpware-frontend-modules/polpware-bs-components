import { __assign } from "tslib";
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
import * as i4 from "ngx-autosize";
import * as i5 from "@40three/ngx-autofocus-directive";
import * as i6 from "ngx-mask";
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close(); });
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_ng_container_6_div_2_textarea_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 19);
    i0.ɵɵtext(1, "                ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = i0.ɵɵnextContext();
    var elem_r8 = ctx_r20.$implicit;
    var isFirst_r9 = ctx_r20.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    i0.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r8.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r9);
} }
function PromptFormComponent_ng_container_6_div_2_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r23 = i0.ɵɵnextContext(2);
    var elem_r8 = ctx_r23.$implicit;
    var isFirst_r9 = ctx_r23.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r8.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r8.category);
    i0.ɵɵproperty("autofocus", isFirst_r9);
} }
function PromptFormComponent_ng_container_6_div_2_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(2);
    var elem_r8 = ctx_r24.$implicit;
    var isFirst_r9 = ctx_r24.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r8.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r8.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r8.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r8.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r9);
} }
function PromptFormComponent_ng_container_6_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_ng_container_6_div_2_ng_template_4_ng_container_0_Template, 2, 6, "ng-container", 20);
    i0.ɵɵtemplate(1, PromptFormComponent_ng_container_6_div_2_ng_template_4_ng_container_1_Template, 2, 7, "ng-container", 20);
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !elem_r8.maskSettings);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r8.maskSettings);
} }
function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.url.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PromptFormComponent_ng_container_6_div_2_textarea_3_Template, 2, 4, "textarea", 16);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_container_6_div_2_ng_template_4_Template, 2, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_container_6_div_2_small_6_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_container_6_div_2_small_7_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(8, PromptFormComponent_ng_container_6_div_2_small_8_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(9, PromptFormComponent_ng_container_6_div_2_small_9_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(10, PromptFormComponent_ng_container_6_div_2_small_10_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(11, PromptFormComponent_ng_container_6_div_2_small_11_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(12, PromptFormComponent_ng_container_6_div_2_small_12_Template, 2, 1, "small", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ctx.$implicit;
    var _r11 = i0.ɵɵreference(5);
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r8.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r8.category == "textarea")("ngIfElse", _r11);
    i0.ɵɵadvance(3);
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.url) && (ctx_r7.form.touched || ctx_r7.form.dirty));
} }
function PromptFormComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 12);
    i0.ɵɵtemplate(2, PromptFormComponent_ng_container_6_div_2_Template, 13, 11, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.extFields);
} }
function PromptFormComponent_ng_template_7_div_1_textarea_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 19);
    i0.ɵɵtext(1, "                ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r46 = i0.ɵɵnextContext();
    var elem_r34 = ctx_r46.$implicit;
    var isFirst_r35 = ctx_r46.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r34.name);
    i0.ɵɵpropertyInterpolate("id", elem_r34.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r34.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r35);
} }
function PromptFormComponent_ng_template_7_div_1_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r49 = i0.ɵɵnextContext(2);
    var elem_r34 = ctx_r49.$implicit;
    var isFirst_r35 = ctx_r49.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r34.name);
    i0.ɵɵpropertyInterpolate("id", elem_r34.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r34.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r34.category);
    i0.ɵɵproperty("autofocus", isFirst_r35);
} }
function PromptFormComponent_ng_template_7_div_1_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "input", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r50 = i0.ɵɵnextContext(2);
    var elem_r34 = ctx_r50.$implicit;
    var isFirst_r35 = ctx_r50.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r34.name);
    i0.ɵɵpropertyInterpolate("id", elem_r34.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r34.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r34.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r34.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r35);
} }
function PromptFormComponent_ng_template_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_ng_template_7_div_1_ng_template_4_ng_container_0_Template, 2, 5, "ng-container", 20);
    i0.ɵɵtemplate(1, PromptFormComponent_ng_template_7_div_1_ng_template_4_ng_container_1_Template, 2, 6, "ng-container", 20);
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !elem_r34.maskSettings);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r34.maskSettings);
} }
function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.url.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PromptFormComponent_ng_template_7_div_1_textarea_3_Template, 2, 4, "textarea", 16);
    i0.ɵɵtemplate(4, PromptFormComponent_ng_template_7_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PromptFormComponent_ng_template_7_div_1_small_6_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(7, PromptFormComponent_ng_template_7_div_1_small_7_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(8, PromptFormComponent_ng_template_7_div_1_small_8_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(9, PromptFormComponent_ng_template_7_div_1_small_9_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(10, PromptFormComponent_ng_template_7_div_1_small_10_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(11, PromptFormComponent_ng_template_7_div_1_small_11_Template, 2, 1, "small", 18);
    i0.ɵɵtemplate(12, PromptFormComponent_ng_template_7_div_1_small_12_Template, 2, 1, "small", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r34 = ctx.$implicit;
    var _r37 = i0.ɵɵreference(5);
    var ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r34.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r34.category == "textarea")("ngIfElse", _r37);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.required) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.min) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.max) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.pattern) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.minlength) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.maxlength) && (ctx_r33.form.touched || ctx_r33.form.dirty));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r33.form.controls[elem_r34.name].errors == null ? null : ctx_r33.form.controls[elem_r34.name].errors.url) && (ctx_r33.form.touched || ctx_r33.form.dirty));
} }
function PromptFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 24);
    i0.ɵɵtemplate(1, PromptFormComponent_ng_template_7_div_1_Template, 13, 11, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.extFields);
} }
function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r60); var ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.close(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
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
var PromptFormComponent = /** @class */ (function () {
    function PromptFormComponent(_builder, _bsModalRef) {
        this._builder = _builder;
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    PromptFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.confirmBtnLabel = this.confirmBtnLabel || 'Confirm';
        this.cancelBtnLabel = this.cancelBtnLabel || 'Cancel';
        this.confirmBtnClasses = this.confirmBtnClasses || 'btn-primary';
        this.cancelBtnClasses = this.cancelBtnClasses || 'btn-secondary';
        if (this.autocomplete) {
            this.extFields = this.fields.map(function (a) {
                var k = "section-polp-bs-prompt-form-" + _this.autocomplete + " " + a.name;
                return __assign(__assign({}, a), { fieldId: uuidv4(), autocompleteKey: k });
            });
        }
        else {
            this.extFields = this.fields.map(function (a) {
                return __assign(__assign({}, a), { fieldId: uuidv4() });
            });
        }
        var a = {};
        this.extFields.forEach(function (x) {
            a[x.name] = new FormControl(x.value, makeValidations(x.validators));
        });
        this.form = this._builder.group(a);
    };
    PromptFormComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            if (this.form.valid) {
                this.confirm();
            }
        }
    };
    PromptFormComponent.prototype.close = function () {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptFormComponent.prototype.confirm = function () {
        this.result.next(this.form.value);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BsModalRef)); };
    PromptFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 13, vars: 9, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["name", "promptForm", "autocomplete", "on", 3, "formGroup"], ["class", "from-group mb-4", 4, "ngFor", "ngForOf"], [1, "from-group", "mb-4"], [3, "for"], ["autosize", "", "class", "form-control", 3, "formControlName", "id", "name", "autofocus", 4, "ngIf", "ngIfElse"], ["inputTmpl", ""], ["class", "text-danger", 4, "ngIf"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autofocus"], [4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask"], [1, "text-danger"], ["name", "promptForm", 3, "formGroup"], ["anotherInputTmpl", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "mask"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
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
            var _r2 = i0.ɵɵreference(8);
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
        } }, directives: [i3.NgIf, i3.NgClass, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgForOf, i1.DefaultValueAccessor, i4.AutosizeDirective, i1.NgControlStatus, i1.FormControlName, i5.AutofocusDirective, i6.MaskDirective], styles: [""] });
    return PromptFormComponent;
}());
export { PromptFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQ0p2RSxrQ0FDSTtJQUQ4RCxtTEFBaUI7SUFDL0UsZ0NBQXlCO0lBQUEsc0JBQU87SUFBQSxpQkFBTztJQUMzQyxpQkFBUzs7O0lBV0csb0NBTUE7SUFBQSxnQ0FBQTtJQUFBLGlCQUFXOzs7OztJQU5ELHlEQUErQjtJQUMvQiwrQ0FBcUI7SUFDckIsaURBQXVCO0lBRXZCLHNDQUFxQjs7O0lBSTNCLDZCQUNJO0lBQUEsNEJBT0o7SUFBQSwwQkFBZTs7Ozs7SUFQSixlQUErQjtJQUEvQix5REFBK0I7SUFDL0IsaUVBQXVDO0lBQ3ZDLCtDQUFxQjtJQUNyQixpREFBdUI7SUFDdkIsa0RBQXdCO0lBQ3hCLHNDQUFxQjs7O0lBR2hDLDZCQUNJO0lBQUEsNEJBUUo7SUFBQSwwQkFBZTs7Ozs7SUFSSixlQUErQjtJQUEvQix5REFBK0I7SUFDL0IsaUVBQXVDO0lBQ3ZDLCtDQUFxQjtJQUNyQixpREFBdUI7SUFDdkIsa0RBQXdCO0lBRXhCLDJEQUFpQztJQURqQyxzQ0FBcUI7OztJQWZoQywwSEFDSTtJQVFKLDBIQUNJOzs7SUFWVSw0Q0FBMEI7SUFTMUIsZUFBeUI7SUFBekIsMkNBQXlCOzs7SUFZM0MsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSxvRUFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSwrREFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSwrREFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSxtRUFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSxxRUFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSxxRUFDSjs7O0lBQ0EsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7OztJQURKLGVBQ0o7SUFESSwrREFDSjs7O0lBckRKLCtCQUNJO0lBQUEsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVE7SUFDUixvR0FNQTtJQUNBLDJJQUNJO0lBcUJKLDhGQUNJO0lBRUosOEZBQ0k7SUFFSiw4RkFDSTtJQUVKLDhGQUNJO0lBRUosZ0dBQ0k7SUFFSixnR0FDSTtJQUVKLGdHQUNJO0lBRVIsaUJBQU07Ozs7O0lBckRLLGVBQXNCO0lBQXRCLGdEQUFzQjtJQUN6QixlQUNKO0lBREksOENBQ0o7SUFDMEMsZUFBbUQ7SUFBbkQscURBQW1ELGtCQUFBO0lBNkJsRSxlQUFpRjtJQUFqRixvTEFBaUY7SUFHakYsZUFBNEU7SUFBNUUsK0tBQTRFO0lBRzVFLGVBQTRFO0lBQTVFLCtLQUE0RTtJQUc1RSxlQUFnRjtJQUFoRixtTEFBZ0Y7SUFHaEYsZUFBa0Y7SUFBbEYscUxBQWtGO0lBR2xGLGVBQWtGO0lBQWxGLHFMQUFrRjtJQUdsRixlQUE0RTtJQUE1RSwrS0FBNEU7OztJQXJEbkgsNkJBQ0k7SUFBQSxnQ0FDSTtJQUFBLHNGQUNJO0lBc0RSLGlCQUFPO0lBQ1gsMEJBQWU7OztJQXpETCxlQUFrQjtJQUFsQix1Q0FBa0I7SUFDUyxlQUFpRDtJQUFqRCwwQ0FBaUQ7OztJQWdFMUUsb0NBTUE7SUFBQSxnQ0FBQTtJQUFBLGlCQUFXOzs7OztJQU5ELDBEQUErQjtJQUMvQixnREFBcUI7SUFDckIsa0RBQXVCO0lBRXZCLHVDQUFxQjs7O0lBSTNCLDZCQUNJO0lBQUEsNEJBTUo7SUFBQSwwQkFBZTs7Ozs7SUFOSixlQUErQjtJQUEvQiwwREFBK0I7SUFDL0IsZ0RBQXFCO0lBQ3JCLGtEQUF1QjtJQUN2QixtREFBd0I7SUFDeEIsdUNBQXFCOzs7SUFHaEMsNkJBQ0k7SUFBQSw0QkFPSjtJQUFBLDBCQUFlOzs7OztJQVBKLGVBQStCO0lBQS9CLDBEQUErQjtJQUMvQixnREFBcUI7SUFDckIsa0RBQXVCO0lBQ3ZCLG1EQUF3QjtJQUV4Qiw0REFBaUM7SUFEakMsdUNBQXFCOzs7SUFiaEMseUhBQ0k7SUFPSix5SEFDSTs7O0lBVFUsNkNBQTBCO0lBUTFCLGVBQXlCO0lBQXpCLDRDQUF5Qjs7O0lBVzNDLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREkscUVBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksZ0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksZ0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksb0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksc0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksc0VBQ0o7OztJQUNBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFESixlQUNKO0lBREksZ0VBQ0o7OztJQXBESiwrQkFDSTtJQUFBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFRO0lBRVIsbUdBTUE7SUFDQSwwSUFDSTtJQW1CSiw2RkFDSTtJQUVKLDZGQUNJO0lBRUosNkZBQ0k7SUFFSiw2RkFDSTtJQUVKLCtGQUNJO0lBRUosK0ZBQ0k7SUFFSiwrRkFDSTtJQUdSLGlCQUFNOzs7OztJQXJESyxlQUFzQjtJQUF0QixpREFBc0I7SUFDekIsZUFDSjtJQURJLCtDQUNKO0lBRTBDLGVBQTBEO0lBQTFELHNEQUEwRCxrQkFBQTtJQTJCekUsZUFBaUY7SUFBakYsMExBQWlGO0lBR2pGLGVBQTRFO0lBQTVFLHFMQUE0RTtJQUc1RSxlQUE0RTtJQUE1RSxxTEFBNEU7SUFHNUUsZUFBZ0Y7SUFBaEYseUxBQWdGO0lBR2hGLGVBQWtGO0lBQWxGLDJMQUFrRjtJQUdsRixlQUFrRjtJQUFsRiwyTEFBa0Y7SUFHbEYsZUFBNEU7SUFBNUUscUxBQTRFOzs7SUFuRC9HLGdDQUNJO0lBQUEscUZBQ0k7SUFzRFIsaUJBQU87OztJQXhERCx1Q0FBa0I7SUFDUyxlQUFpRDtJQUFqRCwwQ0FBaUQ7Ozs7SUEyRHRGLGtDQUNJO0lBRGdFLHVMQUFpQjtJQUNqRixZQUNKO0lBQUEsaUJBQVM7OztJQUY4QixpREFBNEI7SUFDL0QsZUFDSjtJQURJLHNEQUNKOztBRDNISixJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCwwQ0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUF3QkQsU0FBUyxNQUFNO0lBQ1gsT0FBTyxRQUFRLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDM0IsQ0FBQztBQUVEO0lBNEJJLDZCQUE2QixRQUFxQixFQUM3QixXQUF1QjtRQURmLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFyQm5DLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTdCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBbUJuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDO1FBRXRELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksYUFBYSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksZUFBZSxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDOUIsSUFBTSxDQUFDLEdBQUcsaUNBQStCLEtBQUksQ0FBQyxZQUFZLFNBQUksQ0FBQyxDQUFDLElBQU0sQ0FBQztnQkFDdkUsNkJBQVksQ0FBQyxLQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQyxJQUFHO1lBQzNELENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2dCQUM5Qiw2QkFBWSxDQUFDLEtBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFHO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdELHNDQUFRLEdBRFIsVUFDUyxLQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUVELG1DQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzBGQXpFUSxtQkFBbUI7NERBQW5CLG1CQUFtQjswR0FBbkIsb0JBQWdCOztZQzNDN0IsOEJBQ0k7WUFBQSw2QkFBa0M7WUFBQSxZQUFTO1lBQUEsaUJBQUs7WUFDaEQsMEVBQ0k7WUFFUixpQkFBTTtZQUNOLDhCQUNJO1lBQUEseUJBQ007WUFDTixzRkFDSTtZQTBESixxSEFDSTtZQTBEUixpQkFBTTtZQUNOLDhCQUNJO1lBQUEsNEVBQ0k7WUFFSixrQ0FDSTtZQURxRixpR0FBUyxhQUFTLElBQUM7WUFDeEcsYUFDSjtZQUFBLGlCQUFTO1lBQ2IsaUJBQU07OztZQXRJZ0MsZUFBUztZQUFULCtCQUFTO1lBQ3lDLGVBQXFCO1lBQXJCLHdDQUFxQjtZQUtwRyxlQUF1QjtZQUF2Qiw0REFBdUI7WUFFZCxlQUFxQztZQUFyQyx1Q0FBcUMsaUJBQUE7WUF3SG1DLGVBQXNCO1lBQXRCLHlDQUFzQjtZQUcxRSxlQUE2QjtZQUE3QiwrQ0FBNkIsNkJBQUE7WUFDM0QsZUFDSjtZQURJLG9EQUNKOzs4QkR0SUo7Q0FzSEMsQUFoRkQsSUFnRkM7U0EzRVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFxQ04sWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgbWFrZVZhbGlkYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5lbnVtIEtFWV9DT0RFIHtcbiAgICBFTlRFUiA9IDEzXG59XG5cbmludGVyZmFjZSBJSW5wdXRGaWVsZFNwZWNFeHQgZXh0ZW5kcyBJSW5wdXRGaWVsZFNwZWMge1xuICAgIGZpZWxkSWQ6IHN0cmluZztcbiAgICBhdXRvY29tcGxldGVLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wRm9ybUlucHV0cyB7XG4gICAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnO1xuICAgIGVuYWJsZUVudGVyPzogYm9vbGVhbjtcblxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDbG9zZUJ0bj86IGJvb2xlYW47XG5cbiAgICBjYW5jZWxCdG5MYWJlbD86IHN0cmluZztcbiAgICBjb25maXJtQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY2FuY2VsQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICBjb25maXJtQnRuQ2xhc3Nlcz86IHN0cmluZztcblxuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xufVxuXG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuICdhbHBoYS0nICsgdjQoKTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9tcHRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZUVudGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGlkZUNsb3NlQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICBAT3V0cHV0KCkgcmVzdWx0OiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2J1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtQnRuTGFiZWwgPSB0aGlzLmNvbmZpcm1CdG5MYWJlbCB8fCAnQ29uZmlybSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuTGFiZWwgPSB0aGlzLmNhbmNlbEJ0bkxhYmVsIHx8ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkNsYXNzZXMgPSB0aGlzLmNvbmZpcm1CdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyA9IHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGsgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCkgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAnLCBbJyRldmVudCddKVxuICAgIGtleUV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUVudGVyICYmIGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFLkVOVEVSKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dChudWxsKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZUNsb3NlQnRuXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvY29tcGxldGU7ZWxzZSBkaXNhYmxlVG1wbFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBuYW1lPVwicHJvbXB0Rm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiICpuZ0lmPVwiZWxlbS5jYXRlZ29yeSA9PSAndGV4dGFyZWEnOyBlbHNlIGlucHV0VG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRUbXBsPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVsZW0ubWFza1NldHRpbmdzXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtLm1hc2tTZXR0aW5nc1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwie3tlbGVtLm1hc2tTZXR0aW5ncy5tYXNrfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5yZXF1aXJlZCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucGF0dGVybiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWlubGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heGxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy51cmwgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy51cmwubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkaXNhYmxlVG1wbD5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInByb21wdEZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9tLWdyb3VwIG1iLTRcIiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBleHRGaWVsZHM7IGZpcnN0IGFzIGlzRmlyc3Q7XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAqbmdJZj1cImVsZW0uY2F0ZWdvcnkgPT0gJ3RleHRhcmVhJzsgZWxzZSBhbm90aGVySW5wdXRUbXBsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Fub3RoZXJJbnB1dFRtcGw+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZWxlbS5tYXNrU2V0dGluZ3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtLm1hc2tTZXR0aW5nc1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz1cInt7ZWxlbS5tYXNrU2V0dGluZ3MubWFza319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbmxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbkxlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXhsZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXhMZW5ndGgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8udXJsICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMudXJsLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBtci0yXCIgW25nQ2xhc3NdPVwiY2FuY2VsQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICB7e2NhbmNlbEJ0bkxhYmVsfX1cbiAgICA8L2J1dHRvbj4gICAgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiBbbmdDbGFzc109XCJjb25maXJtQnRuQ2xhc3Nlc1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAge3tjb25maXJtQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cblxuXG4iXX0=