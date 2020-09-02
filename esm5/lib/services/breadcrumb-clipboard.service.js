import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var BreadcrumbClipboardService = /** @class */ (function () {
    function BreadcrumbClipboardService() {
        this.clipboard = new BehaviorSubject([]);
    }
    BreadcrumbClipboardService.prototype.paste = function (items) {
        this.clipboard.next(items);
    };
    BreadcrumbClipboardService.ɵfac = function BreadcrumbClipboardService_Factory(t) { return new (t || BreadcrumbClipboardService)(); };
    BreadcrumbClipboardService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' });
    return BreadcrumbClipboardService;
}());
export { BreadcrumbClipboardService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2JyZWFkY3J1bWItY2xpcGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUV2QztJQU9JO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMENBQUssR0FBTCxVQUFNLEtBQXdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7d0dBVlEsMEJBQTBCO3NFQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCLG1CQUZ2QixNQUFNO3FDQVJ0QjtDQXFCQyxBQWRELElBY0M7U0FYWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUh0QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgSUJyZWFkY3J1bWJJdGVtXG59IGZyb20gJy4uL21vZGVscy9icmVhZGNydW1iLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ2xpcGJvYXJkU2VydmljZSB7XG5cbiAgICByZWFkb25seSBjbGlwYm9hcmQ6IEJlaGF2aW9yU3ViamVjdDxJQnJlYWRjcnVtYkl0ZW1bXT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICB9XG5cbiAgICBwYXN0ZShpdGVtczogSUJyZWFkY3J1bWJJdGVtW10pIHtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQubmV4dChpdGVtcyk7XG4gICAgfVxufVxuIl19