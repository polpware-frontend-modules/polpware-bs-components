(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@polpware/bs-components', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['bs-components'] = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs));
}(this, (function (exports, core, common, router, rxjs) { 'use strict';

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

    var PolpBsComponentsModule = /** @class */ (function () {
        function PolpBsComponentsModule() {
        }
        PolpBsComponentsModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
        PolpBsComponentsModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule
                ]] });
        return PolpBsComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent], imports: [common.CommonModule,
            router.RouterModule], exports: [BreadcrumbComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpBsComponentsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        BreadcrumbComponent
                    ],
                    imports: [
                        common.CommonModule,
                        router.RouterModule
                    ],
                    exports: [
                        BreadcrumbComponent
                    ]
                }]
        }], null, null); })();

    exports.BreadcrumbClipboardService = BreadcrumbClipboardService;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.PolpBsComponentsModule = PolpBsComponentsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-bs-components.umd.js.map
