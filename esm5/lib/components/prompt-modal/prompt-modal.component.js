import { __decorate, __metadata } from "tslib";
import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
var PromptModalComponent = /** @class */ (function () {
    function PromptModalComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    PromptModalComponent.prototype.ngOnInit = function () {
    };
    PromptModalComponent.prototype.close = function () {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.prototype.confirm = function (value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    };
    PromptModalComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "enableEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideCancelBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideConfirmBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PromptModalComponent.prototype, "hideCloseBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "cancelBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "confirmBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "cancelBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "confirmBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PromptModalComponent.prototype, "innerBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PromptModalComponent.prototype, "fields", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Subject)
    ], PromptModalComponent.prototype, "result", void 0);
    PromptModalComponent = __decorate([
        Component({
            selector: 'polp-bs-prompt-modal',
            template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\" *ngIf=\"!hideCloseBtn\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n    <polp-bs-prompt-form [fields]=\"fields\"\n                         [hideCancelBtn]=\"hideCancelBtn\"\n                         [hideSubmitBtn]=\"hideConfirmBtn\"\n                         [cancelBtnTxt]=\"cancelBtnLabel\"\n                         [submitBtnTxt]=\"confirmBtnLabel\"\n                         [cancelBtnClasses]=\"cancelBtnClasses\"\n                         [submitBtnClasses]=\"confirmBtnClasses\"\n                         [autocomplete]=\"autocomplete\"\n                         [enableEnter]=\"enableEnter\"\n                         (onCancel)=\"close()\"\n                         (onSave)=\"confirm($event)\">\n    </polp-bs-prompt-form>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], PromptModalComponent);
    return PromptModalComponent;
}());
export { PromptModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQTBCL0I7SUFxQkksOEJBQ3FCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBbkJuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkFqQmlDLFVBQVU7O0lBcEJuQztRQUFSLEtBQUssRUFBRTs7OERBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzs2REFBOEI7SUFFN0I7UUFBUixLQUFLLEVBQUU7OytEQUFnQztJQUMvQjtRQUFSLEtBQUssRUFBRTs7Z0VBQWlDO0lBRWhDO1FBQVIsS0FBSyxFQUFFOzs4REFBK0I7SUFFOUI7UUFBUixLQUFLLEVBQUU7O2dFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTs7aUVBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOztrRUFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7O21FQUEyQjtJQUUxQjtRQUFSLEtBQUssRUFBRTs7dURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTs7MkRBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2tDQUFTLEtBQUs7d0RBQWtCO0lBRTlCO1FBQVQsTUFBTSxFQUFFO2tDQUFTLE9BQU87d0RBQXlCO0lBbkJ6QyxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyx1aENBQTRDOztTQUUvQyxDQUFDO3lDQXVCb0MsVUFBVTtPQXRCbkMsb0JBQW9CLENBd0NoQztJQUFELDJCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0taGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXB0Rm9ybUlucHV0cyB7XG4gICAgYXV0b2NvbXBsZXRlPzogc3RyaW5nO1xuICAgIGVuYWJsZUVudGVyPzogYm9vbGVhbjtcblxuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDbG9zZUJ0bj86IGJvb2xlYW47XG4gICAgaGlkZUNvbmZpcm1CdG4/OiBib29sZWFuO1xuXG4gICAgY2FuY2VsQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkxhYmVsPzogc3RyaW5nO1xuICAgIGNhbmNlbEJ0bkNsYXNzZXM/OiBzdHJpbmc7XG4gICAgY29uZmlybUJ0bkNsYXNzZXM/OiBzdHJpbmc7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlubmVyQm9keTogc3RyaW5nO1xuICAgIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXByb21wdC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb21wdC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9tcHRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmFibGVFbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaGlkZUNhbmNlbEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGhpZGVDb25maXJtQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBoaWRlQ2xvc2VCdG46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNhbmNlbEJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FuY2VsQnRuQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbmZpcm1CdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlubmVyQm9keTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZpZWxkczogQXJyYXk8SUlucHV0RmllbGRTcGVjPjtcblxuICAgIEBPdXRwdXQoKSByZXN1bHQ6IFN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQobnVsbCk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0odmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cbn1cbiJdfQ==