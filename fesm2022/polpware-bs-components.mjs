import * as i0 from '@angular/core';
import { Component, Input, Injectable, HostListener, Output, EventEmitter, Directive, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i1$1 from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as i1$2 from '@angular/forms';
import { Validators, UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash, faEye, faSpinner, faChevronUp, faChevronDown, faChevronRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { buildUrlValidator } from '@polpware/ngx-input-validators';
import * as i3 from 'ngx-bootstrap/popover';
import { PopoverModule } from 'ngx-bootstrap/popover';
import * as i4 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i5 from '@40three/ngx-autofocus-directive';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import * as i6 from '@tinymce/tinymce-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import * as i7 from '@angular/cdk/text-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import * as i8 from 'ngx-mask';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import * as i3$1 from 'ngx-bootstrap/alert';
import { AlertModule } from 'ngx-bootstrap/alert';
import * as i5$1 from 'ngx-chips';
import { TagInputModule } from 'ngx-chips';
import * as i1$3 from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { debounceTime } from 'rxjs/operators';

var ActionKind;
(function (ActionKind) {
    ActionKind[ActionKind["NO_ACTION"] = 0] = "NO_ACTION";
    ActionKind[ActionKind["URL_LINK"] = 1] = "URL_LINK";
    ActionKind[ActionKind["ROUTER_LINK"] = 2] = "ROUTER_LINK";
    ActionKind[ActionKind["CUSTOM_ACTION"] = 3] = "CUSTOM_ACTION";
})(ActionKind || (ActionKind = {}));

const _c0$4 = () => ({});
function BreadcrumbComponent_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const item_r1 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r1.action()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 0);
    i0.ɵɵelementContainerStart(1, 3);
    i0.ɵɵtemplate(2, BreadcrumbComponent_li_1_a_2_Template, 2, 2, "a", 4)(3, BreadcrumbComponent_li_1_a_3_Template, 2, 4, "a", 5)(4, BreadcrumbComponent_li_1_a_4_Template, 2, 1, "a", 6)(5, BreadcrumbComponent_li_1_a_5_Template, 2, 1, "a", 7);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.inactiveItemClasses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", item_r1.kind);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 3);
} }
function BreadcrumbComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("href", item_r4.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("routerLink", item_r4.routerLink)("queryParams", item_r4.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r4 = i0.ɵɵnextContext().ngIf; return i0.ɵɵresetView(item_r4.action()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵelementContainerStart(1, 3);
    i0.ɵɵtemplate(2, BreadcrumbComponent_li_2_a_2_Template, 2, 2, "a", 4)(3, BreadcrumbComponent_li_2_a_3_Template, 2, 4, "a", 5)(4, BreadcrumbComponent_li_2_a_4_Template, 2, 1, "a", 6)(5, BreadcrumbComponent_li_2_a_5_Template, 2, 1, "a", 7);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeItemClasses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", item_r4.kind);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", 3);
} }
/*
 Presumptions:
 1. items are fixed at the moment of page init
*/
class BreadcrumbComponent {
    constructor() {
        this.items = [];
        this.listClasses = 'breadcrumb';
        this.inactiveItemClasses = 'breadcrumb-item';
        this.activeItemClasses = 'breadcrumb-item active';
        this.interItems = [];
        this.activeItem = null;
    }
    ngOnInit() {
        this.update();
    }
    ngOnChanges() {
        this.update();
    }
    update() {
        // Pre-process data
        this.items.forEach(e => {
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
            for (let i = 0; i < this.items.length - 1; i++) {
                this.interItems.push(this.items[i]);
            }
            this.activeItem = this.items[this.items.length - 1];
        }
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-current", "page", 3, "ngClass", 4, "ngIf"], [3, "ngSwitch"], [3, "href", 4, "ngSwitchCase"], [3, "routerLink", "queryParams", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"], ["aria-current", "page", 3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 0);
            i0.ɵɵtemplate(1, BreadcrumbComponent_li_1_Template, 6, 5, "li", 1)(2, BreadcrumbComponent_li_2_Template, 6, 5, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.listClasses);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.interItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeItem);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.RouterLink] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-breadcrumb', template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n" }]
    }], null, { items: [{
            type: Input
        }], listClasses: [{
            type: Input
        }], inactiveItemClasses: [{
            type: Input
        }], activeItemClasses: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "lib\\components\\breadcrumb\\breadcrumb.component.ts", lineNumber: 18 }); })();

