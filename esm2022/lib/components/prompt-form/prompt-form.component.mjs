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
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r24 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r23.faQuestionCircle)("popover", _r24)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵelementStart(3, "label", 14);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_5_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_Template, 4, 3, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 24);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r34 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r30.faQuestionCircle)("popover", _r34)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "input", 27);
    i0.ɵɵelementStart(2, "label", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("value", o_r38.value);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r39);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r39);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r38.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template, 3, 2, "label", 22);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template, 4, 3, "span", 16);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template, 4, 6, "div", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r45 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r43 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r43.faQuestionCircle)("popover", _r45)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r49 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r49.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r49.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "select", 29)(6, "option", 30);
    i0.ɵɵtext(7, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_container_1_ng_container_4_option_8_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r53 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r52 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r52.faQuestionCircle)("popover", _r53)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "textarea", 34);
    i0.ɵɵtext(6, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r57.$implicit;
    const isFirst_r4 = ctx_r57.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "true");
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r60 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r59 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r59.faQuestionCircle)("popover", _r60)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "div", 36);
    i0.ɵɵelement(6, "input", 37);
    i0.ɵɵelementStart(7, "button", 38);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r66); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r3.visible = !elem_r3.visible); });
    i0.ɵɵelement(8, "fa-icon", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r67.$implicit;
    const isFirst_r4 = ctx_r67.first;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "new-password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r19.faEyeSlash : ctx_r19.faEye);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 42, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r70 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r69 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r69.faQuestionCircle)("popover", _r70)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "div", 36);
    i0.ɵɵelement(6, "editor", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵproperty("init", ctx_r20.editorOptions)("plugins", ctx_r20.editorPlugins)("toolbar", ctx_r20.editorToolbar);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r80 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r76 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r76.faQuestionCircle)("popover", _r80)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 46);
} if (rf & 2) {
    const ctx_r84 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r84.$implicit;
    const isFirst_r4 = ctx_r84.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "false");
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 48);
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(4);
    const elem_r3 = ctx_r86.$implicit;
    const isFirst_r4 = ctx_r86.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "false");
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template, 1, 9, "input", 47);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", elem_r3.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template, 1, 8, "input", 43);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template, 1, 1, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r78 = i0.ɵɵreference(7);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r78);
} }
function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 9);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 7, 7, "ng-container", 10);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 4, 3, "ng-container", 10);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 9, 7, "ng-container", 10);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 7, 10, "ng-container", 10);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 9, 11, "ng-container", 10);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 7, 9, "ng-container", 10);
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_container_1_ng_container_8_Template, 8, 6, "ng-container", 11);
    i0.ɵɵelementContainerEnd()();
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "html");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 49, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r99 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r98 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r98.faQuestionCircle)("popover", _r99)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵelementStart(3, "label", 14);
    i0.ɵɵtext(4);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_5_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_Template, 4, 3, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 24);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 50, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r109 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r105 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r105.faQuestionCircle)("popover", _r109)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelement(1, "input", 27);
    i0.ɵɵelementStart(2, "label", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r113 = ctx.$implicit;
    const i_r114 = ctx.index;
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("value", o_r113.value);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r114);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r114);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r113.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template, 3, 2, "label", 22);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template, 4, 3, "span", 16);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template, 4, 6, "div", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 51, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r120 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r118 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r118.faQuestionCircle)("popover", _r120)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r124 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", o_r124.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r124.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "select", 29)(6, "option", 30);
    i0.ɵɵtext(7, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_template_2_ng_container_3_option_8_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 52, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r128 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r127 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r127.faQuestionCircle)("popover", _r128)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "textarea", 34);
    i0.ɵɵtext(6, "                    ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r132 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r132.$implicit;
    const isFirst_r4 = ctx_r132.first;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "true");
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r135 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r134 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r134.faQuestionCircle)("popover", _r135)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r141 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "div", 36);
    i0.ɵɵelement(6, "input", 37);
    i0.ɵɵelementStart(7, "button", 38);
    i0.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r141); const elem_r3 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r3.visible = !elem_r3.visible); });
    i0.ɵɵelement(8, "fa-icon", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r142 = i0.ɵɵnextContext(2);
    const elem_r3 = ctx_r142.$implicit;
    const isFirst_r4 = ctx_r142.first;
    const ctx_r94 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "new-password");
    i0.ɵɵproperty("autofocus", isFirst_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r3.visible ? ctx_r94.faEyeSlash : ctx_r94.faEye);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 54, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r145 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r144 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r144.faQuestionCircle)("popover", _r145)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵelementStart(5, "div", 36);
    i0.ɵɵelement(6, "editor", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r95 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵproperty("init", ctx_r95.editorOptions)("plugins", ctx_r95.editorPlugins)("toolbar", ctx_r95.editorToolbar);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "fa-icon", 19);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 57, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r155 = i0.ɵɵreference(3);
    const elem_r3 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r151 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r151.faQuestionCircle)("popover", _r155)("popoverTitle", elem_r3.helpInfo.title);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 58);
} if (rf & 2) {
    const ctx_r159 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r159.$implicit;
    const isFirst_r4 = ctx_r159.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "false");
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 59);
} if (rf & 2) {
    const ctx_r160 = i0.ɵɵnextContext(3);
    const elem_r3 = ctx_r160.$implicit;
    const isFirst_r4 = ctx_r160.first;
    i0.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    i0.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    i0.ɵɵpropertyInterpolate("name", elem_r3.name);
    i0.ɵɵpropertyInterpolate("type", elem_r3.category);
    i0.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocomplete || "off");
    i0.ɵɵpropertyInterpolate("spellcheck", elem_r3.spellcheck || "false");
    i0.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    i0.ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template, 2, 0, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template, 4, 3, "span", 16);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template, 1, 7, "input", 55);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template, 1, 8, "ng-template", null, 56, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r153 = i0.ɵɵreference(7);
    const elem_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r153);
} }
function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 7, 7, "ng-container", 10);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 4, 3, "ng-container", 10);
    i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 9, 7, "ng-container", 10);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 7, 10, "ng-container", 10);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 9, 11, "ng-container", 10);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 7, 9, "ng-container", 10);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_ng_template_2_ng_container_7_Template, 8, 6, "ng-container", 11);
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "html");
} }
function PromptFormComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
} }
function PromptFormComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
} }
function PromptFormComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
} }
function PromptFormComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
} }
function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_Template, 9, 7, "ng-container", 6);
    i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_Template, 8, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PromptFormComponent_div_1_div_4_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(5, PromptFormComponent_div_1_div_5_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(6, PromptFormComponent_div_1_div_6_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(7, PromptFormComponent_div_1_div_7_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(8, PromptFormComponent_div_1_div_8_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(9, PromptFormComponent_div_1_div_9_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(10, PromptFormComponent_div_1_div_10_Template, 2, 1, "div", 8);
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
    const _r171 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r171); const ctx_r170 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r170.cancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r173 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r173); const ctx_r172 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r172.submit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
    i0.ɵɵadvance(1);
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
    static { this.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt", autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "form-text text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "text-danger", 4, "ngIf"], ["class", "ms-1", 4, "ngIf"], [1, "text-danger"], [1, "ms-1"], ["container", "body", 3, "icon", "popover", "popoverTitle"], ["popTemplate1", ""], [3, "innerHtml"], ["class", "form-label", 4, "ngIf"], ["class", "form-check mb-2", 4, "ngFor", "ngForOf"], [1, "form-label"], ["popTemplate2", ""], [1, "form-check", "mb-2"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [1, "form-label", 3, "for"], [1, "form-control", 3, "autocomplete", "id"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["popTemplate3", ""], [3, "value"], ["cdkTextareaAutosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autocomplete", "spellcheck", "autofocus"], ["popTemplate4", ""], [1, "input-group"], ["spellcheck", "false", 1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "autocomplete"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["popTemplate5", ""], [1, "form-control", "p-0", "border-0", 3, "formControlName", "id", "init", "plugins", "toolbar"], ["popTemplate6", ""], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], ["popTemplate7", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask"], ["popTemplate8", ""], ["popTemplate9", ""], ["popTemplate10", ""], ["popTemplate11", ""], ["popTemplate12", ""], ["popTemplate13", ""], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], ["popTemplate14", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", "mask"], [1, "form-text", "text-danger"], ["type", "button", 1, "btn", "me-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
            i0.ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("name", ctx.name);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.extFields);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i3.PopoverDirective, i4.FaIconComponent, i5.AutofocusDirective, i6.EditorComponent, i7.CdkTextareaAutosize, i8.NgxMaskDirective] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-form', inputs: [
                    'hideCancelBtn',
                    'hideSubmitBtn',
                    'submitBtnTxt',
                    'cancelBtnTxt'
                ], template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"mb-3\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate1\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate1><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                        </span>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate2\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate2><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>\n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate3\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate3><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate4\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate4><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate5\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate5><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"\n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"                               \n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate6\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate6><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate7\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate7><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                        \n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate8\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate8>\n                                <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                            </ng-template>                            \n                        </span>                                                    \n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate9\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate9>\n                            <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                        </ng-template>\n                    </span>                        \n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate10\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate10><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate11\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate11><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize\n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate12\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate12><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"                               \n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"\n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate13\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate13><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate14\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate14><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </div>\n    </div>\n    \n    <div class=\"d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn me-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n" }]
    }], function () { return [{ type: i1.UntypedFormBuilder }]; }, { autocomplete: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFzQixrQkFBa0IsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNPL0MsZ0NBQWlEO0lBQzdDLG1CQUNKO0lBQUEsaUJBQU87OztJQU1vQiwwQkFBK0M7OztJQUExQyx1RUFBbUM7OztJQUp2RSxnQ0FBeUM7SUFDckMsOEJBRVU7SUFDVixpS0FBd0Y7SUFDNUYsaUJBQU87Ozs7O0lBSk0sZUFBeUI7SUFBekIsK0NBQXlCLGlCQUFBLHdDQUFBOzs7SUFkOUMsNkJBQXlDO0lBQ3JDLCtCQUF3QjtJQUNwQiw0QkFJNkI7SUFDN0IsaUNBQXVEO0lBQ25ELFlBQ0E7SUFBQSwyR0FF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S1EsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUs7WUFHRyxhQUFhO2tCQUFyQixLQUFLO1lBOEROLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Db250cm9sLCBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7IGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjLCBtYWtlVmFsaWRhdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmV4cG9ydCBjb25zdCB0aW55bWNlRGVmYXVsdEluaXRPcHRpb25zID0ge1xuICAgIGh0bWxBbGxvd2VkVGFnczogWycuKiddLFxuICAgIGh0bWxBbGxvd2VkQXR0cnM6IFsnLionXSxcbiAgICBleHRlbmRlZF92YWxpZF9lbGVtZW50czogJypbLipdJyxcbiAgICBkcmFnZ2FibGVfbW9kYWw6IHRydWUsXG4gICAgYnJvd3Nlcl9zcGVsbGNoZWNrOiB0cnVlLFxuICAgIG1lbnViYXI6ICdlZGl0IHZpZXcgaW5zZXJ0IGZvcm1hdCB0b29scyB0YWJsZSBoZWxwJyxcbiAgICBjb250ZXh0bWVudTogXCJsaW5rIHVzZUJyb3dzZXJTcGVsbGNoZWNrIGltYWdlIHRhYmxlXCIsXG4gICAgc2V0dXA6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgICAgICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0oXCJ1c2VCcm93c2VyU3BlbGxjaGVja1wiLCB7XG4gICAgICAgICAgICB0ZXh0OiBcIlVzZSBgQ3RybCtSaWdodCBjbGlja2AgdG8gYWNjZXNzIHNwZWxsY2hlY2tlclwiLFxuICAgICAgICAgICAgb25BY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVkaXRvci5ub3RpZmljYXRpb25NYW5hZ2VyLm9wZW4oe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlRvIGFjY2VzcyB0aGUgc3BlbGxjaGVja2VyLCBob2xkIHRoZSBDb250cm9sIChDdHJsKSBrZXkgYW5kIHJpZ2h0LWNsaWNrIG9uIHRoZSBtaXNzcGVsdCB3b3JkLlwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZENvbnRleHRNZW51KFwidXNlQnJvd3NlclNwZWxsY2hlY2tcIiwge1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvci5zZWxlY3Rpb24uaXNDb2xsYXBzZWQoKSA/IFtcInVzZUJyb3dzZXJTcGVsbGNoZWNrXCJdIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGlueW1jZURlZmF1bHRQbHVnaW5zID0gJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBtZWRpYSB0YWJsZSBjb2RlIGZ1bGxzY3JlZW4gaGVscCBub25icmVha2luZyAgcGFnZWJyZWFrICBwcmV2aWV3ICBzZWFyY2hyZXBsYWNlIHZpc3VhbGJsb2NrcyB2aXN1YWxjaGFycyBhbmNob3IgIGF1dG9yZXNpemUgY2hhcm1hcCBlbW90aWNvbnMgd29yZGNvdW50IGluc2VydGRhdGV0aW1lIHRpbnlfbWNlX3dpcmlzJztcblxuZXhwb3J0IGNvbnN0IHRpbnltY2VEZWZhdWx0VG9vbGJhciA9ICdwcmV2aWV3IHwgdW5kbyByZWRvIHwgYmxvY2tzIGZvbnRzaXplaW5wdXQgfCBib2xkIGl0YWxpYyB8IGFsaWduIG51bWxpc3QgYnVsbGlzdCB8IGxpbmsgaW1hZ2UgfCB0YWJsZSBtZWRpYSB8IHRpbnlfbWNlX3dpcmlzX2Zvcm11bGFFZGl0b3IgdGlueV9tY2Vfd2lyaXNfZm9ybXVsYUVkaXRvckNoZW1pc3RyeSB8IG91dGRlbnQgaW5kZW50IHwgc3RyaWtldGhyb3VnaCBmb3JlY29sb3IgYmFja2NvbG9yIHJlbW92ZWZvcm1hdCB8IGNoYXJtYXAgZW1vdGljb25zIHwgY29kZSBmdWxsc2NyZWVuIHwgcGFnZWJyZWFrIGFuY2hvcic7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuaW50ZXJmYWNlIElJbnB1dEZpZWxkU3BlY0V4dCBleHRlbmRzIElJbnB1dEZpZWxkU3BlYyB7XG4gICAgZmllbGRJZDogc3RyaW5nO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICByZXR1cm4gJ2FscGhhLScgKyB2NCgpO1xufVxuXG5sZXQgZm9ybUlkID0gMTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb21wdC1mb3JtLmNvbXBvbmVudC5jc3MnXSxcbiAgICBpbnB1dHM6IFtcbiAgICAgICAgJ2hpZGVDYW5jZWxCdG4nLFxuICAgICAgICAnaGlkZVN1Ym1pdEJ0bicsXG4gICAgICAgICdzdWJtaXRCdG5UeHQnLFxuICAgICAgICAnY2FuY2VsQnRuVHh0J1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvbXB0Rm9ybUNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVFbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY2FuY2VsQnRuQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN1Ym1pdEJ0bkNsYXNzZXM6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcblxuICAgIC8vIFdoZXRoZXIgb3Igbm90IGVtaXQgdGhlIGluaXQgdmFsdWUgYWZ0ZXIgdGhlIGZvcm0gaXMgYnVpbHQuXG4gICAgQElucHV0KCkgZW1pdEluaXRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZXh0RmllbGRzOiBJSW5wdXRGaWVsZFNwZWNFeHRbXTtcblxuICAgIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG5cbiAgICBmYUV5ZVNsYXNoID0gZmFFeWVTbGFzaDtcbiAgICBmYUV5ZSA9IGZhRXllO1xuICAgIGZhUXVlc3Rpb25DaXJjbGUgPSBmYVF1ZXN0aW9uQ2lyY2xlO1xuXG4gICAgLy8gVGlueW1jZSBzZXR0aW5ncyBcbiAgICBlZGl0b3JPcHRpb25zID0gdGlueW1jZURlZmF1bHRJbml0T3B0aW9ucztcbiAgICBlZGl0b3JUb29sYmFyID0gdGlueW1jZURlZmF1bHRUb29sYmFyO1xuICAgIGVkaXRvclBsdWdpbnMgPSB0aW55bWNlRGVmYXVsdFBsdWdpbnM7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9idWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBgcHJvbXB0TmFtZSR7Zm9ybUlkKyt9YDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnN1Ym1pdEJ0blR4dCA9IHRoaXMuc3VibWl0QnRuVHh0IHx8ICdDb25maXJtJztcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5UeHQgPSB0aGlzLmNhbmNlbEJ0blR4dCB8fCAnQ2FuY2VsJztcblxuICAgICAgICB0aGlzLnN1Ym1pdEJ0bkNsYXNzZXMgPSB0aGlzLnN1Ym1pdEJ0bkNsYXNzZXMgfHwgJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzc2VzID0gdGhpcy5jYW5jZWxCdG5DbGFzc2VzIHx8ICdidG4tc2Vjb25kYXJ5JztcblxuICAgICAgICB0aGlzLmJ1aWxkRm9ybSh0aGlzLmZpZWxkcyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIgJiYgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydmaWVsZHMnXSkge1xuICAgICAgICAgICAgY29uc3QgdGhpc0NoYW5nZXMgPSBjaGFuZ2VzWydmaWVsZHMnXTtcbiAgICAgICAgICAgIGlmICghdGhpc0NoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVkbyB0aGUgZm9ybXNcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybSh0aGlzQ2hhbmdlcy5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVFbnRlciAmJiBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkRm9ybShpbnB1dEZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPikge1xuXG4gICAgICAgIHRoaXMuX3N1YnIgJiYgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl9zdWJyID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0RmllbGRzID0gaW5wdXRGaWVsZHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBgc2VjdGlvbi1wb2xwLWJzLXByb21wdC1mb3JtLSR7dGhpcy5hdXRvY29tcGxldGV9ICR7YS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCksIGF1dG9jb21wbGV0ZUtleTogaywgdmlzaWJsZTogZmFsc2UgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRGaWVsZHMgPSBpbnB1dEZpZWxkcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCksIHZpc2libGU6IGZhbHNlIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGEgPSB7fTtcbiAgICAgICAgdGhpcy5leHRGaWVsZHMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGFbeC5uYW1lXSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woeC52YWx1ZSwgbWFrZVZhbGlkYXRpb25zKHgudmFsaWRhdG9ycykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKGEpO1xuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXMoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVtaXRJbml0VmFsdWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgbmFtZT1cInt7bmFtZX19XCIgYXV0b2NvbXBsZXRlPVwiYXV0b2NvbXBsZXRlID8gJ29uJyA6ICdvZmYnXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTNcIiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBleHRGaWVsZHM7IGZpcnN0IGFzIGlzRmlyc3Q7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvY29tcGxldGU7ZWxzZSBkaXNhYmxlVG1wbFwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZWxlbS5jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ2hlY2tib3ggLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUxPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBSYWRpbyAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiAqbmdJZj1cImVsZW0ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUyPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgbWItMlwiICpuZ0Zvcj1cImxldCBvIG9mIGVsZW0ub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7by52YWx1ZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZCArIGl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInt7ZWxlbS5maWVsZElkICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBTZWxlY3QgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUzPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ29mZid9fVwiIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvIG9mIGVsZW0ub3B0aW9uc1wiIHZhbHVlPVwie3tvLnZhbHVlfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e28ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSB0ZXh0YXJlYSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlND48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJ7e2VsZW0uc3BlbGxjaGVjayB8fCAndHJ1ZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtUZXh0YXJlYUF1dG9zaXplIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBwYXNzd29yZCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGFzc3dvcmQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlNT48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0udmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInt7ZWxlbS5hdXRvY29tcGxldGUgfHwgJ25ldy1wYXNzd29yZCd9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGljb24tb25seVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZWxlbS52aXNpYmxlID0gIWVsZW0udmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImVsZW0udmlzaWJsZSA/IGZhRXllU2xhc2ggOiBmYUV5ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIEhUTUwgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2h0bWwnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlNj48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVkaXRvciBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcC0wIGJvcmRlci0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luaXRdPVwiZWRpdG9yT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbHVnaW5zXT1cImVkaXRvclBsdWdpbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdG9vbGJhcl09XCJlZGl0b3JUb29sYmFyXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9lZGl0b3I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gT3RoZXJ3aXNlIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGU3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGU3PjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhZWxlbS5tYXNrU2V0dGluZ3M7IGVsc2UgbWFza1RtcGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZUtleX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJ7e2VsZW0uc3BlbGxjaGVjayB8fCAnZmFsc2UnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNtYXNrVG1wbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImVsZW0ubWFza1NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlS2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrPVwie3tlbGVtLnNwZWxsY2hlY2sgfHwgJ2ZhbHNlJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9XCJ7e2VsZW0ubWFza1NldHRpbmdzLm1hc2t9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Rpc2FibGVUbXBsPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZWxlbS5jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ2hlY2tib3ggLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGU4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGU4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gUmFkaW8gLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgKm5nSWY9XCJlbGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlOT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIG1iLTJcIiAqbmdGb3I9XCJsZXQgbyBvZiBlbGVtLm9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e28udmFsdWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWQgKyBpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJ7e2VsZW0uZmllbGRJZCArIGl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7by5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwhLS0gU2VsZWN0IC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhhc1JlcUluZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oZWxwSW5mb1wiIGNsYXNzPVwibXMtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFRdWVzdGlvbkNpcmNsZVwiIFtwb3BvdmVyXT1cInBvcFRlbXBsYXRlMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJUaXRsZV09XCJlbGVtLmhlbHBJbmZvLnRpdGxlXCIgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZTEwPjxkaXYgW2lubmVySHRtbF09XCJlbGVtLmhlbHBJbmZvLmNvbnRlbnRcIj48L2Rpdj48L25nLXRlbXBsYXRlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCIgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkNob29zZSAuLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG8gb2YgZWxlbS5vcHRpb25zXCIgdmFsdWU9XCJ7e28udmFsdWV9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7by5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIHRleHRhcmVhIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUxMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMTE+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJ7e2VsZW0uc3BlbGxjaGVjayB8fCAndHJ1ZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZGtUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8IS0tIHBhc3N3b3JkIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwYXNzd29yZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGFzUmVxSW5kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJlbGVtLmhlbHBJbmZvXCIgY2xhc3M9XCJtcy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVF1ZXN0aW9uQ2lyY2xlXCIgW3BvcG92ZXJdPVwicG9wVGVtcGxhdGUxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3ZlclRpdGxlXT1cImVsZW0uaGVscEluZm8udGl0bGVcIiBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BvcFRlbXBsYXRlMTI+PGRpdiBbaW5uZXJIdG1sXT1cImVsZW0uaGVscEluZm8uY29udGVudFwiPjwvZGl2PjwvbmctdGVtcGxhdGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2VsZW0ubmFtZX19XCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLnZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnbmV3LXBhc3N3b3JkJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImVsZW0udmlzaWJsZSA9ICFlbGVtLnZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJlbGVtLnZpc2libGUgPyBmYUV5ZVNsYXNoIDogZmFFeWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBIVE1MIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTEzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUxMz48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZWRpdG9yIGZvcm1Db250cm9sTmFtZT1cInt7ZWxlbS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZWxlbS5maWVsZElkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBwLTAgYm9yZGVyLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5pdF09XCJlZGl0b3JPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsdWdpbnNdPVwiZWRpdG9yUGx1Z2luc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0b29sYmFyXT1cImVkaXRvclRvb2xiYXJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2VkaXRvcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPCEtLSBPdGhlcnMgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tlbGVtLmZpZWxkSWR9fVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZWxlbS5oYXNSZXFJbmRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImVsZW0uaGVscEluZm9cIiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUXVlc3Rpb25DaXJjbGVcIiBbcG9wb3Zlcl09XCJwb3BUZW1wbGF0ZTE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwiZWxlbS5oZWxwSW5mby50aXRsZVwiIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGUxND48ZGl2IFtpbm5lckh0bWxdPVwiZWxlbS5oZWxwSW5mby5jb250ZW50XCI+PC9kaXY+PC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiIWVsZW0ubWFza1NldHRpbmdzOyBlbHNlIGFub3RoZXJNYXNrVG1wbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tlbGVtLmNhdGVnb3J5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZSB8fCAnb2ZmJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJ7e2VsZW0uc3BlbGxjaGVjayB8fCAnZmFsc2UnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhbm90aGVyTWFza1RtcGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tlbGVtLm5hbWV9fVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJ7e2VsZW0uYXV0b2NvbXBsZXRlIHx8ICdvZmYnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9XCJ7e2VsZW0uc3BlbGxjaGVjayB8fCAnZmFsc2UnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz1cInt7ZWxlbS5tYXNrU2V0dGluZ3MubWFza319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucmVxdWlyZWQgJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucmVxdWlyZWQubWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluLm1lc3NhZ2V9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4ICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heC5tZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnBhdHRlcm4gJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucGF0dGVybi5tZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbmxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW5MZW5ndGgubWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXhsZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4TGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8udXJsICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnVybC5tZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG1lLTJcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNhbmNlbEJ0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2FuY2VsKClcIiA+XG4gICAgICAgICAgICB7e2NhbmNlbEJ0blR4dH19XG4gICAgICAgIDwvYnV0dG9uPiAgICBcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoaWRlU3VibWl0QnRuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInN1Ym1pdEJ0bkNsYXNzZXNcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiAoY2xpY2spPVwic3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7c3VibWl0QnRuVHh0fX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgXG48L2Zvcm0+XG5cblxuIl19