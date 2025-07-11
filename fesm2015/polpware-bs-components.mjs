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
import * as i6 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import * as i7 from '@tinymce/tinymce-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import * as i8 from '@angular/cdk/text-field';
import { TextFieldModule } from '@angular/cdk/text-field';
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

function BreadcrumbComponent_li_1_a_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("href", item_r2.url, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r2.title);
    }
}
const _c0$4 = function () { return {}; };
function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r2.title);
    }
}
function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 10);
        i0.ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r2 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r2.action()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r2.title);
    }
}
function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r2.title);
    }
}
function BreadcrumbComponent_li_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 0);
        i0.ɵɵelementContainerStart(1, 3);
        i0.ɵɵtemplate(2, BreadcrumbComponent_li_1_a_2_Template, 2, 2, "a", 4);
        i0.ɵɵtemplate(3, BreadcrumbComponent_li_1_a_3_Template, 2, 4, "a", 5);
        i0.ɵɵtemplate(4, BreadcrumbComponent_li_1_a_4_Template, 2, 1, "a", 6);
        i0.ɵɵtemplate(5, BreadcrumbComponent_li_1_a_5_Template, 2, 1, "a", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r2 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.inactiveItemClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", item_r2.kind);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 3);
    }
}
function BreadcrumbComponent_li_2_a_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r14 = i0.ɵɵnextContext().ngIf;
        i0.ɵɵproperty("href", item_r14.url, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r14.title);
    }
}
function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r14 = i0.ɵɵnextContext().ngIf;
        i0.ɵɵproperty("routerLink", item_r14.routerLink)("queryParams", item_r14.queryParams || i0.ɵɵpureFunction0(3, _c0$4));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r14.title);
    }
}
function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 10);
        i0.ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); const item_r14 = i0.ɵɵnextContext().ngIf; return i0.ɵɵresetView(item_r14.action()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r14 = i0.ɵɵnextContext().ngIf;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r14.title);
    }
}
function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "a");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r14 = i0.ɵɵnextContext().ngIf;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r14.title);
    }
}
function BreadcrumbComponent_li_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 11);
        i0.ɵɵelementContainerStart(1, 3);
        i0.ɵɵtemplate(2, BreadcrumbComponent_li_2_a_2_Template, 2, 2, "a", 4);
        i0.ɵɵtemplate(3, BreadcrumbComponent_li_2_a_3_Template, 2, 4, "a", 5);
        i0.ɵɵtemplate(4, BreadcrumbComponent_li_2_a_4_Template, 2, 1, "a", 6);
        i0.ɵɵtemplate(5, BreadcrumbComponent_li_2_a_5_Template, 2, 1, "a", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r14 = ctx.ngIf;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r1.activeItemClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", item_r14.kind);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", 3);
    }
}
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
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-current", "page", 3, "ngClass", 4, "ngIf"], [3, "ngSwitch"], [3, "href", 4, "ngSwitchCase"], [3, "routerLink", "queryParams", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"], ["aria-current", "page", 3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 0);
            i0.ɵɵtemplate(1, BreadcrumbComponent_li_1_Template, 6, 5, "li", 1);
            i0.ɵɵtemplate(2, BreadcrumbComponent_li_2_Template, 6, 5, "li", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.listClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.interItems);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.activeItem);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.RouterLinkWithHref] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
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
            }] });
})();

class BreadcrumbClipboardService {
    constructor() {
        this.clipboard = new BehaviorSubject([]);
    }
    paste(items) {
        this.clipboard.next(items);
    }
}
BreadcrumbClipboardService.ɵfac = function BreadcrumbClipboardService_Factory(t) { return new (t || BreadcrumbClipboardService)(); };
BreadcrumbClipboardService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbClipboardService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

function AlertBoxComponent_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 8);
        i0.ɵɵlistener("click", function AlertBoxComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.noBtnClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.noBtnLabel, " ");
    }
}
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
}
AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef)); };
AlertBoxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        }
    }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 10, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["type", "button", 1, "btn", "me-2", 3, "ngClass", "click"]], template: function AlertBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideNoBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.yesBtnClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        }
    }, dependencies: [i1.NgClass, i1.NgIf] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertBoxComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-alert-box', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn me-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n" }]
        }], function () { return [{ type: i1$1.BsModalRef }]; }, { hideNoBtn: [{
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
            }] });
})();

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