class BreadcrumbClipboardService {
    constructor() {
        this.clipboard = new BehaviorSubject([]);
    }
    paste(items) {
        this.clipboard.next(items);
    }
    static { this.ɵfac = function BreadcrumbClipboardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbClipboardService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

function AlertBoxComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function AlertBoxComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.noBtnClasses);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noBtnLabel, " ");
} }
var KEY_CODE$1;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE$1 || (KEY_CODE$1 = {}));
class AlertBoxComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    ngOnInit() {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    }
    keyEvent(event) {
        if (this.enableEnter && event.keyCode === KEY_CODE$1.ENTER) {
            this.confirm();
        }
    }
    close() {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    }
    static { this.ɵfac = function AlertBoxComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertBoxComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 10, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click", "ngClass"], ["type", "button", 1, "btn", "me-2", 3, "click", "ngClass"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, AlertBoxComponent_button_7_Template, 2, 2, "button", 6);
            i0.ɵɵelementStart(8, "button", 7);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_8_listener() { return ctx.confirm(); });
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideNoBtn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.yesBtnClasses);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        } }, dependencies: [i1.NgClass, i1.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBoxComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-alert-box', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn me-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n" }]
    }], () => [{ type: i1$1.BsModalRef }], { hideNoBtn: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertBoxComponent, { className: "AlertBoxComponent", filePath: "lib\\components\\alert-box\\alert-box.component.ts", lineNumber: 25 }); })();

