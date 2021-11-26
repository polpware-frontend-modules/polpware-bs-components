import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertBoxComponent } from '../components/alert-box/alert-box.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
var CommonModalsService = /** @class */ (function () {
    function CommonModalsService(_modalService) {
        this._modalService = _modalService;
    }
    CommonModalsService.prototype.showConfirmAsync = function (title, innerBody, modalClasses) {
        if (modalClasses === void 0) { modalClasses = 'modal-dialog-centered'; }
        var modalRef = this._modalService.show(AlertBoxComponent, {
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
    };
    CommonModalsService.ɵfac = function CommonModalsService_Factory(t) { return new (t || CommonModalsService)(i0.ɵɵinject(i1.BsModalService)); };
    CommonModalsService.ɵprov = i0.ɵɵdefineInjectable({ token: CommonModalsService, factory: CommonModalsService.ɵfac, providedIn: 'root' });
    return CommonModalsService;
}());
export { CommonModalsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CommonModalsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uLW1vZGFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFFaEY7SUFLSSw2QkFBNkIsYUFBNkI7UUFBN0Isa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBQUksQ0FBQztJQUUvRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBYSxFQUFFLFNBQWlCLEVBQUUsWUFBOEM7UUFBOUMsNkJBQUEsRUFBQSxzQ0FBOEM7UUFDN0YsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEQsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxZQUFZO1lBQ25CLFlBQVksRUFBRTtnQkFDVixXQUFXLEVBQUUsSUFBSTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osU0FBUyxFQUFFLFNBQVM7YUFDdkI7WUFDRCxtQkFBbUIsRUFBRSxJQUFJO1NBQzVCLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFzQixDQUFDO0lBQ25FLENBQUM7MEZBbEJRLG1CQUFtQjsrREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGaEIsTUFBTTs4QkFMdEI7Q0EwQkMsQUF0QkQsSUFzQkM7U0FuQlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9tb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7IH1cblxuICAgIHNob3dDb25maXJtQXN5bmModGl0bGU6IHN0cmluZywgaW5uZXJCb2R5OiBzdHJpbmcsIG1vZGFsQ2xhc3Nlczogc3RyaW5nID0gJ21vZGFsLWRpYWxvZy1jZW50ZXJlZCcpIHtcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvdyhBbGVydEJveENvbXBvbmVudCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgICAgICBjbGFzczogbW9kYWxDbGFzc2VzLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlRW50ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIGlubmVyQm9keTogaW5uZXJCb2R5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCkgYXMgUHJvbWlzZTxib29sZWFuPjtcbiAgICB9XG59XG4iXX0=