function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r24 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r23 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r23.faQuestionCircle)("popover", _r24)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "label", 24);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_span_2_Template, 2, 0, "span", 15);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r34 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r30 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r30.faQuestionCircle)("popover", _r34)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 26);
        i0.ɵɵelement(1, "input", 27);
        i0.ɵɵelementStart(2, "label", 14);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_label_1_Template, 3, 2, "label", 22);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_3_span_2_Template, 4, 3, "span", 16);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_3_Template, 4, 6, "div", 23);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", elem_r3.options);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r45 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r43 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r43.faQuestionCircle)("popover", _r45)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "option", 33);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const o_r49 = ctx.$implicit;
        i0.ɵɵpropertyInterpolate("value", o_r49.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", o_r49.label, " ");
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r53 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r52 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r52.faQuestionCircle)("popover", _r53)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r60 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r59 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r59.faQuestionCircle)("popover", _r60)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 42, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r70 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r69 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r69.faQuestionCircle)("popover", _r70)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r80 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r76 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r76.faQuestionCircle)("popover", _r80)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "input", 46);
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "input", 48);
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_input_0_Template, 1, 9, "input", 47);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        i0.ɵɵproperty("ngIf", elem_r3.maskSettings);
    }
}
function PromptFormComponent_div_1_ng_container_1_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "label", 28);
        i0.ɵɵtext(2);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_3_Template, 2, 0, "span", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_8_span_4_Template, 4, 3, "span", 16);
        i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_8_input_5_Template, 1, 8, "input", 43);
        i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_8_ng_template_6_Template, 1, 1, "ng-template", null, 44, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0)(1, 9);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 7, 7, "ng-container", 10);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 4, 3, "ng-container", 10);
        i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 9, 7, "ng-container", 10);
        i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 7, 10, "ng-container", 10);
        i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 9, 11, "ng-container", 10);
        i0.ɵɵtemplate(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 7, 9, "ng-container", 10);
        i0.ɵɵtemplate(8, PromptFormComponent_div_1_ng_container_1_ng_container_8_Template, 8, 6, "ng-container", 11);
        i0.ɵɵelementContainerEnd()();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_1_span_6_ng_template_2_Template, 1, 1, "ng-template", null, 49, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r99 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r98 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r98.faQuestionCircle)("popover", _r99)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "label", 24);
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_span_2_Template, 2, 0, "span", 15);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.hasReqInd);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 50, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r109 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r105 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r105.faQuestionCircle)("popover", _r109)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 26);
        i0.ɵɵelement(1, "input", 27);
        i0.ɵɵelementStart(2, "label", 14);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_label_1_Template, 3, 2, "label", 22);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_span_2_Template, 4, 3, "span", 16);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_3_Template, 4, 6, "div", 23);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", elem_r3.helpInfo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", elem_r3.options);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_3_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 51, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r120 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r118 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r118.faQuestionCircle)("popover", _r120)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "option", 33);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const o_r124 = ctx.$implicit;
        i0.ɵɵpropertyInterpolate("value", o_r124.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", o_r124.label, " ");
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_4_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 52, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r128 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r127 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r127.faQuestionCircle)("popover", _r128)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_5_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r135 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r134 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r134.faQuestionCircle)("popover", _r135)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_6_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 54, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r145 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r144 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r144.faQuestionCircle)("popover", _r145)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 17);
        i0.ɵɵtext(1, " * ");
        i0.ɵɵelementEnd();
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext(4).$implicit;
        i0.ɵɵproperty("innerHtml", elem_r3.helpInfo.content, i0.ɵɵsanitizeHtml);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 18);
        i0.ɵɵelement(1, "fa-icon", 19);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_ng_template_2_Template, 1, 1, "ng-template", null, 57, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r155 = i0.ɵɵreference(3);
        const elem_r3 = i0.ɵɵnextContext(3).$implicit;
        const ctx_r151 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r151.faQuestionCircle)("popover", _r155)("popoverTitle", elem_r3.helpInfo.title);
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "input", 58);
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "input", 59);
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "label", 28);
        i0.ɵɵtext(2);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_3_Template, 2, 0, "span", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_7_span_4_Template, 4, 3, "span", 16);
        i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_7_input_5_Template, 1, 7, "input", 55);
        i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_7_ng_template_6_Template, 1, 8, "ng-template", null, 56, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 9);
        i0.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 7, 7, "ng-container", 10);
        i0.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 4, 3, "ng-container", 10);
        i0.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 9, 7, "ng-container", 10);
        i0.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 7, 10, "ng-container", 10);
        i0.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 9, 11, "ng-container", 10);
        i0.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 7, 9, "ng-container", 10);
        i0.ɵɵtemplate(7, PromptFormComponent_div_1_ng_template_2_ng_container_7_Template, 8, 6, "ng-container", 11);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_div_1_div_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
    }
}
function PromptFormComponent_div_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
    }
}
function PromptFormComponent_div_1_div_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
    }
}
function PromptFormComponent_div_1_div_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
    }
}
function PromptFormComponent_div_1_div_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
    }
}
function PromptFormComponent_div_1_div_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
    }
}
function PromptFormComponent_div_1_div_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 60);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const elem_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
    }
}
function PromptFormComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function PromptFormComponent_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r171 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 61);
        i0.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r171); const ctx_r170 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r170.cancel()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
    }
}
function PromptFormComponent_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r173 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 62);
        i0.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r173); const ctx_r172 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r172.submit()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r2.submitBtnTxt, " ");
    }
}
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
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4(), autocompleteKey: k, visible: false });
            });
        }
        else {
            this.extFields = inputFields.map(a => {
                return Object.assign(Object.assign({}, a), { fieldId: uuidv4(), visible: false });
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
}
PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(i0.ɵɵdirectiveInject(i1$2.UntypedFormBuilder)); };
PromptFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        }
    }, inputs: { hideCancelBtn: "hideCancelBtn", hideSubmitBtn: "hideSubmitBtn", submitBtnTxt: "submitBtnTxt", cancelBtnTxt: "cancelBtnTxt", autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 5, vars: 5, consts: [["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", "class", "btn me-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "mb-3"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "form-text text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "text-danger", 4, "ngIf"], ["class", "ms-1", 4, "ngIf"], [1, "text-danger"], [1, "ms-1"], ["container", "body", 3, "icon", "popover", "popoverTitle"], ["popTemplate1", ""], [3, "innerHtml"], ["class", "form-label", 4, "ngIf"], ["class", "form-check mb-2", 4, "ngFor", "ngForOf"], [1, "form-label"], ["popTemplate2", ""], [1, "form-check", "mb-2"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [1, "form-label", 3, "for"], [1, "form-control", 3, "autocomplete", "id"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["popTemplate3", ""], [3, "value"], ["cdkTextareaAutosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autocomplete", "spellcheck", "autofocus"], ["popTemplate4", ""], [1, "input-group"], ["spellcheck", "false", 1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "autocomplete"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["popTemplate5", ""], [1, "form-control", "p-0", "border-0", 3, "formControlName", "id", "init", "plugins", "toolbar"], ["popTemplate6", ""], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], ["popTemplate7", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "spellcheck", "autofocus", "mask"], ["popTemplate8", ""], ["popTemplate9", ""], ["popTemplate10", ""], ["popTemplate11", ""], ["popTemplate12", ""], ["popTemplate13", ""], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], ["popTemplate14", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autocomplete", "spellcheck", "autofocus", "mask"], [1, "form-text", "text-danger"], ["type", "button", 1, "btn", "me-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
            i0.ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵpropertyInterpolate("name", ctx.name);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.extFields);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1$2.ɵNgNoValidate, i1$2.NgSelectOption, i1$2.ɵNgSelectMultipleOption, i1$2.DefaultValueAccessor, i1$2.CheckboxControlValueAccessor, i1$2.RadioControlValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$2.FormControlName, i3.PopoverDirective, i4.FaIconComponent, i5.AutofocusDirective, i6.NgxMaskDirective, i7.EditorComponent, i8.CdkTextareaAutosize] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptFormComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-prompt-form', inputs: [
                        'hideCancelBtn',
                        'hideSubmitBtn',
                        'submitBtnTxt',
                        'cancelBtnTxt'
                    ], template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"mb-3\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate1\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate1><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                        </span>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate2\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate2><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>\n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate3\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate3><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate4\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate4><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate5\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate5><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"\n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"                               \n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate6\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate6><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                                \n                    </span>                        \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate7\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate7><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                        \n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                            <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                                *\n                            </span>\n                        </label>\n                        <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                            <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate8\"\n                                     [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                            </fa-icon>\n                            <ng-template #popTemplate8>\n                                <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                            </ng-template>                            \n                        </span>                                                    \n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <label class=\"form-label\" *ngIf=\"elem.label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate9\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate9>\n                            <div [innerHtml]=\"elem.helpInfo.content\"></div>\n                        </ng-template>\n                    </span>                        \n                    <div class=\"form-check mb-2\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate10\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate10><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <select class=\"form-control\" autocomplete=\"{{elem.autocomplete || 'off'}}\" id=\"{{elem.fieldId}}\">\n                        <option selected>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate11\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate11><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.name}}\"\n                              autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                              spellcheck=\"{{elem.spellcheck || 'true'}}\"\n                              cdkTextareaAutosize\n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate12\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate12><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               spellcheck=\"false\"                               \n                               [autofocus]=\"isFirst\"\n                               autocomplete=\"{{elem.autocomplete || 'new-password'}}\"\n                               class=\"form-control\" />\n                        <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                (click)=\"elem.visible = !elem.visible\">\n                            <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                            </fa-icon>\n                        </button>\n                    </div>\n                </ng-container>\n                <!-- HTML -->\n                <ng-container *ngSwitchCase=\"'html'\">\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate13\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate13><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <div class=\"input-group\">\n                        <editor formControlName=\"{{elem.name}}\"\n                                id=\"{{elem.fieldId}}\"\n                                class=\"form-control p-0 border-0\"\n                                [init]=\"editorOptions\"\n                                [plugins]=\"editorPlugins\"\n                                [toolbar]=\"editorToolbar\"                                \n                        >\n                        </editor>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\" class=\"form-label\">\n                        {{elem.label}}\n                        <span *ngIf=\"elem.hasReqInd\" class=\"text-danger\">\n                            *\n                        </span>\n                    </label>\n                    <span *ngIf=\"elem.helpInfo\" class=\"ms-1\">\n                        <fa-icon [icon]=\"faQuestionCircle\" [popover]=\"popTemplate14\"\n                                 [popoverTitle]=\"elem.helpInfo.title\" container=\"body\">\n                        </fa-icon>\n                        <ng-template #popTemplate14><div [innerHtml]=\"elem.helpInfo.content\"></div></ng-template>                            \n                    </span>                                                \n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.name}}\"                           \n                           type=\"{{elem.category}}\"\n                           autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                           spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.name}}\"                           \n                               type=\"{{elem.category}}\"\n                               autocomplete=\"{{elem.autocomplete || 'off'}}\"\n                               spellcheck=\"{{elem.spellcheck || 'false'}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </div>\n        <div class=\"form-text text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </div>\n    </div>\n    \n    <div class=\"d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn me-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n" }]
        }], function () { return [{ type: i1$2.UntypedFormBuilder }]; }, { autocomplete: [{
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
            }] });
})();