function makeValidations(data) {
    const validations = Object.keys(data);
    let x = validations.map(a => {
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
    x = x.filter(a => !!a);
    return Validators.compose(x);
}

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
const tinymceDefaultInitOptions = {
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
const tinymceDefaultPlugins = 'advlist autolink lists link image media table code fullscreen help nonbreaking  pagebreak  preview  searchreplace visualblocks visualchars anchor  autoresize charmap emoticons wordcount insertdatetime tiny_mce_wiris';
const tinymceDefaultToolbar = 'preview | undo redo | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | outdent indent | strikethrough forecolor backcolor removeformat | charmap emoticons | code fullscreen | pagebreak anchor';
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
function uuidv4() {
    return 'alpha-' + v4();
}
let formId = 1;
class PromptFormComponent extends DefaultFormBaseComponent {
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
    static { this.ɵfac = function PromptFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PromptFormComponent)(i0.ɵɵdirectiveInject(i1$2.UntypedFormBuilder)); }; }
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
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1$2.ɵNgNoValidate, i1$2.NgSelectOption, i1$2.ɵNgSelectMultipleOption, i1$2.DefaultValueAccessor, i1$2.CheckboxControlValueAccessor, i1$2.RadioControlValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$2.FormControlName, i3.PopoverDirective, i4.FaIconComponent, i5.AutofocusDirective, i6.EditorComponent, i7.CdkTextareaAutosize, i8.NgxMaskDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-form', inputs: [
                    'hideCancelBtn',
                    'hideSubmitBtn',
                    'submitBtnTxt',
                    'cancelBtnTxt'
                ], template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"mb-3\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate1\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate1><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                        </span>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate2\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate2><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>\n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate3\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate3><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate4\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate4><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate5\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate5><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"\n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"                               \n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate6\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate6><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate7\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate7><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                        \n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate8\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate8>\n                                <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                            </ng-template>                            \n                        </span>                                                    \n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate9\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate9>\n                            <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                        </ng-template>\n                    </span>                        \n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate10\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate10><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate11\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate11><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize\n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate12\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate12><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"                               \n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"\n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate13\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate13><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate14\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate14><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </div>\n    </div>\n    \n    <div class=\"d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn me-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n" }]
    }], () => [{ type: i1$2.UntypedFormBuilder }], { autocomplete: [{
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

function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd();
} }
class PromptModalComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    ngOnInit() {
    }
    close() {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm(value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    }
    static { this.ɵfac = function PromptModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PromptModalComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "btn-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "onCancel", "onSave", "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PromptModalComponent_button_3_Template, 1, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵelementStart(6, "polp-bs-prompt-form", 5);
            i0.ɵɵlistener("onCancel", function PromptModalComponent_Template_polp_bs_prompt_form_onCancel_6_listener() { return ctx.close(); })("onSave", function PromptModalComponent_Template_polp_bs_prompt_form_onSave_6_listener($event) { return ctx.confirm($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance();
            i0.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        } }, dependencies: [i1.NgIf, PromptFormComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-modal', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n" }]
    }], () => [{ type: i1$1.BsModalRef }], { autocomplete: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PromptModalComponent, { className: "PromptModalComponent", filePath: "lib\\components\\prompt-modal\\prompt-modal.component.ts", lineNumber: 29 }); })();

const _c0$3 = () => [32, 44, 58, 59];
const _c1$1 = () => [".*"];
const _c2 = (a0, a1) => ({ htmlAllowedTags: a0, htmlAllowedAttrs: a1, extended_valid_elements: "*[.*]", draggable_modal: true });
function EmailComposerComponent_alert_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "alert", 16)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r1.bsAlertType)("dismissible", ctx_r1.alertDismissible);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r3.display, " ");
} }
function EmailComposerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 7);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "editor", 18, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_div_16_Template_editor_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 19);
    i0.ɵɵtext(7, " Body message is required. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction2(4, _c2, i0.ɵɵpureFunction0(2, _c1$1), i0.ɵɵpureFunction0(3, _c1$1)));
} }
function EmailComposerComponent_ng_template_17_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, " Body message is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 20);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 21, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_ng_template_17_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(6, "            ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, EmailComposerComponent_ng_template_17_div_7_Template, 2, 0, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const messageBodyCtrl_r6 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkAutosizeMinRows", 5)("cdkAutosizeMaxRows", 10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !messageBodyCtrl_r6.valid && messageBodyCtrl_r6.touched);
} }
function EmailComposerComponent_button_20_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r1.faSpinner);
} }
function EmailComposerComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function EmailComposerComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵtemplate(2, EmailComposerComponent_button_20_fa_icon_2_Template, 1, 1, "fa-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.alertType == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.alertType == 3);
} }
function EmailComposerComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function EmailComposerComponent_ng_template_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(1, " Close ");
    i0.ɵɵelementEnd();
} }
class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
        this.faSpinner = faSpinner;
        this.initEmails = [];
        this.isHtmlBody = false;
        this.onClose = new EventEmitter();
    }
    get bsAlertType() {
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
    }
    ngOnInit() {
        if (this.initEmails && Array.isArray(this.initEmails)) {
            this.emails = [...this.initEmails];
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.emailInputBox.focus(true);
        }, 200);
    }
    // Override
    submit() {
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
        super.submit();
    }
    close() {
        this.onClose.emit();
    }
    static { this.ɵfac = function EmailComposerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmailComposerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 23, consts: [["emailInputBox", ""], ["messageTitleCtrl", "ngModel"], ["textBody", ""], ["closeBtnTmpl", ""], ["emailBody", "", "messageBodyCtrl", "ngModel"], [3, "type", "dismissible", 4, "ngIf"], [1, "mb-4"], [1, "form-label"], ["name", "emailInputs", 3, "ngModelChange", "focusout", "onTextChange", "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder"], [3, "autocompleteItems"], ["for", "messageTitleInput", 1, "form-label"], ["name", "messageTitleInput", "id", "messageTitleInput", "aria-describedby", "messageTitleHelp", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "messageTitleHelp", "class", "form-text text-danger", 4, "ngIf"], ["class", "mb-4", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [3, "type", "dismissible"], ["id", "messageTitleHelp", 1, "form-text", "text-danger"], ["name", "messageBodyInput", "plugins", "advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize", "toolbar", "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help", 1, "form-control", "p-0", "border-0", 3, "ngModelChange", "ngModel", "init"], ["id", "messageBodyHelp", 1, "form-text"], ["for", "messageBodyInput", 1, "form-label"], ["name", "messageBodyInput", "id", "messageBodyInput", "aria-describedby", "messageBodyHelp", "cdkTextareaAutosize", "", "required", "", 1, "form-control", 3, "ngModelChange", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "ngModel"], ["id", "messageBodyHelp", "class", "form-text text-danger", 4, "ngIf"], ["id", "messageBodyHelp", 1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "ms-2", "faSpinner", "", 3, "icon", 4, "ngIf"], ["faSpinner", "", 1, "ms-2", 3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 5);
            i0.ɵɵelementStart(1, "div")(2, "div", 6)(3, "label", 7);
            i0.ɵɵtext(4, "Recipients");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tag-input", 8, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.emails, $event) || (ctx.emails = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onOutOfTagInput($event)); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.textChanged($event)); });
            i0.ɵɵelementStart(7, "tag-input-dropdown", 9);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "label", 10);
            i0.ɵɵtext(12, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 11, 1);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.messageTitle, $event) || (ctx.messageTitle = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, EmailComposerComponent_div_15_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, EmailComposerComponent_div_16_Template, 8, 7, "div", 13)(17, EmailComposerComponent_ng_template_17_Template, 8, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(19, "div", 14);
            i0.ɵɵtemplate(20, EmailComposerComponent_button_20_Template, 3, 2, "button", 15)(21, EmailComposerComponent_ng_template_21_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const messageTitleCtrl_r9 = i0.ɵɵreference(14);
            const textBody_r10 = i0.ɵɵreference(18);
            const closeBtnTmpl_r11 = i0.ɵɵreference(22);
            i0.ɵɵproperty("ngIf", ctx.alertType > 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.emails);
            i0.ɵɵproperty("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(22, _c0$3))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 20, ctx.autocompleteItemsAsync));
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.messageTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !messageTitleCtrl_r9.valid && messageTitleCtrl_r9.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isHtmlBody)("ngIfElse", textBody_r10);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", closeBtnTmpl_r11);
        } }, dependencies: [i1.NgIf, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.RequiredValidator, i1$2.NgModel, i3$1.AlertComponent, i4.FaIconComponent, i5$1.TagInputComponent, i5$1.TagInputDropdown, i6.EditorComponent, i7.CdkTextareaAutosize, i1.AsyncPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0 border-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      cdkTextareaAutosize\n                      [cdkAutosizeMinRows]=\"5\"\n                      [cdkAutosizeMaxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" faSpinner *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [], { initEmails: [{
            type: Input
        }], isHtmlBody: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmailComposerComponent, { className: "EmailComposerComponent", filePath: "lib\\components\\email-composer\\email-composer.component.ts", lineNumber: 11 }); })();

