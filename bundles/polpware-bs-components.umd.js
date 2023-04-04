(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('ngx-bootstrap/modal'), require('@angular/forms'), require('@fortawesome/free-solid-svg-icons'), require('@polpware/ngx-form-common'), require('uuid'), require('@polpware/ngx-input-validators'), require('@polpware/ngx-email-composer'), require('@angular/common'), require('@angular/router'), require('@40three/ngx-autofocus-directive'), require('ngx-autosize'), require('ngx-chips'), require('ngx-mask'), require('@fortawesome/angular-fontawesome'), require('ngx-bootstrap/alert'), require('ngx-bootstrap/collapse'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@polpware/bs-components', ['exports', '@angular/core', 'rxjs', 'ngx-bootstrap/modal', '@angular/forms', '@fortawesome/free-solid-svg-icons', '@polpware/ngx-form-common', 'uuid', '@polpware/ngx-input-validators', '@polpware/ngx-email-composer', '@angular/common', '@angular/router', '@40three/ngx-autofocus-directive', 'ngx-autosize', 'ngx-chips', 'ngx-mask', '@fortawesome/angular-fontawesome', 'ngx-bootstrap/alert', 'ngx-bootstrap/collapse', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['bs-components'] = {}), global.ng.core, global.rxjs, global.modal, global.ng.forms, global.freeSolidSvgIcons, global.ngxFormCommon, global.uuid, global.ngxInputValidators, global.ngxEmailComposer, global.ng.common, global.ng.router, global.ngxAutofocusDirective, global.ngxAutosize, global.ngxChips, global.ngxMask, global.angularFontawesome, global.alert, global.collapse, global.rxjs.operators));
}(this, (function (exports, core, rxjs, modal, forms, freeSolidSvgIcons, ngxFormCommon, uuid, ngxInputValidators, ngxEmailComposer, common, router, ngxAutofocusDirective, ngxAutosize, ngxChips, ngxMask, angularFontawesome, alert, collapse, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    (function (ActionKind) {
        ActionKind[ActionKind["NO_ACTION"] = 0] = "NO_ACTION";
        ActionKind[ActionKind["URL_LINK"] = 1] = "URL_LINK";
        ActionKind[ActionKind["ROUTER_LINK"] = 2] = "ROUTER_LINK";
        ActionKind[ActionKind["CUSTOM_ACTION"] = 3] = "CUSTOM_ACTION";
    })(exports.ActionKind || (exports.ActionKind = {}));

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
                    e.kind = exports.ActionKind.ROUTER_LINK;
                }
                else if (e.url) {
                    e.kind = exports.ActionKind.URL_LINK;
                }
                else if (e.action) {
                    e.kind = exports.ActionKind.CUSTOM_ACTION;
                }
                else {
                    e.kind = exports.ActionKind.NO_ACTION;
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
            core.Input(),
            __metadata("design:type", Array)
        ], BreadcrumbComponent.prototype, "items", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BreadcrumbComponent.prototype, "listClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BreadcrumbComponent.prototype, "inactiveItemClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], BreadcrumbComponent.prototype, "activeItemClasses", void 0);
        BreadcrumbComponent = __decorate([
            core.Component({
                selector: 'polp-bs-breadcrumb',
                template: "    <ol [ngClass]=\"listClasses\">\n        <li [ngClass]=\"inactiveItemClasses\" *ngFor=\"let item of interItems\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n        <li [ngClass]=\"activeItemClasses\" aria-current=\"page\" *ngIf=\"activeItem as item\">\n            <ng-container [ngSwitch]=\"item.kind\">\n                <a [href]=\"item.url\" *ngSwitchCase=\"1\">{{item.title}}</a>\n                <a [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams || {}\" *ngSwitchCase=\"2\">{{item.title}}</a>\n                <a (click)=\"item.action()\" *ngSwitchCase=\"3\">{{item.title}}</a>\n                <a *ngSwitchDefault>{{item.title}}</a>                \n            </ng-container>\n        </li>\n    </ol>\n",
                styles: [""]
            })
        ], BreadcrumbComponent);
        return BreadcrumbComponent;
    }());

    var BreadcrumbClipboardService = /** @class */ (function () {
        function BreadcrumbClipboardService() {
            this.clipboard = new rxjs.BehaviorSubject([]);
        }
        BreadcrumbClipboardService.prototype.paste = function (items) {
            this.clipboard.next(items);
        };
        BreadcrumbClipboardService.ɵprov = core.ɵɵdefineInjectable({ factory: function BreadcrumbClipboardService_Factory() { return new BreadcrumbClipboardService(); }, token: BreadcrumbClipboardService, providedIn: "root" });
        BreadcrumbClipboardService = __decorate([
            core.Injectable({
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
            this.result = new rxjs.Subject();
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
            { type: modal.BsModalRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AlertBoxComponent.prototype, "hideNoBtn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "yesBtnLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "noBtnLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "noBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "yesBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AlertBoxComponent.prototype, "enableEnter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "title", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AlertBoxComponent.prototype, "innerBody", void 0);
        __decorate([
            core.HostListener('window:keyup', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [KeyboardEvent]),
            __metadata("design:returntype", void 0)
        ], AlertBoxComponent.prototype, "keyEvent", null);
        AlertBoxComponent = __decorate([
            core.Component({
                selector: 'polp-bs-alert-box',
                template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [modal.BsModalRef])
        ], AlertBoxComponent);
        return AlertBoxComponent;
    }());

    function makeValidations(data) {
        var validations = Object.keys(data);
        var x = validations.map(function (a) {
            switch (a) {
                case 'required':
                    return forms.Validators.required;
                case 'min':
                    return forms.Validators.min(data.min.value);
                case 'max':
                    return forms.Validators.max(data.max.value);
                case 'pattern':
                    return forms.Validators.pattern(data.pattern.value);
                case 'minLength':
                    return forms.Validators.minLength(data.minLength.value);
                case 'maxLength':
                    return forms.Validators.maxLength(data.maxLength.value);
                case 'url':
                    return ngxInputValidators.buildUrlValidator(data.url.options);
                default:
                    return null;
            }
        });
        x = x.filter(function (a) { return !!a; });
        return forms.Validators.compose(x);
    }

    var KEY_CODE$1;
    (function (KEY_CODE) {
        KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
    })(KEY_CODE$1 || (KEY_CODE$1 = {}));
    function uuidv4() {
        return 'alpha-' + uuid.v4();
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
            _this.faEyeSlash = freeSolidSvgIcons.faEyeSlash;
            _this.faEye = freeSolidSvgIcons.faEye;
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
                a[x.name] = new forms.FormControl(x.value, makeValidations(x.validators));
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
            { type: forms.FormBuilder }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptFormComponent.prototype, "autocomplete", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptFormComponent.prototype, "enableEnter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptFormComponent.prototype, "cancelBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptFormComponent.prototype, "submitBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], PromptFormComponent.prototype, "fields", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptFormComponent.prototype, "emitInitValue", void 0);
        __decorate([
            core.HostListener('window:keyup', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [KeyboardEvent]),
            __metadata("design:returntype", void 0)
        ], PromptFormComponent.prototype, "keyEvent", null);
        PromptFormComponent = __decorate([
            core.Component({
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
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], PromptFormComponent);
        return PromptFormComponent;
    }(ngxFormCommon.DefaultFormBaseComponent));

    var PromptModalComponent = /** @class */ (function () {
        function PromptModalComponent(_bsModalRef) {
            this._bsModalRef = _bsModalRef;
            this.enableEnter = false;
            this.hideCancelBtn = false;
            this.hideConfirmBtn = false;
            this.hideCloseBtn = false;
            this.result = new rxjs.Subject();
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
            { type: modal.BsModalRef }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "autocomplete", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptModalComponent.prototype, "enableEnter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptModalComponent.prototype, "hideCancelBtn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptModalComponent.prototype, "hideConfirmBtn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], PromptModalComponent.prototype, "hideCloseBtn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "cancelBtnLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "confirmBtnLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "cancelBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "confirmBtnClasses", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "title", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PromptModalComponent.prototype, "innerBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], PromptModalComponent.prototype, "fields", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", rxjs.Subject)
        ], PromptModalComponent.prototype, "result", void 0);
        PromptModalComponent = __decorate([
            core.Component({
                selector: 'polp-bs-prompt-modal',
                template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [modal.BsModalRef])
        ], PromptModalComponent);
        return PromptModalComponent;
    }());

    var EmailComposerComponent = /** @class */ (function (_super) {
        __extends(EmailComposerComponent, _super);
        function EmailComposerComponent() {
            var _this = _super.call(this) || this;
            _this.faSpinner = freeSolidSvgIcons.faSpinner;
            _this.initEmails = [];
            _this.onClose = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(EmailComposerComponent.prototype, "bsAlertType", {
            get: function () {
                switch (this.alertType) {
                    case ngxEmailComposer.AlertTypeEnum.info:
                        return 'info';
                    case ngxEmailComposer.AlertTypeEnum.error:
                        return 'danger';
                    case ngxEmailComposer.AlertTypeEnum.success:
                        return 'success';
                    case ngxEmailComposer.AlertTypeEnum.warning:
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
                this.alertType = ngxEmailComposer.AlertTypeEnum.error;
                this.alertMessage = 'Please provide required values and try again!';
                this.alertSubMessage = '';
                this.alertDismissible = true;
                return;
            }
            else {
                this.alertType = ngxEmailComposer.AlertTypeEnum.none;
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
            core.Input(),
            __metadata("design:type", Array)
        ], EmailComposerComponent.prototype, "initEmails", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], EmailComposerComponent.prototype, "onClose", void 0);
        EmailComposerComponent = __decorate([
            core.Component({
                selector: 'polp-email-composer',
                template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"form-group mb-4\">\n        <label>Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageTitleInput\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" \n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </span>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageBodyInput\">Message</label>        \n        <textarea name=\"messageBodyInput\" id=\"messageBodyInput\"\n                  class=\"form-control\"\n                  #emailBody\n                  autosize [minRows]=\"5\" [maxRows]=\"10\"\n                  [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n        </textarea>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n            Body message is required.\n        </span>\n    </div>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ml-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [])
        ], EmailComposerComponent);
        return EmailComposerComponent;
    }(ngxEmailComposer.EmailFormAbstractComponent));

    var GlobalElementId = 1;
    var ExpandableCardComponent = /** @class */ (function () {
        function ExpandableCardComponent() {
            this.isCollapsed = false;
            this.titleClass = '';
            this.faChevronUp = freeSolidSvgIcons.faChevronUp;
            this.faChevronDown = freeSolidSvgIcons.faChevronDown;
            this.faChevronRight = freeSolidSvgIcons.faChevronRight;
            this.elementId = 'expandableCardBody' + GlobalElementId++;
        }
        ExpandableCardComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ExpandableCardComponent.prototype, "isCollapsed", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ExpandableCardComponent.prototype, "titleClass", void 0);
        ExpandableCardComponent = __decorate([
            core.Component({
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
            this.result = new rxjs.Subject();
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
            core.Input(),
            __metadata("design:type", Number)
        ], ObservableModalAbstractComponent.prototype, "modalId", void 0);
        return ObservableModalAbstractComponent;
    }());

    var SearchBoxWidgetComponent = /** @class */ (function () {
        function SearchBoxWidgetComponent() {
            this.faSearch = freeSolidSvgIcons.faSearch;
            this.faTimes = freeSolidSvgIcons.faTimes;
            this.formClass = 'border rounded my-2 py-4 px-4 bg-light';
            this.inputClass = 'form-control';
            this.prependText = 'Filter';
            this.debounceTime = 500;
            // todo: More inputs
            // Allowing for disabling auto search
            this.minLength = 0;
            this.onSearch = new core.EventEmitter();
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
            this.searchControl = new forms.FormControl(this.initKeyword || '');
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
                .pipe(operators.debounceTime(this.debounceTime))
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
            core.Input(),
            __metadata("design:type", String)
        ], SearchBoxWidgetComponent.prototype, "initKeyword", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SearchBoxWidgetComponent.prototype, "formClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SearchBoxWidgetComponent.prototype, "inputClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SearchBoxWidgetComponent.prototype, "prependText", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], SearchBoxWidgetComponent.prototype, "debounceTime", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], SearchBoxWidgetComponent.prototype, "minLength", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], SearchBoxWidgetComponent.prototype, "onSearch", void 0);
        __decorate([
            core.ViewChild('searchControlElem'),
            __metadata("design:type", core.ElementRef)
        ], SearchBoxWidgetComponent.prototype, "searchControlElem", void 0);
        SearchBoxWidgetComponent = __decorate([
            core.Component({
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
            this.onChange = new core.EventEmitter();
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
            core.Input(),
            __metadata("design:type", Object)
        ], PageSizeOptionsWidgetComponent.prototype, "initSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], PageSizeOptionsWidgetComponent.prototype, "options", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], PageSizeOptionsWidgetComponent.prototype, "onChange", void 0);
        PageSizeOptionsWidgetComponent = __decorate([
            core.Component({
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
            core.NgModule({
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
                    common.CommonModule,
                    router.RouterModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    alert.AlertModule,
                    modal.ModalModule,
                    collapse.CollapseModule,
                    angularFontawesome.FontAwesomeModule,
                    ngxAutofocusDirective.FtAutofocusModule,
                    ngxAutosize.AutosizeModule,
                    ngxChips.TagInputModule,
                    ngxMask.NgxMaskModule
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
        BsModalAssistantService.ɵprov = core.ɵɵdefineInjectable({ factory: function BsModalAssistantService_Factory() { return new BsModalAssistantService(); }, token: BsModalAssistantService, providedIn: "root" });
        BsModalAssistantService = __decorate([
            core.Injectable({
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
            { type: modal.BsModalService }
        ]; };
        CommonModalsService.ɵprov = core.ɵɵdefineInjectable({ factory: function CommonModalsService_Factory() { return new CommonModalsService(core.ɵɵinject(modal.BsModalService)); }, token: CommonModalsService, providedIn: "root" });
        CommonModalsService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [modal.BsModalService])
        ], CommonModalsService);
        return CommonModalsService;
    }());

    exports.AlertBoxComponent = AlertBoxComponent;
    exports.BreadcrumbClipboardService = BreadcrumbClipboardService;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BsModalAssistantService = BsModalAssistantService;
    exports.CommonModalsService = CommonModalsService;
    exports.EmailComposerComponent = EmailComposerComponent;
    exports.ExpandableCardComponent = ExpandableCardComponent;
    exports.ObservableModalAbstractComponent = ObservableModalAbstractComponent;
    exports.PageSizeOptionsWidgetComponent = PageSizeOptionsWidgetComponent;
    exports.PolpBsComponentsModule = PolpBsComponentsModule;
    exports.PromptFormComponent = PromptFormComponent;
    exports.PromptModalComponent = PromptModalComponent;
    exports.SearchBoxWidgetComponent = SearchBoxWidgetComponent;
    exports.makeValidations = makeValidations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-bs-components.umd.js.map
