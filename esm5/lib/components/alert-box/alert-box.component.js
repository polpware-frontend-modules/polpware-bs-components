import { __decorate, __metadata } from "tslib";
import { Component, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    AlertBoxComponent.prototype.ngOnInit = function () {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    };
    AlertBoxComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            this.confirm();
        }
    };
    AlertBoxComponent.prototype.close = function () {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.prototype.confirm = function () {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AlertBoxComponent.prototype, "hideNoBtn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "yesBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "noBtnLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "noBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "yesBtnClasses", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AlertBoxComponent.prototype, "enableEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlertBoxComponent.prototype, "innerBody", void 0);
    __decorate([
        HostListener('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AlertBoxComponent.prototype, "keyEvent", null);
    AlertBoxComponent = __decorate([
        Component({
            selector: 'polp-bs-alert-box',
            template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef])
    ], AlertBoxComponent);
    return AlertBoxComponent;
}());
export { AlertBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCwwQ0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUFrQkQ7SUFlSSwyQkFBNkIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFQM0MsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFLdEMsV0FBTSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR3pDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFFMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksZUFBZSxDQUFDO0lBQzdELENBQUM7SUFHRCxvQ0FBUSxHQUFSLFVBQVMsS0FBb0I7UUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkE3QnlDLFVBQVU7O0lBYjNDO1FBQVIsS0FBSyxFQUFFOzt3REFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7OzBEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7eURBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzsyREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OzREQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7MERBQThCO0lBRTdCO1FBQVIsS0FBSyxFQUFFOztvREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzt3REFBbUI7SUFpQjNCO1FBREMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzt5Q0FDekIsYUFBYTs7cURBSTVCO0lBaENRLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLG1yQkFBeUM7O1NBRTVDLENBQUM7eUNBZ0I0QyxVQUFVO09BZjNDLGlCQUFpQixDQThDN0I7SUFBRCx3QkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRCb3hJbnB1dHMge1xuICAgIGhpZGVOb0J0bj86IGJvb2xlYW47XG4gICAgeWVzQnRuTGFiZWw/OiBzdHJpbmc7XG4gICAgbm9CdG5MYWJlbD86IHN0cmluZztcbiAgICBub0J0bkNsYXNzZXM/OiBzdHJpbmc7XG4gICAgeWVzQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICBlbmFibGVFbnRlcj86IGJvb2xlYW47XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWFsZXJ0LWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBoaWRlTm9CdG46IGJvb2xlYW47XG4gICAgQElucHV0KCkgeWVzQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm9CdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgeWVzQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG5cbiAgICByZXN1bHQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVOb0J0biA9IHRoaXMuaGlkZU5vQnRuIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnllc0J0bkxhYmVsID0gdGhpcy55ZXNCdG5MYWJlbCB8fCAnWWVzJztcbiAgICAgICAgdGhpcy5ub0J0bkxhYmVsID0gdGhpcy5ub0J0bkxhYmVsIHx8ICdObyc7XG5cbiAgICAgICAgdGhpcy55ZXNCdG5DbGFzc2VzID0gdGhpcy55ZXNCdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMubm9CdG5DbGFzc2VzID0gdGhpcy5ub0J0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==