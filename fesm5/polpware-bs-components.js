import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵsanitizeUrl, ɵɵadvance, ɵɵtextInterpolate, ɵɵpureFunction0, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, Input, ɵɵdefineInjectable, Injectable, ɵɵtextInterpolate1, ɵɵdirectiveInject, ɵɵresolveWindow, ɵɵelement, ɵɵsanitizeHtml, HostListener, ɵɵpropertyInterpolate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵInheritDefinitionFeature, Output, EventEmitter, ɵɵpipe, ɵɵpipeBind1, ɵɵprojectionDef, ɵɵprojection, ɵɵattribute, ɵɵdefineDirective, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵinject } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { BsModalRef, ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { __extends, __assign, __spread } from 'tslib';
import { Validators, FormControl, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, CheckboxControlValueAccessor, NgControlStatus, FormControlName, RadioControlValueAccessor, DefaultValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NgModel, RequiredValidator, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faEyeSlash, faEye, faSpinner, faChevronUp, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { buildUrlValidator } from '@polpware/ngx-input-validators';
import { AutosizeDirective, AutosizeModule } from 'ngx-autosize';
import { AutofocusDirective, FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaskDirective, NgxMaskModule } from 'ngx-mask';
import { AlertTypeEnum, EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import { TagInputComponent, TagInputDropdown, TagInputModule } from 'ngx-chips';
import { AlertComponent, AlertModule } from 'ngx-bootstrap/alert';
import { CollapseDirective, CollapseModule } from 'ngx-bootstrap/collapse';

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

function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12);
    ɵɵelement(2, "input", 13);
    ɵɵelementStart(3, "label", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "input", 16);
    ɵɵelementStart(2, "label", 14);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var o_r23 = ctx.$implicit;
    var i_r24 = ctx.index;
    var elem_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("value", o_r23.value);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r24);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", o_r23.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template, 4, 6, "div", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var o_r28 = ctx.$implicit;
    ɵɵpropertyInterpolate("value", o_r28.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", o_r28.label, " ");
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "select", 18);
    ɵɵelementStart(4, "option");
    ɵɵtext(5, "Choose ...");
    ɵɵelementEnd();
    ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template, 2, 2, "option", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "textarea", 21);
    ɵɵtext(4, "                    ");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r30 = ɵɵnextContext(2);
    var elem_r3 = ctx_r30.$implicit;
    var isFirst_r4 = ctx_r30.first;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 22);
    ɵɵelement(4, "input", 23);
    ɵɵelementStart(5, "div", 24);
    ɵɵelementStart(6, "button", 25);
    ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template_button_click_6_listener() { ɵɵrestoreView(_r33); var elem_r3 = ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    ɵɵelement(7, "fa-icon", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r34 = ɵɵnextContext(2);
    var elem_r3 = ctx_r34.$implicit;
    var isFirst_r4 = ctx_r34.first;
    var ctx_r19 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    ɵɵproperty("autofocus", isFirst_r4);
    ɵɵadvance(3);
    ɵɵproperty("icon", elem_r3.visible ? ctx_r19.faEyeSlash : ctx_r19.faEye);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 29);
} if (rf & 2) {
    var ctx_r38 = ɵɵnextContext(3);
    var elem_r3 = ctx_r38.$implicit;
    var isFirst_r4 = ctx_r38.first;
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.category);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 31);
} if (rf & 2) {
    var ctx_r40 = ɵɵnextContext(4);
    var elem_r3 = ctx_r40.$implicit;
    var isFirst_r4 = ctx_r40.first;
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.category);
    ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template, 1, 7, "input", 30);
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngIf", elem_r3.maskSettings);
} }
function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template, 1, 6, "input", 27);
    ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template, 1, 1, "ng-template", null, 28, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r36 = ɵɵreference(5);
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r36);
} }
function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1, 9);
    ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 5, 5, "ng-container", 10);
    ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 10);
    ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 5, 6, "ng-container", 10);
    ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 8, 8, "ng-container", 10);
    ɵɵtemplate(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 6, 4, "ng-container", 11);
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", elem_r3.category);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textarea");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 12);
    ɵɵelement(2, "input", 13);
    ɵɵelementStart(3, "label", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "input", 16);
    ɵɵelementStart(2, "label", 14);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var o_r52 = ctx.$implicit;
    var i_r53 = ctx.index;
    var elem_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("value", o_r52.value);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r53);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r53);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", o_r52.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template, 4, 6, "div", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var o_r57 = ctx.$implicit;
    ɵɵpropertyInterpolate("value", o_r57.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", o_r57.label, " ");
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "select", 18);
    ɵɵelementStart(4, "option");
    ɵɵtext(5, "Choose ...");
    ɵɵelementEnd();
    ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template, 2, 2, "option", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", elem_r3.options);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "textarea", 21);
    ɵɵtext(4, "                    ");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r59 = ɵɵnextContext(2);
    var elem_r3 = ctx_r59.$implicit;
    var isFirst_r4 = ctx_r59.first;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r62 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 22);
    ɵɵelement(4, "input", 23);
    ɵɵelementStart(5, "div", 24);
    ɵɵelementStart(6, "button", 25);
    ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template_button_click_6_listener() { ɵɵrestoreView(_r62); var elem_r3 = ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
    ɵɵelement(7, "fa-icon", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r63 = ɵɵnextContext(2);
    var elem_r3 = ctx_r63.$implicit;
    var isFirst_r4 = ctx_r63.first;
    var ctx_r48 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
    ɵɵproperty("autofocus", isFirst_r4);
    ɵɵadvance(3);
    ɵɵproperty("icon", elem_r3.visible ? ctx_r48.faEyeSlash : ctx_r48.faEye);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 23);
} if (rf & 2) {
    var ctx_r67 = ɵɵnextContext(3);
    var elem_r3 = ctx_r67.$implicit;
    var isFirst_r4 = ctx_r67.first;
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.category);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "input", 34);
} if (rf & 2) {
    var ctx_r68 = ɵɵnextContext(3);
    var elem_r3 = ctx_r68.$implicit;
    var isFirst_r4 = ctx_r68.first;
    ɵɵpropertyInterpolate("formControlName", elem_r3.name);
    ɵɵpropertyInterpolate("id", elem_r3.fieldId);
    ɵɵpropertyInterpolate("name", elem_r3.fieldId);
    ɵɵpropertyInterpolate("type", elem_r3.category);
    ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
    ɵɵproperty("autofocus", isFirst_r4);
} }
function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template, 1, 5, "input", 32);
    ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template, 1, 6, "ng-template", null, 33, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r65 = ɵɵreference(5);
    var elem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", elem_r3.fieldId);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r65);
} }
function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 9);
    ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 5, 5, "ng-container", 10);
    ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 7, 4, "ng-container", 10);
    ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 5, 6, "ng-container", 10);
    ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 8, 8, "ng-container", 10);
    ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 6, 4, "ng-container", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngSwitch", elem_r3.category);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "select");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "textarea");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "password");
} }
function PromptFormComponent_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
} }
function PromptFormComponent_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
} }
function PromptFormComponent_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
} }
function PromptFormComponent_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
} }
function PromptFormComponent_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
} }
function PromptFormComponent_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
} }
function PromptFormComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
} }
function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_Template, 8, 6, "ng-container", 6);
    ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_Template, 7, 6, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PromptFormComponent_div_1_small_4_Template, 2, 1, "small", 8);
    ɵɵtemplate(5, PromptFormComponent_div_1_small_5_Template, 2, 1, "small", 8);
    ɵɵtemplate(6, PromptFormComponent_div_1_small_6_Template, 2, 1, "small", 8);
    ɵɵtemplate(7, PromptFormComponent_div_1_small_7_Template, 2, 1, "small", 8);
    ɵɵtemplate(8, PromptFormComponent_div_1_small_8_Template, 2, 1, "small", 8);
    ɵɵtemplate(9, PromptFormComponent_div_1_small_9_Template, 2, 1, "small", 8);
    ɵɵtemplate(10, PromptFormComponent_div_1_small_10_Template, 2, 1, "small", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    var elem_r3 = ctx.$implicit;
    var _r6 = ɵɵreference(3);
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.autocomplete)("ngIfElse", _r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.required) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.min) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.max) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.pattern) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.minlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.maxlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.url) && (ctx_r0.form.touched || ctx_r0.form.dirty));
} }
function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r79 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 36);
    ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r79); var ctx_r78 = ɵɵnextContext(); return ctx_r78.cancel(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
} }
function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r81 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 37);
    ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r81); var ctx_r80 = ɵɵnextContext(); return ctx_r80.submit(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.submitBtnTxt, " ");
} }
var KEY_CODE$1;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE$1 || (KEY_CODE$1 = {}));
function uuidv4() {
    return 'alpha-' + v4();
}
var formId = 1;
var PromptFormComponent = /** @class */ (function (_super) {
    __extends(PromptFormComponent, _super);
    function PromptFormComponent(_builder) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this.enableEnter = false;
        // Whether or not emit the init value after the form is built.
        _this.emitInitValue = false;
        _this.faEyeSlash = faEyeSlash;
        _this.faEye = faEye;
        _this.name = "promptName" + formId++;
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
    PromptFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.emitInitValue) {
            setTimeout(function () {
                var v = _this.form.value;
                _this.notifyValidation();
                _this.notifyValueChanges(v);
            });
        }
    };
    PromptFormComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    PromptFormComponent.prototype.submit = function () {
        this.onSave.emit(this.form.value);
    };
    PromptFormComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE$1.ENTER) {
            if (this.form.valid) {
                this.submit();
            }
        }
    };
    PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(ɵɵdirectiveInject(FormBuilder)); };
    PromptFormComponent.ɵcmp = ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, ɵɵresolveWindow);
        } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "form-group mb-4", 4, "ngFor", "ngForOf"], [1, "form-group", "d-flex", "justify-content-end"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "form-group", "mb-4"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [3, "for"], [1, "form-control", 3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autofocus"], [1, "input-group"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask"], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "mask"], [1, "text-danger"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
            ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵpropertyInterpolate("name", ctx.name);
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.extFields);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.hideCancelBtn);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CheckboxControlValueAccessor, NgControlStatus, FormControlName, RadioControlValueAccessor, DefaultValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, AutosizeDirective, AutofocusDirective, FaIconComponent, MaskDirective, NgClass], styles: [""] });
    return PromptFormComponent;
}(DefaultFormBaseComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-form',
                templateUrl: './prompt-form.component.html',
                styleUrls: ['./prompt-form.component.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, { autocomplete: [{
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

function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r2); var ctx_r1 = ɵɵnextContext(); return ctx_r1.close(); });
    ɵɵelementStart(1, "span", 7);
    ɵɵtext(2, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
var PromptModalComponent = /** @class */ (function () {
    function PromptModalComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    PromptModalComponent.prototype.ngOnInit = function () {
    };
    PromptModalComponent.prototype.close = function () {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.prototype.confirm = function (value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.ɵfac = function PromptModalComponent_Factory(t) { return new (t || PromptModalComponent)(ɵɵdirectiveInject(BsModalRef)); };
    PromptModalComponent.ɵcmp = ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter", "onCancel", "onSave"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "h4", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵtemplate(3, PromptModalComponent_button_3_Template, 3, 0, "button", 2);
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelement(5, "div", 4);
            ɵɵelementStart(6, "polp-bs-prompt-form", 5);
            ɵɵlistener("onCancel", function PromptModalComponent_Template_polp_bs_prompt_form_onCancel_6_listener() { return ctx.close(); })("onSave", function PromptModalComponent_Template_polp_bs_prompt_form_onSave_6_listener($event) { return ctx.confirm($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.title);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            ɵɵadvance(2);
            ɵɵproperty("innerHtml", ctx.innerBody, ɵɵsanitizeHtml);
            ɵɵadvance(1);
            ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        } }, directives: [NgIf, PromptFormComponent], styles: [""] });
    return PromptModalComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PromptModalComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-prompt-modal',
                templateUrl: './prompt-modal.component.html',
                styleUrls: ['./prompt-modal.component.css']
            }]
    }], function () { return [{ type: BsModalRef }]; }, { autocomplete: [{
            type: Input
        }], enableEnter: [{
            type: Input
        }], hideCancelBtn: [{
            type: Input
        }], hideConfirmBtn: [{
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
        }] }); })();

