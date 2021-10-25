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
function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵelementStart(3, "label", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "label", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("value", o_r23.value);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r23.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template, 4, 6, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r28 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r28.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r28.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 18);
    i0.ɵɵelementStart(4, "option");
    i0.ɵɵtext(5, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template, 2, 2, "option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 21);
    i0.ɵɵtext(4, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r30.$implicit;
    const isFirst_r4 = ctx_r30.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelementStart(5, "div", 24);
    i0.ɵɵelementStart(6, "button", 25);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r33); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(7, "fa-icon", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r34.$implicit;
    const isFirst_r4 = ctx_r34.first;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r19.faEyeSlash : ctx_r19.faEye);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 29);
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r38.$implicit;
    const isFirst_r4 = ctx_r38.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 31);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(4);
    const elem_r3 = ctx_r40.$implicit;
    const isFirst_r4 = ctx_r40.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template, 1, 7, "input", 30);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", elem_r3.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template, 1, 6, "input", 27);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template, 1, 1, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r36 = i0.ɵɵreference(5);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r36);
} }
function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1, 9);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 5, 5, "ng-container", 10);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 10);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 5, 6, "ng-container", 10);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 8, 8, "ng-container", 10);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 6, 4, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", elem_r3.category);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵelementStart(3, "label", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementStart(2, "label", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r52 = ctx.$implicit;
    const i_r53 = ctx.index;
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("value", o_r52.value);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r53);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r53);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r52.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template, 4, 6, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r57 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r57.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r57.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 18);
    i0.ɵɵelementStart(4, "option");
    i0.ɵɵtext(5, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template, 2, 2, "option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 21);
    i0.ɵɵtext(4, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r59.$implicit;
    const isFirst_r4 = ctx_r59.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelementStart(5, "div", 24);
    i0.ɵɵelementStart(6, "button", 25);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r62); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    i0.ɵɵelement(7, "fa-icon", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r63 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r63.$implicit;
    const isFirst_r4 = ctx_r63.first;
    const ctx_r48 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r48.faEyeSlash : ctx_r48.faEye);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 23);
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r67.$implicit;
    const isFirst_r4 = ctx_r67.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 34);
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r68.$implicit;
    const isFirst_r4 = ctx_r68.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template, 1, 5, "input", 32);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template, 1, 6, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r65 = i0.ɵɵreference(5);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r65);
} }
function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 5, 5, "ng-container", 10);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 7, 4, "ng-container", 10);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 5, 6, "ng-container", 10);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 8, 8, "ng-container", 10);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 6, 4, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngSwitch", elem_r3.category);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
} }
function PromptFormComponent_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
} }
function PromptFormComponent_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
} }
function PromptFormComponent_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
} }
function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_Template, 8, 6, "ng-container", 6);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_Template, 7, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_small_4_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_small_5_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_small_6_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_small_7_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_small_8_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(9, PromptFormComponent_div_1_small_9_Template, 2, 1, "small", 8);
    i0.ɵɵtemplate(10, PromptFormComponent_div_1_small_10_Template, 2, 1, "small", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
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
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r81); const ctx_r80 = i0.ɵɵnextContext(); return ctx_r80.submit(); });
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
let formId = 1;
export class PromptFormComponent extends DefaultFormBaseComponent {
    constructor(_builder) {
        super();
        this._builder = _builder;
        this.enableEnter = false;
        this.faEyeSlash = faEyeSlash;
        this.faEye = faEye;
        this.name = `promptName${formId++}`;
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
    } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "form-group mb-4", 4, "ngFor", "ngForOf"], [1, "form-group", "d-flex", "justify-content-end"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "form-group", "mb-4"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [3, "for"], [1, "form-control", 3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autofocus"], [1, "input-group"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask"], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "mask"], [1, "text-danger"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
        i0.ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("name", ctx.name);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.extFields);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RadioControlValueAccessor, i1.DefaultValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i3.AutosizeDirective, i4.AutofocusDirective, i5.FaIconComponent, i6.MaskDirective, i2.NgClass], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ0QzRCw2QkFDSTtJQUFBLCtCQUNJO0lBQUEsNEJBS0E7SUFBQSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTtJQUNaLGlCQUFNO0lBQ1YsMEJBQWU7OztJQVRBLGVBQStCO0lBQS9CLHlEQUErQjtJQUcvQixpREFBdUI7SUFDdkIsK0NBQXFCO0lBQ0ksZUFBc0I7SUFBdEIsZ0RBQXNCO0lBQ2xELGVBQ0o7SUFESSw4Q0FDSjs7O0lBS0osK0JBQ0k7SUFBQSw0QkFNQTtJQUFBLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFRO0lBQ1osaUJBQU07Ozs7O0lBVEssZUFBK0I7SUFBL0IseURBQStCO0lBRy9CLDhDQUFtQjtJQUNuQixpREFBdUI7SUFDdkIsdURBQXlCO0lBQ0EsZUFBMEI7SUFBMUIsd0RBQTBCO0lBQ3RELGVBQ0o7SUFE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Qjs7UUM3QjdCLCtCQUNJO1FBQUEscUVBQ0k7UUFpT0osOEJBQ0k7UUFBQSwwRUFHSTtRQUVKLDBFQUdJO1FBRVIsaUJBQU07UUFFVixpQkFBTzs7UUFoUGtCLDBDQUFlO1FBQWxDLG9DQUFrQjtRQUNTLGVBQWlEO1FBQWpELHVDQUFpRDtRQW1PbEUsZUFBc0I7UUFBdEIseUNBQXNCO1FBS3RCLGVBQXNCO1FBQXRCLHlDQUFzQjs7a0RENU16QixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkErREwsWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjLCBtYWtlVmFsaWRhdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuaW50ZXJmYWNlIElJbnB1dEZpZWxkU3BlY0V4dCBleHRlbmRzIElJbnB1dEZpZWxkU3BlYyB7XG4gICAgZmllbGRJZDogc3RyaW5nO1xuICAgIGF1dG9jb21wbGV0ZUtleT86IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuICdhbHBoYS0nICsgdjQoKTtcbn1cblxubGV0IGZvcm1JZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0Rm9ybUNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZUVudGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3VibWl0QnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIGZhRXllU2xhc2ggPSBmYUV5ZVNsYXNoO1xuICAgIGZhRXllID0gZmFFeWU7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGBwcm9tcHROYW1lJHtmb3JtSWQrK31gO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnRuVHh0ID0gdGhpcy5zdWJtaXRCdG5UeHQgfHwgJ0NvbmZpcm0nO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0blR4dCA9IHRoaXMuY2FuY2VsQnRuVHh0IHx8ICdDYW5jZWwnO1xuXG4gICAgICAgIHRoaXMuc3VibWl0QnRuQ2xhc3NlcyA9IHRoaXMuc3VibWl0QnRuQ2xhc3NlcyB8fCAnYnRuLXByaW1hcnknO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgPSB0aGlzLmNhbmNlbEJ0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSB0aGlzLmZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IGBzZWN0aW9uLXBvbHAtYnMtcHJvbXB0LWZvcm0tJHt0aGlzLmF1dG9jb21wbGV0ZX0gJHthLm5hbWV9YDtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSwgYXV0b2NvbXBsZXRlS2V5OiBrLCB2aXNpYmxlOiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSwgdmlzaWJsZTogZmFsc2UgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYSA9IHt9O1xuICAgICAgICB0aGlzLmV4dEZpZWxkcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgYVt4Lm5hbWVdID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5vblNhdmUuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInt7bmFtZX19XCIgYXV0b2NvbXBsZXRlPVwiYXV0b2NvbXBsZXRlID8gJ29uJyA6ICdvZmYnXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItNFwiICpuZ0Zvcj1cImxldCBlbGVtIG9mIGV4dEZpZWxkczsgZmlyc3QgYXMgaXNGaXJzdDtcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9jb21wbGV0ZTtlbHNlIGRpc2FibGVUbXBsXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJlbGVtLmNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDaGVja2JveCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBSYWRpbyAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgKm5nRm9yPVwibGV0IG8gb2YgZWxlbS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tvLnZhbHVlfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tlbGVtLmZpZWxkSWQgKyBpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e28ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIFNlbGVjdCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5DaG9vc2UgLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvIG9mIGVsZW0ub3B0aW9uc1wiIHZhbHVlPVwie3tvLnZhbHVlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e28ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSB0ZXh0YXJlYSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIHBhc3N3b3JkIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwYXNzd29yZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5maWVsZElkfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0udmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgaWNvbi1vbmx5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbS52aXNpYmxlID0gIWVsZW0udmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJlbGVtLnZpc2libGUgPyBmYUV5ZVNsYXNoIDogZmFFeWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gT3RoZXJ3aXNlIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIiFlbGVtLm1hc2tTZXR0aW5nczsgZWxzZSBtYXNrVG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI21hc2tUbXBsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiZWxlbS5tYXNrU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Rpc2FibGVUbXBsPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZWxlbS5jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ2hlY2tib3ggLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gUmFkaW8gLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiICpuZ0Zvcj1cImxldCBvIG9mIGVsZW0ub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7by52YWx1ZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZCArIGl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInt7ZWxlbS5maWVsZElkICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBTZWxlY3QgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2hvb3NlIC4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbyBvZiBlbGVtLm9wdGlvbnNcIiB2YWx1ZT1cInt7by52YWx1ZX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gdGV4dGFyZWEgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLmZpZWxkSWR9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3NpemUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIHBhc3N3b3JkIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwYXNzd29yZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLnZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGljb24tb25seVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW0udmlzaWJsZSA9ICFlbGVtLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZWxlbS52aXNpYmxlID8gZmFFeWVTbGFzaCA6IGZhRXllXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIE90aGVycyAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZWxlbS5tYXNrU2V0dGluZ3M7IGVsc2UgYW5vdGhlck1hc2tUbXBsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Fub3RoZXJNYXNrVG1wbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0uZmllbGRJZH19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz1cInt7ZWxlbS5tYXNrU2V0dGluZ3MubWFza319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWluICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW5sZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4bGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnVybCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy51cmwubWVzc2FnZX19XG4gICAgICAgIDwvc21hbGw+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoaWRlQ2FuY2VsQnRuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiY2FuY2VsQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjYW5jZWwoKVwiID5cbiAgICAgICAgICAgIHt7Y2FuY2VsQnRuVHh0fX1cbiAgICAgICAgPC9idXR0b24+ICAgIFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWhpZGVTdWJtaXRCdG5cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwic3VibWl0QnRuQ2xhc3Nlc1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIChjbGljayk9XCJzdWJtaXQoKVwiPlxuICAgICAgICAgICAge3tzdWJtaXRCdG5UeHR9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbjwvZm9ybT5cblxuXG4iXX0=