function PromptModalComponent_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 6);
        i0.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
        i0.ɵɵelementEnd();
    }
}
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
}
PromptModalComponent.ɵfac = function PromptModalComponent_Factory(t) { return new (t || PromptModalComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef)); };
PromptModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "btn-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter", "onCancel", "onSave"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function PromptModalComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
        }
    }, dependencies: [i1.NgIf, PromptFormComponent] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromptModalComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-prompt-modal', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n" }]
        }], function () { return [{ type: i1$1.BsModalRef }]; }, { autocomplete: [{
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
            }] });
})();

function EmailComposerComponent_alert_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "alert", 15)(1, "p");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("type", ctx_r0.bsAlertType)("dismissible", ctx_r0.alertDismissible);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
    }
}
function EmailComposerComponent_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const item_r11 = ctx.item;
        i0.ɵɵtextInterpolate1(" ", item_r11.display, " ");
    }
}
function EmailComposerComponent_div_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 16);
        i0.ɵɵtext(1, " Subject is required. ");
        i0.ɵɵelementEnd();
    }
}
const _c0$3 = function () { return [".*"]; };
const _c1$1 = function (a0, a1) { return { htmlAllowedTags: a0, htmlAllowedAttrs: a1, extended_valid_elements: "*[.*]", draggable_modal: true }; };
function EmailComposerComponent_div_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1)(1, "label", 2);
        i0.ɵɵtext(2, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "editor", 17, 18);
        i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_div_16_Template_editor_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.messageBody = $event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 19);
        i0.ɵɵtext(7, " Body message is required. ");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r5.messageBody)("init", i0.ɵɵpureFunction2(4, _c1$1, i0.ɵɵpureFunction0(2, _c0$3), i0.ɵɵpureFunction0(3, _c0$3)));
    }
}
function EmailComposerComponent_ng_template_17_div_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 23);
        i0.ɵɵtext(1, " Body message is required. ");
        i0.ɵɵelementEnd();
    }
}
function EmailComposerComponent_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1)(1, "label", 20);
        i0.ɵɵtext(2, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "textarea", 21, 18);
        i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_ng_template_17_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.messageBody = $event); });
        i0.ɵɵtext(6, "            ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, EmailComposerComponent_ng_template_17_div_7_Template, 2, 0, "div", 22);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const _r18 = i0.ɵɵreference(5);
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkAutosizeMinRows", 5)("cdkAutosizeMaxRows", 10)("ngModel", ctx_r7.messageBody);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !_r18.valid && _r18.touched);
    }
}
function EmailComposerComponent_button_20_fa_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "fa-icon", 26);
    }
    if (rf & 2) {
        const ctx_r22 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("icon", ctx_r22.faSpinner)("spin", true);
    }
}
function EmailComposerComponent_button_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 24);
        i0.ɵɵlistener("click", function EmailComposerComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.submit()); });
        i0.ɵɵtext(1, " Submit ");
        i0.ɵɵtemplate(2, EmailComposerComponent_button_20_fa_icon_2_Template, 1, 2, "fa-icon", 25);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵproperty("disabled", ctx_r8.alertType == 3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r8.alertType == 3);
    }
}
function EmailComposerComponent_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 27);
        i0.ɵɵlistener("click", function EmailComposerComponent_ng_template_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.close()); });
        i0.ɵɵtext(1, " Close ");
        i0.ɵɵelementEnd();
    }
}
const _c2 = function () { return [32, 44, 58, 59]; };
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
}
EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
EmailComposerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 23, consts: [[3, "type", "dismissible", 4, "ngIf"], [1, "mb-4"], [1, "form-label"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput", 1, "form-label"], ["name", "messageTitleInput", "id", "messageTitleInput", "aria-describedby", "messageTitleHelp", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["id", "messageTitleHelp", "class", "form-text text-danger", 4, "ngIf"], ["class", "mb-4", 4, "ngIf", "ngIfElse"], ["textBody", ""], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["closeBtnTmpl", ""], [3, "type", "dismissible"], ["id", "messageTitleHelp", 1, "form-text", "text-danger"], ["name", "messageBodyInput", "plugins", "advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize", "toolbar", "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help", 1, "form-control", "p-0", "border-0", 3, "ngModel", "init", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], ["id", "messageBodyHelp", 1, "form-text"], ["for", "messageBodyInput", 1, "form-label"], ["name", "messageBodyInput", "id", "messageBodyInput", "aria-describedby", "messageBodyHelp", "cdkTextareaAutosize", "", "required", "", 1, "form-control", 3, "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "ngModel", "ngModelChange"], ["id", "messageBodyHelp", "class", "form-text text-danger", 4, "ngIf"], ["id", "messageBodyHelp", 1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ms-2", 3, "icon", "spin", 4, "ngIf"], [1, "ms-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 0);
            i0.ɵɵelementStart(1, "div")(2, "div", 1)(3, "label", 2);
            i0.ɵɵtext(4, "Recipients");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tag-input", 3, 4);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
            i0.ɵɵelementStart(7, "tag-input-dropdown", 5);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 1)(11, "label", 6);
            i0.ɵɵtext(12, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 7, 8);
            i0.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.messageTitle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, EmailComposerComponent_div_15_Template, 2, 0, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, EmailComposerComponent_div_16_Template, 8, 7, "div", 10);
            i0.ɵɵtemplate(17, EmailComposerComponent_ng_template_17_Template, 8, 4, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵtemplate(20, EmailComposerComponent_button_20_Template, 3, 2, "button", 13);
            i0.ɵɵtemplate(21, EmailComposerComponent_ng_template_21_Template, 2, 0, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            const _r3 = i0.ɵɵreference(14);
            const _r6 = i0.ɵɵreference(18);
            const _r9 = i0.ɵɵreference(22);
            i0.ɵɵproperty("ngIf", ctx.alertType > 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(22, _c2))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 20, ctx.autocompleteItemsAsync));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.messageTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !_r3.valid && _r3.touched);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isHtmlBody)("ngIfElse", _r6);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", _r9);
        }
    }, dependencies: [i1.NgIf, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.RequiredValidator, i1$2.NgModel, i3$1.AlertComponent, i4.FaIconComponent, i5$1.TagInputComponent, i5$1.TagInputDropdown, i7.EditorComponent, i8.CdkTextareaAutosize, i1.AsyncPipe] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailComposerComponent, [{
            type: Component,
            args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0 border-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      cdkTextareaAutosize\n                      [cdkAutosizeMinRows]=\"5\"\n                      [cdkAutosizeMaxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n" }]
        }], function () { return []; }, { initEmails: [{
                type: Input
            }], isHtmlBody: [{
                type: Input
            }], onClose: [{
                type: Output
            }] });
})();

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
}
ExpandableCardComponent.ɵfac = function ExpandableCardComponent_Factory(t) { return new (t || ExpandableCardComponent)(); };
ExpandableCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "card"], [1, "card-header", 3, "click"], [3, "icon"], [1, "card-body", 3, "id", "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$2);
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵprojection(2);
            i0.ɵɵelement(3, "fa-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed)("aria-controls", ctx.elementId);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("id", ctx.elementId);
            i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
        }
    }, dependencies: [i1$3.CollapseDirective, i4.FaIconComponent] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableCardComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n" }]
        }], function () { return []; }, { isCollapsed: [{
                type: Input
            }], titleClass: [{
                type: Input
            }] });
})();

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
}
ObservableModalAbstractComponent.ɵfac = function ObservableModalAbstractComponent_Factory(t) { return new (t || ObservableModalAbstractComponent)(); };
ObservableModalAbstractComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObservableModalAbstractComponent, [{
            type: Directive
        }], null, { modalId: [{
                type: Input
            }] });
})();

