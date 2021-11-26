(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('ngx-bootstrap/modal'), require('@angular/forms'), require('@fortawesome/free-solid-svg-icons'), require('@polpware/ngx-form-common'), require('uuid'), require('@polpware/ngx-input-validators'), require('ngx-autosize'), require('@40three/ngx-autofocus-directive'), require('@fortawesome/angular-fontawesome'), require('ngx-mask'), require('@polpware/ngx-email-composer'), require('ngx-chips'), require('ngx-bootstrap/alert'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('@polpware/bs-components', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'ngx-bootstrap/modal', '@angular/forms', '@fortawesome/free-solid-svg-icons', '@polpware/ngx-form-common', 'uuid', '@polpware/ngx-input-validators', 'ngx-autosize', '@40three/ngx-autofocus-directive', '@fortawesome/angular-fontawesome', 'ngx-mask', '@polpware/ngx-email-composer', 'ngx-chips', 'ngx-bootstrap/alert', 'ngx-bootstrap/collapse'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['bs-components'] = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.modal, global.ng.forms, global.freeSolidSvgIcons, global.ngxFormCommon, global.uuid, global.ngxInputValidators, global.ngxAutosize, global.ngxAutofocusDirective, global.angularFontawesome, global.ngxMask, global.ngxEmailComposer, global.ngxChips, global.alert, global.collapse));
}(this, (function (exports, core, common, router, rxjs, modal, forms, freeSolidSvgIcons, ngxFormCommon, uuid, ngxInputValidators, ngxAutosize, ngxAutofocusDirective, angularFontawesome, ngxMask, ngxEmailComposer, ngxChips, alert, collapse) { 'use strict';

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

    function BreadcrumbComponent_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r2 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("href", item_r2.url, core.ɵɵsanitizeUrl);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r2.title);
    } }
    var _c0 = function () { return {}; };
    function BreadcrumbComponent_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 9);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r2 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams || core.ɵɵpureFunction0(3, _c0));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r2.title);
    } }
    function BreadcrumbComponent_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
        var _r11 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 10);
        core.ɵɵlistener("click", function BreadcrumbComponent_li_1_a_4_Template_a_click_0_listener() { core.ɵɵrestoreView(_r11); var item_r2 = core.ɵɵnextContext().$implicit; return item_r2.action(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r2 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r2.title);
    } }
    function BreadcrumbComponent_li_1_a_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r2 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r2.title);
    } }
    function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 0);
        core.ɵɵelementContainerStart(1, 3);
        core.ɵɵtemplate(2, BreadcrumbComponent_li_1_a_2_Template, 2, 2, "a", 4);
        core.ɵɵtemplate(3, BreadcrumbComponent_li_1_a_3_Template, 2, 4, "a", 5);
        core.ɵɵtemplate(4, BreadcrumbComponent_li_1_a_4_Template, 2, 1, "a", 6);
        core.ɵɵtemplate(5, BreadcrumbComponent_li_1_a_5_Template, 2, 1, "a", 7);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r2 = ctx.$implicit;
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r0.inactiveItemClasses);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", item_r2.kind);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 3);
    } }
    function BreadcrumbComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r14 = core.ɵɵnextContext().ngIf;
        core.ɵɵproperty("href", item_r14.url, core.ɵɵsanitizeUrl);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r14.title);
    } }
    function BreadcrumbComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 9);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r14 = core.ɵɵnextContext().ngIf;
        core.ɵɵproperty("routerLink", item_r14.routerLink)("queryParams", item_r14.queryParams || core.ɵɵpureFunction0(3, _c0));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r14.title);
    } }
    function BreadcrumbComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
        var _r23 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 10);
        core.ɵɵlistener("click", function BreadcrumbComponent_li_2_a_4_Template_a_click_0_listener() { core.ɵɵrestoreView(_r23); var item_r14 = core.ɵɵnextContext().ngIf; return item_r14.action(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r14 = core.ɵɵnextContext().ngIf;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r14.title);
    } }
    function BreadcrumbComponent_li_2_a_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r14 = core.ɵɵnextContext().ngIf;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r14.title);
    } }
    function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 11);
        core.ɵɵelementContainerStart(1, 3);
        core.ɵɵtemplate(2, BreadcrumbComponent_li_2_a_2_Template, 2, 2, "a", 4);
        core.ɵɵtemplate(3, BreadcrumbComponent_li_2_a_3_Template, 2, 4, "a", 5);
        core.ɵɵtemplate(4, BreadcrumbComponent_li_2_a_4_Template, 2, 1, "a", 6);
        core.ɵɵtemplate(5, BreadcrumbComponent_li_2_a_5_Template, 2, 1, "a", 7);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r14 = ctx.ngIf;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r1.activeItemClasses);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", item_r14.kind);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", 3);
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
        BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
        BreadcrumbComponent.ɵcmp = core.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["polp-bs-breadcrumb"]], inputs: { items: "items", listClasses: "listClasses", inactiveItemClasses: "inactiveItemClasses", activeItemClasses: "activeItemClasses" }, features: [core.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-current", "page", 3, "ngClass", 4, "ngIf"], [3, "ngSwitch"], [3, "href", 4, "ngSwitchCase"], [3, "routerLink", "queryParams", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "href"], [3, "routerLink", "queryParams"], [3, "click"], ["aria-current", "page", 3, "ngClass"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "ol", 0);
                core.ɵɵtemplate(1, BreadcrumbComponent_li_1_Template, 6, 5, "li", 1);
                core.ɵɵtemplate(2, BreadcrumbComponent_li_2_Template, 6, 5, "li", 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngClass", ctx.listClasses);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.interItems);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.activeItem);
            } }, directives: [common.NgClass, common.NgForOf, common.NgIf, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, router.RouterLinkWithHref], styles: [""] });
        return BreadcrumbComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-breadcrumb',
                    templateUrl: './breadcrumb.component.html',
                    styleUrls: ['./breadcrumb.component.scss']
                }]
        }], null, { items: [{
                type: core.Input
            }], listClasses: [{
                type: core.Input
            }], inactiveItemClasses: [{
                type: core.Input
            }], activeItemClasses: [{
                type: core.Input
            }] }); })();

    var BreadcrumbClipboardService = /** @class */ (function () {
        function BreadcrumbClipboardService() {
            this.clipboard = new rxjs.BehaviorSubject([]);
        }
        BreadcrumbClipboardService.prototype.paste = function (items) {
            this.clipboard.next(items);
        };
        BreadcrumbClipboardService.ɵfac = function BreadcrumbClipboardService_Factory(t) { return new (t || BreadcrumbClipboardService)(); };
        BreadcrumbClipboardService.ɵprov = core.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' });
        return BreadcrumbClipboardService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BreadcrumbClipboardService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    function AlertBoxComponent_button_9_Template(rf, ctx) { if (rf & 1) {
        var _r2 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 9);
        core.ɵɵlistener("click", function AlertBoxComponent_button_9_Template_button_click_0_listener() { core.ɵɵrestoreView(_r2); var ctx_r1 = core.ɵɵnextContext(); return ctx_r1.close(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r0.noBtnClasses);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r0.noBtnLabel, " ");
    } }
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
        AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(core.ɵɵdirectiveInject(modal.BsModalRef)); };
        AlertBoxComponent.ɵcmp = core.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, core.ɵɵresolveWindow);
            } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 12, vars: 5, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h4", 1);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "button", 2);
                core.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_3_listener() { return ctx.close(); });
                core.ɵɵelementStart(4, "span", 3);
                core.ɵɵtext(5, "\u00D7");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div", 4);
                core.ɵɵelement(7, "div", 5);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "div", 6);
                core.ɵɵtemplate(9, AlertBoxComponent_button_9_Template, 2, 2, "button", 7);
                core.ɵɵelementStart(10, "button", 8);
                core.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_10_listener() { return ctx.confirm(); });
                core.ɵɵtext(11);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.title);
                core.ɵɵadvance(5);
                core.ɵɵproperty("innerHtml", ctx.innerBody, core.ɵɵsanitizeHtml);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.hideNoBtn);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngClass", ctx.yesBtnClasses);
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
            } }, directives: [common.NgIf, common.NgClass], styles: [""] });
        return AlertBoxComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AlertBoxComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-alert-box',
                    templateUrl: './alert-box.component.html',
                    styleUrls: ['./alert-box.component.css']
                }]
        }], function () { return [{ type: modal.BsModalRef }]; }, { hideNoBtn: [{
                type: core.Input
            }], yesBtnLabel: [{
                type: core.Input
            }], noBtnLabel: [{
                type: core.Input
            }], noBtnClasses: [{
                type: core.Input
            }], yesBtnClasses: [{
                type: core.Input
            }], enableEnter: [{
                type: core.Input
            }], title: [{
                type: core.Input
            }], innerBody: [{
                type: core.Input
            }], keyEvent: [{
                type: core.HostListener,
                args: ['window:keyup', ['$event']]
            }] }); })();

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

    function PromptFormComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵelement(2, "input", 13);
        core.ɵɵelementStart(3, "label", 14);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 12);
        core.ɵɵelement(1, "input", 16);
        core.ɵɵelementStart(2, "label", 14);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var o_r23 = ctx.$implicit;
        var i_r24 = ctx.index;
        var elem_r3 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("value", o_r23.value);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r24);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r24);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", o_r23.label, " ");
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_ng_container_3_div_1_Template, 4, 6, "div", 15);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", elem_r3.options);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var o_r28 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("value", o_r28.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", o_r28.label, " ");
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "select", 18);
        core.ɵɵelementStart(4, "option");
        core.ɵɵtext(5, "Choose ...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_4_option_6_Template, 2, 2, "option", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", elem_r3.options);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "textarea", 21);
        core.ɵɵtext(4, "                    ");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r30 = core.ɵɵnextContext(2);
        var elem_r3 = ctx_r30.$implicit;
        var isFirst_r4 = ctx_r30.first;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        var _r33 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 22);
        core.ɵɵelement(4, "input", 23);
        core.ɵɵelementStart(5, "div", 24);
        core.ɵɵelementStart(6, "button", 25);
        core.ɵɵlistener("click", function PromptFormComponent_div_1_ng_container_1_ng_container_6_Template_button_click_6_listener() { core.ɵɵrestoreView(_r33); var elem_r3 = core.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
        core.ɵɵelement(7, "fa-icon", 26);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r34 = core.ɵɵnextContext(2);
        var elem_r3 = ctx_r34.$implicit;
        var isFirst_r4 = ctx_r34.first;
        var ctx_r19 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
        core.ɵɵproperty("autofocus", isFirst_r4);
        core.ɵɵadvance(3);
        core.ɵɵproperty("icon", elem_r3.visible ? ctx_r19.faEyeSlash : ctx_r19.faEye);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 29);
    } if (rf & 2) {
        var ctx_r38 = core.ɵɵnextContext(3);
        var elem_r3 = ctx_r38.$implicit;
        var isFirst_r4 = ctx_r38.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.category);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 31);
    } if (rf & 2) {
        var ctx_r40 = core.ɵɵnextContext(4);
        var elem_r3 = ctx_r40.$implicit;
        var isFirst_r4 = ctx_r40.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("autocomplete", elem_r3.autocompleteKey);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.category);
        core.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_input_0_Template, 1, 7, "input", 30);
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵproperty("ngIf", elem_r3.maskSettings);
    } }
    function PromptFormComponent_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_7_input_3_Template, 1, 6, "input", 27);
        core.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_7_ng_template_4_Template, 1, 1, "ng-template", null, 28, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r36 = core.ɵɵreference(5);
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r36);
    } }
    function PromptFormComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementContainerStart(1, 9);
        core.ɵɵtemplate(2, PromptFormComponent_div_1_ng_container_1_ng_container_2_Template, 5, 5, "ng-container", 10);
        core.ɵɵtemplate(3, PromptFormComponent_div_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 10);
        core.ɵɵtemplate(4, PromptFormComponent_div_1_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 10);
        core.ɵɵtemplate(5, PromptFormComponent_div_1_ng_container_1_ng_container_5_Template, 5, 6, "ng-container", 10);
        core.ɵɵtemplate(6, PromptFormComponent_div_1_ng_container_1_ng_container_6_Template, 8, 8, "ng-container", 10);
        core.ɵɵtemplate(7, PromptFormComponent_div_1_ng_container_1_ng_container_7_Template, 6, 4, "ng-container", 11);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", elem_r3.category);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "radio");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "select");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "textarea");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "password");
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 12);
        core.ɵɵelement(2, "input", 13);
        core.ɵɵelementStart(3, "label", 14);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 12);
        core.ɵɵelement(1, "input", 16);
        core.ɵɵelementStart(2, "label", 14);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var o_r52 = ctx.$implicit;
        var i_r53 = ctx.index;
        var elem_r3 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("value", o_r52.value);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId + i_r53);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId + i_r53);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", o_r52.label, " ");
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_2_div_1_Template, 4, 6, "div", 15);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", elem_r3.options);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 20);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var o_r57 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("value", o_r57.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", o_r57.label, " ");
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "select", 18);
        core.ɵɵelementStart(4, "option");
        core.ɵɵtext(5, "Choose ...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_3_option_6_Template, 2, 2, "option", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", elem_r3.options);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "textarea", 21);
        core.ɵɵtext(4, "                    ");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r59 = core.ɵɵnextContext(2);
        var elem_r3 = ctx_r59.$implicit;
        var isFirst_r4 = ctx_r59.first;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        var _r62 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 22);
        core.ɵɵelement(4, "input", 23);
        core.ɵɵelementStart(5, "div", 24);
        core.ɵɵelementStart(6, "button", 25);
        core.ɵɵlistener("click", function PromptFormComponent_div_1_ng_template_2_ng_container_5_Template_button_click_6_listener() { core.ɵɵrestoreView(_r62); var elem_r3 = core.ɵɵnextContext(2).$implicit; return elem_r3.visible = !elem_r3.visible; });
        core.ɵɵelement(7, "fa-icon", 26);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r63 = core.ɵɵnextContext(2);
        var elem_r3 = ctx_r63.$implicit;
        var isFirst_r4 = ctx_r63.first;
        var ctx_r48 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.visible ? "text" : "password");
        core.ɵɵproperty("autofocus", isFirst_r4);
        core.ɵɵadvance(3);
        core.ɵɵproperty("icon", elem_r3.visible ? ctx_r48.faEyeSlash : ctx_r48.faEye);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 23);
    } if (rf & 2) {
        var ctx_r67 = core.ɵɵnextContext(3);
        var elem_r3 = ctx_r67.$implicit;
        var isFirst_r4 = ctx_r67.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.category);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 34);
    } if (rf & 2) {
        var ctx_r68 = core.ɵɵnextContext(3);
        var elem_r3 = ctx_r68.$implicit;
        var isFirst_r4 = ctx_r68.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r3.name);
        core.ɵɵpropertyInterpolate("id", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("name", elem_r3.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r3.category);
        core.ɵɵpropertyInterpolate("mask", elem_r3.maskSettings.mask);
        core.ɵɵproperty("autofocus", isFirst_r4);
    } }
    function PromptFormComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "label", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_6_input_3_Template, 1, 5, "input", 32);
        core.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_6_ng_template_4_Template, 1, 6, "ng-template", null, 33, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r65 = core.ɵɵreference(5);
        var elem_r3 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r3.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !elem_r3.maskSettings)("ngIfElse", _r65);
    } }
    function PromptFormComponent_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 9);
        core.ɵɵtemplate(1, PromptFormComponent_div_1_ng_template_2_ng_container_1_Template, 5, 5, "ng-container", 10);
        core.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 10);
        core.ɵɵtemplate(3, PromptFormComponent_div_1_ng_template_2_ng_container_3_Template, 7, 4, "ng-container", 10);
        core.ɵɵtemplate(4, PromptFormComponent_div_1_ng_template_2_ng_container_4_Template, 5, 6, "ng-container", 10);
        core.ɵɵtemplate(5, PromptFormComponent_div_1_ng_template_2_ng_container_5_Template, 8, 8, "ng-container", 10);
        core.ɵɵtemplate(6, PromptFormComponent_div_1_ng_template_2_ng_container_6_Template, 6, 4, "ng-container", 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵproperty("ngSwitch", elem_r3.category);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "checkbox");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "radio");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "select");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "textarea");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "password");
    } }
    function PromptFormComponent_div_1_small_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.required.message, " ");
    } }
    function PromptFormComponent_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.min.message, " ");
    } }
    function PromptFormComponent_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.max.message, " ");
    } }
    function PromptFormComponent_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.pattern.message, " ");
    } }
    function PromptFormComponent_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.minLength.message, " ");
    } }
    function PromptFormComponent_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.maxLength.message, " ");
    } }
    function PromptFormComponent_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 35);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r3.validators.url.message, " ");
    } }
    function PromptFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 5);
        core.ɵɵtemplate(1, PromptFormComponent_div_1_ng_container_1_Template, 8, 6, "ng-container", 6);
        core.ɵɵtemplate(2, PromptFormComponent_div_1_ng_template_2_Template, 7, 6, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(4, PromptFormComponent_div_1_small_4_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(5, PromptFormComponent_div_1_small_5_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(6, PromptFormComponent_div_1_small_6_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(7, PromptFormComponent_div_1_small_7_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(8, PromptFormComponent_div_1_small_8_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(9, PromptFormComponent_div_1_small_9_Template, 2, 1, "small", 8);
        core.ɵɵtemplate(10, PromptFormComponent_div_1_small_10_Template, 2, 1, "small", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r3 = ctx.$implicit;
        var _r6 = core.ɵɵreference(3);
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.autocomplete)("ngIfElse", _r6);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.required) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.min) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.max) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.pattern) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.minlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.maxlength) && (ctx_r0.form.touched || ctx_r0.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r0.form.controls[elem_r3.name].errors == null ? null : ctx_r0.form.controls[elem_r3.name].errors.url) && (ctx_r0.form.touched || ctx_r0.form.dirty));
    } }
    function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r79 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 36);
        core.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r79); var ctx_r78 = core.ɵɵnextContext(); return ctx_r78.cancel(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r1.cancelBtnClasses);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1.cancelBtnTxt, " ");
    } }
    function PromptFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
        var _r81 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 37);
        core.ɵɵlistener("click", function PromptFormComponent_button_4_Template_button_click_0_listener() { core.ɵɵrestoreView(_r81); var ctx_r80 = core.ɵɵnextContext(); return ctx_r80.submit(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r2.submitBtnClasses)("disabled", !ctx_r2.form.valid);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r2.submitBtnTxt, " ");
    } }
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
        PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(core.ɵɵdirectiveInject(forms.FormBuilder)); };
        PromptFormComponent.ɵcmp = core.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, core.ɵɵresolveWindow);
            } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", cancelBtnClasses: "cancelBtnClasses", submitBtnClasses: "submitBtnClasses", fields: "fields", emitInitValue: "emitInitValue" }, features: [core.ɵɵInheritDefinitionFeature], decls: 5, vars: 5, consts: [["autocomplete", "autocomplete ? 'on' : 'off'", 3, "formGroup", "name"], ["class", "form-group mb-4", 4, "ngFor", "ngForOf"], [1, "form-group", "d-flex", "justify-content-end"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "btn", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "form-group", "mb-4"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], ["class", "text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "name", "id"], [1, "form-check-label", 3, "for"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "name", "id"], [3, "for"], [1, "form-control", 3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "name", "autofocus"], [1, "input-group"], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "icon-only", 3, "click"], [3, "icon"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["maskTmpl", ""], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus"], ["class", "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask", 4, "ngIf"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "name", "type", "autofocus", "mask"], ["class", "form-control", 3, "formControlName", "id", "name", "type", "autofocus", 4, "ngIf", "ngIfElse"], ["anotherMaskTmpl", ""], [1, "form-control", 3, "formControlName", "id", "name", "type", "autofocus", "mask"], [1, "text-danger"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "form", 0);
                core.ɵɵtemplate(1, PromptFormComponent_div_1_Template, 11, 9, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 2, 2, "button", 3);
                core.ɵɵtemplate(4, PromptFormComponent_button_4_Template, 2, 3, "button", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵpropertyInterpolate("name", ctx.name);
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.extFields);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideSubmitBtn);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgForOf, common.NgIf, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.FormControlName, forms.RadioControlValueAccessor, forms.DefaultValueAccessor, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, ngxAutosize.AutosizeDirective, ngxAutofocusDirective.AutofocusDirective, angularFontawesome.FaIconComponent, ngxMask.MaskDirective, common.NgClass], styles: [""] });
        return PromptFormComponent;
    }(ngxFormCommon.DefaultFormBaseComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PromptFormComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-prompt-form',
                    templateUrl: './prompt-form.component.html',
                    styleUrls: ['./prompt-form.component.css']
                }]
        }], function () { return [{ type: forms.FormBuilder }]; }, { autocomplete: [{
                type: core.Input
            }], enableEnter: [{
                type: core.Input
            }], cancelBtnClasses: [{
                type: core.Input
            }], submitBtnClasses: [{
                type: core.Input
            }], fields: [{
                type: core.Input
            }], emitInitValue: [{
                type: core.Input
            }], keyEvent: [{
                type: core.HostListener,
                args: ['window:keyup', ['$event']]
            }] }); })();

    function PromptModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r2 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 6);
        core.ɵɵlistener("click", function PromptModalComponent_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r2); var ctx_r1 = core.ɵɵnextContext(); return ctx_r1.close(); });
        core.ɵɵelementStart(1, "span", 7);
        core.ɵɵtext(2, "\u00D7");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
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
        PromptModalComponent.ɵfac = function PromptModalComponent_Factory(t) { return new (t || PromptModalComponent)(core.ɵɵdirectiveInject(modal.BsModalRef)); };
        PromptModalComponent.ɵcmp = core.ɵɵdefineComponent({ type: PromptModalComponent, selectors: [["polp-bs-prompt-modal"]], inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideConfirmBtn: "hideConfirmBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 7, vars: 12, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [3, "fields", "hideCancelBtn", "hideSubmitBtn", "cancelBtnTxt", "submitBtnTxt", "cancelBtnClasses", "submitBtnClasses", "autocomplete", "enableEnter", "onCancel", "onSave"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"]], template: function PromptModalComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h4", 1);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(3, PromptModalComponent_button_3_Template, 3, 0, "button", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵelement(5, "div", 4);
                core.ɵɵelementStart(6, "polp-bs-prompt-form", 5);
                core.ɵɵlistener("onCancel", function PromptModalComponent_Template_polp_bs_prompt_form_onCancel_6_listener() { return ctx.close(); })("onSave", function PromptModalComponent_Template_polp_bs_prompt_form_onSave_6_listener($event) { return ctx.confirm($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.title);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
                core.ɵɵadvance(2);
                core.ɵɵproperty("innerHtml", ctx.innerBody, core.ɵɵsanitizeHtml);
                core.ɵɵadvance(1);
                core.ɵɵproperty("fields", ctx.fields)("hideCancelBtn", ctx.hideCancelBtn)("hideSubmitBtn", ctx.hideConfirmBtn)("cancelBtnTxt", ctx.cancelBtnLabel)("submitBtnTxt", ctx.confirmBtnLabel)("cancelBtnClasses", ctx.cancelBtnClasses)("submitBtnClasses", ctx.confirmBtnClasses)("autocomplete", ctx.autocomplete)("enableEnter", ctx.enableEnter);
            } }, directives: [common.NgIf, PromptFormComponent], styles: [""] });
        return PromptModalComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PromptModalComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-prompt-modal',
                    templateUrl: './prompt-modal.component.html',
                    styleUrls: ['./prompt-modal.component.css']
                }]
        }], function () { return [{ type: modal.BsModalRef }]; }, { autocomplete: [{
                type: core.Input
            }], enableEnter: [{
                type: core.Input
            }], hideCancelBtn: [{
                type: core.Input
            }], hideConfirmBtn: [{
                type: core.Input
            }], hideCloseBtn: [{
                type: core.Input
            }], cancelBtnLabel: [{
                type: core.Input
            }], confirmBtnLabel: [{
                type: core.Input
            }], cancelBtnClasses: [{
                type: core.Input
            }], confirmBtnClasses: [{
                type: core.Input
            }], title: [{
                type: core.Input
            }], innerBody: [{
                type: core.Input
            }], fields: [{
                type: core.Input
            }], result: [{
                type: core.Output
            }] }); })();

    function EmailComposerComponent_alert_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "alert", 15);
        core.ɵɵelementStart(1, "p");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵproperty("type", ctx_r0.bsAlertType)("dismissible", ctx_r0.alertDismissible);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r0.alertMessage, " ");
    } }
    function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtext(0);
    } if (rf & 2) {
        var item_r11 = ctx.item;
        core.ɵɵtextInterpolate1(" ", item_r11.display, " ");
    } }
    function EmailComposerComponent_span_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 16);
        core.ɵɵtext(1, " Subject is required. ");
        core.ɵɵelementEnd();
    } }
    function EmailComposerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 16);
        core.ɵɵtext(1, " Body message is required. ");
        core.ɵɵelementEnd();
    } }
    function EmailComposerComponent_button_25_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "fa-icon", 19);
    } if (rf & 2) {
        var ctx_r13 = core.ɵɵnextContext(2);
        core.ɵɵproperty("icon", ctx_r13.faSpinner)("spin", true);
    } }
    function EmailComposerComponent_button_25_Template(rf, ctx) { if (rf & 1) {
        var _r15 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 17);
        core.ɵɵlistener("click", function EmailComposerComponent_button_25_Template_button_click_0_listener() { core.ɵɵrestoreView(_r15); var ctx_r14 = core.ɵɵnextContext(); return ctx_r14.submit(); });
        core.ɵɵtext(1, " Submit ");
        core.ɵɵtemplate(2, EmailComposerComponent_button_25_fa_icon_2_Template, 1, 2, "fa-icon", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext();
        core.ɵɵproperty("disabled", ctx_r8.alertType == 3);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r8.alertType == 3);
    } }
    function EmailComposerComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
        var _r17 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 20);
        core.ɵɵlistener("click", function EmailComposerComponent_ng_template_26_Template_button_click_0_listener() { core.ɵɵrestoreView(_r17); var ctx_r16 = core.ɵɵnextContext(); return ctx_r16.close(); });
        core.ɵɵtext(1, " Close ");
        core.ɵɵelementEnd();
    } }
    var _c0$1 = function () { return [32, 44, 58, 59]; };
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
        EmailComposerComponent.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); };
        EmailComposerComponent.ɵcmp = core.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails" }, outputs: { onClose: "onClose" }, features: [core.ɵɵInheritDefinitionFeature], decls: 28, vars: 25, consts: [[3, "type", "dismissible", 4, "ngIf"], [1, "form-group", "mb-4"], ["name", "emailInputs", 3, "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder", "ngModelChange", "focusout", "onTextChange"], ["emailInputBox", ""], [3, "autocompleteItems"], ["for", "messageTitleInput"], ["name", "messageTitleInput", "id", "messageTitleInput", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageTitleCtrl", "ngModel"], ["class", "d-block small text-danger", 4, "ngIf"], ["for", "messageBodyInput"], ["name", "messageBodyInput", "id", "messageBodyInput", "autosize", "", "required", "", 1, "form-control", 3, "minRows", "maxRows", "ngModel", "ngModelChange"], ["emailBody", "", "messageBodyCtrl", "ngModel"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["closeBtnTmpl", ""], [3, "type", "dismissible"], [1, "d-block", "small", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "ml-2", 3, "icon", "spin", 4, "ngIf"], [1, "ml-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 0);
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "label");
                core.ɵɵtext(4, "Recipients");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "tag-input", 2, 3);
                core.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { return ctx.emails = $event; })("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { return ctx.onOutOfTagInput($event); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { return ctx.textChanged($event); });
                core.ɵɵelementStart(7, "tag-input-dropdown", 4);
                core.ɵɵpipe(8, "async");
                core.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "div", 1);
                core.ɵɵelementStart(11, "label", 5);
                core.ɵɵtext(12, "Subject");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "input", 6, 7);
                core.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.messageTitle = $event; });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(15, EmailComposerComponent_span_15_Template, 2, 0, "span", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(16, "div", 1);
                core.ɵɵelementStart(17, "label", 9);
                core.ɵɵtext(18, "Message");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(19, "textarea", 10, 11);
                core.ɵɵlistener("ngModelChange", function EmailComposerComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.messageBody = $event; });
                core.ɵɵtext(22, "        ");
                core.ɵɵelementEnd();
                core.ɵɵtemplate(23, EmailComposerComponent_span_23_Template, 2, 0, "span", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(24, "div", 12);
                core.ɵɵtemplate(25, EmailComposerComponent_button_25_Template, 3, 2, "button", 13);
                core.ɵɵtemplate(26, EmailComposerComponent_ng_template_26_Template, 2, 0, "ng-template", null, 14, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r3 = core.ɵɵreference(14);
                var _r6 = core.ɵɵreference(21);
                var _r9 = core.ɵɵreference(27);
                core.ɵɵproperty("ngIf", ctx.alertType > 0);
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngModel", ctx.emails)("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", core.ɵɵpureFunction0(24, _c0$1))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
                core.ɵɵadvance(2);
                core.ɵɵproperty("autocompleteItems", core.ɵɵpipeBind1(8, 22, ctx.autocompleteItemsAsync));
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngModel", ctx.messageTitle);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !_r3.valid && _r3.touched);
                core.ɵɵadvance(4);
                core.ɵɵproperty("minRows", 5)("maxRows", 10)("ngModel", ctx.messageBody);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngIf", !_r6.valid && _r6.touched);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", _r9);
            } }, directives: [common.NgIf, ngxChips.TagInputComponent, forms.NgControlStatus, forms.NgModel, ngxChips.TagInputDropdown, forms.DefaultValueAccessor, forms.RequiredValidator, ngxAutosize.AutosizeDirective, alert.AlertComponent, angularFontawesome.FaIconComponent], pipes: [common.AsyncPipe], styles: [""] });
        return EmailComposerComponent;
    }(ngxEmailComposer.EmailFormAbstractComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EmailComposerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-email-composer',
                    templateUrl: './email-composer.component.html',
                    styleUrls: ['./email-composer.component.css']
                }]
        }], function () { return []; }, { initEmails: [{
                type: core.Input
            }], onClose: [{
                type: core.Output
            }] }); })();

    var _c0$2 = [[["", "title", ""]], [["", "body", ""]]];
    var _c1 = ["[title]", "[body]"];
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
        ExpandableCardComponent.ɵfac = function ExpandableCardComponent_Factory(t) { return new (t || ExpandableCardComponent)(); };
        ExpandableCardComponent.ɵcmp = core.ɵɵdefineComponent({ type: ExpandableCardComponent, selectors: [["polp-bs-expandable-card"]], inputs: { isCollapsed: "isCollapsed", titleClass: "titleClass" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [[1, "card"], ["aria-controls", "expandableCardBody", 1, "card-header", 3, "click"], [3, "icon"], ["id", "expandableCardBody", 1, "card-body", 3, "collapse", "isAnimated"]], template: function ExpandableCardComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c0$2);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "a", 1);
                core.ɵɵlistener("click", function ExpandableCardComponent_Template_a_click_1_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
                core.ɵɵprojection(2);
                core.ɵɵelement(3, "fa-icon", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵprojection(5, 1);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵattribute("aria-expanded", !ctx.isCollapsed);
                core.ɵɵadvance(2);
                core.ɵɵproperty("icon", ctx.isCollapsed ? ctx.faChevronRight : ctx.faChevronDown);
                core.ɵɵadvance(1);
                core.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
            } }, directives: [angularFontawesome.FaIconComponent, collapse.CollapseDirective], styles: [""] });
        return ExpandableCardComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ExpandableCardComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-expandable-card',
                    templateUrl: './expandable-card.component.html',
                    styleUrls: ['./expandable-card.component.css']
                }]
        }], function () { return []; }, { isCollapsed: [{
                type: core.Input
            }], titleClass: [{
                type: core.Input
            }] }); })();

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
        ObservableModalAbstractComponent.ɵfac = function ObservableModalAbstractComponent_Factory(t) { return new (t || ObservableModalAbstractComponent)(); };
        ObservableModalAbstractComponent.ɵdir = core.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
        return ObservableModalAbstractComponent;
    }());

    var PolpBsComponentsModule = /** @class */ (function () {
        function PolpBsComponentsModule() {
        }
        PolpBsComponentsModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
        PolpBsComponentsModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
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
                ]] });
        return PolpBsComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
            AlertBoxComponent,
            PromptFormComponent,
            EmailComposerComponent,
            PromptModalComponent,
            ExpandableCardComponent], imports: [common.CommonModule,
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
            ngxMask.NgxMaskModule], exports: [BreadcrumbComponent,
            AlertBoxComponent,
            PromptFormComponent,
            EmailComposerComponent,
            PromptModalComponent,
            ExpandableCardComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpBsComponentsModule, [{
            type: core.NgModule,
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
        BsModalAssistantService.ɵprov = core.ɵɵdefineInjectable({ token: BsModalAssistantService, factory: BsModalAssistantService.ɵfac, providedIn: 'root' });
        return BsModalAssistantService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BsModalAssistantService, [{
            type: core.Injectable,
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
        CommonModalsService.ɵfac = function CommonModalsService_Factory(t) { return new (t || CommonModalsService)(core.ɵɵinject(modal.BsModalService)); };
        CommonModalsService.ɵprov = core.ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' });
        return CommonModalsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CommonModalsService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: modal.BsModalService }]; }, null); })();

    exports.AlertBoxComponent = AlertBoxComponent;
    exports.BreadcrumbClipboardService = BreadcrumbClipboardService;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BsModalAssistantService = BsModalAssistantService;
    exports.CommonModalsService = CommonModalsService;
    exports.EmailComposerComponent = EmailComposerComponent;
    exports.ExpandableCardComponent = ExpandableCardComponent;
    exports.ObservableModalAbstractComponent = ObservableModalAbstractComponent;
    exports.PolpBsComponentsModule = PolpBsComponentsModule;
    exports.PromptFormComponent = PromptFormComponent;
    exports.PromptModalComponent = PromptModalComponent;
    exports.makeValidations = makeValidations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-bs-components.umd.js.map
