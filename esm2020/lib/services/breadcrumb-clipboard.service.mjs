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
BreadcrumbClipboardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BreadcrumbClipboardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbClipboardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BreadcrumbClipboardService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BreadcrumbClipboardService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9zZXJ2aWNlcy9icmVhZGNydW1iLWNsaXBib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLDBCQUEwQjtJQUluQztRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUF3QjtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzt3SEFWUSwwQkFBMEI7NEhBQTFCLDBCQUEwQixjQUZ2QixNQUFNOzRGQUVULDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgSUJyZWFkY3J1bWJJdGVtXG59IGZyb20gJy4uL21vZGVscy9icmVhZGNydW1iLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ2xpcGJvYXJkU2VydmljZSB7XG5cbiAgICByZWFkb25seSBjbGlwYm9hcmQ6IEJlaGF2aW9yU3ViamVjdDxJQnJlYWRjcnVtYkl0ZW1bXT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICB9XG5cbiAgICBwYXN0ZShpdGVtczogSUJyZWFkY3J1bWJJdGVtW10pIHtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQubmV4dChpdGVtcyk7XG4gICAgfVxufVxuIl19