const _c0$2 = [[["", "title", ""]], [["", "body", ""]]];
const _c1 = ["[title]", "[body]"];
let GlobalElementId = 1;
class ExpandableCardComponent {
    constructor() {
        this.isCollapsed = false;
        this.titleClass = '';
        this.faChevronUp = faChevronUp;
        this.faChevronDown = faChevronDown;
        this.faChevronRight = faChevronRight;
        this.elementId = 'expandableCardBody' + GlobalElementId++;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function ExpandableCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExpandableCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "card"], [1, "card-header", 3, "click"], [3, "icon"], [1, "card-body", 3, "id", "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$2);
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵprojection(2);
            i0.ɵɵelement(3, "fa-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed)("aria-controls", ctx.elementId);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("id", ctx.elementId);
            i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
        } }, dependencies: [i1$3.CollapseDirective, i4.FaIconComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], () => [], { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExpandableCardComponent, { className: "ExpandableCardComponent", filePath: "lib\\components\\expandable-card\\expandable-card.component.ts", lineNumber: 11 }); })();

/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
class ObservableModalAbstractComponent {
    constructor() {
        this.result = new Subject();
    }
    closeModal(value) {
        this.result.next(value);
        this.result.complete();
        if (this.modalId) {
            this.bsModalService.hide(this.modalId);
        }
        else {
            this.bsModalRef.hide();
        }
    }
    static { this.ɵfac = function ObservableModalAbstractComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObservableModalAbstractComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObservableModalAbstractComponent, [{
        type: Directive
    }], null, { modalId: [{
            type: Input
        }] }); })();

