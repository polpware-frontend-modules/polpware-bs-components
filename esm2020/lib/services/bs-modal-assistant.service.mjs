import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BsModalAssistantService {
    constructor() {
        this._modalId = 0;
    }
    get modalId() {
        this._modalId++;
        return this._modalId;
    }
}
BsModalAssistantService.ɵfac = function BsModalAssistantService_Factory(t) { return new (t || BsModalAssistantService)(); };
BsModalAssistantService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsModalAssistantService, factory: BsModalAssistantService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsModalAssistantService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbW9kYWwtYXNzaXN0YW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvc2VydmljZXMvYnMtbW9kYWwtYXNzaXN0YW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLHVCQUF1QjtJQUdoQztRQURRLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRWpCLElBQUksT0FBTztRQUNQLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7OEZBUlEsdUJBQXVCOzZFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCLG1CQUZwQixNQUFNO3VGQUVULHVCQUF1QjtjQUhuQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnNNb2RhbEFzc2lzdGFudFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfbW9kYWxJZDogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0IG1vZGFsSWQoKSB7XG4gICAgICAgIHRoaXMuX21vZGFsSWQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFsSWQ7XG4gICAgfVxufVxuIl19