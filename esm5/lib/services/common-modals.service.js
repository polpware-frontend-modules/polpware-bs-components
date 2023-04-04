import { __decorate, __metadata } from "tslib";
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
    CommonModalsService.ctorParameters = function () { return [
        { type: BsModalService }
    ]; };
    CommonModalsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CommonModalsService_Factory() { return new CommonModalsService(i0.ɵɵinject(i1.BsModalService)); }, token: CommonModalsService, providedIn: "root" });
    CommonModalsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], CommonModalsService);
    return CommonModalsService;
}());
export { CommonModalsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29tbW9uLW1vZGFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7O0FBS2hGO0lBRUksNkJBQTZCLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUFJLENBQUM7SUFFL0QsOENBQWdCLEdBQWhCLFVBQWlCLEtBQWEsRUFBRSxTQUFpQixFQUFFLFlBQThDO1FBQTlDLDZCQUFBLEVBQUEsc0NBQThDO1FBQzdGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hELFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsWUFBWTtZQUNuQixZQUFZLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2dCQUNaLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsbUJBQW1CLEVBQUUsSUFBSTtTQUM1QixDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBc0IsQ0FBQztJQUNuRSxDQUFDOztnQkFoQjJDLGNBQWM7OztJQUZqRCxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0FHOEMsY0FBYztPQUZqRCxtQkFBbUIsQ0FtQi9COzhCQTFCRDtDQTBCQyxBQW5CRCxJQW1CQztTQW5CWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQWxlcnRCb3hDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX21vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gICAgc2hvd0NvbmZpcm1Bc3luYyh0aXRsZTogc3RyaW5nLCBpbm5lckJvZHk6IHN0cmluZywgbW9kYWxDbGFzc2VzOiBzdHJpbmcgPSAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJykge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KEFsZXJ0Qm94Q29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiBtb2RhbENsYXNzZXMsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVFbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgaW5uZXJCb2R5OiBpbm5lckJvZHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb2RhbFJlZi5jb250ZW50LnJlc3VsdC50b1Byb21pc2UoKSBhcyBQcm9taXNlPGJvb2xlYW4+O1xuICAgIH1cbn1cbiJdfQ==