const _c0$1 = ["searchControlElem"];
function SearchBoxWidgetComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prependText);
} }
function SearchBoxWidgetComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetKeyword(true)); });
    i0.ɵɵelement(1, "fa-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.faTimes);
} }
class SearchBoxWidgetComponent {
    constructor() {
        this.faSearch = faSearch;
        this.faTimes = faTimes;
        this.formClass = 'border rounded my-2 py-4 px-4 bg-light';
        this.inputClass = 'form-control';
        this.prependText = 'Filter';
        this.debounceTime = 500;
        // todo: More inputs
        // Allowing for disabling auto search
        this.minLength = 0;
        this.onSearch = new EventEmitter();
        this._emitEvent = false;
    }
    set emitEvent(v) {
        this._emitEvent = v;
    }
    get emitEvent() {
        const old = this._emitEvent;
        this._emitEvent = false;
        return old;
    }
    ngOnInit() {
        this.searchControl = new UntypedFormControl(this.initKeyword || '');
        this.effectiveKeyword = this.initKeyword;
        this.startObserveSearchKeyword();
    }
    ngOnDestroy() {
        this.stopObserveSearchKeyword();
    }
    // Cancel typed keyword and
    // reset to whatever the previous state
    //
    // This operation does not cause new network request.
    cancelTypedKeyword() {
        this.searchControl.setValue('');
        // Auto focus the search input
        this.searchControlElem.nativeElement.focus();
    }
    // Starts a new round of search
    //
    // This operation causes new network request.
    kickOffSearch() {
        this.effectiveKeyword = this.anyFutureKeyword;
        this.onSearch.emit();
    }
    resetKeyword(emitEvent = false) {
        this.emitEvent = emitEvent;
        this.cancelTypedKeyword();
    }
    // Start to listen for search keyword change
    startObserveSearchKeyword() {
        this._searchKeywordSubr = this.searchControl.valueChanges
            .pipe(debounceTime(this.debounceTime))
            .subscribe(a => {
            a = (a || '').toLowerCase();
            this.anyFutureKeyword = a;
            if (this.minLength > 0 && this.anyFutureKeyword.length >= this.minLength) {
                this.kickOffSearch();
            }
            else if (this.emitEvent) {
                this.kickOffSearch();
            }
        });
    }
    stopObserveSearchKeyword() {
        this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
    }
    static { this.ɵfac = function SearchBoxWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchBoxWidgetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBoxWidgetComponent, selectors: [["polp-bs-search-box-widget"]], viewQuery: function SearchBoxWidgetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchControlElem = _t.first);
        } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 8, vars: 7, consts: [["searchControlElem", ""], [3, "ngSubmit", "ngClass"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 1);
            i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.kickOffSearch()); });
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, SearchBoxWidgetComponent_span_2_Template, 2, 1, "span", 3);
            i0.ɵɵelement(3, "input", 4, 0);
            i0.ɵɵtemplate(5, SearchBoxWidgetComponent_button_5_Template, 2, 1, "button", 5);
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵelement(7, "fa-icon", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.formClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.prependText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.anyFutureKeyword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faSearch);
        } }, dependencies: [i1.NgClass, i1.NgIf, i1$2.ɵNgNoValidate, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.NgForm, i1$2.FormControlDirective, i4.FaIconComponent, i5.AutofocusDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-search-box-widget', template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <span class=\"input-group-text\" *ngIf=\"prependText\">{{prependText}}</span>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                tooltip=\"Cancel\"\n                (click)=\"resetKeyword(true)\">\n            <fa-icon [icon]=\"faTimes\"></fa-icon>                \n        </button>\n        <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                tooltip=\"Search\">\n            <fa-icon [icon]=\"faSearch\"></fa-icon>                \n        </button>\n    </div>\n</form>\n\n" }]
    }], () => [], { initKeyword: [{
            type: Input
        }], formClass: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], prependText: [{
            type: Input
        }], debounceTime: [{
            type: Input
        }], minLength: [{
            type: Input
        }], onSearch: [{
            type: Output
        }], searchControlElem: [{
            type: ViewChild,
            args: ['searchControlElem']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchBoxWidgetComponent, { className: "SearchBoxWidgetComponent", filePath: "lib\\widgets\\search-box-widget\\search-box-widget.component.ts", lineNumber: 12 }); })();

