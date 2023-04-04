import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertBoxComponent } from '../components/alert-box/alert-box.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
let CommonModalsService = class CommonModalsService {
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
};
CommonModalsService.ctorParameters = () => [
    { type: BsModalService }
];
CommonModalsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CommonModalsService_Factory() { return new CommonModalsService(i0.ɵɵinject(i1.BsModalService)); }, token: CommonModalsService, providedIn: "root" });
CommonModalsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [BsModalService])
], CommonModalsService);
export { CommonModalsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uLW1vZGFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7O0FBS2hGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTVCLFlBQTZCLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUFJLENBQUM7SUFFL0QsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLFNBQWlCLEVBQUUsZUFBdUIsdUJBQXVCO1FBQzdGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hELFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsWUFBWTtZQUNuQixZQUFZLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsbUJBQW1CLEVBQUUsSUFBSTtTQUM1QixDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBc0IsQ0FBQztJQUNuRSxDQUFDO0NBQ0osQ0FBQTs7WUFqQitDLGNBQWM7OztBQUZqRCxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1IsVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FBQztxQ0FHOEMsY0FBYztHQUZqRCxtQkFBbUIsQ0FtQi9CO1NBbkJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBBbGVydEJveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFsc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkgeyB9XG5cbiAgICBzaG93Q29uZmlybUFzeW5jKHRpdGxlOiBzdHJpbmcsIGlubmVyQm9keTogc3RyaW5nLCBtb2RhbENsYXNzZXM6IHN0cmluZyA9ICdtb2RhbC1kaWFsb2ctY2VudGVyZWQnKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coQWxlcnRCb3hDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6IG1vZGFsQ2xhc3NlcyxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICAgICAgICAgIGVuYWJsZUVudGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBpbm5lckJvZHk6IGlubmVyQm9keVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmLmNvbnRlbnQucmVzdWx0LnRvUHJvbWlzZSgpIGFzIFByb21pc2U8Ym9vbGVhbj47XG4gICAgfVxufVxuIl19