function EmailComposerComponent_alert_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "alert", 15);
    ɵɵelementStart(1, "p");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.bsAlertType)("dismissible", ctx_r0.alertDismissible);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    var item_r11 = ctx.item;
    ɵɵtextInterpolate1(" ", item_r11.display, " ");
} }
function EmailComposerComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1, " Subject is required. ");
    ɵɵelementEnd();
} }
function EmailComposerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1, " Body message is required. ");
    ɵɵelementEnd();
} }
function EmailComposerComponent_button_25_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "fa-icon", 19);
} if (rf & 2) {
    var ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r13.faSpinner)("spin", true);
} }
function EmailComposerComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function EmailComposerComponent_button_25_Template_button_click_0_listener() { ɵɵrestoreView(_r15); var ctx_r14 = ɵɵnextContext(); return ctx_r14.submit(); });
    ɵɵtext(1, " Submit ");
    ɵɵtemplate(2, EmailComposerComponent_button_25_fa_icon_2_Template, 1, 2, "fa-icon", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r8.alertType == 3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.alertType == 3);
} }
function EmailComposerComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function EmailComposerComponent_ng_template_26_Template_button_click_0_listener() { ɵɵrestoreView(_r17); var ctx_r16 = ɵɵnextContext(); return ctx_r16.close(); });
    ɵɵtext(1, " Close ");
    ɵɵelementEnd();
} }
var _c0$1 = function () { return [32, 44, 58, 59]; };
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        var _this = _super.call(this) || this;
        _this.faSpinner = faSpinner;
        _this.initEmails = [];
        _this.onClose = new EventEmitter();
        return _this;
    }
    Object.defineProperty(EmailComposerComponent.prototype, "bsAlertType", {
        get: function () {
            switch (this.alertType) {
                case AlertTypeEnum.info:
                    return 'info';
                case AlertTypeEnum.error:
                    return 'danger';
                case AlertTypeEnum.success:
                    return 'success';
                case AlertTypeEnum.warning:
                    return 'warning';
                default:
                    return 'info';
            }
        },
        enumerable: true,
        configurable: true
    });
    EmailComposerComponent.prototype.ngOnInit = function () {
        if (this.initEmails && Array.isArray(this.initEmails)) {
            this.emails = __spread(this.initEmails);
        }
    };
    EmailComposerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.emailInputBox.focus(true);
        }, 200);
    };
    // Override
    EmailComposerComponent.prototype.submit = function () {
        // Sanity check
        if (!this.messageTitle ||
            !this.messageBody ||
            !this.emails.length) {
            this.alertType = AlertTypeEnum.error;
            this.alertMessage = 'Please provide required values and try again!';
            this.alertSubMessage = '';
            this.alertDismissible = true;
            return;
        }
        else {
            this.alertType = AlertTypeEnum.none;
            this.alertMessage = '';
            this.alertSubMessage = '';
            this.alertDismissible = true;
        }
        _super.prototype.submit.call(this);
    };
    EmailComposerComponent.prototype.close = function () {
        this.onClose.emit();
    };
    EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
    EmailComposerComponent.ɵcmp = ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails" }, outputs: { onClose: "onClose" }, features: [ɵɵInheritDefinitionFeature], decls: 28, vars: 25, consts: [[3, "type", "dismissible", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["closeBtnTmpl", ""], [3, "type", "dismissible"], [1, "d-block", "small", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ml-2", 3, "icon", "spin", 4, "ngIf"], [1, "ml-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 0);
            ɵɵelementStart(1, "div");
            ɵɵelementStart(2, "div", 1);
            ɵɵelementStart(3, "label");
            ɵɵtext(4, "Recipients");
            ɵɵelementEnd();
            ɵɵelementStart(5, "tag-input", 2, 3);
            ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
            ɵɵelementStart(7, "tag-input-dropdown", 4);
            ɵɵpipe(8, "async");
            ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "div", 1);
            ɵɵelementStart(11, "label", 5);
            ɵɵtext(12, "Subject");
            ɵɵelementEnd();
            ɵɵelementStart(13, "input", 6, 7);
            ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.messageTitle = $event; });
            ɵɵelementEnd();
            ɵɵtemplate(15, EmailComposerComponent_span_15_Template, 2, 0, "span", 8);
            ɵɵelementEnd();
            ɵɵelementStart(16, "div", 1);
            ɵɵelementStart(17, "label", 9);
            ɵɵtext(18, "Message");
            ɵɵelementEnd();
            ɵɵelementStart(19, "textarea", 10, 11);
            ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.messageBody = $event; });
            ɵɵtext(22, "        ");
            ɵɵelementEnd();
            ɵɵtemplate(23, EmailComposerComponent_span_23_Template, 2, 0, "span", 8);
            ɵɵelementEnd();
            ɵɵelementStart(24, "div", 12);
            ɵɵtemplate(25, EmailComposerComponent_button_25_Template, 3, 2, "button", 13);
            ɵɵtemplate(26, EmailComposerComponent_ng_template_26_Template, 2, 0, "ng-template", null, 14, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = ɵɵreference(14);
            var _r6 = ɵɵreference(21);
            var _r9 = ɵɵreference(27);
            ɵɵproperty("ngIf", ctx.alertType > 0);
            ɵɵadvance(5);
            ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", ɵɵpureFunction0(24, _c0$1))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
            ɵɵadvance(2);
            ɵɵproperty("autocompleteItems", ɵɵpipeBind1(8, 22, ctx.autocompleteItemsAsync));
            ɵɵadvance(6);
            ɵɵproperty("ngModel", ctx.messageTitle);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !_r3.valid && _r3.touched);
            ɵɵadvance(4);
            ɵɵproperty("minRows", 5)("maxRows", 10)("ngModel", ctx.messageBody);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", !_r6.valid && _r6.touched);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", _r9);
        } }, directives: [NgIf, TagInputComponent, NgControlStatus, NgModel, TagInputDropdown, DefaultValueAccessor, RequiredValidator, AutosizeDirective, AlertComponent, FaIconComponent], pipes: [AsyncPipe], styles: [""] });
    return EmailComposerComponent;
}(EmailFormAbstractComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-email-composer',
                templateUrl: './email-composer.component.html',
                styleUrls: ['./email-composer.component.css']
            }]
    }], function () { return []; }, { initEmails: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();

var _c0$2 = [[["", "title", ""]], [["", "body", ""]]];
var _c1 = ["[title]", "[body]"];
var GlobalElementId = 1;
var ExpandableCardComponent = /** @class */ (function () {
    function ExpandableCardComponent() {
        this.isCollapsed = false;
        this.titleClass = '';
        this.faChevronUp = faChevronUp;
        this.faChevronDown = faChevronDown;
        this.faChevronRight = faChevronRight;
        this.elementId = 'expandableCardBody' + GlobalElementId++;
    }
    ExpandableCardComponent.prototype.ngOnInit = function () {
    };
    ExpandableCardComponent.ɵfac = function ExpandableCardComponent_Factory(t) { return new (t || ExpandableCardComponent)(); };
    ExpandableCardComponent.ɵcmp = ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [[1, "card"], ["aria-controls", "expandableCardBody", 1, "card-header", 3, "click"], [3, "icon"], ["id", "expandableCardBody", 1, "card-body", 3, "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$2);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "a", 1);
            ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            ɵɵprojection(2);
            ɵɵelement(3, "fa-icon", 2);
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵprojection(5, 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵattribute("aria-expanded", !ctx.isCollapsed);
            ɵɵadvance(2);
            ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
            ɵɵadvance(1);
            ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
        } }, directives: [FaIconComponent, CollapseDirective], styles: [""] });
    return ExpandableCardComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-expandable-card',
                templateUrl: './expandable-card.component.html',
                styleUrls: ['./expandable-card.component.css']
            }]
    }], function () { return []; }, { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();

/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
var ObservableModalAbstractComponent = /** @class */ (function () {
    function ObservableModalAbstractComponent() {
        this.result = new Subject();
    }
    ObservableModalAbstractComponent.prototype.closeModal = function (value) {
        this.result.next(value);
        this.result.complete();
        if (this.modalId) {
            this.bsModalService.hide(this.modalId);
        }
        else {
            this.bsModalRef.hide();
        }
    };
    ObservableModalAbstractComponent.ɵfac = function ObservableModalAbstractComponent_Factory(t) { return new (t || ObservableModalAbstractComponent)(); };
    ObservableModalAbstractComponent.ɵdir = ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
    return ObservableModalAbstractComponent;
}());

var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule.ɵmod = ɵɵdefineNgModule({ type: PolpBsComponentsModule });
    PolpBsComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
                CommonModule,
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
                AlertModule,
                ModalModule,
                CollapseModule,
                FontAwesomeModule,
                FtAutofocusModule,
                AutosizeModule,
                TagInputModule,
                NgxMaskModule
            ]] });
    return PolpBsComponentsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        CollapseModule,
        FontAwesomeModule,
        FtAutofocusModule,
        AutosizeModule,
        TagInputModule,
        NgxMaskModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ModalModule,
                    CollapseModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    AutosizeModule,
                    TagInputModule,
                    NgxMaskModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent
                ],
                entryComponents: []
            }]
    }], null, null); })();

