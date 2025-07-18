import { Component, HostListener, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { makeValidations } from '../../utils/form-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/popover";
import * as i4 from "@fortawesome/angular-fontawesome";
import * as i5 from "@40three/ngx-autofocus-directive";
import * as i6 from "@tinymce/tinymce-angular";
import * as i7 from "@angular/cdk/text-field";
import * as i8 from "ngx-mask";
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate1_r2 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate1_r2)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵelement(2, "input", 29);
    i0.ɵɵelementStart(3, "label", 30);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_5_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_Template, 4, 3, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 39);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate2_r4 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate2_r4)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "input", 41);
    i0.ɵɵelementStart(2, "label", 30);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("value", o_r5.value);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId + i_r6);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId + i_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r5.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template, 3, 2, "label", 37)(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template, 4, 3, "span", 32)(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template, 4, 6, "div", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", elem_r1.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate3_r7 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate3_r7)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r8 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r8.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r8.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "select", 43)(6, "option", 44);
    i0.ɵɵtext(7, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_container_1_ng_container_4_option_8_Template, 2, 2, "option", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r1.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate4_r9 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate4_r9)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "textarea", 47);
    i0.ɵɵtext(6, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "true");
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate5_r13 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate5_r13)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "div", 48);
    i0.ɵɵelement(6, "input", 49);
    i0.ɵɵelementStart(7, "button", 50);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r12); const elem_r1 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r1.visible = !elem_r1.visible); });
    i0.ɵɵelement(8, "fa-icon", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.visible ? "text" : "password");
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "new-password");
    i0.ɵɵproperty("autofocus", isFirst_r11);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r1.visible ? ctx_r2.faEyeSlash : ctx_r2.faEye);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate6_r14 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate6_r14)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "div", 48);
    i0.ɵɵelement(6, "editor", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵproperty("init", ctx_r2.editorOptions)("plugins", ctx_r2.editorPlugins)("toolbar", ctx_r2.editorToolbar);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate7_r15 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate7_r15)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 54);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "false");
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 56);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(4);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "false");
    i0.ɵɵpropertyInterpolate("mask", elem_r1.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template, 1, 9, "input", 55);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", elem_r1.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template, 4, 3, "span", 32)(5, PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template, 1, 8, "input", 53)(6, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const maskTmpl_r16 = i0.ɵɵreference(7);
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !elem_r1.maskSettings)("ngIfElse", maskTmpl_r16);
} }
function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 25);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 7, 7, "ng-container", 26)(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 4, 3, "ng-container", 26)(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 9, 7, "ng-container", 26)(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 7, 10, "ng-container", 26)(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 9, 11, "ng-container", 26)(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 7, 9, "ng-container", 26)(8, PromptFormComponent_div_1_ng_container_1_ng_container_8_Template, 8, 6, "ng-container", 27);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", elem_r1.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "password");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "html");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate8_r17 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate8_r17)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵelement(2, "input", 29);
    i0.ɵɵelementStart(3, "label", 30);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_5_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_Template, 4, 3, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 39);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate9_r18 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate9_r18)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "input", 41);
    i0.ɵɵelementStart(2, "label", 30);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("value", o_r19.value);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId + i_r20);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId + i_r20);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r19.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template, 3, 2, "label", 37)(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template, 4, 3, "span", 32)(3, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template, 4, 6, "div", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", elem_r1.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate10_r21 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate10_r21)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r22 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r22.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r22.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "select", 43)(6, "option", 44);
    i0.ɵɵtext(7, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_template_2_ng_container_3_option_8_Template, 2, 2, "option", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r1.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate11_r23 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate11_r23)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "textarea", 47);
    i0.ɵɵtext(6, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "true");
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate12_r25 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate12_r25)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "div", 48);
    i0.ɵɵelement(6, "input", 49);
    i0.ɵɵelementStart(7, "button", 50);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r24); const elem_r1 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r1.visible = !elem_r1.visible); });
    i0.ɵɵelement(8, "fa-icon", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.visible ? "text" : "password");
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "new-password");
    i0.ɵɵproperty("autofocus", isFirst_r11);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r1.visible ? ctx_r2.faEyeSlash : ctx_r2.faEye);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate13_r26 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate13_r26)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_Template, 4, 3, "span", 32);
    i0.ɵɵelementStart(5, "div", 48);
    i0.ɵɵelement(6, "editor", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵproperty("init", ctx_r2.editorOptions)("plugins", ctx_r2.editorPlugins)("toolbar", ctx_r2.editorToolbar);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 36);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 35);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate14_r27 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate14_r27)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 58);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "false");
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 59);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r9.$implicit;
    const isFirst_r11 = ctx_r9.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r1.name);
    i0.ɵɵpropertyInterpolate("id", elem_r1.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r1.name);
    i0.ɵɵpropertyInterpolate("type", elem_r1.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r1.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r1.spellcheck || "false");
    i0.ɵɵpropertyInterpolate("mask", elem_r1.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r11);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 42);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template, 4, 3, "span", 32)(5, PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template, 1, 7, "input", 57)(6, PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template, 1, 8, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const anotherMaskTmpl_r28 = i0.ɵɵreference(7);
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", elem_r1.fieldId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.hasReqInd);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", elem_r1.helpInfo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !elem_r1.maskSettings)("ngIfElse", anotherMaskTmpl_r28);
} }
function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 25);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 7, 7, "ng-container", 26)(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 4, 3, "ng-container", 26)(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 9, 7, "ng-container", 26)(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 7, 10, "ng-container", 26)(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 9, 11, "ng-container", 26)(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 7, 9, "ng-container", 26)(7, PromptFormComponent_div_1_ng_template_2_ng_container_7_Template, 8, 6, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngSwitch", elem_r1.category);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "password");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "html");
} }
function PromptFormComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.required.message, " ");
} }
function PromptFormComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.min.message, " ");
} }
function PromptFormComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.max.message, " ");
} }
function PromptFormComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.url.message, " ");
} }
function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_Template, 9, 7, "ng-container", 23)(2, PromptFormComponent_div_1_ng_template_2_Template, 8, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, PromptFormComponent_div_1_div_4_Template, 2, 1, "div", 24)(5, PromptFormComponent_div_1_div_5_Template, 2, 1, "div", 24)(6, PromptFormComponent_div_1_div_6_Template, 2, 1, "div", 24)(7, PromptFormComponent_div_1_div_7_Template, 2, 1, "div", 24)(8, PromptFormComponent_div_1_div_8_Template, 2, 1, "div", 24)(9, PromptFormComponent_div_1_div_9_Template, 2, 1, "div", 24)(10, PromptFormComponent_div_1_div_10_Template, 2, 1, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = ctx.$implicit;
    const disableTmpl_r29 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.autocomplete)("ngIfElse", disableTmpl_r29);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.required) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.min) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.max) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.pattern) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.minlength) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.maxlength) && (ctx_r2.form.touched || ctx_r2.form.dirty));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.url) && (ctx_r2.form.touched || ctx_r2.form.dirty));
} }
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.cancelBtnClasses);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.submitBtnTxt, " ");
} }
export const tinymceDefaultInitOptions = {
    htmlAllowedTags: ['.*'],
    htmlAllowedAttrs: ['.*'],
    extended_valid_elements: '*[.*]',
    draggable_modal: true,
    browser_spellcheck: true,
    menubar: 'edit view insert format tools table help',
    contextmenu: "link useBrowserSpellcheck image table",
    setup: function (editor) {
        editor.ui.registry.addMenuItem("useBrowserSpellcheck", {
            text: "Use `Ctrl+Right click` to access spellchecker",
            onAction: function () {
                editor.notificationManager.open({
                    text: "To access the spellchecker, hold the Control (Ctrl) key and right-click on the misspelt word.",
                    type: "info",
                    timeout: 5000,
                    closeButton: true,
                });
            },
        });
        editor.ui.registry.addContextMenu("useBrowserSpellcheck", {
            update: function (node) {
                return editor.selection.isCollapsed() ? ["useBrowserSpellcheck"] : [];
            },
        });
    }
};
export const tinymceDefaultPlugins = 'advlist autolink lists link image media table code fullscreen help nonbreaking  pagebreak  preview  searchreplace visualblocks visualchars anchor  autoresize charmap emoticons wordcount insertdatetime tiny_mce_wiris';
export const tinymceDefaultToolbar = 'preview | undo redo | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | outdent indent | strikethrough forecolor backcolor removeformat | charmap emoticons | code fullscreen | pagebreak anchor';
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
        // Whether or not emit the init value after the form is built.
        this.emitInitValue = false;
        this.faEyeSlash = faEyeSlash;
        this.faEye = faEye;
        this.faQuestionCircle = faQuestionCircle;
        // Tinymce settings 
        this.editorOptions = tinymceDefaultInitOptions;
        this.editorToolbar = tinymceDefaultToolbar;
        this.editorPlugins = tinymceDefaultPlugins;
        this.name = `promptName${formId++}`;
    }
    ngOnInit() {
        this.submitBtnTxt = this.submitBtnTxt || 'Confirm';
        this.cancelBtnTxt = this.cancelBtnTxt || 'Cancel';
        this.submitBtnClasses = this.submitBtnClasses || 'btn-primary';
        this.cancelBtnClasses = this.cancelBtnClasses || 'btn-secondary';
        this.buildForm(this.fields);
    }
    ngOnDestroy() {
        this._subr && this._subr.unsubscribe();
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes['fields']) {
            const thisChanges = changes['fields'];
            if (!thisChanges.isFirstChange()) {
                // Redo the forms
                this.buildForm(thisChanges.currentValue);
            }
        }
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
    buildForm(inputFields) {
        this._subr && this._subr.unsubscribe();
        this._subr = null;
        if (this.autocomplete) {
            this.extFields = inputFields.map(a => {
                const k = `section-polp-bs-prompt-form-${this.autocomplete} ${a.name}`;
                return { ...a, fieldId: uuidv4(), autocompleteKey: k, visible: false };
            });
        }
        else {
            this.extFields = inputFields.map(a => {
                return { ...a, fieldId: uuidv4(), visible: false };
            });
        }
        const a = {};
        this.extFields.forEach(x => {
            a[x.name] = new UntypedFormControl(x.value, makeValidations(x.validators));
        });
        this.form = this._builder.group(a);
        this._subr = this.form.valueChanges.subscribe(a => {
            this.notifyValidation();
            this.notifyValueChanges(a);
        });
        if (this.emitInitValue) {
            setTimeout(() => {
                const v = this.form.value;
                this.notifyValidation();
                this.notifyValueChanges(v);
            });
        }
    }
    static { this.ɵfac = function PromptFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt", autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [["disableTmpl", ""], ["popTemplate1", ""], ["popTemplate2", ""], ["popTemplate3", ""], ["popTemplate4", ""], ["popTemplate5", ""], ["popTemplate6", ""], ["maskTmpl", ""], ["popTemplate7", ""], ["popTemplate8", ""], ["popTemplate9", ""], ["popTemplate10", ""], ["popTemplate11", ""], ["popTemplate12", ""], ["popTemplate13", ""], ["anotherMaskTmpl", ""], ["popTemplate14", ""], ["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], ["class", "form-text text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "text-danger", 4, "ngIf"], ["class", "ms-1", 4, "ngIf"], [1, "text-danger"], [1, "ms-1"], ["container", "body", 3, "icon", "popover", "popoverTitle"], [3, "innerHtml"], ["class", "form-label", 4, "ngIf"], ["class", "form-check mb-2", 4, "ngFor", "ngForOf"], [1, "form-label"], [1, "form-check", "mb-2"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [1, "form-label", 3, "for"], [1, "form-control", 3, "autocomplete", "id"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["cdkTextareaAutosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autocomplete", "spellcheck", "autofocus"], [1, "input-group"], ["spellcheck", "false", 1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "autocomplete"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], [1, "form-control", "p-0", "border-0", 3, "formControlName", "id", "init", "plugins", "toolbar"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask"], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", "mask"], [1, "form-text", "text-danger"], ["type", "button", 1, "btn", "me-2", 3, "click", "ngClass"], ["type", "button", 1, "btn", 3, "click", "ngClass", "disabled"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 17);
            i0.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 18);
            i0.ɵɵelementStart(2, "div", 19);
            i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 20)(4, PromptFormComponent_button_4_Template, 2, 3, "button", 21);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("name", ctx.name);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.extFields);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i3.PopoverDirective, i4.FaIconComponent, i5.AutofocusDirective, i6.EditorComponent, i7.CdkTextareaAutosize, i8.NgxMaskDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-form', inputs: [
                    'hideCancelBtn',
                    'hideSubmitBtn',
                    'submitBtnTxt',
                    'cancelBtnTxt'
                ], template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"mb-3\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate1\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate1><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                        </span>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate2\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate2><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>\n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate3\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate3><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate4\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate4><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate5\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate5><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"\n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"                               \n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate6\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate6><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate7\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate7><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                        \n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate8\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate8>\n                                <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                            </ng-template>                            \n                        </span>                                                    \n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate9\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate9>\n                            <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                        </ng-template>\n                    </span>                        \n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate10\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate10><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate11\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate11><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize\n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate12\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate12><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"                               \n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"\n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate13\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate13><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate14\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate14><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </div>\n    </div>\n    \n    <div class=\"d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn me-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n" }]
    }], () => [{ type: i1.UntypedFormBuilder }], { autocomplete: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], cancelBtnClasses: [{
            type: Input
        }], submitBtnClasses: [{
            type: Input
        }], fields: [{
            type: Input
        }], emitInitValue: [{
            type: Input
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PromptFormComponent, { className: "PromptFormComponent", filePath: "lib\\components\\prompt-form\\prompt-form.component.ts", lineNumber: 68 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFzQixrQkFBa0IsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNPL0MsZ0NBQWlEO0lBQzdDLG1CQUNKO0lBQUEsaUJBQU87OztJQU1vQiwwQkFBK0M7OztJQUExQyx1RUFBbUM7OztJQUp2RSxnQ0FBeUM7SUFDckMsOEJBRVU7SUFDVixnS0FBMkI7SUFDL0IsaUJBQU87Ozs7O0lBSk0sY0FBeUI7SUFDekIsQUFEMEIsQUFBMUIsOENBQXlCLDRCQUF5Qix3Q0FDZDs7O0lBZnpELDZCQUF5QztJQUNyQywrQkFBd0I7SUFDcEIsNEJBSTZCO0lBQzdCLGlDQUF1RDtJQUNuRCxZ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WUFLekYsQUFGSSxpQkFBTSxFQUVIOztZQXBha0IsMENBQWU7WUFBbEMsb0NBQWtCO1lBQ2UsY0FBYztZQUFkLHVDQUFjO1lBdVpwQyxlQUFvQjtZQUFwQix5Q0FBb0I7WUFLcEIsY0FBb0I7WUFBcEIseUNBQW9COzs7aUZEMVZ4QixtQkFBbUI7Y0FYL0IsU0FBUzsyQkFDSSxxQkFBcUIsVUFHdkI7b0JBQ0osZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsY0FBYztpQkFDakI7bURBS1EsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUs7WUFHRyxhQUFhO2tCQUFyQixLQUFLO1lBOEROLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQXpFL0IsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgbWFrZVZhbGlkYXRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgdGlueW1jZURlZmF1bHRJbml0T3B0aW9ucyA9IHtcbiAgICBodG1sQWxsb3dlZFRhZ3M6IFsnLionXSxcbiAgICBodG1sQWxsb3dlZEF0dHJzOiBbJy4qJ10sXG4gICAgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICcqWy4qXScsXG4gICAgZHJhZ2dhYmxlX21vZGFsOiB0cnVlLFxuICAgIGJyb3dzZXJfc3BlbGxjaGVjazogdHJ1ZSxcbiAgICBtZW51YmFyOiAnZWRpdCB2aWV3IGluc2VydCBmb3JtYXQgdG9vbHMgdGFibGUgaGVscCcsXG4gICAgY29udGV4dG1lbnU6IFwibGluayB1c2VCcm93c2VyU3BlbGxjaGVjayBpbWFnZSB0YWJsZVwiLFxuICAgIHNldHVwOiBmdW5jdGlvbihlZGl0b3IpIHtcbiAgICAgICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKFwidXNlQnJvd3NlclNwZWxsY2hlY2tcIiwge1xuICAgICAgICAgICAgdGV4dDogXCJVc2UgYEN0cmwrUmlnaHQgY2xpY2tgIHRvIGFjY2VzcyBzcGVsbGNoZWNrZXJcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3Iubm90aWZpY2F0aW9uTWFuYWdlci5vcGVuKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUbyBhY2Nlc3MgdGhlIHNwZWxsY2hlY2tlciwgaG9sZCB0aGUgQ29udHJvbCAoQ3RybCkga2V5IGFuZCByaWdodC1jbGljayBvbiB0aGUgbWlzc3BlbHQgd29yZC5cIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRvci51aS5yZWdpc3RyeS5hZGRDb250ZXh0TWVudShcInVzZUJyb3dzZXJTcGVsbGNoZWNrXCIsIHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3Iuc2VsZWN0aW9uLmlzQ29sbGFwc2VkKCkgPyBbXCJ1c2VCcm93c2VyU3BlbGxjaGVja1wiXSA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRpbnltY2VEZWZhdWx0UGx1Z2lucyA9ICdhZHZsaXN0IGF1dG9saW5rIGxpc3RzIGxpbmsgaW1hZ2UgbWVkaWEgdGFibGUgY29kZSBmdWxsc2NyZWVuIGhlbHAgbm9uYnJlYWtpbmcgIHBhZ2VicmVhayAgcHJldmlldyAgc2VhcmNocmVwbGFjZSB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgYW5jaG9yICBhdXRvcmVzaXplIGNoYXJtYXAgZW1vdGljb25zIHdvcmRjb3VudCBpbnNlcnRkYXRldGltZSB0aW55X21jZV93aXJpcyc7XG5cbmV4cG9ydCBjb25zdCB0aW55bWNlRGVmYXVsdFRvb2xiYXIgPSAncHJldmlldyB8IHVuZG8gcmVkbyB8IGJsb2NrcyBmb250c2l6ZWlucHV0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbiBudW1saXN0IGJ1bGxpc3QgfCBsaW5rIGltYWdlIHwgdGFibGUgbWVkaWEgfCB0aW55X21jZV93aXJpc19mb3JtdWxhRWRpdG9yIHRpbnlfbWNlX3dpcmlzX2Zvcm11bGFFZGl0b3JDaGVtaXN0cnkgfCBvdXRkZW50IGluZGVudCB8IHN0cmlrZXRocm91Z2ggZm9yZWNvbG9yIGJhY2tjb2xvciByZW1vdmVmb3JtYXQgfCBjaGFybWFwIGVtb3RpY29ucyB8IGNvZGUgZnVsbHNjcmVlbiB8IHBhZ2VicmVhayBhbmNob3InO1xuXG5lbnVtIEtFWV9DT0RFIHtcbiAgICBFTlRFUiA9IDEzXG59XG5cbmludGVyZmFjZSBJSW5wdXRGaWVsZFNwZWNFeHQgZXh0ZW5kcyBJSW5wdXRGaWVsZFNwZWMge1xuICAgIGZpZWxkSWQ6IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgcmV0dXJuICdhbHBoYS0nICsgdjQoKTtcbn1cblxubGV0IGZvcm1JZCA9IDE7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1wcm9tcHQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuY3NzJ10sXG4gICAgaW5wdXRzOiBbXG4gICAgICAgICdoaWRlQ2FuY2VsQnRuJyxcbiAgICAgICAgJ2hpZGVTdWJtaXRCdG4nLFxuICAgICAgICAnc3VibWl0QnRuVHh0JyxcbiAgICAgICAgJ2NhbmNlbEJ0blR4dCdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdEZvcm1Db21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdWJtaXRCdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG5cbiAgICAvLyBXaGV0aGVyIG9yIG5vdCBlbWl0IHRoZSBpbml0IHZhbHVlIGFmdGVyIHRoZSBmb3JtIGlzIGJ1aWx0LlxuICAgIEBJbnB1dCgpIGVtaXRJbml0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGV4dEZpZWxkczogSUlucHV0RmllbGRTcGVjRXh0W107XG5cbiAgICBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwO1xuXG4gICAgZmFFeWVTbGFzaCA9IGZhRXllU2xhc2g7XG4gICAgZmFFeWUgPSBmYUV5ZTtcbiAgICBmYVF1ZXN0aW9uQ2lyY2xlID0gZmFRdWVzdGlvbkNpcmNsZTtcblxuICAgIC8vIFRpbnltY2Ugc2V0dGluZ3MgXG4gICAgZWRpdG9yT3B0aW9ucyA9IHRpbnltY2VEZWZhdWx0SW5pdE9wdGlvbnM7XG4gICAgZWRpdG9yVG9vbGJhciA9IHRpbnltY2VEZWZhdWx0VG9vbGJhcjtcbiAgICBlZGl0b3JQbHVnaW5zID0gdGlueW1jZURlZmF1bHRQbHVnaW5zO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnVpbGRlcjogVW50eXBlZEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gYHByb21wdE5hbWUke2Zvcm1JZCsrfWA7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdG5UeHQgPSB0aGlzLnN1Ym1pdEJ0blR4dCB8fCAnQ29uZmlybSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuVHh0ID0gdGhpcy5jYW5jZWxCdG5UeHQgfHwgJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdG5DbGFzc2VzID0gdGhpcy5zdWJtaXRCdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyA9IHRoaXMuY2FuY2VsQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG5cbiAgICAgICAgdGhpcy5idWlsZEZvcm0odGhpcy5maWVsZHMpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyICYmIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snZmllbGRzJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNDaGFuZ2VzID0gY2hhbmdlc1snZmllbGRzJ107XG4gICAgICAgICAgICBpZiAoIXRoaXNDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIFJlZG8gdGhlIGZvcm1zXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm0odGhpc0NoYW5nZXMuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5vblNhdmUuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZEZvcm0oaW5wdXRGaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz4pIHtcblxuICAgICAgICB0aGlzLl9zdWJyICYmIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5fc3ViciA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IGlucHV0RmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gYHNlY3Rpb24tcG9scC1icy1wcm9tcHQtZm9ybS0ke3RoaXMuYXV0b2NvbXBsZXRlfSAke2EubmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCBhdXRvY29tcGxldGVLZXk6IGssIHZpc2libGU6IGZhbHNlIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXh0RmllbGRzID0gaW5wdXRGaWVsZHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmEsIGZpZWxkSWQ6IHV1aWR2NCgpLCB2aXNpYmxlOiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0ge307XG4gICAgICAgIHRoaXMuZXh0RmllbGRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBhW3gubmFtZV0gPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKHgudmFsdWUsIG1ha2VWYWxpZGF0aW9ucyh4LnZhbGlkYXRvcnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChhKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbWl0SW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKHYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIG5hbWU9XCJ7e25hbWV9fVwiIGF1dG9jb21wbGV0ZT1cImF1dG9jb21wbGV0ZSA/ICdvbicgOiAnb2ZmJ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi0zXCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXV0b2NvbXBsZXRlO2Vsc2UgZGlzYWJsZVRtcGxcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImVsZW0uY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENoZWNrYm94IC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMT48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gUmFkaW8gLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgKm5nSWY9XCJlbGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMj48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIG1iLTJcIiAqbmdGb3I9XCJsZXQgbyBvZiBlbGVtLm9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e28udmFsdWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWQgKyBpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJ7e2VsZW0uZmllbGRJZCArIGl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7by5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gU2VsZWN0IC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMz48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlIHx8ICdvZmYnfX1cIiBpZD1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q2hvb3NlIC4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbyBvZiBlbGVtLm9wdGlvbnNcIiB2YWx1ZT1cInt7by52YWx1ZX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gdGV4dGFyZWEgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTQ+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ3RydWUnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2RrVGV4dGFyZWFBdXRvc2l6ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gcGFzc3dvcmQgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3Bhc3N3b3JkJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTU+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLnZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlIHx8ICduZXctcGFzc3dvcmQnfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW0udmlzaWJsZSA9ICFlbGVtLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJlbGVtLnZpc2libGUgPyBmYUV5ZVNsYXNoIDogZmFFeWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBIVE1MIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTY+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxlZGl0b3IgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHAtMCBib3JkZXItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbml0XT1cImVkaXRvck9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGx1Z2luc109XCJlZGl0b3JQbHVnaW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Rvb2xiYXJdPVwiZWRpdG9yVG9vbGJhclwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZWRpdG9yPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIE90aGVyd2lzZSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlNz48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWVsZW0ubWFza1NldHRpbmdzOyBlbHNlIG1hc2tUbXBsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGVLZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ2ZhbHNlJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbWFza1RtcGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJlbGVtLm1hc2tTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZUtleX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz1cInt7ZWxlbS5zcGVsbGNoZWNrIHx8ICdmYWxzZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwie3tlbGVtLm1hc2tTZXR0aW5ncy5tYXNrfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNhYmxlVG1wbD5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImVsZW0uY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENoZWNrYm94IC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlOD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIFJhZGlvIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwiZWxlbS5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBtYi0yXCIgKm5nRm9yPVwibGV0IG8gb2YgZWxlbS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tvLnZhbHVlfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tlbGVtLmZpZWxkSWQgKyBpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e28ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIFNlbGVjdCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUxMD48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvIG9mIGVsZW0ub3B0aW9uc1wiIHZhbHVlPVwie3tvLnZhbHVlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e28ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSB0ZXh0YXJlYSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTExPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ3RydWUnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2RrVGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBwYXNzd29yZCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGFzc3dvcmQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTEyPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS52aXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ25ldy1wYXNzd29yZCd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgaWNvbi1vbmx5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJlbGVtLnZpc2libGUgPSAhZWxlbS52aXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZWxlbS52aXNpYmxlID8gZmFFeWVTbGFzaCA6IGZhRXllXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gSFRNTCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaHRtbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMTM+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVkaXRvciBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcC0wIGJvcmRlci0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luaXRdPVwiZWRpdG9yT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbHVnaW5zXT1cImVkaXRvclBsdWdpbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdG9vbGJhcl09XCJlZGl0b3JUb29sYmFyXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9lZGl0b3I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gT3RoZXJzIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMTQ+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIiFlbGVtLm1hc2tTZXR0aW5nczsgZWxzZSBhbm90aGVyTWFza1RtcGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ2ZhbHNlJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYW5vdGhlck1hc2tUbXBsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ2ZhbHNlJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWluICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW5sZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4bGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnVybCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy51cmwubWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWhpZGVDYW5jZWxCdG5cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBtZS0yXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjYW5jZWxCdG5DbGFzc2VzXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgPlxuICAgICAgICAgICAge3tjYW5jZWxCdG5UeHR9fVxuICAgICAgICA8L2J1dHRvbj4gICAgXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGlkZVN1Ym1pdEJ0blwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJzdWJtaXRCdG5DbGFzc2VzXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgKGNsaWNrKT1cInN1Ym1pdCgpXCI+XG4gICAgICAgICAgICB7e3N1Ym1pdEJ0blR4dH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuPC9mb3JtPlxuXG5cbiJdfQ==