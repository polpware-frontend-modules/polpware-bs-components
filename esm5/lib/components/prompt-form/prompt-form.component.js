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
import * as i4 from "@40three/ngx-autofocus-directive";
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close(); });
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
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = i0.ɵɵnextContext().$implicit;
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
    var elem_r8 = ctx.$implicit;
    var isFirst_r9 = ctx.first;
    var ctx_r7 = i0.ɵɵnextContext(2);
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
    var ctx_r1 = i0.ɵɵnextContext();
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
    var elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r23.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var elem_r23 = i0.ɵɵnextContext().$implicit;
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
    var elem_r23 = ctx.$implicit;
    var isFirst_r24 = ctx.first;
    var ctx_r22 = i0.ɵɵnextContext(2);
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
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.extFields);
} }
function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.close(); });
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
        } }, directives: [i3.NgIf, i3.NgClass, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgForOf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i4.AutofocusDirective], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUNKdkUsa0NBQ0k7SUFEOEQsbUxBQWlCO0lBQy9FLGdDQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDM0MsaUJBQVM7OztJQWtCRyxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBREosZUFDSjtJQURJLG9FQUNKOzs7SUFDQSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBREosZUFDSjtJQURJLCtEQUNKOzs7SUFDQSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBREosZUFDSjtJQURJLCtEQUNKOzs7SUFDQSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBREosZUFDSjtJQURJLG1FQUNKOzs7SUFDQSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBREosZUFDSjtJQURJLHFFQUNKOzs7SUFD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ckZnQyxlQUFTO1lBQVQsK0JBQVM7WUFDeUMsZUFBcUI7WUFBckIsd0NBQXFCO1lBS3BHLGVBQXVCO1lBQXZCLDREQUF1QjtZQUVkLGVBQXFDO1lBQXJDLHVDQUFxQyxpQkFBQTtZQXVFbUMsZUFBc0I7WUFBdEIseUNBQXNCO1lBRzFFLGVBQTZCO1lBQTdCLCtDQUE2Qiw2QkFBQTtZQUMzRCxlQUNKO1lBREksb0RBQ0o7OzhCRHJGSjtDQXNIQyxBQWhGRCxJQWdGQztTQTNFWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQXFDTixZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjLCBtYWtlVmFsaWRhdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLWhlbHBlcic7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuaW50ZXJmYWNlIElJbnB1dEZpZWxkU3BlY0V4dCBleHRlbmRzIElJbnB1dEZpZWxkU3BlYyB7XG4gICAgZmllbGRJZDogc3RyaW5nO1xuICAgIGF1dG9jb21wbGV0ZUtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXBGb3JtSW5wdXRzIHtcbiAgICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZic7XG4gICAgZW5hYmxlRW50ZXI/OiBib29sZWFuO1xuXG4gICAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW47XG4gICAgaGlkZUNsb3NlQnRuPzogYm9vbGVhbjtcblxuICAgIGNhbmNlbEJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5MYWJlbD86IHN0cmluZztcbiAgICBjYW5jZWxCdG5DbGFzc2VzPzogc3RyaW5nO1xuICAgIGNvbmZpcm1CdG5DbGFzc2VzPzogc3RyaW5nO1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbiAgICBmaWVsZHM6IEFycmF5PElJbnB1dEZpZWxkU3BlYz47XG59XG5cbmZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICByZXR1cm4gJ2FscGhhLScgKyB2NCgpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcHJvbXB0LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGhpZGVDYW5jZWxCdG46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBoaWRlQ2xvc2VCdG46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FuY2VsQnRuQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlubmVyQm9keTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcblxuICAgIEBPdXRwdXQoKSByZXN1bHQ6IFN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG5cbiAgICBleHRGaWVsZHM6IElJbnB1dEZpZWxkU3BlY0V4dFtdO1xuXG4gICAgZm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2JzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBuZXcgU3ViamVjdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpcm1CdG5MYWJlbCA9IHRoaXMuY29uZmlybUJ0bkxhYmVsIHx8ICdDb25maXJtJztcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5MYWJlbCA9IHRoaXMuY2FuY2VsQnRuTGFiZWwgfHwgJ0NhbmNlbCc7XG5cbiAgICAgICAgdGhpcy5jb25maXJtQnRuQ2xhc3NlcyA9IHRoaXMuY29uZmlybUJ0bkNsYXNzZXMgfHwgJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5jYW5jZWxCdG5DbGFzc2VzID0gdGhpcy5jYW5jZWxCdG5DbGFzc2VzIHx8ICdidG4tc2Vjb25kYXJ5JztcblxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0RmllbGRzID0gdGhpcy5maWVsZHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSBgc2VjdGlvbi1wb2xwLWJzLXByb21wdC1mb3JtLSR7dGhpcy5hdXRvY29tcGxldGV9ICR7YS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgZmllbGRJZDogdXVpZHY0KCksIGF1dG9jb21wbGV0ZUtleTogayB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dEZpZWxkcyA9IHRoaXMuZmllbGRzLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5hLCBmaWVsZElkOiB1dWlkdjQoKSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0ge307XG4gICAgICAgIHRoaXMuZXh0RmllbGRzLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICBhW3gubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgbWFrZVZhbGlkYXRpb25zKHgudmFsaWRhdG9ycykpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKGEpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KG51bGwpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIHB1bGwtbGVmdFwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIiAqbmdJZj1cIiFoaWRlQ2xvc2VCdG5cIj5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8ZGl2IFtpbm5lckh0bWxdPVwiaW5uZXJCb2R5XCI+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9jb21wbGV0ZTtlbHNlIGRpc2FibGVUbXBsXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIG5hbWU9XCJwcm9tcHRGb3JtXCIgYXV0b2NvbXBsZXRlPVwib25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9tLWdyb3VwIG1iLTRcIiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBleHRGaWVsZHM7IGZpcnN0IGFzIGlzRmlyc3Q7XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7ZWxlbS5maWVsZElkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLmxhYmVsfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ7e2VsZW0ubmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwie3tlbGVtLmF1dG9jb21wbGV0ZUtleX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2VsZW0uZmllbGRJZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZWxlbS5jYXRlZ29yeX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxuXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/LnJlcXVpcmVkICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucmVxdWlyZWQubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWluICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5wYXR0ZXJuICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMucGF0dGVybi5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5taW5sZW5ndGggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5taW5MZW5ndGgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWF4bGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWF4TGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGlzYWJsZVRtcGw+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIG5hbWU9XCJwcm9tcHRGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbS1ncm91cCBtYi00XCIgKm5nRm9yPVwibGV0IGVsZW0gb2YgZXh0RmllbGRzOyBmaXJzdCBhcyBpc0ZpcnN0O1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2VsZW0uZmllbGRJZH19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwie3tlbGVtLm5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tlbGVtLmZpZWxkSWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2VsZW0uY2F0ZWdvcnl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz5cblxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5yZXF1aXJlZCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnJlcXVpcmVkLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1pbiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1pbi5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2VsZW0ubmFtZV0uZXJyb3JzPy5tYXggJiYgKGZvcm0udG91Y2hlZCB8fCBmb3JtLmRpcnR5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VsZW0udmFsaWRhdG9ycy5tYXgubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ucGF0dGVybiAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLnBhdHRlcm4ubWVzc2FnZX19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tlbGVtLm5hbWVdLmVycm9ycz8ubWlubGVuZ3RoICYmIChmb3JtLnRvdWNoZWQgfHwgZm9ybS5kaXJ0eSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbGVtLnZhbGlkYXRvcnMubWluTGVuZ3RoLm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbZWxlbS5uYW1lXS5lcnJvcnM/Lm1heGxlbmd0aCAmJiAoZm9ybS50b3VjaGVkIHx8IGZvcm0uZGlydHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZWxlbS52YWxpZGF0b3JzLm1heExlbmd0aC5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiIFtuZ0NsYXNzXT1cImNhbmNlbEJ0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVDYW5jZWxCdG5cIj5cbiAgICAgICAge3tjYW5jZWxCdG5MYWJlbH19XG4gICAgPC9idXR0b24+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCIgW25nQ2xhc3NdPVwiY29uZmlybUJ0bkNsYXNzZXNcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgIHt7Y29uZmlybUJ0bkxhYmVsfX1cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG5cblxuIl19