const _c0 = a0 => ({ "active": a0 });
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3)(2, "a", 4);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { const o_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSize(o_r2)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r2.size == o_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r2);
} }
class PageSizeOptionsWidgetComponent {
    constructor() {
        this.initSize = 40;
        this.options = [40, 100, 200, 400, 800];
        this.onChange = new EventEmitter();
        this.size = 40;
    }
    ngOnInit() {
        this.size = this.initSize;
    }
    changeSize(s) {
        this.size = s;
        this.onChange.emit(s);
    }
    static { this.ɵfac = function PageSizeOptionsWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageSizeOptionsWidgetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul", 1);
            i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
        } }, dependencies: [i1.NgClass, i1.NgForOf], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-page-size-options-widget', template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
    }], () => [], { initSize: [{
            type: Input
        }], options: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageSizeOptionsWidgetComponent, { className: "PageSizeOptionsWidgetComponent", filePath: "lib\\widgets\\page-size-options-widget\\page-size-options-widget.component.ts", lineNumber: 8 }); })();

class PolpBsComponentsModule {
    static { this.ɵfac = function PolpBsComponentsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PolpBsComponentsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            AlertModule,
            ModalModule,
            CollapseModule,
            PopoverModule,
            FontAwesomeModule,
            FtAutofocusModule,
            TagInputModule,
            EditorModule,
            TextFieldModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ModalModule,
                    CollapseModule,
                    PopoverModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    TagInputModule,
                    EditorModule,
                    TextFieldModule,
                    // Standalone components
                    NgxMaskDirective,
                    NgxMaskPipe
                ],
                exports: [
                    // Standalone components
                    NgxMaskDirective,
                    NgxMaskPipe,
                    // Library-specific components 
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        CollapseModule,
        PopoverModule,
        FontAwesomeModule,
        FtAutofocusModule,
        TagInputModule,
        EditorModule,
        TextFieldModule,
        // Standalone components
        NgxMaskDirective,
        NgxMaskPipe], exports: [
        // Standalone components
        NgxMaskDirective,
        NgxMaskPipe,
        // Library-specific components 
        BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent] }); })();

class BsModalAssistantService {
    constructor() {
        this._modalId = 0;
    }
    get modalId() {
        this._modalId++;
        return this._modalId;
    }
    static { this.ɵfac = function BsModalAssistantService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BsModalAssistantService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsModalAssistantService, factory: BsModalAssistantService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsModalAssistantService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class CommonModalsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showConfirmAsync(title, innerBody, modalClasses = 'modal-dialog-centered') {
        const modalRef = this._modalService.show(AlertBoxComponent, {
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
    }
    static { this.ɵfac = function CommonModalsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonModalsService)(i0.ɵɵinject(i1$1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonModalsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1$1.BsModalService }], null); })();

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PageSizeOptionsWidgetComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, SearchBoxWidgetComponent, makeValidations, tinymceDefaultInitOptions, tinymceDefaultPlugins, tinymceDefaultToolbar };
//# sourceMappingURL=polpware-bs-components.mjs.map
