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
import * as i3$1 from '@fortawesome/angular-fontawesome';
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
import * as i2$1 from 'ngx-bootstrap/alert';
import { AlertModule } from 'ngx-bootstrap/alert';
import * as i4 from 'ngx-chips';
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
function BreadcrumbComponent_For_2_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_For_2_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_For_2_Case_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function BreadcrumbComponent_For_2_Case_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const item_r1 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r1.action()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_For_2_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.title);
} }
function BreadcrumbComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 0);
    i0.ɵɵconditionalCreate(1, BreadcrumbComponent_For_2_Case_1_Template, 2, 2, "a", 2)(2, BreadcrumbComponent_For_2_Case_2_Template, 2, 4, "a", 3)(3, BreadcrumbComponent_For_2_Case_3_Template, 2, 1, "a")(4, BreadcrumbComponent_For_2_Case_4_Template, 2, 1, "a");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_11_0;
    const item_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.inactiveItemClasses);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_11_0 = item_r1.kind) === 1 ? 1 : tmp_11_0 === 2 ? 2 : tmp_11_0 === 3 ? 3 : 4);
} }
function BreadcrumbComponent_Conditional_3_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", item_r4.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_Conditional_3_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r4.routerLink)("queryParams", item_r4.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_Conditional_3_Case_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function BreadcrumbComponent_Conditional_3_Case_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(item_r4.action()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_Conditional_3_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BreadcrumbComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 1);
    i0.ɵɵconditionalCreate(1, BreadcrumbComponent_Conditional_3_Case_1_Template, 2, 2, "a", 2)(2, BreadcrumbComponent_Conditional_3_Case_2_Template, 2, 4, "a", 3)(3, BreadcrumbComponent_Conditional_3_Case_3_Template, 2, 1, "a")(4, BreadcrumbComponent_Conditional_3_Case_4_Template, 2, 1, "a");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeItemClasses);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_3_0 = ctx.kind) === 1 ? 1 : tmp_3_0 === 2 ? 2 : tmp_3_0 === 3 ? 3 : 4);
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, standalone: false, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[3, "ngClass"], ["aria-current", "page", 3, "ngClass"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 0);
            i0.ɵɵrepeaterCreate(1, BreadcrumbComponent_For_2_Template, 5, 2, "li", 0, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵconditionalCreate(3, BreadcrumbComponent_Conditional_3_Template, 5, 2, "li", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵproperty("ngClass", ctx.listClasses);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.interItems);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_2_0 = ctx.activeItem) ? 3 : -1, tmp_2_0);
        } }, dependencies: [i1.NgClass, i2.RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-breadcrumb', standalone: false, template: "<ol [ngClass]=\"listClasses\">\n  @for (item of interItems; track item) {\n    <li [ngClass]=\"inactiveItemClasses\">\n      @switch (item.kind) {\n        @case (1) {\n          <a [href]=\"item.url\">{{item.title}}</a>\n        }\n        @case (2) {\n          <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\">{{item.title}}</a>\n        }\n        @case (3) {\n          <a (click)=\"item.action()\">{{item.title}}</a>\n        }\n        @default {\n          <a>{{item.title}}</a>\n        }\n      }\n    </li>\n  }\n  @if (activeItem; as item) {\n    <li [ngClass]=\"activeItemClasses\" aria-current=\"page\">\n      @switch (item.kind) {\n        @case (1) {\n          <a [href]=\"item.url\">{{item.title}}</a>\n        }\n        @case (2) {\n          <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\">{{item.title}}</a>\n        }\n        @case (3) {\n          <a (click)=\"item.action()\">{{item.title}}</a>\n        }\n        @default {\n          <a>{{item.title}}</a>\n        }\n      }\n    </li>\n  }\n</ol>\n" }]
    }], null, { items: [{
            type: Input
        }], listClasses: [{
            type: Input
        }], inactiveItemClasses: [{
            type: Input
        }], activeItemClasses: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "lib/components/breadcrumb/breadcrumb.component.ts", lineNumber: 19 }); })();

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

function AlertBoxComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function AlertBoxComponent_Conditional_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
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
            i0.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, i0.ɵɵresolveWindow);
        } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, standalone: false, decls: 10, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", 1, "btn", "me-2", 3, "ngClass"], ["type", "button", 1, "btn", 3, "click", "ngClass"], ["type", "button", 1, "btn", "me-2", 3, "click", "ngClass"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵconditionalCreate(7, AlertBoxComponent_Conditional_7_Template, 2, 2, "button", 6);
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
            i0.ɵɵconditional(!ctx.hideNoBtn ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.yesBtnClasses);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        } }, dependencies: [i1.NgClass], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBoxComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-alert-box', standalone: false, template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div [innerHtml]=\"innerBody\">\n  </div>\n</div>\n<div class=\"modal-footer\">\n  @if (!hideNoBtn) {\n    <button type=\"button\" class=\"btn me-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\">\n      {{noBtnLabel}}\n    </button>\n  }\n  <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n    {{yesBtnLabel}}\n  </button>\n</div>\n\n\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertBoxComponent, { className: "AlertBoxComponent", filePath: "lib/components/alert-box/alert-box.component.ts", lineNumber: 26 }); })();

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

function PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_5_ng_template_2_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate1_r2 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate1_r2)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "input", 21);
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵtext(3);
    i0.ɵɵconditionalCreate(4, PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_4_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PromptFormComponent_For_2_Conditional_1_Case_0_Conditional_5_Template, 4, 3, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("name", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 5 : -1);
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 27);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_0_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate2_r4 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate2_r4)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelement(1, "input", 29);
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ɵ$index_46_r6 = ctx.$index;
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("value", i0.ɵɵinterpolate(o_r5.value))("name", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId + ɵ$index_46_r6));
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId + ɵ$index_46_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r5.label, " ");
} }
function PromptFormComponent_For_2_Conditional_1_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_0_Template, 3, 2, "label", 27);
    i0.ɵɵconditionalCreate(1, PromptFormComponent_For_2_Conditional_1_Case_1_Conditional_1_Template, 4, 3, "span", 24);
    i0.ɵɵrepeaterCreate(2, PromptFormComponent_For_2_Conditional_1_Case_1_For_3_Template, 4, 11, "div", 28, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵconditional(elem_r1.label ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(elem_r1.options);
} }
function PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate3_r7 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate3_r7)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_2_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", i0.ɵɵinterpolate(o_r8.value));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r8.label, " ");
} }
function PromptFormComponent_For_2_Conditional_1_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_1_Case_2_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "select", 31)(5, "option", 32);
    i0.ɵɵtext(6, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, PromptFormComponent_For_2_Conditional_1_Case_2_For_8_Template, 2, 3, "option", 33, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey))("autofocus", ɵ$index_3_r10 === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(elem_r1.options);
} }
function PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate4_r11 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate4_r11)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_1_Case_3_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "textarea", 34);
    i0.ɵɵtext(5, "            ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "true"))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate5_r13 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate5_r13)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_1_Case_4_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵelement(5, "input", 36);
    i0.ɵɵelementStart(6, "button", 37);
    i0.ɵɵlistener("click", function PromptFormComponent_For_2_Conditional_1_Case_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const elem_r1 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r1.visible = !elem_r1.visible); });
    i0.ɵɵelement(7, "fa-icon", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.visible ? "text" : "password"))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey))("autofocus", ɵ$index_3_r10 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r1.visible ? ctx_r2.faEyeSlash : ctx_r2.faEye);
} }
function PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate6_r14 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate6_r14)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_1_Case_5_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵelement(5, "editor", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("init", ctx_r2.editorOptions)("plugins", ctx_r2.editorPlugins)("toolbar", ctx_r2.editorToolbar);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate7_r15 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate7_r15)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 40);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.category))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "false"))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 41);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(4);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.category))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "false"))("mask", i0.ɵɵinterpolate(elem_r1.maskSettings.mask))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_5_Conditional_0_Template, 1, 15, "input", 41);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵconditional(elem_r1.maskSettings ? 0 : -1);
} }
function PromptFormComponent_For_2_Conditional_1_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵconditionalCreate(4, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_4_Template, 1, 13, "input", 40)(5, PromptFormComponent_For_2_Conditional_1_Case_6_Conditional_5_Template, 1, 1);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!elem_r1.maskSettings ? 4 : 5);
} }
function PromptFormComponent_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PromptFormComponent_For_2_Conditional_1_Case_0_Template, 6, 11, "div", 20)(1, PromptFormComponent_For_2_Conditional_1_Case_1_Template, 4, 2)(2, PromptFormComponent_For_2_Conditional_1_Case_2_Template, 9, 14)(3, PromptFormComponent_For_2_Conditional_1_Case_3_Template, 6, 16)(4, PromptFormComponent_For_2_Conditional_1_Case_4_Template, 8, 17)(5, PromptFormComponent_For_2_Conditional_1_Case_5_Template, 6, 12)(6, PromptFormComponent_For_2_Conditional_1_Case_6_Template, 6, 6);
} if (rf & 2) {
    let tmp_12_0;
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵconditional((tmp_12_0 = elem_r1.category) === "checkbox" ? 0 : tmp_12_0 === "radio" ? 1 : tmp_12_0 === "select" ? 2 : tmp_12_0 === "textarea" ? 3 : tmp_12_0 === "password" ? 4 : tmp_12_0 === "html" ? 5 : 6);
} }
function PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_5_ng_template_2_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate8_r16 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate8_r16)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "input", 21);
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵtext(3);
    i0.ɵɵconditionalCreate(4, PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_4_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PromptFormComponent_For_2_Conditional_2_Case_0_Conditional_5_Template, 4, 3, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("name", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 5 : -1);
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 27);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_0_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate9_r17 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate9_r17)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelement(1, "input", 29);
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r18 = ctx.$implicit;
    const ɵ$index_210_r19 = ctx.$index;
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("value", i0.ɵɵinterpolate(o_r18.value))("name", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId + ɵ$index_210_r19));
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId + ɵ$index_210_r19));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r18.label, " ");
} }
function PromptFormComponent_For_2_Conditional_2_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_0_Template, 3, 2, "label", 27);
    i0.ɵɵconditionalCreate(1, PromptFormComponent_For_2_Conditional_2_Case_1_Conditional_1_Template, 4, 3, "span", 24);
    i0.ɵɵrepeaterCreate(2, PromptFormComponent_For_2_Conditional_2_Case_1_For_3_Template, 4, 11, "div", 28, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵconditional(elem_r1.label ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(elem_r1.options);
} }
function PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate10_r20 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate10_r20)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_2_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", i0.ɵɵinterpolate(o_r21.value));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", o_r21.label, " ");
} }
function PromptFormComponent_For_2_Conditional_2_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_2_Case_2_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "select", 31)(5, "option", 32);
    i0.ɵɵtext(6, "Choose ...");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, PromptFormComponent_For_2_Conditional_2_Case_2_For_8_Template, 2, 3, "option", 33, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey || "off"))("autofocus", ɵ$index_3_r10 === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(elem_r1.options);
} }
function PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate11_r22 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate11_r22)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_2_Case_3_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "textarea", 34);
    i0.ɵɵtext(5, "            ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey || "off"))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "true"))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate12_r24 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate12_r24)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_2_Case_4_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵelement(5, "input", 36);
    i0.ɵɵelementStart(6, "button", 37);
    i0.ɵɵlistener("click", function PromptFormComponent_For_2_Conditional_2_Case_4_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r23); const elem_r1 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(elem_r1.visible = !elem_r1.visible); });
    i0.ɵɵelement(7, "fa-icon", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.visible ? "text" : "password"))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey || "off"))("autofocus", ɵ$index_3_r10 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", elem_r1.visible ? ctx_r2.faEyeSlash : ctx_r2.faEye);
} }
function PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate13_r25 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate13_r25)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_2_Case_5_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵelement(5, "editor", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("init", ctx_r2.editorOptions)("plugins", ctx_r2.editorPlugins)("toolbar", ctx_r2.editorToolbar);
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1, " * ");
    i0.ɵɵelementEnd();
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("innerHtml", elem_r1.helpInfo.content, i0.ɵɵsanitizeHtml);
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵelement(1, "fa-icon", 25);
    i0.ɵɵtemplate(2, PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_3_ng_template_2_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const popTemplate14_r26 = i0.ɵɵreference(3);
    const elem_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r2.faQuestionCircle)("popover", popTemplate14_r26)("popoverTitle", elem_r1.helpInfo.title);
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 42);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.category))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey || "off"))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "false"))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 43);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    const elem_r1 = ctx_r8.$implicit;
    const ɵ$index_3_r10 = ctx_r8.$index;
    i0.ɵɵproperty("formControlName", i0.ɵɵinterpolate(elem_r1.name))("id", i0.ɵɵinterpolate(elem_r1.fieldId))("name", i0.ɵɵinterpolate(elem_r1.name))("type", i0.ɵɵinterpolate(elem_r1.category))("autocomplete", i0.ɵɵinterpolate(elem_r1.autocompleteKey || "off"))("spellcheck", i0.ɵɵinterpolate(elem_r1.spellcheck || "false"))("mask", i0.ɵɵinterpolate(elem_r1.maskSettings.mask))("autofocus", ɵ$index_3_r10 === 0);
} }
function PromptFormComponent_For_2_Conditional_2_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵconditionalCreate(2, PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_2_Template, 2, 0, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_3_Template, 4, 3, "span", 24);
    i0.ɵɵconditionalCreate(4, PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_4_Template, 1, 13, "input", 42)(5, PromptFormComponent_For_2_Conditional_2_Case_6_Conditional_5_Template, 1, 15, "input", 43);
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("for", i0.ɵɵinterpolate(elem_r1.fieldId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.hasReqInd ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(elem_r1.helpInfo ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!elem_r1.maskSettings ? 4 : 5);
} }
function PromptFormComponent_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PromptFormComponent_For_2_Conditional_2_Case_0_Template, 6, 11, "div", 20)(1, PromptFormComponent_For_2_Conditional_2_Case_1_Template, 4, 2)(2, PromptFormComponent_For_2_Conditional_2_Case_2_Template, 9, 14)(3, PromptFormComponent_For_2_Conditional_2_Case_3_Template, 6, 16)(4, PromptFormComponent_For_2_Conditional_2_Case_4_Template, 8, 17)(5, PromptFormComponent_For_2_Conditional_2_Case_5_Template, 6, 12)(6, PromptFormComponent_For_2_Conditional_2_Case_6_Template, 6, 6);
} if (rf & 2) {
    let tmp_12_0;
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵconditional((tmp_12_0 = elem_r1.category) === "checkbox" ? 0 : tmp_12_0 === "radio" ? 1 : tmp_12_0 === "select" ? 2 : tmp_12_0 === "textarea" ? 3 : tmp_12_0 === "password" ? 4 : tmp_12_0 === "html" ? 5 : 6);
} }
function PromptFormComponent_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.required.message, " ");
} }
function PromptFormComponent_For_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.min.message, " ");
} }
function PromptFormComponent_For_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.max.message, " ");
} }
function PromptFormComponent_For_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.pattern.message, " ");
} }
function PromptFormComponent_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.minLength.message, " ");
} }
function PromptFormComponent_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.maxLength.message, " ");
} }
function PromptFormComponent_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elem_r1.validators.url.message, " ");
} }
function PromptFormComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵconditionalCreate(1, PromptFormComponent_For_2_Conditional_1_Template, 7, 1)(2, PromptFormComponent_For_2_Conditional_2_Template, 7, 1);
    i0.ɵɵconditionalCreate(3, PromptFormComponent_For_2_Conditional_3_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(4, PromptFormComponent_For_2_Conditional_4_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(5, PromptFormComponent_For_2_Conditional_5_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(6, PromptFormComponent_For_2_Conditional_6_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(7, PromptFormComponent_For_2_Conditional_7_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(8, PromptFormComponent_For_2_Conditional_8_Template, 2, 1, "div", 19);
    i0.ɵɵconditionalCreate(9, PromptFormComponent_For_2_Conditional_9_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.autocomplete ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.required) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.min) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.max) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.pattern) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.minlength) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.maxlength) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((ctx_r2.form.controls[elem_r1.name].errors == null ? null : ctx_r2.form.controls[elem_r1.name].errors.url) && (ctx_r2.form.touched || ctx_r2.form.dirty) ? 9 : -1);
} }
function PromptFormComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function PromptFormComponent_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.cancelBtnClasses);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.cancelBtnTxt, " ");
} }
function PromptFormComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function PromptFormComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submit()); });
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
            i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, i0.ɵɵresolveWindow);
        } }, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt", autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [["popTemplate1", ""], ["popTemplate2", ""], ["popTemplate3", ""], ["popTemplate4", ""], ["popTemplate5", ""], ["popTemplate6", ""], ["popTemplate7", ""], ["popTemplate8", ""], ["popTemplate9", ""], ["popTemplate10", ""], ["popTemplate11", ""], ["popTemplate12", ""], ["popTemplate13", ""], ["popTemplate14", ""], ["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], [1, "mb-3"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "me-2", 3, "ngClass"], ["type", "button", 1, "btn", 3, "ngClass", "disabled"], [1, "form-text", "text-danger"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], [1, "text-danger"], [1, "ms-1"], ["container", "body", 3, "icon", "popover", "popoverTitle"], [3, "innerHtml"], [1, "form-label"], [1, "form-check", "mb-2"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [1, "form-label", 3, "for"], [1, "form-control", 3, "formControlName", "id", "name", "autocomplete", "autofocus"], ["selected", ""], [3, "value"], ["cdkTextareaAutosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autocomplete", "spellcheck", "autofocus"], [1, "input-group"], ["spellcheck", "false", 1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "autocomplete"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], [1, "form-control", "p-0", "border-0", 3, "formControlName", "id", "init", "plugins", "toolbar"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", "mask"], ["type", "button", 1, "btn", "me-2", 3, "click", "ngClass"], ["type", "button", 1, "btn", 3, "click", "ngClass", "disabled"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 14);
            i0.ɵɵrepeaterCreate(1, PromptFormComponent_For_2_Template, 10, 8, "div", 15, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementStart(3, "div", 16);
            i0.ɵɵconditionalCreate(4, PromptFormComponent_Conditional_4_Template, 2, 2, "button", 17);
            i0.ɵɵconditionalCreate(5, PromptFormComponent_Conditional_5_Template, 2, 3, "button", 18);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("name", i0.ɵɵinterpolate(ctx.name))("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.extFields);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.hideCancelBtn ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.hideSubmitBtn ? 5 : -1);
        } }, dependencies: [i1.NgClass, i1$2.ɵNgNoValidate, i1$2.NgSelectOption, i1$2.ɵNgSelectMultipleOption, i1$2.DefaultValueAccessor, i1$2.CheckboxControlValueAccessor, i1$2.SelectControlValueAccessor, i1$2.RadioControlValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$2.FormControlName, i3.PopoverDirective, i3$1.FaIconComponent, i5.AutofocusDirective, i6.EditorComponent, i7.CdkTextareaAutosize, i8.NgxMaskDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptFormComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-form', inputs: [
                    'hideCancelBtn',
                    'hideSubmitBtn',
                    'submitBtnTxt',
                    'cancelBtnTxt'
                ], standalone: false, template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n  @for (elem of extFields; track elem; let isFirst = $first) {\n    <div class=\"mb-3\">\n      @if (autocomplete) {\n        @switch (elem.category) {\n          <!-- Checkbox -->\n          @case ('checkbox') {\n            <div class=\"form-check\">\n              <input formControlName=\"{{elem.name}}\"\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                name=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\">\n              <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                {{elem.label}}\n                @if (elem.hasReqInd) {\n                  <span class=\"text-danger\">\n                    *\n                  </span>\n                }\n              </label>\n              @if (elem.helpInfo) {\n                <span class=\"ms-1\">\n                  <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate1\"\n                    [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                  </fa-icon>\n                  <ng-template #popTemplate1><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n                </span>\n              }\n            </div>\n          }\n          <!-- Radio -->\n          @case ('radio') {\n            @if (elem.label) {\n              <label class=\"form-label\">\n                {{elem.label}}\n                @if (elem.hasReqInd) {\n                  <span class=\"text-danger\">\n                    *\n                  </span>\n                }\n              </label>\n            }\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate2\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate2><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            @for (o of elem.options; track o; let i = $index) {\n              <div class=\"form-check mb-2\">\n                <input formControlName=\"{{elem.name}}\"\n                  class=\"form-check-input\"\n                  type=\"radio\"\n                  value=\"{{o.value}}\"\n                  name=\"{{elem.name}}\"\n                  id=\"{{elem.fieldId + i}}\">\n                <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                  {{o.label}}\n                </label>\n              </div>\n            }\n          }\n          <!-- Select -->\n          @case ('select') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate3\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate3><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <select formControlName=\"{{elem.name}}\"\n              id=\"{{elem.fieldId}}\"\n              name=\"{{elem.name}}\"\n              autocomplete=\"{{elem.autocompleteKey}}\"\n              [autofocus]=\"isFirst\"\n              class=\"form-control\">\n              <option selected>Choose ...</option>\n              @for (o of elem.options; track o) {\n                <option value=\"{{o.value}}\">\n                  {{o.label}}\n                </option>\n              }\n            </select>\n          }\n          <!-- textarea -->\n          @case ('textarea') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate4\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate4><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <textarea formControlName=\"{{elem.name}}\"\n              id=\"{{elem.fieldId}}\"\n              name=\"{{elem.name}}\"\n              autocomplete=\"{{elem.autocompleteKey}}\"\n              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n              cdkTextareaAutosize\n              [autofocus]=\"isFirst\"\n              class=\"form-control\">\n            </textarea>\n          }\n          <!-- password -->\n          @case ('password') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate5\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate5><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <div class=\"input-group\">\n              <input formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                name=\"{{elem.name}}\"\n                type=\"{{elem.visible ? 'text' : 'password'}}\"\n                spellcheck=\"false\"\n                [autofocus]=\"isFirst\"\n                autocomplete=\"{{elem.autocompleteKey}}\"\n                class=\"form-control\" />\n              <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                (click)=\"elem.visible = !elem.visible\">\n                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                </fa-icon>\n              </button>\n            </div>\n          }\n          <!-- HTML -->\n          @case ('html') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate6\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate6><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <div class=\"input-group\">\n              <editor formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                class=\"form-control p-0 border-0\"\n                [init]=\"editorOptions\"\n                [plugins]=\"editorPlugins\"\n                [toolbar]=\"editorToolbar\"\n                >\n              </editor>\n            </div>\n          }\n          <!-- Otherwise -->\n          @default {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate7\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate7><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            @if (!elem.maskSettings) {\n              <input\n                formControlName=\"{{elem.name}}\"\n                autocomplete=\"{{elem.autocompleteKey}}\"\n                id=\"{{elem.fieldId}}\"\n                name=\"{{elem.name}}\"\n                type=\"{{elem.category}}\"\n                spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                [autofocus]=\"isFirst\"\n                class=\"form-control\" />\n            } @else {\n              @if (elem.maskSettings) {\n                <input\n                  formControlName=\"{{elem.name}}\"\n                  autocomplete=\"{{elem.autocompleteKey}}\"\n                  id=\"{{elem.fieldId}}\"\n                  name=\"{{elem.name}}\"\n                  type=\"{{elem.category}}\"\n                  spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                  [autofocus]=\"isFirst\"\n                  mask=\"{{elem.maskSettings.mask}}\"\n                  class=\"form-control\" />\n              }\n            }\n          }\n        }\n      } @else {\n        @switch (elem.category) {\n          <!-- Checkbox -->\n          @case ('checkbox') {\n            <div class=\"form-check\">\n              <input formControlName=\"{{elem.name}}\"\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                name=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\">\n              <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                {{elem.label}}\n                @if (elem.hasReqInd) {\n                  <span class=\"text-danger\">\n                    *\n                  </span>\n                }\n              </label>\n              @if (elem.helpInfo) {\n                <span class=\"ms-1\">\n                  <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate8\"\n                    [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                  </fa-icon>\n                  <ng-template #popTemplate8>\n                    <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                  </ng-template>\n                </span>\n              }\n            </div>\n          }\n          <!-- Radio -->\n          @case ('radio') {\n            @if (elem.label) {\n              <label class=\"form-label\">\n                {{elem.label}}\n                @if (elem.hasReqInd) {\n                  <span class=\"text-danger\">\n                    *\n                  </span>\n                }\n              </label>\n            }\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate9\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate9>\n                  <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                </ng-template>\n              </span>\n            }\n            @for (o of elem.options; track o; let i = $index) {\n              <div class=\"form-check mb-2\">\n                <input formControlName=\"{{elem.name}}\"\n                  class=\"form-check-input\"\n                  type=\"radio\"\n                  value=\"{{o.value}}\"\n                  name=\"{{elem.name}}\"\n                  id=\"{{elem.fieldId + i}}\">\n                <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                  {{o.label}}\n                </label>\n              </div>\n            }\n          }\n          <!-- Select -->\n          @case ('select') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate10\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate10><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <select formControlName=\"{{elem.name}}\"\n              id=\"{{elem.fieldId}}\"\n              name=\"{{elem.name}}\"\n              autocomplete=\"{{elem.autocompleteKey || 'off'}}\"\n              [autofocus]=\"isFirst\"\n              class=\"form-control\">\n              <option selected>Choose ...</option>\n              @for (o of elem.options; track o) {\n                <option value=\"{{o.value}}\">\n                  {{o.label}}\n                </option>\n              }\n            </select>\n          }\n          <!-- textarea -->\n          @case ('textarea') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate11\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate11><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <textarea formControlName=\"{{elem.name}}\"\n              id=\"{{elem.fieldId}}\"\n              name=\"{{elem.name}}\"\n              autocomplete=\"{{elem.autocompleteKey || 'off'}}\"\n              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n              cdkTextareaAutosize\n              [autofocus]=\"isFirst\"\n              class=\"form-control\">\n            </textarea>\n          }\n          <!-- password -->\n          @case ('password') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate12\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate12><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <div class=\"input-group\">\n              <input formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                name=\"{{elem.name}}\"\n                type=\"{{elem.visible ? 'text' : 'password'}}\"\n                spellcheck=\"false\"\n                [autofocus]=\"isFirst\"\n                autocomplete=\"{{elem.autocompleteKey || 'off'}}\"\n                class=\"form-control\" />\n              <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                (click)=\"elem.visible = !elem.visible\">\n                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                </fa-icon>\n              </button>\n            </div>\n          }\n          <!-- HTML -->\n          @case ('html') {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate13\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate13><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            <div class=\"input-group\">\n              <editor formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                class=\"form-control p-0 border-0\"\n                [init]=\"editorOptions\"\n                [plugins]=\"editorPlugins\"\n                [toolbar]=\"editorToolbar\"\n                >\n              </editor>\n            </div>\n          }\n          <!-- Others -->\n          @default {\n            <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n              {{elem.label}}\n              @if (elem.hasReqInd) {\n                <span class=\"text-danger\">\n                  *\n                </span>\n              }\n            </label>\n            @if (elem.helpInfo) {\n              <span class=\"ms-1\">\n                <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate14\"\n                  [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                </fa-icon>\n                <ng-template #popTemplate14><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>\n              </span>\n            }\n            @if (!elem.maskSettings) {\n              <input\n                formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                name=\"{{elem.name}}\"\n                type=\"{{elem.category}}\"\n                autocomplete=\"{{elem.autocompleteKey || 'off'}}\"\n                spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                [autofocus]=\"isFirst\"\n                class=\"form-control\" />\n            } @else {\n              <input formControlName=\"{{elem.name}}\"\n                id=\"{{elem.fieldId}}\"\n                name=\"{{elem.name}}\"\n                type=\"{{elem.category}}\"\n                autocomplete=\"{{elem.autocompleteKey || 'off'}}\"\n                spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                [autofocus]=\"isFirst\"\n                mask=\"{{elem.maskSettings.mask}}\"\n                class=\"form-control\" />\n            }\n          }\n        }\n      }\n      @if (form.controls[elem.name].errors?.required && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.required.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.min && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.min.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.max && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.max.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.pattern.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.minLength.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.maxLength.message}}\n        </div>\n      }\n      @if (form.controls[elem.name].errors?.url && (form.touched || form.dirty)) {\n        <div class=\"form-text text-danger\">\n          {{elem.validators.url.message}}\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"d-flex justify-content-end\">\n    @if (!hideCancelBtn) {\n      <button\n        type=\"button\" class=\"btn me-2\"\n        [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n        {{cancelBtnTxt}}\n      </button>\n    }\n    @if (!hideSubmitBtn) {\n      <button\n        type=\"button\" class=\"btn\"\n        [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n        {{submitBtnTxt}}\n      </button>\n    }\n  </div>\n\n</form>\n\n\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PromptFormComponent, { className: "PromptFormComponent", filePath: "lib/components/prompt-form/prompt-form.component.ts", lineNumber: 69 }); })();

function PromptModalComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function PromptModalComponent_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, standalone: false, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [3, "innerHtml"], [3, "onCancel", "onSave", "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, PromptModalComponent_Conditional_3_Template, 1, 0, "button", 2);
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
            i0.ɵɵconditional(!ctx.hideCloseBtn ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance();
            i0.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        } }, dependencies: [PromptFormComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-prompt-modal', standalone: false, template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  @if (!hideCloseBtn) {\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n  }\n</div>\n<div class=\"modal-body\">\n  <div [innerHtml]=\"innerBody\">\n  </div>\n  <polp-bs-prompt-form [fields]=\"fields\"\n    [hideCancelBtn]=\"hideCancelBtn\"\n    [hideSubmitBtn]=\"hideConfirmBtn\"\n    [cancelBtnTxt]=\"cancelBtnLabel\"\n    [submitBtnTxt]=\"confirmBtnLabel\"\n    [cancelBtnClasses]=\"cancelBtnClasses\"\n    [submitBtnClasses]=\"confirmBtnClasses\"\n    [autocomplete]=\"autocomplete\"\n    [enableEnter]=\"enableEnter\"\n    (onCancel)=\"close()\"\n    (onSave)=\"confirm($event)\">\n  </polp-bs-prompt-form>\n</div>\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PromptModalComponent, { className: "PromptModalComponent", filePath: "lib/components/prompt-modal/prompt-modal.component.ts", lineNumber: 30 }); })();

const _c0$3 = () => [32, 44, 58, 59];
const _c1$1 = () => [".*"];
const _c2 = (a0, a1) => ({ htmlAllowedTags: a0, htmlAllowedAttrs: a1, extended_valid_elements: "*[.*]", draggable_modal: true });
function EmailComposerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "alert", 3)(1, "p");
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
function EmailComposerComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "editor", 14, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Conditional_16_Template_editor_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 15);
    i0.ɵɵtext(7, " Body message is required. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction2(4, _c2, i0.ɵɵpureFunction0(2, _c1$1), i0.ɵɵpureFunction0(3, _c1$1)));
} }
function EmailComposerComponent_Conditional_17_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1, " Body message is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 16);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 17, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Conditional_17_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(6, "      ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, EmailComposerComponent_Conditional_17_Conditional_7_Template, 2, 0, "div", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const messageBodyCtrl_r6 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkAutosizeMinRows", 5)("cdkAutosizeMaxRows", 10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(!messageBodyCtrl_r6.valid && messageBodyCtrl_r6.touched ? 7 : -1);
} }
function EmailComposerComponent_Conditional_19_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r1.faSpinner);
} }
function EmailComposerComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function EmailComposerComponent_Conditional_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵconditionalCreate(2, EmailComposerComponent_Conditional_19_Conditional_2_Template, 1, 1, "fa-icon", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.alertType == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.alertType == 3 ? 2 : -1);
} }
function EmailComposerComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function EmailComposerComponent_Conditional_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 21, consts: [["emailInputBox", ""], ["messageTitleCtrl", "ngModel"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [3, "type", "dismissible"], [1, "mb-4"], [1, "form-label"], ["name", "emailInputs", 3, "ngModelChange", "focusout", "onTextChange", "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder"], [3, "autocompleteItems"], ["for", "messageTitleInput", 1, "form-label"], ["name", "messageTitleInput", "id", "messageTitleInput", "aria-describedby", "messageTitleHelp", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "messageTitleHelp", 1, "form-text", "text-danger"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary"], ["name", "messageBodyInput", "plugins", "advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize", "toolbar", "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help", 1, "form-control", "p-0", "border-0", 3, "ngModelChange", "ngModel", "init"], ["id", "messageBodyHelp", 1, "form-text"], ["for", "messageBodyInput", 1, "form-label"], ["name", "messageBodyInput", "id", "messageBodyInput", "aria-describedby", "messageBodyHelp", "cdkTextareaAutosize", "", "required", "", 1, "form-control", 3, "ngModelChange", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "ngModel"], ["id", "messageBodyHelp", 1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["faSpinner", "", 1, "ms-2", 3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵconditionalCreate(0, EmailComposerComponent_Conditional_0_Template, 3, 3, "alert", 3);
            i0.ɵɵelementStart(1, "div")(2, "div", 4)(3, "label", 5);
            i0.ɵɵtext(4, "Recipients");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tag-input", 6, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.emails, $event) || (ctx.emails = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
            i0.ɵɵelementStart(7, "tag-input-dropdown", 7);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 4)(11, "label", 8);
            i0.ɵɵtext(12, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 9, 1);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.messageTitle, $event) || (ctx.messageTitle = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(15, EmailComposerComponent_Conditional_15_Template, 2, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, EmailComposerComponent_Conditional_16_Template, 8, 7, "div", 4)(17, EmailComposerComponent_Conditional_17_Template, 8, 4, "div", 4);
            i0.ɵɵelementStart(18, "div", 11);
            i0.ɵɵconditionalCreate(19, EmailComposerComponent_Conditional_19_Template, 3, 2, "button", 12)(20, EmailComposerComponent_Conditional_20_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const messageTitleCtrl_r9 = i0.ɵɵreference(14);
            i0.ɵɵconditional(ctx.alertType > 0 ? 0 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.emails);
            i0.ɵɵproperty("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(20, _c0$3))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 18, ctx.autocompleteItemsAsync));
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.messageTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!messageTitleCtrl_r9.valid && messageTitleCtrl_r9.touched ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isHtmlBody ? 16 : 17);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.showCloseBtn ? 19 : 20);
        } }, dependencies: [i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.RequiredValidator, i1$2.NgModel, i2$1.AlertComponent, i3$1.FaIconComponent, i4.TagInputComponent, i4.TagInputDropdown, i6.EditorComponent, i7.CdkTextareaAutosize, i1.AsyncPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{ selector: 'polp-email-composer', standalone: false, template: "@if (alertType > 0) {\n  <alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\">\n    <p>\n      {{alertMessage}}\n    </p>\n  </alert>\n}\n\n<div>\n  <div class=\"mb-4\">\n    <label class=\"form-label\">Recipients</label>\n    <tag-input [(ngModel)]=\"emails\" #emailInputBox\n      name=\"emailInputs\"\n      (focusout)=\"onOutOfTagInput($event)\"\n      (onTextChange)=\"textChanged($event)\"\n      [addOnPaste]=\"true\"\n      [modelAsStrings]=\"true\"\n      [trimTags]=\"true\"\n      [editable]=\"true\"\n      [errorMessages]=\"errorMessages\"\n      [validators]=\"validators\"\n      [secondaryPlaceholder]=\"'Emails'\"\n      [separatorKeyCodes]=\"[32,44,58,59]\"\n      [displayBy]=\"'display'\"\n      [identifyBy]=\"'value'\"\n      [placeholder]=\"'+ Email'\">\n      <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n        <ng-template let-item=\"item\" let-index=\"index\">\n          {{ item.display }}\n        </ng-template>\n      </tag-input-dropdown>\n    </tag-input>\n  </div>\n\n  <div class=\"mb-4\">\n    <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n    <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n      class=\"form-control\"\n      [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n    @if (!messageTitleCtrl.valid && messageTitleCtrl.touched) {\n      <div id=\"messageTitleHelp\"\n        class=\"form-text text-danger\">\n        Subject is required.\n      </div>\n    }\n  </div>\n\n  @if (isHtmlBody) {\n    <div class=\"mb-4\">\n      <label class=\"form-label\">Message</label>\n      <editor [(ngModel)]=\"messageBody\"\n        #emailBody\n        #messageBodyCtrl=\"ngModel\"\n        name=\"messageBodyInput\"\n        class=\"form-control p-0 border-0\"\n        [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n        plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n        toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n      </editor>\n      <div id=\"messageBodyHelp\" class=\"form-text\">\n        Body message is required.\n      </div>\n    </div>\n  } @else {\n    <div class=\"mb-4\">\n      <label for=\"messageBodyInput\" class=\"form-label\">Message</label>\n      <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n        class=\"form-control\"\n        #emailBody\n        cdkTextareaAutosize\n        [cdkAutosizeMinRows]=\"5\"\n        [cdkAutosizeMaxRows]=\"10\"\n        [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n      </textarea>\n      @if (!messageBodyCtrl.valid && messageBodyCtrl.touched) {\n        <div id=\"messageBodyHelp\"\n          class=\"form-text text-danger\">\n          Body message is required.\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"d-flex justify-content-end mb-4\">\n    @if (!showCloseBtn) {\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n        >\n        Submit\n        @if (alertType == 3) {\n          <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" faSpinner></fa-icon>\n        }\n      </button>\n    } @else {\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n        Close\n      </button>\n    }\n  </div>\n</div>\n" }]
    }], () => [], { initEmails: [{
            type: Input
        }], isHtmlBody: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmailComposerComponent, { className: "EmailComposerComponent", filePath: "lib/components/email-composer/email-composer.component.ts", lineNumber: 12 }); })();

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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, standalone: false, ngContentSelectors: _c1, decls: 6, vars: 7, consts: [[1, "card"], [1, "card-header", 3, "click"], [3, "icon"], [1, "card-body", 3, "id", "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("id", i0.ɵɵinterpolate(ctx.elementId))("collapse", ctx.isCollapsed)("isAnimated", true);
        } }, dependencies: [i1$3.CollapseDirective, i3$1.FaIconComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableCardComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-expandable-card', standalone: false, template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], () => [], { isCollapsed: [{
            type: Input
        }], titleClass: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExpandableCardComponent, { className: "ExpandableCardComponent", filePath: "lib/components/expandable-card/expandable-card.component.ts", lineNumber: 12 }); })();

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
function SearchBoxWidgetComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prependText);
} }
function SearchBoxWidgetComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resetKeyword(true)); });
    i0.ɵɵelement(1, "fa-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r0.faTimes);
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
        } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, standalone: false, decls: 8, vars: 7, consts: [["searchControlElem", ""], [3, "ngSubmit", "ngClass"], [1, "input-group"], [1, "input-group-text"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 1);
            i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { return ctx.kickOffSearch(); });
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵconditionalCreate(2, SearchBoxWidgetComponent_Conditional_2_Template, 2, 1, "span", 3);
            i0.ɵɵelement(3, "input", 4, 0);
            i0.ɵɵconditionalCreate(5, SearchBoxWidgetComponent_Conditional_5_Template, 2, 1, "button", 5);
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵelement(7, "fa-icon", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.formClass);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.prependText ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.anyFutureKeyword ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faSearch);
        } }, dependencies: [i1.NgClass, i1$2.ɵNgNoValidate, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.NgForm, i1$2.FormControlDirective, i3$1.FaIconComponent, i5.AutofocusDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-search-box-widget', standalone: false, template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n  <div class=\"input-group\">\n    @if (prependText) {\n      <span class=\"input-group-text\">{{prependText}}</span>\n    }\n    <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n      [formControl]=\"searchControl\"\n      [autofocus]=\"true\" />\n    @if (anyFutureKeyword) {\n      <button class=\"btn btn-secondary icon-only\" type=\"button\"\n        tooltip=\"Cancel\"\n        (click)=\"resetKeyword(true)\">\n        <fa-icon [icon]=\"faTimes\"></fa-icon>\n      </button>\n    }\n    <button class=\"btn btn-primary icon-only\" type=\"submit\"\n      tooltip=\"Search\">\n      <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n  </div>\n</form>\n\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchBoxWidgetComponent, { className: "SearchBoxWidgetComponent", filePath: "lib/widgets/search-box-widget/search-box-widget.component.ts", lineNumber: 13 }); })();

const _c0 = a0 => ({ "active": a0 });
function PageSizeOptionsWidgetComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2)(1, "a", 3);
    i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_For_3_Template_a_click_1_listener() { const o_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSize(o_r2)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, standalone: false, decls: 4, vars: 0, consts: [["aria-label", "page size options"], [1, "pagination"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul", 1);
            i0.ɵɵrepeaterCreate(2, PageSizeOptionsWidgetComponent_For_3_Template, 3, 4, "li", 2, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.options);
        } }, dependencies: [i1.NgClass], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-page-size-options-widget', standalone: false, template: "<nav aria-label=\"page size options\">\n  <ul class=\"pagination\">\n    @for (o of options; track o) {\n      <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n        <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n      </li>\n    }\n  </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
    }], () => [], { initSize: [{
            type: Input
        }], options: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageSizeOptionsWidgetComponent, { className: "PageSizeOptionsWidgetComponent", filePath: "lib/widgets/page-size-options-widget/page-size-options-widget.component.ts", lineNumber: 9 }); })();

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
