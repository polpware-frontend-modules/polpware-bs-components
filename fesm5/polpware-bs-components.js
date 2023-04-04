import { __decorate, __metadata, __extends, __assign, __spread } from 'tslib';
import { Input, Component, ɵɵdefineInjectable, Injectable, HostListener, Output, EventEmitter, ViewChild, ElementRef, NgModule, ɵɵinject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BsModalRef, ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { Validators, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faEyeSlash, faEye, faSpinner, faChevronUp, faChevronDown, faChevronRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { v4 } from 'uuid';
import { buildUrlValidator } from '@polpware/ngx-input-validators';
import { AlertTypeEnum, EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { AutosizeModule } from 'ngx-autosize';
import { TagInputModule } from 'ngx-chips';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
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
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], BreadcrumbComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BreadcrumbComponent.prototype, "listClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BreadcrumbComponent.prototype, "inactiveItemClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BreadcrumbComponent.prototype, "activeItemClasses", void 0);
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'polp-bs-breadcrumb',
            template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n",
            styles: [""]
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

var BreadcrumbClipboardService = /** @class */ (function () {
    function BreadcrumbClipboardService() {
        this.clipboard = new BehaviorSubject([]);
    }
    BreadcrumbClipboardService.prototype.paste = function (items) {
        this.clipboard.next(items);
    };
    BreadcrumbClipboardService.ɵprov = ɵɵdefineInjectable({ factory: function BreadcrumbClipboardService_Factory() { return new BreadcrumbClipboardService(); }, token: BreadcrumbClipboardService, providedIn: "root" });
    BreadcrumbClipboardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbClipboardService);
    return BreadcrumbClipboardService;
}());

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
    AlertBoxComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AlertBoxComponent.prototype, "hideNoBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "yesBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "noBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "noBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "yesBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AlertBoxComponent.prototype, "enableEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "innerBody", void 0);
    __decorate([
        HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AlertBoxComponent.prototype, "keyEvent", null);
    AlertBoxComponent = __decorate([
        Component({
            selector: 'polp-bs-alert-box',
            template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], AlertBoxComponent);
    return AlertBoxComponent;
}());

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
    PromptFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptFormComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptFormComponent.prototype, "enableEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptFormComponent.prototype, "cancelBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptFormComponent.prototype, "submitBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PromptFormComponent.prototype, "fields", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptFormComponent.prototype, "emitInitValue", void 0);
    __decorate([
        HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PromptFormComponent.prototype, "keyEvent", null);
    PromptFormComponent = __decorate([
        Component({
            selector: 'polp-bs-prompt-form',
            template: "<form [formGroup]=\"form\" name=\"{{name}}\" autocomplete=\"autocomplete ? 'on' : 'off'\">\n    <div class=\"form-group mb-4\" *ngFor=\"let elem of extFields; first as isFirst;\">\n        <ng-container *ngIf=\"autocomplete;else disableTmpl\">            \n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                          \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\">                        \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Otherwise -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else maskTmpl\"\n                           formControlName=\"{{elem.name}}\" \n                           autocomplete=\"{{elem.autocompleteKey}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #maskTmpl>\n                        <input *ngIf=\"elem.maskSettings\"\n                               formControlName=\"{{elem.name}}\"\n                               autocomplete=\"{{elem.autocompleteKey}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template #disableTmpl>\n            <ng-container [ngSwitch]=\"elem.category\">\n                <!-- Checkbox -->\n                <ng-container *ngSwitchCase=\"'checkbox'\">\n                    <div class=\"form-check\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"checkbox\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId}}\">\n                            {{elem.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Radio -->\n                <ng-container *ngSwitchCase=\"'radio'\">\n                    <div class=\"form-check\" *ngFor=\"let o of elem.options; let i = index\">\n                        <input formControlName=\"{{elem.name}}\"\n                               class=\"form-check-input\"\n                               type=\"radio\"\n                               value=\"{{o.value}}\"\n                               name=\"{{elem.fieldId}}\"\n                               id=\"{{elem.fieldId + i}}\">\n                        <label class=\"form-check-label\" for=\"{{elem.fieldId + i}}\">\n                            {{o.label}}\n                        </label>\n                    </div>                    \n                </ng-container>\n                <!-- Select -->\n                <ng-container *ngSwitchCase=\"'select'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <select class=\"form-control\" id=\"{{elem.fieldId}}\">\n                        <option>Choose ...</option>\n                        <option *ngFor=\"let o of elem.options\" value=\"{{o.value}}\">\n                            {{o.label}}\n                        </option>\n                    </select>                    \n                </ng-container>\n                <!-- textarea -->\n                <ng-container *ngSwitchCase=\"'textarea'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <textarea formControlName=\"{{elem.name}}\" \n                              id=\"{{elem.fieldId}}\"\n                              name=\"{{elem.fieldId}}\"                                                    \n                              autosize \n                              [autofocus]=\"isFirst\"\n                              class=\"form-control\">\n                    </textarea>\n                </ng-container>\n                <!-- password -->\n                <ng-container *ngSwitchCase=\"'password'\">\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <div class=\"input-group\"> \n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.visible ? 'text' : 'password'}}\"\n                               [autofocus]=\"isFirst\"\n                               class=\"form-control\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary icon-only\" type=\"button\"\n                                    (click)=\"elem.visible = !elem.visible\">\n                                <fa-icon [icon]=\"elem.visible ? faEyeSlash : faEye\">\n                                </fa-icon>\n                            </button>\n                        </div>\n                    </div>\n                </ng-container>\n                <!-- Others -->\n                <ng-container *ngSwitchDefault>\n                    <label for=\"{{elem.fieldId}}\">\n                        {{elem.label}}\n                    </label>\n                    <input *ngIf=\"!elem.maskSettings; else anotherMaskTmpl\"\n                           formControlName=\"{{elem.name}}\"\n                           id=\"{{elem.fieldId}}\"\n                           name=\"{{elem.fieldId}}\"                           \n                           type=\"{{elem.category}}\"\n                           [autofocus]=\"isFirst\"\n                           class=\"form-control\" />\n                    <ng-template #anotherMaskTmpl>\n                        <input formControlName=\"{{elem.name}}\"\n                               id=\"{{elem.fieldId}}\"\n                               name=\"{{elem.fieldId}}\"                           \n                               type=\"{{elem.category}}\"\n                               [autofocus]=\"isFirst\"\n                               mask=\"{{elem.maskSettings.mask}}\"\n                               class=\"form-control\" />\n                    </ng-template>\n                </ng-container>\n            </ng-container>\n        </ng-template>                \n\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.required && (form.touched || form.dirty)\">\n            {{elem.validators.required.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.min && (form.touched || form.dirty)\">\n            {{elem.validators.min.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.max && (form.touched || form.dirty)\">\n            {{elem.validators.max.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.pattern && (form.touched || form.dirty)\">\n            {{elem.validators.pattern.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.minlength && (form.touched || form.dirty)\">\n            {{elem.validators.minLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.maxlength && (form.touched || form.dirty)\">\n            {{elem.validators.maxLength.message}}\n        </small>\n        <small class=\"text-danger\" *ngIf=\"form.controls[elem.name].errors?.url && (form.touched || form.dirty)\">\n            {{elem.validators.url.message}}\n        </small>\n    </div>\n    \n    <div class=\"form-group d-flex justify-content-end\">\n        <button *ngIf=\"!hideCancelBtn\"\n                type=\"button\" class=\"btn mr-2\"\n                [ngClass]=\"cancelBtnClasses\" (click)=\"cancel()\" >\n            {{cancelBtnTxt}}\n        </button>    \n        <button *ngIf=\"!hideSubmitBtn\"\n                type=\"button\" class=\"btn\"\n                [ngClass]=\"submitBtnClasses\" [disabled]=\"!form.valid\" (click)=\"submit()\">\n            {{submitBtnTxt}}\n        </button>\n    </div>\n    \n</form>\n\n\n",
            inputs: [
                'hideCancelBtn',
                'hideSubmitBtn',
                'submitBtnTxt',
                'cancelBtnTxt'
            ],
            styles: [""]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], PromptFormComponent);
    return PromptFormComponent;
}(DefaultFormBaseComponent));

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
    PromptModalComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "enableEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideCancelBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideConfirmBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideCloseBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "cancelBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "confirmBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "cancelBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "confirmBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "innerBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PromptModalComponent.prototype, "fields", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Subject)
    ], PromptModalComponent.prototype, "result", void 0);
    PromptModalComponent = __decorate([
        Component({
            selector: 'polp-bs-prompt-modal',
            template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], PromptModalComponent);
    return PromptModalComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EmailComposerComponent.prototype, "initEmails", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EmailComposerComponent.prototype, "onClose", void 0);
    EmailComposerComponent = __decorate([
        Component({
            selector: 'polp-email-composer',
            template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"form-group mb-4\">\n        <label>Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageTitleInput\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" \n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </span>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageBodyInput\">Message</label>        \n        <textarea name=\"messageBodyInput\" id=\"messageBodyInput\"\n                  class=\"form-control\"\n                  #emailBody\n                  autosize [minRows]=\"5\" [maxRows]=\"10\"\n                  [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n        </textarea>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n            Body message is required.\n        </span>\n    </div>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ml-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComposerComponent);
    return EmailComposerComponent;
}(EmailFormAbstractComponent));

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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExpandableCardComponent.prototype, "isCollapsed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExpandableCardComponent.prototype, "titleClass", void 0);
    ExpandableCardComponent = __decorate([
        Component({
            selector: 'polp-bs-expandable-card',
            template: "<div class=\"card\">\n    <a class=\"card-header\" (click)=\"isCollapsed = !isCollapsed\"\n       [attr.aria-expanded]=\"!isCollapsed\" [attr.aria-controls]=\"elementId\">\n        <ng-content select=\"[title]\"></ng-content>        \n        <fa-icon [icon]=\"isCollapsed ? faChevronRight : faChevronDown\"></fa-icon>\n    </a>\n    <div class=\"card-body\" id=\"{{elementId}}\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ng-content select=\"[body]\"></ng-content>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableCardComponent);
    return ExpandableCardComponent;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ObservableModalAbstractComponent.prototype, "modalId", void 0);
    return ObservableModalAbstractComponent;
}());

var SearchBoxWidgetComponent = /** @class */ (function () {
    function SearchBoxWidgetComponent() {
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
    Object.defineProperty(SearchBoxWidgetComponent.prototype, "emitEvent", {
        get: function () {
            var old = this._emitEvent;
            this._emitEvent = false;
            return old;
        },
        set: function (v) {
            this._emitEvent = v;
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxWidgetComponent.prototype.ngOnInit = function () {
        this.searchControl = new FormControl(this.initKeyword || '');
        this.effectiveKeyword = this.initKeyword;
        this.startObserveSearchKeyword();
    };
    SearchBoxWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopObserveSearchKeyword();
    };
    // Cancel typed keyword and
    // reset to whatever the previous state
    //
    // This operation does not cause new network request.
    SearchBoxWidgetComponent.prototype.cancelTypedKeyword = function () {
        this.searchControl.setValue('');
        // Auto focus the search input
        this.searchControlElem.nativeElement.focus();
    };
    // Starts a new round of search
    //
    // This operation causes new network request.
    SearchBoxWidgetComponent.prototype.kickOffSearch = function () {
        this.effectiveKeyword = this.anyFutureKeyword;
        this.onSearch.emit();
    };
    SearchBoxWidgetComponent.prototype.resetKeyword = function (emitEvent) {
        if (emitEvent === void 0) { emitEvent = false; }
        this.emitEvent = emitEvent;
        this.cancelTypedKeyword();
    };
    // Start to listen for search keyword change
    SearchBoxWidgetComponent.prototype.startObserveSearchKeyword = function () {
        var _this = this;
        this._searchKeywordSubr = this.searchControl.valueChanges
            .pipe(debounceTime(this.debounceTime))
            .subscribe(function (a) {
            a = (a || '').toLowerCase();
            _this.anyFutureKeyword = a;
            if (_this.minLength > 0 && _this.anyFutureKeyword.length >= _this.minLength) {
                _this.kickOffSearch();
            }
            else if (_this.emitEvent) {
                _this.kickOffSearch();
            }
        });
    };
    SearchBoxWidgetComponent.prototype.stopObserveSearchKeyword = function () {
        this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SearchBoxWidgetComponent.prototype, "initKeyword", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "formClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "inputClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "prependText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "debounceTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SearchBoxWidgetComponent.prototype, "minLength", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SearchBoxWidgetComponent.prototype, "onSearch", void 0);
    __decorate([
        ViewChild('searchControlElem'),
        __metadata("design:type", ElementRef)
    ], SearchBoxWidgetComponent.prototype, "searchControlElem", void 0);
    SearchBoxWidgetComponent = __decorate([
        Component({
            selector: 'polp-bs-search-box-widget',
            template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\" *ngIf=\"prependText\">\n            <span class=\"input-group-text\">{{prependText}}</span>\n        </div>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                    tooltip=\"Cancel\"\n                    (click)=\"resetKeyword(true)\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>                \n            </button>\n            <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                    tooltip=\"Search\">\n                <fa-icon [icon]=\"faSearch\"></fa-icon>                \n            </button>\n        </div>\n    </div>\n</form>\n\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBoxWidgetComponent);
    return SearchBoxWidgetComponent;
}());

var PageSizeOptionsWidgetComponent = /** @class */ (function () {
    function PageSizeOptionsWidgetComponent() {
        this.initSize = 40;
        this.options = [40, 100, 200, 400, 800];
        this.onChange = new EventEmitter();
        this.size = 40;
    }
    PageSizeOptionsWidgetComponent.prototype.ngOnInit = function () {
        this.size = this.initSize;
    };
    PageSizeOptionsWidgetComponent.prototype.changeSize = function (s) {
        this.size = s;
        this.onChange.emit(s);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PageSizeOptionsWidgetComponent.prototype, "initSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PageSizeOptionsWidgetComponent.prototype, "options", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PageSizeOptionsWidgetComponent.prototype, "onChange", void 0);
    PageSizeOptionsWidgetComponent = __decorate([
        Component({
            selector: 'polp-bs-page-size-options-widget',
            template: "<nav aria-label=\"page size options\">\n    <ul class=\"pagination\">\n        <ng-container *ngFor=\"let o of options\">\n            <li class=\"page-item\" [ngClass]=\"{'active': size == o}\">\n                <a class=\"page-link\" (click)=\"changeSize(o)\">{{o}}</a>\n            </li>\n        </ng-container>\n    </ul>\n</nav>\n",
            styles: [".page-link{cursor:pointer}"]
        }),
        __metadata("design:paramtypes", [])
    ], PageSizeOptionsWidgetComponent);
    return PageSizeOptionsWidgetComponent;
}());

var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule = __decorate([
        NgModule({
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
                ExpandableCardComponent,
                SearchBoxWidgetComponent,
                PageSizeOptionsWidgetComponent
            ],
            entryComponents: []
        })
    ], PolpBsComponentsModule);
    return PolpBsComponentsModule;
}());

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
    BsModalAssistantService.ɵprov = ɵɵdefineInjectable({ factory: function BsModalAssistantService_Factory() { return new BsModalAssistantService(); }, token: BsModalAssistantService, providedIn: "root" });
    BsModalAssistantService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BsModalAssistantService);
    return BsModalAssistantService;
}());

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
    CommonModalsService.ctorParameters = function () { return [
        { type: BsModalService }
    ]; };
    CommonModalsService.ɵprov = ɵɵdefineInjectable({ factory: function CommonModalsService_Factory() { return new CommonModalsService(ɵɵinject(BsModalService)); }, token: CommonModalsService, providedIn: "root" });
    CommonModalsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], CommonModalsService);
    return CommonModalsService;
}());

/*
 * Public API Surface of bs-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PageSizeOptionsWidgetComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, SearchBoxWidgetComponent, makeValidations };
//# sourceMappingURL=polpware-bs-components.js.map
