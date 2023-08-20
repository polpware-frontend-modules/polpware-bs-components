import { Injectable } from '@angular/core';
import { AlertBoxComponent } from '../components/alert-box/alert-box.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class CommonModalsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showConfirmAsync(title, innerBody, modalClasses = 'modal-dialog-centered') {
        const modalRef = this._modalService.show(AlertBoxComponent, {
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
    }
}
CommonModalsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CommonModalsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
CommonModalsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CommonModalsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CommonModalsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BsModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL2NvbW1vbi1tb2RhbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFLaEYsTUFBTSxPQUFPLG1CQUFtQjtJQUU1QixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxTQUFpQixFQUFFLGVBQXVCLHVCQUF1QjtRQUM3RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4RCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsWUFBWSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsU0FBUzthQUN2QjtZQUNELG1CQUFtQixFQUFFLElBQUk7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQXNCLENBQUM7SUFDbkUsQ0FBQzs7aUhBbEJRLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBRmhCLE1BQU07NEZBRVQsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBBbGVydEJveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFsc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkgeyB9XG5cbiAgICBzaG93Q29uZmlybUFzeW5jKHRpdGxlOiBzdHJpbmcsIGlubmVyQm9keTogc3RyaW5nLCBtb2RhbENsYXNzZXM6IHN0cmluZyA9ICdtb2RhbC1kaWFsb2ctY2VudGVyZWQnKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coQWxlcnRCb3hDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6IG1vZGFsQ2xhc3NlcyxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAgICAgICAgIGVuYWJsZUVudGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBpbm5lckJvZHk6IGlubmVyQm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmLmNvbnRlbnQucmVzdWx0LnRvUHJvbWlzZSgpIGFzIFByb21pc2U8Ym9vbGVhbj47XG4gICAgfVxufVxuIl19