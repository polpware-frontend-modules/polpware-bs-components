(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('ngx-bootstrap/modal'), require('@angular/forms'), require('uuid'), require('@polpware/ngx-input-validators'), require('ngx-autosize'), require('@40three/ngx-autofocus-directive')) :
    typeof define === 'function' && define.amd ? define('@polpware/bs-components', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'ngx-bootstrap/modal', '@angular/forms', 'uuid', '@polpware/ngx-input-validators', 'ngx-autosize', '@40three/ngx-autofocus-directive'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['bs-components'] = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.modal, global.ng.forms, global.uuid, global.ngxInputValidators, global.ngxAutosize, global.ngxAutofocusDirective));
}(this, (function (exports, core, common, router, rxjs, modal, forms, uuid, ngxInputValidators, ngxAutosize, ngxAutofocusDirective) { 'use strict';

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

    function PromptFormComponent_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r6 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 10);
        core.ɵɵlistener("click", function PromptFormComponent_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r6); var ctx_r5 = core.ɵɵnextContext(); return ctx_r5.close(); });
        core.ɵɵelementStart(1, "span", 11);
        core.ɵɵtext(2, "\u00D7");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function PromptFormComponent_ng_container_6_div_2_textarea_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "textarea", 19);
        core.ɵɵtext(1, "                ");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r20 = core.ɵɵnextContext();
        var elem_r8 = ctx_r20.$implicit;
        var isFirst_r9 = ctx_r20.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
        core.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
        core.ɵɵproperty("autofocus", isFirst_r9);
    } }
    function PromptFormComponent_ng_container_6_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 20);
    } if (rf & 2) {
        var ctx_r21 = core.ɵɵnextContext();
        var elem_r8 = ctx_r21.$implicit;
        var isFirst_r9 = ctx_r21.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r8.name);
        core.ɵɵpropertyInterpolate("autocomplete", elem_r8.autocompleteKey);
        core.ɵɵpropertyInterpolate("id", elem_r8.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r8.category);
        core.ɵɵproperty("autofocus", isFirst_r9);
    } }
    function PromptFormComponent_ng_container_6_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.required.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.min.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.max.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.pattern.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.minLength.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.maxLength.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.validators.url.message, " ");
    } }
    function PromptFormComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 14);
        core.ɵɵelementStart(1, "label", 15);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, PromptFormComponent_ng_container_6_div_2_textarea_3_Template, 2, 3, "textarea", 16);
        core.ɵɵtemplate(4, PromptFormComponent_ng_container_6_div_2_ng_template_4_Template, 1, 5, "ng-template", null, 17, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(6, PromptFormComponent_ng_container_6_div_2_small_6_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(7, PromptFormComponent_ng_container_6_div_2_small_7_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(8, PromptFormComponent_ng_container_6_div_2_small_8_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(9, PromptFormComponent_ng_container_6_div_2_small_9_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(10, PromptFormComponent_ng_container_6_div_2_small_10_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(11, PromptFormComponent_ng_container_6_div_2_small_11_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(12, PromptFormComponent_ng_container_6_div_2_small_12_Template, 2, 1, "small", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r8 = ctx.$implicit;
        var _r11 = core.ɵɵreference(5);
        var ctx_r7 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r8.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r8.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", elem_r8.category == "textarea")("ngIfElse", _r11);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.required) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.min) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.max) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.pattern) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.minlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.maxlength) && (ctx_r7.form.touched || ctx_r7.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r7.form.controls[elem_r8.name].errors == null ? null : ctx_r7.form.controls[elem_r8.name].errors.url) && (ctx_r7.form.touched || ctx_r7.form.dirty));
    } }
    function PromptFormComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "form", 12);
        core.ɵɵtemplate(2, PromptFormComponent_ng_container_6_div_2_Template, 13, 11, "div", 13);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("formGroup", ctx_r1.form);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1.extFields);
    } }
    function PromptFormComponent_ng_template_7_div_1_textarea_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "textarea", 19);
        core.ɵɵtext(1, "                ");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r42 = core.ɵɵnextContext();
        var elem_r30 = ctx_r42.$implicit;
        var isFirst_r31 = ctx_r42.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r30.name);
        core.ɵɵpropertyInterpolate("id", elem_r30.fieldId);
        core.ɵɵproperty("autofocus", isFirst_r31);
    } }
    function PromptFormComponent_ng_template_7_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "input", 24);
    } if (rf & 2) {
        var ctx_r43 = core.ɵɵnextContext();
        var elem_r30 = ctx_r43.$implicit;
        var isFirst_r31 = ctx_r43.first;
        core.ɵɵpropertyInterpolate("formControlName", elem_r30.name);
        core.ɵɵpropertyInterpolate("id", elem_r30.fieldId);
        core.ɵɵpropertyInterpolate("type", elem_r30.category);
        core.ɵɵproperty("autofocus", isFirst_r31);
    } }
    function PromptFormComponent_ng_template_7_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.required.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.min.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.max.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.pattern.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.minLength.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.maxLength.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_small_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "small", 21);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.validators.url.message, " ");
    } }
    function PromptFormComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 14);
        core.ɵɵelementStart(1, "label", 15);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, PromptFormComponent_ng_template_7_div_1_textarea_3_Template, 2, 3, "textarea", 16);
        core.ɵɵtemplate(4, PromptFormComponent_ng_template_7_div_1_ng_template_4_Template, 1, 4, "ng-template", null, 23, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(6, PromptFormComponent_ng_template_7_div_1_small_6_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(7, PromptFormComponent_ng_template_7_div_1_small_7_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(8, PromptFormComponent_ng_template_7_div_1_small_8_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(9, PromptFormComponent_ng_template_7_div_1_small_9_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(10, PromptFormComponent_ng_template_7_div_1_small_10_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(11, PromptFormComponent_ng_template_7_div_1_small_11_Template, 2, 1, "small", 18);
        core.ɵɵtemplate(12, PromptFormComponent_ng_template_7_div_1_small_12_Template, 2, 1, "small", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var elem_r30 = ctx.$implicit;
        var _r33 = core.ɵɵreference(5);
        var ctx_r29 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", elem_r30.fieldId);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", elem_r30.label, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", elem_r30.category == "textarea")("ngIfElse", _r33);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.required) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.min) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.max) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.pattern) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.minlength) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.maxlength) && (ctx_r29.form.touched || ctx_r29.form.dirty));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r29.form.controls[elem_r30.name].errors == null ? null : ctx_r29.form.controls[elem_r30.name].errors.url) && (ctx_r29.form.touched || ctx_r29.form.dirty));
    } }
    function PromptFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "form", 22);
        core.ɵɵtemplate(1, PromptFormComponent_ng_template_7_div_1_Template, 13, 11, "div", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵproperty("formGroup", ctx_r3.form);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r3.extFields);
    } }
    function PromptFormComponent_button_10_Template(rf, ctx) { if (rf & 1) {
        var _r52 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 25);
        core.ɵɵlistener("click", function PromptFormComponent_button_10_Template_button_click_0_listener() { core.ɵɵrestoreView(_r52); var ctx_r51 = core.ɵɵnextContext(); return ctx_r51.close(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r4.cancelBtnClasses);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r4.cancelBtnLabel, " ");
    } }
    var KEY_CODE$1;
    (function (KEY_CODE) {
        KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
    })(KEY_CODE$1 || (KEY_CODE$1 = {}));
    function uuidv4() {
        return 'alpha-' + uuid.v4();
    }
    var PromptFormComponent = /** @class */ (function () {
        function PromptFormComponent(_builder, _bsModalRef) {
            this._builder = _builder;
            this._bsModalRef = _bsModalRef;
            this.enableEnter = false;
            this.hideCancelBtn = false;
            this.hideCloseBtn = false;
            this.result = new rxjs.Subject();
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
                a[x.name] = new forms.FormControl(x.value, makeValidations(x.validators));
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
        PromptFormComponent.ɵfac = function PromptFormComponent_Factory(t) { return new (t || PromptFormComponent)(core.ɵɵdirectiveInject(forms.FormBuilder), core.ɵɵdirectiveInject(modal.BsModalRef)); };
        PromptFormComponent.ɵcmp = core.ɵɵdefineComponent({ type: PromptFormComponent, selectors: [["polp-bs-prompt-form"]], hostBindings: function PromptFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("keyup", function PromptFormComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, core.ɵɵresolveWindow);
            } }, inputs: { autocomplete: "autocomplete", enableEnter: "enableEnter", hideCancelBtn: "hideCancelBtn", hideCloseBtn: "hideCloseBtn", cancelBtnLabel: "cancelBtnLabel", confirmBtnLabel: "confirmBtnLabel", cancelBtnClasses: "cancelBtnClasses", confirmBtnClasses: "confirmBtnClasses", title: "title", innerBody: "innerBody", fields: "fields" }, outputs: { result: "result" }, decls: 13, vars: 9, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "class", "close pull-right", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "innerHtml"], [4, "ngIf", "ngIfElse"], ["disableTmpl", ""], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "disabled", "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["name", "promptForm", "autocomplete", "on", 3, "formGroup"], ["class", "from-group mb-4", 4, "ngFor", "ngForOf"], [1, "from-group", "mb-4"], [3, "for"], ["autosize", "", "class", "form-control", 3, "formControlName", "id", "autofocus", 4, "ngIf", "ngIfElse"], ["inputTmpl", ""], ["class", "text-danger", 4, "ngIf"], ["autosize", "", 1, "form-control", 3, "formControlName", "id", "autofocus"], [1, "form-control", 3, "formControlName", "autocomplete", "id", "type", "autofocus"], [1, "text-danger"], ["name", "promptForm", 3, "formGroup"], ["anotherInputTmpl", ""], [1, "form-control", 3, "formControlName", "id", "type", "autofocus"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function PromptFormComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h4", 1);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(3, PromptFormComponent_button_3_Template, 3, 0, "button", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div", 3);
                core.ɵɵelement(5, "div", 4);
                core.ɵɵtemplate(6, PromptFormComponent_ng_container_6_Template, 3, 2, "ng-container", 5);
                core.ɵɵtemplate(7, PromptFormComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 7);
                core.ɵɵtemplate(10, PromptFormComponent_button_10_Template, 2, 2, "button", 8);
                core.ɵɵelementStart(11, "button", 9);
                core.ɵɵlistener("click", function PromptFormComponent_Template_button_click_11_listener() { return ctx.confirm(); });
                core.ɵɵtext(12);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2 = core.ɵɵreference(8);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.title);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.hideCloseBtn);
                core.ɵɵadvance(2);
                core.ɵɵproperty("innerHtml", ctx.innerBody, core.ɵɵsanitizeHtml);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.autocomplete)("ngIfElse", _r2);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngIf", !ctx.hideCancelBtn);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngClass", ctx.confirmBtnClasses)("disabled", !ctx.form.valid);
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" ", ctx.confirmBtnLabel, " ");
            } }, directives: [common.NgIf, common.NgClass, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgForOf, forms.DefaultValueAccessor, ngxAutosize.AutosizeDirective, forms.NgControlStatus, forms.FormControlName, ngxAutofocusDirective.AutofocusDirective], styles: [""] });
        return PromptFormComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PromptFormComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-prompt-form',
                    templateUrl: './prompt-form.component.html',
                    styleUrls: ['./prompt-form.component.css']
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: modal.BsModalRef }]; }, { autocomplete: [{
                type: core.Input
            }], enableEnter: [{
                type: core.Input
            }], hideCancelBtn: [{
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
            }], keyEvent: [{
                type: core.HostListener,
                args: ['window:keyup', ['$event']]
            }] }); })();

    var PolpBsComponentsModule = /** @class */ (function () {
        function PolpBsComponentsModule() {
        }
        PolpBsComponentsModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
        PolpBsComponentsModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    ngxAutofocusDirective.FtAutofocusModule,
                    ngxAutosize.AutosizeModule
                ]] });
        return PolpBsComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
            AlertBoxComponent,
            PromptFormComponent], imports: [common.CommonModule,
            router.RouterModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            ngxAutofocusDirective.FtAutofocusModule,
            ngxAutosize.AutosizeModule], exports: [BreadcrumbComponent,
            AlertBoxComponent,
            PromptFormComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpBsComponentsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        BreadcrumbComponent,
                        AlertBoxComponent,
                        PromptFormComponent
                    ],
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        ngxAutofocusDirective.FtAutofocusModule,
                        ngxAutosize.AutosizeModule
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

    exports.AlertBoxComponent = AlertBoxComponent;
    exports.BreadcrumbClipboardService = BreadcrumbClipboardService;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.PolpBsComponentsModule = PolpBsComponentsModule;
    exports.PromptFormComponent = PromptFormComponent;
    exports.makeValidations = makeValidations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-bs-components.umd.js.map
