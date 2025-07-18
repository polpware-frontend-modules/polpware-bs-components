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
    static { this.ɵfac = function BreadcrumbClipboardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbClipboardService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BreadcrumbClipboardService, factory: BreadcrumbClipboardService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbClipboardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1jbGlwYm9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2JzLWNvbXBvbmVudHMvc3JjL2xpYi9zZXJ2aWNlcy9icmVhZGNydW1iLWNsaXBib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLDBCQUEwQjtJQUluQztRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUF3QjtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzJIQVZRLDBCQUEwQjt1RUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQixtQkFGdkIsTUFBTTs7aUZBRVQsMEJBQTBCO2NBSHRDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBJQnJlYWRjcnVtYkl0ZW1cbn0gZnJvbSAnLi4vbW9kZWxzL2JyZWFkY3J1bWIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDbGlwYm9hcmRTZXJ2aWNlIHtcblxuICAgIHJlYWRvbmx5IGNsaXBib2FyZDogQmVoYXZpb3JTdWJqZWN0PElCcmVhZGNydW1iSXRlbVtdPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsaXBib2FyZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIH1cblxuICAgIHBhc3RlKGl0ZW1zOiBJQnJlYWRjcnVtYkl0ZW1bXSkge1xuICAgICAgICB0aGlzLmNsaXBib2FyZC5uZXh0KGl0ZW1zKTtcbiAgICB9XG59XG4iXX0=