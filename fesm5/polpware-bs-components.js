import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵsanitizeUrl, ɵɵadvance, ɵɵtextInterpolate, ɵɵpureFunction0, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, Input, ɵɵdefineInjectable, Injectable, ɵɵtextInterpolate1, ɵɵdirectiveInject, ɵɵresolveWindow, ɵɵelement, ɵɵsanitizeHtml, HostListener, ɵɵpropertyInterpolate, ɵɵtemplateRefExtractor, ɵɵreference, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { __assign } from 'tslib';
import { Validators, FormControl, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { v4 } from 'uuid';
import { buildUrlValidator } from '@polpware/ngx-input-validators';
import { AutosizeDirective, AutosizeModule } from 'ngx-autosize';
import { AutofocusDirective, FtAutofocusModule } from '@40three/ngx-autofocus-directive';

var ActionKind;
(function (ActionKind) {
    ActionKind[ActionKind["NO_ACTION"] = 0] = "NO_ACTION";
    ActionKind[ActionKind["URL_LINK"] = 1] = "URL_LINK";
    ActionKind[ActionKind["ROUTER_LINK"] = 2] = "ROUTER_LINK";
    ActionKind[ActionKind["CUSTOM_ACTION"] = 3] = "CUSTOM_ACTION";
})(ActionKind || (ActionKind = {}));

function BreadcrumbComponent_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("href", item_r2.url, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r2.title);
} }
var _c0 = function () { return {}; };
function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams || ɵɵpureFunction0(3, _c0));
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 10);
    ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { ɵɵrestoreView(_r11); var item_r2 = ɵɵnextContext().$implicit; return item_r2.action(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r2.title);
} }
function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 0);
    ɵɵelementContainerStart(1, 3);
    ɵɵtemplate(2, BreadcrumbComponent_li_1_a_2_Template, 2, 2, "a", 4);
    ɵɵtemplate(3, BreadcrumbComponent_li_1_a_3_Template, 2, 4, "a", 5);
    ɵɵtemplate(4, BreadcrumbComponent_li_1_a_4_Template, 2, 1, "a", 6);
    ɵɵtemplate(5, BreadcrumbComponent_li_1_a_5_Template, 2, 1, "a", 7);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.inactiveItemClasses);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", item_r2.kind);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 1);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 2);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 3);
} }
function BreadcrumbComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ɵɵnextContext().ngIf;
    ɵɵproperty("href", item_r14.url, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", item_r14.routerLink)("queryParams", item_r14.queryParams || ɵɵpureFunction0(3, _c0));
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 10);
    ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { ɵɵrestoreView(_r23); var item_r14 = ɵɵnextContext().ngIf; return item_r14.action(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ɵɵnextContext().ngIf;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ɵɵnextContext().ngIf;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r14.title);
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 11);
    ɵɵelementContainerStart(1, 3);
    ɵɵtemplate(2, BreadcrumbComponent_li_2_a_2_Template, 2, 2, "a", 4);
    ɵɵtemplate(3, BreadcrumbComponent_li_2_a_3_Template, 2, 4, "a", 5);
    ɵɵtemplate(4, BreadcrumbComponent_li_2_a_4_Template, 2, 1, "a", 6);
    ɵɵtemplate(5, BreadcrumbComponent_li_2_a_5_Template, 2, 1, "a", 7);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r14 = ctx.ngIf;
    var ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.activeItemClasses);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", item_r14.kind);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 1);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 2);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", 3);
} }
/*
 Presumptions:
 1. items are fixed at the moment of page init
*/
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.items = [];
        this.listClasses = 'breadcrumb';
        this.inactiveItemClasses = 'breadcrumb-item';
        this.activeItemClasses = 'breadcrumb-item active';
        this.interItems = [];
        this.activeItem = null;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.update();
    };
    BreadcrumbComponent.prototype.ngOnChanges = function () {
        this.update();
    };
    BreadcrumbComponent.prototype.update = function () {
        // Pre-process data
        this.items.forEach(function (e) {
            if (e.routerLink) {
                e.kind = ActionKind.ROUTER_LINK;
            }
            else if (e.url) {
                e.kind = ActionKind.URL_LINK;
            }
            else if (e.action) {
                e.kind = ActionKind.CUSTOM_ACTION;
            }
            else {
                e.kind = ActionKind.NO_ACTION;
            }
        });
        this.interItems = [];
        this.activeItem = null;
        // Set up interItems and activeItem, and items are
        // fixed this moment and thus interItems and activeItem
        if (this.items.length > 0) {
            // Split the array
            for (var i = 0; i < this.items.length - 1; i++) {
                this.interItems.push(this.items[i]);
            }
            this.activeItem = this.items[this.items.length - 1];
        }
    };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
    BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-current", "page", 3, "ngClass", 4, "ngIf"], [3, "ngSwitch"], [3, "href", 4, "ngSwitchCase"], [3, "routerLink", "queryParams", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"], ["aria-current", "page", 3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "ol", 0);
            ɵɵtemplate(1, BreadcrumbComponent_li_1_Template, 6, 5, "li", 1);
            ɵɵtemplate(2, BreadcrumbComponent_li_2_Template, 6, 5, "li", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.listClasses);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.interItems);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.activeItem);
        } }, directives: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLinkWithHref], styles: [""] });
    return BreadcrumbComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss']
            }]
    }], null, { items: [{
            type: Input
        }], listClasses: [{
            type: Input
        }], inactiveItemClasses: [{
            type: Input
        }], activeItemClasses: [{
            type: Input
        }] }); })();