var BsModalAssistantService = /** @class */ (function () {
    function BsModalAssistantService() {
        this._modalId = 0;
    }
    Object.defineProperty(BsModalAssistantService.prototype, "modalId", {
        get: function () {
            this._modalId++;
            return this._modalId;
        },
        enumerable: true,
        configurable: true
    });
    BsModalAssistantService.ɵfac = function BsModalAssistantService_Factory(t) { return new (t || BsModalAssistantService)(); };
    BsModalAssistantService.ɵprov = ɵɵdefineInjectable({ token: BsModalAssistantService, factory: BsModalAssistantService.ɵfac, providedIn: 'root' });
    return BsModalAssistantService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BsModalAssistantService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var CommonModalsService = /** @class */ (function () {
    function CommonModalsService(_modalService) {
        this._modalService = _modalService;
    }
    CommonModalsService.prototype.showConfirmAsync = function (title, innerBody, modalClasses) {
        if (modalClasses === void 0) { modalClasses = 'modal-dialog-centered'; }
        var modalRef = this._modalService.show(AlertBoxComponent, {
            animated: true,
            keyboard: false,
            class: modalClasses,
            initialState: {
                enableEnter: true,
                title: title,
                innerBody: innerBody
            },
            ignoreBackdropClick: true
        });
        return modalRef.content.result.toPromise();
    };
    CommonModalsService.ɵfac = function CommonModalsService_Factory(t) { return new (t || CommonModalsService)(ɵɵinject(BsModalService)); };
    CommonModalsService.ɵprov = ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' });
    return CommonModalsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CommonModalsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: BsModalService }]; }, null); })();

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, makeValidations };
//# sourceMappingURL=polpware-bs-components.js.map
