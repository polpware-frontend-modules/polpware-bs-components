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
    static { this.ɵfac = function CommonModalsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonModalsService)(i0.ɵɵinject(i1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonModalsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.BsModalService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL2NvbW1vbi1tb2RhbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFLaEYsTUFBTSxPQUFPLG1CQUFtQjtJQUU1QixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxTQUFpQixFQUFFLGVBQXVCLHVCQUF1QjtRQUM3RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4RCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsWUFBWSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsU0FBUzthQUN2QjtZQUNELG1CQUFtQixFQUFFLElBQUk7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQXNCLENBQUM7SUFDbkUsQ0FBQztvSEFsQlEsbUJBQW1CO3VFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNOztpRkFFVCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9tb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7IH1cblxuICAgIHNob3dDb25maXJtQXN5bmModGl0bGU6IHN0cmluZywgaW5uZXJCb2R5OiBzdHJpbmcsIG1vZGFsQ2xhc3Nlczogc3RyaW5nID0gJ21vZGFsLWRpYWxvZy1jZW50ZXJlZCcpIHtcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvdyhBbGVydEJveENvbXBvbmVudCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgICAgICBjbGFzczogbW9kYWxDbGFzc2VzLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlRW50ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIGlubmVyQm9keTogaW5uZXJCb2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCkgYXMgUHJvbWlzZTxib29sZWFuPjtcbiAgICB9XG59XG4iXX0=