const _c0$1 = ["searchControlElem"];
function SearchBoxWidgetComponent_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.prependText);
    }
}
function SearchBoxWidgetComponent_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 9);
        i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.resetKeyword(true)); });
        i0.ɵɵelement(1, "fa-icon", 7);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx_r2.faTimes);
    }
}
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
}
SearchBoxWidgetComponent.ɵfac = function SearchBoxWidgetComponent_Factory(t) { return new (t || SearchBoxWidgetComponent)(); };
SearchBoxWidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBoxWidgetComponent, selectors: [["polp-bs-search-box-widget"]], viewQuery: function SearchBoxWidgetComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchControlElem = _t.first);
        }
    }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 8, vars: 7, consts: [[3, "ngClass", "ngSubmit"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["searchControlElem", ""], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { return ctx.kickOffSearch(); });
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, SearchBoxWidgetComponent_span_2_Template, 2, 1, "span", 2);
            i0.ɵɵelement(3, "input", 3, 4);
            i0.ɵɵtemplate(5, SearchBoxWidgetComponent_button_5_Template, 2, 1, "button", 5);
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵelement(7, "fa-icon", 7);
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.formClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.prependText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.anyFutureKeyword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faSearch);
        }
    }, dependencies: [i1.NgClass, i1.NgIf, i1$2.ɵNgNoValidate, i1$2.DefaultValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.NgForm, i1$2.FormControlDirective, i4.FaIconComponent, i5.AutofocusDirective] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-search-box-widget', template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <span class=\"input-group-text\" *ngIf=\"prependText\">{{prependText}}</span>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                tooltip=\"Cancel\"\n                (click)=\"resetKeyword(true)\">\n            <fa-icon [icon]=\"faTimes\"></fa-icon>                \n        </button>\n        <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                tooltip=\"Search\">\n            <fa-icon [icon]=\"faSearch\"></fa-icon>                \n        </button>\n    </div>\n</form>\n\n" }]
        }], function () { return []; }, { initKeyword: [{
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
            }] });
})();

