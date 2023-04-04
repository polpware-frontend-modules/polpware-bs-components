import { __decorate, __metadata } from "tslib";
import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
let PromptModalComponent = class PromptModalComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.hideCancelBtn = false;
        this.hideConfirmBtn = false;
        this.hideCloseBtn = false;
        this.result = new Subject();
    }
    ngOnInit() {
    }
    close() {
        this.result.next(null);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm(value) {
        this.result.next(value);
        this.result.complete();
        this._bsModalRef.hide();
    }
};
PromptModalComponent.ctorParameters = () => [
    { type: BsModalRef }
];
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
export { PromptModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQTBCL0IsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFxQjdCLFlBQ3FCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBbkJuQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQTZCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQTs7WUFsQnFDLFVBQVU7O0FBcEJuQztJQUFSLEtBQUssRUFBRTs7MERBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzt5REFBOEI7QUFFN0I7SUFBUixLQUFLLEVBQUU7OzJEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTs7NERBQWlDO0FBRWhDO0lBQVIsS0FBSyxFQUFFOzswREFBK0I7QUFFOUI7SUFBUixLQUFLLEVBQUU7OzREQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs7NkRBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzs4REFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7OytEQUEyQjtBQUUxQjtJQUFSLEtBQUssRUFBRTs7bURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs7dURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzhCQUFTLEtBQUs7b0RBQWtCO0FBRTlCO0lBQVQsTUFBTSxFQUFFOzhCQUFTLE9BQU87b0RBQXlCO0FBbkJ6QyxvQkFBb0I7SUFMaEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyx1aENBQTRDOztLQUUvQyxDQUFDO3FDQXVCb0MsVUFBVTtHQXRCbkMsb0JBQW9CLENBd0NoQztTQXhDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS1oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9tcHRGb3JtSW5wdXRzIHtcbiAgICBhdXRvY29tcGxldGU/OiBzdHJpbmc7XG4gICAgZW5hYmxlRW50ZXI/OiBib29sZWFuO1xuXG4gICAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW47XG4gICAgaGlkZUNsb3NlQnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ29uZmlybUJ0bj86IGJvb2xlYW47XG5cbiAgICBjYW5jZWxCdG5MYWJlbD86IHN0cmluZztcbiAgICBjb25maXJtQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgY2FuY2VsQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICBjb25maXJtQnRuQ2xhc3Nlcz86IHN0cmluZztcblxuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtcHJvbXB0LW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9tcHQtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb21wdE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuYWJsZUVudGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBoaWRlQ2FuY2VsQnRuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGlkZUNvbmZpcm1CdG46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGhpZGVDbG9zZUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb25maXJtQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBjYW5jZWxCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlybUJ0bkNsYXNzZXM6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZmllbGRzOiBBcnJheTxJSW5wdXRGaWVsZFNwZWM+O1xuXG4gICAgQE91dHB1dCgpIHJlc3VsdDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gbmV3IFN1YmplY3QoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dChudWxsKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxufVxuIl19