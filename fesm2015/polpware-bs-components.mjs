import * as i0 from '@angular/core';
import { Component, Input, Injectable, HostListener, Output, EventEmitter, Directive, ViewChild, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i1 from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as i1$1 from '@angular/forms';
import { Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faEyeSlash, faEye, faSpinner, faChevronUp, faChevronDown, faChevronRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { buildUrlValidator } from '@polpware/ngx-input-validators';
import * as i1$2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i4 from 'ngx-autosize';
import { AutosizeModule } from 'ngx-autosize';
import * as i5 from 'ngx-autofocus-fix';
import { AutofocusFixModule } from 'ngx-autofocus-fix';
import * as i6 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import * as i1$3 from 'ngx-bootstrap/alert';
import { AlertModule } from 'ngx-bootstrap/alert';
import * as i2$1 from 'ngx-chips';
import { TagInputModule } from 'ngx-chips';
import * as i2$2 from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { debounceTime } from 'rxjs/operators';

var ActionKind;
(function (ActionKind) {
    ActionKind[ActionKind["NO_ACTION"] = 0] = "NO_ACTION";
    ActionKind[ActionKind["URL_LINK"] = 1] = "URL_LINK";
    ActionKind[ActionKind["ROUTER_LINK"] = 2] = "ROUTER_LINK";
    ActionKind[ActionKind["CUSTOM_ACTION"] = 3] = "CUSTOM_ACTION";
})(ActionKind || (ActionKind = {}));

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
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BreadcrumbComponent, selector: "polp-bs-breadcrumb", inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, usesOnChanges: true, ngImport: i0, template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n", styles: [""], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i3.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-breadcrumb', template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n", styles: [""] }]
        }], propDecorators: { items: [{
                type: Input
            }], listClasses: [{
                type: Input
            }], inactiveItemClasses: [{
                type: Input
            }], activeItemClasses: [{
                type: Input
            }] } });

class BreadcrumbClipboardService {
    constructor() {
        this.clipboard = new BehaviorSubject([]);
    }
    paste(items) {
        this.clipboard.next(items);
    }
}
BreadcrumbClipboardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BreadcrumbClipboardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbClipboardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BreadcrumbClipboardService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BreadcrumbClipboardService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

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
AlertBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertBoxComponent, deps: [{ token: i1.BsModalRef }], target: i0.ɵɵFactoryTarget.Component });
AlertBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AlertBoxComponent, selector: "polp-bs-alert-box", inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, host: { listeners: { "window:keyup": "keyEvent($event)" } }, ngImport: i0, template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n", styles: [""], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-alert-box', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }]; }, propDecorators: { hideNoBtn: [{
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
            }] } });

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
    ngAfterViewInit() {
        if (this.emitInitValue) {
            setTimeout(() => {
                const v = this.form.value;
                this.notifyValidation();
                this.notifyValueChanges(v);
            });
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
}
PromptFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PromptFormComponent, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PromptFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PromptFormComponent, selector: "polp-bs-prompt-form", inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, host: { listeners: { "window:keyup": "keyEvent($event)" } }, usesInheritance: true, ngImport: i0, template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"form-group mb-4\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                          \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                                                    \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </small>\n    </div>\n    \n    <div class=\"form-group d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn mr-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n", styles: [""], components: [{ type: i1$2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i3.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.AutosizeDirective, selector: "[autosize]", inputs: ["onlyGrow", "useImportant", "minRows", "autosize", "maxRows"], outputs: ["resized"] }, { type: i5.ɵb, selector: "[autofocus]", inputs: ["autofocus", "autofocusFixSmartEmptyCheck", "autofocusFixTriggerDetectChanges", "autofocusFixAsync"] }, { type: i3.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i6.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PromptFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-prompt-form', template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"form-group mb-4\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                          \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                                                    \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </small>\n    </div>\n    \n    <div class=\"form-group d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn mr-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }]; }, propDecorators: { autocomplete: [{
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
            }] } });

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
PromptModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PromptModalComponent, deps: [{ token: i1.BsModalRef }], target: i0.ɵɵFactoryTarget.Component });
PromptModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PromptModalComponent, selector: "polp-bs-prompt-modal", inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, ngImport: i0, template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n", styles: [""], components: [{ type: PromptFormComponent, selector: "polp-bs-prompt-form", inputs: ["autocomplete", "enableEnter", "cancelBtnClasses", "submitBtnClasses", "fields", "emitInitValue"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PromptModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-prompt-modal', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }]; }, propDecorators: { autocomplete: [{
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
            }] } });

class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
        this.faSpinner = faSpinner;
        this.initEmails = [];
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
EmailComposerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmailComposerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmailComposerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: EmailComposerComponent, selector: "polp-email-composer", inputs: { initEmails: "initEmails" }, outputs: { onClose: "onClose" }, usesInheritance: true, ngImport: i0, template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"form-group mb-4\">\n        <label>Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageTitleInput\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" \n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </span>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageBodyInput\">Message</label>        \n        <textarea name=\"messageBodyInput\" id=\"messageBodyInput\"\n                  class=\"form-control\"\n                  #emailBody\n                  autosize [minRows]=\"5\" [maxRows]=\"10\"\n                  [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n        </textarea>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n            Body message is required.\n        </span>\n    </div>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ml-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], components: [{ type: i1$3.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "dismissOnTimeout", "isOpen"], outputs: ["onClose", "onClosed"] }, { type: i2$1.TagInputComponent, selector: "tag-input", inputs: ["separatorKeys", "separatorKeyCodes", "placeholder", "secondaryPlaceholder", "maxItems", "validators", "asyncValidators", "onlyFromAutocomplete", "errorMessages", "theme", "onTextChangeDebounce", "inputId", "inputClass", "clearOnBlur", "hideForm", "addOnBlur", "addOnPaste", "pasteSplitPattern", "blinkIfDupe", "removable", "editable", "allowDupes", "modelAsStrings", "trimTags", "inputText", "ripple", "tabindex", "disable", "dragZone", "onRemoving", "onAdding", "animationDuration"], outputs: ["onAdd", "onRemove", "onSelect", "onFocus", "onBlur", "onTextChange", "onPaste", "onValidationError", "onTagEdited", "inputTextChange"] }, { type: i2$1.TagInputDropdown, selector: "tag-input-dropdown", inputs: ["offset", "focusFirstElement", "showDropdownIfEmpty", "autocompleteObservable", "minimumTextLength", "limitItemsTo", "displayBy", "identifyBy", "matchingFn", "appendToBody", "keepOpen", "dynamicUpdate", "zIndex", "autocompleteItems"] }, { type: i1$2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.AutosizeDirective, selector: "[autosize]", inputs: ["onlyGrow", "useImportant", "minRows", "autosize", "maxRows"], outputs: ["resized"] }], pipes: { "async": i3.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmailComposerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"form-group mb-4\">\n        <label>Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageTitleInput\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" \n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </span>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageBodyInput\">Message</label>        \n        <textarea name=\"messageBodyInput\" id=\"messageBodyInput\"\n                  class=\"form-control\"\n                  #emailBody\n                  autosize [minRows]=\"5\" [maxRows]=\"10\"\n                  [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n        </textarea>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n            Body message is required.\n        </span>\n    </div>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ml-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initEmails: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

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
ExpandableCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ExpandableCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpandableCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ExpandableCardComponent, selector: "polp-bs-expandable-card", inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngImport: i0, template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"expandableCardBody\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"expandableCardBody\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n", styles: [""], components: [{ type: i1$2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i2$2.CollapseDirective, selector: "[collapse]", inputs: ["display", "isAnimated", "collapse"], outputs: ["collapsed", "collapses", "expanded", "expands"], exportAs: ["bs-collapse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ExpandableCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-expandable-card', template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"expandableCardBody\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"expandableCardBody\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { isCollapsed: [{
                type: Input
            }], titleClass: [{
                type: Input
            }] } });

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
ObservableModalAbstractComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ObservableModalAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ObservableModalAbstractComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ObservableModalAbstractComponent, decorators: [{
            type: Directive
        }], propDecorators: { modalId: [{
                type: Input
            }] } });

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
        this.searchControl = new FormControl(this.initKeyword || '');
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
SearchBoxWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchBoxWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBoxWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SearchBoxWidgetComponent, selector: "polp-bs-search-box-widget", inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, viewQueries: [{ propertyName: "searchControlElem", first: true, predicate: ["searchControlElem"], descendants: true }], ngImport: i0, template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\" *ngIf=\"prependText\">\n            <span class=\"input-group-text\">{{prependText}}</span>\n        </div>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                    tooltip=\"Cancel\"\n                    (click)=\"resetKeyword(true)\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>                \n            </button>\n            <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                    tooltip=\"Search\">\n                <fa-icon [icon]=\"faSearch\"></fa-icon>                \n            </button>\n        </div>\n    </div>\n</form>\n\n", styles: [""], components: [{ type: i1$2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.ɵb, selector: "[autofocus]", inputs: ["autofocus", "autofocusFixSmartEmptyCheck", "autofocusFixTriggerDetectChanges", "autofocusFixAsync"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchBoxWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-search-box-widget', template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\" *ngIf=\"prependText\">\n            <span class=\"input-group-text\">{{prependText}}</span>\n        </div>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                    tooltip=\"Cancel\"\n                    (click)=\"resetKeyword(true)\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>                \n            </button>\n            <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                    tooltip=\"Search\">\n                <fa-icon [icon]=\"faSearch\"></fa-icon>                \n            </button>\n        </div>\n    </div>\n</form>\n\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initKeyword: [{
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
            }] } });

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
PageSizeOptionsWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PageSizeOptionsWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageSizeOptionsWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PageSizeOptionsWidgetComponent, selector: "polp-bs-page-size-options-widget", inputs: { initSize: "initSize", options: "options" }, outputs: { onChange: "onChange" }, ngImport: i0, template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PageSizeOptionsWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-page-size-options-widget', template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n", styles: [".page-link{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initSize: [{
                type: Input
            }], options: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });

class PolpBsComponentsModule {
}
PolpBsComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PolpBsComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsComponentsModule, declarations: [BreadcrumbComponent,
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
        FontAwesomeModule,
        AutofocusFixModule,
        AutosizeModule,
        TagInputModule,
        NgxMaskModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent] });
PolpBsComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsComponentsModule, imports: [[
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            AlertModule,
            ModalModule,
            CollapseModule,
            FontAwesomeModule,
            AutofocusFixModule,
            AutosizeModule,
            TagInputModule,
            NgxMaskModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsComponentsModule, decorators: [{
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
                        FontAwesomeModule,
                        AutofocusFixModule,
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
                        ExpandableCardComponent,
                        SearchBoxWidgetComponent,
                        PageSizeOptionsWidgetComponent
                    ]
                }]
        }] });

class BsModalAssistantService {
    constructor() {
        this._modalId = 0;
    }
    get modalId() {
        this._modalId++;
        return this._modalId;
    }
}
BsModalAssistantService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BsModalAssistantService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BsModalAssistantService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BsModalAssistantService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BsModalAssistantService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

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
CommonModalsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CommonModalsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
CommonModalsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CommonModalsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CommonModalsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BsModalService }]; } });

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PageSizeOptionsWidgetComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, SearchBoxWidgetComponent, makeValidations };
//# sourceMappingURL=polpware-bs-components.mjs.map