const _c0 = function (a0) { return { "active": a0 }; };
function PageSizeOptionsWidgetComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "li", 3)(2, "a", 4);
        i0.ɵɵlistener("click", function PageSizeOptionsWidgetComponent_ng_container_2_Template_a_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const o_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSize(o_r1)); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const o_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.size == o_r1));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(o_r1);
    }
}
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
}
PageSizeOptionsWidgetComponent.ɵfac = function PageSizeOptionsWidgetComponent_Factory(t) { return new (t || PageSizeOptionsWidgetComponent)(); };
PageSizeOptionsWidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageSizeOptionsWidgetComponent, selectors: [["polp-bs-page-size-options-widget"]], inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, decls: 3, vars: 1, consts: [["aria-label", "page size options"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "click"]], template: function PageSizeOptionsWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul", 1);
            i0.ɵɵtemplate(2, PageSizeOptionsWidgetComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf], styles: [".page-link[_ngcontent-%COMP%]{cursor:pointer}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageSizeOptionsWidgetComponent, [{
            type: Component,
            args: [{ selector: 'polp-bs-page-size-options-widget', template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
        }], function () { return []; }, { initSize: [{
                type: Input
            }], options: [{
                type: Input
            }], onChange: [{
                type: Output
            }] });
})();

