import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class BreadcrumbClipboardService {
    constructor() {
        this.clipboard = new BehaviorSubject([]);
    }
    paste(items) {
        this.clipboard.next(items);
    }
}
BreadcrumbClipboardService.ɵfac = function BreadcrumbClipboardService_Factory(t) { return new (t || BreadcrumbClipboardService)(); };
BreadcrumbClipboardService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2JyZWFkY3J1bWItY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sMEJBQTBCO0lBSW5DO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQXdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O29HQVZRLDBCQUEwQjtrRUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQixtQkFGdkIsTUFBTTtrREFFVCwwQkFBMEI7Y0FIdEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIElCcmVhZGNydW1iSXRlbVxufSBmcm9tICcuLi9tb2RlbHMvYnJlYWRjcnVtYi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNsaXBib2FyZFNlcnZpY2Uge1xuXG4gICAgcmVhZG9ubHkgY2xpcGJvYXJkOiBCZWhhdmlvclN1YmplY3Q8SUJyZWFkY3J1bWJJdGVtW10+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xpcGJvYXJkID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgfVxuXG4gICAgcGFzdGUoaXRlbXM6IElCcmVhZGNydW1iSXRlbVtdKSB7XG4gICAgICAgIHRoaXMuY2xpcGJvYXJkLm5leHQoaXRlbXMpO1xuICAgIH1cbn1cbiJdfQ==