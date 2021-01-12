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
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close(); });
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
    const ctx_r20 = i0.ɵɵnextContext();
    const elem_r8 = ctx_r20.$implicit;
    const isFirst_r9 = ctx_r20.first;
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
    const ctx_r23 = i0.ɵɵnextContext(2);
    const elem_r8 = ctx_r23.$implicit;
    const isFirst_r9 = ctx_r23.first;
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
    const ctx_r24 = i0.ɵɵnextContext(2);
    const elem_r8 = ctx_r24.$implicit;
    const isFirst_r9 = ctx_r24.first;
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
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !elem_r8.maskSettings);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r8.maskSettings);
} }
function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r8 = i0.ɵɵnextContext().$implicit;
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
    const elem_r8 = ctx.$implicit;
    const _r11 = i0.ɵɵreference(5);
    const ctx_r7 = i0.ɵɵnextContext(2);
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
    const ctx_r1 = i0.ɵɵnextContext();
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
    const ctx_r46 = i0.ɵɵnextContext();
    const elem_r34 = ctx_r46.$implicit;
    const isFirst_r35 = ctx_r46.first;
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
    const ctx_r49 = i0.ɵɵnextContext(2);
    const elem_r34 = ctx_r49.$implicit;
    const isFirst_r35 = ctx_r49.first;
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
    const ctx_r50 = i0.ɵɵnextContext(2);
    const elem_r34 = ctx_r50.$implicit;
    const isFirst_r35 = ctx_r50.first;
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
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngIf", !elem_r34.maskSettings);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r34.maskSettings);
} }
function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r34.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r34 = i0.ɵɵnextContext().$implicit;
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
    const elem_r34 = ctx.$implicit;
    const _r37 = i0.ɵɵreference(5);
    const ctx_r33 = i0.ɵɵnextContext(2);
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
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.extFields);
} }
function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.close(); });
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
    } }, directives: [i3.NgIf, i3.NgClass, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgForOf, i1.DefaultValueAccessor, i4.AutosizeDirective, i1.NgControlStatus, i1.FormControlName, i5.AutofocusDirective, i6.MaskDirective], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0lDSnZFLGtDQUNJO0lBRDhELHFMQUFpQjtJQUMvRSxnQ0FBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQzNDLGlCQUFTOzs7SUFXRyxvQ0FNQTtJQUFBLGdDQUFBO0lBQUEsaUJBQVc7Ozs7O0lBTkQseURBQStCO0lBQy9CLCtDQUFxQjtJQUNyQixpREFBdUI7SUFFdkIsc0NBQXFCOzs7SUFJM0IsNkJBQ0k7SUFBQSw0QkFPSjtJQUFBLDBCQUFlOzs7OztJQVBKLGVBQStCO0lBQS9CLHlEQUErQjtJQUMvQixpRUFBdUM7SUFDdkMsK0NBQXFCO0lBQ3JCLGlEQUF1QjtJQUN2QixrREFBd0I7SUFDeEIsc0NBQXFCOzs7SUFHaEMsNkJBQ0k7SUFBQSw0QkFRSjtJQUFBLDBCQUFlOzs7OztJQVJKLGVBQStCO0lBQS9CLHlEQUErQjtJQUMvQixp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Q0FDSTtRQURxRixpR0FBUyxhQUFTLElBQUM7UUFDeEcsYUFDSjtRQUFBLGlCQUFTO1FBQ2IsaUJBQU07OztRQXRJZ0MsZUFBUztRQUFULCtCQUFTO1FBQ3lDLGVBQXFCO1FBQXJCLHdDQUFxQjtRQUtwRyxlQUF1QjtRQUF2Qiw0REFBdUI7UUFFZCxlQUFxQztRQUFyQyx1Q0FBcUMsaUJBQUE7UUF3SG1DLGVBQXNCO1FBQXRCLHlDQUFzQjtRQUcxRSxlQUE2QjtRQUE3QiwrQ0FBNkIsNkJBQUE7UUFDM0QsZUFDSjtRQURJLG9EQUNKOztrREQzRlMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBcUNOLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJSW5wdXRGaWVsZFNwZWMsIG1ha2VWYWxpZGF0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0taGVscGVyJztcblxuZW51bSBLRVlfQ09ERSB7XG4gICAgRU5URVIgPSAxM1xufVxuXG5pbnRlcmZhY2UgSUlucHV0RmllbGRTcGVjRXh0IGV4dGVuZHMgSUlucHV0RmllbGRTcGVjIHtcbiAgICBmaWVsZElkOiBzdHJpbmc7XG4gICAgYXV0b2NvbXBsZXRlS2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcEZvcm1JbnB1dHMge1xuICAgIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJztcbiAgICBlbmFibGVFbnRlcj86IGJvb2xlYW47XG5cbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2xvc2VCdG4/OiBib29sZWFuO1xuXG4gICAgY2FuY2VsQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNhbmNlbEJ0bkNsYXNzZXM/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkNsYXNzZXM/OiBzdHJpbmc7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlubmVyQm9keTogc3RyaW5nO1xuICAgIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcbn1cblxuZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIHJldHVybiAnYWxwaGEtJyArIHY0KCk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVFbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhpZGVDbG9zZUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBjYW5jZWxCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkNsYXNzZXM6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgQE91dHB1dCgpIHJlc3VsdDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcblxuICAgIGV4dEZpZWxkczogSUlucHV0RmllbGRTcGVjRXh0W107XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlybUJ0bkxhYmVsID0gdGhpcy5jb25maXJtQnRuTGFiZWwgfHwgJ0NvbmZpcm0nO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkxhYmVsID0gdGhpcy5jYW5jZWxCdG5MYWJlbCB8fCAnQ2FuY2VsJztcblxuICAgICAgICB0aGlzLmNvbmZpcm1CdG5DbGFzc2VzID0gdGhpcy5jb25maXJtQnRuQ2xhc3NlcyB8fCAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgPSB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IGBzZWN0aW9uLXBvbHAtYnMtcHJvbXB0LWZvcm0tJHt0aGlzLmF1dG9jb21wbGV0ZX0gJHthLm5hbWV9YDtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSwgYXV0b2NvbXBsZXRlS2V5OiBrIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0RmllbGRzID0gdGhpcy5maWVsZHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSB7fTtcbiAgICAgICAgdGhpcy5leHRGaWVsZHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGFbeC5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlLCBtYWtlVmFsaWRhdGlvbnMoeC52YWxpZGF0b3JzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoYSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVFbnRlciAmJiBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQobnVsbCk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGUgcHVsbC1sZWZ0XCI+e3t0aXRsZX19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVDbG9zZUJ0blwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxkaXYgW2lubmVySHRtbF09XCJpbm5lckJvZHlcIj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXV0b2NvbXBsZXRlO2Vsc2UgZGlzYWJsZVRtcGxcIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInByb21wdEZvcm1cIiBhdXRvY29tcGxldGU9XCJvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb20tZ3JvdXAgbWItNFwiICpuZ0Zvcj1cImxldCBlbGVtIG9mIGV4dEZpZWxkczsgZmlyc3QgYXMgaXNGaXJzdDtcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAqbmdJZj1cImVsZW0uY2F0ZWdvcnkgPT0gJ3RleHRhcmVhJzsgZWxzZSBpbnB1dFRtcGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2lucHV0VG1wbD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbGVtLm1hc2tTZXR0aW5nc1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbS5tYXNrU2V0dGluZ3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZUtleX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz1cInt7ZWxlbS5tYXNrU2V0dGluZ3MubWFza319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5yZXF1aXJlZC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5wYXR0ZXJuLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbmxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbkxlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXhsZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXhMZW5ndGgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8udXJsICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMudXJsLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGlzYWJsZVRtcGw+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIG5hbWU9XCJwcm9tcHRGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgKm5nSWY9XCJlbGVtLmNhdGVnb3J5ID09ICd0ZXh0YXJlYSc7IGVsc2UgYW5vdGhlcklucHV0VG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhbm90aGVySW5wdXRUbXBsPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVsZW0ubWFza1NldHRpbmdzXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbS5tYXNrU2V0dGluZ3NcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucmVxdWlyZWQubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWluICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucGF0dGVybi5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW5sZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW5MZW5ndGgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4bGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4TGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnVybCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnVybC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiIFtuZ0NsYXNzXT1cImNhbmNlbEJ0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVDYW5jZWxCdG5cIj5cbiAgICAgICAge3tjYW5jZWxCdG5MYWJlbH19XG4gICAgPC9idXR0b24+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCIgW25nQ2xhc3NdPVwiY29uZmlybUJ0bkNsYXNzZXNcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgIHt7Y29uZmlybUJ0bkxhYmVsfX1cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG5cblxuIl19