/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var BreadcrumbClipboardService = /** @class */ (function () {
    function BreadcrumbClipboardService() {
        this.clipboard = new BehaviorSubject([]);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    BreadcrumbClipboardService.prototype.paste = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.clipboard.next(items);
    };
    BreadcrumbClipboardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BreadcrumbClipboardService.ctorParameters = function () { return []; };
    /** @nocollapse */ BreadcrumbClipboardService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbClipboardService_Factory() { return new BreadcrumbClipboardService(); }, token: BreadcrumbClipboardService, providedIn: "root" });
    return BreadcrumbClipboardService;
}());
export { BreadcrumbClipboardService };
if (false) {
    /** @type {?} */
    BreadcrumbClipboardService.prototype.clipboard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2JyZWFkY3J1bWItY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdkM7SUFPSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCwwQ0FBSzs7OztJQUFMLFVBQU0sS0FBd0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBYkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7cUNBVEQ7Q0FxQkMsQUFkRCxJQWNDO1NBWFksMEJBQTBCOzs7SUFFbkMsK0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIElCcmVhZGNydW1iSXRlbVxufSBmcm9tICcuLi9tb2RlbHMvYnJlYWRjcnVtYi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNsaXBib2FyZFNlcnZpY2Uge1xuXG4gICAgcmVhZG9ubHkgY2xpcGJvYXJkOiBCZWhhdmlvclN1YmplY3Q8SUJyZWFkY3J1bWJJdGVtW10+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xpcGJvYXJkID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgfVxuXG4gICAgcGFzdGUoaXRlbXM6IElCcmVhZGNydW1iSXRlbVtdKSB7XG4gICAgICAgIHRoaXMuY2xpcGJvYXJkLm5leHQoaXRlbXMpO1xuICAgIH1cbn1cbiJdfQ==