class PolpBsComponentsModule {
}
PolpBsComponentsModule.ɵfac = function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); };
PolpBsComponentsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
PolpBsComponentsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
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
        NgxMaskModule,
        EditorModule,
        TextFieldModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
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
                        NgxMaskModule,
                        EditorModule,
                        TextFieldModule
                    ],
                    exports: [
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
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
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
            NgxMaskModule,
            EditorModule,
            TextFieldModule], exports: [BreadcrumbComponent,
            AlertBoxComponent,
            PromptFormComponent,
            EmailComposerComponent,
            PromptModalComponent,
            ExpandableCardComponent,
            SearchBoxWidgetComponent,
            PageSizeOptionsWidgetComponent] });
})();

class BsModalAssistantService {
    constructor() {
        this._modalId = 0;
    }
    get modalId() {
        this._modalId++;
        return this._modalId;
    }
}
BsModalAssistantService.ɵfac = function BsModalAssistantService_Factory(t) { return new (t || BsModalAssistantService)(); };
BsModalAssistantService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsModalAssistantService, factory: BsModalAssistantService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsModalAssistantService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

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
}
CommonModalsService.ɵfac = function CommonModalsService_Factory(t) { return new (t || CommonModalsService)(i0.ɵɵinject(i1$1.BsModalService)); };
CommonModalsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonModalsService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: i1$1.BsModalService }]; }, null);
})();

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PageSizeOptionsWidgetComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, SearchBoxWidgetComponent, makeValidations, tinymceDefaultInitOptions, tinymceDefaultPlugins, tinymceDefaultToolbar };
//# sourceMappingURL=polpware-bs-components.mjs.map