var BreadcrumbClipboardService = /** @class */ (function () {
    function BreadcrumbClipboardService() {
        this.clipboard = new BehaviorSubject([]);
    }
    BreadcrumbClipboardService.prototype.paste = function (items) {
        this.clipboard.next(items);
    };
    BreadcrumbClipboardService.ɵfac = function BreadcrumbClipboardService_Factory(t) { return new (t || BreadcrumbClipboardService)(); };
    BreadcrumbClipboardService.ɵprov = ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' });
    return BreadcrumbClipboardService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BreadcrumbClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function AlertBoxComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function AlertBoxComponent_button_9_Template_button_click_0_listener() { ɵɵrestoreView(_r2); var ctx_r1 = ɵɵnextContext(); return ctx_r1.close(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.noBtnClasses);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.noBtnLabel, " ");
} }
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    AlertBoxComponent.prototype.ngOnInit = function () {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    };
    AlertBoxComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            this.confirm();
        }
    };
    AlertBoxComponent.prototype.close = function () {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.prototype.confirm = function () {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(ɵɵdirectiveInject(BsModalRef)); };
    AlertBoxComponent.ɵcmp = ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, ɵɵresolveWindow);
        } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 12, vars: 5, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "h4", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "button", 2);
            ɵɵlistener("click", function AlertBoxComponent_Template_button_click_3_listener() { return ctx.close(); });
            ɵɵelementStart(4, "span", 3);
            ɵɵtext(5, "\u00D7");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 4);
            ɵɵelement(7, "div", 5);
            ɵɵelementEnd();
            ɵɵelementStart(8, "div", 6);
            ɵɵtemplate(9, AlertBoxComponent_button_9_Template, 2, 2, "button", 7);
            ɵɵelementStart(10, "button", 8);
            ɵɵlistener("click", function AlertBoxComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            ɵɵtext(11);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.title);
            ɵɵadvance(5);
            ɵɵproperty("innerHtml", ctx.innerBody, ɵɵsanitizeHtml);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.hideNoBtn);
            ɵɵadvance(1);
            ɵɵproperty("ngClass", ctx.yesBtnClasses);
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        } }, directives: [NgIf, NgClass], styles: [""] });
    return AlertBoxComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertBoxComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-alert-box',
                templateUrl: './alert-box.component.html',
                styleUrls: ['./alert-box.component.css']
            }]
    }], function () { return [{ type: BsModalRef }]; }, { hideNoBtn: [{
            type: Input
        }], yesBtnLabel: [{
            type: Input
        }], noBtnLabel: [{
            type: Input
        }], noBtnClasses: [{
            type: Input
        }], yesBtnClasses: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], title: [{
            type: Input
        }], innerBody: [{
            type: Input
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();

function makeValidations(data) {
    var validations = Object.keys(data);
    var x = validations.map(function (a) {
        switch (a) {
            case 'required':
                return Validators.required;
            case 'min':
                return Validators.min(data.min.value);
            case 'max':
                return Validators.max(data.max.value);
            case 'pattern':
                return Validators.pattern(data.pattern.value);
            case 'minLength':
                return Validators.minLength(data.minLength.value);
            case 'maxLength':
                return Validators.maxLength(data.maxLength.value);
            case 'url':
                return buildUrlValidator(data.url.options);
            default:
                return null;
        }
    });
    x = x.filter(function (a) { return !!a; });
    return Validators.compose(x);
}

function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r6); var ctx_r5 = ɵɵnextContext(); return ctx_r5.close(); });
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function PromptFormComponent_ng_container_6_div_2_textarea_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "textarea", 19);
    ɵɵtext(1, "                ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = ɵɵnextContext();
    var elem_r8 = ctx_r20.$implicit;
    var isFirst_r9 = ctx_r20.first;
    ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    ɵɵproperty("autofocus", isFirst_r9);
} }
function PromptFormComponent_ng_container_6_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 20);
} if (rf & 2) {
    var ctx_r21 = ɵɵnextContext();
    var elem_r8 = ctx_r21.$implicit;
    var isFirst_r9 = ctx_r21.first;
    ɵɵpropertyInterpolate("formControlName", elem_r8.name);
    ɵɵpropertyInterpolate("autocomplete", elem_r8.autocompleteKey);
    ɵɵpropertyInterpolate("id", elem_r8.fieldId);
    ɵɵpropertyInterpolate("type", elem_r8.category);
    ɵɵproperty("autofocus", isFirst_r9);
} }
function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.validators.url.message, " ");
} }
function PromptFormComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelementStart(1, "label", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, PromptFormComponent_ng_container_6_div_2_textarea_3_Template, 2, 3, "textarea", 16);
    ɵɵtemplate(4, PromptFormComponent_ng_container_6_div_2_ng_template_4_Template, 1, 5, "ng-template", null, 17, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PromptFormComponent_ng_container_6_div_2_small_6_Template, 2, 1, "small", 18);
    ɵɵtemplate(7, PromptFormComponent_ng_container_6_div_2_small_7_Template, 2, 1, "small", 18);
    ɵɵtemplate(8, PromptFormComponent_ng_container_6_div_2_small_8_Template, 2, 1, "small", 18);
    ɵɵtemplate(9, PromptFormComponent_ng_container_6_div_2_small_9_Template, 2, 1, "small", 18);
    ɵɵtemplate(10, PromptFormComponent_ng_container_6_div_2_small_10_Template, 2, 1, "small", 18);
    ɵɵtemplate(11, PromptFormComponent_ng_container_6_div_2_small_11_Template, 2, 1, "small", 18);
    ɵɵtemplate(12, PromptFormComponent_ng_container_6_div_2_small_12_Template, 2, 1, "small", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r8 = ctx.$implicit;
    var _r11 = ɵɵreference(5);
    var ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r8.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r8.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", elem_r8.category == "textarea")("ngIfElse", _r11);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.required) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.min) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.max) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.pattern) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.minlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.maxlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.url) && (ctx_r7.form.touched || ctx_r7.form.dirty));
} }
function PromptFormComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "form", 12);
    ɵɵtemplate(2, PromptFormComponent_ng_container_6_div_2_Template, 13, 11, "div", 13);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.extFields);
} }
function PromptFormComponent_ng_template_7_div_1_textarea_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "textarea", 19);
    ɵɵtext(1, "                ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = ɵɵnextContext();
    var elem_r30 = ctx_r42.$implicit;
    var isFirst_r31 = ctx_r42.first;
    ɵɵpropertyInterpolate("formControlName", elem_r30.name);
    ɵɵpropertyInterpolate("id", elem_r30.fieldId);
    ɵɵproperty("autofocus", isFirst_r31);
} }
function PromptFormComponent_ng_template_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 24);
} if (rf & 2) {
    var ctx_r43 = ɵɵnextContext();
    var elem_r30 = ctx_r43.$implicit;
    var isFirst_r31 = ctx_r43.first;
    ɵɵpropertyInterpolate("formControlName", elem_r30.name);
    ɵɵpropertyInterpolate("id", elem_r30.fieldId);
    ɵɵpropertyInterpolate("type", elem_r30.category);
    ɵɵproperty("autofocus", isFirst_r31);
} }
function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.required.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.min.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.max.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.pattern.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.minLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.maxLength.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.validators.url.message, " ");
} }
function PromptFormComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelementStart(1, "label", 15);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, PromptFormComponent_ng_template_7_div_1_textarea_3_Template, 2, 3, "textarea", 16);
    ɵɵtemplate(4, PromptFormComponent_ng_template_7_div_1_ng_template_4_Template, 1, 4, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PromptFormComponent_ng_template_7_div_1_small_6_Template, 2, 1, "small", 18);
    ɵɵtemplate(7, PromptFormComponent_ng_template_7_div_1_small_7_Template, 2, 1, "small", 18);
    ɵɵtemplate(8, PromptFormComponent_ng_template_7_div_1_small_8_Template, 2, 1, "small", 18);
    ɵɵtemplate(9, PromptFormComponent_ng_template_7_div_1_small_9_Template, 2, 1, "small", 18);
    ɵɵtemplate(10, PromptFormComponent_ng_template_7_div_1_small_10_Template, 2, 1, "small", 18);
    ɵɵtemplate(11, PromptFormComponent_ng_template_7_div_1_small_11_Template, 2, 1, "small", 18);
    ɵɵtemplate(12, PromptFormComponent_ng_template_7_div_1_small_12_Template, 2, 1, "small", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r30 = ctx.$implicit;
    var _r33 = ɵɵreference(5);
    var ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r30.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r30.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", elem_r30.category == "textarea")("ngIfElse", _r33);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.required) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.min) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.max) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.pattern) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.minlength) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.maxlength) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.url) && (ctx_r29.form.touched || ctx_r29.form.dirty));
} }
function PromptFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "form", 22);
    ɵɵtemplate(1, PromptFormComponent_ng_template_7_div_1_Template, 13, 11, "div", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r3.form);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.extFields);
} }
function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r52 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 25);
    ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { ɵɵrestoreView(_r52); var ctx_r51 = ɵɵnextContext(); return ctx_r51.close(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.cancelBtnClasses);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.cancelBtnLabel, " ");
} }
var KEY_CODE$1;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE$1 || (KEY_CODE$1 = {}));
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
        if (this.enableEnter && event.keyCode === KEY_CODE$1.ENTER) {
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
    PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(BsModalRef)); };
    PromptFormComponent.ɵcmp = ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, ɵɵresolveWindow);
        } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 13, vars: 9, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["name", "promptForm", "autocomplete", "on", 3, "formGroup"], ["class", "from-group mb-4", 4, "ngFor", "ngForOf"], [1, "from-group", "mb-4"], [3, "for"], ["autosize", "", "class", "form-control", 3, "formControlName", "id", "autofocus", 4, "ngIf", "ngIfElse"], ["inputTmpl", ""], ["class", "text-danger", 4, "ngIf"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "autofocus"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "type", "autofocus"], [1, "text-danger"], ["name", "promptForm", 3, "formGroup"], ["anotherInputTmpl", ""], [1, "form-control", 3, "formControlName", "id", "type", "autofocus"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "h4", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵtemplate(3, PromptFormComponent_button_3_Template, 3, 0, "button", 2);
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelement(5, "div", 4);
            ɵɵtemplate(6, PromptFormComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
            ɵɵtemplate(7, PromptFormComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 7);
            ɵɵtemplate(10, PromptFormComponent_button_10_Template, 2, 2, "button", 8);
            ɵɵelementStart(11, "button", 9);
            ɵɵlistener("click", function PromptFormComponent_Template_button_click_11_listener() { return ctx.confirm(); });
            ɵɵtext(12);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(8);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.title);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            ɵɵadvance(2);
            ɵɵproperty("innerHtml", ctx.innerBody, ɵɵsanitizeHtml);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.autocomplete)("ngIfElse", _r2);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", !ctx.hideCancelBtn);
            ɵɵadvance(1);
            ɵɵproperty("ngClass", ctx.confirmBtnClasses)("disabled", !ctx.form.valid);
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" ", ctx.confirmBtnLabel, " ");
        } }, directives: [NgIf, NgClass, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgForOf, DefaultValueAccessor, AutosizeDirective, NgControlStatus, FormControlName, AutofocusDirective], styles: [""] });
    return PromptFormComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-form',
                templateUrl: './prompt-form.component.html',
                styleUrls: ['./prompt-form.component.css']
            }]
    }], function () { return [{ type: FormBuilder }, { type: BsModalRef }]; }, { autocomplete: [{
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

var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule.ɵmod = ɵɵdefineNgModule({ type: PolpBsComponentsModule });
    PolpBsComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
                CommonModule,
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
                FtAutofocusModule,
                AutosizeModule
            ]] });
    return PolpBsComponentsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FtAutofocusModule,
        AutosizeModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FtAutofocusModule,
                    AutosizeModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent
                ],
                entryComponents: [
                    AlertBoxComponent,
                    PromptFormComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, PolpBsComponentsModule, PromptFormComponent, makeValidations };
//# sourceMappingURL=polpware-bs-components.js.map
